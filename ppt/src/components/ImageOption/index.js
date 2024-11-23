import styled from "styled-components/native";

export const ImageOption = styled.Image`
  width: ${(props) => props.$size || "100px"};
  height: ${(props) => props.$size || "100px"};
  border-radius: 360px;
  padding: 16px;
`;
