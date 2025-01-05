/*
 problem statement;
  big basket to reward its customers with bonus points based on parchase amount.

  1. collect name , parchase amount
  2. calculate bonus points;
   
  range | bonus points (%)

  100 - 500   | 5%
  500 - 1500  | 10%
  1500 - 2500 | 15%
  2500+       | 20%

  
*/

console.log ('welcome to big basket');

let customerName = 'moorthy';
let purchaseAmt = 1000;

console.log(typeof purchaseAmt);

function calcBonuspoints(amount) {
    let bounespercentage = 0;
    let bonuspoints = 0;
    if (amount >= 100 && amount <=500 )  {
      bounespercentage = 0.05;
    } else if (amount >= 501 && amount <=1500 )  {
      bounespercentage = 0.1;
    } else if (amount >= 1501 && amount <=2500 )  {
      bounespercentage = 0.15;
    } else {
      bounespercentage = 0.2;
    }
    bonuspoints = amount * bounespercentage;
    return bonuspoints;

}

if (purchaseAmt >=100) {
  let bonus = calcBonuspoints(purchaseAmt);
  console.log(`Hello ${customerName}! You've earned ${bonus} points!`)
} else{
  console.log('Thanks for visiting us!')

}


//3. display bonus points


function rewardCustomer(bonus) {
  const giftVoucherValue = bonus / 100;
  console.log(`Congratulations! You earned a gift voucher worth ₹${giftVoucherValue}.`);
}

const bonus = 500;
rewardCustomer(bonus);