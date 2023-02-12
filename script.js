const getColor = ()=>{
    //hex code
    const randomNumber = Math.floor(Math.random()*16777217);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);

    document.getElementById("color-id").innerHTML = randomCode;
    document.body.style.backgroundColor = randomCode;
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
);


//initial call
getColor();