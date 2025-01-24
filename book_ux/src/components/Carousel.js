import BookImage from "./BookImage"; 
import { useState } from "react";

const Carousel = () => {
  const bookTitles = [
    "And Then There were None",
    "Babel",
    "Bunny",
    "Carrie Soto is Back",
    "Catching Fire",
    "Conversations with Friends",
    "Crazy Rich Asians",
    "Disorientation",
    "Eileen",
    "Every Last One",
    "I'm a Fan",
    "Insomnia",
    "Mockingjay",
    "My Year of Rest and Relaxation",
    "Never Lie",
    "No Longer Human",
    "None of This is True",
    "Normal People",
    "Open Water",
    "Our Wives Under the See",
    "Small Pleasures",
    "Stories of Your Life",
    "Study for Obedience",
    "The Ballard of Songbirds and Snakes",
    "The Fury",
    "The Hunger Games",
    "The Last Murder at the End of the World",
    "The Night Circus",
    "The Peculiar Sadness of Lemon Cake",
    "The Perfect Marriage",
    "The Picture of Dorian Gray",
    "The Rachel Incident",
    "The Silent Patient",
    "The Three Body Problem",
    "Yellowface",
    "Yinka, Where is your Huzband"
  ];

  const [bookURLs, setBookURLs] = useState([]);

  
  const loadBookCovers = () => {
    const images = bookTitles.map((title) => {
      return require(`./book-covers/${title}.jpeg`); 
    });
    setBookURLs([...images, ...images]);
  };

  
  useState(() => {
    loadBookCovers();
  }, []);

  const bookImageElements = bookURLs.map((url) => createBookImageElements(url));

  function createBookImageElements(url) {
    return (
      <BookImage 
        key={url}
        source={url}
      />
    );
  }

  return (
    <div className="carousel">
      {bookImageElements}
    </div>
  );
}

export default Carousel;
