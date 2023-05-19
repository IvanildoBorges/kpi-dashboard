import Card from "../../components/Card";
import SectionTitle from "../../components/SectionTitle";
import SelectButton from "../../components/SelectButton";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { CardType } from "../../model/CardModel";
import { 
    DashboardContainer 
} from "./style";

export default function Dashboard() {
    //Array de objetos para servir de base na geraCards()
    const dataItems: CardType[] = [
        {
            titulo: "Current Students",
            valor: 2119,
            icone:  <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="48" 
                        viewBox="0 96 960 960" 
                        width="48"
                        className="icon">
                            <title>cumulative enrolled</title>
                            <path fill="#000" d="M434 959q-58-42-122.5-68T179 857q-25-3-42-21.5T120 794V483q0-26 18-42.5t41-12.5q79 12 155.5 53T480 587q69-65 145.5-106T781 428q23-4 41 12.5t18 42.5v311q0 23-17 41.5T781 857q-68 8-132.5 34T526 959q-20 14-46 14t-46-14Zm49-515q-65 0-109.5-44.5T329 290q0-65 44.5-109.5T483 136q65 0 109.5 44.5T637 290q0 65-44.5 109.5T483 444Z"/>
                    </svg>
        },
        {
            titulo: "Students Enrolled",
            valor: 3119,
            icone:  <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="48" 
                        viewBox="0 96 960 960" 
                        width="48"
                        className="icon">
                            <title>enrolled</title>
                            <path fill="#000" d="M407 858q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 798h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 858H407Zm0-252q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 546h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 606H407Zm0-253q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T407 293h403q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 353H407ZM189 895q-28.05 0-48.025-19Q121 857 121 828.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255 800.95 255 829q0 27.225-19.387 46.612Q216.225 895 189 895Zm0-252q-28.05 0-48.025-19.681Q121 603.638 121 576t19.975-47.319Q160.95 509 189 509q27.225 0 46.613 19.681Q255 548.362 255 576t-19.387 47.319Q216.225 643 189 643Zm-1-253q-27.637 0-47.319-19.681Q121 350.638 121 323t19.681-47.319Q160.363 256 188 256q27.637 0 47.319 19.681Q255 295.362 255 323t-19.681 47.319Q215.637 390 188 390Z"/>
                    </svg>
        },
        {
            titulo: "Cumulative Graduates",
            valor: 20867,
            icone: <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="48" viewBox="0 96 960 960" 
                        width="48"
                        className="icon">
                            <title>graduates</title>
                            <path fill="#000" d="M890 773q-13 0-21.5-8.5T860 743V491L508 681q-7 4-14 5.5t-15 1.5q-8 0-14.5-1.5T451 681L88 482q-8-4-11.5-11T73 456q0-8 3.5-15T88 430l362-198q7-4 14-6t15-2q8 0 15 2t14 6l396 215q8 5 12 12t4 15v269q0 13-8.5 21.5T890 773ZM479 927q-8 0-15-1.5t-14-5.5L220 794q-14-8-22.5-22t-8.5-31V567l249 136 20 10q10 5 21 5t21.5-5q10.5-5 20.5-10l248-136v174q0 17-8.5 31T738 794L508 920q-7 4-14 5.5t-15 1.5Z"/>
                    </svg>
        },
        {
            titulo: "Cumulative Students Enrolled",
            valor: 25600,
            icone:  <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="48" 
                        viewBox="0 96 960 960" 
                        width="48"
                        className="icon">
                            <title>current students</title>
                            <path fill="#000" d="M271 420q5 5 10.5 5t10.5-5l54-53q5-5 5-11t-5-11l-54-53q-5-5-10.5-5t-10.5 5l-54 53q-5 5-5 11t5 11l54 53Zm389-49q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm-430 645q-13 0-21.5-8.5T200 986v-54q0-35 19.5-65t51.5-45q49-23 102-34.5T480 776q54 0 107 11.5T689 822q32 15 51.5 45t19.5 65v54q0 13-8.5 21.5T730 1016H230Zm250-280q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-191-80H140q-24 0-42-18t-18-42V196q0-24 18-42t42-18h680q24 0 42 18t18 42v400q0 24-18 42t-42 18H671q5-14 7-29t2-31q0-83-58.5-141.5T480 396q-83 0-141.5 58.5T280 596q0 16 2 31t7 29Z"/>
                    </svg>
        },
        {
            titulo: "Accreditations",
            valor: 12,
            icone:  <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        height="48" viewBox="0 96 960 960" 
                        width="48"
                        className="icon">
                            <title>accreditations</title>
                            <path fill="#000" d="M321 896q-24 0-42-18t-18-42v-70q0-13 8.5-21.5T291 736h94V609q-38 3-76-10.5T241 556v-58h-50L88 395q-12-12-12-27t12-24q32-24 74.5-39t85.5-15q30 0 68.5 9.5T385 330v-44q0-13 8.5-21.5T415 256h395q13 0 21.5 8.5T840 286v505q0 44-30.5 74.5T735 896H321Zm124-160h215q13 0 21.5 8.5T690 766v25q0 20 12.5 32.5T735 836q20 0 32.5-12.5T780 791V316H445v57l228 228q6 6 9.5 12t3.5 14q0 13-8.5 21.5T656 657q-8 0-14-3.5t-12-9.5L517 531l-17 20q-13 15-26 23t-29 15v147ZM218 438h83v89q17 11 33.5 16.5T368 549q25 0 51-13.5t38-27.5l17-20-69-69q-32-32-72-50.5T248 350q-27 0-49 6.5T154 374l64 64Z"/>
                    </svg>
        },
    ];

    const geraCards = (): JSX.Element[] => {
        return dataItems.map((item, index) => 
            <Card 
                key={index}
                icone={item.icone}
                titulo={item.titulo}
                valor={item.valor}
            />
        );
    }

    return (
        <DashboardContainer>
            <Section>
                <Container>
                    <SectionTitle titulo="Dashboard" />
                    <div className="buttons-select">
                        <SelectButton titulo="Institute" />
                        <SelectButton titulo="2017 - 2018" classe="inverse" />
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                <div className="list-cards">
                        { geraCards() }
                    </div>
                </Container>
            </Section>
        </DashboardContainer>
    );
}