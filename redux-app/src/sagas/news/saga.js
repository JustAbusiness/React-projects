import { takeEvery, takeLatest } from "redux-saga/effects";
import { getNews } from "./newSlice";
import handleGetNews from "./handler";

export default function* newsSaga() {
    yield takeLatest(getNews.type, handleGetNews )
}