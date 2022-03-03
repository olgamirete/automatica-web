import LangContext from 'contexts/LangContext';
import { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import InfoCard from '../../components/InfoCard';

function NotFound(props) {
    const lang = useContext(LangContext)
    return (
        <InfoCard className="bg-dark text-light border border-light" >
            <h1 className="text-light mb-4 text-center">404</h1>
            <Row className="m-0 p-0 justify-content-center" >
                <Col className="m-0 p-0" xs={12} md={10} lg={8}>
                    <p className="text-light lead text-center">
                        {lang.it_looks_like_this_page_does_not_exist}
                    </p>
                </Col>
            </Row>
        </InfoCard>
    );
}

export default NotFound;