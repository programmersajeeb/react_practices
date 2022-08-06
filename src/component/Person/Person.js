import React, {Component} from 'react';



function PersonContent(props) {
  return (
    <>
      <button onClick={props.onChange}>Change State</button>
      <button onClick={props.delete}>Delete State</button>
      <h1 >{props.name} : {props.age}</h1>
    </>
  )
}
class Person extends Component{
  state ={
    person:[
      {name:'Sajeeb', age:'22'},
      {name:'Kumar', age:'21'}
    ]
  }
  
  //SetState Update
  onChangeState = index =>{
    this.setState({
      person:[
        {name:'Asha', age:'17'},
        {name:'Mondol', age:'18'}
      ]
    })
  }

  deletePersonState = index => {
    // const persons = this.state.person; // Main Array
    // Array Copy
    // const persons = this.state.person.slice();
    // const persons = this.state.person.map(item = > item);
    const persons = [...this.state.person]; // Better This One
    persons.splice(index, 1); //Array Delete Method
    this.setState({
      person : persons
    })
  }
    render () {
      // let obj1 = new Component();
      // console.log(obj1);
      // console.log(this.props);

      // const nameList = this.state.person;
      // console.log (nameList);

      const persons = this.state.person.map((personCon, index)=>{
        return(
          <PersonContent 
          key={personCon.name} 
          name={personCon.name} 
          age={personCon.age} 
          onChange={this.onChangeState} 
          delete={this.deletePersonState.bind(this, index)} 
          // delete={()=>this.deletePersonState(index)} 
          />
        )
      })
      // console.log(this.state.person.name);

      return (
        <>
        {persons}
        </>
      );
    }
  }



export default Person;