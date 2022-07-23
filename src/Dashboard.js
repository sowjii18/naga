import {Container} from 'react-bootstrap';
import Bars from './Bars';
import Date from './Date';
import Dates from './Dates';
import Chart from './Chart';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap'



function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      
    <Row>
      <Col lg={8} sm={12}>
        <Bars />
      </Col>
    </Row>
    <Row>
      <Col md={4} sm={12} className="mt-3">
      <h6>Holidays</h6>
        <Date />
      </Col>
      <Col md={4} sm={12} className="mt-3">
      <h6>Birthdays</h6>
        <Dates />
      </Col>
      <Col md={4} sm={12} className="mt-3">
      <h6>Tracked hrs in Month</h6>
        <Chart />
      </Col>
    </Row>
    </Container>

  );
}

export default Dashboard;