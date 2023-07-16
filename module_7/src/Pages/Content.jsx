import { useState } from "react";


const DefaultPage = () => { 

const [outputText, setOutputText] = useState();
   
   const myOutput = ()=>{ 
       let myinput = document.getElementById('myinput').value;
       
       setOutputText("👉  "+myinput);
        
    }
    return (  
    <>
<div  className="flex flex-wrap 
    justify-between mx-auto" >
    <div className="my-5  grid-cols-6 mb-16 ">
    <div className="form-group">
    <label className="text-[18px] ">Type here</label>
        <textarea id="myinput" placeholder="Type here" cols="100" className="form-control textarea-bordered mb-3  input   input-lg"></textarea>
        <button className="btn btn-primary  btn-rounded-btn"  onClick={myOutput}>Submit</button>
        </div>
    </div>

    <div className="alert bg-[#DEDEDE] grid-cols-5 justify-center  mb-16">{outputText}</div>
    </div>
    </>
     );
}
 
export default DefaultPage;