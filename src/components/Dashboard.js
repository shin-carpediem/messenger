import React, { useState, useEffect, useContext } from "react";
import * as Api from "../service/api";
import dig from "object-dig";
import { signInWithGoogle } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const [inputName, setInputName] = useState(null);
  console.log(inputName);
  const formRender = () => {
    let dom;
    // もしログインしていたら、 TODOの入力フォーム
    if (dig(currentUser, "currentUser", "uid")) {
      dom = (
        <form>
          <input
            placeholder="TODOName"
            onChange={(e) => setInputName(e.currentTarget.value)}
          />
          <button type="button" onClick={() => post()}>追加</button>
        </form>
      );
      // もしログインしていなかったら、ログインボタン
    } else {
      dom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return dom;
  };

  const post = () => {
    Api.addTodo(inputName, currentUser.currentUser.uid);
  };

  return <div>{formRender()}</div>;
};

export default Dashboard;
