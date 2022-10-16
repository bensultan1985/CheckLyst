import React from "react";
import { useSession } from "next-auth/react";

// const { data: session } = useSession();

const userStore = React.createContext({
  user: {
    // name: session?.user?.name,
    name: "ben",
  },
});

export { userStore };
