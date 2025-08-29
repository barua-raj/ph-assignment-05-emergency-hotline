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

// // showing service name, service number, coin value and call history
const historyList = document.getElementById('call-history-list');
const callHistoryButtons = document.getElementsByClassName('btn-call');
const clearBtn = document.getElementsByClassName('btn-clear')[0];

for (const btn of callHistoryButtons) {
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

        const callTime = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.innerHTML=`
            <div class="flex items-center justify-between gap-1 mb-3 p-3 bg-[rgba(242,242,242,1)]">
                <div>
                    <p class="text-sm font-medium leading-tight">${finalServiceName}</p>
                    <p class="text-xs text-[#595959]">${finalServiceNumber}</p>
                </div>
                <p class="text-xs text-[#595959]">${callTime}</p>
            </div>                  
        `
        historyList.appendChild(div);
    })
    if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      historyList.innerHTML = '';
    });
}
}

// copy count
const copyCount = parseInt(document.getElementById('copy-count').innerText);
let initialCopycount = copyCount;
const btnCopy = document.getElementsByClassName('btn-copy');
for (const btn of btnCopy) {
    btn.addEventListener('click', function(){
        initialCopycount = initialCopycount + 1;
        document.getElementById('copy-count').innerText = initialCopycount;
        return;
    })
}