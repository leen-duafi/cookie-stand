`use strict`;


//horus= [6am,7am.....,7pm]




// name seattle
// min cust 23
// max cust 65
// avg cookies 6.3
// random customers per hour=[];
// avgCookies=[];




let hours = [6 + `am`, 7 + `am`, 8 + `am`, 9 + `am`, 10 + `am`, 11 + `am`, 12 + `pm`, 1 + `pm`, 2 + `pm`, 3 + `pm`, 4 + `pm`, 5 + `pm`, 6 + `pm`, 7 + `pm`]
console.log(hours);



let seattle = {
    minCuatomer: 23,
    maxCuastomer: 65,
    averageCookies: 6.3,
    randomCuastomerPerHour: [],
    cookieMultiAverage: [],
    sumAllCookie:0,


    getRandoomCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCuastomerPerHour.push(randomNumber(this.minCuatomer, this.maxCuastomer))

        }
        console.log(this.randomCuastomerPerHour)

    },

   
    getRandomMuliAverage: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookieMultiAverage.push(randomNumber(this.minCuatomer, this.maxCuastomer) * 6.3)
            //sumAllCookie = sumAllCookie + this.cookieMultiAverage[i]
        }
        console.log(this.cookieMultiAverage)
        //console.log(smallcookie);
    },


    //getSumAllCookie : function () {
        //for (let i = 0; i < this.cookieMultiAverage.length; i++) {
          // sumAllCookie = sum(this.sumAllCookie,(this.cookieMultiAverage[i]))
          // console.log(this.sumAllCookie)
            
       // }
   // }

    }

     
    

   
    //function sum(a, b) {
        //eslint-disable-line
      //  let answer=a+b;
      //  return [answer,`The sum of ${a} and ${b} is ${answer}.`]
      //}

      //sum(3.4);

    //getSumCookie: function (cookieMultiAverage) {
       // for (let i = 0; i < hours.length; i++) {
            
             //   sumAllDayCookie = sumAllDayCookie + cookieMultiAverage[i]
        //}

       // console.log(sumAllDayCookie)
   // },


seattle.getRandoomCustomer();
seattle.getRandomMuliAverage();
//seattle.getSumAllCookie();

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 


let parent= document.getElementById('salmoon and cookies');

let articleElement=document.createElement('article');

parent.appendChild(articleElement);

let h2Element= document.createElement('h2');

h2Element.textContent=seattle;
