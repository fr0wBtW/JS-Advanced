function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentence = input.innerHTML.split('.');
  sentence.pop();

  for (let i = 0; i <= sentence.length; i += 3) {
    let text = sentence.slice(i, i + 3).join('.');
    let p = document.createElement("p");
    p.innerHTML = text + '.';
    output.appendChild(p);
  }
}