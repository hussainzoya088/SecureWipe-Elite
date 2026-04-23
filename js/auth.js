function attemptLogin() {
    const btn = document.querySelector('button');
    const key = document.getElementById('access-key').value;
    
    btn.innerText = "BYPASSING FIREWALL...";
    btn.classList.add('animate-pulse');

    setTimeout(() => {
        if(key === "IEEE2026") {
            document.getElementById('login-screen').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('main-dashboard').classList.remove('hidden');
            }, 500);
        } else {
            alert("ACCESS DENIED: UNAUTHORIZED SIGNATURE");
            btn.innerText = "INITIALIZE HANDSHAKE";
            btn.classList.remove('animate-pulse');
        }
    }, 2000);
}

// Biometric Animation
setInterval(() => {
    const line = document.getElementById('scan-line');
    let top = parseInt(line.style.top) || 0;
    top = (top + 2) % 120;
    line.style.top = top + 'px';
}, 30);