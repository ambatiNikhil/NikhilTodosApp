import { useState } from "react" 
import './todos.css'


const TodosManager = () => {
    const [currentTodo , setCurentTodo] = useState(" ")
    const [allTodos,setAllTodos] = useState([])
    const [editingIndex , setEditingIndex] = useState(undefined)
    const handleChange = (event) => {
        
        setCurentTodo(event.target.value)
        console.log(event.target.value)
    }

    const handleSubmission = () => {
        if(currentTodo === " " || currentTodo.length > 20) {
            alert("Canot enter this Task")
        }

        else if (allTodos.includes(currentTodo)){
            alert("Task already entered in list")
        }

        else if(editingIndex !== undefined){
            const  newEditedTodoList = allTodos.map((todo,index) => {
                if(index === editingIndex){
                    return currentTodo
                }
                else {
                    return todo
                }
            })
            setAllTodos(newEditedTodoList)
            setCurentTodo(" ")
            setEditingIndex(undefined)
        }
       else {
        const todoList = [...allTodos,currentTodo]
        setAllTodos(todoList)
        setCurentTodo(" ")
       }
        
    }

    const handleEdit = (index) => {
        setEditingIndex(index)
        const editingTask = allTodos[editingIndex]
        setCurentTodo(editingTask)
    }

    const handleDelete = (delteIndex) => {
       const newFilteredArray = allTodos.filter((todo,index) => {
            return index !== delteIndex
        })
        setAllTodos(newFilteredArray)
    }

    return (
        <>
        <h1 className="heading">My Todo App</h1>
        <input  type="text" value={currentTodo} onChange = {handleChange}/>
        <button className="btn btn-primary button" style= {{margin : 5}} onClick = {handleSubmission}>Submit</button>
        <table style={{width : 800 , margin:10}} className ="table table-success table-striped">
        <thead>
            <tr>
                <td>Sl.no</td>
                <td>Task</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
           {allTodos.length === 0 ? (<p style={{color:"white"}}>Enter a valid Task</p>) : allTodos.map((todo,index) => {
                return (
                    <tr key = {index}>
                        <td>{index + 1 }</td>
                        <td>{todo}</td>
                        <td><button className="btn btn-warning" style={{margin : 10}} onClick = {() => handleEdit(index)}>Edit</button> 
                        <button className="btn btn-success" onClick = {() => handleDelete(index)}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
  
        </table>

        </>
    )
}

export default TodosManager