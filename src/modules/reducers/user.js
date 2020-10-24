import { Map, List } from 'immutable';

export const SET_USER = 'set/USER';
export const GET_USER = 'get/USER';
export const SET_USER_SUCCESS = 'set/USER_SUCCESS';
export const SET_USER_FAILED = 'set/USER_FAILED';

export const SET_BATTLE = 'set/BATTLE';
export const GET_BATTLE = 'get/BATTLE';
export const SET_BATTLE_SUCCESS = 'set/BATTLE_SUCCESS';
export const SET_BATTLE_FAILED = 'set/BATTLE_FAILED';

export const setUser = (payload) => ({ type: SET_USER, payload:payload });
export const getUser = () => ({ type: GET_USER });
export const setUserSuccess = (payload) => ({ type: SET_USER_SUCCESS, payload:payload });

export const setBattle = (payload) => ({ type: SET_BATTLE, payload:payload });
export const getBattle = () => ({ type: GET_BATTLE });
export const setBattleSuccess = (payload) => ({ type: SET_BATTLE_SUCCESS, payload:payload });

const initialState = Map({
    user:Map({}),
    battle:List([]),
    loaded:Map({
        user:false,
        battle:false,
    }),
});

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return state.setIn(['loaded','user'],false);
        case SET_USER_SUCCESS:
            return state.set('user',action.payload).setIn(['loaded','user'],true);
        case SET_USER_FAILED:
            return state.setIn(['loaded','user'], false);
        case GET_USER:
            return state.get('user');
        case SET_BATTLE:
            return state.setIn(['loaded','battle'],false);
        case SET_BATTLE_SUCCESS:
            return state.set('battle',action.payload.items).setIn(['loaded','battle'],true);
        case SET_BATTLE_FAILED:
            return state.setIn(['loaded','battle'], false);
        case GET_BATTLE:
            return state.get('battle');
        default:
            return state;
    }
};

export default user;
