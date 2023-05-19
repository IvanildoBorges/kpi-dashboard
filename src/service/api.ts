import Person, { PersonType } from "../model/personModel";

//Url base para requisiçao na API
const URL_BASE: string = 'https://randomuser.me/api';

//converte json para person
function convertDataToPerson(pessoaData: PersonType) {
    const pessoa = new Person(pessoaData);
    return pessoa;
}

const apiPerson = {
    getPersons: async (offset: number = 1, limit: number = 500): Promise<PersonType[]> => {
        return await fetch(`${URL_BASE}/?page=${offset}&results=${limit}`)
            //recebe os dados e transforma num objeto json
            .then((response) => response.json())   
            //depois pega somente os results do objeto json 
            .then((jsonBody) => jsonBody.results)   
            //faz o parse de cada json para um objeto do tipo Person
            .then((persons: PersonType[]) => persons.map(convertDataToPerson));
    },
}

export default apiPerson;