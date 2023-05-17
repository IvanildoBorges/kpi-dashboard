import { styled } from "styled-components";
import { NavLink } from 'react-router-dom'

// Propriedades aceitas pelo componente
type Props = {
    classe?: string,
    title?: string,
    icon: JSX.Element,
    url: string,
    funcao?: () => void
}

// Estilo do componente
const Item = styled(NavLink)`
    //Estilo dos itens
    &.nav-item {
        height: 100%;
        width: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        transition: all .3s ease-in;
        background-color: transparent;
        transition: background-color .3s ease-in;
        color: var(--color-white);
        cursor: pointer;
    }
    //dimensões dos icones
    &.nav-item > .icon {
        width: 2rem;
        height: 2rem;
        transition: all .3s ease-in;
    }
    //cor dos icones
    &.nav-item > .icon path {
        transition: all .3s ease-in;
        fill: var(--color-white);
    }
    //Estilo do Item ativo
    &.active {
        background-color: var(--label-button);
        color: var(--secundary-color);

        .icon path {
            fill: var(--secundary-color);
        }
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        //Estilo ao passar por cima do Item
        &.nav-item:hover {
            background-color: var(--color-white);
            color: var(--color-black);

            .icon path {
                fill: var(--color-black);
            }
        }
    }
    //versão desktop
    @media screen and (min-width: 1024px) {
        //Estilo dos itens
        &.nav-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all .3s ease-in;
        }
        //dimensões dos icones
        &.nav-item > .icon {
            width: 3rem;
            height: 3rem;
        }
    }
`;

const NavItem = ({ classe = '', title = '', icon = <></>, funcao = () => {}, url }: Props) => {
    return (
        <Item to={url} className={"nav-item "+classe} onClick={funcao}>
            {icon}
            <span>{title}</span>
        </Item>
    )
}

export default NavItem;