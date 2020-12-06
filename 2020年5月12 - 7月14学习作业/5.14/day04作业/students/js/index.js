$(function () {
    $('input[type="submit"]').on('click', function (event) {
        let formData = $('#form').serialize()
        console.log(formData)
        add(formData)

    })
})
/**
 * 
 */

/**
 * 
 * @param {*} param 获取form标签中的所有参数
 */
function add(param) {

    $.ajax({
        type: 'POST',
        url: '/students',
        data: param,
        success: function () {

        }
    })
}