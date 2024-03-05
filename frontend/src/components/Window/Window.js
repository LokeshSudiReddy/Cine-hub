import axios from '../../utils/axios.js'
import { useState } from 'react';
import { Navigate,Link } from 'react-router-dom';
import './Window.css'
export default function Window(props){
    const [fav,setfav]=useState(props.user.likedMoviesids)
    const [rent,setrent]=useState(props.user.rentedids)
 
    if(!fav.includes(props.movie.id) && !rent.includes(props.movie.id) ){
    return(
        
        <div>
            <Link to='/payment' state={{movie:props.movie,user:props.user,rent:false}}>
           <button className='banner_button'>Buy</button>
        </Link>
        <Link to='/payment' state={{movie:props.movie,user:props.user,rent:true}}>
           <button className='banner_button'>rent</button>
        </Link>
        </div>
        
    )
    }

    else{
        return(
            <div>
                <div>
                <p>owned</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='videoplayer'>
                <video className='video' controls={true} src="avengers.mp4" height={100}></video>
                </div>
                
            </div>
        )   
    }
}