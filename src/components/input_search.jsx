import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default ({ searchVal, onChangeSearch }) => (
  <div className="InputSearch">
    <InputGroup>
      <FormControl
        value={searchVal}
        onChange={onChangeSearch}
        placeholder="Search"
      />
    </InputGroup>
  </div>
)