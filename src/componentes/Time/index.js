import Colaborador from '../Colaborador'
import './Time.css'


const Time = ( time, aoDeletar, mudarCor, colaboradores)=> {
    return (

        (colaboradores.length >0 )? <section className='time' style={{backgroundImage: 'url(imagens/fundo.png)', backgroundColor: time.corSecundaria}}>

            <input onChange={evento => mudarCor(evento.target.value, time.nome)} type= 'color' className= 'input-cor' />
            
            <h3 style={{borderColor: time.corPrimaria}}>  {time.nome}</h3>
            
            <div className='colaboradores' >
                {colaboradores.map((colaborador, chave )=> {
                   /*console.log( <Colaborador 
                    key= {colaborador.nome}
                    nome= {colaborador.nome}
                    cargo= {colaborador.cargo}
                    imagem = {colaborador.imagem} 
                    corDeFundo= {props.corPrimaria}
                    aoDeletar= {props.aoDeletar}//Função anôni
                    />)*/
                    //debugger
                   return(
                        <Colaborador 
                        key= {chave}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        corDeFundo= {time.corSecundaria}

                        aoDeletar= {aoDeletar}//NOVA PROP CRIADA - deletar o colaborador do time
                        />
                        
                    )
                } )}
            
            </div>
            
        </section>
        : ''
                    //QDO NÃO TEM NENHUM COLABORADOR O TIME NÃO APARECE
                    //(props.colaboradores.length >0 )?
                    // ; '' string vazia
    )

}
export default Time