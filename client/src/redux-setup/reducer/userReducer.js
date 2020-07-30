import { ADD_TO_TOKEN } from '../../shared/constants/action-type'

const initState = {
    token: "",
}

export default function (state = initState, action) {
    switch (action.type) {
        case ADD_TO_TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}