import React from "react"
import {createBrowserRouter} from "react-router-dom";
import IndexHome from "../page/Home/IndexHome";
import IndexCrypto from "../page/Crypto/IndexCrypto";
import IndexExchange from "../page/Exchange/IndexExchange";
import IndexNft from "../page/NFT/IndexNft";

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
]);