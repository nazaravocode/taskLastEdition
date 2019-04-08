import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


const MyTable =  ({ renderColumns }) =>  {
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {renderColumns.map(item => <td key={item.id}>{item.title}</td>)}
          </tr>
        </thead>
        <tbody>
        <tr>
          {
            renderColumns.map(
              item =>
              <td key={item.id}>
                <ul>
                {item.elements.map(element =>
                  <li key={`${item.id}-${element}`}>{element}</li>
                )}
                </ul>
              </td>
              )}
        </tr>
        </tbody>
      </Table>
  )
};

const mapStateToProps = (state) => {
  return {
    renderColumns: state.renderColumns
  }
};

export default connect(mapStateToProps)(MyTable)