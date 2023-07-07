import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props)=> {
    return (

        (props.colaboradores.length >0 )? <section className='time' style={{backgroundColor: props.corSecundaria}}>

            <input onChange={evento => props.mudarCor(evento.target.value, props.corSecundaria)} value={props.cor} type= 'color' className= 'input-cor' />
            
            <h3 style={{borderColor: props.corPrimaria}}>  {props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador => {
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
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        corDeFundo= {props.corSecundaria}

                        aoDeletar= {props.aoDeletar}//NOVA PROP CRIADA - deletar o colaborador do time
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