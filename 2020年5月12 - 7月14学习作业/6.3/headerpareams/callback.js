// function fn(callback) {
// 	setTimeout(()=> {
// 		callback()
// 	}, 1000)
// }

// // let callback = function() {
// // 	console.log('周子轩')
// // }
// fn(function() {
// 	console.log('周子轩')
// })

function fn(str1,str2,callback) {
	callback({
		str1:str1,
		str2:str2,
	})
}

let str1 = '周子轩'
let str2 = '想睡觉'

fn(str1, str2, function(data) {
	console.log(data)
})