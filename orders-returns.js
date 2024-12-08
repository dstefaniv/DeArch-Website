function updateTitle() {
    
    const newTitle = document.getElementById('inputTitle').value;
    
    document.getElementById('title').innerText = newTitle;
  }

  function greetUser(name) {
    const outputDiv = document.getElementById('output');
      
      outputDiv.innerHTML = `Hello, ${name}! Thank you for your order.Please see the tracking number below: ` src="https://joric.github.io/tracking/";
    }