import Card from "../../components/Card";
import SectionTitle from "../../components/SectionTitle";
import SelectButton from "../../components/SelectButton";
import Container from "../../components/layout/Container";
import Section from "../../components/layout/Section";
import { PersonType, PessoaModel } from "../../model/personModel";
import { TotalPersonDataModel } from "../../model/totalPersonData";
import apiPerson from "../../service/api";
import { IconsToCards } from "../../utils/IconsToCards";
import { 
    DashboardContainer 
} from "./style";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [listPersons, setListPersons] = useState([PessoaModel]);
    const [listaResumo, setListaResumo] = useState([TotalPersonDataModel]);

    const carregaPessoas = async (): Promise<void> =>  {
        let pessoas: PersonType[] = await apiPerson.getPersons();
        setListPersons(pessoas);
    }

    const totalDePessoas = (): void => {
        let totalDePessoas: number = listPersons.length;
        let totalGeneroMasculino: number = 0;
        let totalGeneroFeminino: number = 0;
        let totalMulheresMaior18: number = 0;
        let totalHomensMaior18: number = 0;

        listPersons.map((pessoa) => {
            if (pessoa.gender === 'female') {
                totalGeneroFeminino++;
                if (pessoa.dob.age > 18) {
                    totalMulheresMaior18++;
                }
            } else {
                totalGeneroMasculino++;
                if (pessoa.dob.age > 18) {
                    totalHomensMaior18++;
                }
            }
        });

        setListaResumo(
            [
                {
                    title: 'Número de pessoas',
                    total: totalDePessoas
                },
                {
                    title: 'Total de homens',
                    total: totalGeneroMasculino
                },
                {
                    title: 'Total de mulheres',
                    total: totalGeneroFeminino
                },
                {
                    title: 'Mulheres +18',
                    total: totalMulheresMaior18
                },
                {
                    title: 'Homens +18',
                    total: totalHomensMaior18
                },
            ]
        );
    }

    const geraCards = (): JSX.Element[] => {
        //Array de objetos para servir de base na geraCards()
        const listIcons: JSX.Element[] = IconsToCards;
        
        return listaResumo.map((item, index) => {
            return (
                <Card 
                    key={index}
                    icone={listIcons[index]}
                    titulo={item.title}
                    valor={item.total}
                />
            )
        });
    }
    
    useEffect(() => {
        carregaPessoas();
    }, []);

    useEffect(() => {
        totalDePessoas();
    }, [listPersons]);

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