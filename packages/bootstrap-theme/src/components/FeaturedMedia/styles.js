import Image from "@frontity/components/image";
import { styled } from "frontity";

export const Container = styled.div`
  margin-top: 16px;
  height: 300px;
`;

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
