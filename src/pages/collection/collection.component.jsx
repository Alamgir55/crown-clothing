import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({Collections}) => {
    console.log(Collections);
    return(
    <div className="collection-page">
        <h1>collection Page</h1>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    Collections: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);