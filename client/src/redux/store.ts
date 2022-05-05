import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authLoginReducer from "./reducers/authReducers/authLoginReducer";
import authLogoutReducer from "./reducers/authReducers/authLogoutReducer";
import postCreateReducer from "./reducers/postReducers/postCreateReducer";
import postDeleteReducer from "./reducers/postReducers/postDeleteReducer";
import postDetailReducer from "./reducers/postReducers/postDetailReducer";
import postLikeReducer from "./reducers/postReducers/postLikeReducer";
import postListReducer from "./reducers/postReducers/postListReducer";
import postUpdateReducer from "./reducers/postReducers/postUpdateReducer";

const reducer = combineReducers({
  postList: postListReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
  postDetail: postDetailReducer,
  postDelete: postDeleteReducer,
  postLike: postLikeReducer,
  authLogin: authLoginReducer,
  authLogout: authLogoutReducer,
});

const initialState = {};

const middleware = [thunk];

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
