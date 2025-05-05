const adjectives = [
    "Silent", "Invisible", "Clever", "Swift", "Mysterious", "Ghostly", "Shadow", "Stealthy", "Dark", "Crimson"
  ];
  
  const animals = [
    "Panther", "Falcon", "Viper", "Wolf", "Tiger", "Raven", "Eagle", "Fox", "Cobra", "Leopard"
  ];
  
  document.getElementById("generateBtn").addEventListener("click", () => {
    const name = document.getElementById("realName").value.trim();
    const spyName = document.getElementById("spyName");
  
    if (name === "") {
      spyName.textContent = "Enter your real name, Agent!";
      return;
    }
  
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    spyName.textContent = `Your Spy Name: ${adj} ${animal} 🕶️`;
  });
  