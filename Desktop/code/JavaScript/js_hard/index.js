const input = prompt();
// (input == "") = (!input)
if (input === "") {
    console.log("입력값이 없습니다.");
}
else {
    console.log(input);
}

//Logical || 사용

const input_1 = prompt();
console.log(input_1 || "입력값이 없습니다.");
