import { styled } from "styled-components";

//Serve para ajustar os componentes a pagina
export const DashboardContainer = styled.div`
    //Estilo da Section dashboard
    .dashboard {
        //
    }
    //Estilo da div pai dos ButtonsSelect
    .dashboard > .container > .buttons-select {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1.5rem;
    }

    //versão tablet
    @media screen and (min-width: 610px) {
        .dashboard > .container >  .buttons-select {
            margin-top: 0;
            justify-content: flex-end;
        }
    }
    //versão desktop
    @media screen and (min-width: 1024px) {
        .dashboard > .container >  .buttons-select {
            gap: 2rem;
        }
    }
`;