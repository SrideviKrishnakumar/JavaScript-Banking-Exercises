
const currentBalance = 1478.20;
const categoriesArray = [
    {
        name:'Food',
        icon:'images/images/icons/food.png',
        total:146
    },
    {
        name:'Shopping',
        icon:'images/images/icons/shoping.png',
        total:714
    
    },
    {
        name:'Other',
        icon:'images/images/icons/other.png',
        total:35
        
    }
]

const curBal=document.querySelector('div.'+'round');
curBal.querySelector('h2').innerText='$'+currentBalance;

const mockArray = document.querySelector('section article');
for (const catData  of categoriesArray) {
    const cloneData = mockArray.cloneNode(true);
    document.querySelector('section').append(cloneData);

    cloneData.classList.add(catData.categoriesArray);
    cloneData.querySelector('h4').innerText=catData.name;
    cloneData.querySelector ('p').innerText = '$'+catData.total;
   cloneData.querySelector('img').src=catData.icon;
   
   // cloneData.style.backgroundColor = 'catData.color';

}

mockArray.remove();
    
