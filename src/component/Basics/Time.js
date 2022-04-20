import React, { useState } from "react";
const App=()=>{
  let nt=new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(nt);
  const map =()=>{
    nt=new Date().toLocaleTimeString(); 
    setCtime(nt);
  };
  setInterval(map,1000)
  return(
<>
<h1>
  {ctime}
</h1>
{/* <button  onClick={map}>hi i am</button> */}
</>
  );

  
};
export default App;
