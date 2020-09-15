import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValidatedLoginForm from './ValidatedLoginForm';




function App() {
  // const handleChangeEmail = (event) => {
        
  //   this.setState({"username_or_email": event.target.value});
  // }
  
  // const handleChangePassword = (event) => {
    
  //   this.setState({"password": event.target.value});
  // }
  
  // const handleSubmit = (event) => {
  //   alert('A form was submitted: ' + this.state);
  //   let dataTemp = {"username_or_email": this.state.username_or_email, "password": this.state.password}
  
  
  //   fetch('https://api.onepeloton.com/auth/login', {
  //       method: 'POST',
  //       mode: 'cors',
  //       // We convert the React state to JSON and send it as the POST body
  //       body: JSON.stringify(dataTemp)
  //     })
  //     .then((response) => response.json())
  //     .then(result => {
  //         this.setState({ data: result });
  //         console.log(this.state.data.session_id)
  //     });
  
  //   event.preventDefault();
  // }
  return (
    <div className="App">
      <header className="App-header">
      <ValidatedLoginForm />
        
      </header>
    </div>
  );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <ValidatedLoginForm 
  //     handleSubmit={this.handleSubmit.bind(this)}
  //     handleChangePassword={this.handleChangePassword.bind(this)}
  //     handleChangeEmail={this.handleChangeEmail.bind(this)}

  //     />
        
  //     </header>
  //   </div>
  // );
}

export default App;
