function countSmileys(arr) {
    const validSmiles = [':-)', ':~)', ':)', ':D', ';-)', ';~)', ';)', ';D', ';-D', ';~D', ':-D', ':~D'];
    return arr.filter(el => validSmiles.includes(el)).length;
}

console.log(countSmileys([':)',':(',':D',':O',':;']));