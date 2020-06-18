import React from 'react'
import { SearchBar } from '../components/SearchBar'
import './Home.css'

export const Home = ({}) => {
    return (
      <>
        <h1 id='title'>Forecast Now<img id='sun' src='../assets/wi-day-sunny.svg' /></h1>
        <SearchBar />
      </>
    );
}
