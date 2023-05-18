import { styled } from "styled-components";

type Props = {
    titulo: string
}

//Estilo da Seção de Titulo
const ContainerTitle = styled.div`
    &.section-title {
        //
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