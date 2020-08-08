// procurar o botão
document.querySelector("#add-time") //chamando o documento e falando que quero selecionar algo, nesse caso um button, ai eu passo o id do button

// quando clicar no botão (novo horário)
.addEventListener('click', cloneField) // o que eu quero que aconteça quando clicar? para isso adicionamos um evento, click é ação que o usuário deve fazer, cloneField o nome desse evento (pode ser qualquer um)

// Executar uma ação //todas as vezes que eu clicar vai chamar a function cloneField
function cloneField() { 
    // Duplicar os campos. que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean: true ou false

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input') 

    // para cada campo limpar
    fields.forEach(function(field) {
        field.value = ""
    })

    // Colocar na página: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

