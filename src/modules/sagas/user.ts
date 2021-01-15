import axios from "axios";
import {all, call, put, takeEvery} from 'redux-saga/effects'
import { SET_USER, SET_BATTLE, setUserSuccess, setBattleSuccess } from '../reducers/user';
import {setUser, setBattle} from '../reducers/user'

const getPlayer = (tagData:string) => {
    return axios.get(`http://127.0.0.1:8000/player/${encodeURIComponent(tagData)}`);
};

const getBattleLog = (tagData:string) => {
    return axios.get(`http://127.0.0.1:8000/battle/${encodeURIComponent(tagData)}`);
};

function* fetchUser(action:ReturnType<typeof setUser>) {
    try {
        const user = yield call(getPlayer, action.payload);
        yield put(setUserSuccess(user.data));
    } catch (e) {
        console.log(e);
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchBattleLog(action:ReturnType<typeof setBattle>) {
    try {
        const battleLog = yield call(getBattleLog, action.payload);
        yield put(setBattleSuccess(battleLog.data));
    } catch (e) {
        console.log(e);
        yield put({type: "BATTLE_FETCH_FAILED", message: e.message});
    }
}

function* userSaga() {
    yield all([
        yield takeEvery(SET_BATTLE, fetchBattleLog),
        yield takeEvery(SET_USER, fetchUser)
    ]);
}

export default userSaga;
