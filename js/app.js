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

    }

     
    

   function sum(a,b){
    let sum =1
    let multply=(a+b)
        for(let i=0 ;i<hours.length;i++){
            sum=multply(sum,this.cookieMultiAverage[i])[0]
        }
        
        console.log(sum());
        
    }
    
    //console.log();

    //getSumCookie: function (cookieMultiAverage) {
       // for (let i = 0; i < hours.length; i++) {
            
             //   sumAllDayCookie = sumAllDayCookie + cookieMultiAverage[i]
        //}

       // console.log(sumAllDayCookie)
   // },


seattle.getRandoomCustomer();
seattle.getRandomMuliAverage();
//seattle.getsumAllCookie(),
//seattle.getSumCookie();

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





//seattle.getRandoomCookies();
//console.log(seattle.randomCuastomerPerHour);
/*let articleElement=document.createElement('article');
let ulElement=document.createElement('ul');

// append
articleElement.appendChild(ulElement);


for (let i =0; i < hours.length; i++) {
    // console.log(frankie.likes[i]);

    // create li
    let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    seattle.getRandoomCookies();
    liElement.seattle.randomCuastomerPerHour[i];

}*/

















// method for random cust each hour

// [23,60,55,]

// avg cookies per hour

// [23*1.2,250,300,105]


// unordered list


// tokyo

// dubai