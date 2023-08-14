import { blue, lightGreen, lightBlue, lightRed, bold, italic } from "kolorist";
import { FRAMEWORKS } from "../Frameworks/Framework.js";
import symbols from "log-symbols";
import gradient from "gradient-string";
/**
 * The `StartingLogMessage` function logs a welcome message and instructions for using the Balloon CLI
 * tool, including framework and UI library options.
 */
export const StartingLogMessage = () => {
  const repoLink = `${symbols.info}  https://github.com/HarshKumarraghav/create-balloon`;
  const githubUser = `${symbols.info}  @HarshKumarraghav`;
  const UILibrary =
    blue(" * Tailwind") +
    " " +
    lightGreen(" * Tailwind + SchadCn UI") +
    " " +
    lightBlue(" * ChakraUI") +
    " " +
    lightRed(" * AntDesign (upcoming...)") +
    " " +
    lightBlue(" *  MaterialUI (upcoming...)");

  console.log();
  console.log();
  console.log();
  console.log(
    bold(
      gradient.passion(
        "\u2580\u2588\u2588 \u2580\u2588\u2588\u2580  \u2580\u2588\u2580         \u2580\u2588\u2588                                          \u2584              \u2580\u2588\u2588              \u2580\u2588\u2588  \u2580\u2588\u2588                                   \u2588\u2588        \r\n \u2580\u2588\u2584 \u2580\u2588\u2584  \u2584\u2580    \u2584\u2584\u2584\u2584   \u2588\u2588    \u2584\u2584\u2584\u2584    \u2584\u2584\u2584   \u2584\u2584 \u2584\u2584 \u2584\u2584     \u2584\u2584\u2584\u2584     \u2584\u2588\u2588\u2584    \u2584\u2584\u2584       \u2588\u2588 \u2584\u2584\u2584   \u2584\u2584\u2584\u2584    \u2588\u2588   \u2588\u2588    \u2584\u2584\u2584     \u2584\u2584\u2584   \u2584\u2584 \u2584\u2584\u2584          \u2584\u2584\u2584  \u2584\u2584\u2584\u2584  \r\n  \u2588\u2588  \u2588\u2588  \u2588   \u2584\u2588\u2584\u2584\u2584\u2588\u2588  \u2588\u2588  \u2584\u2588   \u2580\u2580 \u2584\u2588  \u2580\u2588\u2584  \u2588\u2588 \u2588\u2588 \u2588\u2588  \u2584\u2588\u2584\u2584\u2584\u2588\u2588     \u2588\u2588   \u2584\u2588  \u2580\u2588\u2584     \u2588\u2588\u2580  \u2588\u2588 \u2580\u2580 \u2584\u2588\u2588   \u2588\u2588   \u2588\u2588  \u2584\u2588  \u2580\u2588\u2584 \u2584\u2588  \u2580\u2588\u2584  \u2588\u2588  \u2588\u2588          \u2588\u2588 \u2588\u2588\u2584 \u2580  \r\n   \u2588\u2588\u2588 \u2588\u2588\u2588    \u2588\u2588       \u2588\u2588  \u2588\u2588      \u2588\u2588   \u2588\u2588  \u2588\u2588 \u2588\u2588 \u2588\u2588  \u2588\u2588          \u2588\u2588   \u2588\u2588   \u2588\u2588     \u2588\u2588    \u2588 \u2584\u2588\u2580 \u2588\u2588   \u2588\u2588   \u2588\u2588  \u2588\u2588   \u2588\u2588 \u2588\u2588   \u2588\u2588  \u2588\u2588  \u2588\u2588          \u2588\u2588 \u2584 \u2580\u2588\u2584\u2584 \r\n    \u2588   \u2588      \u2580\u2588\u2584\u2584\u2584\u2580 \u2584\u2588\u2588\u2584  \u2580\u2588\u2584\u2584\u2584\u2580  \u2580\u2588\u2584\u2584\u2588\u2580 \u2584\u2588\u2588 \u2588\u2588 \u2588\u2588\u2584  \u2580\u2588\u2584\u2584\u2584\u2580     \u2580\u2588\u2584\u2580  \u2580\u2588\u2584\u2584\u2588\u2580     \u2580\u2588\u2584\u2584\u2584\u2580  \u2580\u2588\u2584\u2584\u2580\u2588\u2580 \u2584\u2588\u2588\u2584 \u2584\u2588\u2588\u2584  \u2580\u2588\u2584\u2584\u2588\u2580  \u2580\u2588\u2584\u2584\u2588\u2580 \u2584\u2588\u2588\u2584 \u2588\u2588\u2584         \u2588\u2588 \u2588\u2580\u2584\u2584\u2588\u2580 \r\n                                                                                                                                       \u2588\u2588  \u2584\u2584 \u2588\u2580        \r\n                                                                                                                                            \u2580\u2580          \r\n"
      )
    )
  );
  console.log(
    gradient.passion(
      "__________________________________________________________________________________________________________________________________________________________"
    )
  );
  console.log();
  console.log(
    gradient.passion(
      "                 \u2588\u2593\u2592\u2592\u2591\u2591\u2591 A single CLI to create a project with your favorite framework and UI library in a matter of seconds! \u2591\u2591\u2591\u2592\u2592\u2593\u2588"
    )
  );
  console.log(
    gradient.passion(
      "__________________________________________________________________________________________________________________________________________________________"
    )
  );
  console.log();
  console.log();
  console.log();
  console.log(
    bold(
      lightGreen(
        "All you need to do is select a framework and you are good to go!"
      )
    )
  );
  console.log();
  const frameworkString = FRAMEWORKS.map((framework) => {
    const frameworkNameString = framework.color(` *  ${framework.display}`);
    return frameworkNameString;
  });
  console.log(frameworkString.join(" "));
  console.log();
  console.log(
    bold(lightGreen("You can also choose your favorite UI library:"))
  );
  console.log(
    italic(
      lightRed("Note: Few UI Library/Framework support is under development")
    )
  );

  console.log();
  console.log(UILibrary);
  console.log();
  console.log(
    lightBlue(
      "__________________________________________________________________________________________________________________________________________________________"
    )
  );
  console.log();
  console.log(lightGreen("Give this repo a ⭐️ if you like it!"));
  console.log(lightBlue(repoLink));
  console.log(lightGreen("Follow me on GitHub for more such projects!"));
  console.log(lightBlue(githubUser));
  console.log();
  console.log(
    lightBlue(
      "__________________________________________________________________________________________________________________________________________________________"
    )
  );
  console.log();

  console.log(
    gradient.passion(
      "\r\n\u2591\u2588\u2500\u2500\u2500 \u2588\u2580\u2580 \u2580\u2580\u2588\u2580\u2580 \u2588 \u2588\u2580\u2580 \u3000 \u2588\u2580\u2580\u2580 \u2588\u2580\u2580 \u2580\u2580\u2588\u2580\u2580 \u3000 \u2588\u2580\u2580 \u2580\u2580\u2588\u2580\u2580 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2580\u2580\u2588\u2580\u2580 \u2588\u2580\u2580 \u2588\u2580\u2580\u2584 \u2588 \r\n\u2591\u2588\u2500\u2500\u2500 \u2588\u2580\u2580 \u2500\u2500\u2588\u2500\u2500 \u2500 \u2580\u2580\u2588 \u3000 \u2588\u2500\u2580\u2588 \u2588\u2580\u2580 \u2500\u2500\u2588\u2500\u2500 \u3000 \u2580\u2580\u2588 \u2500\u2500\u2588\u2500\u2500 \u2588\u2584\u2584\u2588 \u2588\u2584\u2584\u2580 \u2500\u2500\u2588\u2500\u2500 \u2588\u2580\u2580 \u2588\u2500\u2500\u2588 \u2580 \r\n\u2591\u2588\u2584\u2584\u2588 \u2580\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \u2500 \u2580\u2580\u2580 \u3000 \u2580\u2580\u2580\u2580 \u2580\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \u3000 \u2580\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \u2580\u2500\u2500\u2580 \u2580\u2500\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \u2580\u2580\u2580 \u2580\u2580\u2580\u2500 \u2584" +
        "🎈"
    )
  );

  console.log();
  console.log();
};

/**
 * The function `ProjectInitiated` creates a banner with the text "Project Initialized!" using the
 * figlet library and logs it to the console.
 */
export const ProjectInitiated = () => {
  console.log();

  console.log(
    gradient.passion(
      "\r\n\u2591\u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2588\u2500\u2500 \u2588\u2500\u2500 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2584 \u3000 \u2591\u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2588\u2580\u2580\u2588 \u2500\u2500\u2580 \u2588\u2580\u2580 \u2588\u2580\u2580 \u2580\u2580\u2588\u2580\u2580 \r\n\u2591\u2588\u2580\u2580\u2584 \u2588\u2584\u2584\u2588 \u2588\u2500\u2500 \u2588\u2500\u2500 \u2588\u2500\u2500\u2588 \u2588\u2500\u2500\u2588 \u2588\u2500\u2500\u2588 \u3000 \u2591\u2588\u2584\u2584\u2588 \u2588\u2584\u2584\u2580 \u2588\u2500\u2500\u2588 \u2500\u2500\u2588 \u2588\u2580\u2580 \u2588\u2500\u2500 \u2500\u2500\u2588\u2500\u2500 \r\n\u2591\u2588\u2584\u2584\u2588 \u2580\u2500\u2500\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580\u2580 \u2580\u2580\u2580\u2580 \u2580\u2500\u2500\u2580 \u3000 \u2591\u2588\u2500\u2500\u2500 \u2580\u2500\u2580\u2580 \u2580\u2580\u2580\u2580 \u2588\u2584\u2588 \u2580\u2580\u2580 \u2580\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \r\n\r\n\u2580\u2588\u2580 \u2588\u2580\u2580\u2584 \u2500\u2580\u2500 \u2580\u2580\u2588\u2580\u2580 \u2500\u2580\u2500 \u2588\u2580\u2580\u2588 \u2588\u2500\u2500 \u2500\u2580\u2500 \u2580\u2580\u2588 \u2588\u2580\u2580 \u2588\u2580\u2580\u2584 \u2588 \r\n\u2591\u2588\u2500 \u2588\u2500\u2500\u2588 \u2580\u2588\u2580 \u2500\u2500\u2588\u2500\u2500 \u2580\u2588\u2580 \u2588\u2584\u2584\u2588 \u2588\u2500\u2500 \u2580\u2588\u2580 \u2584\u2580\u2500 \u2588\u2580\u2580 \u2588\u2500\u2500\u2588 \u2580 \r\n\u2584\u2588\u2584 \u2580\u2500\u2500\u2580 \u2580\u2580\u2580 \u2500\u2500\u2580\u2500\u2500 \u2580\u2580\u2580 \u2580\u2500\u2500\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580 \u2580\u2580\u2580\u2500 \u2584"
    )
  );

  console.log();
};
