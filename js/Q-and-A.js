$(document).ready(function(){
    $('div.q > button').click(function(){
        var id = $(this).attr('id')
        $('div.a[data-for="' + id + '"]').toggle('fast')
    })
})