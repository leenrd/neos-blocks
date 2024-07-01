import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  banner: {
    key: "2.0-release",
    text: (
      <a
        href="https://www.npmjs.com/package/neos-blocks?activeTab=readme"
        target="_blank"
      >
        Neos is now in beta 🌟. Read more →
      </a>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Neos" />
      <meta property="og:description" content="Component library" />
    </>
  ),
  logo: <span>Neos Blocks</span>,
  project: {
    link: "https://github.com/leenrd/neos-blocks",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/github.com/leenrd/neos-blocks",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <span className="mb-7 text-semibold">Neos Blocks</span>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Leenard Zarate, All rights reserved.
        </p>
      </div>
    ),
  },
};

export default config;
