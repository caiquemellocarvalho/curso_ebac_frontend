function Masters(nome, movimentoArtistico, ano, obra, preco) {
    this.nome = nome;
    this.movimentoArtistico = movimentoArtistico;
    this.ano = ano;
    this.obra = obra;
    this.preco = preco;
}

const MasterVanGogh = new Masters("Vincent Van Gogh", "Impressionismo", 1889, "The Starry Night", 100000000);
const MasterPicasso = new Masters("Pablo Picasso", "Cubismo", 1907, "Les Demoiselles d'Avignon", 1200000000);
const MasterTarsila = new Masters("Tarsila do Amaral", "Modernismo", 1928, "Abaporu", 40000000);

console.log(MasterVanGogh);
console.log(MasterPicasso);
console.log(MasterTarsila);

function Leilao(nome, preco) {
    this.obra = nome;
    let _preco = preco;

    this.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }

    this.lance = function() {
        const novoPreco = _preco * 1.15;
        this.setPreco(novoPreco);
    }
}

function Cubista(nome, preco) {
    Leilao.call(this, nome, preco);

    this.lance = function() {
        const novoPreco = this.getPreco() * 1.07;
        this.setPreco(novoPreco);
    }
}

function Impressionista(nome, preco) {
    Leilao.call(this, nome, preco);

    this.aumento = function() {
        const novoPreco = this.getPreco() * 1.15;
        this.setPreco(novoPreco);
    }
}

const leiloado1 = new Cubista("Les Demoiselles d'Avignon", 1200000000);
const leiloado2 = new Impressionista("The Starry Night", 100000000);

leiloado1.lance(); 
console.log(leiloado1.getPreco()); 

leiloado2.aumento();
console.log(leiloado2.getPreco()); 