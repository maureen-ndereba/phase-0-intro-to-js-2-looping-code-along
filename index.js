function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}


const gifts = ["teddy bear", "drone", "doll"];
wrapGifts(gifts);


//const names = ["Justin", "Winnie", "Jobe", "Ems"];
function writeCards(names, event) {

    let messages = []
    for (let i = 0; i < names.length; i++){
      messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }

    return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(maxNumber) {
    while (maxNumber > -1){
       
        console.log(maxNumber);
        maxNumber--
    }
  }