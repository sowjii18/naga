import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

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
    <br/><br/><br/>
    <h1>Workexperience</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        
         <Col lg={5} className='mt-3'>
         <label>Organisation Name :</label></Col>
           <Col lg={7} className='mt-3'> <input type="text" placeholder="enter the Organisation Name" {...register('organisation', { required: "Organisation name is required",pattern: {
            value: "/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/",
            message: "Enter the valid name"
           }})}/>
            {errors.organisation && (<p className='text-danger'>organisation name is required.</p>)}
         </Col>
         <Col lg={5} className='mt-3'>
         <label>Experience in Months :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="number" placeholder="enter the Experience in Months" {...register('months', { required: "Organisation name is required",})}/>
            {errors.months && (<p className='text-danger'>No.of Months is required.</p>)}
         </Col>
         <Col lg={5} className='mt-3'>
         <label>Joining Date :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="date" placeholder="enter the Organisation Name" {...register('joining', { required: "Organisation name is required",})}/>
            {errors.joining && (<p className='text-danger'>Joining Date is required.</p>)}
         </Col>
         <Col lg={5} className='mt-3'>
         <label>Ending Date :</label></Col>
         <Col lg={7} className='mt-3'>
            <input type="date" placeholder="enter the Organisation Name" {...register('ending', { required: "Organisation name is required",})}/>
            {errors.ending && (<p className='text-danger'>Ending date is required.</p>)}
         </Col>
      </Row>
      
      <Row className='text-center mt-3'>
        <Col sm={2} className="mx-auto"><Button className='mx-auto ms-5 me-5 btn-success' type="save">Create</Button>
      </Col>   
      </Row>
    </form>

     <br/><br/><br/>
      <h1>Skills</h1>
               <Row>
                 <Col lg={6} sm={8} className='mt-2'>
                    <label className='me-5'>Select :</label>
           <select className='me-5'>
                        <option value="none">select</option>
                         <option value="Ror">Ror</option>
                         <option value="React">React</option>
                         <option value="Native">Native</option>

             </select>
                  
               </Col>
                    
                    
            </Row>  
   <Row className='text-center mt-3'>
        <Col sm={2} className="mx-auto"><Button className='mx-auto ms-5 me-5 btn-success' type="save">Create</Button>
      </Col>   
      </Row>
    </>
  );
}

                

export default Work;