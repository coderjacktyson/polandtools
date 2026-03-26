// Common Calculator Utilities
const CalcUI = {
    // Show result in the result-box
    showResult: (value, unit = "") => {
        const box = document.querySelector('.result-box');
        const display = document.querySelector('.result-value');
        if (box && display) {
            display.textContent = `${value}${unit ? " " + unit : ""}`;
            box.classList.add('active');
            box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    },

    // Format number to local Polish style (1 234,56)
    formatNumber: (num, decimals = 2) => {
        return new Intl.NumberFormat('pl-PL', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(num);
    },

    // Validate inputs - returns bool
    validate: (inputs) => {
        let valid = true;
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (!el || el.value === "" || isNaN(el.value)) {
                if (el) el.style.borderColor = "#ef4444";
                valid = false;
            } else {
                if (el) el.style.borderColor = "var(--border)";
            }
        });
        return valid;
    }
};

// Global listener forEnter key
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const btn = document.querySelector('.btn-calc');
        if (btn) btn.click();
    }
});
