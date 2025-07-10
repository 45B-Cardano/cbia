import {
  BookmarkIcon,
  EducationIcon,
  InnovationIcon,
  ScaleIcon,
  SettingsIcon,
  ShieldIcon,
} from "../components/Icons/Icons";

export const principlesMock = [
  {
    title: "Development",
    subtitle: "Developing open-source infrastructure tooling for Cardano.",
    icon: <SettingsIcon />,
    href: "/images/icons/Development.png",
  },
  {
    title: "Collaboration",
    subtitle: "Avoid redundancy and build complementary infrastructure",
    icon: <BookmarkIcon />,
    href: "/images/icons/Collaboration.png",
  },
  {
    title: "Standards",
    subtitle: "Support standards to facilitate interoperability and composability across tools.",
    icon: <ShieldIcon />,
    href: "/images/icons/Standards.png",
  },
  {
    title: "Innovation",
    subtitle: "Bring together experts and innovators to design UTxO-optimized tools",
    icon: <InnovationIcon />,
    href: "/images/icons/Innovation.png",
  },
  {
    title: "Scale",
    subtitle: "Set the foundation for a mature ecosystem ready to scale",
    icon: <ScaleIcon />,
    href: "/images/icons/Scale.png",
  },
  {
    title: "Education",
    subtitle: "Help onboard developers and start building on Cardano",
    icon: <EducationIcon />,
    href: "/images/icons/Education.png",
  },
];

export const membersMock = [
  {
    id: 1,
    src: "/images/home/MaestroLogo.png",
    href: "https://www.gomaestro.org/",
  },
  {
    id: 2,
    src: "/images/home/BlinkLabsLogo.png",
    href: "https://blinklabs.io/",
  },
  {
    id: 3,
    src: "/images/home/GimblalabsLogo.png",
    href: "https://gimbalabs.com/gimbalgrid",
  },
  {
    id: 4,
    src: "/images/home/TxPipeLogo.png",
    href: "https://txpipe.io/",
  },
  {
    id: 5,
    src: "/images/home/MeshLogo.png",
    href: "https://meshjs.dev/",
  },
  {
    id: 6,
    src: "/images/home/KoiosLogo.png",
    href: "https://koios.rest/",
  },
];

export const projectsMock = [
  {
    id: 1,
    title: "Developer Tools Compatibility Matrix Project",
    description: `CBIA was funded by Project Catalyst for this project. <br /> 
      <b>Problem:</b> We see the need for a central community managed compatibility matrix for ecosystem tools. <br/>
      <b>Summarized solution:</b> Create a system for easy gathering of dependency/compatibility data across Cardano tools and expose it through insightful visualizations that enable one to browse and foresee downstream impacts.`,
    url: "https://github.com/CardanoBlockchainInfraAlliance/developer-portal",
    links: [
      {
        text: "Catalyst Proposal",
        href: "https://projectcatalyst.io/funds/11/cardano-open-developers/cbia-add-developer-tool-compatibility-matrix-to-cardano-developers-portal",
      },
      {
        text: "Project Updates",
        href: "https://github.com/CardanoBlockchainInfraAlliance/developer-portal",
      },
    ],
  },
];
