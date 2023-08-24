import * as S from './styles'
import phrase from '../../img/purshe.png'
import tiger from '../../img/tiger.png'
import { Banner } from '../banner'
import coin from '../../img/coin.png'

export function Footer() {

    const handleEntrarClick = () => {
        window.gtag('event', 'click', {
            event_category: 'button_click',
            event_label: 'entrar_button'
        });
    };

    return (
        <S.FooterContainer>
            <S.Phrase>
                <img src={phrase} alt="Venha ganhar dinheiro também" />
            </S.Phrase>
            <S.Screenshots>
                <Banner />
            </S.Screenshots>
            <S.CoinTwo>
                <img src={coin} alt="Moedas" />
            </S.CoinTwo>
            <S.Tiger>
                <img src={tiger} alt="Tigre" />
            </S.Tiger>
            <S.Button
                onClick={handleEntrarClick}

                href='https://chat.whatsapp.com/Ei0bNZS3oCkC93fIuGE1xY'>
                ENTRAR NO GRUPO AGORA
            </S.Button>
            <S.CoinOne>
                <img src={coin} alt="Moedas" />
            </S.CoinOne>
        </S.FooterContainer>
    )
}