// hearts count
const heartCount = parseInt(document.getElementById('heart-count').innerText);
let count = heartCount;
const btnHearts = document.getElementsByClassName('btn-heart');
for (const btn of btnHearts) {
    btn.addEventListener('click', function(){
        count = count + 1;
        document.getElementById('heart-count').innerText = count;
        return;
    })
}

// showing service name and service number
const callButtons = document.getElementsByClassName('btn-call');
for (const btn of callButtons) {
    btn.addEventListener('click', function(){
        const selectedCard = btn.closest('.card');
        const serviceName = selectedCard.getElementsByClassName('service-name')[0];
        const serviceNumber = selectedCard.getElementsByClassName('service-number')[0];

        const finalServiceName = serviceName.textContent;
        const finalServiceNumber = serviceNumber.textContent;
        
        const coinCount = parseInt(document.getElementById('coin-value').innerText);
        if (coinCount < 20) {
            alert("❌ You do not have enough coins! You need atleast 20 coins to call!");
            return;
        }
        const updatedCoin = coinCount - 20;
        document.getElementById('coin-value').innerText = updatedCoin;
        alert(`📞 Calling ${finalServiceName} ${finalServiceNumber}...`);
    })
}