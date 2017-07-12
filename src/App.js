import React, { Component } from 'react';
import styled from 'styled-components';
// import { UIContainer } from './App.style';


 const Container = styled.div`
  background-color: #414141;
  display: flex;
  flex-direction: column;

  height: 600px;
  width: 400px;

  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;

  const Header = styled.div`
    color: white:
    margin: 0;
    height: 30px;
  `;

  const DisplayGrid = styled.div`
    width: 100%;
    height: 200px;
    color: #7D7D7D;
    font-size: 20px;

    display: flex;
    flex-direction: column;
    border-bottom: solid 1px white;

  `;

  const DisplayBox = styled.div`
    flex: 2;
    margin-top: 1px;
    text-align: right;
    padding-right: 30px;

  `;

  const DisplayBoxResult = DisplayBox.extend`
    font-size: 50px;
    color:white;
  `;

  const ButtonGrid = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `;

  const ButtonRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
  `;
 // ${ props => props.flex > 1 ? props.flex : 1};
 // margin-left: ${ props => props.margin === 4 ? props.margin: 0}px;
  const Button = styled.button`
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

  `;

  const ButtonZero = Button.extend`
    flex: 2;
  `;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>

        </Header>
        <DisplayGrid>
          <DisplayBox>1 x 2 = 1</DisplayBox>
          <DisplayBoxResult>1</DisplayBoxResult>
        </DisplayGrid>
        <ButtonGrid>
          <ButtonRow>
            <Button color={'#F06E6E'}>c</Button>
            <Button color={'#7D7D7D'}>+/-</Button>
            <Button color={'#7D7D7D'}>%</Button>
            <Button color={'#7D7D7D'}>/</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button color={'#7D7D7D'}>x</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button color={'#7D7D7D'}>-</Button>
          </ButtonRow>
          <ButtonRow>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button color={'#7D7D7D'}>+</Button>
          </ButtonRow>
          <ButtonRow>
            <ButtonZero>0</ButtonZero>
            <Button>.</Button>
            <Button color={'#F06E6E'}>=</Button>
          </ButtonRow>
        </ButtonGrid>

      </Container>
    );
  }
}

export default App;
