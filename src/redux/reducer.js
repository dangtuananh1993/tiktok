/** @format */
const initState = {
    filter: {
        search: "",
        status: "all",
        priority: [],
    },
    todoList: [
        { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Hiphop", completed: true, priority: "Hight" },
        { id: 3, name: "Learn React", completed: false, priority: "Low" },
    ],
};

const rootReducer = (state = initState, action) => {};
