import React from 'react';
import { useState } from 'react';
import axios from 'axios'

function Form () {
  const [formInfo, setFormInfo] = useState({ name: "", surname: "", email: "", mobileNo: "", question: "" });


  const submitQuestion = async (formInfo) => {
    try {
      const { data } = await axios.post('http://localhost:3007/customers', { ...formInfo })
      console.log("data", data)
    } catch (e) {
      console.log(e)
    }
  }


  const onChange = (e) => {
    const { name, value } = e.target
    setFormInfo({ ...formInfo, [name]: value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (formInfo.name == "") alert('Name input is required')
    if (formInfo.surname == "") alert('Surname input is required')
    if (formInfo.email == "") alert('Email input is required')
    if (formInfo.mobileNo == "") alert('Number input is required')
    if (formInfo.mobileNo.length < 10) alert("Number should be at least 10 digits")
    if (formInfo.question == "") alert('Question input required')
    submitQuestion(formInfo)
    console.log('formInfo', formInfo)
  }


  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={formInfo.name} onChange={onChange} name="name" placeholder="Name" minLength="2" /><br />
        <input type="text" value={formInfo.surname} onChange={onChange} name="surname" placeholder="Surname" /><br />
        <input type="email" value={formInfo.email} onChange={onChange} name="email" placeholder="Email" /><br />
        <input type="Number" value={formInfo.mobileNo} onChange={onChange} name="mobileNo" placeholder="Mobile Number" /><br />
        <input name="question" value={formInfo.question} onChange={onChange} placeholder="Your question here" /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form
