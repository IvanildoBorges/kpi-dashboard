import { styled } from "styled-components";

type Props = {
    classe?: string,
    children: JSX.Element[] | JSX.Element
}

//Estilo do Container do nosso conteudo
const ContainerBox = styled.div`
    &.container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 5rem 2rem 1rem;
        margin: 0 auto;
    }
    @media screen and (min-width: 610px) {
        &.container {
            flex-direction: row;
            justify-content: space-between;
            padding: 5rem 3rem 1.5rem;
            margin: 0;
        }
    }
    @media screen and (min-width: 1024px) {
        &.container {
            max-width: 115rem;
            padding: 2.5rem 0 2rem 13rem;
        }
    }
`;

const Container = ({ classe = '', children }: Props) => {
    return (
        <ContainerBox className={"container "+classe}>{children}</ContainerBox>
    );
}

export default Container;