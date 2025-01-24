import { useHistory } from "react-router-dom";
import useFormContext from "../hooks/useFormContext";

const Genres = () => {
    //get context, history and other data
    const genres = [
        '', 'art', 'biography', 'books', 'business', 'chick-lit', 'christian', 'classics',
        'comics', 'contemporary', 'cookbooks', 'crime', 'fantasy', 'fiction',
        'gay-and-lesbian', 'graphic-novels', 'historical-fiction', 'history',
        'horror', 'humor-and-comedy', 'manga', 'memoir', 'music', 'mystery',
        'nonfiction', 'paranormal', 'philosophy', 'poetry', 'psychology', 'religion',
        'romance', 'science', 'science-fiction', 'self-help', 'spirituality', 'sports',
        'suspense', 'thriller', 'travel', 'young-adult'
      ];

    const { data } = useFormContext();
    const BookInputData = data.genreInputData
    const history = useHistory();

    //update context
    const handle = (event) => {
        BookInputData[parseInt(event.target.name)] = event.target.value
        console.log(data)
        
    };

    const handlePrev = () => {
        history.push("/choose-rec-method"); 
    };

    const handleNext = () => {
        history.push("/recommendations");  
    };

    return (
        <div className="login--form">
            <h2>Select your Favorite Genres</h2>
            <p id="note1" >Note: they should be in order of preferrence with the first choice being your top reference</p>
            <form>
                {[...Array(5)].map((_, index) => (
                    <div key={`${index + 1}`}>
                        <label htmlFor={`genre${index}`}>Choose a genre:</label>
                        <select
                            id="genre-dropdown"
                            name={`${index}`}
                            value={BookInputData[`genre${index}`]}
                            onChange={handle}
                        >
                            {genres.map((element, i) => (
                                <option key={i} value={element}>{element}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </form>
            <div className="prev--next gb">
                <button id="genre-button" type="button" onClick={handlePrev}>PREV</button>
                <button id="genre-button" type="button" onClick={handleNext}>SUBMIT</button> 
            </div>
        </div>
    );
}
 
export default Genres;