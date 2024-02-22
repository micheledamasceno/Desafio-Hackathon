// Passo 1: Carregar o JSON existente (supondo que você já tenha o JSON em uma variável chamada 'dadosExistente')
let dadosExistente = {
  "Instituicao": [...],
  "Alimento": [...],
  "Doadores": [...]
};

// Passo 2: Coletar dados dos formulários HTML (supondo que você tenha IDs únicos para cada formulário)
let novaInstituicao = {
  id: parseInt(document.getElementById('idInstituicao').value),
  nome: document.getElementById('nomeInstituicao').value,
  descricao: document.getElementById('descricaoInstituicao').value,
  email: document.getElementById('emailInstituicao').value,
  telefone: document.getElementById('telefoneInstituicao').value,
  endereco: document.getElementById('enderecoInstituicao').value
};

let novoAlimento = {
  id: parseInt(document.getElementById('idAlimento').value),
  descricao: document.getElementById('descricaoAlimento').value,
  observacao: document.getElementById('observacaoAlimento').value
};

let novoDoador = {
  id: parseInt(document.getElementById('idDoador').value),
  nome: document.getElementById('nomeDoador').value,
  cpf: document.getElementById('cpfDoador').value,
  nascimento: document.getElementById('nascimentoDoador').value,
  receptor: document.getElementById('receptorDoador').value,
  telefone: document.getElementById('telefoneDoador').value,
  email: document.getElementById('emailDoador').value,
  endereco: document.getElementById('enderecoDoador').value,
  alimento: document.getElementById('alimentoDoador').value,
  quantidade: document.getElementById('quantidadeDoador').value,
  validade: document.getElementById('validadeDoador').value
};

// Passo 3: Atualizar o JSON existente
dadosExistente.instituicoes.push(novaInstituicao);
dadosExistente.alimentos.push(novoAlimento);
dadosExistente.doadores.push(novoDoador);

// Passo 4: Salvar o JSON atualizado (exemplo de como salvar no LocalStorage)
localStorage.setItem('estrutura.json', JSON.stringify(dadosExistente));

// Convertendo o JSON para string
var dadosString = JSON.stringify(dadosExistente);

// Salvando os dados no LocalStorage
localStorage.setItem('dados', dadosString);

// Recuperando os dados do LocalStorage
var dadosRecuperados = localStorage.getItem('dados');

// Convertendo os dados de volta para JSON
var dadosJson = JSON.parse(dadosRecuperados);

// Exibindo os dados no console
console.log(dadosJson);