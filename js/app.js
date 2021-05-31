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
        return Math.floor(Math.random() * (max - min + 1)) + min; }