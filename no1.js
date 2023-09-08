function changeWord(selectedText, changedText, text) {
    let ganti = text.replace(selectedText, changedText);
    return ganti;
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "meletus", kalimat2));