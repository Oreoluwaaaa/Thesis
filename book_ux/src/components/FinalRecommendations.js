import { useEffect, useState } from "react";
import useFormContext from "../hooks/useFormContext";
import { fetchFinalRecommendations } from "../api";  


const FinalRecommendations = () => {
    //get context and history
    const {data} = useFormContext();
    const [recsFinal, setRecsFinal] = useState([]);
    
    //get final recs from api
    useEffect(() => {
        const chosenIndices = data.chosenIndices
        fetchFinalRecommendations(chosenIndices)
            .then(recommendations => setRecsFinal(recommendations))
            .catch(err => console.error("Error fetching recommendations by description", err));
    }, [data]);


    return (
        <div className="recommendations">
            <h1>{data.fname ? data.fname : 'Guest'}, here are your final recommendations!</h1>
            <div className="book-grid2">
                {recsFinal.map(book => (
                    <div key={book.index} className="book-item2">
                        <img src={book.image || 'default-cover.jpg'} alt={book.title} />  
                        <h3>{book.title}</h3>
                        <p>Rating: {book.rating}</p>
                        <p>ISBN13: {book.isbn13}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinalRecommendations;
