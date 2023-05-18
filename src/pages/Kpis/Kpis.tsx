import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    KpisContainer 
} from "./style";

export default function Kpis() {
    return (
        <KpisContainer>
            <Section classe="kpis">
                <Container>
                    <SectionTitle titulo="KPIs" />
                </Container>
            </Section>
        </KpisContainer>
    );
}