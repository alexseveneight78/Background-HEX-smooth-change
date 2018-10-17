let dot = document.getElementById('dot');
let body = document.getElementsByTagName('body')[0];

function bgc(){
    let arr = []; 
    arr.length = 6;

    for (let i=0; i < arr.length; i++) {
      let random = Math.floor(Math.random() * 2); // выпадает 0 или 1
      let letters = ['a','b','c','d','e','f'];
      if(random === 0) { // если 0, то итерация заполняется числом от 0 до 9
        arr[i] = Math.floor(Math.random() * 10);
      }
      if(random === 1) { // если 1, то итерация заполняется буквой из массива letters
        for(j=0; j < letters.length;j++) {
          arr[i] = letters[Math.floor(Math.random()*6)]
        }
      }
    }
  arr = arr.join('');
  body.style.backgroundColor = '#' + arr;
  //body.style.margin = '50px';
  console.log(arr);
}
setInterval(bgc, 5000);


