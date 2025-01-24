import React from 'react';
import { useHistory } from 'react-router-dom';
import useFormContext from "../hooks/useFormContext";

const ChooseRecMethod = () => {
    //get context and history
    const history = useHistory();
    const {data} = useFormContext();
    console.log(data)

    function handleGenreClick() {
        history.push("/choose-genres");  
    }

    function handleDescriptionClick() {
        history.push("/description-input");  
    }

    return (
        <div className="choose-rec-method">
            <h1>Welcome, {data.fname ? data.fname : 'Guest'}!</h1>
            <h1>How would you like to get your recommendations?</h1>
            <div className="buttonscr">
                <button className="choose-rec" onClick={handleGenreClick}>By Genre</button>
                <button className="choose-rec" onClick={handleDescriptionClick}>By Description</button>
            </div>
        </div>
    );
};

export default ChooseRecMethod;