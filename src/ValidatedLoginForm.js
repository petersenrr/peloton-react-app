import React from "react";

class ValidatedLoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        "username_or_email": "",
        "password": "",
        "data": {}
    };
      
    }

    handleChangeEmail = (event) => {
        
        this.setState({"username_or_email": event.target.value});
    }
    handleChangePassword = (event) => {
        
        this.setState({"password": event.target.value});
    }
  
    handleSubmit = (event) => {
      alert('A form was submitted: ' + this.state);
      let dataTemp = {"username_or_email": this.state.username_or_email, "password": this.state.password}
      var stateData = {}
  
      fetch('https://api.onepeloton.com/auth/login', {
          method: 'POST',
          mode: 'cors',
          // We convert the React state to JSON and send it as the POST body
          body: JSON.stringify(dataTemp)
        })
        .then((response) => response.json())
        .then(result => {
            this.setState({ data: result });
            console.log(this.state.data)
        });
  
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.value} name="email" onChange={this.handleChangeEmail} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} name="password" onChange={this.handleChangePassword} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default ValidatedLoginForm;