import React, { Component } from 'react'


const emailRegex=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/);

const formValid = formErrors =>{
  let valid =true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });
  return valid;  
}
export default class componentName extends Component {

constructor(props) {
  super(props)
  this.state={
    firstName: null,
    lastName: null,
    email: null,
    message: null,
    formErrors:{
      firstName:"",
      lastName:"",
      email:"",
      message:""
    }
  }
}

handleSubmit = e =>{
  e.preventDefault();

  if(formValid(this.state.formErrors)){
    console.log(`
    --SUBMITTING-- 
    First Name: ${this.state.firstName}
    Last Name: ${this.state.lastName} 
    Email: ${this.state.email}
    Message: ${this.state.message}
    `);
    } else{
      console.error("Form Invalid - DISPLAY ERROR MESSAGE");
    }
};

handleChange=e=>{
  e.preventDefault();
  const {name, value} = e.target;
  let formErrors = this.state.formErrors;

  switch (name) {
    case "firstName":
      formErrors.firstName = 
      value.length < 4 
      ? "minimum 4 characters required"
      : "";
      break;
      case "lastName":
      formErrors.lastName = 
      value.length < 4 
      ? "minimum 4 characters required"
      : "";
      break;
      case "email":
      formErrors.email=
      emailRegex.test(value) 
      ?""
      : "Invalid email address";
      break;
      case "message":
      formErrors.message = value.length < 4 
      ?"Cant be blank and has to have more than 4 characters"
      : "";
      break;
    default:
      break;
  }
  this.setState({formErrors,[name]: value});
};


  render() {
    const {formErrors}=this.state;
    return (
      <div className="wrapper">
      <div className="form-wrapper">
      <h1>Contact Me</h1>
      <form onSubmit={this.handleSubmit} noValidate>
      <div className="firstName">
      <label htmlFor="firstName"> First Name</label>
      <input type="text" placeholder="First Name"  name="firstName" noValidate onChange={this.handleChange}
      />
      {formErrors.firstName.length > 0 && (
        <span className="errorMessage">{formErrors.firstName}</span>
      )}
      </div>
      <div className="lastName">
      <label htmlFor="lastName"> Last Name</label>
      <input type="text" placeholder="Last Name"  name="lastName" noValidate onChange={this.handleChange}
      />
      {formErrors.lastName.length > 0 && (
        <span className="errorMessage">{formErrors.lastName}</span>
      )}
      </div>
      <div className="email">
      <label htmlFor="email"> Email</label>
      <input type="email" placeholder="Email"  name="email" noValidate onChange={this.handleChange}
      />
      {formErrors.email.length > 0 && (
        <span className="errorMessage">{formErrors.email}</span>
      )}
      </div>
      <div className="message">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols="15" rows="8" placeholder="Your Message" noValidate onChange={this.handleChange}>
      </textarea>
      {formErrors.message.length > 0 && (
        <span className="errorMessage">{formErrors.message}</span>
      )}
      </div>
      <input className="btn-custom " type="submit" value="Submit" />
      </form>
      </div>
      </div>
    )
  }
}
