import axios from "axios";


export const getTodoList = async () => {

    const url = `http://localhost:3001/todo`;
    try {
        const response = await axios.get(url);

        return response

    } catch (error) {
        console.error(error);
    }
}

export const postTodoList = async (todo_name, todo_desc) => {

    const url = `http://localhost:3001/todo`;
    try {
        const response = await axios.post(url, {
            name_todo: todo_name,
            desc_todo: todo_desc
        });

        return response

    } catch (error) {
        console.error(error);
    }
}

export const updateTodoList = async (todo_name, todo_desc, id) => {

    const url = `http://localhost:3001/todo/${id}`;
    try {
        const response = await axios.patch(url, {
            name_todo: todo_name,
            desc_todo: todo_desc
        });

        return response

    } catch (error) {
        console.error(error);
    }
}

export const deleteTodolIst = async (id) => {
    const url = `http://localhost:3001/todo/${id}`;
    try {
        const response = await axios.delete(url);

        return response

    } catch (error) {
        console.error(error);
    }
}
