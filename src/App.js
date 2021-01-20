import './App.css';
import React, { Component } from 'react'
import ComponentData from './ComponentData'
import Node from './Node'
import FilteringOptions from './FilteringOptions'
import Tools from './Tools'
import Concepts from './Concepts'
class App extends Component {
  constructor() {
    super()
    this.state ={
        toolsDisplay: true,
        conceptsDisplay: true
    }
    this.handleToolsChange = this.handleToolsChange.bind(this)
    this.handleConceptsChange = this.handleConceptsChange.bind(this)
  } 

    handleToolsChange() {
      this.setState((prevState) => {
        return {
          toolsDisplay: true,
          conceptsDisplay: false
        }
      }) 
      console.log(this.state.toolsDisplay)
    }
    handleConceptsChange() {
      this.setState((prevState) => {
        return {
          conceptsDisplay: true,
          toolsDisplay: false
        }
      }) 
      console.log(this.state.conceptsDisplay)
    }

  render() {

    return (
      
    <div className="container">
          <FilteringOptions />
        <div className="Appcomps">
          <div className="btns">
                <button onClick={this.handleToolsChange} className="btn">Tools</button>
                <button onClick={this.handleConceptsChange} className="btn">Concepts</button>
          </div>
          <Tools toolsDisplay={this.state.toolsDisplay}/>
          <Concepts conceptsDisplay={this.state.conceptsDisplay} />
        </div>
    </div>
      

  );
  }
  
}

export default App;
