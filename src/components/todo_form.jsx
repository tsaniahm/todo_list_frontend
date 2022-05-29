import { useState } from "react"
import { postTodoList } from "../services/getApi"

const TodoForm = () => {

    const [todoName, setTodoName] = useState('')
    const [todoDesc, setTodoDesc] = useState('')

    const handleSubmit = async (e) => {
        console.log(todoName)
        e.preventDefault()
        const response = await postTodoList(todoName, todoDesc)
        if (response) {
            window.location.reload()
        }
    }

    const handleName = (e) => {
        setTodoName(e.target.value)
    }

    const handleDesc = (e) => {
        setTodoDesc(e.target.value)
    }
    return (
        <div className="card px-3 px-md-5 py-4 mt-4 border-0 shadow">
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="todoName" className="form-label">Todo List Name</label>
                <input type="text" className="form-control" id="todoName" onChange={handleName} />
            </div>
            <div className="mb-3">
                <label htmlFor="todoDesc" className="form-label">Todo List Description</label>
                <input type="text" className="form-control" id="todoDesc" onChange={handleDesc} />
            </div>
            <button type="submit" className="btn btn-primary">Create Todo</button>
        </form>
        </div>
    )
}

export default TodoForm