import { useHistory } from 'react-router-dom';
import useFormContext from "../hooks/useFormContext";

const UserInfo = () => {
    //get context and history
    const { data, handleChange } = useFormContext();
    const history = useHistory();

    function handleNext() {
       history.push("/choose-rec-method");  
    }

    console.log(data)
    
    return (
        <div className="login">
            <form className="login--form">
                <h1>Get Started </h1>
                <br />
                <label htmlFor="fname">Name</label>
                <br />
                <input
                    id="fname"
                    type="text"
                    name="fname"
                    placeholder="John Doe"
                    value={data.fname}
                    onChange={handleChange}
                    required
                />
                <br />
            </form>
            <br></br>
            <div className="all-forms">
                <div className="buttons prev--next">
                    <button type='button' onClick={handleNext}>NEXT</button>
                </div>
            </div>
        </div>
    );
  
};

export default UserInfo;
