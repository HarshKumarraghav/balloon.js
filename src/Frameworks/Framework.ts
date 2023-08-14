import {
  bgGray,
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from "kolorist";
import { Framework } from "../../types/type";
export const FRAMEWORKS: Framework[] = [
  {
    name: "next",
    display: "Next",
    color: lightBlue,
    variants: [
      {
        name: "next-app-ts",
        display: "Nextjs App Router",
        variantType: "Language",
        color: magenta,
        variants: [
          {
            name: "next-app-ts",
            variantType: "UI Library/Framework",
            display: "TypeScript",
            color: blue,
            variants: [
              {
                name: "next-app-ts",
                display: "default",
                color: lightGreen,
              },
              {
                name: "next-app-tw-ts",
                display: "Tailwind",
                color: lightBlue,
                customCommand:
                  "npx create-next-app@latest TARGET_DIR --typescript --tailwind --eslint --app",
              },
              {
                name: "next-ts",
                display: "Tailwind + SchadCn UI (recommended) ↗",
                color: bgGray,
                customCommand:
                  "npx create-next-app@latest TARGET_DIR --typescript --tailwind --eslint --app  && npx shadcn-ui@latest init",
              },
              {
                name: "next-app-cui-ts",
                display: "ChakraUI",
                color: cyan,
              },
            ],
          },
          {
            name: "next-app-js",
            display: "JavaScript",
            variantType: "UI Library/Framework",
            color: yellow,
            variants: [
              {
                name: "next-app-js",
                display: "default",
                color: lightGreen,
              },
              {
                name: "next-app-tw-js",
                display: "Tailwind",
                color: lightBlue,
              },
              {
                name: "next-js",
                display: "Tailwind + SchadCn UI (recommended) ↗",
                color: bgGray,
                customCommand:
                  "npx create-next-app@latest TARGET_DIR --js --tailwind --eslint --app && npx shadcn-ui@latest init",
              },
              {
                name: "next-app-cui-js",
                display: "ChakraUI",
                color: cyan,
              },
            ],
          },
        ],
      },
      {
        name: "next-default-js",
        display: "Nextjs Default Router",
        variantType: "Language",
        color: lightRed,
        variants: [
          {
            name: "next-default-ts",
            display: "TypeScript",
            variantType: "UI Library/Framework",
            color: blue,
            variants: [
              {
                name: "next-default-ts",
                display: "default",
                color: lightGreen,
              },
              {
                name: "next-default-tw-ts",
                display: "Tailwind",
                color: lightBlue,
              },
              {
                name: "next-default-ts",
                display: "Tailwind + SchadCn UI (recommended) ↗",
                color: bgGray,
                customCommand:
                  "npx create-next-app@latest TARGET_DIR --typescript --tailwind --eslint  && npx shadcn-ui@latest init",
              },
              {
                name: "next-default-cui-ts",
                display: "ChakraUI",
                color: cyan,
              },
            ],
          },
          {
            name: "next-default-js",
            display: "JavaScript",
            variantType: "UI Library/Framework",
            color: yellow,
            variants: [
              {
                name: "next-default-js",
                display: "default",
                color: yellow,
              },
              {
                name: "next-default-tw-js",
                display: "Tailwind",
                color: lightBlue,
              },

              {
                name: "next-default-js",
                display: "Tailwind + SchadCn UI (recommended) ↗",
                color: bgGray,
                customCommand:
                  "npx create-next-app@latest TARGET_DIR --js --tailwind --eslint && npx shadcn-ui@latest init",
              },
              {
                name: "next-default-cui-js",
                display: "ChakraUI",
                color: cyan,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "react",
    display: "React",
    color: cyan,
    variants: [
      {
        name: "react-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "react-swc-ts",
        display: "TypeScript + SWC",
        color: blue,
      },
      {
        name: "react",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "react-swc",
        display: "JavaScript + SWC",
        color: yellow,
      },
    ],
  },
  {
    name: "vanilla",
    display: "Vanilla",
    color: yellow,
    variants: [
      {
        name: "vanilla-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "vanilla",
        display: "JavaScript",
        color: yellow,
      },
    ],
  },
  {
    name: "vue",
    display: "Vue",
    color: green,
    variants: [
      {
        name: "vue-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "vue",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "custom-create-vue",
        display: "Customize with create-vue ↗",
        color: green,
        customCommand: "npm create vue@latest TARGET_DIR",
      },
      {
        name: "custom-nuxt",
        display: "Nuxt ↗",
        color: lightGreen,
        customCommand: "npm exec nuxi init TARGET_DIR",
      },
    ],
  },
  {
    name: "preact",
    display: "Preact",
    color: magenta,
    variants: [
      {
        name: "preact-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "preact",
        display: "JavaScript",
        color: yellow,
      },
    ],
  },
  {
    name: "lit",
    display: "Lit",
    color: lightRed,
    variants: [
      {
        name: "lit-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "lit",
        display: "JavaScript",
        color: yellow,
      },
    ],
  },
  {
    name: "svelte",
    display: "Svelte",
    color: red,
    variants: [
      {
        name: "svelte-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "svelte",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "custom-svelte-kit",
        display: "SvelteKit ↗",
        color: red,
        customCommand: "npm create svelte@latest TARGET_DIR",
      },
    ],
  },
  {
    name: "solid",
    display: "Solid",
    color: blue,
    variants: [
      {
        name: "solid-ts",
        display: "TypeScript",
        color: blue,
      },
      {
        name: "solid",
        display: "JavaScript",
        color: yellow,
      },
    ],
  },
  {
    name: "qwik",
    display: "Qwik",
    color: lightBlue,
    variants: [
      {
        name: "qwik-ts",
        display: "TypeScript",
        color: lightBlue,
      },
      {
        name: "qwik",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "custom-qwik-city",
        display: "QwikCity ↗",
        color: lightBlue,
        customCommand: "npm create qwik@latest basic TARGET_DIR",
      },
    ],
  },
  {
    name: "others",
    display: "Others",
    color: reset,
    variants: [
      {
        name: "create-vite-extra",
        display: "create-vite-extra ↗",
        color: reset,
        customCommand: "npm create vite-extra@latest TARGET_DIR",
      },
      {
        name: "create-electron-vite",
        display: "create-electron-vite ↗",
        color: reset,
        customCommand: "npm create electron-vite@latest TARGET_DIR",
      },
    ],
  },
];
