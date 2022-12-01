// declara um conjunto inicial de noticias
var db_noticias_inicial = {
    "data": [
        {
            "id": 1,
            "titulo": "Educação financeira dos filhos: segredo é traçar estratégias",
            "data_publicacao": "23/10/2022",
            "categoria": "filhos",
            "link": "https://www.em.com.br/app/noticia/saude-e-bem-viver/2022/10/23/interna_bem_viver,1409320/educacao-financeira-dos-filhos-segredo-e-tracar-estrategias.shtml",
            "autor": "Letícia Mouhamad",
         
        },
        {
            "id": 2,
            "titulo": "Educação financeira: diferencial nas escolas do futuro",
            "data_publicacao": "22/10/2022",
            "categoria": "escola",
            "link": "https://www.em.com.br/app/noticia/opiniao/2022/10/22/interna_opiniao,1410483/educacao-financeira-diferencial-nas-escolas-do-futuro.shtml",
            "autor": "Gustavo Gazza Amaral",
          
        },
        {
            "id": 3,
            "titulo": "Saiba como ter o próprio cofrinho",
            "data_publicacao": "23/10/2022",
            "categoria": "economizar",
            "link": "https://www.em.com.br/app/noticia/saude-e-bem-viver/2022/10/23/interna_bem_viver,1409318/saiba-como-ter-o-proprio-cofrinho.shtml",
            "autor": "Letícia Mouhamad",
       
        },
        {
            "id": 4,
            "titulo": "Reserva de emergência: aprenda como planejar a sua",
            "data_publicacao": "19/10/2022",
            "categoria": "reserva de emergencia",
            "link": "https://g1.globo.com/pr/parana/economia/educacao-financeira-no-parana/noticia/2022/10/19/reserva-de-emergencia-aprenda-como-planejar-a-sua.ghtml",
            "autor": "Priscila Fiedler",
         
        },
        {
            "id": 5,
            "titulo": "É necessario se organizar",
            "data_publicacao": "04/10/2022",
            "categoria": "educacao",
            "link": "https://g1.globo.com/pr/parana/economia/educacao-financeira-no-parana/noticia/2022/10/04/primeiro-passo-da-educacao-financeira-e-reconhecer-necessidade-de-se-organizar-afirma-economista.ghtml",
            "autor": "Pedro Henrique Silva",
            
        },
        {
            "id": 6,
            "titulo": "Revisar os gastos é o terceiro passo da educação financeira; aprenda como",
            "data_publicacao": "18/10/2022",
            "categoria": "educacao",
            "link": "https://g1.globo.com/pr/parana/economia/educacao-financeira-no-parana/noticia/2022/10/18/revisar-os-gastos-e-o-terceiro-passo-da-educacao-financeira-aprenda-como.ghtml",
            "autor": "Junior Leandro Goncalves",
          
        },
        {
            "id": 7,
            "titulo": "10 primeiros passos para iniciar a educação financeira",
            "data_publicacao": "27/09/2022",
            "categoria": "educacao",
            "link": "https://g1.globo.com/pr/parana/economia/educacao-financeira-no-parana/noticia/2022/09/27/10-primeiros-passos-para-iniciar-a-educacao-financeira.ghtml",
            "autor": "Heitor Peres Trevisan Filho",
           
        },
        {
            "id": 8,
            "titulo": "Identificar gastos e receitas melhora a vida financeira",
            "data_publicacao": "19/10/2022",
            "categoria": "educacao",
            "link": "https://g1.globo.com/pr/parana/economia/educacao-financeira-no-parana/noticia/2022/10/19/identificar-gastos-e-receitas-melhora-a-vida-financeira-alerta-economista-veja-como-criar-o-proprio-controle.ghtml",
            "autor": "Elisângela De Jesus Conceição",
           
        },
        {
            "id": 9,
            "titulo": "Qual a importância de fazer as crianças terem noções sobre dinheiro?",
            "data_publicacao": "14/10/2022",
            "categoria": "criancas",
            "link": "https://www.em.com.br/app/noticia/saude-e-bem-viver/2022/10/14/interna_bem_viver,1407120/qual-a-importancia-de-fazer-as-criancas-terem-nocoes-sobre-dinheiro.shtml",
            "autor": "Cristiane Silva Dos Santos",
            
        },
        {
            "id": 10,
            "titulo": "Educação Financeira #215: como falar de dinheiro entre um casal",
            "data_publicacao": "17/10/2022",
            "categoria": "casal",
            "link": "https://g1.globo.com/podcast/educacao-financeira/noticia/2022/10/17/educacao-financeira-215-como-falar-de-dinheiro-entre-um-casal.ghtml",
            "autor": "Ana Carla Muñoz Dentello",
           
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_noticia'));
if (!db) {
    db = db_noticias_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertnoticia(noticia) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novonoticia = {
        "id": novoId,
        "titulo": noticia.titulo,
        "link": noticia.link,
        "autor": noticia.autor,
        "data_publicacao": noticia.data_publicacao,
        "categoria": noticia.categoria,
   
    };

    // Insere o novo objeto no array
    db.data.push(novonoticia);
    displayMessage("noticia inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticia', JSON.stringify(db));
}

function updatenoticia(id, noticia) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].titulo = noticia.titulo,
        db.data[index].link = noticia.link,
        db.data[index].autor = noticia.autor,
        db.data[index].data_publicacao = noticia.data_publicacao,
        db.data[index].categoria = noticia.categoria,
        

    displayMessage("noticia alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticia', JSON.stringify(db));
}

function deletenoticia(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("noticia removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_noticia', JSON.stringify(db));
}