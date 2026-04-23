const Visualizers = {
    renderHex: (container) => {
        const beforeData = "USER_PASS: admin123\nSSN: 442-11-902\nBANK_ACC: 99281102";
        container.innerHTML = `
            <div class="grid grid-cols-2 gap-4 h-full">
                <div class="p-2 border border-red-900 bg-red-900/10">
                    <h3 class="text-red-500 mb-2 underline text-xs">FORENSIC READ: PRE-WIPE</h3>
                    <pre class="text-[10px] text-red-400">${beforeData}</pre>
                </div>
                <div class="p-2 border border-green-900 bg-green-900/10">
                    <h3 class="text-green-500 mb-2 underline text-xs">FORENSIC READ: POST-WIPE</h3>
                    <pre class="text-[10px] text-green-400">00 00 00 00 00 00 00\n00 00 00 00 00 00 00\n00 00 00 00 00 00 00</pre>
                </div>
            </div>
        `;
    },

    renderMagnetic: (canvasId) => {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        const particles = [];
        for(let i=0; i<500; i++) {
            particles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, angle: 0});
        }

        function draw() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0,0,canvas.width, canvas.height);
            ctx.strokeStyle = '#00ff41';
            particles.forEach(p => {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + Math.cos(p.angle)*5, p.y + Math.sin(p.angle)*5);
                ctx.stroke();
                p.angle += 0.1; // Chaotic spin simulation
            });
            requestAnimationFrame(draw);
        }
        draw();
    }
};