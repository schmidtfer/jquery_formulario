    $('#telefone').mask('(00) 00000-0000', {
    placeholder: '_____-____'
   
});
    
    $('#numero-cep').mask('00000-000', {
        placeholder: '_____- ___'
});
      
    $('#numero-cpf').mask('000000000-00', {
    placeholder: '_________- __'
   
});

$('form').validate({
    rules: {
        nome: {
            required: true
    },
        email: {
            required: true,
            email: true
    },
        telefone: {
            required: true
    },
        cep: {
            required: true,        
    }, 
     
},     
messages: {
    nome: 'Por favor, insira seu nome'
},
submitHandler:function(form) {
    console.log(form)
},
invalidHandler:function(evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
    }
    
}
})