import './Rodape.css';

export const Rodape = ()=> {
    return (
        <footer >
            
            <div className='footer'>
                
                <div className='redesSociais'>
                    <div className='tw'>
                       <img src='/imagens/tw.png' alt=''/>
                    </div>

                    <div id='fb'>
                        <img src='/imagens/fb.png' alt=''/>
                    </div>

                    <div className='instagram'>
                     <img src='/imagens/ig.png' alt=''/>
                    </div>
                
                </div>

                    <div className='logo'>
                    <img src='/imagens/logo.png' alt=''/>
                    </div>

                    <div className='creditos'>
                    Desenvolvido pela Alura
                    

                </div>

            </div>

        </footer>
    )
}
export default Rodape