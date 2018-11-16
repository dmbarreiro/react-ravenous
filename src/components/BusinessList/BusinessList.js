import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    let renderBussinesses = (
      <div className="BusinessList">
      </div>
    );
    if (this.props.businesses === undefined) {
      renderBussinesses = (
        <div className="BusinessList">
        </div>
      );
    } else if (this.props.businesses.length === 0) {
      renderBussinesses = (
        <div className="BusinessList">
          <h2>No results found.</h2>
        </div>
      );
    } else {
      renderBussinesses = (
        <div className="BusinessList">
          {this.props.businesses.map(business => {
              return <Business key={business.id} business={business} />
          })};
        </div>
      );
    }
    return renderBussinesses;
  }
};

export default BusinessList;
