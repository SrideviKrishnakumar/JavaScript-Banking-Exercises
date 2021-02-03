const messagesArray = [
    {
        sender :'Thomas Johnson',
        lastMessage :'Hello, man. Give me $120, please. Cat gives birth...' ,
        date : '5 min ago',
        notSeen :10,
        picture : 'images/images/contacts/contact1.png'
    },
    {
        sender :'Steve Bruski',
        lastMessage :'Thanks. I really helped out. I\'ll give it the day after tom...' ,
        date : 'Today, at 10:00',
        notSeen :20,
        picture : 'images/images/contacts/contact2.png'
    },
    {
        notSeen:30,
        sender :'Anastasia Markus',
        lastMessage :'Return at least once in time 😈' ,
        date : 'Yesterday, at 14:02',
        picture : 'images/images/contacts/contact3.png'
    },
    {
        notSeen:40,
        sender :'TestAnastasia MarkusTest',
        lastMessage :'No, don’t ask me for a loan anymore. The freebie is over ✋' ,
        date : 'Yesterday, at 13:45',
        picture : 'images/images/contacts/contact4.png'
    },
    
]

const mockList = document.querySelector('article');


let check = 0
for (const arrayData of messagesArray) {
    const cloneList = mockList.cloneNode(true);
   
    cloneList.querySelector('img').src = arrayData.picture;
    cloneList.querySelector("h4").innerText = arrayData.sender;
    cloneList.querySelector('h5').innerText = arrayData.lastMessage;
    cloneList.querySelector('p').innerText= arrayData.date;
    cloneList.querySelector('h6').innerText = arrayData.notSeen;

    document.querySelector('main').append(cloneList); 
    document.write(arrayData.sender);

    //document.write(arrayData.lastMessage);
    //document.write(arrayData.date);
    document.write(arrayData.notSeen);
    debugger;
    
    check = check+1;    
    document.write(check);
}
document.write(check);
mockList.remove();

