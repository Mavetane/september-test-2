import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';

function App () {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(<Form />);
  const [state, setState] = useState(false)

  const show = (item) => {
    setSelectedCompany(item)
    setState(!state)
    console.log(state)
  }

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3007/companies')
      setCompanies(data)
    } catch (e) {
      console.log(e)
    }
  }, [setCompanies])

  const company = () => companies.map(item => (<div key={item.id}>
    <h3 onClick={() => show(item)} className="company-name">{item.name}</h3>
    <label>{item.email}</label><br />
    <a>{item.website}</a><br />
    <label>{item.address}</label>
  </div>))

  return (
    <div className="App">
      <header className="App-header">
        Contact me app
      </header>
      <div className="container">
        <div className="display-names">
          <h2>Registered Companies</h2>
          {company()}
        </div>
        {state == true ?
          <div className="display-form">
            <h3>{selectedCompany.name}</h3>
            <Form />
          </div> : null}
      </div>
    </div>
  );
}

export default App;
