import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src="/images/fb.png" alt="Ícone facebook" />
            </a>
          </li>
          <li>
            <a href='twitter.com' target='_blank'>
              <img src="/images/tw.png" alt="Ícone Twitter" />
            </a>
          </li>
          <li>
            <a href='instagram.com' target='_blank'>
              <img src="/images/ig.png" alt="Ícone Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="Logo do Organo" />
      </section>
      <section>
        <p>
          Desenvolvido por Adauto Júnior e Alura.
        </p>
      </section>
    </footer>
  )  
}

export default Footer