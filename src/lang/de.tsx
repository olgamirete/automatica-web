import { ReactComponent as IconFlag } from "assets/twemoji/flag_germany.svg";
import { Link } from "react-router-dom";

const de = {
  _code: "de",
  _name: "Deutsch",
  _flag: <IconFlag className="d-block" style={{ width: "1em" }} />,
  automatica: "Automatica",
  home: "Home",
  home_text: (
    <p className="text-light lead text-center">
      Es gibt eine <span className="text-warning fw-bold">einfachere</span> Art
      die Sachen zu machen, die Ihnen viel Zeit nehmen, und bei{" "}
      <span className="text-info fw-bold">Automatica</span> werden wir Ihnen
      helfen, diese zu finden.
    </p>
  ),
  see_how: "Sehen Sie es!",
  about: "Über uns",
  about_text: (
    <p className="lead text-center">
      Unser <span className="text-warning fw-bold">Ziel</span> ist es,
      Unternehmen dabei helfen,{" "}
      <span className="text-info fw-bold">ihre Arbeit zu automatisieren</span>,
      damit sie keine Zeit bei unproduktive Tätigkeiten verlieren müssen.
    </p>
  ),
  how_to_know_if_we_can_help: "Schauen sie sich unser Portfolio an!",
  showcase: "Portfolio",
  showcase_1: (
    <>
      Beratung zur Automatisierung und Simplifizierung von{" "}
      <span className="fw-bold text-info">Prozessen</span>.
    </>
  ),
  showcase_2: (
    <>
      Konzeption und Umsetzung von KPIs und{" "}
      <span className="fw-bold text-pink">Dashboards</span>, die sich an Ihre
      Bedürfnisse anpassen.
    </>
  ),
  showcase_3: (
    <>
      <span className="text-info fw-bold">Schulung</span> in PowerBI, Tableau,
      QlikView, QuickSight, Excel, Google Sheets y viel mehr.
    </>
  ),
  showcase_4: (
    <>
      Konzeption und Umsetzung von{" "}
      <span className="text-warning fw-bold">Machine Learning</span> Lösungen,
      die das Beste aus Ihren Daten erschaffen.
    </>
  ),
  showcase_5: (
    <>
      <span className="text-secondary fw-bold">Automatisierung</span> von:
      Datenextrahierung, Dokumentgenerierung, Berichtsaktualisierung, zwischen
      Anderen.
    </>
  ),
  ask_without_compromise: "Kontaktieren Sie uns!",
  contact: "Kontakt",
  contact_us: "Kontaktieren Sie uns",
  we_love_to_hear_from_you: "Lass uns was tolles machen!",
  name: "Name",
  company: "Firma",
  email: "E-Mail",
  message: "Nachricht",
  enter_your_name: "Name eingeben",
  enter_your_company: "Firma eingeben",
  enter_your_email_address: "E-Mail eingeben",
  tell_us_why_you_write: "Teilen sie uns mit, warum sie uns schreiben",
  send: "Senden",
  sending: "Wird gesendet...",
  if_you_prefer_use_other_contact_channels:
    "Wenn sie es lieber so haben, können sie auch uns über unsere andere Kanäle kontaktieren:",
  team: "Team",
  our_team: "Unser Team",
  project_leader: "Projektleiter",
  marketing: "Marketing",
  tech_leader: "Technologieleiter",
  not_found: "Nicht gefunden",
  message_sent_success:
    "Ihre Nachricht wurde geschickt! Wir werden Ihnen automatisch eine Bestätigungsemail schicken.",
  message_sent_error:
    "Es ist ein Fehler beim Senden aufgetaucht. Bitte versuchen Sie es später erneut, oder verwenden sie eine unseren anderen Kanälen.",
  it_looks_like_this_page_does_not_exist: (
    <>
      Diese Seite scheint nicht zu exisieren. Machen Sie keine Sorge! Sie können
      wieder zum{" "}
      <Link to="/" className="fw-bold link-warning">
        Anfang
      </Link>{" "}
      gehen, um zu schauen ob Sie dort das finden, was Sie gesucht hatten. Sie
      können auch uns direkt eine Nachricht schicken durch den Formular auf der{" "}
      <Link to="/contact" className="fw-bold link-info">
        Kontakt
      </Link>{" "}
      Seite, damit wir Ihnen helfen können.
    </>
  ),
};

export default de;
