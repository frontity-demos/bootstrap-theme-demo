import { styled } from "frontity";

export const Container = styled.div`
  width: 800px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
