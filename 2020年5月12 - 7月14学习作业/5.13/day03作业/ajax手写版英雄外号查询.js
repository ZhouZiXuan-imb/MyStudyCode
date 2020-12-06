let $ = {
    /**
     * 
     * @param {function} dataObj 
     */
    param: function (dataObj) {
        // 前端传输过来的数据是一个对象的形式  但是我们要把数据改成key=value&key1=value1的形式
        let dataStr = '';
        for (let key in dataObj) {
            dataStr += key + '=' + dataObj[key] + '&';
        }
        dataStr.slice(0, -1)
        return dataStr;
    },



    /**
     * 
     * @param {function} options 
     */
    ajax: function (options) {
        // 定义ajax的具体的四个参数
        // 请求方式  如果传参  那么就是传来的参数   如果没有传参  就是默认的GET
        let type = options.type || 'GET'
        // 请求地址
        let url = options.url || ''
        // 请求数据  自动转成
        let data = this.param(options.data || {})
        // 成功时的回调函数
        let success = options.success;


        // 发起ajax请求

        // 1. 实例化xhr对象
        let xhr = new XMLHttpRequest();
        // 如果是GET请求方式
        if (type == 'GET') {
            url = url + '?' + data
            data = null;
        }
        // 2. 设置请求行  请求方式和请求地址
        xhr.open(type, url)

        // 3. 如果是POST请求方式   必须要设置请求头
        if (type == 'POST') {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        // 4. 发送请求数据
        xhr.send(data)
        // 5. 监听请求并处理响应
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                success(xhr.responseText);
            }
        }
    }
}