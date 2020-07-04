/** Imports */
import React, { Component } from "react";
import "./SearchBox.scss";
import isIdValid from "./Validation";

/** Interfaces */
interface Props {
  riotId: string;
  tag: string;
}

/** Name Search application component */
class SearchBox extends Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      riotId: "",
      tag: "",
    };
    this.onHandleNameChange = this.onHandleNameChange.bind(this);
  }

  /** Updates every time the user enters new characters into the riot id string */
  onHandleNameChange = (event: string) => {
    const splitId = event.split("#");
    if (isIdValid(event)) {
      return false;
    }
  };

  render() {
    return (
      <>
        <div className='col-md-5 input-container'>
          <label htmlFor='riotId'>Enter Riot ID</label>
          <input
            className='input-box'
            type='text'
            id='riotId'
            placeholder='e.g. Walls#7777'
          />
        </div>
      </>
    );
  }
}

export default SearchBox;
