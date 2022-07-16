import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Leavebank() {
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
    <fieldset>
             <legend className='mt-4'>Leavebanks</legend> 
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
          <Col lg={3} className='mt-3'>
         <label>Total leaves:</label></Col>
         <Col lg={3} className='mt-3'>
            <input type="number" className="form-control" placeholder="Total leaves" {...register('Total', { required: "Total leaves is required",})}/>
            {errors.Total && (<p className='text-danger'>Total leaves is required.</p>)}
         </Col>
      </Row>
      <Row>
          <Col lg={3} className='mt-3'>
         <label>Taken leaves:</label></Col>
         <Col lg={3} className='mt-3'>
            <input type="number" className="form-control" placeholder="Taken leaves" {...register('Taken', { required: "Taken leaves is required",})}/>
            {errors.Taken && (<p className='text-danger'>Tanken leaves is required.</p>)}
         </Col>
      </Row>
      <Row>
          <Col lg={3} className='mt-3'>
         <label>Remaining leaves:</label></Col>
         <Col lg={3} className='mt-3'>
            <input type="number" className="form-control" placeholder="Remaining leaves" {...register('Remaining', { required: "Remaining leaves is required",})}/>
            {errors.Remaining && (<p className='text-danger'>Remaining leaves is required.</p>)}
         </Col>
      </Row>
      
      {<Row className='text-center mt-3'>
              <Col sm={2} className="mx-auto"><Button className='mx-auto ms-5 me-5 btn-success' type="save">Create</Button>
            </Col>   
            </Row>}
    </form>
    </fieldset>

    
    </>
  );
}

                

export default Leavebank;

