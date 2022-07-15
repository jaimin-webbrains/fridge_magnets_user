import auth from "./auth/reducer";
import navigation from "./navigation/reducer";
import themeChanger from "./themeChanger/reducer";
import LanguageSwitcher from "./languageSwitcher/reducer";
import themeSetting from "./themeSettings/reducer";
import settingdata from "./settingdata/reducer";
import scrumboard from "./scrumboard/reducer";
import productimage from "./productimage/reducer";
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
    productimage,
    settingdata,
    router: routerReducer,
    ...asyncReducers,
  });

export default createReducer;
