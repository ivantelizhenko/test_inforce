import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  color: #111;
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.6rem;
  border-radius: 13px;
  border: none;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
`;

function Button({ children, bgColor, onClick }) {
  return (
    <StyledButton color={bgColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
