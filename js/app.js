`use strict`;


//horus= [6am,7am.....,7pm]




// name seattle
// min cust 23
// max cust 65
// avg cookies 6.3
// random customers per hour=[];
// avgCookies=[];


/*

let hours = [6 + `am`, 7 + `am`, 8 + `am`, 9 + `am`, 10 + `am`, 11 + `am`, 12 + `pm`, 1 + `pm`, 2 + `pm`, 3 + `pm`, 4 + `pm`, 5 + `pm`, 6 + `pm`, 7 + `pm`]
console.log(hours);



let seattle = {

    location: `seattle`,
    minCustomer: 23,
    maxCuastomer: 65,
    averageCookies: 6.3,
    randomCuastomerPerHour: [],
    cookieMultiAverage: [],
    sumAllCookie: 0,


    getRandoomCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCuastomerPerHour.push(randomNumber(this.minCustomer,this.maxCuastomer))

        }
        console.log(this.randomCuastomerPerHour)

    },


    getRandomMuliAverage: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookieMultiAverage.push(Math.floor(this.randomCuastomerPerHour[i]*this.averageCookies));
            this.sumAllCookie=this.sumAllCookie+this.cookieMultiAverage[i];
        }
        console.log(this.cookieMultiAverage);
        console.log(this.sumAllCookie);
        
    },

    render:function(){
        let parent=document.getElementById(`parent`);
        let newElement=document.createElement('h3');
        parent.appendChild(newElement);
        newElement.textContent=this.location;

       // console.log(this.location);

        let ulElement=document.createElement(`ul`);
        parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
        
        let liElement=document.createElement(`li`)
        ulElement.appendChild(liElement);
        liElement.textContent=`${hours[i]} : ${this.randomCuastomerPerHour[i]} cookies`
    }

    let totalLi=document.createElement(`li`);
    ulElement.appendChild(totalLi);
    totalLi.textContent=this.sumAllCookie;
       


    }
}


//console.log(seattle);


seattle.getRandoomCustomer();
seattle.getRandomMuliAverage();
seattle.render();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; }



let tokyo = {

    location: `tokyo`,
    minCustomer: 3,
    maxCuastomer: 24,
    averageCookies: 1.2,
    randomCuastomerPerHour: [],
    cookieMultiAverage: [],
    sumAllCookie: 0,


    getRandoomCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCuastomerPerHour.push(randomNumber(this.minCustomer,this.maxCuastomer))

        }
        console.log(this.randomCuastomerPerHour)

    },


    getRandomMuliAverage: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookieMultiAverage.push(Math.floor(this.randomCuastomerPerHour[i]*this.averageCookies));
            this.sumAllCookie=this.sumAllCookie+this.cookieMultiAverage[i];
        }
        console.log(this.cookieMultiAverage);
        console.log(this.sumAllCookie);
        
    },

    render:function(){
        let parent=document.getElementById(`parent`);
        let newElement=document.createElement('h3');
        parent.appendChild(newElement);
        newElement.textContent=this.location;

       // console.log(this.location);

        let ulElement=document.createElement(`ul`);
        parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
        
        let liElement=document.createElement(`li`)
        ulElement.appendChild(liElement);
        liElement.textContent=`${hours[i]} : ${this.randomCuastomerPerHour[i]} cookies`
    }

    let totalLi=document.createElement(`li`);
    ulElement.appendChild(totalLi);
    totalLi.textContent=this.sumAllCookie;
       


    }
}


//console.log(seattle);


tokyo.getRandoomCustomer();
tokyo.getRandomMuliAverage();
tokyo.render();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; }



   



let dubai = {

    location: `dubai`,
    minCustomer: 11,
    maxCuastomer: 38,
    averageCookies: 3.7,
    randomCuastomerPerHour: [],
    cookieMultiAverage: [],
    sumAllCookie: 0,


    getRandoomCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCuastomerPerHour.push(randomNumber(this.minCustomer,this.maxCuastomer))

        }
        console.log(this.randomCuastomerPerHour)

    },


    getRandomMuliAverage: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookieMultiAverage.push(Math.floor(this.randomCuastomerPerHour[i]*this.averageCookies));
            this.sumAllCookie=this.sumAllCookie+this.cookieMultiAverage[i];
        }
        console.log(this.cookieMultiAverage);
        console.log(this.sumAllCookie);
        
    },

    render:function(){
        let parent=document.getElementById(`parent`);
        let newElement=document.createElement('h3');
        parent.appendChild(newElement);
        newElement.textContent=this.location;

       // console.log(this.location);

        let ulElement=document.createElement(`ul`);
        parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
        
        let liElement=document.createElement(`li`)
        ulElement.appendChild(liElement);
        liElement.textContent=`${hours[i]} : ${this.randomCuastomerPerHour[i]} cookies`
    }

    let totalLi=document.createElement(`li`);
    ulElement.appendChild(totalLi);
    totalLi.textContent=this.sumAllCookie;
       


    }
}


//console.log(seattle);


dubai.getRandoomCustomer();
dubai.getRandomMuliAverage();
dubai.render();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; }


let paris = {

    location: `paris`,
    minCustomer: 20,
    maxCuastomer: 38,
    averageCookies: 2.3,
    randomCuastomerPerHour: [],
    cookieMultiAverage: [],
    sumAllCookie: 0,


    getRandoomCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            this.randomCuastomerPerHour.push(randomNumber(this.minCustomer,this.maxCuastomer))

        }
        console.log(this.randomCuastomerPerHour)

    },


    getRandomMuliAverage: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookieMultiAverage.push(Math.floor(this.randomCuastomerPerHour[i]*this.averageCookies));
            this.sumAllCookie=this.sumAllCookie+this.cookieMultiAverage[i];
        }
        console.log(this.cookieMultiAverage);
        console.log(this.sumAllCookie);
        
    },

    render:function(){
        let parent=document.getElementById(`parent`);
        let newElement=document.createElement('h3');
        parent.appendChild(newElement);
        newElement.textContent=this.location;

       // console.log(this.location);

        let ulElement=document.createElement(`ul`);
        parent.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
        
        let liElement=document.createElement(`li`)
        ulElement.appendChild(liElement);
        liElement.textContent=`${hours[i]} : ${this.randomCuastomerPerHour[i]} cookies`
    }

    let totalLi=document.createElement(`li`);
    ulElement.appendChild(totalLi);
    totalLi.textContent=this.sumAllCookie;
       


    }
}


//console.log(seattle);


paris.getRandoomCustomer();
paris.getRandomMuliAverage();
paris.render();


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; }



    
    let lima = {
    
        location: `lima`,
        minCustomer: 2,
        maxCuastomer: 16,
        averageCookies: 4.6,
        randomCuastomerPerHour: [],
        cookieMultiAverage: [],
        sumAllCookie: 0,
    
    
        getRandoomCustomer: function () {
            for (let i = 0; i < hours.length; i++) {
                this.randomCuastomerPerHour.push(randomNumber(this.minCustomer,this.maxCuastomer))
    
            }
            console.log(this.randomCuastomerPerHour)
    
        },
    
    
        getRandomMuliAverage: function () {
            for (let i = 0; i < hours.length; i++) {
    
                this.cookieMultiAverage.push(Math.floor(this.randomCuastomerPerHour[i]*this.averageCookies));
                this.sumAllCookie=this.sumAllCookie+this.cookieMultiAverage[i];
            }
            console.log(this.cookieMultiAverage);
            console.log(this.sumAllCookie);
            
        },
    
        render:function(){
            let parent=document.getElementById(`parent`);
            let newElement=document.createElement('h3');
            parent.appendChild(newElement);
            newElement.textContent=this.location;
    
           // console.log(this.location);
    
            let ulElement=document.createElement(`ul`);
            parent.appendChild(ulElement);
    
        for (let i = 0; i < hours.length; i++) {
            
            let liElement=document.createElement(`li`)
            ulElement.appendChild(liElement);
            liElement.textContent=`${hours[i]} : ${this.randomCuastomerPerHour[i]} cookies`
        }
    
        let totalLi=document.createElement(`li`);
        ulElement.appendChild(totalLi);
        totalLi.textContent=this.sumAllCookie;
           
    
    
        }
    }
    
    
    //console.log(seattle);
    
    
    lima.getRandoomCustomer();
    lima.getRandomMuliAverage();
    lima.render();
    
    
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; } */





////////////////to make it work for more than one we make an array + this.array.push(this ) 3
let cookieShop = [];



let hours = [6 + `am`, 7 + `am`, 8 + `am`, 9 + `am`, 10 + `am`, 11 + `am`, 12 + `pm`, 1 + `pm`, 2 + `pm`, 3 + `pm`, 4 + `pm`, 5 + `pm`, 6 + `pm`, 7 + `pm`]

///////////////////make an constructue function 1

function CookieShop(location, minCustomer, maxCuastomer, averageCookies) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCuastomer = maxCuastomer;
    this.averageCookies = averageCookies;
    this.randomCuastomerPerHour = [];
    this.cookieMultiAverage = [];
    this.allCookie = 0;
    //this.cookie=0
    cookieShop.push(this);


}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/////////////////method for random number but it is work only for one invoked input  2
CookieShop.prototype.getRandom = function () {
    for (let i = 0; i < hours.length; i++)
        this.randomCuastomerPerHour.push(randomNumber(this.minCustomer, this.maxCuastomer))
}

let seatle = new CookieShop(`seatle`, 23, 65, 6.3)
let tokyo = new CookieShop(`tokyo`, 2, 24, 1.2)
let dubai = new CookieShop(`dubai`, 11, 38, 3.7)
let paris = new CookieShop(`paris`, 20, 38, 2.3)
let lima = new CookieShop(`lima`, 2, 16, 4.6)

//seatle.getRandom();
//console.log(seatle);


///////////////to go through all the index of array we need a loop  4
//for (let i = 0; i < cookieShop.length; i++) {
//cookieShop[i].getRandom();

//}

////////////////invoke the array function =========array[i].functionName() 5
//////////////to see the result log it  6
//console.log(cookieShop); 7


//////////////////new function for average * random number 8

CookieShop.prototype.getMulti = function () {
    for (let i = 0; i < hours.length; i++)

        this.cookieMultiAverage.push((Math.floor(this.randomCuastomerPerHour[i] * this.averageCookies)));
    //this.allCookie = this.allCookie+this.cookieMultiAverage[i];

}

////////////////////////new function for sum all cookie 
CookieShop.prototype.getSum = function () {
    for (let i = 0; i < hours.length; i++)
        // this.cookieMultiAverage.push((Math.floor(this.randomCuastomerPerHour[i] * this.averageCookies)));
        this.allCookie = this.allCookie + this.cookieMultiAverage[i];
        console.log(this.allCookie);

}


/*CookieShop.prototype.getSumHours=function(){
    
    for (let i = 0; i < hours.length; i++) {
        let cookie=0
        cookie=cookie+this.allCookie[0]
        console.log(cookie);
       
        
    }
}*/



CookieShop.prototype.render=function (){
    //////////one:    link the id from HTML to JS "getElementById"
    let parent= document.getElementById("cookie");
    
    //////////two :    creating element "creatElement"
    let table=document.createElement('table')
    ////////// three:  appened parent to child 
    parent.appendChild(table)
    //////////four :   again 
    let tableRaw=document.createElement('tr')
    table.appendChild(tableRaw)
    //////////five:    giving value 
    let Element = document.createElement('th')
    tableRaw.appendChild(Element)
    Element.textContent=this.location
   

for (i=0;i<hours.length;i++){
     let element = document.createElement('td')
tableRaw.appendChild(element)
 element.textContent=this.randomCuastomerPerHour[i]}

    let element = document.createElement('td')
tableRaw.appendChild(element)
element.textContent=this.allCookie
    console.log(parent);
}





console.log(cookieShop);


for (let i = 0; i < cookieShop.length; i++) {
    cookieShop[i].getRandom();
    cookieShop[i].getMulti();
    cookieShop[i].getSum();
    cookieShop[i].render();
    //cookieShop[i].getSumHours();
  
    
}
