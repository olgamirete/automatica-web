import { Row } from 'react-bootstrap';
import InfoCard from '../../components/InfoCard';
import MemberCard from './MemberCard';
import picFederico from './pictures/federico.png';
import picJulieta from './pictures/julieta.png';
import picFrancisco from './pictures/francisco.png';

function Team(props) {

    return (
        <InfoCard variant="dark" bgOpacity={6} className="border border-muted" >
            <h1 className="text-light mb-4 text-center">Nuestro equipo</h1>
            <Row xs={1} sm={2} className="d-flex justify-content-center">
                <MemberCard picSrc={picFederico} name="Federico" subtitle="Project leader" urlLinkedIn="https://www.linkedin.com/in/fgiancarelli/" urlGitHub="https://github.com/olgamirete/" />
                <MemberCard picSrc={picJulieta} name="Julieta" subtitle="Marketing" urlLinkedIn="https://www.linkedin.com/in/julietamo/" />
                <MemberCard picSrc={picFrancisco} name="Francisco" subtitle="Technical leader" urlLinkedIn="https://www.linkedin.com/in/giancarellifrancisco/" urlGitHub="https://github.com/padapada09/" />
            </Row>
        </InfoCard >
    );
}

export default Team;