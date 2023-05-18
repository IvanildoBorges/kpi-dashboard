import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    SettingsAccountContainer 
} from "./style";

export default function SettingsAccount() {
    return (
        <SettingsAccountContainer>
            <Section classe="settings">
                <Container>
                    <SectionTitle titulo="Settings" />
                </Container>
            </Section>
        </SettingsAccountContainer>
    );
}