import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import Nickname from "./Nickname";
import Introduce from "./Introduce";
import Location from "./Location";
import Like from "./Like";

const IntroducePage = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="./introduce" replace />} />
      <Route path="/introduce" element={<Introduce />}></Route>
      <Route path="/location" element={<Location />}></Route>
      <Route path="/nickname" element={<Nickname />}></Route>
      <Route path="/like" element={<Like />}></Route>
    </Routes>
  );
};

export default React.memo(IntroducePage);
