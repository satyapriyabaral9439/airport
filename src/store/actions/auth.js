import { incrementProgress, decrementProgress } from "./progress";
import history from "../../components/history";

export const userLogin = (username) => {
  return (dispatch, getState) => {
      dispatch({ type:'AUTH_LOGIN', payload: username });
  }
};

export const userLogout = () => {
  return (dispatch, getState) => {
      dispatch({ type:'AUTH_LOGOUT' });
  }
};

const fakeLoginRequest = username =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      username === "mindfire" ? resolve(username) : reject("No such user");
    }, 1000),
  );

  export const doLogin = username => async dispatch => {
    dispatch(incrementProgress());
    try {
      const userResponse = await fakeLoginRequest(username);
      dispatch(userLogin(userResponse));
      history.push("/dashboard");
    } catch (error) {
      alert(error);
    } finally {
      dispatch(decrementProgress());
    }
  };

export const doLogout = () => dispatch => {
  dispatch(userLogout());
};
