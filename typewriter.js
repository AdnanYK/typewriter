const sentence = "hello there from lighthouse labs";

const animate = function () {
  let counter = 0;
  for (const char of sentence) {
  
    setTimeout(() => {
     process.stdout.write(char);
    } , 1000 + (counter) * 50);
    counter ++;
  }
  setTimeout(() => {
    console.log('');
   } , 1000 + (counter) * 50);
}

animate(sentence);



