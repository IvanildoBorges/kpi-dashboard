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
        padding: 5rem 2rem 2rem;
        margin: 0 auto;
    }
    @media screen and (min-width: 610px) {
        &.container {
            flex-direction: row;
            justify-content: space-between;
            padding: 2.4rem 2.4rem 5rem;
            margin: 0 10.5rem;
        }
    }
    @media screen and (min-width: 1024px) {
        &.container {
            max-width: 99.2rem;
            padding: 2.4rem 0 3rem;
        }
    }
`;

const Container = ({ classe = '', children }: Props) => {
    return (
        <ContainerBox className={"container "+classe}>{children}</ContainerBox>
    );
}

export default Container;