import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { getProducts } from "./productsSlice";

import ProductsList from "./components/Product/ProductsList";
import Modal from "./components/Modal/Modal";

const StyledApp = styled.section`
  background: #ffefd58e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function App() {
  const editAddProduct = useSelector((state) => state.products.currentProduct);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <StyledApp>
        <GlobalStyles />
        <ProductsList />
        {editAddProduct && <Modal />}
      </StyledApp>
    </>
  );
}

export default App;
