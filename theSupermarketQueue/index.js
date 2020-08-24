function queueTime(customers, n) {
    if(customers.length == 0) {
        return 0;
    }
    if(customers.length <= n) {
        return customers.length;
    }
    customersTime = customers.reduce((sum, el) => sum + el);

    return customersTime / n;
}

console.log(queueTime([2,2,3,3,4,4], 2));