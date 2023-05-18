import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { 
    MessagesContainer 
} from "./style";

export default function Messages() {
    return (
        <MessagesContainer>
            <Section classe="messages">
                <Container>
                    <SectionTitle titulo="Messages" />
                </Container>
            </Section>
        </MessagesContainer>
    );
}