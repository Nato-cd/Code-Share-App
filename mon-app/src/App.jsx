import { useEffect, useState }from "react";



export default function App(){
 const AutoResizeTextareas = () => {
  const textareasRef = useRef([]);

 
  const setRef = (el, index) => {
    textareasRef.current[index] = el;
  };

  useEffect(() => {
    const hiddenDiv = document.createElement('div');
    hiddenDiv.classList.add('txta');
    hiddenDiv.style.display = 'none';
    hiddenDiv.style.whiteSpace = 'pre-wrap';
    hiddenDiv.style.wordWrap = 'break-word';
    document.body.appendChild(hiddenDiv);

    const handleResize = (textarea) => {
      textarea.style.resize = 'none';
      textarea.style.overflow = 'hidden';
      let content = textarea.value.replace(/\n/g, '<br>');
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      textarea.style.height = hiddenDiv.offsetHeight + 'px';
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    };

    textareasRef.current.forEach((textarea) => {
      if (textarea) {
        textarea.classList.add('txtstuff');
        textarea.addEventListener('input', () => handleResize(textarea));
      }
    });

    return () => {
      // Cleanup: retirer l'élément et les listeners si nécessaire
      document.body.removeChild(hiddenDiv);
      textareasRef.current.forEach((textarea) => {
        if (textarea) {
          textarea.removeEventListener('input', () => handleResize(textarea));
        }
      });
    };
  }, []);

  return (
    <div>
      {[...Array(3)].map((_, index) => (
        <textarea
          key={index}
          ref={(el) => setRef(el, index)}
          className="txta"
          defaultValue=""
        />
      ))}
    </div>
  );
 };

 
 const createSnippet = () => {
  const [mySnippet, setMySnippet] = useState({});
  const fetchPar = {
    method: 'POST',
    header: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(mySnippet)
  };
  fetch("http://localhost:3001/test", fetchPar)
  .then(() => {
    return fetch("http://localhost:3001/snippets");
  })
 .then (res => res.json())
 .then(data => {
  console.log("snippet côté frond:", data);
 })
 .catch(err => console.log(err))
 }
}
 
const userRandomId = () =>{
  const [randomId, setRandomId] = useState("");
    const number = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    setRandomId(number);

};
function textTemplate(){
  return <textarea defaultValue={`function Hello(){
    console.log('Hello Worl')};`}></textarea>
  };
