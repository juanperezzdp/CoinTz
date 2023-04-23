import React from "react"
import {createBrowserRouter} from "react-router-dom";
import IndexHome from "../page/Home/IndexHome";
import IndexCrypto from "../page/Crypto/IndexCrypto";
import IndexExchange from "../page/Exchange/IndexExchange";
import IndexNft from "../page/NFT/IndexNft";
import IndexSupport from "../page/Support/IndexSupport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IndexHome/>
    ),
  },
  {
    path: "indexcrypto",
    element: (
      <IndexCrypto/>
    ),
  },
  {
    path: "indexexchange",
    element: (
      <IndexExchange/>
    ),
  },
  {
    path: "indexnft",
    element: (
      <IndexNft/>
    ),
  },
  {
    path: "indexsupport",
    element: (
      <IndexSupport/>
    ),
  },
]);