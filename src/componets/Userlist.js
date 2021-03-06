import React,{useState} from 'react'

const Userlist=(props)=> {
    // var [abc , setAbc] = useState("");
    //  console.log(abc);
    function clickUser(){
        // console.log('called');
       
       
     }
    return (
        <>
      
      <div className="container Userlist">
             <div className="row"> 
            
            {
            props.user.map((item) =>{
                return(
                <div className="column m-2 pl-3" key={item.id}>

                   <h6 style={{fontWeight:"500", paddingTop:'5px', textTransform:'capitalize'}}>{item.gender}<span> &#8226;NL</span></h6>
                   <h5 style={{fontWeight:'700'}}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</h5>
                   <p id='email'>{item.email}</p>
                 </div>
                )
            })
        }
               </div>    
            </div>   
        </>
    )
}
export default Userlist; 
