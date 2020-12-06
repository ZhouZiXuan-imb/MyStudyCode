$(function () {
    $('.btn-primary').on('click', function (e) {
        e.preventDefault();

        let formdata = $('form').serialize();
        addUser(formdata)
    })
})


function addUser(formdata) {
    $.ajax({
        type: 'POST',
        url: '/api/add',
        data: formdata,
        success: function (result) {
            if (result.code == 200) {
                alert(`欢迎您:${result.data.username}`)
                location.href = '/'
            }
        }
    })
}