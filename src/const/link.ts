import GitHub from "../components/GitHub.astro";
import LinkedIn from "../components/LinkedIn.astro";
import Email from "../components/Email.astro";

export const LINKS = [
  { label: "GitHub", href: "https://github.com/SrVariable", icon: GitHub },
  { label: "LinkedIn", href: "https://linkedin.com/in/SrVariable", icon: LinkedIn },
  { label: "Contáctame", href: "mailto:rojohnibana@gmail.com", icon: Email, wide: true },
];
