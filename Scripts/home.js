const card = {
    balance : 1478.20,
    finalNumbers : 1234,
    expirationDate:'03/20',
    type:'visa',
    typePicture:'images/images/icons/visa.png'
}
const transationsArray = [
    {
        picture:'images/images/icons/transaction1.png',
        company:'Steam',
        type:'Other',
        date:'just now',
        amount:31.20,
    },
    {
        picture:'images/images/icons/transaction2.png',
        company:'UBER',
        type:'Taxi',
        date:'today, at 14:42',
        amount:4.80,
    },
    {
        picture:'images/images/icons/transaction3.png',
        company:'McDonald\'s',
        type:'Food',
        date:'today, at 10:06',
        amount:14.05,
    },
]

const cardinfo = document.querySelector('section article.'+'card1');
    //const visaimg = document.getElementById('visa');
    //visaimg.url=card[typePicture];
    cardinfo.querySelector('#visa').src=card['typePicture'];
    cardinfo.querySelector('#balance').innerText=usd(card['balance']);
    cardinfo.querySelector('#finalnumber').innerText=card['finalNumbers'];
    cardinfo.querySelector('#expirationdate').innerText=card['expirationDate'];
    
 const  transactioninfo=document.querySelector('section article.'+ 'listing');
 for (const arrayData of transationsArray) {
    const cloneData=transactioninfo.cloneNode(true);
    document.querySelector('section').append(cloneData);
    cloneData.querySelector('#imgsrc').src=arrayData.picture;
    cloneData.querySelector('#company').innerText=arrayData.company;
    cloneData.querySelector('#type').innerText=arrayData.type+arrayData.date;
    //cloneData.querySelector('#date').innerText=arrayData.date;
    cloneData.querySelector('#amount').innerText=usd(arrayData.amount);

 }

 transactioninfo.remove();
 function usd(price) {
    // source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)
  } 


    



