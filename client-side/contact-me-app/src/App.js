import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App () {
  const [companies, setCompanies] = useState([])

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3007/companies')
      setCompanies(data)
    } catch (e) {
      console.log(e)
    }
  }, [setCompanies])

  console.log('companies', companies.map(item => <div key={item.id}>{item.name}</div>))
  return (
    <div className="App">
      <header className="App-header">
        Contact me app
      </header>
      <Form />
      {companies.map(item => (<div key={item.id}>
        <h3>{item.name}</h3>
        <label>{item.email}</label><br />
        <label>{item.website}</label><br />
        <label>{item.address}</label>
      </div>))}
    </div>
  );
}

export default App;
