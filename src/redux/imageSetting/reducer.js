import imageAction from "./action";

const initState = {
  image_src: "",
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case imageAction.IMAGE:
      return {
        ...state,
        image_src: action.image_src,
      };
    default:
      return state;
  }
}
