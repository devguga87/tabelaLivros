import React, {Component} from 'react'
import TabelaBody from './components/TabelaBody'
import TabelaFoot from './components/TabelaFoot'
import TabelaHead from './components/TabelaHead';

class App extends Component {
  state={
    livros:[]
  }

  componentDidMount(){
    fetch('/api/livros.json')
      .then( res => res.json())
      .then( livros => this.setState({livros}))
      .catch(function(error){
        console.log('erro na requisicao')
      })
      .finally(()=> {
        console.log('Sempre retorna!')
      })
  }

  render() {
    return (
      <table className='tabela'>
        <TabelaHead />
        <TabelaBody livros={this.state.livros}/>
        <TabelaFoot qdeLivros={this.state.livros.length}/>
      </table>
    );
  }
}


export default App;
