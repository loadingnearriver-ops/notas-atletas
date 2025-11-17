class GymComp {
	constructor(nome, notas) {
		this.nome = nome;
		this.notas = notas;
	}
	obterNotasEmOrdem() {
		return this.notas.slice().sort((x, y) => x - y);
	}
	// Método para encontrar a média
	calculoDaMedia() {
		let notasEmOrdem = this.obterNotasEmOrdem();
	
	// Elimina primeira e ultima nota	
		let notasRegistradas = notasEmOrdem.slice(1, 4);
		let soma = notasRegistradas.reduce((total, nota) => total + nota, 0);
		
	// Calcula a média	
		let media = soma / notasRegistradas.length;
		return media;
	}
	
	mostrarResultado() {
		let notasEmOrdem = this.obterNotasEmOrdem();
		let media = this.calculoDaMedia();
		
		console.log(`Competidor: ${this.nome}`);
		console.log(`Notas Registradas: ${notasEmOrdem.join(",")}`);
		console.log(`Média Válida: ${media}`);
	}
}

class DadosCompetidor {
	constructor(dadosCompetidor) {
		this.competidor = dadosCompetidor.map(dados => new GymComp(dados.nome, dados.notas));
	}
	registrarEMostrarResultados() {
		this.competidor.forEach(competidor => competidor.mostrarResultado());
	}
}

let competidor = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let competicao = new DadosCompetidor(competidor);
competicao.registrarEMostrarResultados();