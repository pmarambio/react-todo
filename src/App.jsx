import { useState } from 'react'
import Header from "./components/Header"
import TodoComputed from "./components/TodoComputed"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"

const initialStateTodos = [
    { id: 1, title: "Complete online Javascript curse in bluuweb", completed: true },
    { id: 2, title: "Go to the gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
]

const App = () => {

    const [todos, setTodos] = useState(initialStateTodos)

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos([...todos, newTodo])
    }

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-50 min-h-screen">
            {/* Header  */}
            <Header />
            <main className="container px-4 mx-auto mt-8">
                {/* TodoCreate  */}
                <TodoCreate createTodo={createTodo} />

                {/* TodoList (Todo Item) TodoUpdate y TodoDelete */}
                <TodoList todos={todos} />

                {/* TodoComputed  */}
                <TodoComputed />

                {/* TodoFilter */}
                <TodoFilter />
            </main>

            <footer className="mt-8 text-center">Drag an drop to reorder list wiii</footer>
        </div>
    )
}

export default App