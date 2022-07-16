import {Container} from 'react-bootstrap';
import Card from './Card';
import Date from './Date';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap'



function Dashboard() {
  return (
    <Container>
    <Card />
    <Row className="mt-5">
    <Col md={12} sm={12}>
      <Date />
    </Col>
    
    </Row>
    </Container>

  );
}

export default Dashboard;