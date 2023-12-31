!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t()
    }
}(function() {
    return function t(e, i, a) {
        function n(r, l) {
            if (!i[r]) {
                if (!e[r]) {
                    var s = "function" == typeof require && require;
                    if (!l && s)
                        return s(r, !0);
                    if (o)
                        return o(r, !0);
                    var d = new Error("Cannot find module '" + r + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var u = i[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function(t) {
                    var i = e[r][1][t];
                    return n(i ? i : t)
                }, u, u.exports, t, e, i, a)
            }
            return i[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < a.length; r++)
            n(a[r]);
        return n
    }({
        1: [function(t, e, i) {}, {}],
        2: [function(t, e, i) {
            function a(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/,
                        i = /^#([a-fA-F0-9]{6})$/,
                        a = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
                        o = /(\w+)/,
                        r = [0, 0, 0],
                        l = 1,
                        s = t.match(e);
                    if (s) {
                        s = s[1];
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s[d] + s[d], 16)
                    } else if (s = t.match(i)) {
                        s = s[1];
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s.slice(2 * d, 2 * d + 2), 16)
                    } else if (s = t.match(a)) {
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s[d + 1]);
                        l = parseFloat(s[4])
                    } else if (s = t.match(n)) {
                        for (var d = 0; d < r.length; d++)
                            r[d] = Math.round(2.55 * parseFloat(s[d + 1]));
                        l = parseFloat(s[4])
                    } else if (s = t.match(o)) {
                        if ("transparent" == s[1])
                            return [0, 0, 0, 0];
                        if (r = y[s[1]], !r)
                            return
                    }
                    for (var d = 0; d < r.length; d++)
                        r[d] = v(r[d], 0, 255);
                    return l = l || 0 == l ? v(l, 0, 1) : 1, r[3] = l, r
                }
            }
            function n(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        i = t.match(e);
                    if (i) {
                        var a = parseFloat(i[4]),
                            n = v(parseInt(i[1]), 0, 360),
                            o = v(parseFloat(i[2]), 0, 100),
                            r = v(parseFloat(i[3]), 0, 100),
                            l = v(isNaN(a) ? 1 : a, 0, 1);
                        return [n, o, r, l]
                    }
                }
            }
            function o(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
                        i = t.match(e);
                    if (i) {
                        var a = parseFloat(i[4]),
                            n = v(parseInt(i[1]), 0, 360),
                            o = v(parseFloat(i[2]), 0, 100),
                            r = v(parseFloat(i[3]), 0, 100),
                            l = v(isNaN(a) ? 1 : a, 0, 1);
                        return [n, o, r, l]
                    }
                }
            }
            function r(t) {
                var e = a(t);
                return e && e.slice(0, 3)
            }
            function l(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }
            function s(t) {
                var e = a(t);
                return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
            }
            function d(t) {
                return "#" + x(t[0]) + x(t[1]) + x(t[2])
            }
            function u(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }
            function c(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }
            function h(t, e) {
                if (e < 1 || t[3] && t[3] < 1)
                    return f(t, e);
                var i = Math.round(t[0] / 255 * 100),
                    a = Math.round(t[1] / 255 * 100),
                    n = Math.round(t[2] / 255 * 100);
                return "rgb(" + i + "%, " + a + "%, " + n + "%)"
            }
            function f(t, e) {
                var i = Math.round(t[0] / 255 * 100),
                    a = Math.round(t[1] / 255 * 100),
                    n = Math.round(t[2] / 255 * 100);
                return "rgba(" + i + "%, " + a + "%, " + n + "%, " + (e || t[3] || 1) + ")"
            }
            function g(t, e) {
                return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }
            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }
            function m(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }
            function b(t) {
                return k[t.slice(0, 3)]
            }
            function v(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }
            function x(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var y = t(6);
            e.exports = {
                getRgba: a,
                getHsla: n,
                getRgb: r,
                getHsl: l,
                getHwb: o,
                getAlpha: s,
                hexString: d,
                rgbString: u,
                rgbaString: c,
                percentString: h,
                percentaString: f,
                hslString: g,
                hslaString: p,
                hwbString: m,
                keyword: b
            };
            var k = {};
            for (var S in y)
                k[y[S]] = S
        }, {
            6: 6
        }],
        3: [function(t, e, i) {
            var a = t(5),
                n = t(2),
                o = function(t) {
                    if (t instanceof o)
                        return t;
                    if (!(this instanceof o))
                        return new o(t);
                    this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    };
                    var e;
                    if ("string" == typeof t)
                        if (e = n.getRgba(t))
                            this.setValues("rgb", e);
                        else if (e = n.getHsla(t))
                            this.setValues("hsl", e);
                        else {
                            if (!(e = n.getHwb(t)))
                                throw new Error('Unable to parse color from string "' + t + '"');
                            this.setValues("hwb", e)
                        }
                    else if ("object" == typeof t)
                        if (e = t, void 0 !== e.r || void 0 !== e.red)
                            this.setValues("rgb", e);
                        else if (void 0 !== e.l || void 0 !== e.lightness)
                            this.setValues("hsl", e);
                        else if (void 0 !== e.v || void 0 !== e.value)
                            this.setValues("hsv", e);
                        else if (void 0 !== e.w || void 0 !== e.whiteness)
                            this.setValues("hwb", e);
                        else {
                            if (void 0 === e.c && void 0 === e.cyan)
                                throw new Error("Unable to parse color from object " + JSON.stringify(t));
                            this.setValues("cmyk", e)
                        }
                };
            o.prototype = {
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var a = t[i] / 255;
                        e[i] = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb,
                        e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return e < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++)
                        t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var i = this,
                        a = t,
                        n = void 0 === e ? .5 : e,
                        o = 2 * n - 1,
                        r = i.alpha() - a.alpha(),
                        l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                        s = 1 - l;
                    return this.rgb(l * i.red() + s * a.red(), l * i.green() + s * a.green(), l * i.blue() + s * a.blue()).alpha(i.alpha() * n + a.alpha() * (1 - n))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t,
                        e,
                        i = new o,
                        a = this.values,
                        n = i.values;
                    for (var r in a)
                        a.hasOwnProperty(r) && (t = a[r], e = {}.toString.call(t), "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, o.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, o.prototype.getValues = function(t) {
                for (var e = this.values, i = {}, a = 0; a < t.length; a++)
                    i[t.charAt(a)] = e[t][a];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, o.prototype.setValues = function(t, e) {
                var i,
                    n = this.values,
                    o = this.spaces,
                    r = this.maxes,
                    l = 1;
                if ("alpha" === t)
                    l = e;
                else if (e.length)
                    n[t] = e.slice(0, t.length), l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++)
                        n[t][i] = e[t.charAt(i)];
                    l = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var s = o[t];
                    for (i = 0; i < t.length; i++)
                        n[t][i] = e[s[i]];
                    l = e.alpha
                }
                if (n.alpha = Math.max(0, Math.min(1, void 0 === l ? n.alpha : l)), "alpha" === t)
                    return !1;
                var d;
                for (i = 0; i < t.length; i++)
                    d = Math.max(0, Math.min(r[t][i], n[t][i])), n[t][i] = Math.round(d);
                for (var u in o)
                    u !== t && (n[u] = a[t][u](n[t]));
                return !0
            }, o.prototype.setSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, o.prototype.setChannel = function(t, e, i) {
                var a = this.values[t];
                return void 0 === i ? a[e] : i === a[e] ? this : (a[e] = i, this.setValues(t, a), this)
            }, "undefined" != typeof window && (window.Color = o), e.exports = o
        }, {
            2: 2,
            5: 5
        }],
        4: [function(t, e, i) {
            function a(t) {
                var e,
                    i,
                    a,
                    n = t[0] / 255,
                    o = t[1] / 255,
                    r = t[2] / 255,
                    l = Math.min(n, o, r),
                    s = Math.max(n, o, r),
                    d = s - l;
                return s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), e < 0 && (e += 360), a = (l + s) / 2, i = s == l ? 0 : a <= .5 ? d / (s + l) : d / (2 - s - l), [e, 100 * i, 100 * a]
            }
            function n(t) {
                var e,
                    i,
                    a,
                    n = t[0],
                    o = t[1],
                    r = t[2],
                    l = Math.min(n, o, r),
                    s = Math.max(n, o, r),
                    d = s - l;
                return i = 0 == s ? 0 : d / s * 1e3 / 10, s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d), e = Math.min(60 * e, 360), e < 0 && (e += 360), a = s / 255 * 1e3 / 10, [e, i, a]
            }
            function o(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2],
                    o = a(t)[0],
                    r = 1 / 255 * Math.min(e, Math.min(i, n)),
                    n = 1 - 1 / 255 * Math.max(e, Math.max(i, n));
                return [o, 100 * r, 100 * n]
            }
            function l(t) {
                var e,
                    i,
                    a,
                    n,
                    o = t[0] / 255,
                    r = t[1] / 255,
                    l = t[2] / 255;
                return n = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - n) / (1 - n) || 0, i = (1 - r - n) / (1 - n) || 0, a = (1 - l - n) / (1 - n) || 0, [100 * e, 100 * i, 100 * a, 100 * n]
            }
            function s(t) {
                return G[JSON.stringify(t)]
            }
            function d(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    a = t[2] / 255;
                e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92;
                var n = .4124 * e + .3576 * i + .1805 * a,
                    o = .2126 * e + .7152 * i + .0722 * a,
                    r = .0193 * e + .1192 * i + .9505 * a;
                return [100 * n, 100 * o, 100 * r]
            }
            function u(t) {
                var e,
                    i,
                    a,
                    n = d(t),
                    o = n[0],
                    r = n[1],
                    l = n[2];
                return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, i = 500 * (o - r), a = 200 * (r - l), [e, i, a]
            }
            function c(t) {
                return W(u(t))
            }
            function h(t) {
                var e,
                    i,
                    a,
                    n,
                    o,
                    r = t[0] / 360,
                    l = t[1] / 100,
                    s = t[2] / 100;
                if (0 == l)
                    return o = 255 * s, [o, o, o];
                i = s < .5 ? s * (1 + l) : s + l - s * l, e = 2 * s - i, n = [0, 0, 0];
                for (var d = 0; d < 3; d++)
                    a = r + 1 / 3 * -(d - 1), a < 0 && a++, a > 1 && a--, o = 6 * a < 1 ? e + 6 * (i - e) * a : 2 * a < 1 ? i : 3 * a < 2 ? e + (i - e) * (2 / 3 - a) * 6 : e, n[d] = 255 * o;
                return n
            }
            function f(t) {
                var e,
                    i,
                    a = t[0],
                    n = t[1] / 100,
                    o = t[2] / 100;
                return 0 === o ? [0, 0, 0] : (o *= 2, n *= o <= 1 ? o : 2 - o, i = (o + n) / 2, e = 2 * n / (o + n), [a, 100 * e, 100 * i])
            }
            function p(t) {
                return o(h(t))
            }
            function m(t) {
                return l(h(t))
            }
            function v(t) {
                return s(h(t))
            }
            function x(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    a = t[2] / 100,
                    n = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    r = 255 * a * (1 - i),
                    l = 255 * a * (1 - i * o),
                    s = 255 * a * (1 - i * (1 - o)),
                    a = 255 * a;
                switch (n) {
                case 0:
                    return [a, s, r];
                case 1:
                    return [l, a, r];
                case 2:
                    return [r, a, s];
                case 3:
                    return [r, l, a];
                case 4:
                    return [s, r, a];
                case 5:
                    return [a, r, l]
                }
            }
            function y(t) {
                var e,
                    i,
                    a = t[0],
                    n = t[1] / 100,
                    o = t[2] / 100;
                return i = (2 - n) * o, e = n * o, e /= i <= 1 ? i : 2 - i, e = e || 0, i /= 2, [a, 100 * e, 100 * i]
            }
            function k(t) {
                return o(x(t))
            }
            function S(t) {
                return l(x(t))
            }
            function w(t) {
                return s(x(t))
            }
            function M(t) {
                var e,
                    i,
                    a,
                    n,
                    o = t[0] / 360,
                    l = t[1] / 100,
                    s = t[2] / 100,
                    d = l + s;
                switch (d > 1 && (l /= d, s /= d), e = Math.floor(6 * o), i = 1 - s, a = 6 * o - e, 0 != (1 & e) && (a = 1 - a), n = l + a * (i - l), e) {
                default:
                case 6:
                case 0:
                    r = i, g = n, b = l;
                    break;
                case 1:
                    r = n, g = i, b = l;
                    break;
                case 2:
                    r = l, g = i, b = n;
                    break;
                case 3:
                    r = l, g = n, b = i;
                    break;
                case 4:
                    r = n, g = l, b = i;
                    break;
                case 5:
                    r = i, g = l, b = n
                }
                return [255 * r, 255 * g, 255 * b]
            }
            function C(t) {
                return a(M(t))
            }
            function D(t) {
                return n(M(t))
            }
            function I(t) {
                return l(M(t))
            }
            function A(t) {
                return s(M(t))
            }
            function T(t) {
                var e,
                    i,
                    a,
                    n = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100,
                    l = t[3] / 100;
                return e = 1 - Math.min(1, n * (1 - l) + l), i = 1 - Math.min(1, o * (1 - l) + l), a = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * i, 255 * a]
            }
            function P(t) {
                return a(T(t))
            }
            function F(t) {
                return n(T(t))
            }
            function _(t) {
                return o(T(t))
            }
            function R(t) {
                return s(T(t))
            }
            function V(t) {
                var e,
                    i,
                    a,
                    n = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100;
                return e = 3.2406 * n + o * -1.5372 + r * -.4986, i = n * -.9689 + 1.8758 * o + .0415 * r, a = .0557 * n + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a, e = Math.min(Math.max(0, e), 1), i = Math.min(Math.max(0, i), 1), a = Math.min(Math.max(0, a), 1), [255 * e, 255 * i, 255 * a]
            }
            function L(t) {
                var e,
                    i,
                    a,
                    n = t[0],
                    o = t[1],
                    r = t[2];
                return n /= 95.047, o /= 100, r /= 108.883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, i = 500 * (n - o), a = 200 * (o - r), [e, i, a]
            }
            function O(t) {
                return W(L(t))
            }
            function B(t) {
                var e,
                    i,
                    a,
                    n,
                    o = t[0],
                    r = t[1],
                    l = t[2];
                return o <= 8 ? (i = 100 * o / 903.3, n = 7.787 * (i / 100) + 16 / 116) : (i = 100 * Math.pow((o + 16) / 116, 3), n = Math.pow(i / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3), a = a / 108.883 <= .008859 ? a = 108.883 * (n - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - l / 200, 3), [e, i, a]
            }
            function W(t) {
                var e,
                    i,
                    a,
                    n = t[0],
                    o = t[1],
                    r = t[2];
                return e = Math.atan2(r, o), i = 360 * e / 2 / Math.PI, i < 0 && (i += 360), a = Math.sqrt(o * o + r * r), [n, a, i]
            }
            function z(t) {
                return V(B(t))
            }
            function N(t) {
                var e,
                    i,
                    a,
                    n = t[0],
                    o = t[1],
                    r = t[2];
                return a = r / 360 * 2 * Math.PI, e = o * Math.cos(a), i = o * Math.sin(a), [n, e, i]
            }
            function E(t) {
                return B(N(t))
            }
            function H(t) {
                return z(N(t))
            }
            function U(t) {
                return Z[t]
            }
            function j(t) {
                return a(U(t))
            }
            function q(t) {
                return n(U(t))
            }
            function Y(t) {
                return o(U(t))
            }
            function X(t) {
                return l(U(t))
            }
            function K(t) {
                return u(U(t))
            }
            function J(t) {
                return d(U(t))
            }
            e.exports = {
                rgb2hsl: a,
                rgb2hsv: n,
                rgb2hwb: o,
                rgb2cmyk: l,
                rgb2keyword: s,
                rgb2xyz: d,
                rgb2lab: u,
                rgb2lch: c,
                hsl2rgb: h,
                hsl2hsv: f,
                hsl2hwb: p,
                hsl2cmyk: m,
                hsl2keyword: v,
                hsv2rgb: x,
                hsv2hsl: y,
                hsv2hwb: k,
                hsv2cmyk: S,
                hsv2keyword: w,
                hwb2rgb: M,
                hwb2hsl: C,
                hwb2hsv: D,
                hwb2cmyk: I,
                hwb2keyword: A,
                cmyk2rgb: T,
                cmyk2hsl: P,
                cmyk2hsv: F,
                cmyk2hwb: _,
                cmyk2keyword: R,
                keyword2rgb: U,
                keyword2hsl: j,
                keyword2hsv: q,
                keyword2hwb: Y,
                keyword2cmyk: X,
                keyword2lab: K,
                keyword2xyz: J,
                xyz2rgb: V,
                xyz2lab: L,
                xyz2lch: O,
                lab2xyz: B,
                lab2rgb: z,
                lab2lch: W,
                lch2lab: N,
                lch2xyz: E,
                lch2rgb: H
            };
            var Z = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                G = {};
            for (var Q in Z)
                G[JSON.stringify(Z[Q])] = Q
        }, {}],
        5: [function(t, e, i) {
            var a = t(4),
                n = function() {
                    return new d
                };
            for (var o in a) {
                n[o + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), a[t](e)
                    }
                }(o);
                var r = /(\w+)2(\w+)/.exec(o),
                    l = r[1],
                    s = r[2];
                n[l] = n[l] || {}, n[l][s] = n[o] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = a[t](e);
                        if ("string" == typeof i || void 0 === i)
                            return i;
                        for (var n = 0; n < i.length; n++)
                            i[n] = Math.round(i[n]);
                        return i
                    }
                }(o)
            }
            var d = function() {
                this.convs = {}
            };
            d.prototype.routeSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, d.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, d.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        a = this.convs[i];
                    e = n[i][t](a), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                d.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = n
        }, {
            4: 4
        }],
        6: [function(t, e, i) {
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        7: [function(t, e, i) {
            var a = t(28)();
            t(26)(a), t(22)(a), t(25)(a), t(21)(a), t(23)(a), t(24)(a), t(29)(a), t(33)(a), t(31)(a), t(34)(a), t(32)(a), t(35)(a), t(30)(a), t(27)(a), t(36)(a), t(37)(a), t(38)(a), t(39)(a), t(40)(a), t(43)(a), t(41)(a), t(42)(a), t(44)(a), t(45)(a), t(46)(a), t(15)(a), t(16)(a), t(17)(a), t(18)(a), t(19)(a), t(20)(a), t(8)(a), t(9)(a), t(10)(a), t(11)(a), t(12)(a), t(13)(a), t(14)(a), window.Chart = e.exports = a
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            8: 8,
            9: 9
        }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, i) {
                    return i.type = "bar", new t(e, i)
                }
            }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, i) {
                    return i.type = "bubble", new t(e, i)
                }
            }
        }, {}],
        10: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, i) {
                    return i.type = "doughnut", new t(e, i)
                }
            }
        }, {}],
        11: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, i) {
                    return i.type = "line", new t(e, i)
                }
            }
        }, {}],
        12: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, i) {
                    return i.type = "polarArea", new t(e, i)
                }
            }
        }, {}],
        13: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, i) {
                    return i.type = "radar", new t(e, i)
                }
            }
        }, {}],
        14: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-1"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                };
                t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function(e, i) {
                    return i.type = "scatter", new t(e, i)
                }
            }
        }, {}],
        15: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                }, t.controllers.bar = t.DatasetController.extend({
                    dataElementType: t.elements.Rectangle,
                    initialize: function(e, i) {
                        t.DatasetController.prototype.initialize.call(this, e, i), this.getMeta().bar = !0
                    },
                    getBarCount: function() {
                        var t = this,
                            i = 0;
                        return e.each(t.chart.data.datasets, function(e, a) {
                            var n = t.chart.getDatasetMeta(a);
                            n.bar && t.chart.isDatasetVisible(a) && ++i
                        }, t), i
                    },
                    update: function(t) {
                        var i = this;
                        e.each(i.getMeta().data, function(e, a) {
                            i.updateElement(e, a, t)
                        }, i)
                    },
                    updateElement: function(t, i, a) {
                        var n = this,
                            o = n.getMeta(),
                            r = n.getScaleForId(o.xAxisID),
                            l = n.getScaleForId(o.yAxisID),
                            s = l.getBasePixel(),
                            d = n.chart.options.elements.rectangle,
                            u = t.custom || {},
                            c = n.getDataset();
                        t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = i;
                        var h = n.getRuler(i);
                        t._model = {
                            x: n.calculateBarX(i, n.index, h),
                            y: a ? s : n.calculateBarY(i, n.index),
                            label: n.chart.data.labels[i],
                            datasetLabel: c.label,
                            base: a ? s : n.calculateBarBase(n.index, i),
                            width: n.calculateBarWidth(h),
                            backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, i, d.backgroundColor),
                            borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                            borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, i, d.borderColor),
                            borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, i, d.borderWidth)
                        }, t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.yAxisID),
                            o = 0;
                        if (n.options.stacked) {
                            for (var r = i.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; d < t; d++) {
                                var u = l[d],
                                    c = r.getDatasetMeta(d);
                                if (c.bar && c.yAxisID === n.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += s < 0 ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return n.getPixelForValue(o)
                        }
                        return n.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e,
                            i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.xAxisID),
                            o = i.getBarCount();
                        e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
                        var r = e * n.options.categoryPercentage,
                            l = (e - e * n.options.categoryPercentage) / 2,
                            s = r / o;
                        if (n.ticks.length !== i.chart.data.labels.length) {
                            var d = n.ticks.length / i.chart.data.labels.length;
                            s *= d
                        }
                        var u = s * n.options.barPercentage,
                            c = s - s * n.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickWidth: e,
                            categoryWidth: r,
                            categorySpacing: l,
                            fullBarWidth: s,
                            barWidth: u,
                            barSpacing: c
                        }
                    },
                    calculateBarWidth: function(t) {
                        var e = this.getScaleForId(this.getMeta().xAxisID);
                        return e.options.barThickness ? e.options.barThickness : e.options.stacked ? t.categoryWidth : t.barWidth
                    },
                    getBarIndex: function(t) {
                        var e,
                            i,
                            a = 0;
                        for (i = 0; i < t; ++i)
                            e = this.chart.getDatasetMeta(i), e.bar && this.chart.isDatasetVisible(i) && ++a;
                        return a
                    },
                    calculateBarX: function(t, e, i) {
                        var a = this,
                            n = a.getMeta(),
                            o = a.getScaleForId(n.xAxisID),
                            r = a.getBarIndex(e),
                            l = o.getPixelForValue(null, t, e, a.chart.isCombo);
                        return l -= a.chart.isCombo ? i.tickWidth / 2 : 0, o.options.stacked ? l + i.categoryWidth / 2 + i.categorySpacing : l + i.barWidth / 2 + i.categorySpacing + i.barWidth * r + i.barSpacing / 2 + i.barSpacing * r
                    },
                    calculateBarY: function(t, e) {
                        var i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.yAxisID),
                            o = Number(i.getDataset().data[t]);
                        if (n.options.stacked) {
                            for (var r = 0, l = 0, s = 0; s < e; s++) {
                                var d = i.chart.data.datasets[s],
                                    u = i.chart.getDatasetMeta(s);
                                if (u.bar && u.yAxisID === n.id && i.chart.isDatasetVisible(s)) {
                                    var c = Number(d.data[t]);
                                    c < 0 ? l += c || 0 : r += c || 0
                                }
                            }
                            return o < 0 ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o)
                        }
                        return n.getPixelForValue(o)
                    },
                    draw: function(t) {
                        var e,
                            i,
                            a = this,
                            n = t || 1,
                            o = a.getMeta().data,
                            r = a.getDataset();
                        for (e = 0, i = o.length; e < i; ++e) {
                            var l = r.data[e];
                            null === l || void 0 === l || isNaN(l) || o[e].transition(n).draw()
                        }
                    },
                    setHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            a = t._index,
                            n = t.custom || {},
                            o = t._model;
                        o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.hoverBackgroundColor, a, e.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(i.hoverBorderColor, a, e.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(i.hoverBorderWidth, a, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            a = t._index,
                            n = t.custom || {},
                            o = t._model,
                            r = this.chart.options.elements.rectangle;
                        o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(i.backgroundColor, a, r.backgroundColor), o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(i.borderColor, a, r.borderColor), o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(i.borderWidth, a, r.borderWidth)
                    }
                }), t.defaults.horizontalBar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(t, e) {
                                var i = "";
                                return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                            },
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "";
                                return i + ": " + t.xLabel
                            }
                        }
                    }
                }, t.controllers.horizontalBar = t.controllers.bar.extend({
                    updateElement: function(t, i, a) {
                        var n = this,
                            o = n.getMeta(),
                            r = n.getScaleForId(o.xAxisID),
                            l = n.getScaleForId(o.yAxisID),
                            s = r.getBasePixel(),
                            d = t.custom || {},
                            u = n.getDataset(),
                            c = n.chart.options.elements.rectangle;
                        t._xScale = r, t._yScale = l, t._datasetIndex = n.index, t._index = i;
                        var h = n.getRuler(i);
                        t._model = {
                            x: a ? s : n.calculateBarX(i, n.index),
                            y: n.calculateBarY(i, n.index, h),
                            label: n.chart.data.labels[i],
                            datasetLabel: u.label,
                            base: a ? s : n.calculateBarBase(n.index, i),
                            height: n.calculateBarHeight(h),
                            backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, i, c.backgroundColor),
                            borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                            borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, i, c.borderColor),
                            borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, i, c.borderWidth)
                        }, t.draw = function() {
                            function t(t) {
                                return s[(u + t) % 4]
                            }
                            var e = this._chart.ctx,
                                i = this._view,
                                a = i.height / 2,
                                n = i.y - a,
                                o = i.y + a,
                                r = i.base - (i.base - i.x),
                                l = i.borderWidth / 2;
                            i.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                            var s = [[i.base, o], [i.base, n], [r, n], [r, o]],
                                d = ["bottom", "left", "top", "right"],
                                u = d.indexOf(i.borderSkipped, 0);
                            u === -1 && (u = 0), e.moveTo.apply(e, t(0));
                            for (var c = 1; c < 4; c++)
                                e.lineTo.apply(e, t(c));
                            e.fill(), i.borderWidth && e.stroke()
                        }, t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.xAxisID),
                            o = 0;
                        if (n.options.stacked) {
                            for (var r = i.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; d < t; d++) {
                                var u = l[d],
                                    c = r.getDatasetMeta(d);
                                if (c.bar && c.xAxisID === n.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += s < 0 ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return n.getPixelForValue(o)
                        }
                        return n.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e,
                            i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.yAxisID),
                            o = i.getBarCount();
                        e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
                        var r = e * n.options.categoryPercentage,
                            l = (e - e * n.options.categoryPercentage) / 2,
                            s = r / o;
                        if (n.ticks.length !== i.chart.data.labels.length) {
                            var d = n.ticks.length / i.chart.data.labels.length;
                            s *= d
                        }
                        var u = s * n.options.barPercentage,
                            c = s - s * n.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickHeight: e,
                            categoryHeight: r,
                            categorySpacing: l,
                            fullBarHeight: s,
                            barHeight: u,
                            barSpacing: c
                        }
                    },
                    calculateBarHeight: function(t) {
                        var e = this,
                            i = e.getScaleForId(e.getMeta().yAxisID);
                        return i.options.barThickness ? i.options.barThickness : i.options.stacked ? t.categoryHeight : t.barHeight
                    },
                    calculateBarX: function(t, e) {
                        var i = this,
                            a = i.getMeta(),
                            n = i.getScaleForId(a.xAxisID),
                            o = Number(i.getDataset().data[t]);
                        if (n.options.stacked) {
                            for (var r = 0, l = 0, s = 0; s < e; s++) {
                                var d = i.chart.data.datasets[s],
                                    u = i.chart.getDatasetMeta(s);
                                if (u.bar && u.xAxisID === n.id && i.chart.isDatasetVisible(s)) {
                                    var c = Number(d.data[t]);
                                    c < 0 ? l += c || 0 : r += c || 0
                                }
                            }
                            return o < 0 ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o)
                        }
                        return n.getPixelForValue(o)
                    },
                    calculateBarY: function(t, e, i) {
                        var a = this,
                            n = a.getMeta(),
                            o = a.getScaleForId(n.yAxisID),
                            r = a.getBarIndex(e),
                            l = o.getPixelForValue(null, t, e, a.chart.isCombo);
                        return l -= a.chart.isCombo ? i.tickHeight / 2 : 0, o.options.stacked ? l + i.categoryHeight / 2 + i.categorySpacing : l + i.barHeight / 2 + i.categorySpacing + i.barHeight * r + i.barSpacing / 2 + i.barSpacing * r
                    }
                })
            }
        }, {}],
        16: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var i = e.datasets[t.datasetIndex].label || "",
                                    a = e.datasets[t.datasetIndex].data[t.index];
                                return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + a.r + ")"
                            }
                        }
                    }
                }, t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var i = this,
                            a = i.getMeta(),
                            n = a.data;
                        e.each(n, function(e, a) {
                            i.updateElement(e, a, t)
                        })
                    },
                    updateElement: function(i, a, n) {
                        var o = this,
                            r = o.getMeta(),
                            l = o.getScaleForId(r.xAxisID),
                            s = o.getScaleForId(r.yAxisID),
                            d = i.custom || {},
                            u = o.getDataset(),
                            c = u.data[a],
                            h = o.chart.options.elements.point,
                            f = o.index;
                        e.extend(i, {
                            _xScale: l,
                            _yScale: s,
                            _datasetIndex: f,
                            _index: a,
                            _model: {
                                x: n ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == typeof c ? c : NaN, a, f, o.chart.isCombo),
                                y: n ? s.getBasePixel() : s.getPixelForValue(c, a, f),
                                radius: n ? 0 : d.radius ? d.radius : o.getRadius(c),
                                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, a, h.hitRadius)
                            }
                        }), t.DatasetController.prototype.removeHoverStyle.call(o, i, h);
                        var g = i._model;
                        g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y), i.pivot()
                    },
                    getRadius: function(t) {
                        return t.r || this.chart.options.elements.point.radius
                    },
                    setHoverStyle: function(i) {
                        var a = this;
                        t.DatasetController.prototype.setHoverStyle.call(a, i);
                        var n = a.chart.data.datasets[i._datasetIndex],
                            o = i._index,
                            r = i.custom || {},
                            l = i._model;
                        l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, a.chart.options.elements.point.hoverRadius) + a.getRadius(n.data[o])
                    },
                    removeHoverStyle: function(e) {
                        var i = this;
                        t.DatasetController.prototype.removeHoverStyle.call(i, e, i.chart.options.elements.point);
                        var a = i.chart.data.datasets[e._datasetIndex].data[e._index],
                            n = e.custom || {},
                            o = e._model;
                        o.radius = n.radius ? n.radius : i.getRadius(a)
                    }
                })
            }
        }, {}],
        17: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults;
                i.doughnut = {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    aspectRatio: 1,
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var i = t.data,
                            a = i.datasets,
                            n = i.labels;
                        if (a.length)
                            for (var o = 0; o < a[0].data.length; ++o)
                                e.push('<li><span style="background-color:' + a[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var i = t.data;
                                return i.labels.length && i.datasets.length ? i.labels.map(function(a, n) {
                                    var o = t.getDatasetMeta(0),
                                        r = i.datasets[0],
                                        l = o.data[n],
                                        s = l && l.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        u = t.options.elements.arc,
                                        c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                                        h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                                        f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                                    return {
                                        text: a,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                        index: n
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i,
                                a,
                                n,
                                o = e.index,
                                r = this.chart;
                            for (i = 0, a = (r.data.datasets || []).length; i < a; ++i)
                                n = r.getDatasetMeta(i), n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
                            r.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: Math.PI * -.5,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, i) {
                                var a = i.labels[t.index],
                                    n = ": " + i.datasets[t.datasetIndex].data[t.index];
                                return e.isArray(a) ? (a = a.slice(), a[0] += n) : a += n, a
                            }
                        }
                    }
                }, i.pie = e.clone(i.doughnut), e.extend(i.pie, {
                    cutoutPercentage: 0
                }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, i = 0; i < t; ++i)
                            this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function(t) {
                        var i = this,
                            a = i.chart,
                            n = a.chartArea,
                            o = a.options,
                            r = o.elements.arc,
                            l = n.right - n.left - r.borderWidth,
                            s = n.bottom - n.top - r.borderWidth,
                            d = Math.min(l, s),
                            u = {
                                x: 0,
                                y: 0
                            },
                            c = i.getMeta(),
                            h = o.cutoutPercentage,
                            f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var g = o.rotation % (2 * Math.PI);
                            g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                            var p = g + f,
                                m = {
                                    x: Math.cos(g),
                                    y: Math.sin(g)
                                },
                                b = {
                                    x: Math.cos(p),
                                    y: Math.sin(p)
                                },
                                v = g <= 0 && 0 <= p || g <= 2 * Math.PI && 2 * Math.PI <= p,
                                x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                                k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                S = h / 100,
                                w = {
                                    x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)),
                                    y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S))
                                },
                                M = {
                                    x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)),
                                    y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S))
                                },
                                C = {
                                    width: .5 * (M.x - w.x),
                                    height: .5 * (M.y - w.y)
                                };
                            d = Math.min(l / C.width, s / C.height), u = {
                                x: (M.x + w.x) * -.5,
                                y: (M.y + w.y) * -.5
                            }
                        }
                        a.borderWidth = i.getMaxBorderWidth(c.data), a.outerRadius = Math.max((d - a.borderWidth) / 2, 0), a.innerRadius = Math.max(h ? a.outerRadius / 100 * h : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, c.total = i.calculateTotal(), i.outerRadius = a.outerRadius - a.radiusLength * i.getRingIndex(i.index), i.innerRadius = i.outerRadius - a.radiusLength, e.each(c.data, function(e, a) {
                            i.updateElement(e, a, t)
                        })
                    },
                    updateElement: function(t, i, a) {
                        var n = this,
                            o = n.chart,
                            r = o.chartArea,
                            l = o.options,
                            s = l.animation,
                            d = (r.left + r.right) / 2,
                            u = (r.top + r.bottom) / 2,
                            c = l.rotation,
                            h = l.rotation,
                            f = n.getDataset(),
                            g = a && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[i]) * (l.circumference / (2 * Math.PI)),
                            p = a && s.animateScale ? 0 : n.innerRadius,
                            m = a && s.animateScale ? 0 : n.outerRadius,
                            b = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: i,
                            _model: {
                                x: d + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: c,
                                endAngle: h,
                                circumference: g,
                                outerRadius: m,
                                innerRadius: p,
                                label: b(f.label, i, o.data.labels[i])
                            }
                        });
                        var v = t._model;
                        this.removeHoverStyle(t), a && s.animateRotate || (0 === i ? v.startAngle = l.rotation : v.startAngle = n.getMeta().data[i - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t,
                            i = this.getDataset(),
                            a = this.getMeta(),
                            n = 0;
                        return e.each(a.data, function(e, a) {
                            t = i.data[a], isNaN(t) || e.hidden || (n += Math.abs(t))
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, i, a = 0, n = this.index, o = t.length, r = 0; r < o; r++)
                            e = t[r]._model ? t[r]._model.borderWidth : 0, i = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0, a = e > a ? e : a, a = i > a ? i : a;
                        return a
                    }
                })
            }
        }, {}],
        18: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return i.getValueOrDefault(t.showLine, e.showLines)
                }
                var i = t.helpers;
                t.defaults.line = {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                }, t.controllers.line = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var a,
                            n,
                            o,
                            r = this,
                            l = r.getMeta(),
                            s = l.dataset,
                            d = l.data || [],
                            u = r.chart.options,
                            c = u.elements.line,
                            h = r.getScaleForId(l.yAxisID),
                            f = r.getDataset(),
                            g = e(f, u);
                        for (g && (o = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = d, s._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                            tension: o.tension ? o.tension : i.getValueOrDefault(f.lineTension, c.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                            fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill,
                            steppedLine: o.steppedLine ? o.steppedLine : i.getValueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : i.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
                            scaleTop: h.top,
                            scaleBottom: h.bottom,
                            scaleZero: h.getBasePixel()
                        }, s.pivot()), a = 0, n = d.length; a < n; ++a)
                            r.updateElement(d[a], a, t);
                        for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), a = 0, n = d.length; a < n; ++a)
                            d[a].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var a = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return o.backgroundColor ? a = o.backgroundColor : n.pointBackgroundColor ? a = i.getValueAtIndexOrDefault(n.pointBackgroundColor, e, a) : n.backgroundColor && (a = n.backgroundColor), a
                    },
                    getPointBorderColor: function(t, e) {
                        var a = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return o.borderColor ? a = o.borderColor : n.pointBorderColor ? a = i.getValueAtIndexOrDefault(n.pointBorderColor, e, a) : n.borderColor && (a = n.borderColor), a
                    },
                    getPointBorderWidth: function(t, e) {
                        var a = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            o = t.custom || {};
                        return o.borderWidth ? a = o.borderWidth : n.pointBorderWidth ? a = i.getValueAtIndexOrDefault(n.pointBorderWidth, e, a) : n.borderWidth && (a = n.borderWidth), a
                    },
                    updateElement: function(t, e, a) {
                        var n,
                            o,
                            r = this,
                            l = r.getMeta(),
                            s = t.custom || {},
                            d = r.getDataset(),
                            u = r.index,
                            c = d.data[e],
                            h = r.getScaleForId(l.yAxisID),
                            f = r.getScaleForId(l.xAxisID),
                            g = r.chart.options.elements.point,
                            p = r.chart.data.labels || [],
                            m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius), void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius), n = f.getPixelForValue("object" == typeof c ? c : NaN, e, u, m), o = a ? h.getBasePixel() : r.calculatePointY(c, e, u), t._xScale = f, t._yScale = h, t._datasetIndex = u, t._index = e, t._model = {
                            x: n,
                            y: o,
                            skip: s.skip || isNaN(n) || isNaN(o),
                            radius: s.radius || i.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
                            pointStyle: s.pointStyle || i.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: l.dataset._model ? l.dataset._model.tension : 0,
                            steppedLine: !!l.dataset._model && l.dataset._model.steppedLine,
                            hitRadius: s.hitRadius || i.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, i) {
                        var a,
                            n,
                            o,
                            r = this,
                            l = r.chart,
                            s = r.getMeta(),
                            d = r.getScaleForId(s.yAxisID),
                            u = 0,
                            c = 0;
                        if (d.options.stacked) {
                            for (a = 0; a < i; a++)
                                if (n = l.data.datasets[a], o = l.getDatasetMeta(a), "line" === o.type && o.yAxisID === d.id && l.isDatasetVisible(a)) {
                                    var h = Number(d.getRightValue(n.data[e]));
                                    h < 0 ? c += h || 0 : u += h || 0
                                }
                            var f = Number(d.getRightValue(t));
                            return f < 0 ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f)
                        }
                        return d.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        function t(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        var e,
                            a,
                            n,
                            o,
                            r,
                            l = this,
                            s = l.getMeta(),
                            d = l.chart.chartArea,
                            u = s.data || [];
                        if (s.dataset._model.spanGaps && (u = u.filter(function(t) {
                            return !t._model.skip
                        })), "monotone" === s.dataset._model.cubicInterpolationMode)
                            i.splineCurveMonotone(u);
                        else
                            for (e = 0, a = u.length; e < a; ++e)
                                n = u[e], o = n._model, r = i.splineCurve(i.previousItem(u, e)._model, o, i.nextItem(u, e)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
                        if (l.chart.options.elements.line.capBezierPoints)
                            for (e = 0, a = u.length; e < a; ++e)
                                o = u[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, d.left, d.right), o.controlPointPreviousY = t(o.controlPointPreviousY, d.top, d.bottom), o.controlPointNextX = t(o.controlPointNextX, d.left, d.right), o.controlPointNextY = t(o.controlPointNextY, d.top, d.bottom)
                    },
                    draw: function(t) {
                        var i,
                            a,
                            n = this,
                            o = n.getMeta(),
                            r = o.data || [],
                            l = t || 1;
                        for (i = 0, a = r.length; i < a; ++i)
                            r[i].transition(l);
                        for (e(n.getDataset(), n.chart.options) && o.dataset.transition(l).draw(), i = 0, a = r.length; i < a; ++i)
                            r[i].draw()
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            a = t._index,
                            n = t.custom || {},
                            o = t._model;
                        o.radius = n.hoverRadius || i.getValueAtIndexOrDefault(e.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), o.backgroundColor = n.hoverBackgroundColor || i.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, a, i.getHoverColor(o.backgroundColor)), o.borderColor = n.hoverBorderColor || i.getValueAtIndexOrDefault(e.pointHoverBorderColor, a, i.getHoverColor(o.borderColor)), o.borderWidth = n.hoverBorderWidth || i.getValueAtIndexOrDefault(e.pointHoverBorderWidth, a, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            a = e.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            o = t.custom || {},
                            r = t._model;
                        void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), r.radius = o.radius || i.getValueAtIndexOrDefault(a.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        }, {}],
        19: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale: {
                        type: "radialLinear",
                        lineArc: !0,
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    aspectRatio: 1,
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var i = t.data,
                            a = i.datasets,
                            n = i.labels;
                        if (a.length)
                            for (var o = 0; o < a[0].data.length; ++o)
                                e.push('<li><span style="background-color:' + a[0].backgroundColor[o] + '"></span>'), n[o] && e.push(n[o]), e.push("</li>");
                        return e.push("</ul>"), e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var i = t.data;
                                return i.labels.length && i.datasets.length ? i.labels.map(function(a, n) {
                                    var o = t.getDatasetMeta(0),
                                        r = i.datasets[0],
                                        l = o.data[n],
                                        s = l.custom || {},
                                        d = e.getValueAtIndexOrDefault,
                                        u = t.options.elements.arc,
                                        c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor),
                                        h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor),
                                        f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                                    return {
                                        text: a,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                        index: n
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var i,
                                a,
                                n,
                                o = e.index,
                                r = this.chart;
                            for (i = 0, a = (r.data.datasets || []).length; i < a; ++i)
                                n = r.getDatasetMeta(i), n.data[o].hidden = !n.data[o].hidden;
                            r.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                }, t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    update: function(t) {
                        var i = this,
                            a = i.chart,
                            n = a.chartArea,
                            o = i.getMeta(),
                            r = a.options,
                            l = r.elements.arc,
                            s = Math.min(n.right - n.left, n.bottom - n.top);
                        a.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(r.cutoutPercentage ? a.outerRadius / 100 * r.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), i.outerRadius = a.outerRadius - a.radiusLength * i.index, i.innerRadius = i.outerRadius - a.radiusLength, o.count = i.countVisibleElements(), e.each(o.data, function(e, a) {
                            i.updateElement(e, a, t)
                        })
                    },
                    updateElement: function(t, i, a) {
                        for (var n = this, o = n.chart, r = n.getDataset(), l = o.options, s = l.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[i]), f = d.xCenter, g = d.yCenter, p = 0, m = n.getMeta(), b = 0; b < i; ++b)
                            isNaN(r.data[b]) || m.data[b].hidden || ++p;
                        var v = l.startAngle,
                            x = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[i]),
                            y = v + h * p,
                            k = y + (t.hidden ? 0 : h),
                            S = s.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[i]);
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: i,
                            _scale: d,
                            _model: {
                                x: f,
                                y: g,
                                innerRadius: 0,
                                outerRadius: a ? S : x,
                                startAngle: a && s.animateRotate ? v : y,
                                endAngle: a && s.animateRotate ? v : k,
                                label: u(c, i, c[i])
                            }
                        }), n.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            i = this.getMeta(),
                            a = 0;
                        return e.each(i.data, function(e, i) {
                            isNaN(t.data[i]) || e.hidden || a++
                        }), a
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {}],
        20: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.radar = {
                    aspectRatio: 1,
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                }, t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    linkScales: e.noop,
                    update: function(t) {
                        var i = this,
                            a = i.getMeta(),
                            n = a.dataset,
                            o = a.data,
                            r = n.custom || {},
                            l = i.getDataset(),
                            s = i.chart.options.elements.line,
                            d = i.chart.scale;
                        void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(a.dataset, {
                            _datasetIndex: i.index,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor,
                                fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle,
                                scaleTop: d.top,
                                scaleBottom: d.bottom,
                                scaleZero: d.getBasePosition()
                            }
                        }), a.dataset.pivot(), e.each(o, function(e, a) {
                            i.updateElement(e, a, t)
                        }, i), i.updateBezierControlPoints()
                    },
                    updateElement: function(t, i, a) {
                        var n = this,
                            o = t.custom || {},
                            r = n.getDataset(),
                            l = n.chart.scale,
                            s = n.chart.options.elements.point,
                            d = l.getPointPositionForValue(i, r.data[i]);
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: i,
                            _scale: l,
                            _model: {
                                x: a ? l.xCenter : d.x,
                                y: a ? l.yCenter : d.y,
                                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, n.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, i, s.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, i, s.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, i, s.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, i, s.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, i, s.pointStyle),
                                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, i, s.hitRadius)
                            }
                        }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            i = this.getMeta();
                        e.each(i.data, function(a, n) {
                            var o = a._model,
                                r = e.splineCurve(e.previousItem(i.data, n, !0)._model, o, e.nextItem(i.data, n, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), a.pivot()
                        })
                    },
                    draw: function(t) {
                        var i = this.getMeta(),
                            a = t || 1;
                        e.each(i.data, function(t) {
                            t.transition(a)
                        }), i.dataset.transition(a).draw(), e.each(i.data, function(t) {
                            t.draw()
                        })
                    },
                    setHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            a = t.custom || {},
                            n = t._index,
                            o = t._model;
                        o.radius = a.hoverRadius ? a.hoverRadius : e.getValueAtIndexOrDefault(i.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), o.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(i.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(i.pointHoverBorderWidth, n, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            a = t.custom || {},
                            n = t._index,
                            o = t._model,
                            r = this.chart.options.elements.point;
                        o.radius = a.radius ? a.radius : e.getValueAtIndexOrDefault(i.radius, n, r.radius), o.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(i.pointBackgroundColor, n, r.backgroundColor), o.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(i.pointBorderColor, n, r.borderColor), o.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(i.pointBorderWidth, n, r.borderWidth)
                    }
                })
            }
        }, {}],
        21: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: e.noop,
                    onComplete: e.noop
                }, t.Animation = t.Element.extend({
                    currentStep: null,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, i, a) {
                        var n = this;
                        a || (t.animating = !0);
                        for (var o = 0; o < n.animations.length; ++o)
                            if (n.animations[o].chartInstance === t)
                                return void (n.animations[o].animationObject = e);
                        n.animations.push({
                            chartInstance: t,
                            animationObject: e
                        }), 1 === n.animations.length && n.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var i = e.findIndex(this.animations, function(e) {
                            return e.chartInstance === t
                        });
                        i !== -1 && (this.animations.splice(i, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            i = 0;
                        t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1);
                        for (var a = 0; a < t.animations.length;)
                            null === t.animations[a].animationObject.currentStep && (t.animations[a].animationObject.currentStep = 0), t.animations[a].animationObject.currentStep += 1 + i, t.animations[a].animationObject.currentStep > t.animations[a].animationObject.numSteps && (t.animations[a].animationObject.currentStep = t.animations[a].animationObject.numSteps), t.animations[a].animationObject.render(t.animations[a].chartInstance, t.animations[a].animationObject), t.animations[a].animationObject.onAnimationProgress && t.animations[a].animationObject.onAnimationProgress.call && t.animations[a].animationObject.onAnimationProgress.call(t.animations[a].chartInstance, t.animations[a]), t.animations[a].animationObject.currentStep === t.animations[a].animationObject.numSteps ? (t.animations[a].animationObject.onAnimationComplete && t.animations[a].animationObject.onAnimationComplete.call && t.animations[a].animationObject.onAnimationComplete.call(t.animations[a].chartInstance, t.animations[a]), t.animations[a].chartInstance.animating = !1, t.animations.splice(a, 1)) : ++a;
                        var n = Date.now(),
                            o = (n - e) / t.frameDuration;
                        t.dropFrames += o, t.animations.length > 0 && t.requestAnimationFrame()
                    }
                }
            }
        }, {}],
        22: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.canvasHelpers = {};
                e.drawPoint = function(t, e, i, a, n) {
                    var o,
                        r,
                        l,
                        s,
                        d,
                        u;
                    if ("object" == typeof e && (o = e.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o))
                        return void t.drawImage(e, a - e.width / 2, n - e.height / 2);
                    if (!(isNaN(i) || i <= 0)) {
                        switch (e) {
                        default:
                            t.beginPath(), t.arc(a, n, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                            break;
                        case "triangle":
                            t.beginPath(), r = 3 * i / Math.sqrt(3), d = r * Math.sqrt(3) / 2, t.moveTo(a - r / 2, n + d / 3), t.lineTo(a + r / 2, n + d / 3), t.lineTo(a, n - 2 * d / 3), t.closePath(), t.fill();
                            break;
                        case "rect":
                            u = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(a - u, n - u, 2 * u, 2 * u), t.strokeRect(a - u, n - u, 2 * u, 2 * u);
                            break;
                        case "rectRot":
                            u = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(a - u, n), t.lineTo(a, n + u), t.lineTo(a + u, n), t.lineTo(a, n - u), t.closePath(), t.fill();
                            break;
                        case "cross":
                            t.beginPath(), t.moveTo(a, n + i), t.lineTo(a, n - i), t.moveTo(a - i, n), t.lineTo(a + i, n), t.closePath();
                            break;
                        case "crossRot":
                            t.beginPath(), l = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(a - l, n - s), t.lineTo(a + l, n + s), t.moveTo(a - l, n + s), t.lineTo(a + l, n - s), t.closePath();
                            break;
                        case "star":
                            t.beginPath(), t.moveTo(a, n + i), t.lineTo(a, n - i), t.moveTo(a - i, n), t.lineTo(a + i, n), l = Math.cos(Math.PI / 4) * i, s = Math.sin(Math.PI / 4) * i, t.moveTo(a - l, n - s), t.lineTo(a + l, n + s), t.moveTo(a - l, n + s), t.lineTo(a + l, n - s), t.closePath();
                            break;
                        case "line":
                            t.beginPath(), t.moveTo(a - i, n), t.lineTo(a + i, n), t.closePath();
                            break;
                        case "dash":
                            t.beginPath(), t.moveTo(a, n), t.lineTo(a + i, n), t.closePath()
                        }
                        t.stroke()
                    }
                }
            }
        }, {}],
        23: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i = r.getStyle(t, e),
                        a = i && i.match(/(\d+)px/);
                    return a ? Number(a[1]) : void 0
                }
                function i(t, i) {
                    var a = t.style,
                        n = t.getAttribute("height"),
                        o = t.getAttribute("width");
                    if (t._chartjs = {
                        initial: {
                            height: n,
                            width: o,
                            style: {
                                display: a.display,
                                height: a.height,
                                width: a.width
                            }
                        }
                    }, a.display = a.display || "block", null === o || "" === o) {
                        var r = e(t, "width");
                        void 0 !== r && (t.width = r)
                    }
                    if (null === n || "" === n)
                        if ("" === t.style.height)
                            t.height = t.width / (i.options.aspectRatio || 2);
                        else {
                            var l = e(t, "height");
                            void 0 !== r && (t.height = l)
                        }
                    return t
                }
                function a(t) {
                    if (t._chartjs) {
                        var e = t._chartjs.initial;
                        ["height", "width"].forEach(function(i) {
                            var a = e[i];
                            void 0 === a || null === a ? t.removeAttribute(i) : t.setAttribute(i, a)
                        }), r.each(e.style || {}, function(e, i) {
                            t.style[i] = e
                        }), t.width = t.width, delete t._chartjs
                    }
                }
                function n(t, e) {
                    if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t instanceof HTMLCanvasElement) {
                        var a = t.getContext && t.getContext("2d");
                        if (a instanceof CanvasRenderingContext2D)
                            return i(t, e), a
                    }
                    return null
                }
                function o(e) {
                    e = e || {};
                    var i = e.data = e.data || {};
                    return i.datasets = i.datasets || [], i.labels = i.labels || [], e.options = r.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e
                }
                var r = t.helpers;
                t.types = {}, t.instances = {}, t.controllers = {}, t.Controller = function(e, i, a) {
                    var l = this;
                    i = o(i);
                    var s = n(e, i),
                        d = s && s.canvas,
                        u = d && d.height,
                        c = d && d.width;
                    return a.ctx = s, a.canvas = d, a.config = i, a.width = c, a.height = u, a.aspectRatio = u ? c / u : null, l.id = r.uid(), l.chart = a, l.config = i, l.options = i.options, l._bufferedRender = !1, t.instances[l.id] = l, Object.defineProperty(l, "data", {
                        get: function() {
                            return l.config.data
                        }
                    }), s && d ? (r.retinaScale(a), l.options.responsive && (r.addResizeListener(d.parentNode, function() {
                        l.resize()
                    }), l.resize(!0)), l.initialize(), l) : (console.error("Failed to create chart: can't acquire context from the given item"), l)
                }, r.extend(t.Controller.prototype, {
                    initialize: function() {
                        var e = this;
                        return t.plugins.notify("beforeInit", [e]), e.bindEvents(), e.ensureScalesHaveIDs(), e.buildOrUpdateControllers(), e.buildScales(), e.updateLayout(), e.resetElements(), e.initToolTip(), e.update(), t.plugins.notify("afterInit", [e]), e
                    },
                    clear: function() {
                        return r.clear(this.chart), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(e) {
                        var i = this,
                            a = i.chart,
                            n = i.options,
                            o = a.canvas,
                            l = n.maintainAspectRatio && a.aspectRatio || null,
                            s = Math.floor(r.getMaximumWidth(o)),
                            d = Math.floor(l ? s / l : r.getMaximumHeight(o));
                        if (a.width !== s || a.height !== d) {
                            o.width = a.width = s, o.height = a.height = d, o.style.width = s + "px", o.style.height = d + "px", r.retinaScale(a);
                            var u = {
                                width: s,
                                height: d
                            };
                            t.plugins.notify("resize", [i, u]), i.options.onResize && i.options.onResize(i, u), e || (i.stop(), i.update(i.options.responsiveAnimationDuration))
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        r.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), r.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildScales: function() {
                        var e = this,
                            i = e.options,
                            a = e.scales = {},
                            n = [];
                        i.scales && (n = n.concat((i.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category"
                            }
                        }), (i.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear"
                            }
                        }))), i.scale && n.push({
                            options: i.scale,
                            dtype: "radialLinear",
                            isDefault: !0
                        }), r.each(n, function(i) {
                            var n = i.options,
                                o = r.getValueOrDefault(n.type, i.dtype),
                                l = t.scaleService.getScaleConstructor(o);
                            if (l) {
                                var s = new l({
                                    id: n.id,
                                    options: n,
                                    ctx: e.chart.ctx,
                                    chart: e
                                });
                                a[s.id] = s, i.isDefault && (e.scale = s)
                            }
                        }), t.scaleService.addScalesToLayout(this)
                    },
                    updateLayout: function() {
                        t.layoutService.update(this, this.chart.width, this.chart.height)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this,
                            i = [],
                            a = [];
                        if (r.each(e.data.datasets, function(n, o) {
                            var r = e.getDatasetMeta(o);
                            r.type || (r.type = n.type || e.config.type), i.push(r.type), r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](e, o), a.push(r.controller))
                        }, e), i.length > 1)
                            for (var n = 1; n < i.length; n++)
                                if (i[n] !== i[n - 1]) {
                                    e.isCombo = !0;
                                    break
                                }
                        return a
                    },
                    resetElements: function() {
                        var t = this;
                        r.each(t.data.datasets, function(e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(e, i) {
                        var a = this;
                        t.plugins.notify("beforeUpdate", [a]), a.tooltip._data = a.data;
                        var n = a.buildOrUpdateControllers();
                        r.each(a.data.datasets, function(t, e) {
                            a.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, a), t.layoutService.update(a, a.chart.width, a.chart.height), t.plugins.notify("afterScaleUpdate", [a]), r.each(n, function(t) {
                            t.reset()
                        }), a.updateDatasets(), t.plugins.notify("afterUpdate", [a]), a._bufferedRender ? a._bufferedRequest = {
                            lazy: i,
                            duration: e
                        } : a.render(e, i)
                    },
                    updateDatasets: function() {
                        var e,
                            i,
                            a = this;
                        if (t.plugins.notify("beforeDatasetsUpdate", [a])) {
                            for (e = 0, i = a.data.datasets.length; e < i; ++e)
                                a.getDatasetMeta(e).controller.update();
                            t.plugins.notify("afterDatasetsUpdate", [a])
                        }
                    },
                    render: function(e, i) {
                        var a = this;
                        t.plugins.notify("beforeRender", [a]);
                        var n = a.options.animation;
                        if (n && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== n.duration)) {
                            var o = new t.Animation;
                            o.numSteps = (e || n.duration) / 16.66, o.easing = n.easing, o.render = function(t, e) {
                                var i = r.easingEffects[e.easing],
                                    a = e.currentStep / e.numSteps,
                                    n = i(a);
                                t.draw(n, a, e.currentStep)
                            }, o.onAnimationProgress = n.onProgress, o.onAnimationComplete = n.onComplete, t.animationService.addAnimation(a, o, e, i)
                        } else
                            a.draw(), n && n.onComplete && n.onComplete.call && n.onComplete.call(a);
                        return a
                    },
                    draw: function(e) {
                        var i = this,
                            a = e || 1;
                        i.clear(), t.plugins.notify("beforeDraw", [i, a]), r.each(i.boxes, function(t) {
                            t.draw(i.chartArea)
                        }, i), i.scale && i.scale.draw(), t.plugins.notify("beforeDatasetsDraw", [i, a]), r.each(i.data.datasets, function(t, a) {
                            i.isDatasetVisible(a) && i.getDatasetMeta(a).controller.draw(e)
                        }, i, !0), t.plugins.notify("afterDatasetsDraw", [i, a]), i.tooltip.transition(a).draw(), t.plugins.notify("afterDraw", [i, a])
                    },
                    getElementAtEvent: function(e) {
                        return t.Interaction.modes.single(this, e)
                    },
                    getElementsAtEvent: function(e) {
                        return t.Interaction.modes.label(this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(e) {
                        return t.Interaction.modes["x-axis"](this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(e, i, a) {
                        var n = t.Interaction.modes[i];
                        return "function" == typeof n ? n(this, e, a) : []
                    },
                    getDatasetAtEvent: function(e) {
                        return t.Interaction.modes.dataset(this, e)
                    },
                    getDatasetMeta: function(t) {
                        var e = this,
                            i = e.data.datasets[t];
                        i._meta || (i._meta = {});
                        var a = i._meta[e.id];
                        return a || (a = i._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), a
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e)
                            this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroy: function() {
                        var e,
                            i,
                            n,
                            o = this,
                            l = o.chart.canvas;
                        for (o.stop(), i = 0, n = o.data.datasets.length; i < n; ++i)
                            e = o.getDatasetMeta(i), e.controller && (e.controller.destroy(), e.controller = null);
                        l && (r.unbindEvents(o, o.events), r.removeResizeListener(l.parentNode), r.clear(o.chart), a(l), o.chart.canvas = null, o.chart.ctx = null), t.plugins.notify("destroy", [o]), delete t.instances[o.id]
                    },
                    toBase64Image: function() {
                        return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e.chart,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e), e.tooltip.initialize()
                    },
                    bindEvents: function() {
                        var t = this;
                        r.bindEvents(t, t.options.events, function(e) {
                            t.eventHandler(e)
                        })
                    },
                    updateHoverStyle: function(t, e, i) {
                        var a,
                            n,
                            o,
                            r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (n = 0, o = t.length; n < o; ++n)
                            a = t[n], a && this.getDatasetMeta(a._datasetIndex).controller[r](a)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            i = e.legend,
                            a = e.tooltip,
                            n = e.options.hover;
                        e._bufferedRender = !0, e._bufferedRequest = null;
                        var o = e.handleEvent(t);
                        o |= i && i.handleEvent(t), o |= a && a.handleEvent(t);
                        var r = e._bufferedRequest;
                        return r ? e.render(r.duration, r.lazy) : o && !e.animating && (e.stop(), e.render(n.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e.options || {},
                            a = i.hover,
                            n = !1;
                        return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, a.mode, a), a.onHover && a.onHover.call(e, e.active), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(e, t, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, a.mode, !1), e.active.length && a.mode && e.updateHoverStyle(e.active, a.mode, !0), n = !r.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, n
                    }
                })
            }
        }, {}],
        24: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [e]
                        }
                    }), void n.forEach(function(e) {
                        var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                            n = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments),
                                    o = n.apply(this, e);
                                return a.each(t._chartjs.listeners, function(t) {
                                    "function" == typeof t[i] && t[i].apply(t, e)
                                }), o
                            }
                        })
                    }))
                }
                function i(t, e) {
                    var i = t._chartjs;
                    if (i) {
                        var a = i.listeners,
                            o = a.indexOf(e);
                        o !== -1 && a.splice(o, 1), a.length > 0 || (n.forEach(function(e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                var a = t.helpers,
                    n = ["push", "pop", "shift", "splice", "unshift"];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, a.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        var i = this;
                        i.chart = t, i.index = e, i.linkScales(), i.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset();
                        null === e.xAxisID && (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && i(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this,
                            e = t.datasetElementType;
                        return e && new e({
                                _chart: t.chart.chart,
                                _datasetIndex: t.index
                            })
                    },
                    createMetaData: function(t) {
                        var e = this,
                            i = e.dataElementType;
                        return i && new i({
                                _chart: e.chart.chart,
                                _datasetIndex: e.index,
                                _index: t
                            })
                    },
                    addElements: function() {
                        var t,
                            e,
                            i = this,
                            a = i.getMeta(),
                            n = i.getDataset().data || [],
                            o = a.data;
                        for (t = 0, e = n.length; t < e; ++t)
                            o[t] = o[t] || i.createMetaData(t);
                        a.dataset = a.dataset || i.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            a = t.getDataset(),
                            n = a.data || (a.data = []);
                        t._data !== n && (t._data && i(t._data, t), e(n, t), t._data = n), t.resyncElements()
                    },
                    update: a.noop,
                    draw: function(t) {
                        var e,
                            i,
                            a = t || 1,
                            n = this.getMeta().data;
                        for (e = 0, i = n.length; e < i; ++e)
                            n[e].transition(a).draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            o = t.custom || {},
                            r = a.getValueAtIndexOrDefault,
                            l = t._model;
                        l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, n, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, n, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, n, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            o = a.getValueAtIndexOrDefault,
                            r = a.getHoverColor,
                            l = t._model;
                        l.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(l.backgroundColor)), l.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, i, r(l.borderColor)), l.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, i, l.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset().data,
                            a = e.data.length,
                            n = i.length;
                        n < a ? e.data.splice(n, a - n) : n > a && t.insertElements(a, n - a)
                    },
                    insertElements: function(t, e) {
                        for (var i = 0; i < e; ++i)
                            this.addElementAndReset(t + i)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = a.inherits
            }
        }, {}],
        25: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.elements = {}, t.Element = function(t) {
                    e.extend(this, t), this.initialize.apply(this, arguments)
                }, e.extend(t.Element.prototype, {
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this;
                        return t._view || (t._view = e.clone(t._model)), t._start = e.clone(t._view), t
                    },
                    transition: function(t) {
                        var i = this;
                        return i._view || (i._view = e.clone(i._model)), 1 === t ? (i._view = i._model, i._start = null, i) : (i._start || i.pivot(), e.each(i._model, function(a, n) {
                            if ("_" === n[0])
                                ;
                            else if (i._view.hasOwnProperty(n))
                                if (a === i._view[n])
                                    ;
                                else if ("string" == typeof a)
                                    try {
                                        var o = e.color(i._model[n]).mix(e.color(i._start[n]), t);
                                        i._view[n] = o.rgbString()
                                    } catch (r) {
                                        i._view[n] = a
                                    }
                                else if ("number" == typeof a) {
                                    var l = void 0 !== i._start[n] && isNaN(i._start[n]) === !1 ? i._start[n] : 0;
                                    i._view[n] = (i._model[n] - l) * t + l
                                } else
                                    i._view[n] = a;
                            else
                                "number" != typeof a || isNaN(i._view[n]) ? i._view[n] = a : i._view[n] = a * t
                        }, i), i)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                    }
                }), t.Element.extend = e.inherits
            }
        }, {}],
        26: [function(t, e, i) {
            "use strict";
            var a = t(3);
            e.exports = function(t) {
                function e(t, e, i) {
                    var a;
                    return "string" == typeof t ? (a = parseInt(t, 10), t.indexOf("%") !== -1 && (a = a / 100 * e.parentNode[i])) : a = t, a
                }
                function i(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }
                function n(t, a, n) {
                    var o = document.defaultView,
                        r = t.parentNode,
                        l = o.getComputedStyle(t)[a],
                        s = o.getComputedStyle(r)[a],
                        d = i(l),
                        u = i(s),
                        c = Number.POSITIVE_INFINITY;
                    return d || u ? Math.min(d ? e(l, t, n) : c, u ? e(s, r, n) : c) : "none"
                }
                var o = t.helpers = {};
                o.each = function(t, e, i, a) {
                    var n,
                        r;
                    if (o.isArray(t))
                        if (r = t.length, a)
                            for (n = r - 1; n >= 0; n--)
                                e.call(i, t[n], n);
                        else
                            for (n = 0; n < r; n++)
                                e.call(i, t[n], n);
                    else if ("object" == typeof t) {
                        var l = Object.keys(t);
                        for (r = l.length, n = 0; n < r; n++)
                            e.call(i, t[l[n]], l[n])
                    }
                }, o.clone = function(t) {
                    var e = {};
                    return o.each(t, function(t, i) {
                        o.isArray(t) ? e[i] = t.slice(0) : "object" == typeof t && null !== t ? e[i] = o.clone(t) : e[i] = t
                    }), e
                }, o.extend = function(t) {
                    for (var e = function(e, i) {
                            t[i] = e
                        }, i = 1, a = arguments.length; i < a; i++)
                        o.each(arguments[i], e);
                    return t
                }, o.configMerge = function(e) {
                    var i = o.clone(e);
                    return o.each(Array.prototype.slice.call(arguments, 1), function(e) {
                        o.each(e, function(e, a) {
                            var n = i.hasOwnProperty(a),
                                r = n ? i[a] : {};
                            "scales" === a ? i[a] = o.scaleMerge(r, e) : "scale" === a ? i[a] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !n || "object" != typeof r || o.isArray(r) || null === r || "object" != typeof e || o.isArray(e) ? i[a] = e : i[a] = o.configMerge(r, e)
                        })
                    }), i
                }, o.scaleMerge = function(e, i) {
                    var a = o.clone(e);
                    return o.each(i, function(e, i) {
                        "xAxes" === i || "yAxes" === i ? a.hasOwnProperty(i) ? o.each(e, function(e, n) {
                            var r = o.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear"),
                                l = t.scaleService.getScaleDefaults(r);
                            n >= a[i].length || !a[i][n].type ? a[i].push(o.configMerge(l, e)) : e.type && e.type !== a[i][n].type ? a[i][n] = o.configMerge(a[i][n], l, e) : a[i][n] = o.configMerge(a[i][n], e)
                        }) : (a[i] = [], o.each(e, function(e) {
                            var n = o.getValueOrDefault(e.type, "xAxes" === i ? "category" : "linear");
                            a[i].push(o.configMerge(t.scaleService.getScaleDefaults(n), e))
                        })) : a.hasOwnProperty(i) && "object" == typeof a[i] && null !== a[i] && "object" == typeof e ? a[i] = o.configMerge(a[i], e) : a[i] = e
                    }), a
                }, o.getValueAtIndexOrDefault = function(t, e, i) {
                    return void 0 === t || null === t ? i : o.isArray(t) ? e < t.length ? t[e] : i : t
                }, o.getValueOrDefault = function(t, e) {
                    return void 0 === t ? e : t
                }, o.indexOf = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                } : function(t, e) {
                    for (var i = 0, a = t.length; i < a; ++i)
                        if (t[i] === e)
                            return i;
                    return -1
                }, o.where = function(t, e) {
                    if (o.isArray(t) && Array.prototype.filter)
                        return t.filter(e);
                    var i = [];
                    return o.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, o.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                    return t.findIndex(e, i)
                } : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var a = 0, n = t.length; a < n; ++a)
                        if (e.call(i, t[a], a, t))
                            return a;
                    return -1
                }, o.findNextWhere = function(t, e, i) {
                    void 0 !== i && null !== i || (i = -1);
                    for (var a = i + 1; a < t.length; a++) {
                        var n = t[a];
                        if (e(n))
                            return n
                    }
                }, o.findPreviousWhere = function(t, e, i) {
                    void 0 !== i && null !== i || (i = t.length);
                    for (var a = i - 1; a >= 0; a--) {
                        var n = t[a];
                        if (e(n))
                            return n
                    }
                }, o.inherits = function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        a = function() {
                            this.constructor = i
                        };
                    return a.prototype = e.prototype, i.prototype = new a, i.extend = o.inherits, t && o.extend(i.prototype, t), i.__super__ = e.prototype, i
                }, o.noop = function() {}, o.uid = function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(), o.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function(t, e, i) {
                    return Math.abs(t - e) < i
                }, o.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                }, o.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    return Math.log(t) / Math.LN10
                }, o.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        a = e.y - t.y,
                        n = Math.sqrt(i * i + a * a),
                        o = Math.atan2(a, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: n
                    }
                }, o.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, o.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }, o.splineCurve = function(t, e, i, a) {
                    var n = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        l = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)),
                        s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        d = l / (l + s),
                        u = s / (l + s);
                    d = isNaN(d) ? 0 : d, u = isNaN(u) ? 0 : u;
                    var c = a * d,
                        h = a * u;
                    return {
                        previous: {
                            x: o.x - c * (r.x - n.x),
                            y: o.y - c * (r.y - n.y)
                        },
                        next: {
                            x: o.x + h * (r.x - n.x),
                            y: o.y + h * (r.y - n.y)
                        }
                    }
                }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
                    var e,
                        i,
                        a,
                        n,
                        r = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        l = r.length;
                    for (e = 0; e < l; ++e)
                        a = r[e], a.model.skip || (i = e > 0 ? r[e - 1] : null, n = e < l - 1 ? r[e + 1] : null, n && !n.model.skip && (a.deltaK = (n.model.y - a.model.y) / (n.model.x - a.model.x)), !i || i.model.skip ? a.mK = a.deltaK : !n || n.model.skip ? a.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(a.deltaK) ? a.mK = 0 : a.mK = (i.deltaK + a.deltaK) / 2);
                    var s,
                        d,
                        u,
                        c;
                    for (e = 0; e < l - 1; ++e)
                        a = r[e], n = r[e + 1], a.model.skip || n.model.skip || (o.almostEquals(a.deltaK, 0, this.EPSILON) ? a.mK = n.mK = 0 : (s = a.mK / a.deltaK, d = n.mK / a.deltaK, c = Math.pow(s, 2) + Math.pow(d, 2), c <= 9 || (u = 3 / Math.sqrt(c), a.mK = s * u * a.deltaK, n.mK = d * u * a.deltaK)));
                    var h;
                    for (e = 0; e < l; ++e)
                        a = r[e], a.model.skip || (i = e > 0 ? r[e - 1] : null, n = e < l - 1 ? r[e + 1] : null, i && !i.model.skip && (h = (a.model.x - i.model.x) / 3, a.model.controlPointPreviousX = a.model.x - h, a.model.controlPointPreviousY = a.model.y - h * a.mK), n && !n.model.skip && (h = (n.model.x - a.model.x) / 3, a.model.controlPointNextX = a.model.x + h, a.model.controlPointNextY = a.model.y + h * a.mK))
                }, o.nextItem = function(t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function(t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, o.niceNum = function(t, e) {
                    var i,
                        a = Math.floor(o.log10(t)),
                        n = t / Math.pow(10, a);
                    return i = e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10, i * Math.pow(10, a)
                };
                var r = o.easingEffects = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -1 * t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return 1 * (t /= 1) * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t / 1) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            a = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            a = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            a = 1;
                        return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), t < 1 ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - r.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                    }
                };
                o.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                            return window.setTimeout(t, 1e3 / 60)
                        }
                }(), o.cancelAnimFrame = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                            return window.clearTimeout(t, 1e3 / 60)
                        }
                }(), o.getRelativePosition = function(t, e) {
                    var i,
                        a,
                        n = t.originalEvent || t,
                        r = t.currentTarget || t.srcElement,
                        l = r.getBoundingClientRect(),
                        s = n.touches;
                    s && s.length > 0 ? (i = s[0].clientX, a = s[0].clientY) : (i = n.clientX, a = n.clientY);
                    var d = parseFloat(o.getStyle(r, "padding-left")),
                        u = parseFloat(o.getStyle(r, "padding-top")),
                        c = parseFloat(o.getStyle(r, "padding-right")),
                        h = parseFloat(o.getStyle(r, "padding-bottom")),
                        f = l.right - l.left - d - c,
                        g = l.bottom - l.top - u - h;
                    return i = Math.round((i - l.left - d) / f * r.width / e.currentDevicePixelRatio), a = Math.round((a - l.top - u) / g * r.height / e.currentDevicePixelRatio), {
                        x: i,
                        y: a
                    }
                }, o.addEvent = function(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
                }, o.removeEvent = function(t, e, i) {
                    t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = o.noop
                }, o.bindEvents = function(t, e, i) {
                    var a = t.events = t.events || {};
                    o.each(e, function(e) {
                        a[e] = function() {
                            i.apply(t, arguments)
                        }, o.addEvent(t.chart.canvas, e, a[e])
                    })
                }, o.unbindEvents = function(t, e) {
                    var i = t.chart.canvas;
                    o.each(e, function(t, e) {
                        o.removeEvent(i, e, t)
                    })
                }, o.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function(t) {
                    var e = t.parentNode,
                        i = parseInt(o.getStyle(e, "padding-left"), 10),
                        a = parseInt(o.getStyle(e, "padding-right"), 10),
                        n = e.clientWidth - i - a,
                        r = o.getConstraintWidth(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }, o.getMaximumHeight = function(t) {
                    var e = t.parentNode,
                        i = parseInt(o.getStyle(e, "padding-top"), 10),
                        a = parseInt(o.getStyle(e, "padding-bottom"), 10),
                        n = e.clientHeight - i - a,
                        r = o.getConstraintHeight(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }, o.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function(t) {
                    var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                    if (1 !== e) {
                        var i = t.canvas,
                            a = t.height,
                            n = t.width;
                        i.height = a * e, i.width = n * e, t.ctx.scale(e, e), i.style.height = a + "px", i.style.width = n + "px"
                    }
                }, o.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, o.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                }, o.longestText = function(t, e, i, a) {
                    a = a || {};
                    var n = a.data = a.data || {},
                        r = a.garbageCollect = a.garbageCollect || [];
                    a.font !== e && (n = a.data = {}, r = a.garbageCollect = [], a.font = e), t.font = e;
                    var l = 0;
                    o.each(i, function(e) {
                        void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, n, r, l, e) : o.isArray(e) && o.each(e, function(e) {
                            void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, n, r, l, e))
                        })
                    });
                    var s = r.length / 2;
                    if (s > i.length) {
                        for (var d = 0; d < s; d++)
                            delete n[r[d]];
                        r.splice(0, s)
                    }
                    return l
                }, o.measureText = function(t, e, i, a, n) {
                    var o = e[n];
                    return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > a && (a = o), a
                }, o.numberOfLabelLines = function(t) {
                    var e = 1;
                    return o.each(t, function(t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, o.drawRoundedRectangle = function(t, e, i, a, n, o) {
                    t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + a - o, i), t.quadraticCurveTo(e + a, i, e + a, i + o), t.lineTo(e + a, i + n - o), t.quadraticCurveTo(e + a, i + n, e + a - o, i + n), t.lineTo(e + o, i + n), t.quadraticCurveTo(e, i + n, e, i + n - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath()
                }, o.color = function(e) {
                    return a ? a(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"), e)
                }, o.addResizeListener = function(t, e) {
                    var i = document.createElement("iframe");
                    i.className = "chartjs-hidden-iframe", i.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", i.tabIndex = -1;
                    var a = t._chartjs = {
                            resizer: i,
                            ticking: !1
                        },
                        n = function() {
                            a.ticking || (a.ticking = !0, o.requestAnimFrame.call(window, function() {
                                if (a.resizer)
                                    return a.ticking = !1, e()
                            }))
                        };
                    o.addEvent(i, "load", function() {
                        o.addEvent(i.contentWindow || i, "resize", n), n()
                    }), t.insertBefore(i, t.firstChild)
                }, o.removeResizeListener = function(t) {
                    if (t && t._chartjs) {
                        var e = t._chartjs.resizer;
                        e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs
                    }
                }, o.isArray = Array.isArray ? function(t) {
                    return Array.isArray(t)
                } : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o.arrayEquals = function(t, e) {
                    var i,
                        a,
                        n,
                        r;
                    if (!t || !e || t.length !== e.length)
                        return !1;
                    for (i = 0, a = t.length; i < a; ++i)
                        if (n = t[i], r = e[i], n instanceof Array && r instanceof Array) {
                            if (!o.arrayEquals(n, r))
                                return !1
                        } else if (n !== r)
                            return !1;
                    return !0
                }, o.callCallback = function(t, e, i) {
                    t && "function" == typeof t.call && t.apply(i, e)
                }, o.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            3: 3
        }],
        27: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i,
                        a,
                        n,
                        o,
                        r,
                        l = t.data.datasets;
                    for (a = 0, o = l.length; a < o; ++a)
                        if (t.isDatasetVisible(a))
                            for (i = t.getDatasetMeta(a), n = 0, r = i.data.length; n < r; ++n) {
                                var s = i.data[n];
                                s._view.skip || e(s)
                            }
                }
                function i(t, i) {
                    var a = [];
                    return e(t, function(t) {
                        t.inRange(i.x, i.y) && a.push(t)
                    }), a
                }
                function a(t, i, a, n) {
                    var r = Number.POSITIVE_INFINITY,
                        l = [];
                    return n || (n = o.distanceBetweenPoints), e(t, function(t) {
                        if (!a || t.inRange(i.x, i.y)) {
                            var e = t.getCenterPoint(),
                                o = n(i, e);
                            o < r ? (l = [t], r = o) : o === r && l.push(t)
                        }
                    }), l
                }
                function n(t, e, n) {
                    var r = o.getRelativePosition(e, t.chart),
                        l = function(t, e) {
                            return Math.abs(t.x - e.x)
                        },
                        s = n.intersect ? i(t, r) : a(t, r, !1, l),
                        d = [];
                    return s.length ? (t.data.datasets.forEach(function(e, i) {
                        if (t.isDatasetVisible(i)) {
                            var a = t.getDatasetMeta(i),
                                n = a.data[s[0]._index];
                            n && !n._view.skip && d.push(n)
                        }
                    }), d) : []
                }
                var o = t.helpers;
                t.Interaction = {
                    modes: {
                        single: function(t, i) {
                            var a = o.getRelativePosition(i, t.chart),
                                n = [];
                            return e(t, function(t) {
                                if (t.inRange(a.x, a.y))
                                    return n.push(t), n
                            }), n.slice(0, 1)
                        },
                        label: n,
                        index: n,
                        dataset: function(t, e, n) {
                            var r = o.getRelativePosition(e, t.chart),
                                l = n.intersect ? i(t, r) : a(t, r, !1);
                            return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l
                        },
                        "x-axis": function(t, e) {
                            return n(t, e, !0)
                        },
                        point: function(t, e) {
                            var a = o.getRelativePosition(e, t.chart);
                            return i(t, a)
                        },
                        nearest: function(t, e, i) {
                            var n = o.getRelativePosition(e, t.chart),
                                r = a(t, n, i.intersect);
                            return r.length > 1 && r.sort(function(t, e) {
                                var i = t.getArea(),
                                    a = e.getArea(),
                                    n = i - a;
                                return 0 === n && (n = t._datasetIndex - e._datasetIndex), n
                            }), r.slice(0, 1)
                        },
                        x: function(t, i, a) {
                            var n = o.getRelativePosition(i, t.chart),
                                r = [],
                                l = !1;
                            return e(t, function(t) {
                                t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (l = !0)
                            }), a.intersect && !l && (r = []), r
                        },
                        y: function(t, i, a) {
                            var n = o.getRelativePosition(i, t.chart),
                                r = [],
                                l = !1;
                            return e(t, function(t) {
                                t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (l = !0)
                            }), a.intersect && !l && (r = []), r
                        }
                    }
                }
            }
        }, {}],
        28: [function(t, e, i) {
            "use strict";
            e.exports = function() {
                var t = function(e, i) {
                    return this.controller = new t.Controller(e, i, this), this.controller
                };
                return t.defaults = {
                    global: {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var i = 0; i < t.data.datasets.length; i++)
                                e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                            return e.push("</ul>"), e.join("")
                        }
                    }
                }, t.Chart = t, t
            }
        }, {}],
        29: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []), t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                    },
                    update: function(t, i, a) {
                        function n(t) {
                            var e,
                                i = t.isHorizontal();
                            i ? (e = t.update(t.options.fullWidth ? x : C, M), D -= e.height) : (e = t.update(w, S), C -= e.width), I.push({
                                horizontal: i,
                                minSize: e,
                                box: t
                            })
                        }
                        function o(t) {
                            var i = e.findNextWhere(I, function(e) {
                                return e.box === t
                            });
                            if (i)
                                if (t.isHorizontal()) {
                                    var a = {
                                        left: A,
                                        right: T,
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.options.fullWidth ? x : C, y / 2, a)
                                } else
                                    t.update(i.minSize.width, D)
                        }
                        function r(t) {
                            var i = e.findNextWhere(I, function(e) {
                                    return e.box === t
                                }),
                                a = {
                                    left: 0,
                                    right: 0,
                                    top: P,
                                    bottom: F
                                };
                            i && t.update(i.minSize.width, D, a)
                        }
                        function l(t) {
                            t.isHorizontal() ? (t.left = t.options.fullWidth ? u : A, t.right = t.options.fullWidth ? i - c : A + C, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = V, t.right = V + t.width, t.top = P, t.bottom = P + D, V = t.right)
                        }
                        if (t) {
                            var s = t.options.layout,
                                d = s ? s.padding : null,
                                u = 0,
                                c = 0,
                                h = 0,
                                f = 0;
                            isNaN(d) ? (u = d.left || 0, c = d.right || 0, h = d.top || 0, f = d.bottom || 0) : (u = d, c = d, h = d, f = d);
                            var g = e.where(t.boxes, function(t) {
                                    return "left" === t.options.position
                                }),
                                p = e.where(t.boxes, function(t) {
                                    return "right" === t.options.position
                                }),
                                m = e.where(t.boxes, function(t) {
                                    return "top" === t.options.position
                                }),
                                b = e.where(t.boxes, function(t) {
                                    return "bottom" === t.options.position
                                }),
                                v = e.where(t.boxes, function(t) {
                                    return "chartArea" === t.options.position
                                });
                            m.sort(function(t, e) {
                                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                            }), b.sort(function(t, e) {
                                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                            });
                            var x = i - u - c,
                                y = a - h - f,
                                k = x / 2,
                                S = y / 2,
                                w = (i - k) / (g.length + p.length),
                                M = (a - S) / (m.length + b.length),
                                C = x,
                                D = y,
                                I = [];
                            e.each(g.concat(p, m, b), n);
                            var A = u,
                                T = c,
                                P = h,
                                F = f;
                            e.each(g.concat(p), o), e.each(g, function(t) {
                                A += t.width
                            }), e.each(p, function(t) {
                                T += t.width
                            }), e.each(m.concat(b), o), e.each(m, function(t) {
                                P += t.height
                            }), e.each(b, function(t) {
                                F += t.height
                            }), e.each(g.concat(p), r), A = u, T = c, P = h, F = f, e.each(g, function(t) {
                                A += t.width
                            }), e.each(p, function(t) {
                                T += t.width
                            }), e.each(m, function(t) {
                                P += t.height
                            }), e.each(b, function(t) {
                                F += t.height
                            });
                            var _ = a - P - F,
                                R = i - A - T;
                            R === C && _ === D || (e.each(g, function(t) {
                                t.height = _
                            }), e.each(p, function(t) {
                                t.height = _
                            }), e.each(m, function(t) {
                                t.options.fullWidth || (t.width = R)
                            }), e.each(b, function(t) {
                                t.options.fullWidth || (t.width = R)
                            }), D = _, C = R);
                            var V = u,
                                L = h;
                            e.each(g.concat(m), l), V += C, L += D, e.each(p, l), e.each(b, l), t.chartArea = {
                                left: A,
                                top: P,
                                right: A + C,
                                bottom: P + D
                            }, e.each(v, function(e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, D)
                            })
                        }
                    }
                }
            }
        }, {}],
        30: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }
                var i = t.helpers,
                    a = i.noop;
                t.defaults.global.legend = {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    onClick: function(t, e) {
                        var i = e.datasetIndex,
                            a = this.chart,
                            n = a.getDatasetMeta(i);
                        n.hidden = null === n.hidden ? !a.data.datasets[i].hidden : null, a.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return i.isArray(e.datasets) ? e.datasets.map(function(e, a) {
                                return {
                                    text: e.label,
                                    fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(a),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: a
                                }
                            }, this) : []
                        }
                    }
                }, t.Legend = t.Element.extend({
                    initialize: function(t) {
                        i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: a,
                    update: function(t, e, i) {
                        var a = this;
                        return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = i, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                    },
                    afterUpdate: a,
                    beforeSetDimensions: a,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: a,
                    beforeBuildLabels: a,
                    buildLabels: function() {
                        var t = this;
                        t.legendItems = t.options.labels.generateLabels.call(t, t.chart), t.options.reverse && t.legendItems.reverse()
                    },
                    afterBuildLabels: a,
                    beforeFit: a,
                    fit: function() {
                        var a = this,
                            n = a.options,
                            o = n.labels,
                            r = n.display,
                            l = a.ctx,
                            s = t.defaults.global,
                            d = i.getValueOrDefault,
                            u = d(o.fontSize, s.defaultFontSize),
                            c = d(o.fontStyle, s.defaultFontStyle),
                            h = d(o.fontFamily, s.defaultFontFamily),
                            f = i.fontString(u, c, h),
                            g = a.legendHitBoxes = [],
                            p = a.minSize,
                            m = a.isHorizontal();
                        if (m ? (p.width = a.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = a.maxHeight), r)
                            if (l.font = f, m) {
                                var b = a.lineWidths = [0],
                                    v = a.legendItems.length ? u + o.padding : 0;
                                l.textAlign = "left", l.textBaseline = "top", i.each(a.legendItems, function(t, i) {
                                    var n = e(o, u),
                                        r = n + u / 2 + l.measureText(t.text).width;
                                    b[b.length - 1] + r + o.padding >= a.width && (v += u + o.padding, b[b.length] = a.left), g[i] = {
                                        left: 0,
                                        top: 0,
                                        width: r,
                                        height: u
                                    }, b[b.length - 1] += r + o.padding
                                }), p.height += v
                            } else {
                                var x = o.padding,
                                    y = a.columnWidths = [],
                                    k = o.padding,
                                    S = 0,
                                    w = 0,
                                    M = u + x;
                                i.each(a.legendItems, function(t, i) {
                                    var a = e(o, u),
                                        n = a + u / 2 + l.measureText(t.text).width;
                                    w + M > p.height && (k += S + o.padding, y.push(S), S = 0, w = 0), S = Math.max(S, n), w += M, g[i] = {
                                        left: 0,
                                        top: 0,
                                        width: n,
                                        height: u
                                    }
                                }), k += S, y.push(S), p.width += k
                            }
                        a.width = p.width, a.height = p.height
                    },
                    afterFit: a,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var a = this,
                            n = a.options,
                            o = n.labels,
                            r = t.defaults.global,
                            l = r.elements.line,
                            s = a.width,
                            d = a.lineWidths;
                        if (n.display) {
                            var u,
                                c = a.ctx,
                                h = i.getValueOrDefault,
                                f = h(o.fontColor, r.defaultFontColor),
                                g = h(o.fontSize, r.defaultFontSize),
                                p = h(o.fontStyle, r.defaultFontStyle),
                                m = h(o.fontFamily, r.defaultFontFamily),
                                b = i.fontString(g, p, m);
                            c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = b;
                            var v = e(o, g),
                                x = a.legendHitBoxes,
                                y = function(e, i, a) {
                                    if (!(isNaN(v) || v <= 0)) {
                                        c.save(), c.fillStyle = h(a.fillStyle, r.defaultColor), c.lineCap = h(a.lineCap, l.borderCapStyle), c.lineDashOffset = h(a.lineDashOffset, l.borderDashOffset), c.lineJoin = h(a.lineJoin, l.borderJoinStyle), c.lineWidth = h(a.lineWidth, l.borderWidth), c.strokeStyle = h(a.strokeStyle, r.defaultColor);
                                        var o = 0 === h(a.lineWidth, l.borderWidth);
                                        if (c.setLineDash && c.setLineDash(h(a.lineDash, l.borderDash)), n.labels && n.labels.usePointStyle) {
                                            var s = g * Math.SQRT2 / 2,
                                                d = s / Math.SQRT2,
                                                u = e + d,
                                                f = i + d;
                                            t.canvasHelpers.drawPoint(c, a.pointStyle, s, u, f)
                                        } else
                                            o || c.strokeRect(e, i, v, g), c.fillRect(e, i, v, g);
                                        c.restore()
                                    }
                                },
                                k = function(t, e, i, a) {
                                    c.fillText(i.text, v + g / 2 + t, e), i.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v + g / 2 + t, e + g / 2), c.lineTo(v + g / 2 + t + a, e + g / 2), c.stroke())
                                },
                                S = a.isHorizontal();
                            u = S ? {
                                x: a.left + (s - d[0]) / 2,
                                y: a.top + o.padding,
                                line: 0
                            } : {
                                x: a.left + o.padding,
                                y: a.top + o.padding,
                                line: 0
                            };
                            var w = g + o.padding;
                            i.each(a.legendItems, function(t, e) {
                                var i = c.measureText(t.text).width,
                                    n = v + g / 2 + i,
                                    r = u.x,
                                    l = u.y;
                                S ? r + n >= s && (l = u.y += w, u.line++, r = u.x = a.left + (s - d[u.line]) / 2) : l + w > a.bottom && (r = u.x = r + a.columnWidths[u.line] + o.padding, l = u.y = a.top, u.line++), y(r, l, t), x[e].left = r, x[e].top = l, k(r, l, t, i), S ? u.x += n + o.padding : u.y += w
                            })
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            a = e.options,
                            n = "mouseup" === t.type ? "click" : t.type,
                            o = !1;
                        if ("mousemove" === n) {
                            if (!a.onHover)
                                return
                        } else {
                            if ("click" !== n)
                                return;
                            if (!a.onClick)
                                return
                        }
                        var r = i.getRelativePosition(t, e.chart.chart),
                            l = r.x,
                            s = r.y;
                        if (l >= e.left && l <= e.right && s >= e.top && s <= e.bottom)
                            for (var d = e.legendHitBoxes, u = 0; u < d.length; ++u) {
                                var c = d[u];
                                if (l >= c.left && l <= c.left + c.width && s >= c.top && s <= c.top + c.height) {
                                    if ("click" === n) {
                                        a.onClick.call(e, t, e.legendItems[u]), o = !0;
                                        break
                                    }
                                    if ("mousemove" === n) {
                                        a.onHover.call(e, t, e.legendItems[u]), o = !0;
                                        break
                                    }
                                }
                            }
                        return o
                    }
                }), t.plugins.register({
                    beforeInit: function(e) {
                        var i = e.options,
                            a = i.legend;
                        a && (e.legend = new t.Legend({
                            ctx: e.chart.ctx,
                            options: a,
                            chart: e
                        }), t.layoutService.addBox(e, e.legend))
                    }
                })
            }
        }, {}],
        31: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers.noop;
                t.plugins = {
                    _plugins: [],
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            e.indexOf(t) === -1 && e.push(t)
                        })
                    },
                    unregister: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var i = e.indexOf(t);
                            i !== -1 && e.splice(i, 1)
                        })
                    },
                    clear: function() {
                        this._plugins = []
                    },
                    count: function() {
                        return this._plugins.length
                    },
                    getAll: function() {
                        return this._plugins
                    },
                    notify: function(t, e) {
                        var i,
                            a,
                            n = this._plugins,
                            o = n.length;
                        for (i = 0; i < o; ++i)
                            if (a = n[i],
                            "function" == typeof a[t] && a[t].apply(a, e || []) === !1)
                                return !1;
                        return !0
                    }
                }, t.PluginBase = t.Element.extend({
                    beforeInit: e,
                    afterInit: e,
                    beforeUpdate: e,
                    afterUpdate: e,
                    beforeDraw: e,
                    afterDraw: e,
                    destroy: e
                }), t.pluginService = t.plugins
            }
        }, {}],
        32: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.scale = {
                    display: !0,
                    position: "left",
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        labelString: "",
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 10,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: t.Ticks.formatters.values
                    }
                }, t.Scale = t.Element.extend({
                    beforeUpdate: function() {
                        e.callCallback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, i, a) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = i, n.margins = e.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, a), n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeDataLimits(), n.determineDataLimits(), n.afterDataLimits(), n.beforeBuildTicks(), n.buildTicks(), n.afterBuildTicks(), n.beforeTickToLabelConversion(), n.convertTicksToLabels(), n.afterTickToLabelConversion(), n.beforeCalculateTickRotation(), n.calculateTickRotation(), n.afterCalculateTickRotation(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: function() {
                        e.callCallback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        e.callCallback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        e.callCallback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        e.callCallback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: e.noop,
                    afterDataLimits: function() {
                        e.callCallback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        e.callCallback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: e.noop,
                    afterBuildTicks: function() {
                        e.callCallback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        e.callCallback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this,
                            e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback)
                    },
                    afterTickToLabelConversion: function() {
                        e.callCallback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        e.callCallback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var i = this,
                            a = i.ctx,
                            n = t.defaults.global,
                            o = i.options.ticks,
                            r = e.getValueOrDefault(o.fontSize, n.defaultFontSize),
                            l = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle),
                            s = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily),
                            d = e.fontString(r, l, s);
                        a.font = d;
                        var u,
                            c = a.measureText(i.ticks[0]).width,
                            h = a.measureText(i.ticks[i.ticks.length - 1]).width;
                        if (i.labelRotation = o.minRotation || 0, i.paddingRight = 0, i.paddingLeft = 0, i.options.display && i.isHorizontal()) {
                            i.paddingRight = h / 2 + 3, i.paddingLeft = c / 2 + 3, i.longestTextCache || (i.longestTextCache = {});
                            for (var f, g, p = e.longestText(a, d, i.ticks, i.longestTextCache), m = p, b = i.getPixelForTick(1) - i.getPixelForTick(0) - 6; m > b && i.labelRotation < o.maxRotation;) {
                                if (f = Math.cos(e.toRadians(i.labelRotation)), g = Math.sin(e.toRadians(i.labelRotation)), u = f * c, u + r / 2 > i.yLabelWidth && (i.paddingLeft = u + r / 2), i.paddingRight = r / 2, g * p > i.maxHeight) {
                                    i.labelRotation--;
                                    break
                                }
                                i.labelRotation++, m = f * p
                            }
                        }
                        i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0))
                    },
                    afterCalculateTickRotation: function() {
                        e.callCallback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        e.callCallback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var i = this,
                            a = i.minSize = {
                                width: 0,
                                height: 0
                            },
                            n = i.options,
                            o = t.defaults.global,
                            r = n.ticks,
                            l = n.scaleLabel,
                            s = n.gridLines,
                            d = n.display,
                            u = i.isHorizontal(),
                            c = e.getValueOrDefault(r.fontSize, o.defaultFontSize),
                            h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle),
                            f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily),
                            g = e.fontString(c, h, f),
                            p = e.getValueOrDefault(l.fontSize, o.defaultFontSize),
                            m = n.gridLines.tickMarkLength;
                        if (u ? a.width = i.isFullWidth() ? i.maxWidth - i.margins.left - i.margins.right : i.maxWidth : a.width = d && s.drawTicks ? m : 0, u ? a.height = d && s.drawTicks ? m : 0 : a.height = i.maxHeight, l.display && d && (u ? a.height += 1.5 * p : a.width += 1.5 * p), r.display && d) {
                            i.longestTextCache || (i.longestTextCache = {});
                            var b = e.longestText(i.ctx, g, i.ticks, i.longestTextCache),
                                v = e.numberOfLabelLines(i.ticks),
                                x = .5 * c;
                            if (u) {
                                i.longestLabelWidth = b;
                                var y = Math.sin(e.toRadians(i.labelRotation)) * i.longestLabelWidth + c * v + x * v;
                                a.height = Math.min(i.maxHeight, a.height + y), i.ctx.font = g;
                                var k = i.ctx.measureText(i.ticks[0]).width,
                                    S = i.ctx.measureText(i.ticks[i.ticks.length - 1]).width,
                                    w = Math.cos(e.toRadians(i.labelRotation)),
                                    M = Math.sin(e.toRadians(i.labelRotation));
                                i.paddingLeft = 0 !== i.labelRotation ? w * k + 3 : k / 2 + 3, i.paddingRight = 0 !== i.labelRotation ? M * (c / 2) + 3 : S / 2 + 3
                            } else {
                                var C = i.maxWidth - a.width,
                                    D = r.mirror;
                                D ? b = 0 : b += i.options.ticks.padding, b < C ? a.width += b : a.width = i.maxWidth, i.paddingTop = c / 2, i.paddingBottom = c / 2
                            }
                        }
                        i.margins && (i.paddingLeft = Math.max(i.paddingLeft - i.margins.left, 0), i.paddingTop = Math.max(i.paddingTop - i.margins.top, 0), i.paddingRight = Math.max(i.paddingRight - i.margins.right, 0), i.paddingBottom = Math.max(i.paddingBottom - i.margins.bottom, 0)), i.width = a.width, i.height = a.height
                    },
                    afterFit: function() {
                        e.callCallback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
                    },
                    getLabelForIndex: e.noop,
                    getPixelForValue: e.noop,
                    getValueForPixel: e.noop,
                    getPixelForTick: function(t, e) {
                        var i = this;
                        if (i.isHorizontal()) {
                            var a = i.width - (i.paddingLeft + i.paddingRight),
                                n = a / Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                o = n * t + i.paddingLeft;
                            e && (o += n / 2);
                            var r = i.left + Math.round(o);
                            return r += i.isFullWidth() ? i.margins.left : 0
                        }
                        var l = i.height - (i.paddingTop + i.paddingBottom);
                        return i.top + t * (l / (i.ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = e.width - (e.paddingLeft + e.paddingRight),
                                a = i * t + e.paddingLeft,
                                n = e.left + Math.round(a);
                            return n += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        var t = this,
                            e = t.min,
                            i = t.max;
                        return t.getPixelForValue(t.beginAtZero ? 0 : e < 0 && i < 0 ? i : e > 0 && i > 0 ? e : 0)
                    },
                    draw: function(i) {
                        var a = this,
                            n = a.options;
                        if (n.display) {
                            var o,
                                r,
                                l = a.ctx,
                                s = t.defaults.global,
                                d = n.ticks,
                                u = n.gridLines,
                                c = n.scaleLabel,
                                h = 0 !== a.labelRotation,
                                f = d.autoSkip,
                                g = a.isHorizontal();
                            d.maxTicksLimit && (r = d.maxTicksLimit);
                            var p = e.getValueOrDefault(d.fontColor, s.defaultFontColor),
                                m = e.getValueOrDefault(d.fontSize, s.defaultFontSize),
                                b = e.getValueOrDefault(d.fontStyle, s.defaultFontStyle),
                                v = e.getValueOrDefault(d.fontFamily, s.defaultFontFamily),
                                x = e.fontString(m, b, v),
                                y = u.tickMarkLength,
                                k = e.getValueOrDefault(u.borderDash, s.borderDash),
                                S = e.getValueOrDefault(u.borderDashOffset, s.borderDashOffset),
                                w = e.getValueOrDefault(c.fontColor, s.defaultFontColor),
                                M = e.getValueOrDefault(c.fontSize, s.defaultFontSize),
                                C = e.getValueOrDefault(c.fontStyle, s.defaultFontStyle),
                                D = e.getValueOrDefault(c.fontFamily, s.defaultFontFamily),
                                I = e.fontString(M, C, D),
                                A = e.toRadians(a.labelRotation),
                                T = Math.cos(A),
                                P = a.longestLabelWidth * T;
                            l.fillStyle = p;
                            var F = [];
                            if (g) {
                                if (o = !1, h && (P /= 2), (P + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (o = 1 + Math.floor((P + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), r && a.ticks.length > r)
                                    for (; !o || a.ticks.length / (o || 1) > r;)
                                        o || (o = 1), o += 1;
                                f || (o = !1)
                            }
                            var _ = "right" === n.position ? a.left : a.right - y,
                                R = "right" === n.position ? a.left + y : a.right,
                                V = "bottom" === n.position ? a.top : a.bottom - y,
                                L = "bottom" === n.position ? a.top + y : a.bottom;
                            if (e.each(a.ticks, function(t, r) {
                                if (void 0 !== t && null !== t) {
                                    var l = a.ticks.length === r + 1,
                                        s = o > 1 && r % o > 0 || r % o === 0 && r + o >= a.ticks.length;
                                    if ((!s || l) && void 0 !== t && null !== t) {
                                        var c,
                                            f;
                                        r === ("undefined" != typeof a.zeroLineIndex ? a.zeroLineIndex : 0) ? (c = u.zeroLineWidth, f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r), f = e.getValueAtIndexOrDefault(u.color, r));
                                        var p,
                                            m,
                                            b,
                                            v,
                                            x,
                                            w,
                                            M,
                                            C,
                                            D,
                                            I,
                                            T = "middle",
                                            P = "middle";
                                        if (g) {
                                            h || (P = "top" === n.position ? "bottom" : "top"), T = h ? "right" : "center";
                                            var O = a.getPixelForTick(r) + e.aliasPixel(c);
                                            D = a.getPixelForTick(r, u.offsetGridLines) + d.labelOffset, I = h ? a.top + 12 : "top" === n.position ? a.bottom - y : a.top + y, p = b = x = M = O, m = V, v = L, w = i.top, C = i.bottom
                                        } else {
                                            "left" === n.position ? d.mirror ? (D = a.right + d.padding, T = "left") : (D = a.right - d.padding, T = "right") : d.mirror ? (D = a.left - d.padding, T = "right") : (D = a.left + d.padding, T = "left");
                                            var B = a.getPixelForTick(r);
                                            B += e.aliasPixel(c), I = a.getPixelForTick(r, u.offsetGridLines), p = _, b = R, x = i.left, M = i.right, m = v = w = C = B
                                        }
                                        F.push({
                                            tx1: p,
                                            ty1: m,
                                            tx2: b,
                                            ty2: v,
                                            x1: x,
                                            y1: w,
                                            x2: M,
                                            y2: C,
                                            labelX: D,
                                            labelY: I,
                                            glWidth: c,
                                            glColor: f,
                                            glBorderDash: k,
                                            glBorderDashOffset: S,
                                            rotation: -1 * A,
                                            label: t,
                                            textBaseline: P,
                                            textAlign: T
                                        })
                                    }
                                }
                            }), e.each(F, function(t) {
                                if (u.display && (l.save(), l.lineWidth = t.glWidth, l.strokeStyle = t.glColor, l.setLineDash && (l.setLineDash(t.glBorderDash), l.lineDashOffset = t.glBorderDashOffset), l.beginPath(), u.drawTicks && (l.moveTo(t.tx1, t.ty1), l.lineTo(t.tx2, t.ty2)), u.drawOnChartArea && (l.moveTo(t.x1, t.y1), l.lineTo(t.x2, t.y2)), l.stroke(), l.restore()), d.display) {
                                    l.save(), l.translate(t.labelX, t.labelY), l.rotate(t.rotation), l.font = x, l.textBaseline = t.textBaseline, l.textAlign = t.textAlign;
                                    var i = t.label;
                                    if (e.isArray(i))
                                        for (var a = 0, n = -(i.length - 1) * m * .75; a < i.length; ++a)
                                            l.fillText("" + i[a], 0, n), n += 1.5 * m;
                                    else
                                        l.fillText(i, 0, 0);
                                    l.restore()
                                }
                            }), c.display) {
                                var O,
                                    B,
                                    W = 0;
                                if (g)
                                    O = a.left + (a.right - a.left) / 2, B = "bottom" === n.position ? a.bottom - M / 2 : a.top + M / 2;
                                else {
                                    var z = "left" === n.position;
                                    O = z ? a.left + M / 2 : a.right - M / 2, B = a.top + (a.bottom - a.top) / 2, W = z ? -.5 * Math.PI : .5 * Math.PI
                                }
                                l.save(), l.translate(O, B), l.rotate(W), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = w, l.font = I, l.fillText(c.labelString, 0, 0), l.restore()
                            }
                            if (u.drawBorder) {
                                l.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0), l.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                                var N = a.left,
                                    E = a.right,
                                    H = a.top,
                                    U = a.bottom,
                                    j = e.aliasPixel(l.lineWidth);
                                g ? (H = U = "top" === n.position ? a.bottom : a.top, H += j, U += j) : (N = E = "left" === n.position ? a.right : a.left, N += j, E += j), l.beginPath(), l.moveTo(N, H), l.lineTo(E, U), l.stroke()
                            }
                        }
                    }
                })
            }
        }, {}],
        33: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, i, a) {
                        this.constructors[t] = i, this.defaults[t] = e.clone(a)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(i) {
                        return this.defaults.hasOwnProperty(i) ? e.scaleMerge(t.defaults.scale, this.defaults[i]) : {}
                    },
                    updateScaleDefaults: function(t, i) {
                        var a = this.defaults;
                        a.hasOwnProperty(t) && (a[t] = e.extend(a[t], i))
                    },
                    addScalesToLayout: function(i) {
                        e.each(i.scales, function(e) {
                            t.layoutService.addBox(i, e)
                        })
                    }
                }
            }
        }, {}],
        34: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.Ticks = {
                    generators: {
                        linear: function(t, i) {
                            var a,
                                n = [];
                            if (t.stepSize && t.stepSize > 0)
                                a = t.stepSize;
                            else {
                                var o = e.niceNum(i.max - i.min, !1);
                                a = e.niceNum(o / (t.maxTicks - 1), !0)
                            }
                            var r = Math.floor(i.min / a) * a,
                                l = Math.ceil(i.max / a) * a;
                            if (t.min && t.max && t.stepSize) {
                                var s = (t.max - t.min) % t.stepSize === 0;
                                s && (r = t.min, l = t.max)
                            }
                            var d = (l - r) / a;
                            d = e.almostEquals(d, Math.round(d), a / 1e3) ? Math.round(d) : Math.ceil(d), n.push(void 0 !== t.min ? t.min : r);
                            for (var u = 1; u < d; ++u)
                                n.push(r + u * a);
                            return n.push(void 0 !== t.max ? t.max : l), n
                        },
                        logarithmic: function(t, i) {
                            for (var a = [], n = e.getValueOrDefault, o = n(t.min, Math.pow(10, Math.floor(e.log10(i.min)))); o < i.max;) {
                                a.push(o);
                                var r,
                                    l;
                                0 === o ? (r = Math.floor(e.log10(i.minNotZero)), l = Math.round(i.minNotZero / Math.pow(10, r))) : (r = Math.floor(e.log10(o)), l = Math.floor(o / Math.pow(10, r)) + 1), 10 === l && (l = 1, ++r), o = l * Math.pow(10, r)
                            }
                            var s = n(t.max, o);
                            return a.push(s), a
                        }
                    },
                    formatters: {
                        values: function(t) {
                            return e.isArray(t) ? t : "" + t
                        },
                        linear: function(t, i, a) {
                            var n = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                            Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                            var o = e.log10(Math.abs(n)),
                                r = "";
                            if (0 !== t) {
                                var l = -1 * Math.floor(o);
                                l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l)
                            } else
                                r = "0";
                            return r
                        },
                        logarithmic: function(t, i, a) {
                            var n = t / Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === i || i === a.length - 1 ? t.toExponential() : ""
                        }
                    }
                }
            }
        }, {}],
        35: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.title = {
                    display: !1,
                    position: "top",
                    fullWidth: !0,
                    fontStyle: "bold",
                    padding: 10,
                    text: ""
                };
                var i = e.noop;
                t.Title = t.Element.extend({
                    initialize: function(i) {
                        var a = this;
                        e.extend(a, i), a.options = e.configMerge(t.defaults.global.title, i.options), a.legendHitBoxes = []
                    },
                    beforeUpdate: function() {
                        var i = this.chart.options;
                        i && i.title && (this.options = e.configMerge(t.defaults.global.title, i.title))
                    },
                    update: function(t, e, i) {
                        var a = this;
                        return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = i, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeBuildLabels(), a.buildLabels(), a.afterBuildLabels(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize
                    },
                    afterUpdate: i,
                    beforeSetDimensions: i,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: i,
                    beforeBuildLabels: i,
                    buildLabels: i,
                    afterBuildLabels: i,
                    beforeFit: i,
                    fit: function() {
                        var i = this,
                            a = e.getValueOrDefault,
                            n = i.options,
                            o = t.defaults.global,
                            r = n.display,
                            l = a(n.fontSize, o.defaultFontSize),
                            s = i.minSize;
                        i.isHorizontal() ? (s.width = i.maxWidth, s.height = r ? l + 2 * n.padding : 0) : (s.width = r ? l + 2 * n.padding : 0, s.height = i.maxHeight), i.width = s.width, i.height = s.height
                    },
                    afterFit: i,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var i = this,
                            a = i.ctx,
                            n = e.getValueOrDefault,
                            o = i.options,
                            r = t.defaults.global;
                        if (o.display) {
                            var l,
                                s,
                                d,
                                u = n(o.fontSize, r.defaultFontSize),
                                c = n(o.fontStyle, r.defaultFontStyle),
                                h = n(o.fontFamily, r.defaultFontFamily),
                                f = e.fontString(u, c, h),
                                g = 0,
                                p = i.top,
                                m = i.left,
                                b = i.bottom,
                                v = i.right;
                            a.fillStyle = n(o.fontColor, r.defaultFontColor), a.font = f, i.isHorizontal() ? (l = m + (v - m) / 2, s = p + (b - p) / 2, d = v - m) : (l = "left" === o.position ? m + u / 2 : v - u / 2, s = p + (b - p) / 2, d = b - p, g = Math.PI * ("left" === o.position ? -.5 : .5)), a.save(), a.translate(l, s), a.rotate(g), a.textAlign = "center", a.textBaseline = "middle", a.fillText(o.text, 0, 0, d), a.restore()
                        }
                    }
                }), t.plugins.register({
                    beforeInit: function(e) {
                        var i = e.options,
                            a = i.title;
                        a && (e.titleBlock = new t.Title({
                            ctx: e.chart.ctx,
                            options: a,
                            chart: e
                        }), t.layoutService.addBox(e, e.titleBlock))
                    }
                })
            }
        }, {}],
        36: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var i = s.color(t);
                    return i.alpha(e * i.alpha()).rgbaString()
                }
                function i(t, e) {
                    return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }
                function a(t) {
                    var e = t._xScale,
                        i = t._yScale || t._scale,
                        a = t._index,
                        n = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(a, n) : "",
                        yLabel: i ? i.getLabelForIndex(a, n) : "",
                        index: a,
                        datasetIndex: n,
                        x: t._model.x,
                        y: t._model.y
                    }
                }
                function n(e) {
                    var i = t.defaults.global,
                        a = s.getValueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: a(e.bodyFontFamily, i.defaultFontFamily),
                        _bodyFontStyle: a(e.bodyFontStyle, i.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: a(e.bodyFontSize, i.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: a(e.titleFontFamily, i.defaultFontFamily),
                        _titleFontStyle: a(e.titleFontStyle, i.defaultFontStyle),
                        titleFontSize: a(e.titleFontSize, i.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: a(e.footerFontFamily, i.defaultFontFamily),
                        _footerFontStyle: a(e.footerFontStyle, i.defaultFontStyle),
                        footerFontSize: a(e.footerFontSize, i.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors
                    }
                }
                function o(t, e) {
                    var i = t._chart.ctx,
                        a = 2 * e.yPadding,
                        n = 0,
                        o = e.body,
                        r = o.reduce(function(t, e) {
                            return t + e.before.length + e.lines.length + e.after.length
                        }, 0);
                    r += e.beforeBody.length + e.afterBody.length;
                    var l = e.title.length,
                        d = e.footer.length,
                        u = e.titleFontSize,
                        c = e.bodyFontSize,
                        h = e.footerFontSize;
                    a += l * u, a += l ? (l - 1) * e.titleSpacing : 0, a += l ? e.titleMarginBottom : 0, a += r * c, a += r ? (r - 1) * e.bodySpacing : 0, a += d ? e.footerMarginTop : 0, a += d * h, a += d ? (d - 1) * e.footerSpacing : 0;
                    var f = 0,
                        g = function(t) {
                            n = Math.max(n, i.measureText(t).width + f)
                        };
                    return i.font = s.fontString(u, e._titleFontStyle, e._titleFontFamily), s.each(e.title, g), i.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily), s.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, s.each(o, function(t) {
                        s.each(t.before, g), s.each(t.lines, g), s.each(t.after, g)
                    }), f = 0, i.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily), s.each(e.footer, g), n += 2 * e.xPadding, {
                        width: n,
                        height: a
                    }
                }
                function r(t, e) {
                    var i = t._model,
                        a = t._chart,
                        n = t._chartInstance.chartArea,
                        o = "center",
                        r = "center";
                    i.y < e.height ? r = "top" : i.y > a.height - e.height && (r = "bottom");
                    var l,
                        s,
                        d,
                        u,
                        c,
                        h = (n.left + n.right) / 2,
                        f = (n.top + n.bottom) / 2;
                    "center" === r ? (l = function(t) {
                        return t <= h
                    }, s = function(t) {
                        return t > h
                    }) : (l = function(t) {
                        return t <= e.width / 2
                    }, s = function(t) {
                        return t >= a.width - e.width / 2
                    }), d = function(t) {
                        return t + e.width > a.width
                    }, u = function(t) {
                        return t - e.width < 0
                    }, c = function(t) {
                        return t <= f ? "top" : "bottom"
                    }, l(i.x) ? (o = "left", d(i.x) && (o = "center", r = c(i.y))) : s(i.x) && (o = "right", u(i.x) && (o = "center", r = c(i.y)));
                    var g = t._options;
                    return {
                        xAlign: g.xAlign ? g.xAlign : o,
                        yAlign: g.yAlign ? g.yAlign : r
                    }
                }
                function l(t, e, i) {
                    var a = t.x,
                        n = t.y,
                        o = t.caretSize,
                        r = t.caretPadding,
                        l = t.cornerRadius,
                        s = i.xAlign,
                        d = i.yAlign,
                        u = o + r,
                        c = l + r;
                    return "right" === s ? a -= e.width : "center" === s && (a -= e.width / 2), "top" === d ? n += u : n -= "bottom" === d ? e.height + u : e.height / 2, "center" === d ? "left" === s ? a += u : "right" === s && (a -= u) : "left" === s ? a -= c : "right" === s && (a += c), {
                        x: a,
                        y: n
                    }
                }
                var s = t.helpers;
                t.defaults.global.tooltips = {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    callbacks: {
                        beforeTitle: s.noop,
                        title: function(t, e) {
                            var i = "",
                                a = e.labels,
                                n = a ? a.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.xLabel ? i = o.xLabel : n > 0 && o.index < n && (i = a[o.index])
                            }
                            return i
                        },
                        afterTitle: s.noop,
                        beforeBody: s.noop,
                        beforeLabel: s.noop,
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i + ": " + t.yLabel
                        },
                        labelColor: function(t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex),
                                a = i.data[t.index],
                                n = a._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        afterLabel: s.noop,
                        afterBody: s.noop,
                        beforeFooter: s.noop,
                        footer: s.noop,
                        afterFooter: s.noop
                    }
                }, t.Tooltip = t.Element.extend({
                    initialize: function() {
                        this._model = n(this._options)
                    },
                    getTitle: function() {
                        var t = this,
                            e = t._options,
                            a = e.callbacks,
                            n = a.beforeTitle.apply(t, arguments),
                            o = a.title.apply(t, arguments),
                            r = a.afterTitle.apply(t, arguments),
                            l = [];
                        return l = i(l, n), l = i(l, o), l = i(l, r)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return s.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var a = this,
                            n = a._options.callbacks,
                            o = [];
                        return s.each(t, function(t) {
                            var r = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            i(r.before, n.beforeLabel.call(a, t, e)), i(r.lines, n.label.call(a, t, e)), i(r.after, n.afterLabel.call(a, t, e)), o.push(r)
                        }), o
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return s.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this,
                            e = t._options.callbacks,
                            a = e.beforeFooter.apply(t, arguments),
                            n = e.footer.apply(t, arguments),
                            o = e.afterFooter.apply(t, arguments),
                            r = [];
                        return r = i(r, a), r = i(r, n), r = i(r, o)
                    },
                    update: function(e) {
                        var i,
                            d,
                            u = this,
                            c = u._options,
                            h = u._model,
                            f = u._model = n(c),
                            g = u._active,
                            p = u._data,
                            m = u._chartInstance,
                            b = {
                                xAlign: h.xAlign,
                                yAlign: h.yAlign
                            },
                            v = {
                                x: h.x,
                                y: h.y
                            },
                            x = {
                                width: h.width,
                                height: h.height
                            },
                            y = {
                                x: h.caretX,
                                y: h.caretY
                            };
                        if (g.length) {
                            f.opacity = 1;
                            var k = [];
                            y = t.Tooltip.positioners[c.position](g, u._eventPosition);
                            var S = [];
                            for (i = 0, d = g.length; i < d; ++i)
                                S.push(a(g[i]));
                            c.filter && (S = S.filter(function(t) {
                                return c.filter(t, p)
                            })), c.itemSort && (S = S.sort(function(t, e) {
                                return c.itemSort(t, e, p)
                            })), s.each(S, function(t) {
                                k.push(c.callbacks.labelColor.call(u, t, m))
                            }), f.title = u.getTitle(S, p), f.beforeBody = u.getBeforeBody(S, p), f.body = u.getBody(S, p), f.afterBody = u.getAfterBody(S, p), f.footer = u.getFooter(S, p), f.x = Math.round(y.x), f.y = Math.round(y.y), f.caretPadding = s.getValueOrDefault(y.padding, 2), f.labelColors = k, f.dataPoints = S, x = o(this, f), b = r(this, x), v = l(f, x, b)
                        } else
                            f.opacity = 0;
                        return f.xAlign = b.xAlign, f.yAlign = b.yAlign, f.x = v.x, f.y = v.y, f.width = x.width, f.height = x.height, f.caretX = y.x, f.caretY = y.y, u._model = f, e && c.custom && c.custom.call(u, f), u
                    },
                    drawCaret: function(t, i, a) {
                        var n,
                            o,
                            r,
                            l,
                            s,
                            d,
                            u = this._view,
                            c = this._chart.ctx,
                            h = u.caretSize,
                            f = u.cornerRadius,
                            g = u.xAlign,
                            p = u.yAlign,
                            m = t.x,
                            b = t.y,
                            v = i.width,
                            x = i.height;
                        "center" === p ? ("left" === g ? (n = m, o = n - h, r = n) : (n = m + v, o = n + h, r = n), s = b + x / 2, l = s - h, d = s + h) : ("left" === g ? (n = m + f, o = n + h, r = o + h) : "right" === g ? (n = m + v - f, o = n - h, r = o - h) : (o = m + v / 2, n = o - h, r = o + h), "top" === p ? (l = b, s = l - h, d = l) : (l = b + x, s = l + h, d = l)), c.fillStyle = e(u.backgroundColor, a), c.beginPath(), c.moveTo(n, l), c.lineTo(o, s), c.lineTo(r, d), c.closePath(), c.fill()
                    },
                    drawTitle: function(t, i, a, n) {
                        var o = i.title;
                        if (o.length) {
                            a.textAlign = i._titleAlign, a.textBaseline = "top";
                            var r = i.titleFontSize,
                                l = i.titleSpacing;
                            a.fillStyle = e(i.titleFontColor, n), a.font = s.fontString(r, i._titleFontStyle, i._titleFontFamily);
                            var d,
                                u;
                            for (d = 0, u = o.length; d < u; ++d)
                                a.fillText(o[d], t.x, t.y), t.y += r + l, d + 1 === o.length && (t.y += i.titleMarginBottom - l)
                        }
                    },
                    drawBody: function(t, i, a, n) {
                        var o = i.bodyFontSize,
                            r = i.bodySpacing,
                            l = i.body;
                        a.textAlign = i._bodyAlign, a.textBaseline = "top";
                        var d = e(i.bodyFontColor, n);
                        a.fillStyle = d, a.font = s.fontString(o, i._bodyFontStyle, i._bodyFontFamily);
                        var u = 0,
                            c = function(e) {
                                a.fillText(e, t.x + u, t.y), t.y += o + r
                            };
                        s.each(i.beforeBody, c);
                        var h = i.displayColors;
                        u = h ? o + 2 : 0, s.each(l, function(r, l) {
                            s.each(r.before, c), s.each(r.lines, function(r) {
                                h && (a.fillStyle = e(i.legendColorBackground, n), a.fillRect(t.x, t.y, o, o), a.strokeStyle = e(i.labelColors[l].borderColor, n), a.strokeRect(t.x, t.y, o, o), a.fillStyle = e(i.labelColors[l].backgroundColor, n), a.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), a.fillStyle = d), c(r)
                            }), s.each(r.after, c)
                        }), u = 0, s.each(i.afterBody, c), t.y -= r
                    },
                    drawFooter: function(t, i, a, n) {
                        var o = i.footer;
                        o.length && (t.y += i.footerMarginTop, a.textAlign = i._footerAlign, a.textBaseline = "top", a.fillStyle = e(i.footerFontColor, n), a.font = s.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), s.each(o, function(e) {
                            a.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing
                        }))
                    },
                    drawBackground: function(t, i, a, n, o) {
                        a.fillStyle = e(i.backgroundColor, o), s.drawRoundedRectangle(a, t.x, t.y, n.width, n.height, i.cornerRadius), a.fill()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var i = {
                                    width: e.width,
                                    height: e.height
                                },
                                a = {
                                    x: e.x,
                                    y: e.y
                                },
                                n = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            this._options.enabled && (this.drawBackground(a, e, t, i, n), this.drawCaret(a, i, n), a.x += e.xPadding, a.y += e.yPadding, this.drawTitle(a, e, t, n), this.drawBody(a, e, t, n), this.drawFooter(a, e, t, n))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e._options,
                            a = !1;
                        if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, i.mode, i), a = !s.arrayEquals(e._active, e._lastActive), e._lastActive = e._active, i.enabled || i.custom) {
                            e._eventPosition = s.getRelativePosition(t, e._chart);
                            var n = e._model;
                            e.update(!0), e.pivot(), a |= n.x !== e._model.x || n.y !== e._model.y
                        }
                        return a
                    }
                }), t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length)
                            return !1;
                        var e,
                            i,
                            a = 0,
                            n = 0,
                            o = 0;
                        for (e = 0, i = t.length; e < i; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var l = r.tooltipPosition();
                                a += l.x, n += l.y, ++o
                            }
                        }
                        return {
                            x: Math.round(a / o),
                            y: Math.round(n / o)
                        }
                    },
                    nearest: function(t, e) {
                        var i,
                            a,
                            n,
                            o = e.x,
                            r = e.y,
                            l = Number.POSITIVE_INFINITY;
                        for (a = 0, n = t.length; a < n; ++a) {
                            var d = t[a];
                            if (d && d.hasValue()) {
                                var u = d.getCenterPoint(),
                                    c = s.distanceBetweenPoints(e, u);
                                c < l && (l = c, i = d)
                            }
                        }
                        if (i) {
                            var h = i.tooltipPosition();
                            o = h.x, r = h.y
                        }
                        return {
                            x: o,
                            y: r
                        }
                    }
                }
            }
        }, {}],
        37: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global;
                i.elements.arc = {
                    backgroundColor: i.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                }, t.elements.Arc = t.Element.extend({
                    inLabelRange: function(t) {
                        var e = this._view;
                        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                    },
                    inRange: function(t, i) {
                        var a = this._view;
                        if (a) {
                            for (var n = e.getAngleFromPoint(a, {
                                    x: t,
                                    y: i
                                }), o = n.angle, r = n.distance, l = a.startAngle, s = a.endAngle; s < l;)
                                s += 2 * Math.PI;
                            for (; o > s;)
                                o -= 2 * Math.PI;
                            for (; o < l;)
                                o += 2 * Math.PI;
                            var d = o >= l && o <= s,
                                u = r >= a.innerRadius && r <= a.outerRadius;
                            return d && u
                        }
                        return !1
                    },
                    getCenterPoint: function() {
                        var t = this._view,
                            e = (t.startAngle + t.endAngle) / 2,
                            i = (t.innerRadius + t.outerRadius) / 2;
                        return {
                            x: t.x + Math.cos(e) * i,
                            y: t.y + Math.sin(e) * i
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition: function() {
                        var t = this._view,
                            e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                            i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * i,
                            y: t.y + Math.sin(e) * i
                        }
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view,
                            i = e.startAngle,
                            a = e.endAngle;
                        t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, a), t.arc(e.x, e.y, e.innerRadius, a, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                    }
                })
            }
        }, {}],
        38: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension: .4,
                    backgroundColor: i.defaultColor,
                    borderWidth: 3,
                    borderColor: i.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                }, t.elements.Line = t.Element.extend({
                    draw: function() {
                        function t(t, e) {
                            var i = e._view;
                            e._view.steppedLine === !0 ? (s.lineTo(i.x, t._view.y), s.lineTo(i.x, i.y)) : 0 === e._view.tension ? s.lineTo(i.x, i.y) : s.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, i.controlPointPreviousX, i.controlPointPreviousY, i.x, i.y)
                        }
                        var a = this,
                            n = a._view,
                            o = n.spanGaps,
                            r = n.scaleZero,
                            l = a._loop;
                        l || ("top" === n.fill ? r = n.scaleTop : "bottom" === n.fill && (r = n.scaleBottom));
                        var s = a._chart.ctx;
                        s.save();
                        var d = a._children.slice(),
                            u = -1;
                        l && d.length && d.push(d[0]);
                        var c,
                            h,
                            f,
                            g;
                        if (d.length && n.fill) {
                            for (s.beginPath(), c = 0; c < d.length; ++c)
                                h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? (l ? s.moveTo(r.x, r.y) : s.moveTo(g.x, r), g.skip || (u = c, s.lineTo(g.x, g.y))) : (f = u === -1 ? f : d[u], g.skip ? o || u !== c - 1 || (l ? s.lineTo(r.x, r.y) : s.lineTo(f._view.x, r)) : (u !== c - 1 ? o && u !== -1 ? t(f, h) : l ? s.lineTo(g.x, g.y) : (s.lineTo(g.x, r), s.lineTo(g.x, g.y)) : t(f, h), u = c));
                            l || u === -1 || s.lineTo(d[u]._view.x, r), s.fillStyle = n.backgroundColor || i.defaultColor, s.closePath(), s.fill()
                        }
                        var p = i.elements.line;
                        for (s.lineCap = n.borderCapStyle || p.borderCapStyle, s.setLineDash && s.setLineDash(n.borderDash || p.borderDash), s.lineDashOffset = n.borderDashOffset || p.borderDashOffset, s.lineJoin = n.borderJoinStyle || p.borderJoinStyle, s.lineWidth = n.borderWidth || p.borderWidth, s.strokeStyle = n.borderColor || i.defaultColor, s.beginPath(), u = -1, c = 0; c < d.length; ++c)
                            h = d[c], f = e.previousItem(d, c), g = h._view, 0 === c ? g.skip || (s.moveTo(g.x, g.y), u = c) : (f = u === -1 ? f : d[u], g.skip || (u !== c - 1 && !o || u === -1 ? s.moveTo(g.x, g.y) : t(f, h), u = c));
                        s.stroke(), s.restore()
                    }
                })
            }
        }, {}],
        39: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }
                function i(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                }
                var a = t.helpers,
                    n = t.defaults.global,
                    o = n.defaultColor;
                n.elements.point = {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: o,
                    borderWidth: 1,
                    borderColor: o,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                }, t.elements.Point = t.Element.extend({
                    inRange: function(t, e) {
                        var i = this._view;
                        return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                    },
                    inLabelRange: e,
                    inXRange: e,
                    inYRange: i,
                    getCenterPoint: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    },
                    getArea: function() {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function() {
                        var e = this._view,
                            i = this._chart.ctx,
                            r = e.pointStyle,
                            l = e.radius,
                            s = e.x,
                            d = e.y;
                        e.skip || (i.strokeStyle = e.borderColor || o, i.lineWidth = a.getValueOrDefault(e.borderWidth, n.elements.point.borderWidth), i.fillStyle = e.backgroundColor || o, t.canvasHelpers.drawPoint(i, r, l, s, d))
                    }
                })
            }
        }, {}],
        40: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    return void 0 !== t._view.width
                }
                function i(t) {
                    var i,
                        a,
                        n,
                        o,
                        r = t._view;
                    if (e(t)) {
                        var l = r.width / 2;
                        i = r.x - l, a = r.x + l, n = Math.min(r.y, r.base), o = Math.max(r.y, r.base)
                    } else {
                        var s = r.height / 2;
                        i = Math.min(r.x, r.base), a = Math.max(r.x, r.base), n = r.y - s, o = r.y + s
                    }
                    return {
                        left: i,
                        top: n,
                        right: a,
                        bottom: o
                    }
                }
                var a = t.defaults.global;
                a.elements.rectangle = {
                    backgroundColor: a.defaultColor,
                    borderWidth: 0,
                    borderColor: a.defaultColor,
                    borderSkipped: "bottom"
                }, t.elements.Rectangle = t.Element.extend({
                    draw: function() {
                        function t(t) {
                            return s[(u + t) % 4]
                        }
                        var e = this._chart.ctx,
                            i = this._view,
                            a = i.width / 2,
                            n = i.x - a,
                            o = i.x + a,
                            r = i.base - (i.base - i.y),
                            l = i.borderWidth / 2;
                        i.borderWidth && (n += l, o -= l, r += l), e.beginPath(), e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor, e.lineWidth = i.borderWidth;
                        var s = [[n, i.base], [n, r], [o, r], [o, i.base]],
                            d = ["bottom", "left", "top", "right"],
                            u = d.indexOf(i.borderSkipped, 0);
                        u === -1 && (u = 0);
                        var c = t(0);
                        e.moveTo(c[0], c[1]);
                        for (var h = 1; h < 4; h++)
                            c = t(h), e.lineTo(c[0], c[1]);
                        e.fill(), i.borderWidth && e.stroke()
                    },
                    height: function() {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function(t, e) {
                        var a = !1;
                        if (this._view) {
                            var n = i(this);
                            a = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                        }
                        return a
                    },
                    inLabelRange: function(t, a) {
                        var n = this;
                        if (!n._view)
                            return !1;
                        var o = !1,
                            r = i(n);
                        return o = e(n) ? t >= r.left && t <= r.right : a >= r.top && a <= r.bottom
                    },
                    inXRange: function(t) {
                        var e = i(this);
                        return t >= e.left && t <= e.right
                    },
                    inYRange: function(t) {
                        var e = i(this);
                        return t >= e.top && t <= e.bottom
                    },
                    getCenterPoint: function() {
                        var t,
                            i,
                            a = this._view;
                        return e(this) ? (t = a.x, i = (a.y + a.base) / 2) : (t = (a.x + a.base) / 2, i = a.y), {
                            x: t,
                            y: i
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return t.width * Math.abs(t.y - t.base)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                })
            }
        }, {}],
        41: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "bottom"
                    },
                    a = t.Scale.extend({
                        getLabels: function() {
                            var t = this.chart.data;
                            return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                        },
                        determineDataLimits: function() {
                            var t = this,
                                i = t.getLabels();
                            t.minIndex = 0, t.maxIndex = i.length - 1;
                            var a;
                            void 0 !== t.options.ticks.min && (a = e.indexOf(i, t.options.ticks.min), t.minIndex = a !== -1 ? a : t.minIndex), void 0 !== t.options.ticks.max && (a = e.indexOf(i, t.options.ticks.max), t.maxIndex = a !== -1 ? a : t.maxIndex), t.min = i[t.minIndex], t.max = i[t.maxIndex]
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.getLabels();
                            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                a = i.chart.data,
                                n = i.isHorizontal();
                            return a.xLabels && n || a.yLabels && !n ? i.getRightValue(a.datasets[e].data[t]) : i.ticks[t]
                        },
                        getPixelForValue: function(t, e, i, a) {
                            var n = this,
                                o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);
                            if (void 0 !== t && isNaN(e)) {
                                var r = n.getLabels(),
                                    l = r.indexOf(t);
                                e = l !== -1 ? l : e
                            }
                            if (n.isHorizontal()) {
                                var s = n.width - (n.paddingLeft + n.paddingRight),
                                    d = s / o,
                                    u = d * (e - n.minIndex) + n.paddingLeft;
                                return (n.options.gridLines.offsetGridLines && a || n.maxIndex === n.minIndex && a) && (u += d / 2), n.left + Math.round(u);
                            }
                            var c = n.height - (n.paddingTop + n.paddingBottom),
                                h = c / o,
                                f = h * (e - n.minIndex) + n.paddingTop;
                            return n.options.gridLines.offsetGridLines && a && (f += h / 2), n.top + Math.round(f)
                        },
                        getPixelForTick: function(t, e) {
                            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                        },
                        getValueForPixel: function(t) {
                            var e,
                                i = this,
                                a = Math.max(i.ticks.length - (i.options.gridLines.offsetGridLines ? 0 : 1), 1),
                                n = i.isHorizontal(),
                                o = n ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom),
                                r = o / a;
                            return t -= n ? i.left : i.top, i.options.gridLines.offsetGridLines && (t -= r / 2), t -= n ? i.paddingLeft : i.paddingTop, e = t <= 0 ? 0 : Math.round(t / r)
                        },
                        getBasePixel: function() {
                            return this.bottom
                        }
                    });
                t.scaleService.registerScaleType("category", a, i)
            }
        }, {}],
        42: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "left",
                        ticks: {
                            callback: t.Ticks.formatters.linear
                        }
                    },
                    a = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return l ? t.xAxisID === i.id : t.yAxisID === i.id
                            }
                            var i = this,
                                a = i.options,
                                n = i.chart,
                                o = n.data,
                                r = o.datasets,
                                l = i.isHorizontal();
                            if (i.min = null, i.max = null, a.stacked) {
                                var s = {};
                                e.each(r, function(o, r) {
                                    var l = n.getDatasetMeta(r);
                                    void 0 === s[l.type] && (s[l.type] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var d = s[l.type].positiveValues,
                                        u = s[l.type].negativeValues;
                                    n.isDatasetVisible(r) && t(l) && e.each(o.data, function(t, e) {
                                        var n = +i.getRightValue(t);
                                        isNaN(n) || l.data[e].hidden || (d[e] = d[e] || 0, u[e] = u[e] || 0, a.relativePoints ? d[e] = 100 : n < 0 ? u[e] += n : d[e] += n)
                                    })
                                }), e.each(s, function(t) {
                                    var a = t.positiveValues.concat(t.negativeValues),
                                        n = e.min(a),
                                        o = e.max(a);
                                    i.min = null === i.min ? n : Math.min(i.min, n), i.max = null === i.max ? o : Math.max(i.max, o)
                                })
                            } else
                                e.each(r, function(a, o) {
                                    var r = n.getDatasetMeta(o);
                                    n.isDatasetVisible(o) && t(r) && e.each(a.data, function(t, e) {
                                        var a = +i.getRightValue(t);
                                        isNaN(a) || r.data[e].hidden || (null === i.min ? i.min = a : a < i.min && (i.min = a), null === i.max ? i.max = a : a > i.max && (i.max = a))
                                    })
                                });
                            this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var i,
                                a = this,
                                n = a.options.ticks;
                            if (a.isHorizontal())
                                i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(a.width / 50));
                            else {
                                var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);
                                i = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(a.height / (2 * o)))
                            }
                            return i
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e,
                                i,
                                a = this,
                                n = a.paddingLeft,
                                o = a.paddingBottom,
                                r = a.start,
                                l = +a.getRightValue(t),
                                s = a.end - r;
                            return a.isHorizontal() ? (i = a.width - (n + a.paddingRight), e = a.left + i / s * (l - r), Math.round(e + n)) : (i = a.height - (a.paddingTop + o), e = a.bottom - o - i / s * (l - r), Math.round(e))
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal(),
                                a = e.paddingLeft,
                                n = e.paddingBottom,
                                o = i ? e.width - (a + e.paddingRight) : e.height - (e.paddingTop + n),
                                r = (i ? t - e.left - a : e.bottom - n - t) / o;
                            return e.start + (e.end - e.start) * r
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", a, i)
            }
        }, {}],
        43: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = e.noop;
                t.LinearScaleBase = t.Scale.extend({
                    handleTickRangeOptions: function() {
                        var t = this,
                            i = t.options,
                            a = i.ticks;
                        if (a.beginAtZero) {
                            var n = e.sign(t.min),
                                o = e.sign(t.max);
                            n < 0 && o < 0 ? t.max = 0 : n > 0 && o > 0 && (t.min = 0)
                        }
                        void 0 !== a.min ? t.min = a.min : void 0 !== a.suggestedMin && (t.min = Math.min(t.min, a.suggestedMin)), void 0 !== a.max ? t.max = a.max : void 0 !== a.suggestedMax && (t.max = Math.max(t.max, a.suggestedMax)), t.min === t.max && (t.max++, a.beginAtZero || t.min--)
                    },
                    getTickLimit: i,
                    handleDirectionalChanges: i,
                    buildTicks: function() {
                        var i = this,
                            a = i.options,
                            n = a.ticks,
                            o = i.getTickLimit();
                        o = Math.max(2, o);
                        var r = {
                                maxTicks: o,
                                min: n.min,
                                max: n.max,
                                stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize)
                            },
                            l = i.ticks = t.Ticks.generators.linear(r, i);
                        i.handleDirectionalChanges(), i.max = e.max(l), i.min = e.min(l), n.reverse ? (l.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {}],
        44: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        position: "left",
                        ticks: {
                            callback: t.Ticks.formatters.logarithmic
                        }
                    },
                    a = t.Scale.extend({
                        determineDataLimits: function() {
                            function t(t) {
                                return d ? t.xAxisID === i.id : t.yAxisID === i.id
                            }
                            var i = this,
                                a = i.options,
                                n = a.ticks,
                                o = i.chart,
                                r = o.data,
                                l = r.datasets,
                                s = e.getValueOrDefault,
                                d = i.isHorizontal();
                            if (i.min = null, i.max = null, i.minNotZero = null, a.stacked) {
                                var u = {};
                                e.each(l, function(n, r) {
                                    var l = o.getDatasetMeta(r);
                                    o.isDatasetVisible(r) && t(l) && (void 0 === u[l.type] && (u[l.type] = []), e.each(n.data, function(t, e) {
                                        var n = u[l.type],
                                            o = +i.getRightValue(t);
                                        isNaN(o) || l.data[e].hidden || (n[e] = n[e] || 0, a.relativePoints ? n[e] = 100 : n[e] += o)
                                    }))
                                }), e.each(u, function(t) {
                                    var a = e.min(t),
                                        n = e.max(t);
                                    i.min = null === i.min ? a : Math.min(i.min, a), i.max = null === i.max ? n : Math.max(i.max, n)
                                })
                            } else
                                e.each(l, function(a, n) {
                                    var r = o.getDatasetMeta(n);
                                    o.isDatasetVisible(n) && t(r) && e.each(a.data, function(t, e) {
                                        var a = +i.getRightValue(t);
                                        isNaN(a) || r.data[e].hidden || (null === i.min ? i.min = a : a < i.min && (i.min = a), null === i.max ? i.max = a : a > i.max && (i.max = a), 0 !== a && (null === i.minNotZero || a < i.minNotZero) && (i.minNotZero = a))
                                    })
                                });
                            i.min = s(n.min, i.min), i.max = s(n.max, i.max), i.min === i.max && (0 !== i.min && null !== i.min ? (i.min = Math.pow(10, Math.floor(e.log10(i.min)) - 1), i.max = Math.pow(10, Math.floor(e.log10(i.max)) + 1)) : (i.min = 1, i.max = 10))
                        },
                        buildTicks: function() {
                            var i = this,
                                a = i.options,
                                n = a.ticks,
                                o = {
                                    min: n.min,
                                    max: n.max
                                },
                                r = i.ticks = t.Ticks.generators.logarithmic(o, i);
                            i.isHorizontal() || r.reverse(), i.max = e.max(r), i.min = e.min(r), n.reverse ? (r.reverse(), i.start = i.max, i.end = i.min) : (i.start = i.min, i.end = i.max)
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        getPixelForValue: function(t) {
                            var i,
                                a,
                                n,
                                o = this,
                                r = o.start,
                                l = +o.getRightValue(t),
                                s = o.paddingTop,
                                d = o.paddingBottom,
                                u = o.paddingLeft,
                                c = o.options,
                                h = c.ticks;
                            return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r), 0 === l ? a = o.left + u : (i = o.width - (u + o.paddingRight), a = o.left + i / n * (e.log10(l) - e.log10(r)), a += u)) : (i = o.height - (s + d), 0 !== r || h.reverse ? 0 === o.end && h.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero), a = l === o.end ? o.top + s : l === o.minNotZero ? o.top + s + .02 * i : o.top + s + .02 * i + .98 * i / n * (e.log10(l) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r), i = o.height - (s + d), a = o.bottom - d - i / n * (e.log10(l) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero), a = l === r ? o.bottom - d : l === o.minNotZero ? o.bottom - d - .02 * i : o.bottom - d - .02 * i - .98 * i / n * (e.log10(l) - e.log10(o.minNotZero)))), a
                        },
                        getValueForPixel: function(t) {
                            var i,
                                a,
                                n = this,
                                o = e.log10(n.end) - e.log10(n.start);
                            return n.isHorizontal() ? (a = n.width - (n.paddingLeft + n.paddingRight), i = n.start * Math.pow(10, (t - n.left - n.paddingLeft) * o / a)) : (a = n.height - (n.paddingTop + n.paddingBottom), i = Math.pow(10, (n.bottom - n.paddingBottom - t) * o / a) / n.start), i
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", a, i)
            }
        }, {}],
        45: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers,
                    i = t.defaults.global,
                    a = {
                        display: !0,
                        animate: !0,
                        lineArc: !1,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: t.Ticks.formatters.linear
                        },
                        pointLabels: {
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    },
                    n = t.LinearScaleBase.extend({
                        getValueCount: function() {
                            return this.chart.data.labels.length
                        },
                        setDimensions: function() {
                            var t = this,
                                a = t.options,
                                n = a.ticks;
                            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                            var o = e.min([t.height, t.width]),
                                r = e.getValueOrDefault(n.fontSize, i.defaultFontSize);
                            t.drawingArea = a.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2
                        },
                        determineDataLimits: function() {
                            var t = this,
                                i = t.chart;
                            t.min = null, t.max = null, e.each(i.data.datasets, function(a, n) {
                                if (i.isDatasetVisible(n)) {
                                    var o = i.getDatasetMeta(n);
                                    e.each(a.data, function(e, i) {
                                        var a = +t.getRightValue(e);
                                        isNaN(a) || o.data[i].hidden || (null === t.min ? t.min = a : a < t.min && (t.min = a), null === t.max ? t.max = a : a > t.max && (t.max = a))
                                    })
                                }
                            }), t.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t = this.options.ticks,
                                a = e.getValueOrDefault(t.fontSize, i.defaultFontSize);
                            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * a)))
                        },
                        convertTicksToLabels: function() {
                            var e = this;
                            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        fit: function() {
                            var t,
                                a,
                                n,
                                o,
                                r,
                                l,
                                s,
                                d,
                                u,
                                c,
                                h,
                                f,
                                g = this.options.pointLabels,
                                p = e.getValueOrDefault(g.fontSize, i.defaultFontSize),
                                m = e.getValueOrDefault(g.fontStyle, i.defaultFontStyle),
                                b = e.getValueOrDefault(g.fontFamily, i.defaultFontFamily),
                                v = e.fontString(p, m, b),
                                x = e.min([this.height / 2 - p - 5, this.width / 2]),
                                y = this.width,
                                k = 0;
                            for (this.ctx.font = v, a = 0; a < this.getValueCount(); a++) {
                                t = this.getPointPosition(a, x), n = this.ctx.measureText(this.pointLabels[a] ? this.pointLabels[a] : "").width + 5;
                                var S = this.getIndexAngle(a) + Math.PI / 2,
                                    w = 360 * S / (2 * Math.PI) % 360;
                                0 === w || 180 === w ? (o = n / 2, t.x + o > y && (y = t.x + o, r = a), t.x - o < k && (k = t.x - o, s = a)) : w < 180 ? t.x + n > y && (y = t.x + n, r = a) : t.x - n < k && (k = t.x - n, s = a)
                            }
                            u = k, c = Math.ceil(y - this.width), l = this.getIndexAngle(r), d = this.getIndexAngle(s), h = c / Math.sin(l + Math.PI / 2), f = u / Math.sin(d + Math.PI / 2), h = e.isNumber(h) ? h : 0, f = e.isNumber(f) ? f : 0, this.drawingArea = Math.round(x - (f + h) / 2), this.setCenterPoint(f, h)
                        },
                        setCenterPoint: function(t, e) {
                            var i = this,
                                a = i.width - e - i.drawingArea,
                                n = t + i.drawingArea;
                            i.xCenter = Math.round((n + a) / 2 + i.left), i.yCenter = Math.round(i.height / 2 + i.top)
                        },
                        getIndexAngle: function(t) {
                            var e = 2 * Math.PI / this.getValueCount(),
                                i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
                                a = i * Math.PI * 2 / 360;
                            return t * e - Math.PI / 2 + a
                        },
                        getDistanceFromCenterForValue: function(t) {
                            var e = this;
                            if (null === t)
                                return 0;
                            var i = e.drawingArea / (e.max - e.min);
                            return e.options.reverse ? (e.max - t) * i : (t - e.min) * i
                        },
                        getPointPosition: function(t, e) {
                            var i = this,
                                a = i.getIndexAngle(t);
                            return {
                                x: Math.round(Math.cos(a) * e) + i.xCenter,
                                y: Math.round(Math.sin(a) * e) + i.yCenter
                            }
                        },
                        getPointPositionForValue: function(t, e) {
                            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                        },
                        getBasePosition: function() {
                            var t = this,
                                e = t.min,
                                i = t.max;
                            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && i < 0 ? i : e > 0 && i > 0 ? e : 0)
                        },
                        draw: function() {
                            var t = this,
                                a = t.options,
                                n = a.gridLines,
                                o = a.ticks,
                                r = a.angleLines,
                                l = a.pointLabels,
                                s = e.getValueOrDefault;
                            if (a.display) {
                                var d = t.ctx,
                                    u = s(o.fontSize, i.defaultFontSize),
                                    c = s(o.fontStyle, i.defaultFontStyle),
                                    h = s(o.fontFamily, i.defaultFontFamily),
                                    f = e.fontString(u, c, h);
                                if (e.each(t.ticks, function(r, l) {
                                    if (l > 0 || a.reverse) {
                                        var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),
                                            h = t.yCenter - c;
                                        if (n.display && 0 !== l)
                                            if (d.strokeStyle = e.getValueAtIndexOrDefault(n.color, l - 1), d.lineWidth = e.getValueAtIndexOrDefault(n.lineWidth, l - 1), a.lineArc)
                                                d.beginPath(), d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI), d.closePath(), d.stroke();
                                            else {
                                                d.beginPath();
                                                for (var g = 0; g < t.getValueCount(); g++) {
                                                    var p = t.getPointPosition(g, c);
                                                    0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y)
                                                }
                                                d.closePath(), d.stroke()
                                            }
                                        if (o.display) {
                                            var m = s(o.fontColor, i.defaultFontColor);
                                            if (d.font = f, o.showLabelBackdrop) {
                                                var b = d.measureText(r).width;
                                                d.fillStyle = o.backdropColor, d.fillRect(t.xCenter - b / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, b + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY)
                                            }
                                            d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = m, d.fillText(r, t.xCenter, h)
                                        }
                                    }
                                }), !a.lineArc) {
                                    d.lineWidth = r.lineWidth, d.strokeStyle = r.color;
                                    for (var g = t.getDistanceFromCenterForValue(a.reverse ? t.min : t.max), p = s(l.fontSize, i.defaultFontSize), m = s(l.fontStyle, i.defaultFontStyle), b = s(l.fontFamily, i.defaultFontFamily), v = e.fontString(p, m, b), x = t.getValueCount() - 1; x >= 0; x--) {
                                        if (r.display) {
                                            var y = t.getPointPosition(x, g);
                                            d.beginPath(), d.moveTo(t.xCenter, t.yCenter), d.lineTo(y.x, y.y), d.stroke(), d.closePath()
                                        }
                                        var k = t.getPointPosition(x, g + 5),
                                            S = s(l.fontColor, i.defaultFontColor);
                                        d.font = v, d.fillStyle = S;
                                        var w = t.pointLabels,
                                            M = this.getIndexAngle(x) + Math.PI / 2,
                                            C = 360 * M / (2 * Math.PI) % 360;
                                        0 === C || 180 === C ? d.textAlign = "center" : C < 180 ? d.textAlign = "left" : d.textAlign = "right", 90 === C || 270 === C ? d.textBaseline = "middle" : C > 270 || C < 90 ? d.textBaseline = "bottom" : d.textBaseline = "top", d.fillText(w[x] ? w[x] : "", k.x, k.y)
                                    }
                                }
                            }
                        }
                    });
                t.scaleService.registerScaleType("radialLinear", n, a)
            }
        }, {}],
        46: [function(t, e, i) {
            "use strict";
            var a = t(1);
            a = "function" == typeof a ? a : window.moment, e.exports = function(t) {
                var e = t.helpers,
                    i = {
                        units: [{
                            name: "millisecond",
                            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                        }, {
                            name: "second",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "minute",
                            steps: [1, 2, 5, 10, 30]
                        }, {
                            name: "hour",
                            steps: [1, 2, 3, 6, 12]
                        }, {
                            name: "day",
                            steps: [1, 2, 5]
                        }, {
                            name: "week",
                            maxStep: 4
                        }, {
                            name: "month",
                            maxStep: 3
                        }, {
                            name: "quarter",
                            maxStep: 4
                        }, {
                            name: "year",
                            maxStep: !1
                        }]
                    },
                    n = {
                        position: "bottom",
                        time: {
                            parser: !1,
                            format: !1,
                            unit: !1,
                            round: !1,
                            displayFormat: !1,
                            isoWeekday: !1,
                            minUnit: "millisecond",
                            displayFormats: {
                                millisecond: "h:mm:ss.SSS a",
                                second: "h:mm:ss a",
                                minute: "h:mm:ss a",
                                hour: "MMM D, hA",
                                day: "ll",
                                week: "ll",
                                month: "MMM YYYY",
                                quarter: "[Q]Q - YYYY",
                                year: "YYYY"
                            }
                        },
                        ticks: {
                            autoSkip: !1
                        }
                    },
                    o = t.Scale.extend({
                        initialize: function() {
                            if (!a)
                                throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                            t.Scale.prototype.initialize.call(this)
                        },
                        getLabelMoment: function(t, e) {
                            return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null
                        },
                        getLabelDiff: function(t, e) {
                            var i = this;
                            return null === t || null === e ? null : (void 0 === i.labelDiffs && i.buildLabelDiffs(), "undefined" != typeof i.labelDiffs[t] ? i.labelDiffs[t][e] : null)
                        },
                        getMomentStartOf: function(t) {
                            var e = this;
                            return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
                        },
                        determineDataLimits: function() {
                            var t = this;
                            t.labelMoments = [];
                            var i = [];
                            t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function(e) {
                                var a = t.parseTime(e);
                                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), i.push(a))
                            }, t), t.firstTick = a.min.call(t, i), t.lastTick = a.max.call(t, i)) : (t.firstTick = null, t.lastTick = null), e.each(t.chart.data.datasets, function(n, o) {
                                var r = [],
                                    l = t.chart.isDatasetVisible(o);
                                "object" == typeof n.data[0] && null !== n.data[0] ? e.each(n.data, function(e) {
                                    var i = t.parseTime(t.getRightValue(e));
                                    i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), r.push(i), l && (t.firstTick = null !== t.firstTick ? a.min(t.firstTick, i) : i, t.lastTick = null !== t.lastTick ? a.max(t.lastTick, i) : i))
                                }, t) : r = i, t.labelMoments.push(r)
                            }, t), t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)), t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)), t.firstTick = (t.firstTick || a()).clone(), t.lastTick = (t.lastTick || a()).clone()
                        },
                        buildLabelDiffs: function() {
                            var t = this;
                            t.labelDiffs = [];
                            var i = [];
                            t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function(e) {
                                var a = t.parseTime(e);
                                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round), i.push(a.diff(t.firstTick, t.tickUnit, !0)))
                            }, t), e.each(t.chart.data.datasets, function(a) {
                                var n = [];
                                "object" == typeof a.data[0] && null !== a.data[0] ? e.each(a.data, function(e) {
                                    var i = t.parseTime(t.getRightValue(e));
                                    i.isValid() && (t.options.time.round && i.startOf(t.options.time.round), n.push(i.diff(t.firstTick, t.tickUnit, !0)))
                                }, t) : n = i, t.labelDiffs.push(n)
                            }, t)
                        },
                        buildTicks: function() {
                            var a = this;
                            a.ctx.save();
                            var n = e.getValueOrDefault(a.options.ticks.fontSize, t.defaults.global.defaultFontSize),
                                o = e.getValueOrDefault(a.options.ticks.fontStyle, t.defaults.global.defaultFontStyle),
                                r = e.getValueOrDefault(a.options.ticks.fontFamily, t.defaults.global.defaultFontFamily),
                                l = e.fontString(n, o, r);
                            if (a.ctx.font = l, a.ticks = [], a.unitScale = 1, a.scaleSizeInUnits = 0, a.options.time.unit)
                                a.tickUnit = a.options.time.unit || "day", a.displayFormat = a.options.time.displayFormats[a.tickUnit], a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0), a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, 1);
                            else {
                                var s = a.isHorizontal() ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom),
                                    d = a.tickFormatFunction(a.firstTick, 0, []),
                                    u = a.ctx.measureText(d).width,
                                    c = Math.cos(e.toRadians(a.options.ticks.maxRotation)),
                                    h = Math.sin(e.toRadians(a.options.ticks.maxRotation));
                                u = u * c + n * h;
                                var f = s / u;
                                a.tickUnit = a.options.time.minUnit, a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0), a.displayFormat = a.options.time.displayFormats[a.tickUnit];
                                for (var g = 0, p = i.units[g]; g < i.units.length;) {
                                    if (a.unitScale = 1, e.isArray(p.steps) && Math.ceil(a.scaleSizeInUnits / f) < e.max(p.steps)) {
                                        for (var m = 0; m < p.steps.length; ++m)
                                            if (p.steps[m] >= Math.ceil(a.scaleSizeInUnits / f)) {
                                                a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, p.steps[m]);
                                                break
                                            }
                                        break
                                    }
                                    if (p.maxStep === !1 || Math.ceil(a.scaleSizeInUnits / f) < p.maxStep) {
                                        a.unitScale = e.getValueOrDefault(a.options.time.unitStepSize, Math.ceil(a.scaleSizeInUnits / f));
                                        break
                                    }
                                    ++g, p = i.units[g], a.tickUnit = p.name;
                                    var b = a.firstTick.diff(a.getMomentStartOf(a.firstTick), a.tickUnit, !0),
                                        v = a.getMomentStartOf(a.lastTick.clone().add(1, a.tickUnit)).diff(a.lastTick, a.tickUnit, !0);
                                    a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0) + b + v, a.displayFormat = a.options.time.displayFormats[p.name]
                                }
                            }
                            var x;
                            if (a.options.time.min ? x = a.getMomentStartOf(a.firstTick) : (a.firstTick = a.getMomentStartOf(a.firstTick), x = a.firstTick), !a.options.time.max) {
                                var y = a.getMomentStartOf(a.lastTick),
                                    k = y.diff(a.lastTick, a.tickUnit, !0);
                                k < 0 ? a.lastTick = a.getMomentStartOf(a.lastTick.add(1, a.tickUnit)) : k >= 0 && (a.lastTick = y), a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0)
                            }
                            a.options.time.displayFormat && (a.displayFormat = a.options.time.displayFormat), a.ticks.push(a.firstTick.clone());
                            for (var S = 1; S <= a.scaleSizeInUnits; ++S) {
                                var w = x.clone().add(S, a.tickUnit);
                                if (a.options.time.max && w.diff(a.lastTick, a.tickUnit, !0) >= 0)
                                    break;
                                S % a.unitScale === 0 && a.ticks.push(w)
                            }
                            var M = a.ticks[a.ticks.length - 1].diff(a.lastTick, a.tickUnit);
                            0 === M && 0 !== a.scaleSizeInUnits || (a.options.time.max ? (a.ticks.push(a.lastTick.clone()), a.scaleSizeInUnits = a.lastTick.diff(a.ticks[0], a.tickUnit, !0)) : (a.ticks.push(a.lastTick.clone()), a.scaleSizeInUnits = a.lastTick.diff(a.firstTick, a.tickUnit, !0))), a.ctx.restore(), a.labelDiffs = void 0
                        },
                        getLabelForIndex: function(t, e) {
                            var i = this,
                                a = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "";
                            return "object" == typeof i.chart.data.datasets[e].data[0] && (a = i.getRightValue(i.chart.data.datasets[e].data[t])), i.options.time.tooltipFormat && (a = i.parseTime(a).format(i.options.time.tooltipFormat)), a
                        },
                        tickFormatFunction: function(t, i, a) {
                            var n = t.format(this.displayFormat),
                                o = this.options.ticks,
                                r = e.getValueOrDefault(o.callback, o.userCallback);
                            return r ? r(n, i, a) : n
                        },
                        convertTicksToLabels: function() {
                            var t = this;
                            t.tickMoments = t.ticks, t.ticks = t.ticks.map(t.tickFormatFunction, t)
                        },
                        getPixelForValue: function(t, e, i) {
                            var a = this,
                                n = null;
                            if (void 0 !== e && void 0 !== i && (n = a.getLabelDiff(i, e)), null === n && (t && t.isValid || (t = a.parseTime(a.getRightValue(t))), t && t.isValid && t.isValid() && (n = t.diff(a.firstTick, a.tickUnit, !0))), null !== n) {
                                var o = 0 !== n ? n / a.scaleSizeInUnits : n;
                                if (a.isHorizontal()) {
                                    var r = a.width - (a.paddingLeft + a.paddingRight),
                                        l = r * o + a.paddingLeft;
                                    return a.left + Math.round(l)
                                }
                                var s = a.height - (a.paddingTop + a.paddingBottom),
                                    d = s * o + a.paddingTop;
                                return a.top + Math.round(d)
                            }
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickMoments[t], null, null)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom),
                                n = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / i;
                            return n *= e.scaleSizeInUnits, e.firstTick.clone().add(a.duration(n, e.tickUnit).asSeconds(), "seconds")
                        },
                        parseTime: function(t) {
                            var e = this;
                            return "string" == typeof e.options.time.parser ? a(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? a(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"), e.options.time.format(t)) : a(t, e.options.time.format)
                        }
                    });
                t.scaleService.registerScaleType("time", o, n)
            }
        }, {
            1: 1
        }]
    }, {}, [7])(7)
});

