import { styled } from "styled-components";

type Props = {
    classe?: string,
    titulo: string
}

const ButtonSelect = styled.div`
    //Estilo do botão de seleção
    &.select-button {
        width: 8rem;
        height: 2rem;
        display: flex;
        color: var(--color-white);
        background-color: var(--primary-color);
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all .3s ease-in;
        border: 1px solid transparent;
    }

    //Estilo do titulo do botão de seleção
    &.select-button > .title {
        font-family: var(--font-family);
        font-size: var(--font-legend-small);
        font-weight: 600;
    }

    //Estilo do icone do botão de seleção
    &.select-button > .icon {
        width: 1.5rem;
        height: 1.5rem;
    }
    &.select-button > .icon path {
        fill: var(--color-white);
    }

    //Segundo estilo botão de seleção
    &.inverse {
        color: var(--label-button);
        background-color: var(--text-color);
    }
    //Estilo do icone do segundo botão de seleção
    &.inverse > .icon.inverse path {
        fill: var(--label-button);
    }

    //versão desktop
    @media screen and (min-width: 1024px) {
        &.select-button {
            width: 12rem;
            height: 4rem;
            border-radius: 2rem;
            gap: 2.5rem;
        }
        &.select-button > .title {
            font-family: var(--font-family);
            font-size: var(--font-legend-small);
            font-weight: 600;
        }
    }
`;

const SelectButton = ({ classe = '', titulo }: Props) => {
    return (
        <ButtonSelect className={"select-button "+classe}>
            <p className="title">{titulo}</p>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="48" viewBox="0 96 960 960" 
                width="48"
                className={"icon "+classe}>
                    <title>View more</title>
                    <path fill="#fff" d="M480 699q-6 0-11-2t-10-7L261 492q-8-8-7.5-21.5T262 449q10-10 21.5-8.5T304 450l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501 690q-5 5-10 7t-11 2Z"/>
            </svg>
        </ButtonSelect>
    );
}

export default SelectButton;