import { useHistory } from "react-router-dom";
import useFormContext from "../hooks/useFormContext";

const DescriptionInput = () => {
    //get context and history
    const { data } = useFormContext();
    const history = useHistory();

    //update context
    const handle = (event) => {
        data.descInputData = event.target.value
        console.log(data)
    };

    const handleSubmit = () => {
        console.log("User description: ", data.descInputData);
        history.push("/recommendations");
    };

    return (
        <div className="login--form">
            <br></br>
            <h2>Describe the kind of books you want</h2>
            <br></br>
            <textarea
                value={data.DescriptionInput}
                onChange={handle}
                placeholder="Type a description of the kinds of books you're interested in..."
                rows="15"
                cols="75"
            />
            <br /><br />
            <div>
            <button className="di" type="button" onClick={handleSubmit}>SUBMIT</button> 
           
            </div>
        </div>
    );
};

export default DescriptionInput;
