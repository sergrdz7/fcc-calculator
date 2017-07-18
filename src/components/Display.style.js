import styled from 'styled-components';

export const Header = styled.div`
    color: white:
    margin: 0;
    padding: 5px;
    color: #7D7D7D;
    fontsize: 20px;
    text-align: center;
    height: 30px;

  `;

export const Atag = styled.a`
  text-decoration: none;
  color: #7D7D7D;

  &:hover {
  color: white;
  }
`;

export const DisplayGrid = styled.div`
  width: 100%;
  height: 200px;
  color: #7D7D7D;
  font-size: 20px;

  display: flex;
  flex-direction: column;
  border-bottom: solid 1px white;

`;

export const DisplayBox = styled.div`
  flex: 2;
  margin-top: 1px;
  text-align: right;
  padding-right: 30px;

`;

export const DisplayBoxResult = DisplayBox.extend`
  font-size: 50px;
  color:white;
`;
