import { styled } from "styled-components";

type Props = {
    funcao?: () => void,
}

//Estilo do botão de abrir e fechar o menu
const MenuButton = styled.div`
    &.button-menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding:1rem  0.5rem 0.5rem;
        display: block;
        transform: translate(-100% 75%);
        background-color: var(--color-white);
        z-index: 10;
    }
    &.button-menu > .mobile-menu {
        display: block;
        width: 3rem;
        height: 3rem;
        cursor: pointer;    
    }
    &.button-menu > .mobile-menu > div {
        width: 2rem;
        height: 0.2rem;
        border-radius: 0.094rem;
        background-color: var(--primary-color);
        margin: 0.5rem;
        transition: .3s;
    }
    &.button-menu > .mobile-menu.active > .line1 {
        transform: rotate(-50deg) translate(-9px, 9px);
    }

    &.button-menu > .mobile-menu.active > .line2 {
        opacity: 0;
    }

    &.button-menu > .mobile-menu.active > .line3 {
        transform: rotate(50deg) translate(-5px, -7px);
    }

    //esconde o botão em tela desktop
    @media screen and (min-width: 1024px) {
        &.button-menu, .mobile-menu {
            display: none;
        }
    }
`;

const MobileMenu = ({ funcao }: Props) => {
    return (
        <MenuButton className="button-menu">
            <div className="mobile-menu" onClick={funcao}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </MenuButton>
    );
}

export default MobileMenu;