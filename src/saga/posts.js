import { call, put, takeLatest } from "redux-saga/effects";
import { getPostData } from "../api/postAPI";
import { getPostStart, getPostSuccess } from "../redux/posts";

function* getListPostSaga(action) {
    console.log("get....");
    try {
        const data = yield call(getPostData);
        yield put(getPostSuccess(data.data));
    } catch (error) {
        //handle error
        console.log(error);
    }
}

function* postsSaga() {
    console.log("getpost...");
    yield takeLatest(getPostStart, getListPostSaga);
}

export default postsSaga;
