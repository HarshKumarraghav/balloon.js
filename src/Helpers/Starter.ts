import {
  blue,
  lightGreen,
  lightBlue,
  lightRed,
  yellow,
  bold,
  italic,
} from "kolorist";
import { FRAMEWORKS } from "../Frameworks/Framework.js";
import symbols from "log-symbols";
import gradient from "gradient-string";
/**
 * The `StartingLogMessage` function logs a welcome message and instructions for using the Balloon CLI
 * tool, including framework and UI library options.
 */
export const StartingLogMessage = () => {
  const repoLink = `${symbols.info} https://github.com/HarshKumarraghav/create-balloon`;
  const githubUser = `${symbols.info} @HarshKumarraghav`;
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

  console.log(bold(gradient.pastel("Welcome to Balloon.js!" + "🎈")));

  console.log(
    lightBlue(
      "________________________________________________________________________________________________________"
    )
  );
  console.log();
  console.log(
    yellow(
      "           A Single CLI for all your frontend frameworks and UI libraries!                         "
    )
  );
  console.log(
    lightBlue(
      "________________________________________________________________________________________________________"
    )
  );
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
      "________________________________________________________________________________________________________"
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
      "________________________________________________________________________________________________________"
    )
  );
  console.log();

  console.log(lightRed("Let's get started!" + "🎈"));

  console.log();
  console.log();
};

/**
 * The function `ProjectInitiated` creates a banner with the text "Project Initialized!" using the
 * figlet library and logs it to the console.
 */
export const ProjectInitiated = () => {
  console.log();

  console.log(gradient.mind("Balloon Project Initialized!" + "🎈"));

  console.log();
};
