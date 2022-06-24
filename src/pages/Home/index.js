/** @format */

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import ReduxtTodoList from "~/component/reduxTodoList";

const cx = classNames.bind(styles);

// initState
const initState = {
    job: "",
    jobs: [],
    updating: false,
    updatingIndex: "",
};

// Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
const UPDATE_JOB = "update_job";
const SAVE_CHANGE = "save_change_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload: payload,
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload: payload,
    };
};

const deleteJob = (payload) => {
    console.log(payload);
    return {
        type: DELETE_JOB,
        payload: payload,
    };
};

const updateJob = (payload) => {
    return {
        type: UPDATE_JOB,
        payload: payload,
    };
};

const saveChangeJob = (payload) => {
    return {
        type: SAVE_CHANGE,
        payload: payload,
    };
};

// Reducer
const reducer = (state, action) => {
    // console.log(action);

    let newState;

    switch (action.type) {
        case SET_JOB:
            // console.log(state);
            // console.log(action);
            newState = {
                ...state,
                job: action.payload,
            };
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
        case DELETE_JOB:
            const newJobs = state.jobs;
            // console.log(1);
            newState = {
                ...state,
                jobs: newJobs.filter((e) => e != action.payload),
                // jobs: delete newJobs[action.payload],
            };
            break;
        case UPDATE_JOB:
            newState = {
                ...state,
                updating: true,
                updatingIndex: action.payload.index,
                job: action.payload.jobTodo,
            };
            console.log(action.payload);
            console.log(newState);
            break;
        case SAVE_CHANGE:
            const newJobsSave = state.jobs;
            newState = {
                ...state,
                updating: false,
                jobs: newJobsSave.map((jobX, index) => {
                    if (index === action.payload.updatingIndex) {
                        return (jobX = action.payload.job);
                    } else {
                        return jobX;
                    }
                }),
                updatingIndex: "",
            };
            console.log(state.jobs);
            console.log(action.payload.updatingIndex);
            console.log(action.payload.job);
            break;
        default:
            throw new Error("Invalid action.");
    }
    // console.log(newState);
    return newState;
};

function Home() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs, updating, updatingIndex } = state;

    const inputRef = useRef();

    return (
        <div>
            <h2
                className={cx(
                    "test-class-cx",
                    "text-5xl font-bold test-class-cx mb-10 mt-12"
                )}>
                Home Page:
                <span className={cx("text-gray-600")}>Todo List REDUCER</span>
            </h2>
            <div className={cx("mt-5")}>
                <div
                    className={cx(
                        "flex justify-between border-b border-t-0 border-l-0 border-r-0 border-slate-300 border-solid pb-4"
                    )}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={job}
                        className={cx(
                            "border-[1px] border-gray-300 p-5 border-solid flex-1"
                        )}
                        onChange={(e) => {
                            dispatch(setJob(e.target.value));
                        }}
                    />
                    {updating && (
                        <button
                            className={cx(
                                "py-6 px-16 ml-3 bg-[#fe2c55] text-white cursor-pointer font-semibold hover:bg-black active:bg-gray-400 "
                            )}
                            onClick={() => {
                                dispatch(saveChangeJob({ job, updatingIndex }));
                                dispatch(setJob(""));
                                inputRef.current.focus();
                            }}>
                            SAVE CHANGE
                        </button>
                    )}
                    {!updating && (
                        <button
                            className={cx(
                                "py-6 px-16 ml-3 bg-[#fe2c55] text-white cursor-pointer font-semibold hover:bg-black active:bg-gray-400 min-w-[120px]"
                            )}
                            onClick={() => {
                                dispatch(addJob(job));
                                dispatch(setJob(""));
                                inputRef.current.focus();
                            }}>
                            ADD
                        </button>
                    )}
                </div>
                <ul className={cx("py-6 pl-6")}>
                    {jobs.map((jobTodo, index) => (
                        <li
                            key={index}
                            className={cx(
                                "text-3xl py-2 border-b border-t-0 border-l-0 border-r-0 border-slate-300 border-solid"
                            )}>
                            <div className={cx("flex items-center")}>
                                <div className="flex-1">{jobTodo}</div>
                                <button
                                    className={cx(
                                        "py-6 px-10 ml-3 bg-black text-white cursor-pointer font-semibold hover:bg-blue-500 active:bg-gray-400 text-[16px] min-w-[120px]"
                                    )}
                                    onClick={() => {
                                        dispatch(deleteJob(jobTodo));
                                        inputRef.current.focus();
                                    }}>
                                    DELETE
                                </button>
                                <button
                                    className={cx(
                                        "py-6 px-10 ml-3 bg-green-500 text-white cursor-pointer font-semibold hover:bg-blue-500 active:bg-gray-400 text-[16px] min-w-[120px]"
                                    )}
                                    onClick={() => {
                                        dispatch(setJob(""));
                                        dispatch(updateJob({ jobTodo, index }));
                                        inputRef.current.focus();
                                    }}>
                                    UPDATE
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <ReduxtTodoList></ReduxtTodoList>
        </div>
    );
}

export default Home;
