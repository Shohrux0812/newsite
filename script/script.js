// "button" tugmasini tanlaymiz
const button = document.getElementById("myButton");

// "button" tugmasini bosilganda yangi "div" yaratish
button.addEventListener("click", myfun);
function myfun() {
    const newDiv = document.createElement("div"); // Yangi "div" yaratiladi
    newDiv.textContent = "Yangi div"; // Yangi "div" ichidagi matn
    newDiv.classList.add("my-div-class");
    for (let i = 0; i < 3; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Input #" + (i + 1);
        input.classList.add("input_js");
        newDiv.appendChild(input); // Inputni "div"ga qo'shish
    }
    document.body.appendChild(newDiv); // Yangi "div" sahifaga qo'shiladi
}