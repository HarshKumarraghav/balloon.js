import fs from "node:fs";
import path from "node:path";
import prompts from "prompts";
import spawn from "cross-spawn";
import minimist from "minimist";
import { copy } from "./Helpers/Copy.js";
import { fileURLToPath } from "node:url";
import { FormatTargetDirectory } from "./Helpers/FormatTargetDirectory.js";
import { red, bgGreen, lightGreen, green, bold } from "kolorist";
import { Framework, FrameworkVariant } from "../types/type";
import { FRAMEWORKS } from "./Frameworks/Framework.js";
import { isValidPackageName } from "./Helpers/IsValidPackageName.js";
import { toValidPackageName } from "./Helpers/ToValidPackageName.js";
import { isEmpty } from "./Helpers/IsEmpty.js";
import { emptyDir } from "./Helpers/EmptyDirectory.js";
import { pkgFromUserAgent } from "./Helpers/PkgFromUserAgent.js";
import { setupReactSwc } from "./Helpers/SetUpReactSwc.js";
import { ProjectInitiated, StartingLogMessage } from "./Helpers/Starter.js";

StartingLogMessage();

/* The code is using the `minimist` library to parse the command-line arguments passed to the script.
It creates an object `argv` that contains the parsed arguments. The `string: ["_"]` option tells
`minimist` to treat all arguments as strings, including the positional arguments (arguments without
a flag). */
const argv = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ["_"] });
const cwd = process.cwd();

/* The code is creating an array of templates by iterating over the `FRAMEWORKS` array. For each
framework, it includes the main framework name and its variants (if any). It then flattens the array
of templates using `reduce` and returns the final array of templates. */
const TEMPLATES = FRAMEWORKS.map((framework) => {
  const frameworkVariants = [
    [framework.name], // Include the main framework name
    ...(framework.variants
      ? framework.variants.map((v) => {
          const variantVariants = v.variants
            ? v.variants.map((vv) => vv.name)
            : [];
          return [v.name, ...variantVariants];
        })
      : []),
  ];

  return frameworkVariants.reduce((a, b) => a.concat(b), []);
}).reduce((a, b) => a.concat(b), []);

/* The `renameFiles` object is used to specify the renaming of certain files during the scaffolding
process. It maps the original file names to the desired file names. For example, `_gitignore` will
be renamed to `.gitignore` and `README-template.md` will be renamed to `README.md`. This allows for
customization of file names in the generated project. */
const renameFiles: Record<string, string | undefined> = {
  _gitignore: ".gitignore",
  "README-template.md": "README.md",
};

const defaultTargetDir = "balloon-app";

async function init() {
  const argTargetDir = FormatTargetDirectory(argv._[0]);
  const argTemplate = argv.template || argv.t;

  let targetDir = argTargetDir || defaultTargetDir;
  const getProjectName = () =>
    targetDir === "." ? path.basename(path.resolve()) : targetDir;

  let result: prompts.Answers<
    | "projectName"
    | "overwrite"
    | "packageName"
    | "framework"
    | "variant"
    | "subVarient"
    | "subVarient1"
  >;

  try {
    result = await prompts(
      [
        {
          type: argTargetDir ? null : "text",
          name: "projectName",
          message: bgGreen("Project name:"),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = FormatTargetDirectory(state.value) || defaultTargetDir;
          },
        },
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm",
          name: "overwrite",
          message: () =>
            (targetDir === "."
              ? "Current directory"
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        {
          type: (_, { overwrite }: { overwrite?: boolean }) => {
            if (overwrite === false) {
              throw new Error(red("✖") + " Operation cancelled");
            }
            return null;
          },
          name: "overwriteChecker",
        },
        {
          type: () => (isValidPackageName(getProjectName()) ? null : "text"),
          name: "packageName",
          message: bgGreen("Package name:"),
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) =>
            isValidPackageName(dir) || "Invalid package.json name",
        },
        {
          type:
            argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
          name: "framework",
          message:
            typeof argTemplate === "string" && !TEMPLATES.includes(argTemplate)
              ? bgGreen(
                  `"${argTemplate}" isn't a valid template. Please choose from below: `
                )
              : bgGreen("Select a framework:"),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color;
            return {
              title: frameworkColor(framework.display || framework.name),
              value: framework,
            };
          }),
        },
        {
          type: (framework: Framework) =>
            framework && framework.variants ? "select" : null,
          name: "variant",
          message: bgGreen("Select the variant:"),
          choices: (framework: Framework) =>
            framework.variants.map((variant) => {
              // if variant has variants, it's a sub-variant then we need to recursively call the function to get the sub-variant choices
              const variantColor = variant.color;
              if (variant.variants) {
                return {
                  title: variantColor(variant.display || variant.name),
                  value: variant,
                };
              }
              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name,
              };
            }),
        },
        {
          type: (variant: FrameworkVariant) =>
            variant && variant.variants ? "select" : null,
          name: "subVarient",
          message: (variant) => bgGreen(`Select the ${variant.variantType}:`),
          choices: (variant) =>
            variant.variants.map((subVariant: FrameworkVariant) => {
              const subVariantColor = subVariant.color;
              if (subVariant.variants) {
                return {
                  title: subVariantColor(subVariant.display || subVariant.name),
                  value: subVariant,
                };
              }
              return {
                title: subVariantColor(subVariant.display || subVariant.name),
                value: subVariant.name,
              };
            }),
        },
        {
          type: (subVariant: FrameworkVariant) =>
            subVariant && subVariant.variants ? "select" : null,
          name: "subVarient1",
          message: (subVariant) =>
            bgGreen(`Select the ${subVariant.variantType}:`),
          choices: (subVariant) =>
            subVariant.variants.map((sub: FrameworkVariant) => {
              const subVariantColors = sub.color;
              return {
                title: subVariantColors(sub.display || sub.name),
                value: sub.name,
              };
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(red("✖") + " Operation cancelled");
        },
      }
    );
  } catch (cancelled: any) {
    console.log("error message", cancelled.message);
    return;
  }

  // user choice associated with prompts
  const {
    framework,
    overwrite,
    packageName,
    variant,
    subVarient1,
    subVarient,
  } = result;

  const root = path.join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  }

  // determine template
  let template: string =
    subVarient1 || subVarient || variant || framework?.name || argTemplate;
  let isReactSwc = false;
  if (template.includes("-swc")) {
    isReactSwc = true;
    template = template.replace("-swc", "");
  }

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : "npm";
  const isYarn1 = pkgManager === "yarn" && pkgInfo?.version.startsWith("1.");

  // const { customCommand } =
  //   FRAMEWORKS.flatMap((f) => f.variants).find((v) => v.name === template) ??
  //   {};
  const findCustomCommand: any = (frameworks: Framework[], template: any) => {
    for (const framework of frameworks) {
      for (const variant of framework.variants) {
        if (variant.name === template) {
          if (variant.customCommand) {
            return variant.customCommand;
          }
        }
        if (variant.variants) {
          const result = findCustomCommand(variant.variants, template);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  };
  const customCommand = findCustomCommand(FRAMEWORKS, template);
  console.log("customCommand", customCommand);

  if (customCommand) {
    const customCommands = customCommand.split(/\s*&&\s*/); // Split by '&&' to handle multiple commands
    for (let i = 0; i < customCommands.length; i++) {
      const fullCustomCommand = customCommands[i]
        .replace(/^npm create /, () => {
          if (pkgManager === "bun") {
            return "bun x create-";
          }
          return `${pkgManager} create `;
        })
        .replace("@latest", () => (isYarn1 ? "" : "@latest"))
        .replace(/^npm exec/, () => {
          if (pkgManager === "pnpm") {
            return "pnpm dlx";
          }
          if (pkgManager === "yarn" && !isYarn1) {
            return "yarn dlx";
          }
          if (pkgManager === "bun") {
            return "bun x";
          }
          return "npm exec";
        });

      const [Cmd, ...secondArgs] = fullCustomCommand.split(" ");
      const replacedSecondArgs = secondArgs.map((arg: string) =>
        arg.replace("TARGET_DIR", targetDir)
      );
      if (i !== 0) {
        const { status } = spawn.sync(Cmd, replacedSecondArgs, {
          stdio: "inherit",
          cwd: targetDir,
        });

        if (status !== 0) {
          console.error(
            `Second command '${Cmd} ${replacedSecondArgs.join(" ")}' failed.`
          );
          process.exit(status ?? 0);
        }
      } else {
        const { status } = spawn.sync(Cmd, replacedSecondArgs, {
          stdio: "inherit",
        });

        if (status !== 0) {
          console.error(
            `Third command '${Cmd} ${replacedSecondArgs.join(" ")}' failed.`
          );
          process.exit(status ?? 0);
        }
      }
    }
    const cdProjectName = path.relative(cwd, root);

    ProjectInitiated();
    console.log(green(`\n Now run the following commands:\n`));
    if (root !== cwd) {
      console.log(
        bold(
          green(
            `  cd ${
              cdProjectName.includes(" ") ? `"${cdProjectName}"` : cdProjectName
            }`
          )
        )
      );
    }
    switch (pkgManager) {
      case "yarn":
        console.log(bold(green("  yarn")));
        console.log(bold(green("  yarn dev")));
        break;
      default:
        console.log(bold(green(`  ${pkgManager} install`)));
        console.log(bold(green(`  ${pkgManager} run dev`)));
        break;
    }
    console.log();
    process.exit(0);
  }

  console.log(lightGreen(`\n Initializing project in ${root}...`));

  const templateDir = path.resolve(
    fileURLToPath(import.meta.url),
    "../..",
    `Templates/balloon-${template}`
  );
  const write = (file: string, content?: string) => {
    const targetPath = path.join(root, renameFiles[file] ?? file);
    if (content) {
      fs.writeFileSync(targetPath, content);
    } else {
      copy(path.join(templateDir, file), targetPath);
    }
  };

  const files = fs.readdirSync(templateDir);
  for (const file of files.filter((f) => f !== "package.json")) {
    write(file);
  }

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), "utf-8")
  );

  pkg.name = packageName || getProjectName();

  write("package.json", JSON.stringify(pkg, null, 2) + "\n");

  if (isReactSwc) {
    setupReactSwc(root, template.endsWith("-ts"));
  }

  const cdProjectName = path.relative(cwd, root);

  ProjectInitiated();
  console.log(green(`\n Now run the following commands:\n`));
  if (root !== cwd) {
    console.log(
      bold(
        green(
          `  cd ${
            cdProjectName.includes(" ") ? `"${cdProjectName}"` : cdProjectName
          }`
        )
      )
    );
  }
  switch (pkgManager) {
    case "yarn":
      console.log(bold(green("  yarn")));
      console.log(bold(green("  yarn dev")));
      break;
    default:
      console.log(bold(green(`  ${pkgManager} install`)));
      console.log(bold(green(`  ${pkgManager} run dev`)));
      break;
  }
  console.log();
}

init().catch((e) => {
  console.error(e);
});
