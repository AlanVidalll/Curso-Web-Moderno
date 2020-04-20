const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// No caso do break ele sai do laço for depois de encontrar o indíce 5...
for (x in nums) {

    if (x == 5) {
        break
    }
    console.log(x + ' = ' + nums[x])
}
// Aqui no continue ele vai até o indice 4 , pula o 5 e continua no 6 ate o final....
for (y in nums) {

    if (y == 5) {
        continue
    }
    console.log(y + ' = ' + nums[y])
}
