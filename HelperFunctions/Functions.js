 import { setNavnameis } from "../redux/slice/NavigationStateSlice";

export const handleSignOut = async (dispatch) => {

 
    console.log('ok');

    dispatch(setNavnameis('auth'));

}