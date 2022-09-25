import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Nickname from "./Nickname";
import Introduce from "./Introduce";
import Location from "./Location";
import Like from "./Like";
import Result from "./Result";

const IntroducePage = () => {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid);
      } else {
        console.log("err");
      }
    });
  }, []);
  // state
  const [userId, setUserId] = useState("");
  const [userLoc, setUserLoc] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userLike, setUserLike] = useState("");

  return (
    <Routes>
      <Route index element={<Navigate to="./introduce" replace />} />
      <Route path="/introduce" element={<Introduce />}></Route>
      <Route
        path="/location"
        element={<Location userLoc={userLoc} handleUserLoc={setUserLoc} />}
      ></Route>
      <Route
        path="/nickname"
        element={
          <Nickname
            userNickname={userNickname}
            handleNickname={setUserNickname}
          />
        }
      ></Route>
      <Route
        path="/like"
        element={<Like userLike={userLike} handleUserLike={setUserLike} />}
      ></Route>
      <Route
        path="/result"
        element={
          <Result
            userData={{
              id: userId,
              loc: userLoc,
              nickname: userNickname,
              like: userLike,
            }}
          />
        }
      ></Route>
    </Routes>
  );
};

export default React.memo(IntroducePage);
