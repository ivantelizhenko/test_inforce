import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { useEffect } from "react";

const Container = styled.div`
  padding: 3.6rem;
  width: 75%;
  background: papayawhip;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  height: 75%;
  overflow: scroll;
`;

function onAddHandler(e) {
  console.log("i add");
}

function onDeleteHandler(e) {
  console.log("i delete");
}

function onEditHandler(e) {
  console.log("i edit");
}

function onClick(e) {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  const typeButton = btn.className.split(" ").at(-1).trim();

  switch (typeButton) {
    case "add": {
      onAddHandler();
      break;
    }
    case "delete": {
      const curId = btn.dataset.id;
      console.log(curId);
      break;
    }
    case "edit": {
      onEditHandler();
      break;
    }
    default: {
    }
  }
}

function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  return (
    <Container onClick={onClick}>
      {status === "loading" ? <Spinner /> : ""}
      {error.length > 0 && <Error message={error} />}
      {products.length > 0 && (
        <ul>
          {products.map((data) => (
            <Product product={data} key={data.id} />
          ))}
        </ul>
      )}
    </Container>
  );
}

export default ProductsList;
