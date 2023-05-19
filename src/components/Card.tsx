import { styled } from "styled-components";

type Props = {
    titulo?: string,
    icone: JSX.Element,
    valor?: number
}

const CardContainer = styled.button`
    //Estilo do card
    &.card {
        background-color: var(--color-lightGray);
        border-radius: 0.5rem;
        width: 100%;
        height: 7rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--color-white);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        cursor: pointer;
    }

    //Estilo do icone do card
    &.card > .icon {
        width: 3rem;
        height: 3rem;
    }
    &.card > .icon path {
        fill: var(--color-black);
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        //
    }

    //versão desktop
    @media screen and (min-width: 1024px) {
        &.card {
            width: 18rem;
            height: 9rem;
            padding: 0 2rem;
            gap: 2rem;
        }
        &.card > .icon {
            width: 4rem;
            height: 4rem;
        }
    }
`;

const CardContent = styled.div`
    //Estilo do conteudo do card
    &.card-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        font-family: var(--font-family);
        font-size: var(--font-legend-small);
        font-weight: 600;
        color: var(--color-black);
    }
    //Estilo do valor numerico recebido
    &.card-content > .card-value {
        font-size: var(--font-subtitle);
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        //
    }

    //versão desktop
    @media screen and (min-width: 1024px) {
        &.card-content {
            font-size: var(--font-text);
        }
        &.card-content > .card-title {
            margin-bottom: 0.75rem;
        }
    }
`;

const Card = ({ titulo = '', icone, valor }: Props) => {
    return (
        <CardContainer className="card">
            {icone}
            <CardContent className="card-content">
                <p className="card-title">{titulo}</p>
                <p className="card-value">{valor}</p>
            </CardContent>
        </CardContainer>
    );
}

export default Card;