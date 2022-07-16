import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Profile() {
    const{ register,handleSubmit,formState: {errors}, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    console.log(errors);
  return (
    <Container>


    <h1>Leaves and Leavebanks</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Row>
            <Col lg={12}>
                <Row className='mt-2'>
                
                    <Col lg={3}>
                        <label>Purpose of leave:</label>
                    </Col>
                    <Col lg={7}>
                    <input type="text" className="form-control" placeholder="enter purpose of leave" {...register("purpose", { required: "purpose of leave is required"})}/> 
                    {errors.purpose && (<small className='text-danger'>Purpose of leave is required</small>)}
                    </Col>
                </Row>
                    
                
                <Row className='mt-2'>
                    <Col lg={3}>
                        <label>Start Date :</label>
                    </Col>
                    <Col lg={3}>
                    <input type="date" className="form-control" name="date" placeholder="enter the First Name" {...register("date", { required: "Date of Birth is required"})}/> 
                    {errors.date && (<small className='text-danger'>Starting date is required</small>)}
                    </Col>
                </Row>
                 <Row className='mt-2'>
                    <Col lg={3}>
                        <label>End Date :</label>
                    </Col>
                    <Col lg={3}>
                    <input type="date" className="form-control" name="date" placeholder="enter the First Name" {...register("date", { required: "Date of Birth is required"})}/> 
                    {errors.date && (<small className='text-danger'>ending date is required</small>)}
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={3}>
                        <label>Type of leave :</label>
                    </Col>
                    <Col lg={5}>
                       <select name="type of leave" placeholder="type">
                        <option value="none">Select</option>
                        <option value="Sick">Sick</option>
                        <option value="Cascual">Cascual</option>
                        </select>
                    {/* <small className='text-danger'>Selection is required</small> */}

                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={3}>
                        <label>Status :</label>
                    </Col>
                    
                </Row>
               

            </Col>
           
            <Col lg={12}  className='text-center mt-4 mb-5'>
                <Button type="save">Save</Button>
            </Col>
        </Row>
    </form>

    <h4>leavebanks</h4>
    <Row>
      <Col lg={6}>
        <Row>
          <Col lg={6}>Total leaves</Col>
        </Row>
      </Col>
    </Row>
    
    
        
            
        </Container>
  );
}

export default Profile;