import React from "react";

const DetailsContext = React.createContext({
  user: null,
  setUser: () => {},
});

export default DetailsContext;
