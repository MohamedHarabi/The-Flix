import React from "react";
import Banner from "../Banner";
import './HomeScreen.css';
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen(){
    return (
     <div className="homeScreen">
     <Nav />

     <Banner />

     <Row 
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fentchNetflixOriginals}
      isLargeRow
     />
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
     <Row title="TOP RATED" fetchUrl={requests.fethcTopRated} />
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
     <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
     <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
     </div>
    )
}

export default HomeScreen;