import { useState } from 'react'
import './App.css'
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <>
      <BrowserRouter >
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter >

    </>
  )
}

export default App
