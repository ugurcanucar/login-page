import { all, takeEvery, put, fork, call, select } from "redux-saga/effects";
import { AUTH_TOKEN, SIGNIN, SIGNOUT } from "redux/constants/Auth";
import {
  showAuthMessage,
  authenticated,
  signOutSuccess,
  showLoading,
} from "redux/actions/Auth";
import ApiService from "services/ApiService";
import apiService from "services/ApiService";

export function* signOut() {
  yield takeEvery(SIGNOUT, function* () {
    try {
      const signOutUser = yield call(ApiService.signOut);
      if (signOutUser === undefined) {
        localStorage.removeItem(AUTH_TOKEN);
        yield put(signOutSuccess(signOutUser));
      } else {
        yield put(showAuthMessage(signOutUser.message));
      }
    } catch (err) {
      yield put(showAuthMessage(err));
    }
  });
}
export function* Login() {
  yield takeEvery(SIGNIN, function* ({ email, password }) {
    const state = yield select();
    console.log("TCL: yieldtakeEvery -> state", state);

    try {
      yield put(showLoading(true));
      const response = yield call(apiService.login, email, password);
      if (response.Success) {
        yield put(authenticated(response.Data.AccessToken));
      } else {
        yield put(showAuthMessage(response.Message));
      }
    } catch (err) {
      yield put(showAuthMessage("Bilgileriniz eksik veya hatalı."));
    }
  });
}
// export function* LogOut() {
//   yield takeEvery("bbb", function* () {
//     try {
//       yield put(showLoading(true));
//       yield put(signOutSuccess());
//       yield put(ShoppingCartClear());
//     } catch (err) {
//       yield put(showAuthMessage("Bilgileriniz eksik veya hatalı."));
//     }
//   });
// }
export default function* rootSaga() {
  yield all([fork(Login), fork(signOut)]);
}
