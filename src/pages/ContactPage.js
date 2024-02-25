// En ContactPage.js

import React, { Component } from 'react';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // enviar los datos a API REST
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>Email:</label>
          <input type="email" name="email" onChange={this.handleChange} />
          <label>Message:</label>
          <textarea name="message" onChange={this.handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;