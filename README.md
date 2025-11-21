# 🤸‍♀️ Sistema de Pontuação de Ginástica Artística

Este repositório contém soluções em **JavaScript** para um sistema de avaliação de atletas de ginástica artística. O projeto foca na manipulação de dados, lógica de classes e cálculo de médias com regras específicas (exclusão da maior e menor nota).

## 📂 Estrutura do Projeto

O projeto está dividido em duas versões/arquivos principais, demonstrando a evolução da complexidade do código:

### 1. `notas-atletas.js` (Versão Inicial)
Foca na lógica da competição em si.
- **Funcionalidade:** Recebe uma lista de competidores e suas notas.
- **Regra de Negócio:** Ordena as notas, elimina a maior e a menor, e calcula a média das notas intermediárias.
- **Estrutura:** Utiliza classes `GymComp` e `DadosCompetidor` para processar arrays de objetos.

### 2. `notas-atletas2.js` (Versão Completa)
Uma versão expandida que trata o atleta como um objeto completo, não apenas um competidor com notas.
- **Funcionalidade:** Além da média das notas, gerencia dados antropométricos.
- **Novos Recursos:**
  - **Cálculo de IMC:** Baseado em peso e altura.
  - **Categorização:** Define a categoria do atleta (Infantil, Juvenil, Adulto, etc.) baseada na idade.
  - **Encapsulamento:** Utiliza uma classe `Atleta` robusta com métodos assessores (getters) e métodos de cálculo.

## 🚀 Tecnologias e Conceitos Utilizados

* **JavaScript (ES6+)**
* **Programação Orientada a Objetos (POO):** Criação de Classes, Construtores e Métodos.
* **Manipulação de Arrays:** Métodos `map()`, `reduce()`, `sort()`, `slice()` e `forEach()`.
* **Lógica Condicional:** Estruturas `if/else` para categorização.

## 🧠 Lógica Principal (Média Válida)

A regra principal da competição para calcular a nota final é:
1.  Ordenar as notas de forma crescente.
2.  **Remover** a nota mais baixa (índice 0).
3.  **Remover** a nota mais alta (último índice).
4.  Calcular a média aritmética das notas restantes.

Exemplo de código utilizado:
```javascript
calculaMediaValida() {
    const notasEmOrdem = [...this.notas].sort((x, y) => x - y);
    const notasRegistradas = notasEmOrdem.slice(1, 4); // Pega o miolo do array
    const soma = notasRegistradas.reduce((total, nota) => total + nota, 0);
    return soma / notasRegistradas.length; 
}
