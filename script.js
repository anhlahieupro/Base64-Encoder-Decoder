function encodeBase64() {
    const inputText = document.getElementById("input").value;
    const encodedText = btoa(inputText);
    document.getElementById("output").value = encodedText;
}

function decodeBase64() {
    const encodedText = document.getElementById("input").value;
    const decodedText = atob(encodedText);
    document.getElementById("output").value = decodedText;
}
