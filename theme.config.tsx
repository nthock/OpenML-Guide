import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="/logo/logo.png" width={33} />
      <span style={{ marginLeft: ".5em" , fontSize:"18px", display:"flex"}}>
        {/* <img src="/logo/logoName.png" width={180} /> */}
        <span className="logoName">OpenML Guide </span> 
        {/* <span className="subName" style={{ marginLeft: ".2em"}} >Guidebook </span>  */}
      </span>
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    // { locale: "zh", text: "中文" },
    // { locale: "ru", text: "Русский" },
    // { locale: "jp", text: "日本語" },
    // { locale: "tr", text: "Türkçe" },
    // { locale: "kr", text: "한국어" },
    // { locale: "pt", text: "Português" },
    // { locale: "es", text: "Español" },
  ],
  head: function UseHead() {
    const { title } = useConfig();
    return (
      <>
        <link rel="icon" href="/logo/logo.png" />
      </>
    );
  },
  project: {
    link: "https://github.com/severus27/AI-Portal-Gun",
  },
  chat: {
    link: "https://discord.gg/tQU9xfcEyE",
  },
  navbar: {
    extraContent:
    <Link to="https://twitter.com/OpenMLGuide" className="twitter_icon">
      <FaXTwitter/>
    </Link>
  },
  docsRepositoryBase: "https://github.com/severus27/AI-Portal-Gun/tree/main/",
  footer: {
    text: null,
    component: null,
  },
  feedback: {
    useLink: () => "https://github.com/severus27/AI-Portal-Gun/issues/new",
    content: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/icons/github.png" width={18} />
          <span> Report an issue </span>
        </span>
      </>
    ),
  },
  editLink: {
    text: (
      <>
        <span style={{ display: "flex", gap: "10px" }}>
          <img src="/icons/edit_icon.png" width={18} />
          <span> Edit this Page </span>
        </span>
      </>
    ),
  },
  search: {
    placeholder: "Search...",
  },
  sidebar: {
    toggleButton: true,
  },
  gitTimestamp: null,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath == "/") {
      return {
        titleTemplate: "OpenML Guide",
      };
    }
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | OpenML Guide",
      };
    }
  },
  primaryHue: 85,
  primarySaturation: 80,
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="#" target="_blank">
  //       Follow us on Twitter
  //     </a>
  //   )
  // }
};

export default config;
