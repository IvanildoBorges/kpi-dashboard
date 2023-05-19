import { styled } from "styled-components";

//Serve para ajustar os componentes a pagina
export const DashboardContainer = styled.div`
    //Estilo da div pai dos ButtonsSelect
    .section > .container > .buttons-select {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1.5rem;
    }
    //Estilo da lista de cards
    .section > .container > .list-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        .section > .container >  .buttons-select {
            margin-top: 0;
            justify-content: flex-end;
        }
        .section > .container > .list-cards {
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 0.5rem;
        }
    }
    //versão desktop
    @media screen and (min-width: 1024px) {
        .section > .container >  .buttons-select {
            gap: 2rem;
        }
        .section > .container > .list-cards {
            width: 100%;
            display: flex;
            align-items: center;
            justify-items: flex-start;
            flex-wrap: wrap;
        }
        .section > .container > .list-cards > .card:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;