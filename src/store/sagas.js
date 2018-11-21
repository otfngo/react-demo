import { takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators'
import * as api from '../api'

function* fetchInitList() {
  try {
    const res = yield api.fetchInitList()
    const action = actionCreators.getInitListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log(e)
  }
}

function* mySaga() {
  yield takeEvery(actionTypes.fetch_init_list, fetchInitList);
}

export default mySaga;