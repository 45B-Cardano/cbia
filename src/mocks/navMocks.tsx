import { ContactUsIcon } from "../components/Icons/Icons";

export const navMock = [
  {
    id: 1,
    label: "Who we are",
    href: "#who-we-are",
  },
  {
    id: 2,
    label: "Our mission",
    href: "#our-mission",
  },
  {
    id: 3,
    label: "Partners",
    href: "#partners",
  },
  {
    id: 4,
    isButton: true,
    label: "Contact us",
    href: "#footer",
    icon: <ContactUsIcon />,
  },
];
