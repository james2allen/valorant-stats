/** Imports */
import React, { Component } from "react";
import "./NameSearch.scss";

/** Name Search application component */
class NameSearch extends Component {
  render() {
    return (
      <div className='py-5'>
        <div className='col-md-5 input-container'>
          <div className='input-label'>Riot ID</div>
          <input className='input-box' type='text' />
        </div>
        <div className='col-md-3 input-container'>
          <div className='input-label'>Tag #</div>
          <input className='input-box tag-input-box' type='text' />
        </div>
      </div>
    );
  }
}

export default NameSearch;
