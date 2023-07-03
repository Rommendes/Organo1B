import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';




function App() {

  const [colaboradores, setColaboradores] = useState([]);
  function deletarColaborador ()  {
    console.log("Deletando Colaborador");
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger

    setColaboradores([...colaboradores, colaborador])
  }
  const times = [
    {
      nome: "Desenvolvedor Web",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Scrum Master",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Cientista de dados", 
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Segurança da Informação",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "",
    },
  ]


  return (

    <div className="App">

      <Banner/>
      <Formulario times= {times.map(time => time.nome) } aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      
      {times.map(time => 
        <Time //App renderiza o time, isto é transfoma para HTML
          key= {time.nome} 
          nome= {time.nome} 
          corPrimaria= {time.corPrimaria}
          corSecundaria= {time.corSecundaria} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar= {deletarColaborador}
        />
      )} 
      
      <Rodape/>
    </div>
  );
}
export default App;
