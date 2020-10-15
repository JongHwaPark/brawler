import {all, call, put, takeEvery} from 'redux-saga/effects'
import { setUser, SET_USER, setBattle, SET_BATTLE } from '../reducers/user';
import axios from "axios";

const getPlayer = (tagData) => {
    return axios.get(`http://127.0.0.1:8000/player/%23${tagData}`);
};

const getBattleLog = (tagData) => {
    return axios.get(`http://127.0.0.1:8000/battle/%23${tagData}`);
};

function* fetchUser(action) {
    try {
        const user = yield call(getPlayer, action.payload);
        yield put(setUser(user.data));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchBattleLog(action) {
    try {
        const battleLog = yield call(getBattleLog, action.payload);
        yield put(setBattle(battleLog.data));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* userSaga() {
    yield all([
        yield takeEvery(SET_BATTLE, fetchBattleLog),
        yield takeEvery(SET_USER, fetchUser)
    ]);
}

export default userSaga;
