const initialAbout = {
  about: 'next'
}

const about = (state = initialAbout, action) => {
  switch(action.type){
    case "ABOUT":
      return Object.assign({}, state, {about: 'about'});
    case "NEXT":
      return Object.assign({}, state, {about: 'next'});
    case "UPLOAD":
      return Object.assign({}, state, {about: 'upload'});
    default:
      return state;
  }
}

export default about;
