const initialData = {
  name: null,
  description: null,
  tags: [],
  id: 0,
}

const uploadData = (state = initialData, action) => {
  switch(action.type){
    case "SETDATA":
      return Object.assign({}, state, {
        name: action.name,
        description: action.description,
        tags: action.tags,
      });
    case "SETID":
      return Object.assign({}, state, {
        id: action.id
      });
    case "CLEARDATA":
      return Object.assign({}, state, {initialData});
    default:
      return state;
  }
}

export default uploadData;
