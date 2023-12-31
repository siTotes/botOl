class SitotesError extends Error {
    constructor(message, options) {
        super(message);
        this.name = 'SI TOTES DEBUG:';
        this.date = new Date();
        this.message = message
    }
    static createError(message, options) {
        return new SitotesError(message, options);
    }
}

function decodeSnapApp(...args) {
    function _0xe78c(d, e, f) {
        const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        const h = g.slice(0, e);
        const i = g.slice(0, f);
        let j = d.split('').reverse().reduce(function (a, b, c) {
            if (h.indexOf(b) !== -1)
                return a += h.indexOf(b) * (Math.pow(e, c));
        }, 0);
        let k = '';
        while (j > 0) {
            k = i[j % f] + k;
            j = (j - (j % f)) / f;
        }
        return k || '0';
    }
    function _0xc60e(h, u, n, t, e, r) {
        r = '';
        for (let i = 0, len = h.length; i < len; i++) {
            let s = '';
            while (h[i] !== n[e]) {
                s += h[i];
                i++;
            }
            for (let j = 0; j < n.length; j++) {
                s = s.replace(new RegExp(n[j], 'g'), j.toString());
            }
            r += String.fromCharCode((_0xe78c(s, e, 10) - t));
        }
        return decodeURIComponent(encodeURIComponent(r));
    }
    return _0xc60e(...args);
}

module.exports = {
    SitotesError,
    decodeSnapApp
}