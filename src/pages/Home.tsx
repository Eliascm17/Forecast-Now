import React from 'react'
import { SearchBar } from '../components/SearchBar'
import sunlogo from '../assets/wi-day-sunny.svg'
import './Home.css'

export const Home = ({}) => {
    return (
      <>
        <h1 id='title'>Forecast Now<img id='sun' alt='sun-logo' src={sunlogo}></img></h1> 
        <SearchBar />
      </>
    );
}
