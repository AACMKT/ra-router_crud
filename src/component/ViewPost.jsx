import  avatar  from '../assets/avatar.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { DateTimePretty } from '../utils/DateTimePretty';

export const ViewPost = () => {
    const { id } = useParams();
    const [data, setData] = useState('');
    console.log(data, id)

    useEffect(() => {
        (async () => {
             try {
                 let response = await fetch(`http://localhost:7070/posts/${id}`);
                 if (!response.ok) {
                    throw new Error("Unexpected response from server")
                 }
                 const json = await response.json();
                 console.log(json);
                 setData(json.post)
             } catch(e) {
                 console.log(e.message)
             }
             
 
        })()
        
     }, [id]);

     function deletePost() {
        try {
            let response = fetch(`http://localhost:7070/posts/${id}`, {
               method: "DELETE",
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
            <div className="card-header title-alignment">
            <img src= { avatar } style={ {width: "60px", height: "60px"} } alt="..."/>
            <div className='info-container'>
                <span className='nickname'>{ data.nickname }</span>
                <div className='info'>
                    <span className='icon-offset'>{ data.status }</span>
                    <div>{ DateTimePretty(data.created) }</div>
                </div>
            </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ data.title }</h5>
                <p className="card-text">{ data.text }</p>
            </div>
            <div className="card-body top-border align-right">
                <NavLink to="/posts" className="btn btn-primary icon-offset">Back</NavLink>
                <NavLink to={`/posts/edit/${ id }`} className="btn btn-primary icon-offset" >Edit</NavLink>
                <NavLink to="/posts/" style = { {backgroundColor: "red"} } className="btn btn-primary icon-offset" onClick={ deletePost }>Delete</NavLink>
            </div>
        </div>
    )

}