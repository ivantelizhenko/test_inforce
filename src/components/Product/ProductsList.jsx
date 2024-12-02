import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
  padding: 3.6rem;
  width: 75%;
  background: papayawhip;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
  height: 75%;
  overflow: scroll;
`;

function ProductsList() {
  const { products, status, error } = useSelector((state) => state.products);

  return (
    <Container>
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
