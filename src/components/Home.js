import React from 'react'
import { motion } from 'framer-motion';
import './Home.css'

function Home() {
  return (
    <div className=''>
        <div>
       <div id="welcome" className='container d-block text-center w-50 align-content-center my-3'>
       <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ELearning
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        No boundaries for Learning :-)
      </motion.p>
       </div>
        {/* carousel */}
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.homeworkhelpglobal.com/wp-content/uploads/2019/03/studying-student-on-desk.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://lh3.googleusercontent.com/-P9ZKWa9oQ6A/YDKZaeKM-9I/AAAAAAAAIl0/zOh-LfO54x89uiGjqvUm2DP4dex4NHUmwCLcBGAsYHQ/w1200-h630-p-k-no-nu/magdalene_college_library.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://nhwomensfoundation.org/wp-content/uploads/2017/06/Female-student-studying-at-college-library-620952978_2125x1416-1024x683.jpeg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className='mt-4 mb-4 w-100 m-auto'>
        <p className='ps-4 pt-3 pb-3'>Unlock a world of knowledge at your fingertips! Explore a wide variety of books across genres, curated to enhance your reading experience. Immerse yourself in captivating stories, insightful non-fiction, and educational resources carefully selected to inspire and inform. With ELearning, your next great read is just a click away!</p>
      </div>
    <footer className='w-100 bg-dark text-light'>
      <div className='d-flex justify-content-between '>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"  style={{width:"80px"}} className="rounded-4 mt-3 ms-2" alt="no img" />
      </div>
      <div className='d-flex justify-content-evenly align-items-center'>
        <p className="lead me-5">Home</p>
        <p className="lead mx-5">About</p>
        <p className="lead ms-5 me-3">FAQ's</p>

      </div>
      </div>
      <div className='d-flex justify-content-around '>
        <div></div>
        <div className='d-flex justify-content-around my-3'>
        <p className="lead me-5">Contact Us : </p>
        <img src="https://www.transparentpng.com/download/instagram/T7PgIO-round-instagram-background.png" style={{height:'40px',widht:'40px'}} alt="insta icon" className='me-5 rounded-5'/>
        <img src="https://toppng.com/uploads/preview/linkedin-color-icon-linkedin-logo-round-11562920732qctvxkrdcd.png" style={{height:'40px',widht:'40px'}} alt="linkedin icon" className='me-5 rounded-5'/>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/660/856/small_2x/facebook-logo-on-transparent-isolated-background-free-vector.jpg" style={{height:'40px',widht:'40px'}} alt="facebook icon" className='me-5 rounded-5'/>
        </div>
        <div></div>
      </div>
    </footer>
      </div>
    </div>
  )
}

export default Home