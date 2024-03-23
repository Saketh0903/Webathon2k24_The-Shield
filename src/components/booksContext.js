import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  
  const [books,setBooks]=useState([
        {
          id: 1,
          title: "The Martian",
          author: "Andy Weir",
          price: 12.99,
          rating: 4.3,
          image: "https://i.pinimg.com/originals/41/71/d1/4171d19d22ed57e9f86e600fe22e9d23.jpg",
          genre: "Science Fiction",
          description: "Astronaut Mark Watney is stranded on Mars and must find a way to survive."
        },
        {
          id: 2,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          price: 9.99,
          rating: 4.7,
          image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1374681632i/659469.jpg",
          genre: "Adventure",
          description: "Bilbo Baggins, a hobbit, is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug."
        },
        {
          id: 3,
          title: "Romeo and Juliet",
          author: "William Shakespeare",
          price: 7.99,
          rating: 4.5,
          image: "https://th.bing.com/th/id/R.a9ce95996643582689268718008e4a4b?rik=yM%2fNeyYw9jWoGw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-KuKqtBiWvI8%2fUcoET_gfzcI%2fAAAAAAAACXc%2fK5EGIVIDCO4%2fs1600%2fBook%2bCover%2bFixed.jpg&ehk=FEh%2fSFzvtmo%2bgQTBkRieQeqgPpe5Ex7xTdEBs4%2f3UsI%3d&risl=&pid=ImgRaw&r=0",
          genre: "Drama",
          description: "The tragic love story of Romeo, son of Montague, and Juliet, daughter of Capulet, who fall deeply in love but are destined for tragedy."
        },
        {
          id: 4,
          title: "Good Omens",
          author: "Neil Gaiman, Terry Pratchett",
          price: 11.99,
          rating: 4.6,
          image: "https://hachette.imgix.net/books/9781473227835.jpg?auto=compress,format",
          genre: "Comedy",
          description: "An angel and a demon, who have become accustomed to life on Earth, team up to prevent the apocalypse."
        },
        {
          id: 5,
          title: "Sophie's World",
          author: "Jostein Gaarder",
          price: 10.99,
          rating: 4.4,
          image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1343459906i/10959.jpg",
          genre: "Philosophy",
          description: "A young girl receives mysterious letters that teach her about the history of philosophy and the nature of reality."
        },
        {
          id: 6,
          title: "To All the Boys I've Loved Before",
          author: "Jenny Han",
          price: 8.99,
          rating: 4.2,
          image: "https://i.pinimg.com/originals/c9/38/32/c938321bbf0d68ab48b3cedbc3996c80.jpg",
          genre: "Romance",
          description: "When Lara Jean's secret love letters are mailed to her former crushes, her love life goes from imaginary to out of control."
        },
        {
          id: 7,
          title: "1984",
          author: "George Orwell",
          price: 9.99,
          rating: 4.8,
          image: "https://m.media-amazon.com/images/I/7180qjGSgDL.AC_UF1000,1000_QL80.jpg",
          genre: "Science Fiction",
          description: "A dystopian novel set in a totalitarian regime, where individuality is suppressed and government surveillance is omnipresent."
        },
        {
          id: 8,
          title: "The Da Vinci Code",
          author: "Dan Brown",
          price: 11.99,
          rating: 4.5,
          image: "https://img.bookchor.com/images/cover/568/9780552149518.jpg",
          genre: "Adventure",
          description: "A symbologist and a cryptologist follow clues hidden in famous works of art to uncover a secret that could shake the foundations of Christianity."
        },
        {
          id: 9,
          title: "Hamlet",
          author: "William Shakespeare",
          price: 7.99,
          rating: 4.6,
          image: "https://cdn.kobo.com/book-images/389c6a10-f026-4bbe-a132-34072053689a/1200/1200/False/hamlet-271.jpg",
          genre: "Drama",
          description: "Prince Hamlet seeks revenge for his father's murder in this tragic play."
        },
        {
          id: 10,
          title: "The Hitchhiker's Guide to the Galaxy",
          author: "Douglas Adams",
          price: 10.99,
          rating: 4.7,
          image: "https://m.media-amazon.com/images/I/51x53xtKI0L.jpg",
          genre: "Comedy",
          description: "Arthur Dent embarks on a bizarre journey through space after Earth is demolished to make way for a hyperspace bypass."
        },
        {
          id: 11,
          title: "The Republic",
          author: "Plato",
          price: 8.99,
          rating: 4.4,
          image: "data:image/jpeg;base64,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",
          genre: "Philosophy",
          description: "Plato's philosophical dialogue that discusses justice, the ideal state, and the philosopher-king."
        },
        {
          id: 12,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          price: 9.99,
          rating: 4.8,
          image: "https://rukminim2.flixcart.com/image/416/416/kvtuxe80/book/h/g/5/pride-prejudice-premium-paperback-penguin-india-original-imag8nb7vpjeh5na.jpeg?q=70&crop=false",
          genre: "Romance",
          description: "The story of Elizabeth Bennet and Mr. Darcy, two individuals who must overcome their pride and prejudice to find love."
        },
        {
          id: 13,
          title: "Brave New World",
          author: "Aldous Huxley",
          price: 10.99,
          rating: 4.3,
          image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/4/g/b/brave-new-world-english-original-imagqmrstkhzgqst.jpeg?q=90&crop=false",
          genre: "Science Fiction",
          description: "A dystopian society where humans are engineered and conditioned to live in a harmonious but oppressive world."
        },
        {
          id: 14,
          title: "The Adventures of Huckleberry Finn",
          author: "Mark Twain",
          price: 8.99,
          rating: 4.6,
          image: "https://m.media-amazon.com/images/I/91sBZnKzEfL.AC_UF1000,1000_QL80.jpg",
          genre: "Adventure",
          description: "Huckleberry Finn escapes his abusive father and embarks on a journey down the Mississippi River with a runaway slave."
        }
  ])


  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
