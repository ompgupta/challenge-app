import React from 'react'

const Userlist=(props)=> {
    return (
        <>
      
         <div className="container Userlist">
             <div className="row"> 
             <div className="column active-col m-2 pl-3">
                   <h6 style={{fontWeight:"500", paddingTop:'5px'}}>Female <span>&#8226; NL</span></h6>
                   <h5 style={{fontWeight:'700'}}>Ms. Teatske Nil</h5>
                   <p style={{fontWeight:'500'}}  >teatske.nijehuis@gmail.com</p>
                 </div>
            {
            props.user.map((item)=>{
                return(
                <div className="column m-2 pl-3">
                   <h6 style={{fontWeight:"500", paddingTop:'5px', textTransform:'capitalize'}}>{item.gender }<span> &#8226;NL</span></h6>
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
