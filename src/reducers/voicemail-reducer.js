const initialData = {
  num: 1
}

const uploadData = (state = initialData, action) => {
  switch(action.type){
    case "ADDVOICEMAIL":
      return Object.assign({}, state, {
        num: action.num
      });
    default:
      return state;
  }
}

export default uploadData;
