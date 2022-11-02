function range(start, stop){
    const result = [];
    for (let idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <=end; ++idx){
        result.push(String.fromCharCode(idx));
    }
    return result;
}

function encrypt(value){
    let result = "";
    const alphabet = range("A", "Z");
    for (let i of value){
        let index = alphabet.indexOf(i);
        let newIndex = index + 3;
        result += alphabet[Math.abs(newIndex % alphabet.length)];
    }
    return result;
}

function decrypt(value){
    let result = "";
    const alphabet = range("A", "Z");
    for (let i of value){
        let index = alphabet.indexOf(i);
        let newIndex = index - 3;
        if(newIndex < 0){
            newIndex = alphabet.length + newIndex;
        }
        result += alphabet[Math.abs(newIndex % alphabet.length)];
    }
    return result;
}

const encryptInput = document.getElementById("encrypt-input");
const encryptBtn = document.getElementById("encrypt-btn");
const cipherText = document.getElementById("cipher-text");

const decryptInput = document.getElementById("decrypt-input");
const decryptBtn = document.getElementById("decrypt-btn");
const normalText = document.getElementById("normal-text");


encryptBtn.addEventListener("click", () => {
    cipherText.innerText = encrypt(encryptInput.value.toUpperCase());
    cipherText.style.color = "#9b1d22";
    encryptInput.value = "";
});

decryptBtn.addEventListener("click", () => {
    normalText.innerText = decrypt(decryptInput.value.toUpperCase());
    normalText.style.color = "#9b1d22";
    decryptInput.value = "";
});




