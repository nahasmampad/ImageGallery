import React, { useState } from "react";

export const UserContext = React.createContext({
 email:null,
 fun : ()=>{

 }
});

const UserContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const changeName = (val) => {
    setEmail(val);
  };
  return (<UserContext.Provider value={{ email:email, fun:changeName}}>
    {props.children}
  </UserContext.Provider>)
};

export default UserContextProvider;
