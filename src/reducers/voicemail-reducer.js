const initialData = {
  num: 0,
  needsUpdate: false,
  sounds: [],
  buffer: null
}

const GeneralInfo = (state = initialData, action) => {
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
    case "LOADSOUNDS":
      return Object.assign({}, state, {
        sounds: action.sounds
      });
    default:
      return state;
  }
}

export default GeneralInfo;
