var taglist = ["funny", "mom"];

const initialSearch = {
  tags: taglist
}

const searchCriteria = (state = initialSearch, action) => {
  switch(action.type){
    case 'ADD_TAG':
      return Object.assign({}, state, {tags: insertTag(state.tags, action)});
    case 'DELETE_TAG':
      return Object.assign({}, state, {tags: removeTag(state.tags, action)})
    default:
      return state;
  }
}


function insertTag(array, action) {
    return [
        ...array.slice(0),
        action.tag
    ]
}

function removeTag(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}

export default searchCriteria;
