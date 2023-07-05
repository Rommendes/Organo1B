import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';




function App() {

  const [colaboradores, setColaboradores] = useState([]);

 

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger

    setColaboradores([...colaboradores, colaborador])
  }
  //const times = [ -> será transfomada em State(estado)
    const [ times, setTimes] = useState([
    {
      nome: "Desenvolvedor Web",
      
      cor: "#FDE7E8",
    },
    {
      nome: "Scrum Master",
      
      cor: "#F0F8E2",
    },
    {
      nome: "Cientista de dados", 
      
      cor: "#E8F8FF",
    },
    {
      nome: "Segurança da Informação",
      
      cor: "#FFF5D9",
    },
    {
      nome: "Programação",
      
      cor: "#D9F7E9",
    },
    
    {
      nome: "UX e Design",
      
      cor: "#FAE5F5",
    },
    
    {
      nome: "Inovação e Gestão",
      
      cor: "#FF8A29",
    },
  ])

  function deletarColaborador ()  {
    // console.log("Deletando Colaborador");
    //debugger
   }

   function mudarCordoTime (cor, nome){
      setTimes(times.map(time => {
        if(times.nome === nome){
          time.corPrimaria = cor ;
        }
        return time;
      }))
   }
  return (

    <div className="App">

      <Banner/>
      <Formulario times= {times.map(time => time.nome) } aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
     
      
      {times.map(time => 
        <Time //App renderiza o time, isto é transfoma para HTML
          mudarCor={mudarCordoTime}
          key= {time.nome} 
          nome= {time.nome} 
          corPrimaria= {time.corPrimaria}
          cor= {time.corSecundaria} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar= {deletarColaborador}
        />
      )} 
      
      <Rodape/>
    </div>
  );
}
export default App;
