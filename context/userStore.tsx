import React from "react";

const userStore = React.createContext({
  user: {
    firstName: "test",
  },
});

export { userStore };
