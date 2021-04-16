import React from "react";

const NotifyContext = React.createContext({
  notify: () => {},
  message: null,
});

export default NotifyContext;
