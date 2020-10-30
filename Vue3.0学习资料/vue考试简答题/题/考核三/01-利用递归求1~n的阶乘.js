// 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
// 求n的阶乘 3!=6 4!=24
function fn(n) {
    if (n == 1) {
        return 1
    }
    return n * fn(n - 1)
}
fn(4)