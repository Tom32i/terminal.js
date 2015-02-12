/**
 * Terminal
 */
function Terminal()
{
    var css = document.createElement('link');

    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', 'http://lab.tom32i.fr/console/terminal.min.css');

    this.domElement = document.createElement('div');
    this.domElement.setAttribute('id', 'console');

    this.container = document.createElement('div');
    this.container.setAttribute('id', 'console-container');

    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('id', 'keyboard-catcher');

    this.cursor = document.createElement('div');
    this.cursor.setAttribute('id', 'cursor');
    this.cursor.setAttribute('class', 'blink');

    this.domElement.appendChild(this.input);
    this.domElement.appendChild(this.container);
    this.domElement.appendChild(this.cursor);

    document.getElementsByTagName("head")[0].appendChild(css);
    document.body.appendChild(this.domElement);

    this.update           = this.update.bind(this);
    this.keyboardListener = this.keyboardListener.bind(this);

    this.line = null;

    this.init();
}

/**
 * Keyboard listener
 *
 * @param {Event} e
 */
Terminal.prototype.keyboardListener = function (e)
{
    if(e.keyCode === 13) {
        this.newLine();
    } else {
        this.input.focus();
        this.update();
    }
};

/**
 * Write a message
 *
 * @param {String} str
 * @param {Boolean} newLine
 */
Terminal.prototype.write = function (message, newLine)
{
    if(newLine)
    {
        this.newLine();
    }

    this.line.innerHTML = message;

    this.marker = document.createElement('span');
    this.line.appendChild(this.marker);

    this.updateCursor();
};

/**
 * Update
 */
Terminal.prototype.update = function ()
{
    this.write(this.input.value);
};

/**
 * Init console
 */
Terminal.prototype.init = function()
{
    window.scrollTo(0, 0);

    this.cursor.style.top = 0;

    this.input.addEventListener('keyup', this.update);
    window.addEventListener('keydown', this.keyboardListener);

    this.write(" _____               _________  _ ", true);
    this.write("|_   _|__  _ __ ___ |___ /___ \\(_)", true);
    this.write("  | |/ _ \\| '_ ` _ \\  |_ \\ __) | |", true);
    this.write("  | | (_) | | | | | |___) / __/| |", true);
    this.write("  |_|\\___/|_| |_| |_|____/_____|_|", true);

    this.newLine();
    this.newLine();
};

/**
 * Create new line
 */
Terminal.prototype.newLine = function()
{

    this.input.value = null;

    this.line = document.createElement('pre');
    this.line.innerHTML = null;

    this.marker = document.createElement('span');
    this.line.appendChild(this.marker);

    this.container.appendChild(this.line);

    this.updateCursor();
};

/**
 * Update cursor position
 */
Terminal.prototype.updateCursor = function ()
{
    this.cursor.style.left = ( this.marker.offsetLeft > 0 ? this.marker.offsetLeft : 10 ) + "px";
    this.cursor.style.top  = ( this.marker.offsetTop > 0 ? this.marker.offsetTop : 72 ) + "px";
};

new Terminal();
