import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  avatar  from '../assets/avatar.png';
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState('');
    console.log(data)
    useEffect(() => {
        (async () => {
             try {
                 let response = await fetch(`http://localhost:7070/posts/${ id }`);
                 if (!response.ok) {
                    throw new Error("Unexpected response from server")
                 }
                 const json = await response.json();
                 console.log(json);
                 setData(json.post);
                 setText(json.post.text);
                 setTitle(json.post.title);
             } catch(e) {
                 console.log(e.message)
             }
             
 
        })()
        
     }, [id]);
    function editPost() {
             try {
                 let response = fetch(`http://localhost:7070/posts/${id}`, {
                    method: "PUT",
                    body: JSON.stringify({id: id, title: title, text: text})
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
            <div className="card-body top-border">
                <img src= { avatar } style={ {width: "60px", height: "60px"} } alt="..."/>
                <div className='card-menu__container'>
                    <input type="text" className="card-title" defaultValue={ data.title } onBlur = { (e) => { setTitle(e.target.value) } }/>
                    <input type="text" className="card-text" defaultValue={ data.text } onBlur = { (e) => { setText(e.target.value) } }/>
                </div> 
                <div className='align-bottom'>
                    <i className="bi bi-emoji-smile"></i>
                </div>    
            </div> 
            <div className='reaction-container no-border'>
                <div className='content-type'>
                    <i className="bi bi-camera icon-offset"></i>
                    <span>Photo/Video</span>
                </div>
                <div className='content-type'>
                    <i className="bi bi-person icon-offset"></i>
                    <span>Tag people</span>
                </div>
            </div>
            <div className='reaction-container no-border'>
            <div className='content-type'>
                    <i className="bi bi-emoji-laughing icon-offset"></i>
                    <span>Feelings/Actions</span>
                </div>
                <div className='content-type'>
                    <i className="bi bi-geo-alt icon-offset"></i>
                    <span>Mark a place</span>
                </div>
            </div>
            
            <div className="card-body top-border align-right">
                <NavLink to="/posts" className="btn btn-primary icon-offset">Back</NavLink>
                <NavLink to="/posts" className="btn btn-primary" onClick={editPost}>Save changes</NavLink>
            </div>
        </div>
    )


}