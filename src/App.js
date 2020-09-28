import React, {Component} from 'react';

import './App.css';

class App extends Component {

  //Create Constructor & set the intial state
  constructor(props){
    super(props);
    this.state = {
      users: []
      //The initial Array is empty 
        //The Logic of this program is to 
        //continue to push data onto an
        //existing array
    }
  }

  //Called as soon as the component is rendered in the DOM
  componentDidMount(){

    //Pass URL to connect back-end
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(res => {
      if(res && res.data){
        //spread syntax takes array from API
        //Combines the two arrays
        this.setState({ users: [...this.state.users, ...res.data]})
      }
    }); 

  }

  //Access data to output
  renderUsers() {

    if ( this.state.users.length <= 0){
      return <div> Loading..</div>
    }
    else{
      return this.state.users.map((val, key) => {
        //key ReactJS updates DOM changes
        return <div key={key}>{val.name} | {val.age}</div>;
      });

    }


  }

  render(){      
      return (
        <div className="App">
          {this.renderUsers() }
        </div>
      );
  }


}

export default App;
