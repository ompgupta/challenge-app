import React, { useEffect, useState } from 'react';
import Userlist from './Userlist';

const User = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername]= useState([]);
    const [img, setImg]= useState([]);
    const [number,setNumber] = useState([]);
    const[add, setAdd]=useState([]);
    const [country, setCountry] =useState([]);
    const [code, setCode]=useState([]);
    const [desc, setDesc] = useState([]);
    const [gender, setGender] = useState([]);
    const getUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20');
        // setUsers(await response.json());
       
        const data = await response.json();
      setUsers(data.results);
      setUsername(`${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`);
      setImg(data.results[0].picture.medium);
      setNumber(data.results[0].location.street.number);
      setAdd(` ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, `);
      setCountry(data.results[0].location.country);
      setCode(`${data.results[0].location.postcode}\n ${data.results[0].location.timezone.offset}, `);
      setDesc(data.results[0].location.timezone.description);
      setGender(data.results[0].gender);
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
       
            <div className="container user my-4 py-2">
                <div className="row d-flex">
                    <div className="col-md-2 pl-4">
                        <img src={img} alt="" />
                    </div> 
                     <div className="col-md-10 text-left mt-4 pl-5" onLoad = {()=>getUsers()}>
                        <h2>{username}</h2>
                        <p><span style={{ color: 'blueviolet' }}>{number},</span>{add}<span className='text-dark font-weight-bold'>{country},</span>
                       <br />  {code} <span style={{ textDecoration: 'underline' }}>{desc}</span> <br /><span className='text-muted text-capitalize'>{gender}</span></p>
                    </div>
                    </div>
                </div>
                
                <Userlist user={users}/>
        </>
    )
}
export default User;