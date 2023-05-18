import { styled } from "styled-components";

type Props = {
    classe?: string,
    children: JSX.Element[] | JSX.Element
}

const SectionContent = styled.div`
    &.section {
        width: 100vw;
        height: auto;
    }
    @media screen and (min-width: 610px) {
        &.section {
            width: 100%;
        }
    }
`;

const Section = ({ classe = '', children }: Props) => {
    return (
        <SectionContent className={"section "+classe}>
            {children}
        </SectionContent>
    );
}

export default Section;