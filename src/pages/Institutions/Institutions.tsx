import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    InstitutionsContainer 
} from "./style";

export default function Institutions() {
    return (
        <>
            <InstitutionsContainer>
                <Section classe="institutions">
                    <Container>
                        <SectionTitle titulo="Institutions" />
                    </Container>
                </Section>
            </InstitutionsContainer>
        </>
    );
}