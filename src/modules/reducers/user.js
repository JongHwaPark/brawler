export const SET_USER = 'set/USER';
export const GET_USER = 'get/USER';

export const SET_BATTLE = 'set/BATTLE';
export const GET_BATTLE = 'get/BATTLE';

export const setUser = (payload) => ({ type: SET_USER, payload:payload });
export const getUser = () => ({ type: GET_USER });

export const setBattle = (payload) => ({ type: SET_BATTLE, payload:payload });
export const getBattle = () => ({ type: GET_BATTLE });

const initialState = {
    user:{},
    battle:[],
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user:action.payload
            };
        case GET_USER:
            return state.user;
        case SET_BATTLE:
            console.log(action);
            return {
                ...state,
                battle:action.payload.items,
            };
        case GET_BATTLE:
            return state.battle;
        default:
            return state;
    }
};

export default user;
