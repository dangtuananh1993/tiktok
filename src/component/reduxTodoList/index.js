/** @format */

function ReduxtTodoList() {
    return (
        <div className="mb-20">
            <h1>REDUX TODOLIST</h1>
            <div>
                <label className="block">Search here</label>
                <input
                    type="text"
                    className="border border-gray-300 p-4 w-full border-solid  mb-3"></input>
                <h2 htmlFor="" className="bold">
                    Filter by Status
                </h2>
                <div className="my-3">
                    <input
                        type="radio"
                        name="status"
                        value="all"
                        className="mr-3"></input>
                    <label className="mr-5">All</label>
                    <input
                        type="radio"
                        name="status"
                        value="completed"
                        className="mr-3"></input>
                    <label className="mr-5">Completed</label>
                    <input
                        type="radio"
                        name="status"
                        value="todo"
                        className="mr-3"></input>
                    <label className="mr-5">To do</label>
                </div>
                <h2 htmlFor="">Filter by Priority</h2>
                <select multiple className="w-full">
                    <option value="hight">Hight</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button className="p-4 text-white bg-blue-500 block cursor-pointer hover:bg-slate-500">
                    Search
                </button>
            </div>
            <div className="mt-[50px] flex items-center border border-solid border-gray-500 p-3">
                <input type="checkbox" className="mr-4" />
                <label>Learn React</label>
                <span className="flex-1 text-right">Hight</span>
            </div>
            <div className="mt-8 flex items-center border border-solid border-gray-500 p-3">
                <input type="checkbox" className="mr-4" />
                <label>Learn React</label>
                <span className="flex-1 text-right">Hight</span>
            </div>
            <div className="mt-8 flex items-center border border-solid border-gray-500 p-3">
                <input type="checkbox" className="mr-4" />
                <label>Learn React</label>
                <span className="flex-1 text-right">Hight</span>
            </div>

            <div className="flex mt-5">
                <input
                    type="text"
                    className="border border-gray-300 p-4 flex-1 border-solid"
                />
                <select name="" id="" className="ml-5">
                    <option value="medium">Medium</option>
                    <option value="hight">Hight</option>
                    <option value="low">Low</option>
                </select>
                <button className="p-4 text-white bg-blue-500 cursor-pointer hover:bg-slate-500 ml-5">
                    Add
                </button>
            </div>
        </div>
    );
}

export default ReduxtTodoList;
