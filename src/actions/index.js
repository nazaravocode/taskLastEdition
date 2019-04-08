
export const actionOnApply = payload => ({
  type: 'ON_APPLY',
  payload,
});
export const actionDraggableLeft = actionKey => ({
  type: 'ON_DRAGGABLE_LEFT',
  actionKey,
});
export const actionDraggableRight = actionKey => ({
  type: 'ON_DRAGGABLE_RIGHT',
  actionKey,
});
export const actionDelete = actionKey => ({
  type: 'ON_DELETE',
  actionKey,
});
