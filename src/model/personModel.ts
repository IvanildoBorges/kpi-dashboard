type Location = {
    city: string,
    country: string
}

type Age = {
    age: number
}

export interface PersonType {
    gender: string,
    location: Location,
    dob: Age
}

//Pessoa
class Person implements PersonType {
    //Atributos da Pessoa
    private _gender: string;
    private _location: Location;
    private _dob: Age;

    //Construtor para preencher os dados da classe
    constructor(pessoa: PersonType) {
        this._gender = pessoa.gender;
        this._dob = pessoa.dob;
        this._location = pessoa.location;
    }

    //Como os atributos da interface PersonType são públicos e na classe eles são privados o
    // typescript irá reclamar que a implementação da interface está errada, para isso
    // vamos usar os metodos GET e SETTER para que ele entenda conforme os metodos

    //Retorna os valores dos atributos (Cada metodo tem o nome do atributo 
    // conrrespondente ao da interface)
    get gender(): string {
        return this._gender;
    }
    get dob(): Age {
        return this._dob;
    }
    get location(): Location {
        return this._location;
    }

    //Conforma os valores recebidos com o da classe
    set gender(valor: string) {
        this._gender = valor;
    }
    set dob(valor: Age) {
        this._dob = valor;
    }
    set location(valor: Location) {
        this._location = valor;
    }
}

export const PessoaModel: PersonType = {
    gender: '-',
    location: {city: '-', country: '-'},
    dob: {age: 0}
};

export default Person;