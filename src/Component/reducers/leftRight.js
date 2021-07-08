const initialState =0;
const changeString= (state= initialState, action) =>{

  switch(action.type){
	case "INCREMENT1" :return  state +2;
	case "DECREMENT1" :return  state -2;
	default:return state;
}
}

export default changeString;


