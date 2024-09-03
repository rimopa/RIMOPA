let hellos = [
  '  console.log("")',
  '  print("")',
  '  puts ""',
  '  println("")',
  '  printf("")',
  '  std::cout << ""',
];
document.getElementById("hellos").innerText =
  hellos[Math.floor(Math.random() * hellos.length)];
