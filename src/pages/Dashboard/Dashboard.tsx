import SectionTitle from "../../components/SectionTitle";
import SelectButton from "../../components/SelectButton";
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
                    <div className="buttons-select">
                        <SelectButton titulo="Institute" />
                        <SelectButton titulo="2017 - 2018" classe="inverse" />
                    </div>
                </Container>
            </Section>
        </DashboardContainer>
    );
}