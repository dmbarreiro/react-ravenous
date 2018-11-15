import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {/* Tested on React version React version 15.1.0 requests each child
            of an array or iterator should have a unique key prop, so a
            key prop added to each map element to correct remove this warning.
          */}
        {this.props.businesses.map((business, key) => {
            return <Business key={key} business={business} />
        })};
      </div>
    );
  }
};

export default BusinessList;
