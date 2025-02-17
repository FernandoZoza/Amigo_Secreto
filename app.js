//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista_Amigos = []


// funcao para adicionar nome de amigos em uma lista
function adicionarAmigo() {
    let amigos = validarInput(document.querySelector('input').value.trim().toUpperCase());
    if (amigos == false) {
        limparCampo() // limpa campo se o usuario digitar dados invalidos
        return
    }
    if (lista_Amigos.includes(amigos)){ // validação para que não haja nomes duplicados na lista
        limparCampo()
        return alert('Voce já adicionou este amigo')   
    } else {
        lista_Amigos.push(amigos); // adiciona o nome do amigo a lista
        }
    listaAmigos();
    limparCampo(); // limpa o campo para o usuario adicionar novos amigos

}

// funcao para limpar dados "input-name"
function limparCampo() { 
    let amigos = document.querySelector('input');
    amigos.value =""
}

// funcao para validar se o "input-name" é texto, se não é vazio.
function validarInput(texto){ 
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (texto == ""){ // verifica se o texto é vazio
        alert('Por favor, insira um nome.');
        return false;
    } 
    if (!regex.test(texto)){ // verifica se o "Input-name" é apenas texto
        alert ('Por favor, digite apenas texto');
        return false
    }  
return texto
}

// esta função gera uma lista de nomes de amigos no HTML
function listaAmigos() {
    let relacaoAmigos = document.getElementById('listaAmigos'); // seleciona o elemento onde irá ser adicionada a lista
    relacaoAmigos.innerHTML = ""; // zera os dados da lista para não gerar duplicidade
    lista_Amigos.forEach( amigo => { // percorre cada elemento da lista, cria um elemento "li" e adiciona a lista HTML
        let nomeNaLista =  document.createElement('li');
        nomeNaLista.textContent = amigo;
        relacaoAmigos.appendChild(nomeNaLista);
    });  
}

// funcao para sortear um amigo na lista que foi gerada
function sortearAmigo(){
 if (lista_Amigos.length == 0){ // alerta caso o usuário tente sortear um amigo sem adicionar nomes na lista
    alert('Sua lista está vazia, adicione seus amigos');
    return;
 }    
 let idSorteio =  Math.floor(Math.random()*lista_Amigos.length); // sorteio um Id de acordo com a quantidade de nomes na lista
 let amigoSorteado = document.getElementById("resultado") // seleciona o ID no html q irá retornar o resultado.
 amigoSorteado.innerHTML = `Você fez uma lista com ${lista_Amigos.length} amigos, é o amigo(a) sorteado é: ${lista_Amigos[idSorteio]}` // gera o resultado do sorteio, 
 // com base no IdSorteio, identifica na lista o nome quecorresponde ao Id Sorteado.
 let relacaoAmigos = document.getElementById('listaAmigos');
    relacaoAmigos.innerHTML = ""; // apaga a lista para mostrar apenas o resultado do sorteio.
}
