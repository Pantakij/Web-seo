$(document).ready(function(){
    $('tr').click(function(){
        let modal = $('#product-factor-modal')
        let source = $('#product-factor-source')

        let source_name = $(this).attr('source')
        let data = source.find('[data-for="' + source_name + '"]')

        modal.find('.modal-title').html(data.find('[name="header"]').text())
        modal.find('.modal-body').html(data.find('[name="content"]').clone())
        modal.modal()
    })
})