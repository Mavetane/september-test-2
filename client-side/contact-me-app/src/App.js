import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
// import getCompanies from './actions/index'

function App () {
  const getCompanies = async () => {
    try {
      const { data } = await axios.get("http://localhost:3007/companies");
      console.log('data', data)
    } catch (e) {
      console.log(e)
    }

  }
  useEffect(() => {
    getCompanies()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        Contact me app
      </header>
      <Form />
    </div>
  );
}

export default App;
