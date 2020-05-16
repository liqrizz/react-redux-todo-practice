import { 
    ADD_TASK, 
    REMOVE_TASK, 
    INPUT_TYPING, 
    EDIT_SELECTED_STATUS, 
    RM_ALL, 
    TASK_STATUS_COMPLETE, 
    TASK_STATUS_INCOMPLETE } from "./types"

export const addTask = name => ({
    type: ADD_TASK,
    payload: {
        id: Date.now(),
        status: 0,
        name,
    }
})

export const remove = id => ({
    type: REMOVE_TASK,
    payload: {id}
})

export const complete = id => ({
    type: TASK_STATUS_COMPLETE,
    payload: {id}
})

export const rmAll = (selectedStatus) => ({
    type: RM_ALL,
    payload: {selectedStatus}
})

export const incomplete = id => ({
    type: TASK_STATUS_INCOMPLETE,
    payload: {id},
})

export const typing = inputCV => ({
    type: INPUT_TYPING,
    payload: {inputCV}
})

export const editSelectedStatus = status => ({
    type: EDIT_SELECTED_STATUS,
    payload: {status}
})