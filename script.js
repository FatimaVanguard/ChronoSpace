// JavaScript Level 2 Module 1 Project //
console.log("Welcome to the Age Calculator Project!");

let message = document.getElementById("message");
let birthDayInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
const noteInput = document.getElementById("noteInput");
const noteSendBtn = document.getElementById("noteSendBtn");
let ageTimer = null;
let currentLang = "en-US";

// دالة الإشعارات العائمة
function showToast(msg) {
    const toast = document.createElement("div");
    toast.textContent = msg;
    
    toast.style.direction = (currentLang === "ar-EG") ? "rtl" : "ltr";

    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "#28a745";
    toast.style.color = "#fff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "15px";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function updateLayoutByScreen() {
    const isMobile = window.innerWidth <= 600;
    const isTablet = window.innerWidth <= 1024 && window.innerWidth > 600;

    document.body.classList.toggle("mobile-layout", isMobile);
    document.body.classList.toggle("tablet-layout", isTablet);
}

window.addEventListener("resize", updateLayoutByScreen);
updateLayoutByScreen();

function updateTime() {
    let today = new Date();
    let liveDateElem = document.getElementById("liveDate");
    let liveTimeElem = document.getElementById("liveTime");
    
    if (liveDateElem) liveDateElem.innerText = "🗒 " + today.toLocaleDateString(currentLang, { day: 'numeric', month: 'short', year: 'numeric' });
    if (liveTimeElem) liveTimeElem.innerText = "🕥 " + today.toLocaleTimeString(currentLang);
}

setInterval(updateTime, 1000);
updateTime();

function changeLanguage(selectedLang) {
    // لو اختار عربي
    if (selectedLang === "ar") {
        document.dir = "rtl";
        document.body.classList.add("rtl-mode");
        currentLang = "ar-EG";
        if(document.querySelector(".dark")) document.querySelector(".dark").innerText = "🌑 الوضع الداكن";
        if(document.querySelector("h1")) document.querySelector("h1").innerText = "🍰 رحلة العمر و الحياة 🎉";
        if(document.querySelector("h2")) document.querySelector("h2").innerText = "🎂 حاسبة العمر 🎉";
        if(document.querySelector(".greeting")) document.querySelector(".greeting").innerText = "إليك عمرك وتفاصيل مذهلة عن حياتك!";
        if(document.querySelector(".description")) document.querySelector(".description").innerText = "تاريخ الميلاد";
        if(document.querySelector("#birthYear")) document.querySelector("#birthYear").placeholder = "🕓 YYYY-MM-DD";
        if(document.querySelector(".minAge")) document.querySelector(".minAge").innerText = "الحد الأدنى: 1900";
        if(document.querySelector(".maxAge")) document.querySelector(".maxAge").innerText = "الحد الأقصى: 2026";
        if(document.querySelector("#noteInput")) {
            document.querySelector("#noteInput").placeholder = "لديك ملاحظات؟ اكتب ملاحظات سريعة...";
            document.querySelector("#noteInput").style.direction = "rtl";
        }
        if(document.querySelector("#noteSendBtn")) document.querySelector("#noteSendBtn").innerText = "إرسال";
        if(document.querySelector(".black")) document.querySelector(".black").innerText = "عمرك";
        if(document.querySelector(".purple")) document.querySelector(".purple").innerText = "عامًا";
        if(document.querySelector(".green")) document.querySelector(".green").innerText = "أشهر";
        if(document.querySelector(".blue")) document.querySelector(".blue").innerText = "أيام";
        if(document.querySelector(".orange")) document.querySelector(".orange").innerText = "ساعات";
        if(document.querySelector(".red")) document.querySelector(".red").innerText = "دقائق";
        if(document.querySelector(".blackBlue")) document.querySelector(".blackBlue").innerText = "ثواني";
        if(document.querySelector(".next")) document.querySelector(".next").innerText = "🎂 عيد الميلاد القادم: ";
        if(document.querySelector(".daysLeft")) document.querySelector(".daysLeft").innerText = "الأيام المتبقية ";
        if(document.querySelector(".count")) document.querySelector(".count").innerText = "عداد مباشر";
        if(document.querySelector(".live")) document.querySelector(".live").innerText = "• مباشر";
        if(document.querySelector("#daysLivedLabel")) document.querySelector("#daysLivedLabel").innerText = "الأيام التي عشتها";
        if(document.querySelector("#monthsLivedLabel")) document.querySelector("#monthsLivedLabel").innerText = "الأشهر التي عشتها";
        if(document.querySelector("#hoursLivedLabel")) document.querySelector("#hoursLivedLabel").innerText = "الساعات التي عشتها";
        if(document.querySelector("#minutesLivedLabel")) document.querySelector("#minutesLivedLabel").innerText = "الدقائق التي عشتها";
        if(document.querySelector("#secondsLivedLabel")) document.querySelector("#secondsLivedLabel").innerText = "الثوانى التي عشتها";
        if(document.querySelector(".title2")) {
            document.querySelector(".title2").innerText = "العيد الميلاد القادم";
            document.querySelector(".title2").style.direction = "rtl";
        }
        if(document.querySelector(".title3")) document.querySelector(".title3").innerText = "الأيام المتبقية";
        if(document.querySelector(".progress-title")) document.querySelector(".progress-title").innerText = "عيد ميلادك القادم يقترب";
        if(document.querySelector("h3")) {
            document.querySelector("h3").innerText = "العمر على الكواكب الأخرى";
            document.querySelector("h3").style.direction = "rtl";
        }
        if(document.querySelector("#saturnYear")) document.querySelector("#saturnYear").innerText = "سنين";
        if(document.querySelector("#jupiterYear")) document.querySelector("#jupiterYear").innerText = "سنين";
        if(document.querySelector("#marsYear")) document.querySelector("#marsYear").innerText = "سنين";
        if(document.querySelector("#plutoYear")) document.querySelector("#plutoYear").innerText = "سنين";
        if(document.querySelector("#proximaYear")) document.querySelector("#proximaYear").innerText = "سنين";
        if(document.querySelector("#saturnName")) document.querySelector("#saturnName").innerText = "زحل";
        if(document.querySelector("#jupiterName")) document.querySelector("#jupiterName").innerText = " المشتري";
        if(document.querySelector("#marsName")) document.querySelector("#marsName").innerText = "المريخ";
        if(document.querySelector("#plutoName")) document.querySelector("#plutoName").innerText = "بلوتو";
        if(document.querySelector("#proximaName")) document.querySelector("#proximaName").innerText = "بروكسيما";
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").innerText = "تعرف على عمرك عبر الكواكب، و الكواكب القزمة، و حتى الكواكب الخارجية!";
            document.querySelector(".footer").style.direction = "rtl";
        }
        if (document.querySelector(".more-label")) {
            document.querySelector(".more-label").innerHTML = 'كواكب<br>أخرى';
        }
        if(document.querySelector("#calculateBtn")) document.querySelector("#calculateBtn").value = "🖥 حساب العمر";
        if(document.querySelector(".support-btn")) document.querySelector(".support-btn").innerText = "☕ دعم المشروع";
        if (document.querySelector(".myName")) {
            document.querySelector(".myName").innerHTML = 'تم ابتكاره بواسطة مهندسة المستقبل <span class="name">فاطمة ❤️</span>';
        }
    }
    // لو اختار ياباني
    else if (selectedLang === "ja") {
        document.dir = "ltr";
        document.body.classList.remove("rtl-mode");
        currentLang = "ja-JP";
        if(document.querySelector(".dark")) document.querySelector(".dark").innerText = "🌑 ダークモード";
        if(document.querySelector("h1")) document.querySelector("h1").innerText = "🍰一生に一度の旅🎉";
        if(document.querySelector("h2")) document.querySelector("h2").innerText = "🎂 年齢計算機🎉";
        if(document.querySelector(".greeting")) document.querySelector(".greeting").innerText = "あなたの年齢と、あなたの人生に関する驚くべき詳細情報をご紹介します！";
        if(document.querySelector(".description")) document.querySelector(".description").innerText = "生年";
        if(document.querySelector("#birthYear")) document.querySelector("#birthYear").placeholder = "🕓 YYYY-MM-DD";
        if(document.querySelector(".minAge")) document.querySelector(".minAge").innerText = "最小値: 1900";
        if(document.querySelector(".maxAge")) document.querySelector(".maxAge").innerText = "最大: 2026";
        if(document.querySelector("#noteInput")) {
            document.querySelector("#noteInput").placeholder = "フィードバックがありますか？メモを入力...";
            document.querySelector("#noteInput").style.direction = "ltr";
        }
        if(document.querySelector("#noteSendBtn")) document.querySelector("#noteSendBtn").innerText = "送信";
        if(document.querySelector(".black")) document.querySelector(".black").innerText = "あなたの年齢";
        if(document.querySelector(".purple")) document.querySelector(".purple").innerText = "年";
        if(document.querySelector(".green")) document.querySelector(".green").innerText = "ヶ月";
        if(document.querySelector(".blue")) document.querySelector(".blue").innerText = "日";
        if(document.querySelector(".orange")) document.querySelector(".orange").innerText = "時間";
        if(document.querySelector(".red")) document.querySelector(".red").innerText = "分";
        if(document.querySelector(".blackBlue")) document.querySelector(".blackBlue").innerText = "秒";
        if(document.querySelector(".next")) document.querySelector(".next").innerText = "🎂 次の誕生日:";
        if(document.querySelector(".daysLeft")) document.querySelector(".daysLeft").innerText = "残り日数 ";
        if(document.querySelector(".count")) document.querySelector(".count").innerText = "ライブカウンター";
        if(document.querySelector(".live")) document.querySelector(".live").innerText = "• ライブ";
        if(document.querySelector("#daysLivedLabel")) document.querySelector("#daysLivedLabel").innerText = "生存日数";
        if(document.querySelector("#monthsLivedLabel")) document.querySelector("#monthsLivedLabel").innerText = "生存月数";
        if(document.querySelector("#hoursLivedLabel")) document.querySelector("#hoursLivedLabel").innerText = "生存時間";
        if(document.querySelector("#minutesLivedLabel")) document.querySelector("#minutesLivedLabel").innerText = "生存分";
        if(document.querySelector("#secondsLivedLabel")) document.querySelector("#secondsLivedLabel").innerText = "生存秒";
        if(document.querySelector(".title2")) {
            document.querySelector(".title2").innerText = "次回の誕生日";
            document.querySelector(".title2").style.direction = "ltr";
        }
        if(document.querySelector(".title3")) document.querySelector(".title3").innerText = "残り日数";
        if(document.querySelector(".progress-title")) document.querySelector(".progress-title").innerText = "あなたの次回の誕生日が近づいています";
        if(document.querySelector("h3")) {
            document.querySelector("h3").innerText = "他の惑星での年齢";
            document.querySelector("h3").style.direction = "ltr";
        }
        if(document.querySelector("#saturnName")) document.querySelector("#saturnName").innerText = "土星";
        if(document.querySelector("#jupiterName")) document.querySelector("#jupiterName").innerText = "木星";
        if(document.querySelector("#marsName")) document.querySelector("#marsName").innerText = "火星";
        if(document.querySelector("#plutoName")) document.querySelector("#plutoName").innerText = "冥王星";
        if(document.querySelector("#proximaName")) document.querySelector("#proximaName").innerText = "プロキシマ";
        if(document.querySelector("#saturnYear")) document.querySelector("#saturnYear").innerText = "年";
        if(document.querySelector("#jupiterYear")) document.querySelector("#jupiterYear").innerText = "年";
        if(document.querySelector("#marsYear")) document.querySelector("#marsYear").innerText = "年";
        if(document.querySelector("#plutoYear")) document.querySelector("#plutoYear").innerText = "年";
        if(document.querySelector("#proximaYear")) document.querySelector("#proximaYear").innerText = "年";
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").innerText = "惑星、準惑星、さらには系外惑星におけるあなたの年齢を調べてみましょう！";
            document.querySelector(".footer").style.direction = "ltr";
        }
        if (document.querySelector(".more-label")) {
            document.querySelector(".more-label").innerHTML = 'その他の<br>惑星';
        }
        if(document.querySelector("#calculateBtn")) document.querySelector("#calculateBtn").value = "🖥 年齢を計算する";
        if(document.querySelector(".support-btn")) document.querySelector(".support-btn").innerText = "☕ プロジェクトを支援する";
        if (document.querySelector(".myName")) {
            document.querySelector(".myName").innerHTML = '未来のエンジニア<span class="name">ファティマ❤️</span>によって開発されました';
        }
    }
    // لو اختار إنجليزي
    else if (selectedLang === "en") {
        document.body.classList.remove("rtl-mode");
        document.dir = "ltr";
        currentLang = "en-US";
        if(document.querySelector(".dark")) document.querySelector(".dark").innerText = "🌑 Dark Mode";
        if(document.querySelector("h2")) document.querySelector("h2").innerText = "🎂 Age Calculator 🎉";
        if(document.querySelector("h1")) document.querySelector("h1").innerText = "🍰 The journey of a lifetime 🎉";
        if(document.querySelector(".greeting")) document.querySelector(".greeting").innerText = "Here is your age and amazing details about your life!";
        if(document.querySelector(".description")) document.querySelector(".description").innerText = "Birth Year";
        if(document.querySelector("#birthYear")) document.querySelector("#birthYear").placeholder = "🕓 YYYY-MM-DD";
        if(document.querySelector(".minAge")) document.querySelector(".minAge").innerText = "Min: 1900";
        if(document.querySelector(".maxAge")) document.querySelector(".maxAge").innerText = "Max: 2026";
        if(document.querySelector("#noteInput")) {
            document.querySelector("#noteInput").placeholder = "Got feedback? Type a quick note...";
            document.querySelector("#noteInput").style.direction = "ltr";
        }
        if(document.querySelector("#noteSendBtn")) document.querySelector("#noteSendBtn").innerText = "Send";
        if(document.querySelector(".black")) document.querySelector(".black").innerText = "Your Age";
        if(document.querySelector(".purple")) document.querySelector(".purple").innerText = "Years";
        if(document.querySelector(".green")) document.querySelector(".green").innerText = "Months";
        if(document.querySelector(".blue")) document.querySelector(".blue").innerText = "Days";
        if(document.querySelector(".orange")) document.querySelector(".orange").innerText = "Hours";
        if(document.querySelector(".red")) document.querySelector(".red").innerText = "Minutes";
        if(document.querySelector(".blackBlue")) document.querySelector(".blackBlue").innerText = "Seconds";
        if(document.querySelector(".next")) document.querySelector(".next").innerText = "🎂 Next Birthday:";
        if(document.querySelector(".daysLeft")) document.querySelector(".daysLeft").innerText = "Days Left ";
        if(document.querySelector(".count")) document.querySelector(".count").innerText = "Live Counter";
        if(document.querySelector(".live")) document.querySelector(".live").innerText = "• Live";
        if(document.querySelector("#daysLivedLabel")) document.querySelector("#daysLivedLabel").innerText = "Days Lived";
        if(document.querySelector("#monthsLivedLabel")) document.querySelector("#monthsLivedLabel").innerText = "Months Lived";
        if(document.querySelector("#hoursLivedLabel")) document.querySelector("#hoursLivedLabel").innerText = "Hours Lived";
        if(document.querySelector("#minutesLivedLabel")) document.querySelector("#minutesLivedLabel").innerText = "Minutes Lived";
        if(document.querySelector("#secondsLivedLabel")) document.querySelector("#secondsLivedLabel").innerText = "Seconds Lived";
        if(document.querySelector(".title2")) {
            document.querySelector(".title2").innerText = "Next Birthday";
            document.querySelector(".title2").style.direction = "ltr";
        }
        if(document.querySelector(".title3")) document.querySelector(".title3").innerText = "Days Left";
        if(document.querySelector(".progress-title")) document.querySelector(".progress-title").innerText = "Your Next Birthday is Approaching";
        if(document.querySelector("h3")) {
            document.querySelector("h3").innerText = "Age on Other Planets";
            document.querySelector("h3").style.direction = "ltr";
        }
        if(document.querySelector("#saturnYear")) document.querySelector("#saturnYear").innerText = "Years";
        if(document.querySelector("#jupiterYear")) document.querySelector("#jupiterYear").innerText = "Years";
        if(document.querySelector("#marsYear")) document.querySelector("#marsYear").innerText = "Years";
        if(document.querySelector("#plutoYear")) document.querySelector("#plutoYear").innerText = "Years";
        if(document.querySelector("#proximaYear")) document.querySelector("#proximaYear").innerText = "Years";
        if(document.querySelector("#saturnName")) document.querySelector("#saturnName").innerText = "Saturn";
        if(document.querySelector("#jupiterName")) document.querySelector("#jupiterName").innerText = "Jupiter";
        if(document.querySelector("#marsName")) document.querySelector("#marsName").innerText = "Mars";
        if(document.querySelector("#plutoName")) document.querySelector("#plutoName").innerText = "Pluto";
        if(document.querySelector("#proximaName")) document.querySelector("#proximaName").innerText = "Proxima";
        if(document.querySelector(".footer")) {
            document.querySelector(".footer").innerText = "Discover your age across planets, dwarf planets, and even exoplanets!";
            document.querySelector(".footer").style.direction = "ltr";
        }
        if (document.querySelector(".more-label")) {
            document.querySelector(".more-label").innerHTML = 'More<br>Planets';
        }
        if(document.querySelector("#calculateBtn")) document.querySelector("#calculateBtn").value = "🖥 Calculate Age";
        if(document.querySelector(".support-btn")) document.querySelector(".support-btn").innerText = "☕ Support the Project";
        if (document.querySelector(".myName")) {
            document.querySelector(".myName").innerHTML = 'Made by future engineer <span class="name">Fatima ❤️</span>';
        }
    }

    updateTime();
}

function toggleTheme() {
    let themeToggle = document.getElementById("themeToggle");
    if (themeToggle && themeToggle.checked === true) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

function setupDateInput() {
    if (!birthDayInput) return;

    const isSmallDevice = window.matchMedia('(max-width: 1024px)').matches;

    if (isSmallDevice) {
        birthDayInput.type = 'text';
        birthDayInput.setAttribute('inputmode', 'numeric');
        birthDayInput.setAttribute('pattern', '\\d{4}-\\d{2}-\\d{2}');
        birthDayInput.placeholder = 'YYYY-MM-DD';
    } else {
        birthDayInput.type = 'date';
        birthDayInput.removeAttribute('inputmode');
        birthDayInput.removeAttribute('pattern');
        birthDayInput.placeholder = '🕓 YYYY-MM-DD';
    }
}

birthDayInput.addEventListener('input', function () {
    if (birthDayInput.type !== 'text') return;

    let digits = birthDayInput.value.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;

    if (digits.length > 4) {
        formatted = digits.slice(0, 4) + '-' + digits.slice(4);
    }
    if (digits.length > 6) {
        formatted = formatted.slice(0, 7) + '-' + formatted.slice(7);
    }

    birthDayInput.value = formatted;
});

window.addEventListener('resize', setupDateInput);
setupDateInput();

function calculateAge() {
    let birthValue = birthDayInput.value;

    if (!birthValue || birthValue.trim() === "") {
        if (currentLang === "ar-EG") {
            showToast("⚠️ هذا الحقل مطلوب!");
        } else if (currentLang === "ja-JP") {
            showToast("⚠️ この項目は必須です！");
        } else {
            showToast("⚠️ Field is required!");
        }
        if (ageTimer) clearInterval(ageTimer);
        return;
    }

    let birthDate = new Date(birthValue);
    let today = new Date();

    if (isNaN(birthDate.getTime())) {
        showToast("⚠️ Please enter a valid date.");
        if (ageTimer) clearInterval(ageTimer);
        return;
    }

    // حساب السنين و الشهور و الايام
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

    if (years > 120 || years < 0) {
        if (currentLang === "ar-EG") {
            showToast("⚠️ أدخل عمرك الحقيقي!");
        } else if (currentLang === "ja-JP") {
            showToast("⚠️ あなたの実際の年齢を入力してください！");
        } else {
            showToast("⚠️ Enter your real age!");
        }
        if (ageTimer) clearInterval(ageTimer);
        return;
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

    if (document.getElementById("yearsResult")) document.getElementById("yearsResult").textContent = years;
    if (document.getElementById("monthsResult")) document.getElementById("monthsResult").textContent = months;
    if (document.getElementById("daysResult")) document.getElementById("daysResult").textContent = days;
    if (document.getElementById("hoursResult")) document.getElementById("hoursResult").textContent = hours;
    if (document.getElementById("minutesResult")) document.getElementById("minutesResult").textContent = minutes;
    if (document.getElementById("secondsResult")) document.getElementById("secondsResult").textContent = seconds;

    let totalSecElem = document.getElementById("totalSecondsResult");
    if (totalSecElem) {
        if (document.getElementById("totalMonthsResult")) document.getElementById("totalMonthsResult").textContent = totalMonths;
        if (document.getElementById("totalDaysResult")) document.getElementById("totalDaysResult").textContent = totalDays;
        if (document.getElementById("totalHoursResult")) document.getElementById("totalHoursResult").textContent = totalHours;
        if (document.getElementById("totalMinutesResult")) document.getElementById("totalMinutesResult").textContent = totalMinutes;
        totalSecElem.textContent = totalSeconds;
    }

    let nextBirthdayElem = document.getElementById("nextBirthdayResult");
    if (nextBirthdayElem) {
        nextBirthdayElem.textContent ="  " + daysLeft + "  " ;
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

// ---- (Event Listeners) ----

const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("change", toggleTheme);
}

const langSelect = document.getElementById("languageSelect");
if (langSelect) {
    langSelect.addEventListener("change", function(e) {
        changeLanguage(e.target.value);
    });
}

if (birthDayInput) {
    birthDayInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            calculateAge();
            if (ageTimer) clearInterval(ageTimer);
            ageTimer = setInterval(calculateAge, 1000);
        }
    });
}

if (button) {
    button.addEventListener("click", function () {
        calculateAge();
        if (ageTimer) clearInterval(ageTimer);
        ageTimer = setInterval(calculateAge, 1000);
    });
}

const myCard = document.querySelector('#morePlanets');
if (myCard) {
    myCard.addEventListener("click", function () {
        if (currentLang === "ar-EG") {
            showToast("🚀 ستتوفر هذه الميزة قريباً!");
        } else if (currentLang === "ja-JP") {
            showToast("🚀 この機能はまもなく利用可能になります！");
        } else {
            showToast("🚀 This feature will be available soon!");
        }
    });
}

const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputField = document.getElementById('noteInput');
        const sendBtn = document.getElementById('noteSendBtn');
        const userNote = inputField.value.trim();

        if (userNote === "") {
            if (currentLang === "ar-EG") showToast("⚠️ يرجى كتابة ملاحظتك أولاً!");
            else if (currentLang === "ja-JP") showToast("⚠️ 送信する前にメモを入力してください。");
            else showToast("⚠️ Please write a note before sending.");
            return;
        }

        const formData = new FormData();
        formData.append('message', userNote);

        const originalBtnText = sendBtn.innerText;
        sendBtn.innerText = (currentLang === "ar-EG") ? "جاري الإرسال..." : (currentLang === "ja-JP") ? "送信中..." : "Sending...";
        sendBtn.disabled = true;

        fetch('https://formspree.io/f/xkjwgoev', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                if (currentLang === "ar-EG") showToast("💌 تم إرسال ملاحظتك بنجاح!");
                else if (currentLang === "ja-JP") showToast("💌 メモが正常に送信されました！");
                else showToast("💌 Note sent successfully!");
                
                inputField.value = '';
            } else {
                if (currentLang === "ar-EG") showToast("❌ فشل الإرسال، يرجى المحاولة لاحقاً.");
                else showToast("❌ Failed to send feedback.");
            }
        })
        .catch(error => {
            showToast("❌ Network error. Check internet connection.");
        })
        .finally(() => {
            sendBtn.innerText = originalBtnText;
            sendBtn.disabled = false;
        });
    });
}