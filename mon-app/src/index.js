const snippetVal = document.getElementById('textField');
const inputValue = document.getElementById('snippetImport');
const listNum = document.getElementById('listNumber');
const inputDiv = document.getElementById('ContainerVs');
const container = document.getElementById("container");
const btnShare = document.getElementById('buttonShare');
const inputCont = document.getElementById('inputContent');



// Fonction d'alert snippet manquant
btnShare.addEventListener("click", function(){
  if(snippetVal.value === ""){
    alert('You must enter a snippet before sharing !')
  }else{
    createSnippet();
  }
});

// Fonction d'ajout de ligne type vs
inputDiv.addEventListener("keypress",(event) => {
    if(event.key === "Enter"){
        addLine();
    }
});

let lineCount = 1;

function addLine() {
  lineCount++;

 
  const line = document.createElement("div");

  const number = document.createElement("span");
  number.className = "liStyle";
  number.textContent = lineCount;

 
  const input = document.createElement("input");
  input.type = "text";
  input.classList = "inputStyle"

  line.appendChild(number);
  line.appendChild(input);

  inputDiv.appendChild(line);
}

// envoie de la data (snippet)
// const createSnippet = () => {
//     const snippet = { value: snippetVal.value };

   
//     fetch("http://localhost:3001/test", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(snippet)
//     })
//     .then(() => {
//         return fetch("http://localhost:3001/snippets");
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log("Snippets côté front :", data);
//         if(data.length) inputValue.value = data[data.length - 1].value;
//     })
//     .catch(err => console.error(err))
//     .then(() => snippetVal.value = "");
// };
