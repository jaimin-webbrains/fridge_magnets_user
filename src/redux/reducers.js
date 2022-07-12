import auth from "./auth/reducer";
import navigation from "./navigation/reducer";
import themeChanger from "./themeChanger/reducer";
import LanguageSwitcher from "./languageSwitcher/reducer";
import themeSetting from "./themeSettings/reducer";
import scrumboard from "./scrumboard/reducer";
import image from "./imageSetting/reducer";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    navigation,
    themeChanger,
    LanguageSwitcher,
    themeSetting,
    scrumboard,
    image,
    router: routerReducer,
    ...asyncReducers,
  });

export default createReducer;
