const initialState = {
  defaultColumns: [
    {id: 1, title: 'ID', elements: [2, 123, 345, 112, 98],default : true,},
    {id: 2, title: 'name', elements: ['name1', 'name2', 'name3', 'name4', 'name5'], default : true},
  ],
  leftColumns: [
    {id: 5, title: 'column5', elements: ['column5_1','column5_2','column5_3','column5_4','column5_5']},
    {id: 6, title: 'column6', elements: ['column6_1','column6_2','column6_3','column6_4','column6_5']},
    {id: 7, title: 'column9', elements: ['column9_1','column9_2','column9_3','column9_4','column9_5']},
    {id: 8, title: 'column10', elements: ['column10_1','column10_2','column10_3','column10_4','column10_5']},
    {id: 9, title: 'column11', elements: ['column11_1','column11_2','column11_3','column11_4','column11_5']},
    {id: 10, title: 'column12', elements: ['column11_1','column11_2','column11_3','column11_4','column11_5']},
    {id: 11, title: 'column13', elements: ['column11_1','column11_2','column11_3','column11_4','column11_5']}
  ],
  rightColumns: [
    {id: 3, title: 'lastName', elements: ['lastName1', 'lastName2', 'lastName3', 'lastName4', 'lastName5']},
    {id: 4, title: 'password', elements: ['password1', 'password2', 'password3', 'password4', 'password5']},
  ],
  renderColumns: [
    {id: 1, title: 'ID', elements: [2, 123, 345, 112, 98]},
    {id: 2, title: 'name', elements: ['name1', 'name2', 'name3', 'name4', 'name5']},
    {id: 3, title: 'lastName', elements: ['lastName1', 'lastName2', 'lastName3', 'lastName4', 'lastName5']},
    {id: 4, title: 'password', elements: ['password1', 'password2', 'password3', 'password4', 'password5']},
  ]
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ON_APPLY': {

      const renderColumns = [...action.payload];
      return { ...state, renderColumns};
    }
    case 'ON_DRAGGABLE_LEFT': {
      const { leftColumns, rightColumns } = state;
      const { actionKey } = action;
      const newRightColumns = rightColumns.filter(item => item.id !== actionKey);
      const newLeftColumnItem = rightColumns.filter(item => item.id === actionKey);

      return {
        ...state,
        rightColumns: newRightColumns,
        leftColumns: [...leftColumns, ...newLeftColumnItem]
      };
    }
    case 'ON_DRAGGABLE_RIGHT': {
      const { leftColumns, rightColumns } = state;
      const { actionKey } = action;
      const newLeftColumns = leftColumns.filter(item => item.id !== actionKey);
      const newRightColumnItem = leftColumns.filter(item => item.id === actionKey);

      return {
        ...state,
        leftColumns: newLeftColumns,
        rightColumns: [...rightColumns, ...newRightColumnItem]
      };
    }
    case 'ON_DELETE': {
      const { rightColumns, leftColumns } = state;
      const { actionKey } = action;
      const newRightColumns = rightColumns.filter(item => item.id !== actionKey);
      const newLeftColumnItem = rightColumns.filter(item => item.id === actionKey);
      return {
        ...state,
        rightColumns: newRightColumns,
        leftColumns: [...leftColumns, ...newLeftColumnItem]
      };
    }
    default:
      return state;
  }
}
