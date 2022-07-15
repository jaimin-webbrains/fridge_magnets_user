import productimageAction from "./actions";

const initState = {
  image_src: {},
};

console.log("DEMODsffas");
export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case productimageAction.IMAGE:
      console.log(action.payload, "jjgjg");
      return {
        ...state,
        image_src: action.payload,
      };
    default:
      return state;
  }
}
