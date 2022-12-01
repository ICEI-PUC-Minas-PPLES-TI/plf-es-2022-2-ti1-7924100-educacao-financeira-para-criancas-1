const dbMock = {
    professores: [
    {
        id:1,
        nome:"Jefferson Moreira",
        profissao:"Professor de Educação Financeira",
        valor:"300$/Aula",
        email:"jefferson.moreira@gmail.com",
        telefone:"(31)94457-8899",
        foto:"Girafas.jpg",
        metodologia:"Aulas Híbridas",
        descricaoProfessor:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero at quos soluta.",


    },
    ]
}

function exibeProfessor () {
    let str = ''
    for (let i=0; i< dbMock.professores.length; i++) {
        let professor = dbMock.professores[i]
        str += `<body>
        <div class="telona">
            
    
            <img id ="fotinea" src="${professor.foto}">
    
            <div class="informacoes-professores">
                
                <h5><strong>Nome: ${professor.nome}</strong></h5>
                <h5><strong>Profissão: ${professor.profissao}</strong></h5>
                <h5><strong>Metodologia: ${professor.metodologia}</strong></h5>
                <h5><strong>Valor: ${professor.valor}</strong></h5>
                <h5><strong>E-mail: ${professor.email}</strong></h5>
                <h5><strong>Telefone: ${professor.telefone}</strong></h5>
                <h5><strong>Descrição do Professor: ${professor.descricaoProfessor}</strong></h5>
                
                
            </div>
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        <div class="botao">
            <button id="botao" type="button" class="btn btn-outline-primary mt-5">Voltar</button>
            </div>
    
    </body>`
    }
    document.getElementById('apenas').innerHTML = str
}

document.body.onload = () => {
    exibeProfessor();
}