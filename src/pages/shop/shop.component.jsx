import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {selectCollectionsFetching, selectIsCollectionsLoad} from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component{
 
  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  
  render(){
    const { match, isCollectionFetching, selectIsCollectionsLoad } = this.props;
    return (
      <div className='shop-page'>
      <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>) } />
      <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={!selectIsCollectionsLoad} {...props} />) } />
    </div>
    )
  }
} 

const mapStateToProp = createStructuredSelector({
  isCollectionFetching: selectCollectionsFetching,
  selectIsCollectionsLoad: selectIsCollectionsLoad
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProp, mapDispatchToProps)(ShopPage);
