function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  let div = 2;
  while(div * div <= num && num % div != 0) {
    div++;
  }
  return div * div > num;
}
