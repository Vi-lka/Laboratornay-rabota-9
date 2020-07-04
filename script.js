let source = '';
let result = [];
source = document.cookie;

function Split(source) {
  result = source.split(' ');
  console.log(result.length);

}
Split(source);

let ul = document.createElement('ul');
document.body.append(ul);

for (let i = 0; i < result.length; i++) {
  const j = result[i];
  let li = document.createElement('li');
  li.textContent = j;
  ul.append(li);
}
