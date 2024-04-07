import React from 'react';
import Loading from './Loading.gif'


const Spinner=()=>{
  
    return (
      <div>

        <div className="text-center" style={{height:"75px"}}>
            <img src={Loading} alt="" />
        </div>
        
      </div>
    );
  
}

export default Spinner;
