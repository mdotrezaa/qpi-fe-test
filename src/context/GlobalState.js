import React, { createContext, useReducer } from 'react';
import { response } from '../assets/data/data';
import ProfileReducers from './ProfileReducers';

const getData = () => {
    const value = response.data.map(({ id, first_name, last_name, skills }) => {
      return {
        id: id,
        full_name: first_name + " " + last_name,
        expert_skills: Object.keys(skills)
          .filter((key) => skills[key] == "expert")
          .map((name) => name)
      };
    });
    return value;
};
// Initial State
const initialState = {
  users: getData()
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducers, initialState);
console.log(initialState);
  // Actions
  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      addUser,
      
    }}>
      {children}
    </GlobalContext.Provider>
  )
}