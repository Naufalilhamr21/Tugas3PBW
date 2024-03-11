function fibonacci(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

// Cetak 10 deret Fibonacci pertama
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
