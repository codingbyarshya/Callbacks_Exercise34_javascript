const printHello = () => console.log("Hello");

function printAsyncName(callback, name) {
  setTimeout(() => callback(), 1000);
  setTimeout(() => console.log(name), 2000);
}

printAsyncName(printHello, "Arshya");
