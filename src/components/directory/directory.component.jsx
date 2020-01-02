import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySelectons } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = ({sections}) => (

      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
);

const mapStateToProp = createStructuredSelector({
  sections:  selectDirectorySelectons 
});

export default connect(mapStateToProp)( Directory);
