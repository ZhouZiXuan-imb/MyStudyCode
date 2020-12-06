$(function () {
    $.ajax({
        type: 'GET',
        url: '/getstudents',
        data: null,
        success: function (data) {
            let htmlStr = '';
            for (let i = 0; i < data.length; i++) {
                htmlStr += `
                <tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].man == 0 ? '男' : '女'}</td>
                    <td>${data[i].emll}</td>
                    <td>${data[i].hobby}</td>
                    <td>${data[i].xueyuan}</td>
                    <td>${data[i].date}</td>
                </tr>
                `
            }
            let tableContent = $('table').html()
            tableContent += htmlStr
            $('table').html(tableContent)
        }
    })
})