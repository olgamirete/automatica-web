import { ReactComponent as IconFlag } from 'assets/twemoji/flag_uk.svg'
import { Link } from 'react-router-dom'

const en = {
  _code: 'en',
  _name: 'English',
  _flag: <IconFlag className="d-block" style={{ width: '1em' }} />,
  automatica: 'Automatica',
  home: 'Home',
  home_text: (
    <p className="text-light lead text-center">
      There is a <span className="text-warning fw-bold">simpler</span> way of
      doing the things that take your time, and at{' '}
      <span className="text-info fw-bold">Automatica</span> we will help you
      find it.
    </p>
  ),
  see_how: 'See how!',
  about: 'About',
  about_text: (
    <p className="lead text-center">
      Our <span className="text-warning fw-bold">goal</span> is to help
      companies{' '}
      <span className="text-info fw-bold">automate some of their work</span>, so
      that they don't have to lose time doing things that don't add value.
    </p>
  ),
  how_to_know_if_we_can_help: 'Check out our portfolio!',
  showcase: 'Showcase',
  showcase_1: (
    <>
      Consulting on automation and{' '}
      <span className="fw-bold text-info">processes</span> simplification.
    </>
  ),
  showcase_2: (
    <>
      Design and implementation of KPIs and{' '}
      <span className="fw-bold text-pink">dashboards</span> that adapt to your
      needs.
    </>
  ),
  showcase_3: (
    <>
      <span className="text-info fw-bold">Trainings</span> on PowerBI, Tableau,
      QlikView, QuickSight, Excel, Google Sheets and much more.
    </>
  ),
  showcase_4: (
    <>
      Design and implementation of{' '}
      <span className="text-warning fw-bold">Machine Learning</span> solutions,
      to get the most our of your data.
    </>
  ),
  showcase_5: (
    <>
      <span className="text-secondary fw-bold">Automation</span> of tasks such
      as: data extraction, document generation, report updates, among others.
    </>
  ),
  ask_without_compromise: 'Get in touch!',
  contact: 'Contact',
  contact_us: 'Contact us',
  we_love_to_hear_from_you:
    'Let\'s do something great.',
  name: 'Name',
  company: 'Company',
  email: 'E-Mail',
  message: 'Mensaje',
  enter_your_name: 'Enter your name',
  enter_your_company: 'Enter your company',
  enter_your_email_address: 'Enter your e-mail',
  tell_us_why_you_write: 'Tell us why you are writing',
  send: 'Send',
  sending: 'Sending...',
  if_you_prefer_use_other_contact_channels:
    'If you prefer, you may also get in touch through any of our other channels:',
  team: 'Team',
  our_team: 'Our team',
  project_leader: 'Project leader',
  marketing: 'Marketing',
  tech_leader: 'Tech leader',
  not_found: 'Not found',
  message_sent_success: '¡Tu mensaje ha sido enviado! Te enviaremos una respuesta por correo para confirmarte que lo hemos recibido correctamente.',
  message_sent_error: 'Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo más tarde, o utiliza alguno de nuestros canales alternativos.',
  it_looks_like_this_page_does_not_exist: <>Parece que esta página no existe. ¡No te preocupes! Puedes ir al <Link to="/" className="fw-bold">inicio</Link> para ver si encuentras lo que buscabas, o escribirnos a través de la sección de <Link to="/contact" className="fw-bold">contacto</Link>, para que podamos ayudarte.</>
}

export default en
