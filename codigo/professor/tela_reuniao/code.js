const dbMock = {
    professores: [
        {
          id:1,
          nome:"Jefferson Moreira",
          profissao:"Professor de Educação Financeira",
          valor:"300 reais por aula",
          email:"jefferson.moreira@gmail.com",
          telefone:"(31)94457-8899",
          foto:"Girafas.jpg",  
        },

    ]

}

function exibicaoProfessores () {
    let str = ''
    for (let i=0; i < dbMock.professores.length; i++) {
    let professor = dbMock.professores[i]
    str += `  <div class="informacao-tela">
    <p>Bem-Vindo(a) à tela de reunião! Abaixo, você verá informações sobre seu professor e um acesso para nosso servidor no Discord. Caso você se desconecte da reunião, terá que apertar o botão novamente.</p>
</div>

<hr>
    <div class="cartao">
    <div id="card-professor" class="card" style="width: 40rem;">
        <img src="${professor.foto}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Nome: ${professor.nome}</h5>
          <p class="card-text">Profissão: ${professor.profissao}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Valor: ${professor.valor}</li>
          <li class="list-group-item">E-mail: ${professor.email}</li>
          <li class="list-group-item">Telefone: ${professor.telefone}</li>
        </ul>
        <div class="card-body">
          <a href="professor.html" class="card-link">Ir para a página do professor...</a>
        </div>
      </div> 
      </div>
      <div class="botao-server">
        <button onclick="window.open('https://discord.gg/d2QQNndsHa')" href="#" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-hand-right"></span> Acessar Server Discord</button>
    </div> `
    }
    
    document.getElementById('telona').innerHTML = str
}

document.body.onload = () => {
    exibicaoProfessores();
}


