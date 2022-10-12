import { Component } from "react";

class MyClassComponent extends Component { 
    state = {number : 102 , title : "myClass is react" , a : 2, b : 3}
    constructor(props){
        console.log("constructor is called")
        super(props)
        
    }
    

    handleChange = () => {
        this.setState(prevState => {
            console.log(`the previous State of num is ${prevState.number}`)
            return {number : Math.round(Math.random() * 4)}
        })
    }
    
    shouldComponentUpdate = () => {
        console.log("should component update")
        return false;
    }

    componentDidUpdate = () => {
        console.log("component updated")
    }
    render(){
        console.log("render is called")
        const {number,title} = this.state 
         

        return( 
            <>
         <h1>This my Class component with userId : {this.props.userId}</h1>
         <p>number of students {number}</p>
         
         <p>{title}</p>
         
         <button onClick={this.handleChange}>Change the number</button>
         </>

        )
    }
    componentDidMount() {
        console.log("component Did mount is called")
    }
}



export default MyClassComponent;