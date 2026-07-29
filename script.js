// JavaScript Level 2 Module 1 Project //

console.log("JavaScript is Connected")

let message = document.getElementById("message");
let output = document.getElementById("output");
let birthDayInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let currentLang = "en-US";

function updateTime (){
    let today = new Date();
    document.getElementById("liveDate").innerText = "🗒 " + today.toLocaleDateString(currentLang, { day: 'numeric', month: 'short', year: 'numeric' });
    document.getElementById("liveTime").innerText = "🕥 " + today.toLocaleTimeString(currentLang);
}

function changeLanguage(selectedLang) {
    
    //لو اختار عربي
    if (selectedLang === "ar") {
        if (selectedLang === "ar") {
            document.body.classList.add("rtl-mode");
        } else {
            document.body.classList.remove("rtl-mode");
        }      
        currentLang = "ar-EG";
        document.querySelector(".dark").innerText = "🌑 الوضع الداكن";
        document.querySelector("h1").innerText = "نتيجة عمرك 🎉";
        document.querySelector("h2").innerText = "🎂 حاسبة العمر 🎉";
        document.querySelector(".greeting").innerText = "إليك عمرك وتفاصيل مذهلة عن حياتك!";
        document.querySelector(".description").innerText = "سنة الميلاد";
        document.querySelector("#birthYear").innerText = "🕓 YYYY";
        document.querySelector(".minAge").innerText = "الحد الأدنى: 1900";
        document.querySelector(".maxAge").innerText = "الحد الأقصى: 2027";
        document.querySelector("#calculateBtn").value = "🖥 حساب العمر";
        document.querySelector(".information").innerText = "😇 حقائق ممتعة عنك";
        document.querySelector(".myName").innerText = "صنعتها المهندسة المستقبلية فاطمة ❤️";
    }
    
    //لو اختار ياباني
    else if (selectedLang === "ja") {
        document.dir = "ltr";
        document.body.classList.remove("rtl-mode");
        currentLang = "ja-JP";
        document.querySelector(".dark").innerText = "🌑 ダークモード";
        document.querySelector("h1").innerText = "あなたの年齢の結果🎉";
        document.querySelector("h2").innerText = "🎂 年齢計算機🎉";
        document.querySelector(".greeting").innerText = "あなたの年齢と、あなたの人生に関する驚くべき詳細情報をご紹介します！";
        document.querySelector(".description").innerText = "生年";
        document.querySelector("#birthYear").innerText = "🕓 YYYY";
        document.querySelector(".minAge").innerText = "最小値: 1900";
        document.querySelector(".maxAge").innerText = "最大: 2027";
        document.querySelector("#calculateBtn").value = "🖥 年齢を計算する";
        document.querySelector(".information").innerText = "😇 あなたに関する面白い事実";
        document.querySelector(".myName").innerText = "未来のエンジニア、ファティマが作りました❤️";
    }

    //لو اختار إنجليزي
    else if (selectedLang === "en") {
        document.body.classList.remove("rtl-mode");
        document.dir = "ltr";
        currentLang = "en-US";
        document.querySelector(".dark").innerText = "🌑 Dark Mode";
        document.querySelector("h2").innerText = "🎂 Age Calculator🎉";
        document.querySelector("h1").innerText = "Your Age Result🎉";
        document.querySelector(".greeting").innerText = "Here is your age and amazing details about your life!";
        document.querySelector(".description").innerText = "Birth Year";
        document.querySelector("#birthYear").innerText = "🕓 YYYY";
        document.querySelector(".minAge").innerText = "Min: 1900";
        document.querySelector(".maxAge").innerText = "Max: 2027";
        document.querySelector("#calculateBtn").value = "🖥 Calculate Age";
        document.querySelector(".information").innerText = "😇 Fun Facts About You";
        document.querySelector(".myName").innerText = "Made by future engineer Fatima❤️";
    }

    updateTime();
}
setInterval(updateTime, 1000);


function toggleTheme(){
    let themeToggle = document.getElementById("themeToggle");
    if (themeToggle.checked == true) {
        document.body.classList.add("dark-theme");
}
    else{
        document.body.classList.remove("dark-theme");
    }
}

button.addEventListener("click", function(){
    let birthValue = birthDayInput.value;

    if (birthValue === ""){
        output.textContent = "Field is required ❕";
        output.style.color = "red";
        return;
    }
    let birthDate = new Date(birthValue);   // التاريخ ولادة المستخدم
    let today = new Date();    // التاريخ الحالي لليوم
    let age = today.getFullYear() - birthDate.getFullYear();   //طرح التاريخين من بعض 
    let monthDiff = today.getMonth() - birthDate.getMonth();  // طرح الشهرين من بعض

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age > 120 || age < 3){
        message.textContent = ""
        output.textContent = "Please enter a valid year.⚠️";
        output.style.color = "red";
        return;
    }

output.style.color = "#e9ac43f6";
output.textContent = "✔️ Your age is: " + age;


// message for different age //
if (age < 120 && age > 3){
    if (age <= 20){
        message.textContent = "✔️ Wow! You're at the perfect age to discover yourself and experience everything new!⚡🚀";
    } else if (age > 20 && age <= 40){
        message.textContent = "✔️ You're at a great age to focus on your career and personal growth!💼🌱";
    } else{
        message.textContent = "✔️ You're at a wonderful age to enjoy life and share your wisdom with others!📚☕";
    }
}

})