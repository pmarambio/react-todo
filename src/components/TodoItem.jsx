import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo
    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none inline-block w-4 h-4 border-2 rounded-full"></button>
            <p className={`text-gray-400 grow ${todo.completed && 'line-through'}`}>{title}</p>
            <button className="flex-none"><CrossIcon /></button>
        </article>
    )
}
export default TodoItem