import  avatar  from '../assets/avatar.png';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export const CreatePost = () => {
    let name = import.meta.env.VITE_nickName;
    let status = import.meta.env.VITE_status;
    let trigger = false;
    const [data, setData] = useState({nickname: name, status: status});

    function handleData(event, key) {
        event.preventDefault();
        const keyValue = event.target.value;
        setData((prevState) => ({
          ...prevState, [key]: keyValue
          
        }));
      }

    function createPost(){
        
        console.log(trigger)
        console.log(data)
        try {
            let response = fetch('http://localhost:7070/posts/', {
                method: "POST",
                body: JSON.stringify(data)
            } );
            if (!response.ok) {
                throw new Error("Unexpected response from server")
            }
        } catch(e) {
            console.log(e.message)
        }
        

    }

    return(
        <div className="card">
            <div className="card-menu">
                <div className="card-menu__tab">
                    <i className="bi bi-pencil icon-offset"></i>
                    <h6>Publication</h6>
                </div>
                <div className="card-menu__tab">
                    <i className="bi bi-camera icon-offset"></i>
                    <h6>Photo/Video</h6>
                </div>
                <div className="card-menu__tab">
                    <i className="bi bi-camera-video icon-offset"></i>
                    <h6>Live</h6>
                </div>
                <div className="card-menu__tab">
                    <i className="bi bi-three-dots icon-offset"></i>
                    <h6>More</h6>
                </div>
            </div>

            <div className="card-body top-border">
                <img src= { avatar } style={ {width: "60px", height: "60px"} } alt="..."/>
                <div className='card-menu__container'>
                    <input type="text" className="card-title new-post" placeholder="Post title"  onBlur = { (e) => handleData(e, 'title') }/>
                    <input type="text" className="card-text new-post" placeholder="Input text here" onBlur = { (e) => handleData(e, 'text') }/>
                </div> 
                <div className='align-bottom'>
                    <i className="bi bi-emoji-smile"></i>
                </div>     
            </div>
            <div className="card-body top-border align-right">
                <NavLink to="/posts" className="btn btn-primary icon-offset">Back</NavLink>
                <NavLink to="/posts" className="btn btn-primary" onClick={createPost}>Publish post</NavLink>
            </div>
        </div>
    )
}