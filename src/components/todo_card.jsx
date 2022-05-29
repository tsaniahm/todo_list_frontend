import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { deleteTodolIst, updateTodoList } from '../services/getApi';

const TodoCard = ({ name_todo, desc_todo, id }) => {

    const [nameTodo, setNameTodo] = useState(name_todo)
    const [descTodo, setDescTodo] = useState(desc_todo)
    const [open, setOpen] = useState(false)

    const handleDelete = async () => {
        const deleteData = await deleteTodolIst(id)

        if (deleteData) {
            window.location.reload()
        }
    }

    const handleOpen = async () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const handleName = (e) => {
        setNameTodo(e.target.value)
    }

    const handleDesc = (e) => {
        setDescTodo(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await updateTodoList(nameTodo, descTodo, id)
        if (response) {
            window.location.reload()
        }
    }

    return (
        <>
            <div className="card mt-3 border-0 shadow" style={{ width: '100%' }}>
                <div className="card-body px-3 px-md-5">
                    <div className="row ">
                        <div className="col-md-11 col-sm-12">
                            <h5 className="card-title">{name_todo}</h5>
                            <p className="card-text">{desc_todo}</p>
                        </div>
                        <div className="col-md-1 col-sm-12 mt-3 mt-md-1">
                            <Icon.TrashFill color='blue' size={35} onClick={handleDelete} />
                            <Icon.PencilSquare color='blue' size={30} onClick={handleOpen} />
                        </div>
                    </div>
                </div>
                <form
                    className={open === true ? ' px-3 px-md-5 py-4 d-block' : '  px-3 px-md-5 py-4 d-none'}
                    onSubmit={handleSubmit}
                >
                    <div className="mb-3">
                        <label htmlFor="todoName" className="form-label">Todo List Name</label>
                        <input type="text" className="form-control" id="todoName" onChange={handleName} value={nameTodo} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="todoDesc" className="form-label">Todo List Description</label>
                        <input type="text" className="form-control" id="todoDesc" onChange={handleDesc} value={descTodo} />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Todo</button>
                </form>
            </div>
        </>
    )
}

export default TodoCard;