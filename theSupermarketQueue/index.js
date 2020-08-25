function queueTime(customers, n) {
    let w = new Array(n).fill(0);
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;
    }
    return Math.max(...w);
}

console.log(queueTime([10,2,3,3], 2));