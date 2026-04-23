const ForensicMath = {
    // Calculate Shannon Entropy: H(x) = -Σ p(x) log2 p(x)
    calculateEntropy: (data) => {
        const frequencies = {};
        for (let byte of data) {
            frequencies[byte] = (frequencies[byte] || 0) + 1;
        }
        let entropy = 0;
        const len = data.length;
        for (let key in frequencies) {
            const p = frequencies[key] / len;
            entropy -= p * Math.log2(p);
        }
        return entropy.toFixed(4);
    },

    generateFakeData: (length, type = 'random') => {
        if (type === 'zero') return new Uint8Array(length).fill(0);
        const data = new Uint8Array(length);
        for (let i = 0; i < length; i++) {
            data[i] = Math.floor(Math.random() * 256);
        }
        return data;
    }
};