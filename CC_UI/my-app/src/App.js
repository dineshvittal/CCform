import React from 'react';
import './App.css';
import { Redirect,Link } from "react-router-dom";


class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fname: '', lname: '', Dob: '', amount: 0,age: 0,CC_Type:'',
      errors: { fname: '', lname: '', age: '', amount: '', platinum:'',visa:'' },
      creditcardtype:[]
    }
    this._handleInputChange = this._handleInputChange.bind(this)
  }

  calculateAge = () => {
      var today = new Date();
      var birthDate = new Date(this.state.Dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
  }
  handledateOnBlur = () => {
    const { age } = this.state;
    var agee = this.calculateAge();
    this.setState({
  age: agee,
}); 
  }
  
  
  handleblur = () => {
    const { amount,creditcardtype,CC_Type } = this.state;
    if (amount>0 && amount <=30000) {
      this.setState({CC_Type: creditcardtype[0]});
    } else if (amount > 30000)
    {
      this.setState({CC_Type: creditcardtype[1]});
    }
  }

  _handleInputChange (event) {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }
  
  componentDidMount() {
    fetch("https://localhost:44336/api/types")
    .then(response => response.json())
        .then(response => {
          this.setState({
            creditcardtype: response
          },()=>{console.log(this.state.creditcardtype)})
        })
        .catch(err => { console.log(err); 
        });  
      }

      

    handleValidation = () => {
    const { fname, lname, age, Dob,amount,creditcardtype } = this.state;
    let errors = { fname: '', lname: '', age: '', amount: '', platinum:'',visa:'' };
    var chk = 0;
    console.log(this.state.CC_Type)
   
    if (!fname) {
      errors.fname = 'First Name is required';
    }
    if (!lname) {
      errors.lname = 'Last Name is required';
    }
    if (!Dob) {
      errors.age = 'Dob is required';
     } else if (age<18) {
      errors.age = 'Age cannot be less than 18';
    }

    if (!amount) {
      errors.amount = 'Amount is required';
     } else if (isNaN(amount)) {
       errors.amount = 'Amount must be a number';
     }
     console.log(this.state.creditcardtype[0])

    this.setState({ errors });
    if(errors.fname === '' && errors.lname === '' && errors.age === '' && errors.amount === ''){
      this.Create();
      if (amount>0 && amount <=30000) {
        errors.platinum = 'Your ' + creditcardtype[0] + ' Successfully allocated';
        chk = 1;
        console.log(this.state.CC_Type)
      } else if (amount > 30000)
      {
        errors.platinum = 'Your ' + creditcardtype[1] + ' Successfully allocated';
        chk = 2;
        
      }
      
        this.setState({fname: ''});
        this.setState({lname: ''});
        this.setState({Dob: ''});
        this.setState({amount: ''});
        if (amount>0 && amount <=30000) {
        this.props.history.push({pathname: '/Result',search:this.chk,state:this.state.CC_Type}) ; 
      } else if (amount > 30000)
      {
        this.props.history.push({pathname: '/Ctest',search:this.chk,state:this.state.CC_Type}) ; 
      }
    }
  }

  Create = () =>{
    fetch("https://localhost:44336/api/submmits", {
  "method": "POST",
  "headers": {
    "x-rapidapi-host": "https://localhost:44336",
    "x-rapidapi-key": "apikey",
    "content-type": "application/json",
    "accept": "application/json"
  },
  "body": JSON.stringify({
    Fname: this.state.fname,
    Lname: this.state.lname,
    Dob: this.state.Dob,
    Salary: this.state.amount,
    CC_Type: this.state.CC_Type
  })
})
.then(response => response.json())
.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err);
});
  }

  render() {
    const { errors,fname,lname,Dob,amount,type } = this.state;
    
    return (
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Credit Card Application</h1>
              <form className="d-flex flex-column">
                <label htmlFor="fname">
                  First Name:
                  <input type='text' className="form-control" name="fname" value={fname}  onChange={this._handleInputChange} />
                </label>
                {errors.fname !== '' && <span style={{color: "red"}}>{this.state.errors.fname}</span>}<br />
                <label htmlFor="lname">
                  Last Name:
                  <input type='text' className="form-control" name="lname" value={lname} onChange={this._handleInputChange} />
                </label>
                {errors.lname !== '' && <span style={{color: "red"}}>{this.state.errors.lname}</span>}<br />
                <label htmlFor="Dob">
                  Date of Birth:
                  <input type="date" id="start" className="form-control" name="Dob" value={Dob} onBlur={this.handledateOnBlur} onChange={this._handleInputChange} />
                </label>
                {errors.age !=='' && <span style={{color: "red"}}>{this.state.errors.age}</span>}<br />
                <label htmlFor="amount">
                  Annual Income:
                  <input type='text' name="amount" className="form-control" value={amount} onBlur={this.handleblur} onChange={this._handleInputChange} />
                </label>
                {errors.amount !== '' && <span style={{color: "red"}}>{this.state.errors.amount}</span>}<br />
                <button className="btn btn-primary" type='button'name="submit" onClick={this.handleValidation}>
                  Submit
                </button><br />
                <span style={{color: "green"}}>{errors.platinum}</span>
               {/*  {creditcardtype > 0 && creditcardtype <= 30000 && <span style={{color: "red"}}>{this.state.errors.platinum}</span>}
                {creditcardtype > 30000 && <span style={{color: "red"}}>{this.state.errors.visa}</span>} */}
              </form>
            </div>
          </div>
        </div>
    )
  }
}
export default App;
