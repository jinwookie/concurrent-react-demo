import React, { createContext, useReducer, useContext } from 'react';

const NavContext = createContext([]);

const initialState = {
  navOpen: false,
  items: [],
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'openNav':
      return {
        ...state,
        navOpen: true,
      };
    case 'closeNav':
      return {
        ...state,
        navOpen: false,
      };
    case 'setNavItems':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const NavProvider = ({ children }) => {
  const reducer = useReducer(navReducer);
  return (
    <NavContext.Provider value={reducer}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavReducer = () => {
  const reducer = useContext(NavContext);
  return reducer;
};

export const useNavState = () => {
  const [state] = useContext(NavContext);
  return state;
};

export const useNavDispatch = () => {
  const [state, dispatch] = useContext(NavContext);
  return dispatch;
};
