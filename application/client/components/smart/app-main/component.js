module.exports = class {
    onCreate(input) {
        console.log('* app-main onCreate', input);
        this.state = Object.assign({}, input);
    }
    onInput(input) {
        console.log('* app-main onInput');
    }
    onMount() {
        console.log('* app-main onMount');
        this.websocket = require('application/client/websocket');
    }
    onRender(out) {
        console.log('* app-main onRender');
    }
    onUpdate() {
        console.log('* app-main onUpdate');
    }
};
