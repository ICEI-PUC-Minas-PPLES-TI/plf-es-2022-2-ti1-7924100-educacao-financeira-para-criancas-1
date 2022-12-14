// Conjunto inicial de alunos: DADOS MOCK/FAKE
var db_aluno_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Giovanna Barcelos",
            "idade": "11",
            "escolaridade": "Ensino Fundamental I",
            "responsavel": "Luiza Barcelos",
            "telefone": "11 912345678",
            "uf": "SP",
            "cidade": "Campinas",
            "usuario_id": 3,
        },
        {
            "id": 2,
            "nome": "Tadeu Chagas",
            "idade": "10",
            "escolaridade": "Ensino Fundamental I",
            "responsavel": "André Chagas",
            "telefone": "11 987654321",
            "uf": "SC",
            "cidade": "Florianópolis",
            "usuario_id": 4,
        },
        {
            "id": 3,
            "nome": "Valentina Rodrigues",
            "idade": "13",
            "escolaridade": "Ensino Fundamental II",
            "responsavel": "Maurício Rodrigues",
            "telefone": "11 543216789",
            "uf": "BA",
            "cidade": "Salvador",
            "usuario_id": 5,
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db_aluno = JSON.parse(localStorage.getItem('db_aluno'));
if (!db_aluno) {
    db_aluno = db_aluno_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertAluno(aluno) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db_aluno.data.length != 0)
        novoId = db_aluno.data[db_aluno.data.length - 1].id + 1;
    let novoAluno = {
        "id": novoId,
        "nome": aluno.nome,
        "idade": aluno.idade,
        "escolaridade": aluno.escolaridade,
        "responsavel": aluno.responsavel,
        "telefone": aluno.telefone,
        "uf": aluno.uf,
        "cidade": aluno.cidade,
        "usuario_id": aluno.usuario_id,
    };

    // Insere o novo objeto no array
    db_aluno.data.push(novoAluno);
    displayMessage("Aluno inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_aluno', JSON.stringify(db_aluno));
}

function updateAluno(id, aluno) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db_aluno.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
        db_aluno.data[index].nome = aluno.nome,
        db_aluno.data[index].idade = aluno.idade,
        db_aluno.data[index].escolaridade = aluno.escolaridade,
        db_aluno.data[index].responsavel = aluno.responsavel,
        db_aluno.data[index].telefone = aluno.telefone,
        db_aluno.data[index].uf = aluno.uf,
        db_aluno.data[index].cidade = aluno.cidade,
        db_aluno.data[index].usuario_id = aluno.usuario_id

    displayMessage("Aluno alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_aluno', JSON.stringify(db_aluno));
}

function deleteAluno(id) {
    // Filtra o array removendo o elemento com o id passado
    db_aluno.data = db_aluno.data.filter(function (element) { return element.id != id });

    displayMessage("Aluno removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_aluno', JSON.stringify(db_aluno));
}

//API IBGE para Estados e Municípios
//Estados
const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const uf = document.getElementById("inputUf");
window.addEventListener("load", async () => {
    const request = await fetch(urlUF);
    const response = await request.json();
    const options = document.createElement("optgroup");
    options.setAttribute("label", "UFs");
    response.forEach(function (uf) {
        options.innerHTML += "<option>" + uf.sigla + "</option>";
    });
    uf.append(options);
});
//Filtro para UF
const uf_filtro = document.getElementById("filtro_uf");
window.addEventListener("load", async()=>{
    const request = await fetch(urlUF);
    const response = await request.json();
    const options = document.createElement("optgroup");
    options.setAttribute("label", "UFs");
    response.forEach(function (uf_filtro) {
        options.innerHTML += "<option>" + uf_filtro.sigla + "</option>";
    });
    uf_filtro.append(options);
})
//Municípios
const cidade = document.getElementById("inputCidade");
uf.addEventListener("change", async function(){
    const urlCidades = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf.value+"/municipios";
    const request = await fetch(urlCidades);
    const response = await request.json();
    let options = "";
    response.forEach(function(cidades){
        options += "<option>"+cidades.nome+"</option>";
    })
    cidade.innerHTML = options;
});
