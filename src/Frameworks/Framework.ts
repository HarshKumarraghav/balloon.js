import {
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
    display: "Nextjs",
    color: lightBlue,
    variants: [
      {
        name: "next-app-ts",
        display: "Nextjs App Router",
        color: blue,
        variants: [
          {
            name: "next-app-ts",
            display: "TypeScript",
            color: blue,
            variants: [
              {
                name: "next-app-ts",
                display: "default",
                color: blue,
              },
              {
                name: "next-app-tw-ts",
                display: "Tailwind",
                color: blue,
              },
            ],
          },
          {
            name: "next-app-js",
            display: "JavaScript",
            color: yellow,
            variants: [
              {
                name: "next-app-js",
                display: "default",
                color: yellow,
              },
              {
                name: "next-app-tw-js",
                display: "Tailwind",
                color: yellow,
              },
            ],
          },
        ],
      },
      {
        name: "next-default-js",
        display: "Nextjs Default Router",
        color: blue,
        variants: [
          {
            name: "next-default-ts",
            display: "TypeScript",
            color: blue,
            variants: [
              {
                name: "next-default-ts",
                display: "default",
                color: blue,
              },
              {
                name: "next-default-tw-ts",

                display: "Tailwind",
                color: blue,
              },
            ],
          },
          {
            name: "next-default-js",
            display: "JavaScript",
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
                color: yellow,
              },
            ],
          },
        ],
      },
      {
        name: "next-js",
        display: "Customize with create-next-app ↗",
        color: green,
        customCommand: "npm create next-app TARGET_DIR",
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
