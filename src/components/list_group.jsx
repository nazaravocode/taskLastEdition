import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {  Draggable, Droppable } from 'react-drag-and-drop'
import { connect } from 'react-redux';
import { actionDraggableLeft, actionDraggableRight, actionDelete } from '../actions';

const MyListGroup = ({
  searchVal,
  left,
  columnState,
  onApplyInLeft,
  onApplyInRight,
  onDelete
}) => {

  const { leftColumns, defaultColumns, rightColumns } = columnState;

  let list = leftColumns;
  if(searchVal && searchVal.length > 0){
    list = list.filter(item => item.title.match(searchVal) &&  item.title.match(searchVal) != null);
  }
  const onDrop = data => {
    if(Object.keys(data)[0] === 'left'){
      onApplyInLeft(Number(data.left));
    } else {
      onApplyInRight(Number(data.right));
    }
  }

  return (
    <ListGroup style={{ width: '45%' }}>
      {
        left ? (
        <Droppable types={['left']} onDrop={onDrop} >
        {(list).map(item =>
        <Draggable key={item.id} data={item.id} type='right'>
          <ListGroup.Item >
            {item.title}
          </ListGroup.Item>
        </Draggable>
        )}
        </Droppable>
      ) : (
        <Droppable types={['right']} onDrop={onDrop} >
        {[...defaultColumns, ...rightColumns].map(item =>
        <Draggable key={item.id} data={item.id} type='left'>
          <ListGroup.Item >
            <div>
            {item.title}
            {!item.default &&
            <button type="button"
                    className="close"
                    aria-label="Close"
                    onClick={() => onDelete(item.id)}>
              <span aria-hidden="true">&times;</span>
            </button>}
            </div>
          </ListGroup.Item>
        </Draggable>
        )}
        </Droppable>
        )
      }
    </ListGroup>
  );
};
function mapStateToProps(state) {
  const columnState = state;
  return {
    columnState
  }
}

function mapDispatchToProps(dispatch) {
  const onApplyInLeft = actionKey =>  dispatch(actionDraggableLeft(actionKey));
  const onApplyInRight = actionKey =>  dispatch(actionDraggableRight(actionKey));
  const onDelete = actionKey =>  dispatch(actionDelete(actionKey));
  return {
    onApplyInLeft,
    onApplyInRight,
    onDelete
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyListGroup)