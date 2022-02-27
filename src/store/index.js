import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";

import postsSaga from "../saga/posts";

import postReducer from "../redux/posts";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...MiddlewareArray(), sagaMiddleware];

export const store = configureStore({
    reducer: {
        post: postReducer,
    },
    middleware,
});

sagaMiddleware.run(postsSaga);
