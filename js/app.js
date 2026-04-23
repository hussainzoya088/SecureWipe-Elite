function showPage(pageId) {
    const container = document.getElementById('module-container');
    const welcome = document.getElementById('page-welcome');
    welcome.classList.add('hidden');
    container.classList.remove('hidden');
    container.innerHTML = `<h2 class="text-2xl mb-4 border-b border-green-500 pb-2">${pageId.toUpperCase()} MODULE</h2>`;

    if(pageId === 'hex') {
        Visualizers.renderHex(container);
    } else if(pageId === 'magnetic') {
        container.innerHTML += `<canvas id="magCanvas" width="800" height="500" class="border border-green-900 w-full"></canvas>
        <p class="mt-4 text-xs text-gray-500">Visualizing residual magnetic flux density (B-H Curve Simulation).</p>`;
        Visualizers.renderMagnetic('magCanvas');
    } else if(pageId === 'bruteforce') {
        container.innerHTML += `
            <div class="space-y-4">
                <div class="p-4 bg-green-900/20 border border-green-500">
                    <p>ATTACKER: Nation-State Supercomputer</p>
                    <p class="text-4xl font-bold mt-2">TIME TO RECOVER: <span class="text-white">3.4e+57 Years</span></p>
                </div>
                <div class="text-xs text-green-700">AES-256 bits of entropy detected. Brute force mathematically impossible within the lifespan of the sun.</div>
            </div>
        `;
    }
}

// Global Breach Ticker
const breaches = ["HOSPITAL_DB: 4.2M Records Exposed", "FINANCE_CORP: Improper SSD Disposal", "GOV_ARCHIVE: Recovered via MFM"];
let tickerIdx = 0;
setInterval(() => {
    document.getElementById('global-ticker').innerText = `CRITICAL ALERT: ${breaches[tickerIdx]}`;
    tickerIdx = (tickerIdx + 1) % breaches.length;
}, 3000);