

import './NavBar.css';
import React,{useContext, useState, useEffect} from 'react';
import {store} from '../../App';
import {Navigate} from 'react-router-dom';
import axios from '../../utils/axios';

export default function NavBar(){
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token){
        return <Navigate to='/' />
    }
    return(
        <header className='header'>
            <img className="logo col-3" src="LogoMakr-94v4M9.png" alt="" display="inline"/>
            <button onClick={() => setToken(null)}>Logout</button>
        </header>
    )
}
