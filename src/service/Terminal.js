export default class Terminal
{
    constructor() {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'console');

        this.container = document.createElement('div');
        this.container.setAttribute('id', 'console-container');

        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('id', 'keyboard-catcher');

        this.cursor = document.createElement('div');
        this.cursor.setAttribute('id', 'cursor');
        this.cursor.setAttribute('class', 'blink');

        this.element.appendChild(this.input);
        this.element.appendChild(this.container);
        this.element.appendChild(this.cursor);

        document.body.appendChild(this.element);

        this.update = this.update.bind(this);
        this.onKey = this.onKey.bind(this);

        this.line = null;

        this.init();
    }

    /**
     * Keyboard listener
     *
     * @param {Event} event
     */
    onKey(event) {
        if (event.keyCode === 13) {
            this.newLine();
        } else {
            this.input.focus();
            this.update();
        }
    }

    /**
     * Write a message
     *
     * @param {String} message
     * @param {Boolean} newLine
     */
    write(message, newLine) {
        if (newLine) {
            this.newLine();
        }

        this.line.innerHTML = message;

        this.marker = document.createElement('span');
        this.line.appendChild(this.marker);

        this.updateCursor();
    }

    /**
     * Update
     */
    update () {
        this.write(this.input.value);
    }

    /**
     * Init console
     */
    init() {
        window.scrollTo(0, 0);

        this.cursor.style.top = 0;

        this.input.addEventListener('keyup', this.update);
        window.addEventListener('keydown', this.onKey);

        this.write(" _____               _________  _ ", true);
        this.write("|_   _|__  _ __ ___ |___ /___ \\(_)", true);
        this.write("  | |/ _ \\| '_ ` _ \\  |_ \\ __) | |", true);
        this.write("  | | (_) | | | | | |___) / __/| |", true);
        this.write("  |_|\\___/|_| |_| |_|____/_____|_|", true);

        this.newLine();
        this.newLine();
    }

    /**
     * Create new line
     */
    newLine() {
        this.input.value = null;

        this.line = document.createElement('pre');
        this.line.innerHTML = null;

        this.marker = document.createElement('span');
        this.line.appendChild(this.marker);

        this.container.appendChild(this.line);

        this.updateCursor();
    }

    /**
     * Update cursor position
     */
    updateCursor() {
        const { offsetLeft, offsetTop } = this.marker;

        this.cursor.style.left = ( offsetLeft > 0 ? offsetLeft : 10 ) + "px";
        this.cursor.style.top  = ( offsetTop > 0 ? offsetTop : 72 ) + "px";
    }
}
