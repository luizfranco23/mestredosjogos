import * as S from './style'
import logo from '../../img/logo.png'
import image from '../../img/imagegame.png'
import group from '../../img/group.png'
import purshe from '../../img/purshe.png'


declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export function Body() {

    const handleEntrarClick = () => {
        window.gtag('event', 'click', {
            event_category: 'button_click',
            event_label: 'entrar_button'
        });
    };


    return (
        <S.ContainerBody>
            <S.ContainerCard>
                <S.Card>
                    <S.LogoCard><img src={logo} alt="Mestre dos Jogos" /></S.LogoCard>

                    <S.PhraseTwo>
                        <img src={purshe} alt="Venha ganhar dinheiro" />
                    </S.PhraseTwo>
                    <S.Phrase>
                        <img src={group} alt="Vem para o grupo" />
                    </S.Phrase>
                    <S.Button
                        onClick={handleEntrarClick}

                        href='https://chat.whatsapp.com/JHUdeQhNce0CL6aMgNpZG0'>
                        ENTRAR
                    </S.Button>
                </S.Card>

                <S.Imagem>
                    <div>
                        <img src={image} alt="Personagens do jogo" />
                    </div>
                </S.Imagem>
                <S.ImagemTwo>
                    <div>
                        <img src={image} alt="Personagens do jogo" />
                    </div>
                </S.ImagemTwo>
            </S.ContainerCard>
        </S.ContainerBody>
    );
}