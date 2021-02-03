// The Data
const goalsArray = [
    {
      name: "Maserati Guibli",
      picture: "images/goals/maserati.png",
      goal: 85000,
      current: 68000,
      riched: false,
    },
    {
      name: "Playstation 4",
      picture: "images/goals/ps4.png",
      goal: 800,
      current: 150,
      riched: false,
    },
    {
      name: "Samsung Galaxy S10e",
      picture: "",
      goal: 1000,
      current: 300,
      riched: false,
    },
    {
      name: "Boat",
      picture: "",
      goal: 10000,
      current: 10000,
      riched: true,
    },
    {
      name: "Rolex",
      picture: "",
      goal: 5000,
      current: 5000,
      riched: true,
    },
  ];
  
  // Dynamic generation of the goals
  const original = document.querySelector('#goalsSection article')
  for (const item of goalsArray) {
    const clone = original.cloneNode(true);
    document.querySelector('#goalsSection').append(clone);
    clone.querySelector('.title').innerText = item.name;
    clone.querySelector('.current').innerText = usd(item.current);
    clone.querySelector('.target').innerText = usd(item.goal);
    clone.style.backgroundImage = `url(${item.picture})`;
    // add the riched class to the article for the bonus
    if (item.riched) {
      clone.classList.add('riched');
    }
    // [bonus] set the progress-bar
    const progress = item.current / item.goal * 100;
    console.log(progress);
    clone.querySelector('.progress').style.width = progress + '%'
  }
  original.remove();
  
  // [Bonus] : format USD
  function usd(price) {
    // source : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)
  }
  
  //[Bonus] : filtering using the displays
  document.querySelector('#totalGoals').addEventListener('click', function () {
    const allGoals = document.querySelectorAll('#goalsSection article')
    for (const goal of allGoals) {
      goal.style.display = '';
    }
    //activate the button in blue
    activateButton(this);
  })
  document.querySelector('#richedGoals').addEventListener('click', function () {
    //  I HIDE all article
    const allGoals = document.querySelectorAll('#goalsSection article')
    for (const goal of allGoals) {
      goal.style.display = 'none';
    }
    // then I SHOW only the one with the class riched
    const newGoals = document.querySelectorAll('#goalsSection article.riched')
    for (const goal of newGoals) {
      goal.style.display = '';
    }
    //activate the button in blue
    activateButton(this);
  })
  document.querySelector('#newGoals').addEventListener('click', function () {
    // I SHOW all articles
    const allGoals = document.querySelectorAll('#goalsSection article')
    for (const goal of allGoals) {
      goal.style.display = '';
    }
    // then I HIDE only the one with the class riched
    const newGoals = document.querySelectorAll('#goalsSection article.riched')
    for (const goal of newGoals) {
      goal.style.display = 'none';
    }
    //activate the button in blue
    activateButton(this);
  })
  
  // [Bonus] : dynamic mofication of the buttons
  const counts = {
    total: goalsArray.length,
    riched: goalsArray.filter(goal => goal.riched).length,
    new: goalsArray.filter(goal => !goal.riched).length
  }
  document.querySelector('#totalGoals span').innerText = counts.total;
  document.querySelector('#richedGoals span').innerText = counts.riched;
  document.querySelector('#newGoals span').innerText = counts.new;
  
  // [bonus] the bouton clicked shows in blue
  function activateButton(element) {
    // change the css class
    for (const button of document.querySelectorAll('button')) {
      button.classList.remove('active');
    }
    element.classList.add('active');
  }
  