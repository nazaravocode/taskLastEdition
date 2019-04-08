import React, { PureComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ListGroup from './list_group';
import InputSearch from './input_search';
import { actionOnApply } from '../actions';
import { connect } from 'react-redux';

 class App  extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      searchVal: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

  }


  handleClose() {
    this.setState({ show: false });
  }
  handleApply() {

    const { defaultColumns, rightColumns } = this.props.columnState;
    this.props.onApply([ ...rightColumns, ...defaultColumns ]);

    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  onChangeSearch(e){
    this.setState({ searchVal: e.target.value });
  }

  render() {
    const { show, searchVal,} = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Select Grid Columns
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <InputSearch
              onChangeSearch={this.onChangeSearch}
              searchVal={searchVal}
            />
          </Modal.Header>

          <Modal.Body
            style={{
              display: 'inline-flex',
              justifyContent: 'space-between'
            }}>

            <ListGroup
              style={{ marginRigth: 10 }}
              left={true}
              searchVal={searchVal}
            />

            <ListGroup
              left={false}
            />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleApply}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
function mapStateToProps(state) {
  const columnState = state;
  console.log('mapStateToProps columnState->', columnState);
  return {
    columnState
  }
}

function mapDispatchToProps(dispatch) {
  const onApply = payload =>  dispatch(actionOnApply(payload));
  return {
    onApply
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)