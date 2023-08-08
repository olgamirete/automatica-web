import Dictionary from "@/i18n/types/Dictionary";
import { ReactNode } from "react";

const dictionary: Dictionary<{
    showcase_1: ReactNode;
    showcase_2: ReactNode;
    showcase_3: ReactNode;
    showcase_4: ReactNode;
    showcase_5: ReactNode;
    showcase: string;
    ask_without_compromise: string;
}> = {
    en: {
        showcase_1: (
            <>
                Consulting on automation and{" "}
                <span className="fw-bold text-info">processes</span>{" "}
                simplification.
            </>
        ),
        showcase_2: (
            <>
                Design and implementation of KPIs and{" "}
                <span className="fw-bold text-pink">dashboards</span> that adapt
                to your needs.
            </>
        ),
        showcase_3: (
            <>
                <span className="text-info fw-bold">Trainings</span> on PowerBI,
                Tableau, QlikView, QuickSight, Excel, Google Sheets and much
                more.
            </>
        ),
        showcase_4: (
            <>
                Design and implementation of{" "}
                <span className="text-warning fw-bold">Machine Learning</span>{" "}
                solutions, to get the most our of your data.
            </>
        ),
        showcase_5: (
            <>
                <span className="text-secondary fw-bold">Automation</span> of
                tasks such as: data extraction, document generation, report
                updates, among others.
            </>
        ),
        showcase: "Services",
        ask_without_compromise: "Get in touch!",
    },
    es: {
        showcase_1: (
            <>
                Consultoría en automatización y simplificación de{" "}
                <span className="fw-bold text-info">procesos</span>.
            </>
        ),
        showcase_2: (
            <>
                Diseño e implementación de indicadores (KPIs) y{" "}
                <span className="fw-bold text-pink">tableros de control</span>{" "}
                que se adaptan a tus necesidades.
            </>
        ),
        showcase_3: (
            <>
                <span className="text-info fw-bold">Capacitaciones</span> en
                PowerBI, Tableau, QlikView, QuickSight, Excel, Google Sheets y
                mucho más.
            </>
        ),
        showcase_4: (
            <>
                Diseño e implementación de soluciones de{" "}
                <span className="text-warning fw-bold">Machine Learning</span>,
                para sacar el mayor potencial de tus datos.
            </>
        ),
        showcase_5: (
            <>
                <span className="text-secondary fw-bold">Automatización</span>{" "}
                de tareas como: extracción de datos, generación de documentos,
                actualización de reportes, entre otras.
            </>
        ),
        showcase: "Servicios",
        ask_without_compromise: "¡Pregúntanos sin compromiso!",
    },
    de: {
        showcase_1: (
            <>
                Beratung zur Automatisierung und Simplifizierung von{" "}
                <span className="fw-bold text-info">Prozessen</span>.
            </>
        ),
        showcase_2: (
            <>
                Konzeption und Umsetzung von KPIs und{" "}
                <span className="fw-bold text-pink">Dashboards</span>, die sich
                an Ihre Bedürfnisse anpassen.
            </>
        ),
        showcase_3: (
            <>
                <span className="text-info fw-bold">Schulung</span> in PowerBI,
                Tableau, QlikView, QuickSight, Excel, Google Sheets y viel mehr.
            </>
        ),
        showcase_4: (
            <>
                Konzeption und Umsetzung von{" "}
                <span className="text-warning fw-bold">Machine Learning</span>{" "}
                Lösungen, die das Beste aus Ihren Daten erschaffen.
            </>
        ),
        showcase_5: (
            <>
                <span className="text-secondary fw-bold">Automatisierung</span>{" "}
                von: Datenextrahierung, Dokumentgenerierung,
                Berichtsaktualisierung, zwischen Anderen.
            </>
        ),
        showcase: "Portfolio",
        ask_without_compromise: "Kontaktieren Sie uns!",
    },
};

export default dictionary;
