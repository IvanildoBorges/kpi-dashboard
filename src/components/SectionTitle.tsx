import { styled } from "styled-components";

type Props = {
    titulo: string
}

//Estilo da Seção de Titulo
const ContainerTitle = styled.div`
    &.section-title {
        margin-bottom: 1rem;
        width: 100%;
        background-color: var(--theme-color);
        text-align: center;
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        &.section-title {
            margin-bottom: 0;
            width: auto;
            text-align: left;
        }
    }
`;

const SectionTitle = ({ titulo }: Props) => {
    return (
        <ContainerTitle className="section-title">
            <h1 className="title">{titulo}</h1>
        </ContainerTitle>
    );
}

export default SectionTitle;