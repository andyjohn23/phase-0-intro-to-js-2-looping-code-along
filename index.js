// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }
// wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];
function writeCards(names, event){
    const arrayNew = [];
    for(let i=0; i<names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        arrayNew.push(message);
    }
    return arrayNew;
}
wrapCards(names, "birthday")

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function countDown(number) {
    let i = number;
    while (i >= 0 ){
        console.log(i--);
    }
}

countDown(10);