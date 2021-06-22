import {createStore, combineReducers,  applyMiddleware, compose} from "redux";
import data from './module/data';

import thunk from "redux-thunk";

import { createBrowserHistory } from "history";

// 브라우저 히스토리를 만들어줍니다.

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ data });
// 스토어를 만듭니다.


export const history = createBrowserHistory();
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;