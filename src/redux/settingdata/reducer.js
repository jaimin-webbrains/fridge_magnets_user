import settingAction from "./actions";

const initState = {
  sdata: [],
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case settingAction.SETTINGDATA:
      console.log(action.payload, "hhikhkk");
      return {
        sdata: action.payload,
      };
    default:
      return state;
  }
}
