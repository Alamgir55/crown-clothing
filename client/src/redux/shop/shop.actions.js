import shopActionTypes from './shop.types';

import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})
export const fetchCollectionsSuccess = (collectionsMap) =>({ 
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap 
})

export const fetchCollectionsFaliure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = function(){
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFaliure(error.message)));
    }
}