import React,{useState,useEffect} from 'react';
import Chart from "react-apexcharts";
import {Label} from "react-bootstrap";


function App() 
{
  const [studentSubject, setStudentsubject]= useState([]);
  const [studentMarks, setStudentmarks]= useState([]);

  useEffect( ()=>{
    const sSubject=[];
    const sMarks=[];

    const getStudentdata= async()=>{
    const reqData= await fetch(" ");
    const resData= await reqData.json();
    console.log(resData);

    for(let i=0; i< resData.length; i++) 
    {
      sSubject.push(resData[i].subject);
      sMarks.push(resData[i].subject);

    }
    setStudentsubject(sSubject);
    setStudentmarks(sMarks);
    }

  },[]);
    return(
      
        <React.Fragment>
          <div className="container-fluid">
            
            <Chart 
            type="pie"
            width={300}
            height={300}

            series={[34*4,6*4]}
            

            options={ {
              title:{ text: ""
            } , 

            noData:{text:"Empty Data"}, 
              
              labels:["Working Hrs","Worked Hrs"]

            }}

            >

            </Chart>
          </div>
        </React.Fragment>
        
      

  );
}
export default App;