

/**
 * 
 * @param {String} type 
 * @param {String} url 
 * @param {String} data 
 * @param {function} callback 
 */
function ajax(options) {
    let type = options.type
    let url = options.url
    let data = options.data
    let callback = options.callback


    // 1.实例化xhr对象
    let xhr = new XMLHttpRequest()
    // 2.请求行  请求方式，请求地址
    // 判断一下 如果是get请求就是url + '?' + data  如果不是  就是url
    if (type == 'GET') {
        url = url + '?' + data
        data = null
    }
    xhr.open(type, url)
    // 如果是POST方式
    if (type == 'POST') {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-unencoded')
    }
    // 3.发送请求数据
    xhr.send(data)
    // 4.监听请求并处理
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText)
        }
    }
}