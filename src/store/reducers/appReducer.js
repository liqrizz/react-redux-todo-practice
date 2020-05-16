const initState = {
    tasks: [],
    inputCV: '',
    selectedStatus: 2
}

const removeFilterById = (arr, id) => {
    return arr.filter(obj=>obj.id!==id)
}

const removeFilterByStatus = (arr, status) => {
    if(status===2) return [];
    return arr.filter(obj=>obj.status!==status)
}

const editStatusMap = (arr, id, status) => {
    return arr.map(obj=>{
        if(obj.id===id) obj.status = status;
        return obj
    })
}


const reducerObj = {
    ADD_TASK: (state, payload) => {
        if (payload.name==='') return state;
        return {
            ...state,
            tasks: [...state.tasks, payload],
            inputCV: ''
        };
    },

    INPUT_TYPING: (state, payload) => ({
        ...state,
        inputCV: payload.inputCV
    }),

    REMOVE_TASK: (state, payload) => ({
        ...state,
        tasks: removeFilterById(state.tasks, payload.id),
    }),

    RM_ALL: (state, payload) => ({
        ...state,
        tasks: removeFilterByStatus(state.tasks, payload.selectedStatus)
    }),
    
    TASK_STATUS_COMPLETE: (state, payload) => ({
        ...state,
        tasks: editStatusMap(state.tasks, payload.id, 1)
    }),

    TASK_STATUS_INCOMPLETE: (state, payload) => ({
        ...state,
        tasks: editStatusMap(state.tasks, payload.id, 0)
    }),
            
    EDIT_SELECTED_STATUS: (state, payload) => ({
        ...state,
        selectedStatus: payload.status
    })
}

export const appReducer = (state = initState, action) => {
    if(reducerObj[action.type]===undefined) 
        return state;
        
    return reducerObj[action.type](state, action.payload);
}