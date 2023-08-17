import * as S from './styles'
import logo from '../../img/logomestre.svg'
import phrase from '../../img/purshe.png'
import screenone from '../../img/screenone.png'
import screentwo from '../../img/screentwo.png'
import screenthree from '../../img/screenthree.png'
import tiger from '../../img/tiger.png'


export function Footer() {
    return (
        <S.FooterContainer>
            <S.Phrase>
                <img src={phrase} alt="Venha ganhar dinheiro também" />
            </S.Phrase>
            <S.Screenshots>
                <S.Phones>
                    <img src={screenone} alt="Relato de pessoa ganhando" />
                    <img src={screentwo} alt="Relato de pessoa ganhando" />
                    <img src={screenthree} alt="Relato de pessoa ganhando" />
                </S.Phones>
            </S.Screenshots>
            <S.Tiger>
                <img src={tiger} alt="Tigre" />
            </S.Tiger>
        </S.FooterContainer>
    )
}