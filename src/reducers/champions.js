export const SET_CHAMPIONS = 'set/CHAMPIONS';
const GET_CHAMPIONS = 'get/CHAMPIONS';

export const setChampions = (payload) => ({ type: SET_CHAMPIONS, payload:payload });
export const getChampions = () => ({ type: GET_CHAMPIONS });

const initialState = {
    format: "",
    type: "",
    version: "",
    data:'',
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHAMPIONS:
            return {
                ...state,
                format: action.payload.format,
                type: action.payload.type,
                version: action.payload.version,
                data:action.payload.data,
            };
        case GET_CHAMPIONS:
            return state;
        default:
            return state;
    }
};

export default summoner;
