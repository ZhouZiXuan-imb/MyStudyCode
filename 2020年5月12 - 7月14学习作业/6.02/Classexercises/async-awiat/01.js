// async function p1() {
// 	return 'p1'
// }

// async function p2() {
// 	return 'p2'
// }

// async function p3() {
// 	return 'p3'
// }

// async function run() {
// 	let r1 = await p1();
// 	let r2 = await p2();
// 	let r3 = await p3();

// 	console.log(r1,r2,r3)
// }



// run();
// console.log('111')



// const fs = require('fs')

// const promisify = require('util').promisify;

// const readFile = promisify(fs.readFile);
// // console.log(fs.readFile())
// // fs.readFile('./1.txt','utf8',(err,data) => {
// // 		console.log(data)
// // 	})

// async function p1() {
// 	return readFile('./1.txt','utf8')
// }

// async function p2() {
// 	return readFile('./2.txt','utf8')
// }

// async function p3() {
// 	return readFile('./3.txt','utf8')
// }


// async function run() {
// 	let r1 = await p1()
// 	let r2 = await p2()
// 	let r3 = await p3()

// 	console.log(r1,r2,r3)
// }

// run();

const fs = require('fs')

const promisify = require('ut').promisify;

const readFile = promisify(fs.readFile)

function p1() {
	readFile('./1.txt','utf8')
}	

p1();