class Heroi {
    constructor(nome, ataque, defesa) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
    }

   // Getter para o nome
    getNome() {
        return this.nome;
    }
      // Setter para o nome
    setNome(novoNome) {
        this.nome = novoNome;
    }

    getAtaque() {
        return this.ataque;
    }
 
    setAtaque(novoAtaque) {
        this.ataque = novoAtaque;
    }

     getDefesa() {
        return this.defesa;
    }
 
    setDefesa(novaDefesa) {
        this.defesa = novaDefesa;
    }
    // Método para calcular o poder de ataque e retornar o resultado
    atacar(outroHeroi) {
        const poderAtaque = this.ataque - outroHeroi.defesa;
        if (poderAtaque > 0) {
            return `${this.nome} venceu o ataque!`;
        } else if (poderAtaque < 0) {
            return `${outroHeroi.nome} venceu o ataque!`;
        } else {
            return "A batalha termina em empate!";
        }
    }

    // Método para exibir os detalhes do herói
    exibirDetalhes() {
        console.log(`Nome: ${this.nome}, Ataque: ${this.ataque}, Defesa: ${this.defesa}`);
    }
}

// Função para simular uma batalha entre dois heróis
function batalha(heroi1, heroi2) {
    // Simulando uma batalha entre os heróis
    const resultadoAtaque = heroi1.atacar(heroi2);
    console.log(resultadoAtaque);
}

// Criando instâncias dos heróis
const heroi1 = new Heroi("Superman", 100, 90);
const heroi2 = new Heroi("Batman", 95, 80);

heroi1.setNome('Naruto')
// Simulando uma batalha entre os heróis
batalha(heroi1, heroi2);
