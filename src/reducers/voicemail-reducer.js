const initialData = {
  num: 1,
  needsUpdate: false
}

const uploadData = (state = initialData, action) => {
  switch(action.type){
    case "ADDVOICEMAIL":
      return Object.assign({}, state, {
        num: action.num
      });
    case "NEEDSUPDATE":
      return Object.assign({}, state, {
        needsUpdate: true
      });
    case "UPDATED":
      return Object.assign({}, state, {
        needsUpdate: false
      });
    default:
      return state;
  }
}

export default uploadData;
