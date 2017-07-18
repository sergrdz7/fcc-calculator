import styled from 'styled-components';

export const ButtonGrid = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ButtonRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
background-color: #414141;
  flex: 1;
  border: none;
  color: ${ props => props.color ? props.color : 'white'  } ;
  border-radius: 15px;
  font-size: 20px;

  &:hover{
    color: white;
    font-size: 25px;
  }

  &:active {
      transform: translateY(2px);
    }

  &:focus {
    outline: 0;
  }

`;

export const ButtonZero = Button.extend`
  flex: 2;
`;

export const ButtonOperator = Button.extend`
    color: #7D7D7D;
`;

export const ButtonClearAndEqual = Button.extend`
  color: #F06E6E;
`;
