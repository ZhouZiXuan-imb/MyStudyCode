$(function () {
    $('.btn-primary').on('click', function () {
        let formdata = $('form').serialize();
        addUser(formdata)
    })
})

function addUser(formdata) {
    $.ajax({
        type: 'POST',
        url: '/api/add',
        data: formdata,
        success: function (data) {
            if (data.code == 200) {
                location.href = '/'
            }
        }
    })
}