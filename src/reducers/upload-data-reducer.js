const initialData = {
  name: null,
  description: null,
  tags: [],
}

const uploadData = (state = initialData, action) => {
  switch(action.type){
    case "SETDATA":
      return Object.assign({}, state, {
        name: action.name,
        description: action.description,
        tags: action.tags,
      });
    case "CLEARDATA":
      return Object.assign({}, state, {initialData});
    default:
      return state;
  }
}

export default uploadData;
