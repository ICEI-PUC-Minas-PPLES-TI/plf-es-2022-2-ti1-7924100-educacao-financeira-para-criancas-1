// declara um conjunto inicial de contatos
var db_professor_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Igor Junior",
            "telefone": "11 912345678",
            "email": "example@example.hgd",            
            "profissao": "Assessor Financeiro",
            "uf": "SP",
            "cidade": "São Paulo",
            "metodologia": "Slides",            
            "preco" : "De R$100,00 a R$150,00",
            "usuario_id": 6,
        },
        {
            "id": 2,
            "nome": "Aline Gonçalves",
            "telefone": "31 987654321",
            "email": "example@example.ghj",
            "profissao": "Professora de Matemática",
            "uf": "MG",
            "cidade": "Tiradentes",
            "metodologia": "Livros",
            "preco": "De R$150,00 a R$200,00",
            "usuario_id": 7,
        },
        {
            "id": 3,
            "nome": "Matheus Ribeiro",
            "telefone": "77 912348765",
            "email": "example@example.lkj",
            "profissao": "Contador",
            "uf": "BA",
            "cidade": "Salvador",
            "metodologia": "Slides e atividades",
            "preco": "Até R$50,00",
            "usuario_id": 8
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db_professores = JSON.parse(localStorage.getItem('db_professor'));
if (!db_professores) {
    db_professores = db_professor_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertProfessor(professor) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db_professores.data.length != 0)
        novoId = db_professores.data[db_professores.data.length - 1].id + 1;
    let novoProfessor = {
        "id": novoId,
        "nome": professor.nome,
        "telefone": professor.telefone,
        "email": professor.email,
        "profissao": professor.profissao,
        "uf": professor.uf,
        "cidade": professor.cidade,
        "metodologia": professor.metodologia,
        "preco": professor.preco,
        "usuario_id": professor.usuario_id,
    };

    // Insere o novo objeto no array
    db_professores.data.push(novoProfessor);
    displayMessage("Professor inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_professor', JSON.stringify(db_professores));
}

function updateProfessor(id, professor) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db_professores.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db_professores.data[index].nome = professor.nome,
        db_professores.data[index].telefone = professor.telefone,
        db_professores.data[index].email = professor.email,
        db_professores.data[index].profissao = professor.profissao,
        db_professores.data[index].uf = professor.uf,
        db_professores.data[index].cidade = professor.cidade,
        db_professores.data[index].metodologia = professor.metodologia,
        db_professores.data[index].preco = professor.preco,
        db_aluno.data[index].usuario_id = professor.usuario_id

    displayMessage("Professor alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_professor', JSON.stringify(db_professores));
}

function deleteProfessor(id) {
    // Filtra o array removendo o elemento com o id passado
    db_professores.data = db_professores.data.filter(function (element) { return element.id != id });

    displayMessage("Professor removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_professor', JSON.stringify(db_professores));
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
