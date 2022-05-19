import React, {Component} from 'react'
import TabelaBody from './components/TabelaBody'
import TabelaFoot from './components/TabelaFoot'
import TabelaHead from './components/TabelaHead';

class App extends Component {
  state={
    livros:[
      {
        id:''
      }
    ]
  }
  render() {
    return (
      <table>
        <TabelaHead />
        <TabelaBody />
        <TabelaFoot />
      </table>
    );
  }
}


export default App;
