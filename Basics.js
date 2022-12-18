for (let i = 10; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}  jackpot`);
    } else if (i % 3 === 0) {
        console.log(`${i} devided by 3`);
    } else if (i % 5 === 0) {
        console.log(`${i} devided by 5`);
    } else(
        console.log(i)
    )
}

const btn = document.querySelector('#btn');
const h1 = document.querySelector('#h1');
const data = document.querySelector('#data');
const clicked = () => {
    console.log('btn clicked');
    h1.innerHTML = `<h1> this is an h1 tag </h1>`
}



const fetchEmail = async() => {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }

    let response = await fetch("https://reqres.in/api/users", {
        method: "GET",
        headers: headersList
    });

    let usersdata = await response.json();
    const userArray = usersdata.data
        // console.log(userArray);

    let newArray = userArray.slice(0, 3)
    console.log(newArray);
    newArray.forEach(element => {
        h1.innerHTML += `<li>${element.email}</li>`
    });
}
btn.addEventListener('click', clicked)
data.addEventListener('click', fetchEmail)