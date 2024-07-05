import  avatar  from '../assets/avatar.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import { DateTimePretty } from '../utils/DateTimePretty';

export const Post = (props) => {
    const { data } = props;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/posts/${data.id}`);
    };

    return(
        <div key={data.id.toString()} className="card" onClick={handleClick}>
            <div className="card-header title-alignment">
            <img src= { avatar } style={ {width: "60px", height: "60px"} } alt="..."/>
            <div className='info-container'>
                <span className='nickname'>{ data.nickname }</span>
                <div className='info'>
                    <span className='icon-offset' >{ data.status }</span>
                    <div>{ DateTimePretty(data.created) }</div>
                </div>
            </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ data.title }</h5>
                <p className="card-text">{ data.text }</p>
                
                <div className="card-text reaction-container">
                    <div>
                        <i className="bi bi-hand-thumbs-up"/><span className='reaction'>Like</span>
                    </div>
                    <div>
                        <i className="bi bi-chat-left"/><span className='reaction'>Comment</span>
                    </div>
                </div>
                <div className="card-text input-container">
                    <input className="res-input" type='text' placeholder='Input comment here ...'/>
                    <div className='pictograms'>
                        <i className="bi bi-emoji-smile"></i>
                        <i className="bi bi-camera"></i>
                        <i className="bi bi-filetype-gif"></i>
                    </div>
                </div>
            </div>
        </div>
    )

}