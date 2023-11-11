import './index.css';
import tamborim from '../../assets/images/tambourine.svg';
import play from '../../assets/images/playbutton.svg';

export default function Home() {
    return(
        <>
            <section id='show-gera-samba'>
                <div className="circle-background">
                    <img 
                    src={tamborim} 
                    alt="Logo Gera Samba" 
                    className='tamborim'
                    />
                </div>
                <div className="play-button">
                    <a href='/gera-samba-chat'>
                        <img src={play} 
                        alt="Botão para acessar o Gera Samba" 
                        className='acessar-ai'
                        />
                        <p>
                            Aumente seu ritmo. Faça seu primeiro bot
                        </p>
                    </a>
                </div>
            </section>
        </>
    )
}