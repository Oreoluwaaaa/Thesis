import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useFormContext from "../hooks/useFormContext";
import { fetchRecommendationsByGenre, fetchRecommendationsByDescription } from "../api";  

const Recommendations = () => {
    //get context and history
    const {data} = useFormContext();
    const history = useHistory();

    //get indices and initialise recommendedBooks
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const chosen = data.chosenIndices

    //update the context on click
    const handle = (event) => {
        const choice = event.target.value;  
        const selectedBook = recommendedBooks.find(book => book.title === choice);  
        if (selectedBook) {
            chosen[parseInt(event.target.name)] = selectedBook.index;  
        }
        console.log(data);
        
    };

    const handleNext = () => {
        history.push("/final-recommendations");  
    };

    //get recommendations from api
    useEffect(() => {
        const userGenre = data.genreInputData; 
        const userDesc = data.descInputData;
        
        if(userDesc !== ""){
            console.log(userDesc)
            fetchRecommendationsByDescription(userDesc)
                .then(recommendations => setRecommendedBooks(recommendations))
                .catch(err => console.error("Error fetching recommendations by description", err));
        }
        else{
            fetchRecommendationsByGenre(userGenre)
                .then(recommendations => setRecommendedBooks(recommendations))
                .catch(err => console.error("Error fetching recommendations by genre", err));
        
        }
    }, [data]);


    console.log(recommendedBooks)

    return (
        <div className="recommendations">
          <div className="page-layout">
            
            <div className="dropdown-section">
              <h1>{data.fname ? data.fname : 'Guest'}, here are your first set of recommendations</h1>
              <h3>Select which three of these you like best:</h3>
              <div className="form-container">
                <form>
                  {[...Array(3)].map((_, index) => (
                    <div key={`chosen${index}`}>
                      <select
                        id="chosenIndices"
                        name={`${index}`}
                        value={chosen[`genre${index}`]}
                        onChange={handle}
                      >
                        <option key={"none"} value={"none"}></option>
                        {recommendedBooks.map((element, i) => (
                          <option key={i} value={element.title}>
                            {element.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </form>
                <button id="genre-button" type="button" onClick={handleNext}>
                  GET RECS!
                </button>
              </div>
            </div>
      
            <div className="recommendations-list">
              {recommendedBooks.map((book) => (
                <div key={book.index} className="book-item">
                  <img src={book.image || "default-cover.jpg"} alt={book.title} />
                  <h3>{book.title}</h3>
                  <p>Rating: {book.rating}</p>
                  <p>ISBN13: {book.isbn13}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
      
};

export default Recommendations;
