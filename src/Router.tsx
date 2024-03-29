import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Cart } from "@/pages/Cart";
import { Home } from "@/pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
