$(function () {
    $('#logouButton').on('click', function () {
        adminLogout()
    })

    $('.navbar-btn').on('click', function () {
        $('.aside, .main').toggleClass('toggle')
    })
})

function adminLogout() {
    $.ajax({
        type: 'GET',
        url: '/admin/logout',
        date: null,
        success: function (result) {
            if (result.code == 200) {
                location.href = '/admin/login'
            }
        }
    })
}