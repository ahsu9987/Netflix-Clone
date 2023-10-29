// const food = {
//     name : "burger",
//     price : "600rs",
//     size : "12 inch",
// }
//  const {name , price , size } = food
//  var { name :bugerName , price : allprice , size : allsize} = food
//  console.log(allsize)


const food = [
    {
      Name:"Apple",
      Type:"fruit",
      Price:100
    },
    {
      Name:"pizza",
      Type:"junk food",
      Price:370
    },
    {
      Name:"Burger",
      Type:"junk food",
      Price:310
    },
    {
      Name:"grapes",
      Type:"fruit",
      Price:50
    },
    {
     Name:"mango",
     Type:"fruit",
     Price:50
   }
  ]

//   arrow function :-
 
// const foodName = food.map((food) => food.Name)
// console.log(foodName);

//   const onlyjunkfood = food.filter(foods => foods   .Type === 'junk food');
//   console.log(onlyjunkfood);

//   const onlyjunkfood = food.filter(foods => foods.Type === 'fruit');
//   console.log(onlyjunkfood);

// const allfoods = food.filter(item => item.Price  <=  100);
//   console.log(allfoods);

//   const sortedfood = food.sort((a, b) => b.Price - a.Price);
//   console.log(sortedfood);

    // const allprice = food.reduce((total, abc) => total + abc.Price, 0);
    // console.log(allprice);