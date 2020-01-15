import { takeEvery } from 'redux-saga/effects';

import shopActionTypes from './shop.types';

export function* fetchCollectionAysc(){
    yield console.log('I am fired');
}

export function* fetchCollectionStart(){
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAysc);
}