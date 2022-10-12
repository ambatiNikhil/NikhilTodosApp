import {useEffect, useState} from  "react"

 const MyFunctionalComponent = (props) => {

    const [number , setNumber] = useState(0)
    const [title , setTitle] = useState("Hello")

    const handleChange = (newTitle) => {
        setTitle(newTitle)
        setNumber(Math.round(Math.random() * 10))
    }
    useEffect(() => {
        console.log("Component is mounted")
    }, [])

    useEffect(() => {
        console.log("component is title updated")
    }, [title , number])

    
    
    

    return (
        
    
        <>
        <h1>This my Functional component with userId : {props.userId}</h1>
        <p>number of students {number}</p>
        
        <p>{title}</p>
        
        <button onClick={() => {handleChange("Welcome")}}>Change the number</button>
        </>
    )
}

export default MyFunctionalComponent