import { ReactComponent as IconFlag } from "assets/twemoji/flag_uk.svg";
import { Link } from "react-router-dom";
import { LanguageData } from "./typeLang";

const en: LanguageData = {
  _code: "en",
  _name: "English",
  _flag: <IconFlag className="d-block" style={{ width: "1em" }} />,
  _locale: "en-UK",
  strings: {
    automatica: "Automatica",
    home: "Home",
    see_how: "See how!",
    about: "About",

    how_to_know_if_we_can_help: "Check out our services!",
    showcase: "Services",

    ask_without_compromise: "Get in touch!",
    contact: "Contact",
    contact_us: "Contact us",
    we_love_to_hear_from_you: "Let's do something great.",
    name: "Name",
    first_name: "First name",
    last_name: "Last name",
    company: "Company",
    email: "E-Mail",
    message: "Message",
    enter_your_name: "Enter your name",
    enter_your_first_name: "Enter your first name",
    enter_your_last_name: "Enter your last name",
    enter_your_company: "Enter your company",
    enter_your_email_address: "Enter your e-mail",
    tell_us_why_you_write: "Tell us why you are writing",
    send: "Send",
    sending: "Sending...",
    if_you_prefer_use_other_contact_channels:
      "If you prefer, you may also get in touch through any of our other channels:",
    team: "Team",
    our_team: "Our team",
    project_leader: "Project leader",
    marketing: "Marketing",
    tech_leader: "Tech leader",
    not_found: "Not found",
    message_sent_success:
      "¡Your message has been sent! We will send you a copy per email so you are sure we have received it correctly.",
    message_sent_error:
      "There was an error while sending your message. Please try again later, or use one of our alternative channels.",
    please_complete_captcha: "Please complete the captcha.",
  },
  elements: {
    home_text: (
      <p className="text-light lead text-center">
        There is a <span className="text-warning fw-bold">simpler</span> way of
        doing the things that take you time, and at{" "}
        <span className="text-info fw-bold">Automatica</span> we will help you
        find it.
      </p>
    ),
    about_text: (
      <p className="lead text-center">
        Our <span className="text-warning fw-bold">goal</span> is to help
        companies <span className="text-info fw-bold">automate their work</span>
        , so that they don't have to lose time doing things that don't add
        value.
      </p>
    ),
    showcase_1: (
      <>
        Consulting on automation and{" "}
        <span className="fw-bold text-info">processes</span> simplification.
      </>
    ),
    showcase_2: (
      <>
        Design and implementation of KPIs and{" "}
        <span className="fw-bold text-pink">dashboards</span> that adapt to your
        needs.
      </>
    ),
    showcase_3: (
      <>
        <span className="text-info fw-bold">Trainings</span> on PowerBI,
        Tableau, QlikView, QuickSight, Excel, Google Sheets and much more.
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
        <span className="text-secondary fw-bold">Automation</span> of tasks such
        as: data extraction, document generation, report updates, among others.
      </>
    ),
    it_looks_like_this_page_does_not_exist: (
      <>
        It looks like this section doesn't exist. Don't worry! You can go to the{" "}
        <Link to="/" className="fw-bold link-warning">
          Home
        </Link>{" "}
        screen to see if you can find there what you were looking for, or write
        to us through the{" "}
        <Link to="/contact" className="fw-bold link-info">
          contact
        </Link>{" "}
        section, so we can help you.
      </>
    ),
  },
};

export default en;
