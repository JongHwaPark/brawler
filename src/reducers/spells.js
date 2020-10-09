export const SET_SPELLS = 'set/SPELLS';
const GET_SPELLS = 'get/SPELLS';

export const setSpells = (payload) => ({ type: SET_SPELLS, payload:payload });
export const getSpells = () => ({ type: GET_SPELLS });

const initialState = {
    type: "",
    version: "",
    data:'',
};

const summoner = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPELLS:
            return {    
                ...state,
                type: action.payload.type,
                version: action.payload.version,
                data:action.payload.data,
            };
        case GET_SPELLS:
            return state;
        default:
            return state;
    }
};

export default summoner;
