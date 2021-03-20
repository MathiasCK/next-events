import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Error>
      <h1>404 | This is an error page</h1>
    </Error>
  );
};

const Error = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
  }
`;

export default ErrorPage;
