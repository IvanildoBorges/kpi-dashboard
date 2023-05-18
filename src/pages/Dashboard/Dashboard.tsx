import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    DashboardContainer 
} from "./style";

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Section classe="dashboard">
                <Container>
                    <SectionTitle titulo="Dashboard" />
                </Container>
            </Section>
        </DashboardContainer>
    );
}