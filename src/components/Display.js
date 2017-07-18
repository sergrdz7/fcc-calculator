import React, { Component } from 'react';
import { Header, Atag, DisplayGrid, DisplayBox, DisplayBoxResult } from './Display.style.js';
import { Textfit } from 'react-textfit';


class Display extends Component {
  constructor(props){
    super(props);

    }

  render(){
    return(
      <div>
        <Header><Atag href="https://github.com/sergrdz7/fcc-calculator" target="_blank">FreeCodeCamp Calculator</Atag></Header>
        <DisplayGrid>
          <DisplayBox>
          </DisplayBox>
          <DisplayBoxResult>
            <Textfit>{this.props.result}</Textfit>
          </DisplayBoxResult>
        </DisplayGrid>
      </div>
    );
  }
}

export default Display;
