import doceDesejoSite from "../assets/images/Projects/doceDesejoSite.png";
import AppEncomendas from "../assets/images/Projects/AppEcomendas.png";
import ListaSuprema from "../assets/images/Projects/ListaSuprema.png";

export const profile = {
    name: "Lucas Henrique",
    role: "Desenvolvedor Front-end",
    tagline: "Faço sites e aplicativos com React e React Native.",
    cvURL: "https://drive.google.com/file/d/1-IHEwWv67CyrjiUzUUFuQGBM53HAvW9k/view?usp=drive_link",
    formAction: "https://formsubmit.co/lhls2002@gmail.com",
    links: {
        github: "https://github.com/LucasHL7",
        linkedin: "https://www.linkedin.com/in/lucas-henrique-963a72211",
        instagram: "https://www.instagram.com/lucashls_0",
        whatsapp: "https://wa.me/5586988844705",
    },
};

export const navItems = [
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
];

export const now = [
    "Estudando testes end-to-end com Playwright.",
    "Disponível para projetos freelance.",
];

export const stack = [
    { group: "Web", items: "React, Angular, TypeScript, JavaScript, HTML, CSS" },
    { group: "Mobile", items: "React Native, Expo, SQLite" },
    { group: "Back-end", items: "Node.js, Python, Django, Firebase" },
    { group: "Testes", items: "Playwright (E2E)" },
];

export interface Experience {
    period: string;
    title: string;
    place: string;
    description: string;
    tags?: string[];
}

export const experiences: Experience[] = [
  {
    period: "2025 — Atual",
    title: "Suporte Técnico N2",
    place: "Tartigrado Tecnologia",
    description:
      "Atendo o suporte de nível 2 da RevGas, o ERP da empresa, e também trabalho na manutenção do sistema e no desenvolvimento de testes.",
  },
  {
    period: "2024",
    title: "Desenvolvedor Front-end e Mobile · Freelance",
    place: "Doce Desejo",
    description:
      "Fiz a landing page de encomendas da doceria onde eu já tinha trabalhado e, em seguida, o app interno que a equipe usa para registrar e acompanhar os pedidos.",
    tags: ["React Native", "Expo", "Firebase", "Node.js", "HTML", "CSS", "JavaScript"],
  },
  {
    period: "2020 — 2024",
    title: "Bacharelado em Ciência da Computação",
    place: "Estácio",
    description: "Graduação concluída em 2024.",
  },
];

export interface Project {
    title: string;
    year?: string;
    image: string;
    description: string;
    tags: string[];
    websiteURL?: string;
    codeURL: string;
}

export const projects: Project[] = [
    {
        title: "Doce Desejo · Encomendas",
        image: doceDesejoSite,
        description:
            "Landing page para pedidos de bolos e doces personalizados, que não cabiam no site principal da loja. O pedido sai de um formulário próprio.",
        tags: ["HTML", "CSS", "JavaScript"],
        websiteURL: "https://docedesejoencomendas.netlify.app",
        codeURL: "https://github.com/LucasHL7/doceDesejo",
    },
    {
        title: "Doce Desejo · App interno",
        image: AppEncomendas,
        description:
            "App para os funcionários cadastrarem e acompanharem as encomendas, organizando o fluxo de pedidos da equipe.",
        tags: ["React Native", "Expo", "Node.js", "Firebase"],
        codeURL: "https://github.com/LucasHL7/sweet-desire",
    },
    {
        title: "Lista Suprema",
        image: ListaSuprema,
        description:
            "Lista de compras para controlar quanto você está gastando no supermercado. Os dados ficam salvos no próprio celular, sem depender de internet.",
        tags: ["React Native", "TypeScript", "Expo Router", "SQLite"],
        codeURL: "https://github.com/LucasHL7/lista-suprema",
    },
];
