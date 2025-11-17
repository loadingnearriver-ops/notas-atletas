class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil";
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
    if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
    if (this.idade >= 16 && this.idade <= 30) return "Adulto";
    else return "Sem categoria";
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    const notasEmOrdem = [...this.notas].sort((x, y) => x - y);
    const notasRegistradas = notasEmOrdem.slice(1, 4);
    const soma = notasRegistradas.reduce((total, nota) => total + nota, 0);
    return soma / notasRegistradas.length; 
  }

  obtemNomeAtleta() {
    return this.nome;
  }
  
  obtemAlturaAtleta() {
	  return this.altura;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC(); 
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
} 

// Dados dos Atletas
const atleta1 = new Atleta("Jessica Larissa", 37, 70, 1.65, [9.4, 8, 5.48, 9, 9.75]);
const atleta2 = new Atleta("Zaira Cristina", 34, 70, 1.63, [10, 9, 7.5, 9.35, 7.99]);
const atleta3 = new Atleta("Renata Azevedo", 16, 62, 1.68, [8.5, 9.0, 7.8, 8.2, 8.9]);
const atleta4 = new Atleta("Renata Andrade", 12, 45, 1.52, [7.0, 7.5, 8.0, 7.2, 7.8]);
const atleta5 = new Atleta("João Paulo", 25, 82, 1.80, [9.8, 10, 9.5, 9.0, 9.7]);
const atleta6 = new Atleta("José Lenine", 28, 78, 1.76, [8.0, 8.5, 8.2, 8.8, 8.1]);
const atleta7 = new Atleta("Ingrid Larissa", 20, 64, 1.67, [9.2, 9.5, 9.0, 9.8, 9.6]);
const atleta8 = new Atleta("Kevin Casanova", 23, 85, 1.83, [7.5, 7.8, 8.0, 7.2, 7.9]);
const atleta9 = new Atleta("Francisca Andrea", 14, 53, 1.58, [9.0, 8.8, 9.2, 8.5, 9.1]);
const atleta10 = new Atleta("Adrian Rodriguez", 15, 68, 1.72, [8.7, 9.1, 8.5, 8.9, 9.0]);

const ordemAtletas = [atleta1, atleta2, atleta3, atleta4, atleta5, atleta6, atleta7, atleta8, atleta9, atleta10];
// Exibir as informações de cada um dos atletas
ordemAtletas.forEach(function(atleta) {
    console.log(`Atleta: ${atleta.obtemNomeAtleta()}`);
	console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
	console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
	console.log(`Notas: [${atleta.obtemNotasAtleta().join(", ")}]`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`IMC: ${atleta.obtemIMC().toFixed(2)}`);
    console.log(`Média Válida: ${atleta.obtemMediaValida().toFixed(3)}`);
    console.log("-----");
});