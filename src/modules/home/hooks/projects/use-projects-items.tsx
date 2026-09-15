import { useTranslations } from "next-intl";

export default function useProjectsItems() {
  const t = useTranslations("Projects.projects");
  const projects = [
    {
      id: 1,
      title: "Canchify",
      description: t("canchify.description"),
      image: "/canchify.png",
      liveUrl: "https://canchify.com/",
      repoUrl: "https://github.com/sijita/canchify",
      technologies: ["Nextjs", "Typescript", "Supabase", "Tailwindcss"],
    },
    {
      id: 2,
      title: "Nodify",
      description: t("nodify.description"),
      image: "/nodify.png",
      repoUrl: "https://github.com/sijita/nodify",
      technologies: ["Tauri", "Rust", "React", "Nextjs", "Typescript"],
    },
    {
      id: 3,
      title: "Movieverse",
      description: t("movieverse.description"),
      image: "/movieverse.png",
      liveUrl: "https://movieverse-info.vercel.app/",
      repoUrl: "https://github.com/sijita/movieverse",
      technologies: ["Nextjs", "Typescript", "Supabase", "Tailwindcss"],
    },
    {
      id: 4,
      title: "Savory App",
      description: t("savoryapp.description"),
      image: "/savoryapp.jpeg",
      technologies: ["React Native", "Typescript", "Tailwindcss", "Supabase"],
    },
    {
      id: 5,
      title: "Lender App",
      description: t("lenderapp.description"),
      image: "/lenderapp.png",
      technologies: ["React Native", "Typescript", "Tailwindcss", "Supabase"],
    },
    {
      id: 6,
      title: "KarolG Portfolio",
      description: t("karolgportfolio.description"),
      image: "/karolg.png",
      liveUrl: "https://karolgportfolio.vercel.app/",
      technologies: ["Nextjs", "Tailwindcss"],
    },
    {
      id: 7,
      title: "Fertilizantes hj",
      description: t("fertilizanteshj.description"),
      image: "/fertilizanteshj.png",
      liveUrl: "https://fertilizanteshj.vercel.app/",
      technologies: ["Nextjs", "Typescript", "Tailwindcss"],
    },
  ];

  return projects;
}
