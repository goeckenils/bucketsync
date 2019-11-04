import styled from 'styled-components';

export const Button = styled.button`border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '2px')};`;

export const PrimaryButton = styled(Button)`
  border-width: 1px;
  border-style: solid;
  font-family: "Gilroy Regular";
  padding: 0 46px;
  height: 52px;
  outline: none;
  font-weight: 600;
  margin: 10px;
  white-space: normal;
  color: #38ADA9;
  text-align: center;
  cursor: pointer;
  border-color: #38ADA9;
  box-sizing: border-box;
  display: inline-block;
  line-height: 1.5;
  font-size: 16px;
  &:hover {
    background:  #38ADA9;
    color: #fff;
    transition: 0.3s all ease-in-out;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  color: #fff;
  background: transparent;
  border-color: #fff;
  &:hover {
    color: #2699fb;
    background: transparent;
    border-color: #fff;
  }
`;

export default PrimaryButton;
