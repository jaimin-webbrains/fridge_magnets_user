import productimageAction from "./actions";

const initState = {
  image_src: "",
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case productimageAction.IMAGE:
      return {
        ...state,
        image_src: action.payload,
      };
    default:
      return state;
  }
}
