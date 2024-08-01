import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-50 min-h-screen">
            <header className="container px-4 pt-8 mx-auto">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold tracking-[0.3em] text-white uppercase">Todo</h1>
                    <button><MoonIcon className="fill-blue-700" /></button>
                </div>

                <form className="flex items-center gap-4 px-4 py-4 mt-8 overflow-hidden bg-white rounded-md">
                    <span className="inline-block w-4 h-4 border-2 rounded-full"></span>
                    <input className="w-full text-gray-400 outline-none"
                        type="text" placeholder="Create a new todo" />
                </form>
            </header>
            <main className="container px-4 mx-auto mt-8">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-4 h-4 border-2 rounded-full "></button>
                        <p className="text-gray-400 grow">Complete online Javascript curse in bluuweb.</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-4 h-4 border-2 rounded-full "></button>
                        <p className="text-gray-400 grow">Complete online Javascript curse in bluuweb</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none inline-block w-4 h-4 border-2 rounded-full "></button>
                        <p className="text-gray-400 grow">Complete online Javascript curse in bluuweb</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>

                    <section className="flex justify-between px-4 py-4">
                        <span className="text-gray-400">5 item left</span>
                        <button className="text-gray-400">Clear complete</button>
                    </section>
                </div>
            </main>
            <section className="container px-4 mx-auto mt-8">
                <div className="flex justify-center gap-8 p-4 bg-white rounded-md">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <p className="mt-8 text-center">Drag an drop to reorder list</p>
        </div>
    )
}

export default App