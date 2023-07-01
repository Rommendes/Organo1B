import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=> {
    return (

        (props.colaboradores.length >0 )? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            
            <h3 style={{borderColor: props.corPrimaria}}>  {props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador => {
                   
                   return(
                        <Colaborador 
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        corDeFundo= {props.corPrimaria}
                        aoDeletar= {()=> {}}//Função anôni
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