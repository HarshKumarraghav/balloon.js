"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var node_url_1 = require("node:url");
var cross_spawn_1 = require("cross-spawn");
var minimist_1 = require("minimist");
var prompts_1 = require("prompts");
var kolorist_1 = require("kolorist");
// Avoids autoconversion to number of the project name by defining that the args
// non associated with an option ( _ ) needs to be parsed as a string. See #4606
var argv = (0, minimist_1["default"])(process.argv.slice(2), { string: ["_"] });
var cwd = process.cwd();
var FRAMEWORKS = [
    {
        name: "vanilla",
        display: "Vanilla",
        color: kolorist_1.yellow,
        variants: [
            {
                name: "vanilla-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "vanilla",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
        ]
    },
    {
        name: "vue",
        display: "Vue",
        color: kolorist_1.green,
        variants: [
            {
                name: "vue-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "vue",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
            {
                name: "custom-create-vue",
                display: "Customize with create-vue ↗",
                color: kolorist_1.green,
                customCommand: "npm create vue@latest TARGET_DIR"
            },
            {
                name: "custom-nuxt",
                display: "Nuxt ↗",
                color: kolorist_1.lightGreen,
                customCommand: "npm exec nuxi init TARGET_DIR"
            },
        ]
    },
    {
        name: "react",
        display: "React",
        color: kolorist_1.cyan,
        variants: [
            {
                name: "react-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "react-swc-ts",
                display: "TypeScript + SWC",
                color: kolorist_1.blue
            },
            {
                name: "react",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
            {
                name: "react-swc",
                display: "JavaScript + SWC",
                color: kolorist_1.yellow
            },
        ]
    },
    {
        name: "preact",
        display: "Preact",
        color: kolorist_1.magenta,
        variants: [
            {
                name: "preact-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "preact",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
        ]
    },
    {
        name: "lit",
        display: "Lit",
        color: kolorist_1.lightRed,
        variants: [
            {
                name: "lit-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "lit",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
        ]
    },
    {
        name: "svelte",
        display: "Svelte",
        color: kolorist_1.red,
        variants: [
            {
                name: "svelte-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "svelte",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
            {
                name: "custom-svelte-kit",
                display: "SvelteKit ↗",
                color: kolorist_1.red,
                customCommand: "npm create svelte@latest TARGET_DIR"
            },
        ]
    },
    {
        name: "solid",
        display: "Solid",
        color: kolorist_1.blue,
        variants: [
            {
                name: "solid-ts",
                display: "TypeScript",
                color: kolorist_1.blue
            },
            {
                name: "solid",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
        ]
    },
    {
        name: "qwik",
        display: "Qwik",
        color: kolorist_1.lightBlue,
        variants: [
            {
                name: "qwik-ts",
                display: "TypeScript",
                color: kolorist_1.lightBlue
            },
            {
                name: "qwik",
                display: "JavaScript",
                color: kolorist_1.yellow
            },
            {
                name: "custom-qwik-city",
                display: "QwikCity ↗",
                color: kolorist_1.lightBlue,
                customCommand: "npm create qwik@latest basic TARGET_DIR"
            },
        ]
    },
    {
        name: "others",
        display: "Others",
        color: kolorist_1.reset,
        variants: [
            {
                name: "create-vite-extra",
                display: "create-vite-extra ↗",
                color: kolorist_1.reset,
                customCommand: "npm create vite-extra@latest TARGET_DIR"
            },
            {
                name: "create-electron-vite",
                display: "create-electron-vite ↗",
                color: kolorist_1.reset,
                customCommand: "npm create electron-vite@latest TARGET_DIR"
            },
        ]
    },
];
var TEMPLATES = FRAMEWORKS.map(function (f) { return (f.variants && f.variants.map(function (v) { return v.name; })) || [f.name]; }).reduce(function (a, b) { return a.concat(b); }, []);
var renameFiles = {
    _gitignore: ".gitignore"
};
var defaultTargetDir = "vite-project";
function init() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var argTargetDir, argTemplate, targetDir, getProjectName, result, cancelled_1, framework, overwrite, packageName, variant, root, template, isReactSwc, pkgInfo, pkgManager, isYarn1, customCommand, fullCustomCommand, _b, command, args, replacedArgs, status_1, templateDir, write, files, _i, _c, file, pkg, cdProjectName;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    argTargetDir = formatTargetDir(argv._[0]);
                    argTemplate = argv.template || argv.t;
                    targetDir = argTargetDir || defaultTargetDir;
                    getProjectName = function () {
                        return targetDir === "." ? node_path_1["default"].basename(node_path_1["default"].resolve()) : targetDir;
                    };
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, prompts_1["default"])([
                            {
                                type: argTargetDir ? null : "text",
                                name: "projectName",
                                message: (0, kolorist_1.reset)("Project name:"),
                                initial: defaultTargetDir,
                                onState: function (state) {
                                    targetDir = formatTargetDir(state.value) || defaultTargetDir;
                                }
                            },
                            {
                                type: function () {
                                    return !node_fs_1["default"].existsSync(targetDir) || isEmpty(targetDir) ? null : "confirm";
                                },
                                name: "overwrite",
                                message: function () {
                                    return (targetDir === "."
                                        ? "Current directory"
                                        : "Target directory \"".concat(targetDir, "\"")) +
                                        " is not empty. Remove existing files and continue?";
                                }
                            },
                            {
                                type: function (_, _a) {
                                    var overwrite = _a.overwrite;
                                    if (overwrite === false) {
                                        throw new Error((0, kolorist_1.red)("✖") + " Operation cancelled");
                                    }
                                    return null;
                                },
                                name: "overwriteChecker"
                            },
                            {
                                type: function () { return (isValidPackageName(getProjectName()) ? null : "text"); },
                                name: "packageName",
                                message: (0, kolorist_1.reset)("Package name:"),
                                initial: function () { return toValidPackageName(getProjectName()); },
                                validate: function (dir) {
                                    return isValidPackageName(dir) || "Invalid package.json name";
                                }
                            },
                            {
                                type: argTemplate && TEMPLATES.includes(argTemplate) ? null : "select",
                                name: "framework",
                                message: typeof argTemplate === "string" && !TEMPLATES.includes(argTemplate)
                                    ? (0, kolorist_1.reset)("\"".concat(argTemplate, "\" isn't a valid template. Please choose from below: "))
                                    : (0, kolorist_1.reset)("Select a framework:"),
                                initial: 0,
                                choices: FRAMEWORKS.map(function (framework) {
                                    var frameworkColor = framework.color;
                                    return {
                                        title: frameworkColor(framework.display || framework.name),
                                        value: framework
                                    };
                                })
                            },
                            {
                                type: function (framework) {
                                    return framework && framework.variants ? "select" : null;
                                },
                                name: "variant",
                                message: (0, kolorist_1.reset)("Select a variant:"),
                                choices: function (framework) {
                                    return framework.variants.map(function (variant) {
                                        var variantColor = variant.color;
                                        return {
                                            title: variantColor(variant.display || variant.name),
                                            value: variant.name
                                        };
                                    });
                                }
                            },
                        ], {
                            onCancel: function () {
                                throw new Error((0, kolorist_1.red)("✖") + " Operation cancelled");
                            }
                        })];
                case 2:
                    result = _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    cancelled_1 = _d.sent();
                    console.log(cancelled_1.message);
                    return [2 /*return*/];
                case 4:
                    framework = result.framework, overwrite = result.overwrite, packageName = result.packageName, variant = result.variant;
                    root = node_path_1["default"].join(cwd, targetDir);
                    if (overwrite) {
                        emptyDir(root);
                    }
                    else if (!node_fs_1["default"].existsSync(root)) {
                        node_fs_1["default"].mkdirSync(root, { recursive: true });
                    }
                    template = variant || (framework === null || framework === void 0 ? void 0 : framework.name) || argTemplate;
                    isReactSwc = false;
                    if (template.includes("-swc")) {
                        isReactSwc = true;
                        template = template.replace("-swc", "");
                    }
                    pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
                    pkgManager = pkgInfo ? pkgInfo.name : "npm";
                    isYarn1 = pkgManager === "yarn" && (pkgInfo === null || pkgInfo === void 0 ? void 0 : pkgInfo.version.startsWith("1."));
                    customCommand = ((_a = FRAMEWORKS.flatMap(function (f) { return f.variants; }).find(function (v) { return v.name === template; })) !== null && _a !== void 0 ? _a : {}).customCommand;
                    if (customCommand) {
                        fullCustomCommand = customCommand
                            .replace(/^npm create /, function () {
                            // `bun create` uses it's own set of templates,
                            // the closest alternative is using `bun x` directly on the package
                            if (pkgManager === "bun") {
                                return "bun x create-";
                            }
                            return "".concat(pkgManager, " create ");
                        })
                            // Only Yarn 1.x doesn't support `@version` in the `create` command
                            .replace("@latest", function () { return (isYarn1 ? "" : "@latest"); })
                            .replace(/^npm exec/, function () {
                            // Prefer `pnpm dlx`, `yarn dlx`, or `bun x`
                            if (pkgManager === "pnpm") {
                                return "pnpm dlx";
                            }
                            if (pkgManager === "yarn" && !isYarn1) {
                                return "yarn dlx";
                            }
                            if (pkgManager === "bun") {
                                return "bun x";
                            }
                            // Use `npm exec` in all other cases,
                            // including Yarn 1.x and other custom npm clients.
                            return "npm exec";
                        });
                        _b = fullCustomCommand.split(" "), command = _b[0], args = _b.slice(1);
                        replacedArgs = args.map(function (arg) {
                            return arg.replace("TARGET_DIR", targetDir);
                        });
                        status_1 = cross_spawn_1["default"].sync(command, replacedArgs, {
                            stdio: "inherit"
                        }).status;
                        process.exit(status_1 !== null && status_1 !== void 0 ? status_1 : 0);
                    }
                    console.log("\nScaffolding project in ".concat(root, "..."));
                    templateDir = node_path_1["default"].resolve((0, node_url_1.fileURLToPath)(import.meta.url), "../..", "template-".concat(template));
                    write = function (file, content) {
                        var _a;
                        var targetPath = node_path_1["default"].join(root, (_a = renameFiles[file]) !== null && _a !== void 0 ? _a : file);
                        if (content) {
                            node_fs_1["default"].writeFileSync(targetPath, content);
                        }
                        else {
                            copy(node_path_1["default"].join(templateDir, file), targetPath);
                        }
                    };
                    files = node_fs_1["default"].readdirSync(templateDir);
                    for (_i = 0, _c = files.filter(function (f) { return f !== "package.json"; }); _i < _c.length; _i++) {
                        file = _c[_i];
                        write(file);
                    }
                    pkg = JSON.parse(node_fs_1["default"].readFileSync(node_path_1["default"].join(templateDir, "package.json"), "utf-8"));
                    pkg.name = packageName || getProjectName();
                    write("package.json", JSON.stringify(pkg, null, 2) + "\n");
                    if (isReactSwc) {
                        setupReactSwc(root, template.endsWith("-ts"));
                    }
                    cdProjectName = node_path_1["default"].relative(cwd, root);
                    console.log("\nDone. Now run:\n");
                    if (root !== cwd) {
                        console.log("  cd ".concat(cdProjectName.includes(" ") ? "\"".concat(cdProjectName, "\"") : cdProjectName));
                    }
                    switch (pkgManager) {
                        case "yarn":
                            console.log("  yarn");
                            console.log("  yarn dev");
                            break;
                        default:
                            console.log("  ".concat(pkgManager, " install"));
                            console.log("  ".concat(pkgManager, " run dev"));
                            break;
                    }
                    console.log();
                    return [2 /*return*/];
            }
        });
    });
}
function formatTargetDir(targetDir) {
    return targetDir === null || targetDir === void 0 ? void 0 : targetDir.trim().replace(/\/+$/g, "");
}
function copy(src, dest) {
    var stat = node_fs_1["default"].statSync(src);
    if (stat.isDirectory()) {
        copyDir(src, dest);
    }
    else {
        node_fs_1["default"].copyFileSync(src, dest);
    }
}
function isValidPackageName(projectName) {
    return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName);
}
function toValidPackageName(projectName) {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z\d\-~]+/g, "-");
}
function copyDir(srcDir, destDir) {
    node_fs_1["default"].mkdirSync(destDir, { recursive: true });
    for (var _i = 0, _a = node_fs_1["default"].readdirSync(srcDir); _i < _a.length; _i++) {
        var file = _a[_i];
        var srcFile = node_path_1["default"].resolve(srcDir, file);
        var destFile = node_path_1["default"].resolve(destDir, file);
        copy(srcFile, destFile);
    }
}
function isEmpty(path) {
    var files = node_fs_1["default"].readdirSync(path);
    return files.length === 0 || (files.length === 1 && files[0] === ".git");
}
function emptyDir(dir) {
    if (!node_fs_1["default"].existsSync(dir)) {
        return;
    }
    for (var _i = 0, _a = node_fs_1["default"].readdirSync(dir); _i < _a.length; _i++) {
        var file = _a[_i];
        if (file === ".git") {
            continue;
        }
        node_fs_1["default"].rmSync(node_path_1["default"].resolve(dir, file), { recursive: true, force: true });
    }
}
function pkgFromUserAgent(userAgent) {
    if (!userAgent)
        return undefined;
    var pkgSpec = userAgent.split(" ")[0];
    var pkgSpecArr = pkgSpec.split("/");
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1]
    };
}
function setupReactSwc(root, isTs) {
    editFile(node_path_1["default"].resolve(root, "package.json"), function (content) {
        return content.replace(/"@vitejs\/plugin-react": ".+?"/, "\"@vitejs/plugin-react-swc\": \"^3.3.2\"");
    });
    editFile(node_path_1["default"].resolve(root, "vite.config.".concat(isTs ? "ts" : "js")), function (content) {
        return content.replace("@vitejs/plugin-react", "@vitejs/plugin-react-swc");
    });
}
function editFile(file, callback) {
    var content = node_fs_1["default"].readFileSync(file, "utf-8");
    node_fs_1["default"].writeFileSync(file, callback(content), "utf-8");
}
init()["catch"](function (e) {
    console.error(e);
});
