let button = document.querySelector("button");
let h2 = document.querySelector("h2");


const fetchJokes = async () => {

    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    const joke = data.value;
    h2.innerText = joke

    // console.log(data);


}
// fetchJokes();
button.addEventListener("click", fetchJokes);

// setInterval(()=>{
//     fetchJokes()
// },3000);

