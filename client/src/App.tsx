import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

function App() {


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ProductsPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
        <Route
          path="/success"
          element={<SuccessPage />}
        />
        <Route
          path="/failed"
          element={<FailurePage />}
        />
      </Routes>

      <ToastContainer
        theme="colored"
        position="bottom-right"
      />
    </>
  );
}

export default App;



