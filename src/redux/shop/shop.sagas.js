import { takeLatest, call, put } from 'redux-saga/effects';

import {firestore, covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import{
    fetchCollectionsSuccess,
    fetchCollectionsFaliure
} from './shop.actions';
import shopActionTypes from './shop.types';

export function* fetchCollectionAysc(){

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collections = yield call(covertCollectionsSnapshotToMap, snapshot);    
        yield put(fetchCollectionsSuccess(collections))
    }catch(error){
        yield put(fetchCollectionsFaliure(error.message));
    }
}

export function* fetchCollectionStart(){
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAysc);
}