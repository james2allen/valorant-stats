/** Imports */
import React, { Component, Props } from "react";
import "./NameSearch.scss";

/** Name Search application component */
class SearchBox extends Component {
  constructor(props: Props<any>) {
    super(props);

    this.state = {
      telephone: "",
    };
    this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
  }

  onHandleTelephoneChange = (e: any) => {
    let telephone = e.target.value;

    if (!Number(telephone)) {
      return;
    }
    this.setState({
      [e.target.name]: telephone,
    });
  };

  render() {
    return (
      <div className='py-5'>
        <div className='col-md-5 input-container'>
          <label htmlFor='riotId'>Riot ID</label>
          <input className='input-box' type='text' id='riotId' />
        </div>
        <div className='col-md-3 input-container'>
          <div className='input-label'>Tag #</div>
          <input className='input-box tag-input-box' type='text' />
        </div>
      </div>
    );
  }
}

export default SearchBox;
