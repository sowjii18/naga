import Card from 'react-bootstrap/Card';
import Chart from './Chart';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';


function BorderExample() {
  return (
    <>
    <h3 className="text-center"> Dashboard</h3>
    <Row>
    <Col sm={12} lg={4}>
      <Card border="primary" style={{ width: '16rem',height: '8rem' }}>
        <Card.Header className="text-center">Total leaves</Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
            <h5>10</h5>
          </Card.Text>
        </Card.Body>
        </Card>
        <Card border="primary" style={{ width: '16rem',height: '8rem' }}>
        <Card.Header className="text-center">Taken leaves</Card.Header>
        <Card.Body>
          <Card.Text className="text-center">
           <h5>6</h5>
          </Card.Text>
        </Card.Body>
      
      </Card>
      </Col>
      <br />
      <Col sm={12} lg={4}>
      <Card border="secondary" style={{ width: '16rem',height: '16rem' }}>
        <Card.Header className="text-center">Hrs Working in a Week</Card.Header>
        <Card.Body>
          <Card.Text className="text-center mt-5">
            <label>Total Working Hrs :40</label><br/>
            <label>Worked Hrs : 34</label><br/>
            <label>Remaing Work Hrs :6</label>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      </Col>
      <Col sm={12} lg={4}>
      <Card border="success" style={{ width: '16rem',height: '16rem' }}>
        <Card.Header>Tracked Hrs in a month</Card.Header>
        <Card.Body>  
          <Chart />
        </Card.Body>
      </Card>
      </Col>
      </Row>


    </>
  );
}

export default BorderExample;