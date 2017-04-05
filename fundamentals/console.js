var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod += "<p> This has gone through the loop completely: " +i+ " times </p>";
}

console.log(bod)

var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i ++){
  console.log(paragraphs[i].addEventListener);
  paragraphs[i].addEventListener('click', function(){
    this.style.background='blue';
  });
}