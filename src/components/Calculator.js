import React, { Component } from 'react';
import Display from './Display';
import { Container } from './Calculator.style.js';
import { ButtonGrid, ButtonRow, Button, ButtonZero, ButtonOperator, ButtonClearAndEqual } from './Buttons.style.js';


//What state is there?
//When does it change?

class Calculator extends Component {
  constructor(props){
    super(props)

    this.state = {
      prevResult: null,
      result: '0',
      waitingForOperand: false,
      operator: null
    }

    this.clearBtn = this.clearBtn.bind(this);
    this.setDigit = this.setDigit.bind(this);
    this.setDot = this.setDot.bind(this);
    this.setSign = this.setSign.bind(this);
    this.setPercent = this.setPercent.bind(this);
  }

  clearBtn(){

    this.setState({
      prevResult: null,
      result: '0',
      operator: null
     });
  }

  setDigit(digit){
    const { result, waitingForOperand } = this.state;

    if (waitingForOperand){
      this.setState({
        result: String(digit),
        waitingForOperand: false,


      })
    } else {
      //Check if state is zero if not add to existing value
      this.setState({ result: result === '0' ? String(digit) : result + digit});
    }

  }

  setDot(){
    //Check if there is a dot already
    const { result, waitingForOperand } = this.state;
    //When waiting for operand, if the next
    // number is a dot its the beggining of the second operand
    if(waitingForOperand){
      this.setState({
        result: '.',
        waitingForOperand: false
      })
    }else if (result.indexOf('.') === -1){
        this.setState({
          result: result + '.',
          waitingForOperand: false
      });
    }

  }

  setSign(){
    const { result } = this.state;

    this.setState({
      //Check if index zero has a negative sign then remove it else add itt
      result: result.charAt(0) === '-' ? result.substr(1): '-' + result
    });
  }

  setPercent(){
    const { result } = this.state;
    //Change to decimal then back to string
    const value = parseFloat(result);

    this.setState({
      result: String(value / 100)
    })

  }

  performOperation(nextOperator){
    const { result, operator, prevResult } = this.state;
    const nextValue = parseFloat(result);

    const operations = {
      '/':(prevValue, nextValue) => prevValue / nextValue,
      '*':(prevValue, nextValue) => prevValue * nextValue,
      '-':(prevValue, nextValue) => prevValue - nextValue,
      '+':(prevValue, nextValue) => prevValue + nextValue,
      '=':(prevValue, nextValue) => nextValue
    }

    if (prevResult === null){
      //No previous value, and hit operator key, save current value to prevResult
      this.setState({
        prevResult: nextValue
      })
    } else if (operator) {
      //There is previous value and hit operator key
      //Take zero or result
      const currentValue = prevResult || 0;
      //Go into operations and fetch the new result based on the operation
      const computedValue = operations[operator](currentValue, nextValue);
      //update state and set new values
      this.setState({
        prevResult: computedValue,
        result: String(computedValue),
        operand1: currentValue,
        operand2: nextValue
      })

    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })

  }

  render(){
    return(
      <Container>
        <Display result={this.state.result}/>
        <ButtonGrid>
          <ButtonRow>
            <ButtonClearAndEqual onClick={this.clearBtn}>c</ButtonClearAndEqual>
            <ButtonOperator onClick={this.setSign}>+/-</ButtonOperator>
            <ButtonOperator onClick={this.setPercent}>%</ButtonOperator>
            <ButtonOperator onClick={ () => this.performOperation('/')}>/</ButtonOperator>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={ () => this.setDigit(7)}>7</Button>
            <Button onClick={ () => this.setDigit(8)}>8</Button>
            <Button onClick={ () => this.setDigit(9)}>9</Button>
            <ButtonOperator onClick={ () => this.performOperation('*')}>x</ButtonOperator>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={ () => this.setDigit(4)}>4</Button>
            <Button onClick={ () => this.setDigit(5)}>5</Button>
            <Button onClick={ () => this.setDigit(6)}>6</Button>
            <ButtonOperator onClick={ () => this.performOperation('-')}>-</ButtonOperator>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={ () => this.setDigit(1)}>1</Button>
            <Button onClick={ () => this.setDigit(2)}>2</Button>
            <Button onClick={ () => this.setDigit(3)}>3</Button>
            <ButtonOperator onClick={ () => this.performOperation('+')}>+</ButtonOperator>
          </ButtonRow>
          <ButtonRow>
            <ButtonZero onClick={ () => this.setDigit(0)}>0</ButtonZero>
            <Button onClick={this.setDot}>.</Button>
            <ButtonClearAndEqual onClick={ () => this.performOperation('=')}>=</ButtonClearAndEqual>
          </ButtonRow>
        </ButtonGrid>
      </Container>
    );
  }
}

export default Calculator;
