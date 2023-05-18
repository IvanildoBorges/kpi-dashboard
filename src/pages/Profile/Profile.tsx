import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    ProfileContainer 
} from "./style";

export default function Profile() {
    return (
        <ProfileContainer>
            <Section classe="profile">
                <Container>
                    <SectionTitle titulo="Profile" />
                </Container>
            </Section>
        </ProfileContainer>
    );
}