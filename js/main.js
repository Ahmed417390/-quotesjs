





const quotes = [
    {
      name: "Jim Rohn",
      quote: "Beware of what you become in pursuit of what you want."
    },
    {
      name: "Epictetus",
      quote: "It's not what happens to you, but how you react to it that matters."
    },
    {
      name: "Frank Sinatra",
      quote: "The best revenge is massive success."
    },
    {
      name: "Wayne Gretzky",
      quote: "You miss 100% of the shots you don't take."
    },
    {
      name: "Nelson Mandela",
      quote: "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
      name: "Elbert Hubbard",
      quote: "Do not take life too seriously. You will not get out alive."
    }
  ];
  
  function display() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      document.getElementById('say').innerHTML = `" ${quote.quote}"`;
      document.getElementById('name').innerHTML = `" ${quote.name}"`;
    }
























