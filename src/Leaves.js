import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Leavebank from './Leavebank';

function Work() {
  const {
  register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const onSubmit = (data) => {console.log(data);
    reset();
  }

  return(
    
    <>
    <br/><br/>
    <h1>Leaves and Leavebanks</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Row>
         <Col lg={3} className='mt-3'>
         <label>Purpose of Leave :</label></Col>
           <Col lg={7} className='mt-3'> <input type="text" className="form-control" placeholder="enter the Purpose of Leave" {...register('Purpose', { required: "Purpose of leave is required",pattern: {
            value: "/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/",
            message: "Enter the valid name"
           }})}/>
            {errors.Purpose&& (<p className='text-danger'>Purpose of leave is required.</p>)}
          </Col>
          </Row>
         <Row>
         <Col lg={3} className='mt-3'>
         <label>Starting Date :</label></Col>
         <Col lg={3} className='mt-3'>
            <input type="date" className="form-control" {...register('Starting', { required: "Organisation name is required",})}/>
            {errors.Starting && (<p className='text-danger'>Starting Date is required.</p>)}
         </Col>
         </Row>
         <Row>
         <Col lg={3} className='mt-3'>
         <label>Ending Date :</label></Col>
         <Col lg={3} className='mt-3'>
            <input type="date" className="form-control" placeholder="enter the Organisation Name" {...register('ending', { required: "Organisation name is required",})}/>
            {errors.ending && (<p className='text-danger'>Ending date is required.</p>)}
         </Col>
         </Row>
         <Row>
         <Col lg={3} sm={8} className='mt-2'>
                    <label className='me-5'>Type of leave :</label></Col>
         <Col lg={3} sm={8} className='mt-2'>      
           <Form.Select value="Type of leave" {...register('ending', { required: "Organisation name is required",})}>
                    
                        <option value="1">Sick</option>
                        <option value="2">Casual</option>

             </Form.Select>
             {errors.ending && (<p className='text-danger'>Selection is required.</p>)}  
               </Col></Row>
               <Row>
               <Col lg={3} className="mt-3">
                  <label>Status:</label>
               </Col>
               <Col lg={3} className="mt-3">
               Approverd by HR
               
        </Col>
        </Row>
      </Row>
      
      <Row className='text-center mt-3'>
        <Col sm={2} className="mx-auto"><Button className='mx-auto ms-5 me-5 btn-success' type="save">Create</Button>
      </Col>   
      </Row>

    </form>
    <Leavebank />
    
    
    </>
  );
}

                

export default Work;