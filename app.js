function range(start, stop){
    //A-Z arasındaki harfleri veren fonksiyon
    const result = [];
    for (let idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <=end; ++idx){
        result.push(String.fromCharCode(idx));
    }
    return result;
}

function findIndex(char){
    //Verilen harfin alfabedeki konumunu verir
    for (let c of chars){
        if (char == c){
            return chars.indexOf(c);
        }
    }
}

function sifrele(value){
    let result = [];
    for (let i = 0; i < value.length; i++){
        let index = findIndex(value[i]);
        let newIndex = index + 3;
        result[i] = chars[Math.abs(newIndex % chars.length)];
    }

    return result.join(" ");
}

function sifreCoz(value){
    console.log(value);
    let result = [];
    for (let i = 0; i < value.length; i++){
        let index = findIndex(value[i]);
        let newIndex = index - 3;
        if(newIndex < 0){
            newIndex = chars.length + newIndex;
        }
        result[i] = chars[Math.abs(newIndex % chars.length)];
    }

    return result.join(" ");
}


const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const chars = range('A','Z').join("");


btn1.addEventListener("click", () => {
    //Girilen değeri şifreler
    document.getElementById("span-1").innerText = sifrele(inputOne.value.toUpperCase());
    inputOne.value = "";
});

btn2.addEventListener("click", () => {
    //Girilen değerin şifresini çözer
    document.getElementById("span-2").innerText = sifreCoz(inputTwo.value.toUpperCase());
    inputTwo.value = "";
});




