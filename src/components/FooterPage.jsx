const FooterPage = () => {
    return (
        <footer id='Footer'>
            <div className='footer-container'>
                <h2 className='footer-title'>Entre em Contato</h2>
                <div class="footer-info">
                    <div class="footer-column">
                        <h3>Informações de Contato</h3>
                        <p>Email: contato@fabulojamodas.com</p>
                        <p>Telefone: (21) 9999-8888</p>
                        <p>Endereço: Rua Josué, 0000, Cidade de Deus, Rio de Janeiro/RJ</p>
                    </div>

                    <div className="footer-column">
                        <h3>Horário de Funcionamento</h3>
                        <p> Segunda a Sexta: 10h às 21h</p>
                        <p>Sábado: 10h às 19h</p>
                        <p>Domingo: Escravidão acabou !!!</p>
                    </div>
                </div>
            </div>
            <div className='social-icons'>
                <a href='#'><span className='icon facebook'>f</span></a>
                <a href='#'><span className='icon twitter'>t</span></a>
                <a href='#'><span className='icon whatsapp'>w</span></a>
            </div>
        </footer>
    );
};
export default FooterPage;