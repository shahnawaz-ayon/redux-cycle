 import changeNumber from "./upDown";
 import changeString from "./leftRight";
 import { combineReducers } from "redux";

 const rootReducer= combineReducers({
    changeNumber,changeString

 });

 export default rootReducer;
