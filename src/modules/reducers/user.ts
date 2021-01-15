import {Record} from 'immutable';
import {battleLogType} from '../types/battleLog'
import {userType} from '../types/user'

export const SET_USER = 'set/USER' as const;
export const GET_USER = 'get/USER' as const;
export const SET_USER_SUCCESS = 'set/USER_SUCCESS' as const;
export const SET_USER_FAILED = 'set/USER_FAILED' as const;

export const SET_BATTLE = 'set/BATTLE' as const;
export const GET_BATTLE = 'get/BATTLE' as const;
export const SET_BATTLE_SUCCESS = 'set/BATTLE_SUCCESS' as const;
export const SET_BATTLE_FAILED = 'set/BATTLE_FAILED' as const;

interface userAction {
    type:string;
    payload:any
}

export const setUser = (payload:string):userAction => ({
    type: SET_USER,
    payload:payload
});
export const getUser = () => ({
    type: GET_USER,
});
export const setUserSuccess = (payload:any):userAction => ({
    type: SET_USER_SUCCESS,
    payload:payload
});

export const setBattle = (payload:any) => ({
    type: SET_BATTLE,
    payload:payload
});
export const getBattle = () => ({
    type: GET_BATTLE,
});
export const setBattleSuccess = (payload:any) => ({
    type: SET_BATTLE_SUCCESS,
    payload:payload
});

type userActions = ReturnType<typeof setUser> |
    ReturnType<typeof setUserSuccess> |
    ReturnType<typeof getUser> |
    ReturnType<typeof setBattle> |
    ReturnType<typeof setBattleSuccess> |
    ReturnType<typeof getBattle>;

interface userState {
    user:userType,
    battle:battleLogType[],
    loaded:{
        user:boolean,
        battle:boolean
    }
}

const initialState:userState = {
    user:{
        tag:'',
        name:'',
        icon:{
            id:''
        },
        trophies:0,
        highestTrophies:0,
        powerPlayPoints:0,
        highestPowerPlayPoints:0,
        expLevel:0,
        expPoints:0,
        isQualifiedFromChampionshipChallenge:false,
        '3vs3Victories':0,
        soloVictories:0,
        duoVictories:0,
        bestRoboRumbleTime:0,
        bestTimeAsBigBrawler:0,
        club:{
            name:''
        },
        brawlers:[]
    },
    battle:[],
    loaded:{
        user:false,
        battle:false,
    }
};
const initialRecord = Record(initialState)();

const user = (state = initialRecord, action:userActions):ReturnType<any> => {
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
