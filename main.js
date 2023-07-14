    $(document).ready(function() {
        $('#form').submit(function(e) {
            e.preventDefault();
                const tarefa = $('#Nome-tarefa').val();
                const listItem = $('<li/>').text(tarefa);
                $('#listaTarefas').append(listItem);
                $('#Nome-tarefa').val('');
        });

        $('#listaTarefas').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });
    });