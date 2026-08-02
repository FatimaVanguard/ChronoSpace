// JavaScript Level 2 Module 1 Project //

console.log("JavaScript is Connected")

let message = document.getElementById("message");
let birthDayInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let ageTimer = null;
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

function calculateAge(){
    let birthValue = birthDayInput.value;

    if (birthValue === ""){
        message.textContent = "Field is required ❕";
        message.style.color = "red";
        if (ageTimer) clearInterval(ageTimer);
        return;
    }

    if (!birthValue) return;

    let birthDate = new Date(birthValue);   // التاريخ ولادة المستخدم
    let today = new Date();    // التاريخ الحالي لليوم
    //حساب السنين و الشهور و الايام
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years > 120 || years < 3) {
        message.textContent = "";
        message.textContent = "Please enter a valid year.⚠️";
        return;
    }

// message for different age //
if (years < 120 && years > 3){
        message.style.color = "#e9ac43f6";
    if (years <= 20) {

        message.textContent = "Wow! You're at the perfect age to experience everything new!⚡🚀";
    } else if (years > 20 && years <= 40) {
        message.textContent = "You're at a great age to focus on your career and personal growth!💼🌱";
    } else {
        message.textContent = "You're at a wonderful age to enjoy life and share your wisdom with others!📚☕";
    }
}

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// حساب الايام المتبقية على عيد الميلاد
let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}

let diffInMs = nextBirthday - today;
let daysLeft = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

let diffInMss = today - birthDate;
let totalSeconds = Math.floor(diffInMss / 1000);
let totalMinutes = Math.floor(totalSeconds / 60);
let totalHours = Math.floor(totalMinutes / 60);
let totalDays = Math.floor(totalHours / 24);
let totalMonths = Math.floor(totalDays / 30.4375);


document.getElementById("yearsResult").textContent = years;
document.getElementById("monthsResult").textContent = months;
document.getElementById("daysResult").textContent = days;
document.getElementById("hoursResult").textContent = hours;
document.getElementById("minutesResult").textContent = minutes;
document.getElementById("secondsResult").textContent = seconds;

let totalSecElem = document.getElementById("totalSecondsResult");
    if (totalSecElem) {
        document.getElementById("totalMonthsResult").textContent = totalMonths;
        document.getElementById("totalDaysResult").textContent = totalDays;
        document.getElementById("totalHoursResult").textContent = totalHours;
        document.getElementById("totalMinutesResult").textContent = totalMinutes;
        document.getElementById("totalSecondsResult").textContent = totalSeconds;
        totalSecElem.textContent = totalSeconds;
    }


let nextBirthdayElem = document.getElementById("nextBirthdayResult");
    if (nextBirthdayElem) {
        nextBirthdayElem.textContent = daysLeft;
    }

let numElem = document.getElementById("num");
    if (numElem) {
        numElem.textContent = daysLeft;
    }

let daysPassedInYear = 365 - daysLeft;

let progressPercentage = Math.floor((daysPassedInYear / 365) * 100);

if (progressPercentage < 0) progressPercentage = 0;
if (progressPercentage > 100) progressPercentage = 100;

let percentElem = document.getElementById("progressPercent");
let barFillElem = document.getElementById("progressBarFill");

if (percentElem && barFillElem) {
    percentElem.textContent = progressPercentage + "%";
    barFillElem.style.width = progressPercentage + "%";
}

// حساب العمر على الكواكب
let saturnAge  = (totalDays / 10759).toFixed(1);
let jupiterAge = (totalDays / 4333).toFixed(1);
let marsAge    = (totalDays / 687).toFixed(1);
let plutoAge   = (totalDays / 90560).toFixed(2);
let proximaAge = (totalDays / 11.2).toFixed(1);

if (document.getElementById("saturnAgeResult")) {
    document.getElementById("saturnAgeResult").textContent  = saturnAge;
    document.getElementById("jupiterAgeResult").textContent = jupiterAge;
    document.getElementById("marsAgeResult").textContent   = marsAge;
    document.getElementById("plutoAgeResult").textContent  = plutoAge;
    document.getElementById("proximaAgeResult").textContent= proximaAge;
}

}

button.addEventListener("click", function () {
    calculateAge();
    if (ageTimer) clearInterval(ageTimer);
    ageTimer = setInterval(calculateAge, 1000);

})