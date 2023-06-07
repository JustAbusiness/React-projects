import { call, put } from "redux-saga/effects";
import requestGetNews from "./request";
import { setLoading, setNews } from "./newSlice";

export default function* handleGetNews({payload, type}) {
    try {
        const response = yield call(requestGetNews, payload);           // payload lúc này là cập nhật query
        const { hits } = response.data;
        yield put(setNews(hits));
        yield put(setLoading(false));

    } catch (error) {
        console.log(error);
    }

}