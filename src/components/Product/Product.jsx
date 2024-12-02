import styled from "styled-components";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { deleteProduct, setCurrentProduct } from "../../productsSlice";

const StyledProduct = styled.li`
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  padding: 1.6rem 0 1.6rem 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  flex: 1 1 auto;
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const Image = styled.img`
  background-color: red;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  width: 100%;
  text-transform: uppercase;
  display: flex;
  flex: 1 1 auto;
`;

function Product({ product }) {
  const { name, imageUrl, id } = product;
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(setCurrentProduct(id));
  }

  function handleDelete() {
    dispatch(deleteProduct(id));
  }

  return (
    <StyledProduct>
      <DescriptionContainer>
        <Image src={imageUrl} alt={name} />
        <Title>{name}</Title>
      </DescriptionContainer>

      <Button onClick={handleEdit} bgColor="rgba(221, 162, 12, 0.579)">
        Edit
      </Button>
      <Button onClick={handleDelete} bgColor="rgba(214, 27, 27, 0.579)">
        Delete
      </Button>
    </StyledProduct>
  );
}

export default Product;
