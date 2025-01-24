import {useHistory} from "react-router-dom";
import bookImage from '../books.png';

const Title = () => {
    let history = useHistory();

    function handleClick(){
        history.push("/userInfo");
    }
    return (  
        <div className="title-page">
            <div className="title-page--content">
                <h1 className="title">Book Project</h1>
                <div className = "title-page--desc">Welcome! Excited to find you great possible reads today!</div>
                <button onClick = {handleClick}>Get Started</button>
            </div>
            <div className='body'>
                <img src= {bookImage} alt="book" />
            </div>
            
            
        </div>
    );
}
 
export default Title;