export default class Loader
{
    constructor(host = null) {
        this.host = host || window.location.origin;
        this.pattern = "38,38,40,40,37,39,37,39,66,65";
        this.keys = [];

        this.onKey = this.onKey.bind(this);

        window.addEventListener('keydown', this.onKey);
    }

    onKey(event) {
        this.keys.push(event.keyCode);

        if (this.keys.toString().indexOf(this.pattern) >= 0) {
            window.removeEventListener('keydown', this.onKey);
            document.head.appendChild(this.getScript());
            this.keys.length = 0;
        }
    }

    getScript() {
        const script = document.createElement('script');

        script.src = `${this.host}/terminal.js`;
        script.async = true;

        return script;
    }
}
