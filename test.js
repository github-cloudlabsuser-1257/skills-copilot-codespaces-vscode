// calculator.js
class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('.calculator button').forEach(button => {
            button.addEventListener('click', () => this.handleClick(button.dataset.value));
        });
    }

    handleClick(value) {
        if (value === 'clear') {
            this.clear();
        } else if (value === '=') {
            this.calculate();
        } else {
            this.appendValue(value);
        }
    }

    clear() {
        this.display.value = '';
    }

    appendValue(value) {
        this.display.value += value;
    }

    calculate() {
        try {
            const result = this.evaluateExpression(this.display.value);
            this.display.value = Number.isInteger(result) ? result : result.toFixed(2);
        } catch (error) {
            this.display.value = 'Error';
        }
    }

    evaluateExpression(expression) {
        // Safely evaluate the expression
        const sanitized = expression.replace(/[^0-9+\-*/.]/g, '');
        return Function(`'use strict'; return (${sanitized})`)();
    }
}