let nome: string = "Growdev = typescript";
console.log(nome);

// Classes e objetos

// Pascal case

class Animal {
    // atributos 
    raca: string;
    cor: string;
    idade: number;

    apelido!: string;
    // ? é opcional
    //! confia que uma hora o valor aparece
    //construtor
    constructor(raca: string, cor: string, idade: number) {
        this.raca = raca;
        this.idade = idade;
        this.cor = cor;
    }

    //metodos
    andar() {
        console.log("Animal andando...");
    }
    fazerAniversario() {
        this.idade += 1;
    }

    pintarOsPelos(newCor: string) {
        if(newCor !== 'verde'&& newCor !== 'vermelho') {
            console.log("Cor Inválida");

            return
        }

        console.log("Cor alterada com sucesso")
        this.cor = newCor;
    }
}

//Objetos
let Animal1 = new Animal("raca1", "amarelo", 20);
let Animal2 = new Animal("raca2", "verde", 2);

console.log(Animal1.idade);
console.log(Animal2.idade);

Animal1.andar();
console.log(Animal1.idade);
Animal1.fazerAniversario();
console.log(Animal1.idade);
Animal2.pintarOsPelos("azul")
console.log(Animal2.cor);
Animal2.pintarOsPelos("verde")
console.log(Animal2.cor);