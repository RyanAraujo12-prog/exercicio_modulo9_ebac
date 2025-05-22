$(document).ready(function() {
    $('.tarefas').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#tarefa-adicionada').val().trim();

        if (nomeTarefa !== '') {
            const novaTarefa = $('<li></li>').text(nomeTarefa);
            $('#lista-tarefas').append(novaTarefa);   
        }

        $('#tarefa-adicionada').val('');
    })

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('tarefa-concluida');
    })

    $('#limpar-tarefas').on('click', function() {
        $('#lista-tarefas').empty();
    })
})