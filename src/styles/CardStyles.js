import styled from "styled-components";

export const CardStyles = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  text-align: center;
`;
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
export const CardAverage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid green;
  background-color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
  font-weight: bold;

`;