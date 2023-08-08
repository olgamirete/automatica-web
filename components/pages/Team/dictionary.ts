import Dictionary from "@/i18n/types/Dictionary";

const dictionary: Dictionary<{
    our_team: string;
    project_leader: string;
    marketing: string;
    tech_leader: string;
}> = {
    en: {
        our_team: "Our team",
        project_leader: "Project leader",
        marketing: "Marketing",
        tech_leader: "Tech leader",
    },
    es: {
        our_team: "Nuestro equipo",
        project_leader: "Líder de proyectos",
        marketing: "Marketing",
        tech_leader: "Líder técnico",
    },
    de: {
        our_team: "Unser Team",
        project_leader: "Projektleiter",
        marketing: "Marketing",
        tech_leader: "Technologieleiter",
    },
};

export default dictionary;
