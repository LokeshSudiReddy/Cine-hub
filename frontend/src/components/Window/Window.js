import axios from '../../utils/axios.js'
import { useState } from 'react';
export default function Window(props){
    const [fav,setfav]=useState(props.user.likedMoviesids)
    const addToList = async () => {
        setfav([...fav,props.movie.id])
        try {
          await axios.post("http://localhost:5000/api/user/add", {
            email: props.user.email,
            data: props.movie,
          });
        } catch (error) {
          console.log(error);
        }
      };
    if(!fav.includes(props.movie.id)){
    return(
        <button className='banner_button' onClick={addToList}>Buy</button>
    )
    }
    else{
        return(
            <p>owned</p>
        )   
    }
    // console.log(props)
    // return(
    //     <p>hi</p>
    // )
}