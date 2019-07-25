import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import MiniDrawer from "./MiniDrawer";
import axios from "axios";

function UserTransactions() {
  const [data, setData] = useState({ hits: [] });
  // useEffect( async () => {
  //   // ver como usar axios
  //   const result = await axios ()
  // }, []);

  return (
    <div>
      <MiniDrawer />
    </div>
  );
}

export default UserTransactions;
