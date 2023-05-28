import './App.css';
import SayMyName from './Components/SaymyName';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';


function App() {
   const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testanto CSS</h1>
      <Frase/>
      <Frase/>

        <SayMyName nome="Geovana"/>
        <SayMyName nome="Letícia"/>
        <SayMyName nome={nome}/>
        <Pessoa 
        nome='Rodrigo' 
        idade='38'
        profissao='programador'
        
        />
                  
      
    </div>
  );
}

export default App;
