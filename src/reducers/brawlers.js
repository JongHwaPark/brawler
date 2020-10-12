export const SET_BRAWLERS = 'set/BRAWLERS';
const GET_BRAWLERS = 'get/BRAWLERS';

export const setBrawlers = (payload) => ({ type: SET_BRAWLERS, payload:payload });
export const getBrawlers = () => ({ type: GET_BRAWLERS });

const initialState = {
};

const brawler = (state = initialState, action) => {
    switch (action.type) {
        case SET_BRAWLERS:
            return action.payload;
        case GET_BRAWLERS:
            return state;
        default:
            return state;
    }
};

export default brawler;
