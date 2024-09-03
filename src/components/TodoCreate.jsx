import { useEffect, useState } from "react"

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState('')

    const handleSubmitAddTodo = (e) => {
        e.preventDefault()
        console.log(title)

        if (title.trim().length > 0) {
            createTodo(title)
            setTitle("")
        }
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmitAddTodo} className="flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md">
            <span className="inline-block w-4 h-4 border-2 rounded-full"></span>
            <input className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
        </form>
    )
}

export default TodoCreate