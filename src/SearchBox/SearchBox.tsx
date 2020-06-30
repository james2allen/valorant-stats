/** Imports */
import React, { Component } from "react";
import "./SearchBox.scss";

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

  /** Checks to see if the user has entered in a valid riot id format */
  isIdValid = (idArray: string[]) => {
    const idRegex = /([A-Za-z\s]+)/;
    const tagRegex = /([A-Z0-9]{3,5})/;

    if (idArray.length !== 2) {
      return false;
    }

    if (!idArray[0].match(idRegex) || !idArray[1].match(tagRegex)) {
      return false;
    }

    return true;
  };

  onHandleNameChange = (event: string) => {
    const splitId = event.split("#");
    if (this.isIdValid(splitId)) {
      return false;
    }
  };

  render() {
    return (
      <>
        <div className='col-md-5 input-container'>
          <label htmlFor='riotId'>Riot ID</label>
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
