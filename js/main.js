$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')

    $('#CPF').mask('000.000.000-00')

    $('#CEP').mask('00000-000')

    $('form').validate ({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            CPF: {
                required: true,
            },
            enderecoCompleto: {
                required: true,
            },
            CEP: {
                required: true,
            }
            
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu e-mail',
            CPF:'Por favor, insira o seu CPF',
            enderecoCompleto:'Por favor, insira o seu endereço completo',
            CEP:'Por favor, insira o CEP',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
           if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incompletos`)
           }
        }
    })

})