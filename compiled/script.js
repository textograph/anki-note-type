/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) { "use strict"; var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        E = C.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o) }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.5.1",
        S = function(e, t) { return new S.fn.init(e, t) };

    function p(e) { var t = !!e && "length" in e && e.length,
            n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) }
    S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() { return s.call(this) }, get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function(e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function(e) { return S.each(this, e) }, map: function(n) { return this.pushStack(S.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(s.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(S.grep(this, function(e, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(S.grep(this, function(e, t) { return t % 2 })) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() { var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, globalEval: function(e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function(e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function(e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e }, grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r }, map: function(e, t, n) { var r, i, o = 0,
                a = []; if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function(n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) { var n = e.length,
                        r = 0; while (e[n++] = t[r++]);
                    e.length = n - 1 } } }

        function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[S] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { var n = e.split("|"),
                r = n.length; while (r--) b.attrHandle[n[r]] = t }

        function pe(e, t) { var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) { return le(function(o) { return o = +o, le(function(e, t) { var n, r = a([], e.length, o),
                        i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function(e) { var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function(e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0; while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) { var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function(e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) { if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1 }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return l = !0, 0; var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t);
                    n = e; while (n = n.parentNode) a.unshift(n);
                    n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) }
                return 0 < se(t, C, null, [e]).length }, se.contains = function(e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) { var t, n = [],
                    r = 0,
                    i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(h, e, t, g, v) { var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e; return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) { var n, r = a(e, o),
                                i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function(e) { var r = [],
                            i = [],
                            s = f(e.replace($, "$1")); return s[S] ? le(function(e, t, n, r) { var i, o = s(e, null, r, []),
                                a = e.length; while (a--)(i = o[a]) && (e[a] = !(t[a] = i)) }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function(t) { return function(e) { return 0 < se(t, e).length } }), contains: le(function(t) { return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function(n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) { var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === a }, focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return J.test(e.nodeName) }, input: function(e) { return Q.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function() { return [0] }), last: ve(function(e, t) { return [t - 1] }), eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }), gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) { var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++; return e.first ? function(e, t, n) { while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1 } : function(e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } }

        function we(i) { return 1 < i.length ? function(e, t, n) { var r = i.length; while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0 } : i[0] }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) { var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r) }
                        o = p.length; while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) }

        function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) }
                    c.push(t) }
            return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function(e, t) { var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) { var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (k = h) }
                        m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f) }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function(e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function(e, t, n) { var r = [],
                i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) { if (i && S(e).is(n)) break;
                    r.push(e) }
            return r },
        T = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        k = S.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) { return m(n) ? S.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) }
    S.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function(e) { var t, n, r = this.length,
                i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function() { for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function(e) { return this.pushStack(D(this, e || [], !1)) }, not: function(e) { return this.pushStack(D(this, e || [], !0)) }, is: function(e) { return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) { var r, i; if (!e) return this; if (n = n || j, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, j = S(E); var L = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };

    function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    S.fn.extend({ has: function(e) { var t = S(e, this),
                n = t.length; return this.filter(function() { for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0 }) }, closest: function(e, t) { var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e); if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function(e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h(e, "parentNode") }, parentsUntil: function(e, t, n) { return h(e, "parentNode", n) }, next: function(e) { return O(e, "nextSibling") }, prev: function(e) { return O(e, "previousSibling") }, nextAll: function(e) { return h(e, "nextSibling") }, prevAll: function(e) { return h(e, "previousSibling") }, nextUntil: function(e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h(e, "previousSibling", n) }, siblings: function(e) { return T((e.parentNode || {}).firstChild, e) }, children: function(e) { return T(e.firstChild) }, contents: function(e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function(r, i) { S.fn[r] = function(e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g;

    function R(e) { return e }

    function M(e) { throw e }

    function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    S.Callbacks = function(r) { var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "") },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return S.each(arguments, function(e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } }; return f }, S.extend({ Deferred: function(e) { var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = { state: function() { return i }, always: function() { return s.done(arguments).fail(arguments), this }, "catch": function(e) { return a.then(null, e) }, pipe: function() { var i = arguments; return S.Deferred(function(r) { S.each(o, function(e, t) { var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function(t, n, r) { var u = 0;

                        function l(i, o, a, s) { return function() { var n = this,
                                    r = arguments,
                                    e = function() { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } },
                                    t = s ? e : function() { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function(e) { return null != e ? S.extend(e, a) : a } },
                s = {}; return S.each(o, function(e, t) { var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) { var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function(e) { C.setTimeout(function() { throw e }) }; var F = S.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() }
    S.fn.ready = function(e) { return F.then(e)["catch"](function(e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function(e, t, n, r, i, o, a) { var s = 0,
                u = e.length,
                l = null == n; if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(S(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) { return t.toUpperCase() }

    function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function G() { this.expando = S.expando + G.uid++ }
    G.uid = 1, G.prototype = { cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function(e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r]; return i }, get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) {}
                Q.set(e, t, n) } else n = void 0;
        return n }
    S.extend({ hasData: function(e) { return Q.hasData(e) || Y.hasData(e) }, data: function(e, t, n) { return Q.access(e, t, n) }, removeData: function(e, t) { Q.remove(e, t) }, _data: function(e, t, n) { return Y.access(e, t, n) }, _removeData: function(e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function(n, e) { var t, r, i, o = this[0],
                a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function() { Q.set(this, n) }) : $(this, function(e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function(e) { return this.each(function() { Q.remove(this, e) }) } }), S.extend({ queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function(e, t) { t = t || "fx"; var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function() { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { S.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) { var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) { return S.contains(e.ownerDocument, e) },
        oe = { composed: !0 };
    re.getRootNode && (ie = function(e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") };

    function se(e, t, n, r) { var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return S.css(e, t, "") },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {};

    function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    S.fn.extend({ show: function() { return le(this, !0) }, hide: function() { return le(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0; while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() { return !0 }

    function Ee() { return !1 }

    function Se(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function ke(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e; return 1 === o && (a = i, (i = function(e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function() { S.event.add(this, t, i, r, n) }) }

    function Ae(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function(e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce) }
    S.event = { global: {}, add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function(e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function(e) { var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function(e, t) { var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o }) }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function(t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function(e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function(e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e, t) { S.event.special[e] = { setup: function() { return Ae(this, e, Se), !1 }, trigger: function() { return Ae(this, e), !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function(e) { var t, n = e.relatedTarget,
                    r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function(e, t, n, r) { return ke(this, e, t, n, r) }, one: function(e, t, n, r) { return ke(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() { S.event.remove(this, e, n, t) }) } }); var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e }

    function Le(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function He(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Oe(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } }

    function Pe(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) { var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l)) } return n }

    function Re(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    S.extend({ htmlPrefilter: function(e) { return e }, clone: function(e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function(e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) { if (t = n[Y.expando]) { if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0 }
                    n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function(e) { return Re(this, e, !0) }, remove: function(e) { return Re(this, e) }, text: function(e) { return $(this, function(e) { return void 0 === e ? S.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function() { return Pe(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e) }) }, prepend: function() { return Pe(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = qe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return Pe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return S.clone(this, e, t) }) }, html: function(e) { return $(this, function(e) { var t = this[0] || {},
                    n = 0,
                    r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var n = []; return Pe(this, arguments, function(e) { var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { S.fn[e] = function(e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        We = function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function $e(e, t) { return { get: function() { if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get } } }! function() {
        function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } }

        function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), s }, scrollboxSize: function() { return e(), i }, reliableTrDimensions: function() { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a } })) }(); var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) { var t = S.cssProps[e] || Ue[e]; return t || (e in ze ? e : Ue[e] = function(e) { var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length; while (n--)
                if ((e = _e[n] + t) in ze) return e }(e) || e) } var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Qe = { letterSpacing: "0", fontWeight: "400" };

    function Je(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function Ke(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u }

    function Ze(e, t, n) { var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1); if (Me.test(a)) { if (!n) return a;
            a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px" }

    function et(e, t, n, r, i) { return new et.prototype.init(e, t, n, r, i) }
    S.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Be(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style; if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function(e, t, n, r) { var i, o, a, s = X(t); return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function(e, u) { S.cssHooks[u] = { get: function(e, t, n) { if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() { return Ze(e, u, n) }) }, set: function(e, t, n) { var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s) } } }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function(i, o) { S.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Je) }), S.fn.extend({ css: function(e, t) { return $(this, function(e, t, n) { var r, i, o = {},
                    a = 0; if (Array.isArray(t)) { for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = et).prototype = { constructor: et, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function() { var e = et.propHooks[this.prop]; return e && e.get ? e.get(this) : et.propHooks._default.get(this) }, run: function(e) { var t, n = et.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {}; var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() { nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick()) }

    function ut() { return C.setTimeout(function() { tt = void 0 }), tt = Date.now() }

    function lt(e, t) { var n, r = 0,
            i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r }

    function ft(o, e, t) { var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }),
            c = l.props; for (! function(e, t) { var n, r, i, o, a; for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l }
    S.Animation = S.extend(ft, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t) }, prefilters: [function(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], ot.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0 }
                    d[r] = v && v[r] || S.style(e, r) }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function() { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function(e, t) { t ? ft.prefilters.unshift(e) : ft.prefilters.push(e) } }), S.speed = function(e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(t, e, n, r) { var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() { var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function(i, e, o) { var a = function(e) { var t = e.stop;
                delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() { var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]); for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), S.each(["toggle", "show", "hide"], function(e, r) { var i = S.fn[r];
        S.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n) } }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { S.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function() { var e, t = 0,
            n = S.timers; for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0 }, S.fx.timer = function(e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function() { nt || (nt = !0, st()) }, S.fx.stop = function() { nt = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) { var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) } }) }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value; var pt, dt = S.expr.attrHandle;
    S.fn.extend({ attr: function(e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { S.removeAttr(this, e) }) } }), S.extend({ attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function(e, t) { var n, r = 0,
                i = t && t.match(P); if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n) } }), pt = { set: function(e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) { var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r } }); var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) { return (e.match(P) || []).join(" ") }

    function yt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function mt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    S.fn.extend({ prop: function(e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(e) { var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).addClass(t.call(this, e, yt(this))) }); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, removeClass: function(t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function(e) { S(this).removeClass(t.call(this, e, yt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s) }
            return this }, toggleClass: function(i, t) { var o = typeof i,
                a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { S(this).toggleClass(i.call(this, e, yt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = S(this), r = mt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function(e) { var t, n, r = 0;
            t = " " + e + " "; while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1 } }); var xt = /\r/g;
    S.fn.extend({ val: function(n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function(e) { var t = S.find.attr(e, "value"); return null != t ? t : vt(S.text(e)) } }, select: { get: function(e) { var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t;
                            s.push(t) }
                    return s }, set: function(e, t) { var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length; while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function() { S.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) { e.stopPropagation() };
    S.extend(S.event, { trigger: function(e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) }
                i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function(e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function(e, t) { return this.each(function() { S.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n, r) { var i = function(e) { S.event.simulate(r, e.target, S.event.fix(e)) };
        S.event.special[r] = { setup: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var Tt = C.location,
        Ct = { guid: Date.now() },
        Et = /\?/;
    S.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t }; var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function(e, t) { r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i) }
    S.param = function(e, t) { var n, r = [],
            i = function(e, t) { var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) Dt(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function() { return S.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: n.replace(kt, "\r\n") } }).get() } }); var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0,
                i = e.toLowerCase().match(P) || []; if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Bt(t, i, o, a) { var s = {},
            u = t === Mt;

        function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") }

    function $t(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e }
    Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e) }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = { readyState: 0, getResponseHeader: function(e) { var t; if (h) { if (!n) { n = {}; while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return h ? p : null }, setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function(e) { return null == h && (v.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this }, abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, r) { var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { var r, i, o, a, s = e.contents,
                        u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i) }
                        o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) { var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift(); while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function(e, t, n) { return S.get(e, t, n, "json") }, getScript: function(e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function(e, i) { S[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function(e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function(n) { return m(n) ? this.each(function(e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function() { var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = m(t); return this.each(function(e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function(e) { return this.parent(e).not("body").each(function() { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function(e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} }; var _t = { 0: 200, 1223: 204 },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) { var o, a; if (y.cors || zt && !i.crossDomain) return { send: function(e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function() { o && o() } } }), S.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } }); var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || S.expando + "_" + Ct.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function(e, t, n) { var r, i, o, a = this,
            s = e.indexOf(" "); return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function(t) { return S.grep(S.timers, function(e) { return t === e.elem }).length }, S.offset = { setOffset: function(e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f)) } }, S.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function() { if (this[0]) { var e, t, n, r = this[0],
                    i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) { var o = "pageYOffset" === i;
        S.fn[t] = function(e) { return $(this, function(e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function(e, n) { S.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function(a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) { S.fn[o] = function(e, t) { var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { S.fn[t] = function(e) { return this.on(t, e) } }), S.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { S.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function(e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function(e) { return null == e ? "" : (e + "").replace(Gt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return S }); var Yt = C.jQuery,
        Qt = C.$; return S.noConflict = function(e) { return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });
// https://d3js.org v5.16.0 Copyright 2020 Mike Bostock
! function(t, n) { "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = t || self).d3 = t.d3 || {}) }(this, function(t) { "use strict";

    function n(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function e(t) { var e; return 1 === t.length && (e = t, t = function(t, r) { return n(e(t), r) }), { left: function(n, e, r, i) { for (null == r && (r = 0), null == i && (i = n.length); r < i;) { var o = r + i >>> 1;
                    t(n[o], e) < 0 ? r = o + 1 : i = o } return r }, right: function(n, e, r, i) { for (null == r && (r = 0), null == i && (i = n.length); r < i;) { var o = r + i >>> 1;
                    t(n[o], e) > 0 ? i = o : r = o + 1 } return r } } } var r = e(n),
        i = r.right,
        o = r.left;

    function a(t, n) { return [t, n] }

    function u(t) { return null === t ? NaN : +t }

    function c(t, n) { var e, r, i = t.length,
            o = 0,
            a = -1,
            c = 0,
            f = 0; if (null == n)
            for (; ++a < i;) isNaN(e = u(t[a])) || (f += (r = e - c) * (e - (c += r / ++o)));
        else
            for (; ++a < i;) isNaN(e = u(n(t[a], a, t))) || (f += (r = e - c) * (e - (c += r / ++o))); if (o > 1) return f / (o - 1) }

    function f(t, n) { var e = c(t, n); return e ? Math.sqrt(e) : e }

    function s(t, n) { var e, r, i, o = t.length,
            a = -1; if (null == n) { for (; ++a < o;)
                if (null != (e = t[a]) && e >= e)
                    for (r = i = e; ++a < o;) null != (e = t[a]) && (r > e && (r = e), i < e && (i = e)) } else
            for (; ++a < o;)
                if (null != (e = n(t[a], a, t)) && e >= e)
                    for (r = i = e; ++a < o;) null != (e = n(t[a], a, t)) && (r > e && (r = e), i < e && (i = e)); return [r, i] } var l = Array.prototype,
        h = l.slice,
        d = l.map;

    function p(t) { return function() { return t } }

    function v(t) { return t }

    function g(t, n, e) { t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e; for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e; return o } var y = Math.sqrt(50),
        _ = Math.sqrt(10),
        b = Math.sqrt(2);

    function m(t, n, e) { var r, i, o, a, u = -1; if (e = +e, (t = +t) === (n = +n) && e > 0) return [t]; if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = x(t, n, e)) || !isFinite(a)) return []; if (a > 0)
            for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array(i = Math.ceil(n - t + 1)); ++u < i;) o[u] = (t + u) * a;
        else
            for (t = Math.floor(t * a), n = Math.ceil(n * a), o = new Array(i = Math.ceil(t - n + 1)); ++u < i;) o[u] = (t - u) / a; return r && o.reverse(), o }

    function x(t, n, e) { var r = (n - t) / Math.max(0, e),
            i = Math.floor(Math.log(r) / Math.LN10),
            o = r / Math.pow(10, i); return i >= 0 ? (o >= y ? 10 : o >= _ ? 5 : o >= b ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= y ? 10 : o >= _ ? 5 : o >= b ? 2 : 1) }

    function w(t, n, e) { var r = Math.abs(n - t) / Math.max(0, e),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            o = r / i; return o >= y ? i *= 10 : o >= _ ? i *= 5 : o >= b && (i *= 2), n < t ? -i : i }

    function M(t) { return Math.ceil(Math.log(t.length) / Math.LN2) + 1 }

    function N(t, n, e) { if (null == e && (e = u), r = t.length) { if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t); if (n >= 1) return +e(t[r - 1], r - 1, t); var r, i = (r - 1) * n,
                o = Math.floor(i),
                a = +e(t[o], o, t); return a + (+e(t[o + 1], o + 1, t) - a) * (i - o) } }

    function T(t, n) { var e, r, i = t.length,
            o = -1; if (null == n) { for (; ++o < i;)
                if (null != (e = t[o]) && e >= e)
                    for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e) } else
            for (; ++o < i;)
                if (null != (e = n(t[o], o, t)) && e >= e)
                    for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e); return r }

    function A(t) { for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length; for (e = new Array(a); --i >= 0;)
            for (n = (r = t[i]).length; --n >= 0;) e[--a] = r[n]; return e }

    function S(t, n) { var e, r, i = t.length,
            o = -1; if (null == n) { for (; ++o < i;)
                if (null != (e = t[o]) && e >= e)
                    for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e) } else
            for (; ++o < i;)
                if (null != (e = n(t[o], o, t)) && e >= e)
                    for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e); return r }

    function k(t) { if (!(i = t.length)) return []; for (var n = -1, e = S(t, E), r = new Array(e); ++n < e;)
            for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n]; return r }

    function E(t) { return t.length } var C = Array.prototype.slice;

    function P(t) { return t } var z = 1,
        R = 2,
        D = 3,
        q = 4,
        L = 1e-6;

    function U(t) { return "translate(" + (t + .5) + ",0)" }

    function O(t) { return "translate(0," + (t + .5) + ")" }

    function B() { return !this.__axis }

    function F(t, n) { var e = [],
            r = null,
            i = null,
            o = 6,
            a = 6,
            u = 3,
            c = t === z || t === q ? -1 : 1,
            f = t === q || t === R ? "x" : "y",
            s = t === z || t === D ? U : O;

        function l(l) { var h = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                d = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : P : i,
                p = Math.max(o, 0) + u,
                v = n.range(),
                g = +v[0] + .5,
                y = +v[v.length - 1] + .5,
                _ = (n.bandwidth ? function(t) { var n = Math.max(0, t.bandwidth() - 1) / 2; return t.round() && (n = Math.round(n)),
                        function(e) { return +t(e) + n } } : function(t) { return function(n) { return +t(n) } })(n.copy()),
                b = l.selection ? l.selection() : l,
                m = b.selectAll(".domain").data([null]),
                x = b.selectAll(".tick").data(h, n).order(),
                w = x.exit(),
                M = x.enter().append("g").attr("class", "tick"),
                N = x.select("line"),
                T = x.select("text");
            m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), x = x.merge(M), N = N.merge(M.append("line").attr("stroke", "currentColor").attr(f + "2", c * o)), T = T.merge(M.append("text").attr("fill", "currentColor").attr(f, c * p).attr("dy", t === z ? "0em" : t === D ? "0.71em" : "0.32em")), l !== b && (m = m.transition(l), x = x.transition(l), N = N.transition(l), T = T.transition(l), w = w.transition(l).attr("opacity", L).attr("transform", function(t) { return isFinite(t = _(t)) ? s(t) : this.getAttribute("transform") }), M.attr("opacity", L).attr("transform", function(t) { var n = this.parentNode.__axis; return s(n && isFinite(n = n(t)) ? n : _(t)) })), w.remove(), m.attr("d", t === q || t == R ? a ? "M" + c * a + "," + g + "H0.5V" + y + "H" + c * a : "M0.5," + g + "V" + y : a ? "M" + g + "," + c * a + "V0.5H" + y + "V" + c * a : "M" + g + ",0.5H" + y), x.attr("opacity", 1).attr("transform", function(t) { return s(_(t)) }), N.attr(f + "2", c * o), T.attr(f, c * p).text(d), b.filter(B).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === R ? "start" : t === q ? "end" : "middle"), b.each(function() { this.__axis = _ }) } return l.scale = function(t) { return arguments.length ? (n = t, l) : n }, l.ticks = function() { return e = C.call(arguments), l }, l.tickArguments = function(t) { return arguments.length ? (e = null == t ? [] : C.call(t), l) : e.slice() }, l.tickValues = function(t) { return arguments.length ? (r = null == t ? null : C.call(t), l) : r && r.slice() }, l.tickFormat = function(t) { return arguments.length ? (i = t, l) : i }, l.tickSize = function(t) { return arguments.length ? (o = a = +t, l) : o }, l.tickSizeInner = function(t) { return arguments.length ? (o = +t, l) : o }, l.tickSizeOuter = function(t) { return arguments.length ? (a = +t, l) : a }, l.tickPadding = function(t) { return arguments.length ? (u = +t, l) : u }, l } var Y = { value: function() {} };

    function I() { for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) { if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
            r[t] = [] } return new H(r) }

    function H(t) { this._ = t }

    function j(t, n) { return t.trim().split(/^|\s+/).map(function(t) { var e = "",
                r = t.indexOf("."); if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t); return { type: t, name: e } }) }

    function X(t, n) { for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n) return e.value }

    function V(t, n, e) { for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) { t[r] = Y, t = t.slice(0, r).concat(t.slice(r + 1)); break }
        return null != e && t.push({ name: n, value: e }), t }
    H.prototype = I.prototype = { constructor: H, on: function(t, n) { var e, r = this._,
                i = j(t + "", r),
                o = -1,
                a = i.length; if (!(arguments.length < 2)) { if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n); for (; ++o < a;)
                    if (e = (t = i[o]).type) r[e] = V(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = V(r[e], t.name, null); return this } for (; ++o < a;)
                if ((e = (t = i[o]).type) && (e = X(r[e], t.name))) return e }, copy: function() { var t = {},
                n = this._; for (var e in n) t[e] = n[e].slice(); return new H(t) }, call: function(t, n) { if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2]; if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i) }, apply: function(t, n, e) { if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t); for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e) } }; var G = "http://www.w3.org/1999/xhtml",
        $ = { svg: "http://www.w3.org/2000/svg", xhtml: G, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };

    function W(t) { var n = t += "",
            e = n.indexOf(":"); return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), $.hasOwnProperty(n) ? { space: $[n], local: t } : t }

    function Z(t) { var n = W(t); return (n.local ? function(t) { return function() { return this.ownerDocument.createElementNS(t.space, t.local) } } : function(t) { return function() { var n = this.ownerDocument,
                    e = this.namespaceURI; return e === G && n.documentElement.namespaceURI === G ? n.createElement(t) : n.createElementNS(e, t) } })(n) }

    function Q() {}

    function K(t) { return null == t ? Q : function() { return this.querySelector(t) } }

    function J() { return [] }

    function tt(t) { return null == t ? J : function() { return this.querySelectorAll(t) } }

    function nt(t) { return function() { return this.matches(t) } }

    function et(t) { return new Array(t.length) }

    function rt(t, n) { this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n }
    rt.prototype = { constructor: rt, appendChild: function(t) { return this._parent.insertBefore(t, this._next) }, insertBefore: function(t, n) { return this._parent.insertBefore(t, n) }, querySelector: function(t) { return this._parent.querySelector(t) }, querySelectorAll: function(t) { return this._parent.querySelectorAll(t) } }; var it = "$";

    function ot(t, n, e, r, i, o) { for (var a, u = 0, c = n.length, f = o.length; u < f; ++u)(a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new rt(t, o[u]); for (; u < c; ++u)(a = n[u]) && (i[u] = a) }

    function at(t, n, e, r, i, o, a) { var u, c, f, s = {},
            l = n.length,
            h = o.length,
            d = new Array(l); for (u = 0; u < l; ++u)(c = n[u]) && (d[u] = f = it + a.call(c, c.__data__, u, n), f in s ? i[u] = c : s[f] = c); for (u = 0; u < h; ++u)(c = s[f = it + a.call(t, o[u], u, o)]) ? (r[u] = c, c.__data__ = o[u], s[f] = null) : e[u] = new rt(t, o[u]); for (u = 0; u < l; ++u)(c = n[u]) && s[d[u]] === c && (i[u] = c) }

    function ut(t, n) { return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN }

    function ct(t) { return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView }

    function ft(t, n) { return t.style.getPropertyValue(n) || ct(t).getComputedStyle(t, null).getPropertyValue(n) }

    function st(t) { return t.trim().split(/^|\s+/) }

    function lt(t) { return t.classList || new ht(t) }

    function ht(t) { this._node = t, this._names = st(t.getAttribute("class") || "") }

    function dt(t, n) { for (var e = lt(t), r = -1, i = n.length; ++r < i;) e.add(n[r]) }

    function pt(t, n) { for (var e = lt(t), r = -1, i = n.length; ++r < i;) e.remove(n[r]) }

    function vt() { this.textContent = "" }

    function gt() { this.innerHTML = "" }

    function yt() { this.nextSibling && this.parentNode.appendChild(this) }

    function _t() { this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild) }

    function bt() { return null }

    function mt() { var t = this.parentNode;
        t && t.removeChild(this) }

    function xt() { var t = this.cloneNode(!1),
            n = this.parentNode; return n ? n.insertBefore(t, this.nextSibling) : t }

    function wt() { var t = this.cloneNode(!0),
            n = this.parentNode; return n ? n.insertBefore(t, this.nextSibling) : t }
    ht.prototype = { add: function(t) { this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" "))) }, remove: function(t) { var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" "))) }, contains: function(t) { return this._names.indexOf(t) >= 0 } }; var Mt = {};
    (t.event = null, "undefined" != typeof document) && ("onmouseenter" in document.documentElement || (Mt = { mouseenter: "mouseover", mouseleave: "mouseout" }));

    function Nt(t, n, e) { return t = Tt(t, n, e),
            function(n) { var e = n.relatedTarget;
                e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n) } }

    function Tt(n, e, r) { return function(i) { var o = t.event;
            t.event = i; try { n.call(this, this.__data__, e, r) } finally { t.event = o } } }

    function At(t) { return function() { var n = this.__on; if (n) { for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);++i ? n.length = i : delete this.__on } } }

    function St(t, n, e) { var r = Mt.hasOwnProperty(t.type) ? Nt : Tt; return function(i, o, a) { var u, c = this.__on,
                f = r(n, o, a); if (c)
                for (var s = 0, l = c.length; s < l; ++s)
                    if ((u = c[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = f, u.capture = e), void(u.value = n);
            this.addEventListener(t.type, f, e), u = { type: t.type, name: t.name, value: n, listener: f, capture: e }, c ? c.push(u) : this.__on = [u] } }

    function kt(n, e, r, i) { var o = t.event;
        n.sourceEvent = t.event, t.event = n; try { return e.apply(r, i) } finally { t.event = o } }

    function Et(t, n, e) { var r = ct(t),
            i = r.CustomEvent; "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i) } var Ct = [null];

    function Pt(t, n) { this._groups = t, this._parents = n }

    function zt() { return new Pt([
            [document.documentElement]
        ], Ct) }

    function Rt(t) { return "string" == typeof t ? new Pt([
            [document.querySelector(t)]
        ], [document.documentElement]) : new Pt([
            [t]
        ], Ct) }
    Pt.prototype = zt.prototype = { constructor: Pt, select: function(t) { "function" != typeof t && (t = K(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a); return new Pt(r, this._parents) }, selectAll: function(t) { "function" != typeof t && (t = tt(t)); for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var a, u = n[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a)); return new Pt(r, i) }, filter: function(t) { "function" != typeof t && (t = nt(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o); return new Pt(r, this._parents) }, data: function(t, n) { if (!t) return d = new Array(this.size()), f = -1, this.each(function(t) { d[++f] = t }), d; var e = n ? at : ot,
                r = this._parents,
                i = this._groups; "function" != typeof t && (t = function(t) { return function() { return t } }(t)); for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) { var s = r[f],
                    l = i[f],
                    h = l.length,
                    d = t.call(s, s && s.__data__, f, r),
                    p = d.length,
                    v = u[f] = new Array(p),
                    g = a[f] = new Array(p);
                e(s, l, v, g, c[f] = new Array(h), d, n); for (var y, _, b = 0, m = 0; b < p; ++b)
                    if (y = v[b]) { for (b >= m && (m = b + 1); !(_ = g[m]) && ++m < p;);
                        y._next = _ || null } } return (a = new Pt(a, r))._enter = u, a._exit = c, a }, enter: function() { return new Pt(this._enter || this._groups.map(et), this._parents) }, exit: function() { return new Pt(this._exit || this._groups.map(et), this._parents) }, join: function(t, n, e) { var r = this.enter(),
                i = this,
                o = this.exit(); return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i }, merge: function(t) { for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c); for (; u < r; ++u) a[u] = n[u]; return new Pt(a, this._parents) }, order: function() { for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;)(r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), a = r); return this }, sort: function(t) {
            function n(n, e) { return n && e ? t(n.__data__, e.__data__) : !n - !e }
            t || (t = ut); for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) { for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s)(a = u[s]) && (f[s] = a);
                f.sort(n) } return new Pt(i, this._parents).order() }, call: function() { var t = arguments[0]; return arguments[0] = this, t.apply(null, arguments), this }, nodes: function() { var t = new Array(this.size()),
                n = -1; return this.each(function() { t[++n] = this }), t }, node: function() { for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) { var a = r[i]; if (a) return a }
            return null }, size: function() { var t = 0; return this.each(function() {++t }), t }, empty: function() { return !this.node() }, each: function(t) { for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)(i = o[a]) && t.call(i, i.__data__, a, o); return this }, attr: function(t, n) { var e = W(t); if (arguments.length < 2) { var r = this.node(); return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e) } return this.each((null == n ? e.local ? function(t) { return function() { this.removeAttributeNS(t.space, t.local) } } : function(t) { return function() { this.removeAttribute(t) } } : "function" == typeof n ? e.local ? function(t, n) { return function() { var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e) } } : function(t, n) { return function() { var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e) } } : e.local ? function(t, n) { return function() { this.setAttributeNS(t.space, t.local, n) } } : function(t, n) { return function() { this.setAttribute(t, n) } })(e, n)) }, style: function(t, n, e) { return arguments.length > 1 ? this.each((null == n ? function(t) { return function() { this.style.removeProperty(t) } } : "function" == typeof n ? function(t, n, e) { return function() { var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e) } } : function(t, n, e) { return function() { this.style.setProperty(t, n, e) } })(t, n, null == e ? "" : e)) : ft(this.node(), t) }, property: function(t, n) { return arguments.length > 1 ? this.each((null == n ? function(t) { return function() { delete this[t] } } : "function" == typeof n ? function(t, n) { return function() { var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e } } : function(t, n) { return function() { this[t] = n } })(t, n)) : this.node()[t] }, classed: function(t, n) { var e = st(t + ""); if (arguments.length < 2) { for (var r = lt(this.node()), i = -1, o = e.length; ++i < o;)
                    if (!r.contains(e[i])) return !1;
                return !0 } return this.each(("function" == typeof n ? function(t, n) { return function() {
                    (n.apply(this, arguments) ? dt : pt)(this, t) } } : n ? function(t) { return function() { dt(this, t) } } : function(t) { return function() { pt(this, t) } })(e, n)) }, text: function(t) { return arguments.length ? this.each(null == t ? vt : ("function" == typeof t ? function(t) { return function() { var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n } } : function(t) { return function() { this.textContent = t } })(t)) : this.node().textContent }, html: function(t) { return arguments.length ? this.each(null == t ? gt : ("function" == typeof t ? function(t) { return function() { var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n } } : function(t) { return function() { this.innerHTML = t } })(t)) : this.node().innerHTML }, raise: function() { return this.each(yt) }, lower: function() { return this.each(_t) }, append: function(t) { var n = "function" == typeof t ? t : Z(t); return this.select(function() { return this.appendChild(n.apply(this, arguments)) }) }, insert: function(t, n) { var e = "function" == typeof t ? t : Z(t),
                r = null == n ? bt : "function" == typeof n ? n : K(n); return this.select(function() { return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null) }) }, remove: function() { return this.each(mt) }, clone: function(t) { return this.select(t ? wt : xt) }, datum: function(t) { return arguments.length ? this.property("__data__", t) : this.node().__data__ }, on: function(t, n, e) { var r, i, o = function(t) { return t.trim().split(/^|\s+/).map(function(t) { var n = "",
                            e = t.indexOf("."); return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n } }) }(t + ""),
                a = o.length; if (!(arguments.length < 2)) { for (u = n ? St : At, null == e && (e = !1), r = 0; r < a; ++r) this.each(u(o[r], n, e)); return this } var u = this.node().__on; if (u)
                for (var c, f = 0, s = u.length; f < s; ++f)
                    for (r = 0, c = u[f]; r < a; ++r)
                        if ((i = o[r]).type === c.type && i.name === c.name) return c.value }, dispatch: function(t, n) { return this.each(("function" == typeof n ? function(t, n) { return function() { return Et(this, t, n.apply(this, arguments)) } } : function(t, n) { return function() { return Et(this, t, n) } })(t, n)) } }; var Dt = 0;

    function qt() { return new Lt }

    function Lt() { this._ = "@" + (++Dt).toString(36) }

    function Ut() { for (var n, e = t.event; n = e.sourceEvent;) e = n; return e }

    function Ot(t, n) { var e = t.ownerSVGElement || t; if (e.createSVGPoint) { var r = e.createSVGPoint(); return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y] } var i = t.getBoundingClientRect(); return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop] }

    function Bt(t) { var n = Ut(); return n.changedTouches && (n = n.changedTouches[0]), Ot(t, n) }

    function Ft(t, n, e) { arguments.length < 3 && (e = n, n = Ut().changedTouches); for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
            if ((r = n[i]).identifier === e) return Ot(t, r);
        return null }

    function Yt() { t.event.stopImmediatePropagation() }

    function It() { t.event.preventDefault(), t.event.stopImmediatePropagation() }

    function Ht(t) { var n = t.document.documentElement,
            e = Rt(t).on("dragstart.drag", It, !0); "onselectstart" in n ? e.on("selectstart.drag", It, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none") }

    function jt(t, n) { var e = t.document.documentElement,
            r = Rt(t).on("dragstart.drag", null);
        n && (r.on("click.drag", It, !0), setTimeout(function() { r.on("click.drag", null) }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect) }

    function Xt(t) { return function() { return t } }

    function Vt(t, n, e, r, i, o, a, u, c, f) { this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = c, this._ = f }

    function Gt() { return !t.event.ctrlKey && !t.event.button }

    function $t() { return this.parentNode }

    function Wt(n) { return null == n ? { x: t.event.x, y: t.event.y } : n }

    function Zt() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function Qt(t, n, e) { t.prototype = n.prototype = e, e.constructor = t }

    function Kt(t, n) { var e = Object.create(t.prototype); for (var r in n) e[r] = n[r]; return e }

    function Jt() {}
    Lt.prototype = qt.prototype = { constructor: Lt, get: function(t) { for (var n = this._; !(n in t);)
                if (!(t = t.parentNode)) return;
            return t[n] }, set: function(t, n) { return t[this._] = n }, remove: function(t) { return this._ in t && delete t[this._] }, toString: function() { return this._ } }, Vt.prototype.on = function() { var t = this._.on.apply(this._, arguments); return t === this._ ? this : t }; var tn = "\\s*([+-]?\\d+)\\s*",
        nn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        en = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        rn = /^#([0-9a-f]{3,8})$/,
        on = new RegExp("^rgb\\(" + [tn, tn, tn] + "\\)$"),
        an = new RegExp("^rgb\\(" + [en, en, en] + "\\)$"),
        un = new RegExp("^rgba\\(" + [tn, tn, tn, nn] + "\\)$"),
        cn = new RegExp("^rgba\\(" + [en, en, en, nn] + "\\)$"),
        fn = new RegExp("^hsl\\(" + [nn, en, en] + "\\)$"),
        sn = new RegExp("^hsla\\(" + [nn, en, en, nn] + "\\)$"),
        ln = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

    function hn() { return this.rgb().formatHex() }

    function dn() { return this.rgb().formatRgb() }

    function pn(t) { var n, e; return t = (t + "").trim().toLowerCase(), (n = rn.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? vn(n) : 3 === e ? new bn(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? gn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? gn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = on.exec(t)) ? new bn(n[1], n[2], n[3], 1) : (n = an.exec(t)) ? new bn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = un.exec(t)) ? gn(n[1], n[2], n[3], n[4]) : (n = cn.exec(t)) ? gn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = fn.exec(t)) ? Mn(n[1], n[2] / 100, n[3] / 100, 1) : (n = sn.exec(t)) ? Mn(n[1], n[2] / 100, n[3] / 100, n[4]) : ln.hasOwnProperty(t) ? vn(ln[t]) : "transparent" === t ? new bn(NaN, NaN, NaN, 0) : null }

    function vn(t) { return new bn(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

    function gn(t, n, e, r) { return r <= 0 && (t = n = e = NaN), new bn(t, n, e, r) }

    function yn(t) { return t instanceof Jt || (t = pn(t)), t ? new bn((t = t.rgb()).r, t.g, t.b, t.opacity) : new bn }

    function _n(t, n, e, r) { return 1 === arguments.length ? yn(t) : new bn(t, n, e, null == r ? 1 : r) }

    function bn(t, n, e, r) { this.r = +t, this.g = +n, this.b = +e, this.opacity = +r }

    function mn() { return "#" + wn(this.r) + wn(this.g) + wn(this.b) }

    function xn() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

    function wn(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

    function Mn(t, n, e, r) { return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new An(t, n, e, r) }

    function Nn(t) { if (t instanceof An) return new An(t.h, t.s, t.l, t.opacity); if (t instanceof Jt || (t = pn(t)), !t) return new An; if (t instanceof An) return t; var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            a = NaN,
            u = o - i,
            c = (o + i) / 2; return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = c > 0 && c < 1 ? 0 : a, new An(a, u, c, t.opacity) }

    function Tn(t, n, e, r) { return 1 === arguments.length ? Nn(t) : new An(t, n, e, null == r ? 1 : r) }

    function An(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function Sn(t, n, e) { return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) }
    Qt(Jt, pn, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: hn, formatHex: hn, formatHsl: function() { return Nn(this).formatHsl() }, formatRgb: dn, toString: dn }), Qt(bn, _n, Kt(Jt, { brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new bn(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new bn(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: mn, formatHex: mn, formatRgb: xn, toString: xn })), Qt(An, Tn, Kt(Jt, { brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new An(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new An(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n,
                i = 2 * e - r; return new bn(Sn(t >= 240 ? t - 240 : t + 120, i, r), Sn(t, i, r), Sn(t < 120 ? t + 240 : t - 120, i, r), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }, formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") } })); var kn = Math.PI / 180,
        En = 180 / Math.PI,
        Cn = .96422,
        Pn = 1,
        zn = .82521,
        Rn = 4 / 29,
        Dn = 6 / 29,
        qn = 3 * Dn * Dn,
        Ln = Dn * Dn * Dn;

    function Un(t) { if (t instanceof Bn) return new Bn(t.l, t.a, t.b, t.opacity); if (t instanceof Vn) return Gn(t);
        t instanceof bn || (t = yn(t)); var n, e, r = Hn(t.r),
            i = Hn(t.g),
            o = Hn(t.b),
            a = Fn((.2225045 * r + .7168786 * i + .0606169 * o) / Pn); return r === i && i === o ? n = e = a : (n = Fn((.4360747 * r + .3850649 * i + .1430804 * o) / Cn), e = Fn((.0139322 * r + .0971045 * i + .7141733 * o) / zn)), new Bn(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity) }

    function On(t, n, e, r) { return 1 === arguments.length ? Un(t) : new Bn(t, n, e, null == r ? 1 : r) }

    function Bn(t, n, e, r) { this.l = +t, this.a = +n, this.b = +e, this.opacity = +r }

    function Fn(t) { return t > Ln ? Math.pow(t, 1 / 3) : t / qn + Rn }

    function Yn(t) { return t > Dn ? t * t * t : qn * (t - Rn) }

    function In(t) { return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055) }

    function Hn(t) { return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4) }

    function jn(t) { if (t instanceof Vn) return new Vn(t.h, t.c, t.l, t.opacity); if (t instanceof Bn || (t = Un(t)), 0 === t.a && 0 === t.b) return new Vn(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity); var n = Math.atan2(t.b, t.a) * En; return new Vn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity) }

    function Xn(t, n, e, r) { return 1 === arguments.length ? jn(t) : new Vn(t, n, e, null == r ? 1 : r) }

    function Vn(t, n, e, r) { this.h = +t, this.c = +n, this.l = +e, this.opacity = +r }

    function Gn(t) { if (isNaN(t.h)) return new Bn(t.l, 0, 0, t.opacity); var n = t.h * kn; return new Bn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity) }
    Qt(Bn, On, Kt(Jt, { brighter: function(t) { return new Bn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, darker: function(t) { return new Bn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity) }, rgb: function() { var t = (this.l + 16) / 116,
                n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200; return new bn(In(3.1338561 * (n = Cn * Yn(n)) - 1.6168667 * (t = Pn * Yn(t)) - .4906146 * (e = zn * Yn(e))), In(-.9787684 * n + 1.9161415 * t + .033454 * e), In(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity) } })), Qt(Vn, Xn, Kt(Jt, { brighter: function(t) { return new Vn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity) }, darker: function(t) { return new Vn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity) }, rgb: function() { return Gn(this).rgb() } })); var $n = -.14861,
        Wn = 1.78277,
        Zn = -.29227,
        Qn = -.90649,
        Kn = 1.97294,
        Jn = Kn * Qn,
        te = Kn * Wn,
        ne = Wn * Zn - Qn * $n;

    function ee(t, n, e, r) { return 1 === arguments.length ? function(t) { if (t instanceof re) return new re(t.h, t.s, t.l, t.opacity);
            t instanceof bn || (t = yn(t)); var n = t.r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = (ne * r + Jn * n - te * e) / (ne + Jn - te),
                o = r - i,
                a = (Kn * (e - i) - Zn * o) / Qn,
                u = Math.sqrt(a * a + o * o) / (Kn * i * (1 - i)),
                c = u ? Math.atan2(a, o) * En - 120 : NaN; return new re(c < 0 ? c + 360 : c, u, i, t.opacity) }(t) : new re(t, n, e, null == r ? 1 : r) }

    function re(t, n, e, r) { this.h = +t, this.s = +n, this.l = +e, this.opacity = +r }

    function ie(t, n, e, r, i) { var o = t * t,
            a = o * t; return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6 }

    function oe(t) { var n = t.length - 1; return function(e) { var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                i = t[r],
                o = t[r + 1],
                a = r > 0 ? t[r - 1] : 2 * i - o,
                u = r < n - 1 ? t[r + 2] : 2 * o - i; return ie((e - r / n) * n, a, i, o, u) } }

    function ae(t) { var n = t.length; return function(e) { var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                i = t[(r + n - 1) % n],
                o = t[r % n],
                a = t[(r + 1) % n],
                u = t[(r + 2) % n]; return ie((e - r / n) * n, i, o, a, u) } }

    function ue(t) { return function() { return t } }

    function ce(t, n) { return function(e) { return t + e * n } }

    function fe(t, n) { var e = n - t; return e ? ce(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : ue(isNaN(t) ? n : t) }

    function se(t) { return 1 == (t = +t) ? le : function(n, e) { return e - n ? function(t, n, e) { return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                    function(r) { return Math.pow(t + r * n, e) } }(n, e, t) : ue(isNaN(n) ? e : n) } }

    function le(t, n) { var e = n - t; return e ? ce(t, e) : ue(isNaN(t) ? n : t) }
    Qt(re, ee, Kt(Jt, { brighter: function(t) { return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new re(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? .7 : Math.pow(.7, t), new re(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = isNaN(this.h) ? 0 : (this.h + 120) * kn,
                n = +this.l,
                e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t),
                i = Math.sin(t); return new bn(255 * (n + e * ($n * r + Wn * i)), 255 * (n + e * (Zn * r + Qn * i)), 255 * (n + e * (Kn * r)), this.opacity) } })); var he = function t(n) { var e = se(n);

        function r(t, n) { var r = e((t = _n(t)).r, (n = _n(n)).r),
                i = e(t.g, n.g),
                o = e(t.b, n.b),
                a = le(t.opacity, n.opacity); return function(n) { return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "" } } return r.gamma = t, r }(1);

    function de(t) { return function(n) { var e, r, i = n.length,
                o = new Array(i),
                a = new Array(i),
                u = new Array(i); for (e = 0; e < i; ++e) r = _n(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0; return o = t(o), a = t(a), u = t(u), r.opacity = 1,
                function(t) { return r.r = o(t), r.g = a(t), r.b = u(t), r + "" } } } var pe = de(oe),
        ve = de(ae);

    function ge(t, n) { n || (n = []); var e, r = t ? Math.min(n.length, t.length) : 0,
            i = n.slice(); return function(o) { for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o; return i } }

    function ye(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }

    function _e(t, n) { var e, r = n ? n.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            o = new Array(i),
            a = new Array(r); for (e = 0; e < i; ++e) o[e] = Te(t[e], n[e]); for (; e < r; ++e) a[e] = n[e]; return function(t) { for (e = 0; e < i; ++e) a[e] = o[e](t); return a } }

    function be(t, n) { var e = new Date; return t = +t, n = +n,
            function(r) { return e.setTime(t * (1 - r) + n * r), e } }

    function me(t, n) { return t = +t, n = +n,
            function(e) { return t * (1 - e) + n * e } }

    function xe(t, n) { var e, r = {},
            i = {}; for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = Te(t[e], n[e]) : i[e] = n[e]; return function(t) { for (e in r) i[e] = r[e](t); return i } } var we = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Me = new RegExp(we.source, "g");

    function Ne(t, n) { var e, r, i, o = we.lastIndex = Me.lastIndex = 0,
            a = -1,
            u = [],
            c = []; for (t += "", n += "";
            (e = we.exec(t)) && (r = Me.exec(n));)(i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, c.push({ i: a, x: me(e, r) })), o = Me.lastIndex; return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? c[0] ? function(t) { return function(n) { return t(n) + "" } }(c[0].x) : function(t) { return function() { return t } }(n) : (n = c.length, function(t) { for (var e, r = 0; r < n; ++r) u[(e = c[r]).i] = e.x(t); return u.join("") }) }

    function Te(t, n) { var e, r = typeof n; return null == n || "boolean" === r ? ue(n) : ("number" === r ? me : "string" === r ? (e = pn(n)) ? (n = e, he) : Ne : n instanceof pn ? he : n instanceof Date ? be : ye(n) ? ge : Array.isArray(n) ? _e : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? xe : me)(t, n) }

    function Ae(t, n) { return t = +t, n = +n,
            function(e) { return Math.round(t * (1 - e) + n * e) } } var Se, ke, Ee, Ce, Pe = 180 / Math.PI,
        ze = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };

    function Re(t, n, e, r, i, o) { var a, u, c; return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * Pe, skewX: Math.atan(c) * Pe, scaleX: a, scaleY: u } }

    function De(t, n, e, r) {
        function i(t) { return t.length ? t.pop() + " " : "" } return function(o, a) { var u = [],
                c = []; return o = t(o), a = t(a),
                function(t, r, i, o, a, u) { if (t !== i || r !== o) { var c = a.push("translate(", null, n, null, e);
                        u.push({ i: c - 4, x: me(t, i) }, { i: c - 2, x: me(r, o) }) } else(i || o) && a.push("translate(" + i + n + o + e) }(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
                function(t, n, e, o) { t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: me(t, n) })) : n && e.push(i(e) + "rotate(" + n + r) }(o.rotate, a.rotate, u, c),
                function(t, n, e, o) { t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: me(t, n) }) : n && e.push(i(e) + "skewX(" + n + r) }(o.skewX, a.skewX, u, c),
                function(t, n, e, r, o, a) { if (t !== e || n !== r) { var u = o.push(i(o) + "scale(", null, ",", null, ")");
                        a.push({ i: u - 4, x: me(t, e) }, { i: u - 2, x: me(n, r) }) } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")") }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c), o = a = null,
                function(t) { for (var n, e = -1, r = c.length; ++e < r;) u[(n = c[e]).i] = n.x(t); return u.join("") } } } var qe = De(function(t) { return "none" === t ? ze : (Se || (Se = document.createElement("DIV"), ke = document.documentElement, Ee = document.defaultView), Se.style.transform = t, t = Ee.getComputedStyle(ke.appendChild(Se), null).getPropertyValue("transform"), ke.removeChild(Se), Re(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5])) }, "px, ", "px)", "deg)"),
        Le = De(function(t) { return null == t ? ze : (Ce || (Ce = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ce.setAttribute("transform", t), (t = Ce.transform.baseVal.consolidate()) ? Re((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : ze) }, ", ", ")", ")"),
        Ue = Math.SQRT2,
        Oe = 2,
        Be = 4,
        Fe = 1e-12;

    function Ye(t) { return ((t = Math.exp(t)) + 1 / t) / 2 }

    function Ie(t, n) { var e, r, i = t[0],
            o = t[1],
            a = t[2],
            u = n[0],
            c = n[1],
            f = n[2],
            s = u - i,
            l = c - o,
            h = s * s + l * l; if (h < Fe) r = Math.log(f / a) / Ue, e = function(t) { return [i + t * s, o + t * l, a * Math.exp(Ue * t * r)] };
        else { var d = Math.sqrt(h),
                p = (f * f - a * a + Be * h) / (2 * a * Oe * d),
                v = (f * f - a * a - Be * h) / (2 * f * Oe * d),
                g = Math.log(Math.sqrt(p * p + 1) - p),
                y = Math.log(Math.sqrt(v * v + 1) - v);
            r = (y - g) / Ue, e = function(t) { var n = t * r,
                    e = Ye(g),
                    u = a / (Oe * d) * (e * function(t) { return ((t = Math.exp(2 * t)) - 1) / (t + 1) }(Ue * n + g) - function(t) { return ((t = Math.exp(t)) - 1 / t) / 2 }(g)); return [i + u * s, o + u * l, a * e / Ye(Ue * n + g)] } } return e.duration = 1e3 * r, e }

    function He(t) { return function(n, e) { var r = t((n = Tn(n)).h, (e = Tn(e)).h),
                i = le(n.s, e.s),
                o = le(n.l, e.l),
                a = le(n.opacity, e.opacity); return function(t) { return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "" } } } var je = He(fe),
        Xe = He(le);

    function Ve(t) { return function(n, e) { var r = t((n = Xn(n)).h, (e = Xn(e)).h),
                i = le(n.c, e.c),
                o = le(n.l, e.l),
                a = le(n.opacity, e.opacity); return function(t) { return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "" } } } var Ge = Ve(fe),
        $e = Ve(le);

    function We(t) { return function n(e) {
            function r(n, r) { var i = t((n = ee(n)).h, (r = ee(r)).h),
                    o = le(n.s, r.s),
                    a = le(n.l, r.l),
                    u = le(n.opacity, r.opacity); return function(t) { return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "" } } return e = +e, r.gamma = n, r }(1) } var Ze = We(fe),
        Qe = We(le); var Ke, Je, tr = 0,
        nr = 0,
        er = 0,
        rr = 1e3,
        ir = 0,
        or = 0,
        ar = 0,
        ur = "object" == typeof performance && performance.now ? performance : Date,
        cr = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) { setTimeout(t, 17) };

    function fr() { return or || (cr(sr), or = ur.now() + ar) }

    function sr() { or = 0 }

    function lr() { this._call = this._time = this._next = null }

    function hr(t, n, e) { var r = new lr; return r.restart(t, n, e), r }

    function dr() { fr(), ++tr; for (var t, n = Ke; n;)(t = or - n._time) >= 0 && n._call.call(null, t), n = n._next;--tr }

    function pr() { or = (ir = ur.now()) + ar, tr = nr = 0; try { dr() } finally { tr = 0,
                function() { var t, n, e = Ke,
                        r = 1 / 0; for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ke = n);
                    Je = t, gr(r) }(), or = 0 } }

    function vr() { var t = ur.now(),
            n = t - ir;
        n > rr && (ar -= n, ir = t) }

    function gr(t) { tr || (nr && (nr = clearTimeout(nr)), t - or > 24 ? (t < 1 / 0 && (nr = setTimeout(pr, t - ur.now() - ar)), er && (er = clearInterval(er))) : (er || (ir = ur.now(), er = setInterval(vr, rr)), tr = 1, cr(pr))) }

    function yr(t, n, e) { var r = new lr; return n = null == n ? 0 : +n, r.restart(function(e) { r.stop(), t(e + n) }, n, e), r }
    lr.prototype = hr.prototype = { constructor: lr, restart: function(t, n, e) { if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? fr() : +e) + (null == n ? 0 : +n), this._next || Je === this || (Je ? Je._next = this : Ke = this, Je = this), this._call = t, this._time = e, gr() }, stop: function() { this._call && (this._call = null, this._time = 1 / 0, gr()) } }; var _r = I("start", "end", "cancel", "interrupt"),
        br = [],
        mr = 0,
        xr = 1,
        wr = 2,
        Mr = 3,
        Nr = 4,
        Tr = 5,
        Ar = 6;

    function Sr(t, n, e, r, i, o) { var a = t.__transition; if (a) { if (e in a) return } else t.__transition = {};! function(t, n, e) { var r, i = t.__transition;

            function o(c) { var f, s, l, h; if (e.state !== xr) return u(); for (f in i)
                    if ((h = i[f]).name === e.name) { if (h.state === Mr) return yr(o);
                        h.state === Nr ? (h.state = Ar, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = Ar, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[f]) }
                if (yr(function() { e.state === Mr && (e.state = Nr, e.timer.restart(a, e.delay, e.time), a(c)) }), e.state = wr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === wr) { for (e.state = Mr, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1 } }

            function a(n) { for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Tr, 1), o = -1, a = r.length; ++o < a;) r[o].call(t, i);
                e.state === Tr && (e.on.call("end", t, t.__data__, e.index, e.group), u()) }

            function u() { for (var r in e.state = Ar, e.timer.stop(), delete i[n], i) return;
                delete t.__transition }
            i[n] = e, e.timer = hr(function(t) { e.state = xr, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay) }, 0, e.time) }(t, e, { name: n, index: r, group: i, on: _r, tween: br, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: mr }) }

    function kr(t, n) { var e = Cr(t, n); if (e.state > mr) throw new Error("too late; already scheduled"); return e }

    function Er(t, n) { var e = Cr(t, n); if (e.state > Mr) throw new Error("too late; already running"); return e }

    function Cr(t, n) { var e = t.__transition; if (!e || !(e = e[n])) throw new Error("transition not found"); return e }

    function Pr(t, n) { var e, r, i, o = t.__transition,
            a = !0; if (o) { for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > wr && e.state < Tr, e.state = Ar, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
            a && delete t.__transition } }

    function zr(t, n, e) { var r = t._id; return t.each(function() { var t = Er(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments) }),
            function(t) { return Cr(t, r).value[n] } }

    function Rr(t, n) { var e; return ("number" == typeof n ? me : n instanceof pn ? he : (e = pn(n)) ? (n = e, he) : Ne)(t, n) } var Dr = zt.prototype.constructor;

    function qr(t) { return function() { this.style.removeProperty(t) } } var Lr = 0;

    function Ur(t, n, e, r) { this._groups = t, this._parents = n, this._name = e, this._id = r }

    function Or(t) { return zt().transition(t) }

    function Br() { return ++Lr } var Fr = zt.prototype;

    function Yr(t) { return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2 }

    function Ir(t) { return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2 }
    Ur.prototype = Or.prototype = { constructor: Ur, select: function(t) { var n = this._name,
                e = this._id; "function" != typeof t && (t = K(t)); for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h)(u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__" in u && (c.__data__ = u.__data__), l[h] = c, Sr(l[h], n, e, h, l, Cr(u, e))); return new Ur(o, this._parents, n, e) }, selectAll: function(t) { var n = this._name,
                e = this._id; "function" != typeof t && (t = tt(t)); for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
                    if (c = f[l]) { for (var h, d = t.call(c, c.__data__, l, f), p = Cr(c, e), v = 0, g = d.length; v < g; ++v)(h = d[v]) && Sr(h, n, e, v, d, p);
                        o.push(d), a.push(c) }
            return new Ur(o, a, n, e) }, filter: function(t) { "function" != typeof t && (t = nt(t)); for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)(o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o); return new Ur(r, this._parents, this._name, this._id) }, merge: function(t) { if (t._id !== this._id) throw new Error; for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c); for (; u < r; ++u) a[u] = n[u]; return new Ur(a, this._parents, this._name, this._id) }, selection: function() { return new Dr(this._groups, this._parents) }, transition: function() { for (var t = this._name, n = this._id, e = Br(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
                    if (a = u[f]) { var s = Cr(a, n);
                        Sr(a, t, e, f, u, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease }) }
            return new Ur(r, this._parents, t, e) }, call: Fr.call, nodes: Fr.nodes, node: Fr.node, size: Fr.size, empty: Fr.empty, each: Fr.each, on: function(t, n) { var e = this._id; return arguments.length < 2 ? Cr(this.node(), e).on.on(t) : this.each(function(t, n, e) { var r, i, o = function(t) { return (t + "").trim().split(/^|\s+/).every(function(t) { var n = t.indexOf("."); return n >= 0 && (t = t.slice(0, n)), !t || "start" === t }) }(n) ? kr : Er; return function() { var a = o(this, t),
                        u = a.on;
                    u !== r && (i = (r = u).copy()).on(n, e), a.on = i } }(e, t, n)) }, attr: function(t, n) { var e = W(t),
                r = "transform" === e ? Le : Rr; return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) { var r, i, o; return function() { var a, u, c = e(this); if (null != c) return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
                    this.removeAttributeNS(t.space, t.local) } } : function(t, n, e) { var r, i, o; return function() { var a, u, c = e(this); if (null != c) return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u, o = n(r = a, c));
                    this.removeAttribute(t) } })(e, r, zr(this, "attr." + t, n)) : null == n ? (e.local ? function(t) { return function() { this.removeAttributeNS(t.space, t.local) } } : function(t) { return function() { this.removeAttribute(t) } })(e) : (e.local ? function(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttributeNS(t.space, t.local); return a === o ? null : a === r ? i : i = n(r = a, e) } } : function(t, n, e) { var r, i, o = e + ""; return function() { var a = this.getAttribute(t); return a === o ? null : a === r ? i : i = n(r = a, e) } })(e, r, n)) }, attrTween: function(t, n) { var e = "attr." + t; if (arguments.length < 2) return (e = this.tween(e)) && e._value; if (null == n) return this.tween(e, null); if ("function" != typeof n) throw new Error; var r = W(t); return this.tween(e, (r.local ? function(t, n) { var e, r;

                function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && function(t, n) { return function(e) { this.setAttributeNS(t.space, t.local, n.call(this, e)) } }(t, i)), e } return i._value = n, i } : function(t, n) { var e, r;

                function i() { var i = n.apply(this, arguments); return i !== r && (e = (r = i) && function(t, n) { return function(e) { this.setAttribute(t, n.call(this, e)) } }(t, i)), e } return i._value = n, i })(r, n)) }, style: function(t, n, e) { var r = "transform" == (t += "") ? qe : Rr; return null == n ? this.styleTween(t, function(t, n) { var e, r, i; return function() { var o = ft(this, t),
                        a = (this.style.removeProperty(t), ft(this, t)); return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a) } }(t, r)).on("end.style." + t, qr(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) { var r, i, o; return function() { var a = ft(this, t),
                        u = e(this),
                        c = u + ""; return null == u && (this.style.removeProperty(t), c = u = ft(this, t)), a === c ? null : a === r && c === i ? o : (i = c, o = n(r = a, u)) } }(t, r, zr(this, "style." + t, n))).each(function(t, n) { var e, r, i, o, a = "style." + n,
                    u = "end." + a; return function() { var c = Er(this, t),
                        f = c.on,
                        s = null == c.value[a] ? o || (o = qr(n)) : void 0;
                    f === e && i === s || (r = (e = f).copy()).on(u, i = s), c.on = r } }(this._id, t)) : this.styleTween(t, function(t, n, e) { var r, i, o = e + ""; return function() { var a = ft(this, t); return a === o ? null : a === r ? i : i = n(r = a, e) } }(t, r, n), e).on("end.style." + t, null) }, styleTween: function(t, n, e) { var r = "style." + (t += ""); if (arguments.length < 2) return (r = this.tween(r)) && r._value; if (null == n) return this.tween(r, null); if ("function" != typeof n) throw new Error; return this.tween(r, function(t, n, e) { var r, i;

                function o() { var o = n.apply(this, arguments); return o !== i && (r = (i = o) && function(t, n, e) { return function(r) { this.style.setProperty(t, n.call(this, r), e) } }(t, o, e)), r } return o._value = n, o }(t, n, null == e ? "" : e)) }, text: function(t) { return this.tween("text", "function" == typeof t ? function(t) { return function() { var n = t(this);
                    this.textContent = null == n ? "" : n } }(zr(this, "text", t)) : function(t) { return function() { this.textContent = t } }(null == t ? "" : t + "")) }, textTween: function(t) { var n = "text"; if (arguments.length < 1) return (n = this.tween(n)) && n._value; if (null == t) return this.tween(n, null); if ("function" != typeof t) throw new Error; return this.tween(n, function(t) { var n, e;

                function r() { var r = t.apply(this, arguments); return r !== e && (n = (e = r) && function(t) { return function(n) { this.textContent = t.call(this, n) } }(r)), n } return r._value = t, r }(t)) }, remove: function() { return this.on("end.remove", function(t) { return function() { var n = this.parentNode; for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this) } }(this._id)) }, tween: function(t, n) { var e = this._id; if (t += "", arguments.length < 2) { for (var r, i = Cr(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                    if ((r = i[o]).name === t) return r.value;
                return null } return this.each((null == n ? function(t, n) { var e, r; return function() { var i = Er(this, t),
                        o = i.tween; if (o !== e)
                        for (var a = 0, u = (r = e = o).length; a < u; ++a)
                            if (r[a].name === n) {
                                (r = r.slice()).splice(a, 1); break }
                    i.tween = r } } : function(t, n, e) { var r, i; if ("function" != typeof e) throw new Error; return function() { var o = Er(this, t),
                        a = o.tween; if (a !== r) { i = (r = a).slice(); for (var u = { name: n, value: e }, c = 0, f = i.length; c < f; ++c)
                            if (i[c].name === n) { i[c] = u; break }
                        c === f && i.push(u) }
                    o.tween = i } })(e, t, n)) }, delay: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? function(t, n) { return function() { kr(this, t).delay = +n.apply(this, arguments) } } : function(t, n) { return n = +n,
                    function() { kr(this, t).delay = n } })(n, t)) : Cr(this.node(), n).delay }, duration: function(t) { var n = this._id; return arguments.length ? this.each(("function" == typeof t ? function(t, n) { return function() { Er(this, t).duration = +n.apply(this, arguments) } } : function(t, n) { return n = +n,
                    function() { Er(this, t).duration = n } })(n, t)) : Cr(this.node(), n).duration }, ease: function(t) { var n = this._id; return arguments.length ? this.each(function(t, n) { if ("function" != typeof n) throw new Error; return function() { Er(this, t).ease = n } }(n, t)) : Cr(this.node(), n).ease }, end: function() { var t, n, e = this,
                r = e._id,
                i = e.size(); return new Promise(function(o, a) { var u = { value: a },
                    c = { value: function() { 0 == --i && o() } };
                e.each(function() { var e = Er(this, r),
                        i = e.on;
                    i !== t && ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(c)), e.on = n }) }) } }; var Hr = function t(n) {
            function e(t) { return Math.pow(t, n) } return n = +n, e.exponent = t, e }(3),
        jr = function t(n) {
            function e(t) { return 1 - Math.pow(1 - t, n) } return n = +n, e.exponent = t, e }(3),
        Xr = function t(n) {
            function e(t) { return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2 } return n = +n, e.exponent = t, e }(3),
        Vr = Math.PI,
        Gr = Vr / 2;

    function $r(t) { return (1 - Math.cos(Vr * t)) / 2 }

    function Wr(t) { return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2 }

    function Zr(t) { return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2 } var Qr = 4 / 11,
        Kr = 6 / 11,
        Jr = 8 / 11,
        ti = .75,
        ni = 9 / 11,
        ei = 10 / 11,
        ri = .9375,
        ii = 21 / 22,
        oi = 63 / 64,
        ai = 1 / Qr / Qr;

    function ui(t) { return (t = +t) < Qr ? ai * t * t : t < Jr ? ai * (t -= Kr) * t + ti : t < ei ? ai * (t -= ni) * t + ri : ai * (t -= ii) * t + oi } var ci = function t(n) {
            function e(t) { return t * t * ((n + 1) * t - n) } return n = +n, e.overshoot = t, e }(1.70158),
        fi = function t(n) {
            function e(t) { return --t * t * ((n + 1) * t + n) + 1 } return n = +n, e.overshoot = t, e }(1.70158),
        si = function t(n) {
            function e(t) { return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2 } return n = +n, e.overshoot = t, e }(1.70158),
        li = 2 * Math.PI,
        hi = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= li);

            function i(t) { return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e) } return i.amplitude = function(n) { return t(n, e * li) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        di = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= li);

            function i(t) { return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e) } return i.amplitude = function(n) { return t(n, e * li) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        pi = function t(n, e) { var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= li);

            function i(t) { return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2 } return i.amplitude = function(n) { return t(n, e * li) }, i.period = function(e) { return t(n, e) }, i }(1, .3),
        vi = { time: null, delay: 0, duration: 250, ease: Ir };

    function gi(t, n) { for (var e; !(e = t.__transition) || !(e = e[n]);)
            if (!(t = t.parentNode)) return vi.time = fr(), vi;
        return e }
    zt.prototype.interrupt = function(t) { return this.each(function() { Pr(this, t) }) }, zt.prototype.transition = function(t) { var n, e;
        t instanceof Ur ? (n = t._id, t = t._name) : (n = Br(), (e = vi).time = fr(), t = null == t ? null : t + ""); for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)(a = u[f]) && Sr(a, t, n, f, u, e || gi(a, n)); return new Ur(r, this._parents, t, n) }; var yi = [null];

    function _i(t) { return function() { return t } }

    function bi(t, n, e) { this.target = t, this.type = n, this.selection = e }

    function mi() { t.event.stopImmediatePropagation() }

    function xi() { t.event.preventDefault(), t.event.stopImmediatePropagation() } var wi = { name: "drag" },
        Mi = { name: "space" },
        Ni = { name: "handle" },
        Ti = { name: "center" };

    function Ai(t) { return [+t[0], +t[1]] }

    function Si(t) { return [Ai(t[0]), Ai(t[1])] } var ki = { name: "x", handles: ["w", "e"].map(Li), input: function(t, n) { return null == t ? null : [
                    [+t[0], n[0][1]],
                    [+t[1], n[1][1]]
                ] }, output: function(t) { return t && [t[0][0], t[1][0]] } },
        Ei = { name: "y", handles: ["n", "s"].map(Li), input: function(t, n) { return null == t ? null : [
                    [n[0][0], +t[0]],
                    [n[1][0], +t[1]]
                ] }, output: function(t) { return t && [t[0][1], t[1][1]] } },
        Ci = { name: "xy", handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Li), input: function(t) { return null == t ? null : Si(t) }, output: function(t) { return t } },
        Pi = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
        zi = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
        Ri = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
        Di = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
        qi = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 };

    function Li(t) { return { type: t } }

    function Ui() { return !t.event.ctrlKey && !t.event.button }

    function Oi() { var t = this.ownerSVGElement || this; return t.hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] }

    function Bi() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function Fi(t) { for (; !t.__brush;)
            if (!(t = t.parentNode)) return;
        return t.__brush }

    function Yi(n) { var e, r = Oi,
            i = Ui,
            o = Bi,
            a = !0,
            u = I("start", "brush", "end"),
            c = 6;

        function f(t) { var e = t.property("__brush", g).selectAll(".overlay").data([Li("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Pi.overlay).merge(e).each(function() { var t = Fi(this).extent;
                Rt(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]) }), t.selectAll(".selection").data([Li("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Pi.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges"); var r = t.selectAll(".handle").data(n.handles, function(t) { return t.type });
            r.exit().remove(), r.enter().append("rect").attr("class", function(t) { return "handle handle--" + t.type }).attr("cursor", function(t) { return Pi[t.type] }), t.each(s).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", d).filter(o).on("touchstart.brush", d).on("touchmove.brush", p).on("touchend.brush touchcancel.brush", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function s() { var t = Rt(this),
                n = Fi(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) { return "e" === t.type[t.type.length - 1] ? n[1][0] - c / 2 : n[0][0] - c / 2 }).attr("y", function(t) { return "s" === t.type[0] ? n[1][1] - c / 2 : n[0][1] - c / 2 }).attr("width", function(t) { return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + c : c }).attr("height", function(t) { return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + c : c })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null) }

        function l(t, n, e) { return !e && t.__brush.emitter || new h(t, n) }

        function h(t, n) { this.that = t, this.args = n, this.state = t.__brush, this.active = 0 }

        function d() { if ((!e || t.event.touches) && i.apply(this, arguments)) { var r, o, u, c, f, h, d, p, v, g, y, _, b = this,
                    m = t.event.target.__data__.type,
                    x = "selection" === (a && t.event.metaKey ? m = "overlay" : m) ? wi : a && t.event.altKey ? Ti : Ni,
                    w = n === Ei ? null : Di[m],
                    M = n === ki ? null : qi[m],
                    N = Fi(b),
                    T = N.extent,
                    A = N.selection,
                    S = T[0][0],
                    k = T[0][1],
                    E = T[1][0],
                    C = T[1][1],
                    P = 0,
                    z = 0,
                    R = w && M && a && t.event.shiftKey,
                    D = t.event.touches ? (_ = t.event.changedTouches[0].identifier, function(n) { return Ft(n, t.event.touches, _) }) : Bt,
                    q = D(b),
                    L = q,
                    U = l(b, arguments, !0).beforestart(); "overlay" === m ? (A && (v = !0), N.selection = A = [
                    [r = n === Ei ? S : q[0], u = n === ki ? k : q[1]],
                    [f = n === Ei ? E : r, d = n === ki ? C : u]
                ]) : (r = A[0][0], u = A[0][1], f = A[1][0], d = A[1][1]), o = r, c = u, h = f, p = d; var O = Rt(b).attr("pointer-events", "none"),
                    B = O.selectAll(".overlay").attr("cursor", Pi[m]); if (t.event.touches) U.moved = Y, U.ended = H;
                else { var F = Rt(t.event.view).on("mousemove.brush", Y, !0).on("mouseup.brush", H, !0);
                    a && F.on("keydown.brush", function() { switch (t.event.keyCode) {
                            case 16:
                                R = w && M; break;
                            case 18:
                                x === Ni && (w && (f = h - P * w, r = o + P * w), M && (d = p - z * M, u = c + z * M), x = Ti, I()); break;
                            case 32:
                                x !== Ni && x !== Ti || (w < 0 ? f = h - P : w > 0 && (r = o - P), M < 0 ? d = p - z : M > 0 && (u = c - z), x = Mi, B.attr("cursor", Pi.selection), I()); break;
                            default:
                                return }
                        xi() }, !0).on("keyup.brush", function() { switch (t.event.keyCode) {
                            case 16:
                                R && (g = y = R = !1, I()); break;
                            case 18:
                                x === Ti && (w < 0 ? f = h : w > 0 && (r = o), M < 0 ? d = p : M > 0 && (u = c), x = Ni, I()); break;
                            case 32:
                                x === Mi && (t.event.altKey ? (w && (f = h - P * w, r = o + P * w), M && (d = p - z * M, u = c + z * M), x = Ti) : (w < 0 ? f = h : w > 0 && (r = o), M < 0 ? d = p : M > 0 && (u = c), x = Ni), B.attr("cursor", Pi[m]), I()); break;
                            default:
                                return }
                        xi() }, !0), Ht(t.event.view) }
                mi(), Pr(b), s.call(b), U.start() }

            function Y() { var t = D(b);!R || g || y || (Math.abs(t[0] - L[0]) > Math.abs(t[1] - L[1]) ? y = !0 : g = !0), L = t, v = !0, xi(), I() }

            function I() { var t; switch (P = L[0] - q[0], z = L[1] - q[1], x) {
                    case Mi:
                    case wi:
                        w && (P = Math.max(S - r, Math.min(E - f, P)), o = r + P, h = f + P), M && (z = Math.max(k - u, Math.min(C - d, z)), c = u + z, p = d + z); break;
                    case Ni:
                        w < 0 ? (P = Math.max(S - r, Math.min(E - r, P)), o = r + P, h = f) : w > 0 && (P = Math.max(S - f, Math.min(E - f, P)), o = r, h = f + P), M < 0 ? (z = Math.max(k - u, Math.min(C - u, z)), c = u + z, p = d) : M > 0 && (z = Math.max(k - d, Math.min(C - d, z)), c = u, p = d + z); break;
                    case Ti:
                        w && (o = Math.max(S, Math.min(E, r - P * w)), h = Math.max(S, Math.min(E, f + P * w))), M && (c = Math.max(k, Math.min(C, u - z * M)), p = Math.max(k, Math.min(C, d + z * M))) }
                h < o && (w *= -1, t = r, r = f, f = t, t = o, o = h, h = t, m in zi && B.attr("cursor", Pi[m = zi[m]])), p < c && (M *= -1, t = u, u = d, d = t, t = c, c = p, p = t, m in Ri && B.attr("cursor", Pi[m = Ri[m]])), N.selection && (A = N.selection), g && (o = A[0][0], h = A[1][0]), y && (c = A[0][1], p = A[1][1]), A[0][0] === o && A[0][1] === c && A[1][0] === h && A[1][1] === p || (N.selection = [
                    [o, c],
                    [h, p]
                ], s.call(b), U.brush()) }

            function H() { if (mi(), t.event.touches) { if (t.event.touches.length) return;
                    e && clearTimeout(e), e = setTimeout(function() { e = null }, 500) } else jt(t.event.view, v), F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                O.attr("pointer-events", "all"), B.attr("cursor", Pi.overlay), N.selection && (A = N.selection),
                    function(t) { return t[0][0] === t[1][0] || t[0][1] === t[1][1] }(A) && (N.selection = null, s.call(b)), U.end() } }

        function p() { l(this, arguments).moved() }

        function v() { l(this, arguments).ended() }

        function g() { var t = this.__brush || { selection: null }; return t.extent = Si(r.apply(this, arguments)), t.dim = n, t } return f.move = function(t, e) { t.selection ? t.on("start.brush", function() { l(this, arguments).beforestart().start() }).on("interrupt.brush end.brush", function() { l(this, arguments).end() }).tween("brush", function() { var t = this,
                    r = t.__brush,
                    i = l(t, arguments),
                    o = r.selection,
                    a = n.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                    u = Te(o, a);

                function c(n) { r.selection = 1 === n && null === a ? null : u(n), s.call(t), i.brush() } return null !== o && null !== a ? c : c(1) }) : t.each(function() { var t = this,
                    r = arguments,
                    i = t.__brush,
                    o = n.input("function" == typeof e ? e.apply(t, r) : e, i.extent),
                    a = l(t, r).beforestart();
                Pr(t), i.selection = null === o ? null : o, s.call(t), a.start().brush().end() }) }, f.clear = function(t) { f.move(t, null) }, h.prototype = { beforestart: function() { return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this }, start: function() { return this.starting ? (this.starting = !1, this.emit("start")) : this.emit("brush"), this }, brush: function() { return this.emit("brush"), this }, end: function() { return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this }, emit: function(t) { kt(new bi(f, t, n.output(this.state.selection)), u.apply, u, [t, this.that, this.args]) } }, f.extent = function(t) { return arguments.length ? (r = "function" == typeof t ? t : _i(Si(t)), f) : r }, f.filter = function(t) { return arguments.length ? (i = "function" == typeof t ? t : _i(!!t), f) : i }, f.touchable = function(t) { return arguments.length ? (o = "function" == typeof t ? t : _i(!!t), f) : o }, f.handleSize = function(t) { return arguments.length ? (c = +t, f) : c }, f.keyModifiers = function(t) { return arguments.length ? (a = !!t, f) : a }, f.on = function() { var t = u.on.apply(u, arguments); return t === u ? f : t }, f } var Ii = Math.cos,
        Hi = Math.sin,
        ji = Math.PI,
        Xi = ji / 2,
        Vi = 2 * ji,
        Gi = Math.max;

    function $i(t) { return function(n, e) { return t(n.source.value + n.target.value, e.source.value + e.target.value) } } var Wi = Array.prototype.slice;

    function Zi(t) { return function() { return t } } var Qi = Math.PI,
        Ki = 2 * Qi,
        Ji = Ki - 1e-6;

    function to() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

    function no() { return new to }

    function eo(t) { return t.source }

    function ro(t) { return t.target }

    function io(t) { return t.radius }

    function oo(t) { return t.startAngle }

    function ao(t) { return t.endAngle }
    to.prototype = no.prototype = { constructor: to, moveTo: function(t, n) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) }, closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") }, lineTo: function(t, n) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n) }, quadraticCurveTo: function(t, n, e, r) { this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r) }, bezierCurveTo: function(t, n, e, r, i, o) { this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) }, arcTo: function(t, n, e, r, i) { t = +t, n = +n, e = +e, r = +r, i = +i; var o = this._x1,
                a = this._y1,
                u = e - t,
                c = r - n,
                f = o - t,
                s = a - n,
                l = f * f + s * s; if (i < 0) throw new Error("negative radius: " + i); if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
            else if (l > 1e-6)
                if (Math.abs(s * u - c * f) > 1e-6 && i) { var h = e - o,
                        d = r - a,
                        p = u * u + c * c,
                        v = h * h + d * d,
                        g = Math.sqrt(p),
                        y = Math.sqrt(l),
                        _ = i * Math.tan((Qi - Math.acos((p + l - v) / (2 * g * y))) / 2),
                        b = _ / y,
                        m = _ / g;
                    Math.abs(b - 1) > 1e-6 && (this._ += "L" + (t + b * f) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > f * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * c) } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
            else; }, arc: function(t, n, e, r, i, o) { t = +t, n = +n, o = !!o; var a = (e = +e) * Math.cos(r),
                u = e * Math.sin(r),
                c = t + a,
                f = n + u,
                s = 1 ^ o,
                l = o ? r - i : i - r; if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % Ki + Ki), l > Ji ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Qi) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i)))) }, rect: function(t, n, e, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z" }, toString: function() { return this._ } };

    function uo() {}

    function co(t, n) { var e = new uo; if (t instanceof uo) t.each(function(t, n) { e.set(n, t) });
        else if (Array.isArray(t)) { var r, i = -1,
                o = t.length; if (null == n)
                for (; ++i < o;) e.set(i, t[i]);
            else
                for (; ++i < o;) e.set(n(r = t[i], i, t), r) } else if (t)
            for (var a in t) e.set(a, t[a]); return e }

    function fo() { return {} }

    function so(t, n, e) { t[n] = e }

    function lo() { return co() }

    function ho(t, n, e) { t.set(n, e) }

    function po() {}
    uo.prototype = co.prototype = { constructor: uo, has: function(t) { return "$" + t in this }, get: function(t) { return this["$" + t] }, set: function(t, n) { return this["$" + t] = n, this }, remove: function(t) { var n = "$" + t; return n in this && delete this[n] }, clear: function() { for (var t in this) "$" === t[0] && delete this[t] }, keys: function() { var t = []; for (var n in this) "$" === n[0] && t.push(n.slice(1)); return t }, values: function() { var t = []; for (var n in this) "$" === n[0] && t.push(this[n]); return t }, entries: function() { var t = []; for (var n in this) "$" === n[0] && t.push({ key: n.slice(1), value: this[n] }); return t }, size: function() { var t = 0; for (var n in this) "$" === n[0] && ++t; return t }, empty: function() { for (var t in this)
                if ("$" === t[0]) return !1;
            return !0 }, each: function(t) { for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this) } }; var vo = co.prototype;

    function go(t, n) { var e = new po; if (t instanceof po) t.each(function(t) { e.add(t) });
        else if (t) { var r = -1,
                i = t.length; if (null == n)
                for (; ++r < i;) e.add(t[r]);
            else
                for (; ++r < i;) e.add(n(t[r], r, t)) } return e }
    po.prototype = go.prototype = { constructor: po, has: vo.has, add: function(t) { return this["$" + (t += "")] = t, this }, remove: vo.remove, clear: vo.clear, values: vo.keys, size: vo.size, empty: vo.empty, each: vo.each }; var yo = Array.prototype.slice;

    function _o(t, n) { return t - n }

    function bo(t) { return function() { return t } }

    function mo(t, n) { for (var e, r = -1, i = n.length; ++r < i;)
            if (e = xo(t, n[r])) return e;
        return 0 }

    function xo(t, n) { for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) { var c = t[o],
                f = c[0],
                s = c[1],
                l = t[u],
                h = l[0],
                d = l[1]; if (wo(c, l, n)) return 0;
            s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i) } return i }

    function wo(t, n, e) { var r, i, o, a; return function(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]) }(t, n, e) && (i = t[r = +(t[0] === n[0])], o = e[r], a = n[r], i <= o && o <= a || a <= o && o <= i) }

    function Mo() {} var No = [
        [],
        [
            [
                [1, 1.5],
                [.5, 1]
            ]
        ],
        [
            [
                [1.5, 1],
                [1, 1.5]
            ]
        ],
        [
            [
                [1.5, 1],
                [.5, 1]
            ]
        ],
        [
            [
                [1, .5],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, 1.5],
                [.5, 1]
            ],
            [
                [1, .5],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, .5],
                [1, 1.5]
            ]
        ],
        [
            [
                [1, .5],
                [.5, 1]
            ]
        ],
        [
            [
                [.5, 1],
                [1, .5]
            ]
        ],
        [
            [
                [1, 1.5],
                [1, .5]
            ]
        ],
        [
            [
                [.5, 1],
                [1, .5]
            ],
            [
                [1.5, 1],
                [1, 1.5]
            ]
        ],
        [
            [
                [1.5, 1],
                [1, .5]
            ]
        ],
        [
            [
                [.5, 1],
                [1.5, 1]
            ]
        ],
        [
            [
                [1, 1.5],
                [1.5, 1]
            ]
        ],
        [
            [
                [.5, 1],
                [1, 1.5]
            ]
        ],
        []
    ];

    function To() { var t = 1,
            n = 1,
            e = M,
            r = u;

        function i(t) { var n = e(t); if (Array.isArray(n)) n = n.slice().sort(_o);
            else { var r = s(t),
                    i = r[0],
                    a = r[1];
                n = w(i, a, n), n = g(Math.floor(i / n) * n, Math.floor(a / n) * n, n) } return n.map(function(n) { return o(t, n) }) }

        function o(e, i) { var o = [],
                u = []; return function(e, r, i) { var o, u, c, f, s, l, h = new Array,
                    d = new Array;
                o = u = -1, f = e[0] >= r, No[f << 1].forEach(p); for (; ++o < t - 1;) c = f, f = e[o + 1] >= r, No[c | f << 1].forEach(p);
                No[f << 0].forEach(p); for (; ++u < n - 1;) { for (o = -1, f = e[u * t + t] >= r, s = e[u * t] >= r, No[f << 1 | s << 2].forEach(p); ++o < t - 1;) c = f, f = e[u * t + t + o + 1] >= r, l = s, s = e[u * t + o + 1] >= r, No[c | f << 1 | s << 2 | l << 3].forEach(p);
                    No[f | s << 3].forEach(p) }
                o = -1, s = e[u * t] >= r, No[s << 2].forEach(p); for (; ++o < t - 1;) l = s, s = e[u * t + o + 1] >= r, No[s << 2 | l << 3].forEach(p);

                function p(t) { var n, e, r = [t[0][0] + o, t[0][1] + u],
                        c = [t[1][0] + o, t[1][1] + u],
                        f = a(r),
                        s = a(c);
                    (n = d[f]) ? (e = h[s]) ? (delete d[n.end], delete h[e.start], n === e ? (n.ring.push(c), i(n.ring)) : h[n.start] = d[e.end] = { start: n.start, end: e.end, ring: n.ring.concat(e.ring) }) : (delete d[n.end], n.ring.push(c), d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start], delete d[e.end], n === e ? (n.ring.push(c), i(n.ring)) : h[e.start] = d[n.end] = { start: e.start, end: n.end, ring: e.ring.concat(n.ring) }) : (delete h[n.start], n.ring.unshift(r), h[n.start = f] = n) : h[f] = d[s] = { start: f, end: s, ring: [r, c] } }
                No[s << 3].forEach(p) }(e, i, function(t) { r(t, e, i),
                    function(t) { for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1]; return r }(t) > 0 ? o.push([t]) : u.push(t) }), u.forEach(function(t) { for (var n, e = 0, r = o.length; e < r; ++e)
                    if (-1 !== mo((n = o[e])[0], t)) return void n.push(t) }), { type: "MultiPolygon", value: i, coordinates: o } }

        function a(n) { return 2 * n[0] + n[1] * (t + 1) * 4 }

        function u(e, r, i) { e.forEach(function(e) { var o, a = e[0],
                    u = e[1],
                    c = 0 | a,
                    f = 0 | u,
                    s = r[f * t + c];
                a > 0 && a < t && c === a && (o = r[f * t + c - 1], e[0] = a + (i - o) / (s - o) - .5), u > 0 && u < n && f === u && (o = r[(f - 1) * t + c], e[1] = u + (i - o) / (s - o) - .5) }) } return i.contour = o, i.size = function(e) { if (!arguments.length) return [t, n]; var r = Math.ceil(e[0]),
                o = Math.ceil(e[1]); if (!(r > 0 && o > 0)) throw new Error("invalid size"); return t = r, n = o, i }, i.thresholds = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? bo(yo.call(t)) : bo(t), i) : e }, i.smooth = function(t) { return arguments.length ? (r = t ? u : Mo, i) : r === u }, i }

    function Ao(t, n, e) { for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a)
            for (var u = 0, c = 0; u < r + e; ++u) u < r && (c += t.data[u + a * r]), u >= e && (u >= o && (c -= t.data[u - o + a * r]), n.data[u - e + a * r] = c / Math.min(u + 1, r - 1 + o - u, o)) }

    function So(t, n, e) { for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a)
            for (var u = 0, c = 0; u < i + e; ++u) u < i && (c += t.data[a + u * r]), u >= e && (u >= o && (c -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = c / Math.min(u + 1, i - 1 + o - u, o)) }

    function ko(t) { return t[0] }

    function Eo(t) { return t[1] }

    function Co() { return 1 } var Po = {},
        zo = {},
        Ro = 34,
        Do = 10,
        qo = 13;

    function Lo(t) { return new Function("d", "return {" + t.map(function(t, n) { return JSON.stringify(t) + ": d[" + n + '] || ""' }).join(",") + "}") }

    function Uo(t) { var n = Object.create(null),
            e = []; return t.forEach(function(t) { for (var r in t) r in n || e.push(n[r] = r) }), e }

    function Oo(t, n) { var e = t + "",
            r = e.length; return r < n ? new Array(n - r + 1).join(0) + e : e }

    function Bo(t) { var n = t.getUTCHours(),
            e = t.getUTCMinutes(),
            r = t.getUTCSeconds(),
            i = t.getUTCMilliseconds(); return isNaN(t) ? "Invalid Date" : function(t) { return t < 0 ? "-" + Oo(-t, 6) : t > 9999 ? "+" + Oo(t, 6) : Oo(t, 4) }(t.getUTCFullYear()) + "-" + Oo(t.getUTCMonth() + 1, 2) + "-" + Oo(t.getUTCDate(), 2) + (i ? "T" + Oo(n, 2) + ":" + Oo(e, 2) + ":" + Oo(r, 2) + "." + Oo(i, 3) + "Z" : r ? "T" + Oo(n, 2) + ":" + Oo(e, 2) + ":" + Oo(r, 2) + "Z" : e || n ? "T" + Oo(n, 2) + ":" + Oo(e, 2) + "Z" : "") }

    function Fo(t) { var n = new RegExp('["' + t + "\n\r]"),
            e = t.charCodeAt(0);

        function r(t, n) { var r, i = [],
                o = t.length,
                a = 0,
                u = 0,
                c = o <= 0,
                f = !1;

            function s() { if (c) return zo; if (f) return f = !1, Po; var n, r, i = a; if (t.charCodeAt(i) === Ro) { for (; a++ < o && t.charCodeAt(a) !== Ro || t.charCodeAt(++a) === Ro;); return (n = a) >= o ? c = !0 : (r = t.charCodeAt(a++)) === Do ? f = !0 : r === qo && (f = !0, t.charCodeAt(a) === Do && ++a), t.slice(i + 1, n - 1).replace(/""/g, '"') } for (; a < o;) { if ((r = t.charCodeAt(n = a++)) === Do) f = !0;
                    else if (r === qo) f = !0, t.charCodeAt(a) === Do && ++a;
                    else if (r !== e) continue; return t.slice(i, n) } return c = !0, t.slice(i, o) } for (t.charCodeAt(o - 1) === Do && --o, t.charCodeAt(o - 1) === qo && --o;
                (r = s()) !== zo;) { for (var l = []; r !== Po && r !== zo;) l.push(r), r = s();
                n && null == (l = n(l, u++)) || i.push(l) } return i }

        function i(n, e) { return n.map(function(n) { return e.map(function(t) { return a(n[t]) }).join(t) }) }

        function o(n) { return n.map(a).join(t) }

        function a(t) { return null == t ? "" : t instanceof Date ? Bo(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t } return { parse: function(t, n) { var e, i, o = r(t, function(t, r) { if (e) return e(t, r - 1);
                    i = t, e = n ? function(t, n) { var e = Lo(t); return function(r, i) { return n(e(r), i, t) } }(t, n) : Lo(t) }); return o.columns = i || [], o }, parseRows: r, format: function(n, e) { return null == e && (e = Uo(n)), [e.map(a).join(t)].concat(i(n, e)).join("\n") }, formatBody: function(t, n) { return null == n && (n = Uo(t)), i(t, n).join("\n") }, formatRows: function(t) { return t.map(o).join("\n") }, formatRow: o, formatValue: a } } var Yo = Fo(","),
        Io = Yo.parse,
        Ho = Yo.parseRows,
        jo = Yo.format,
        Xo = Yo.formatBody,
        Vo = Yo.formatRows,
        Go = Yo.formatRow,
        $o = Yo.formatValue,
        Wo = Fo("\t"),
        Zo = Wo.parse,
        Qo = Wo.parseRows,
        Ko = Wo.format,
        Jo = Wo.formatBody,
        ta = Wo.formatRows,
        na = Wo.formatRow,
        ea = Wo.formatValue; var ra = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

    function ia(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.blob() }

    function oa(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.arrayBuffer() }

    function aa(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.text() }

    function ua(t, n) { return fetch(t, n).then(aa) }

    function ca(t) { return function(n, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), ua(n, e).then(function(n) { return t(n, r) }) } } var fa = ca(Io),
        sa = ca(Zo);

    function la(t) { if (!t.ok) throw new Error(t.status + " " + t.statusText); return t.json() }

    function ha(t) { return function(n, e) { return ua(n, e).then(function(n) { return (new DOMParser).parseFromString(n, t) }) } } var da = ha("application/xml"),
        pa = ha("text/html"),
        va = ha("image/svg+xml");

    function ga(t) { return function() { return t } }

    function ya() { return 1e-6 * (Math.random() - .5) }

    function _a(t, n, e, r) { if (isNaN(n) || isNaN(e)) return t; var i, o, a, u, c, f, s, l, h, d = t._root,
            p = { data: r },
            v = t._x0,
            g = t._y0,
            y = t._x1,
            _ = t._y1; if (!d) return t._root = p, t; for (; d.length;)
            if ((f = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
        if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
        do { i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a } while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o)); return i[h] = d, i[l] = p, t }

    function ba(t, n, e, r, i) { this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i }

    function ma(t) { return t[0] }

    function xa(t) { return t[1] }

    function wa(t, n, e) { var r = new Ma(null == n ? ma : n, null == e ? xa : e, NaN, NaN, NaN, NaN); return null == t ? r : r.addAll(t) }

    function Ma(t, n, e, r, i, o) { this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0 }

    function Na(t) { for (var n = { data: t.data }, e = n; t = t.next;) e = e.next = { data: t.data }; return n } var Ta = wa.prototype = Ma.prototype;

    function Aa(t) { return t.x + t.vx }

    function Sa(t) { return t.y + t.vy }

    function ka(t) { return t.index }

    function Ea(t, n) { var e = t.get(n); if (!e) throw new Error("missing: " + n); return e }

    function Ca(t) { return t.x }

    function Pa(t) { return t.y }
    Ta.copy = function() { var t, n, e = new Ma(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root; if (!r) return e; if (!r.length) return e._root = Na(r), e; for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();)
            for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = Na(n)); return e }, Ta.add = function(t) { var n = +this._x.call(null, t),
            e = +this._y.call(null, t); return _a(this.cover(n, e), n, e, t) }, Ta.addAll = function(t) { var n, e, r, i, o = t.length,
            a = new Array(o),
            u = new Array(o),
            c = 1 / 0,
            f = 1 / 0,
            s = -1 / 0,
            l = -1 / 0; for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i)); if (c > s || f > l) return this; for (this.cover(c, f).cover(s, l), e = 0; e < o; ++e) _a(this, a[e], u[e], t[e]); return this }, Ta.cover = function(t, n) { if (isNaN(t = +t) || isNaN(n = +n)) return this; var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1; if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
        else { for (var a, u, c = i - e, f = this._root; e > t || t >= i || r > n || n >= o;) switch (u = (n < r) << 1 | t < e, (a = new Array(4))[u] = f, f = a, c *= 2, u) {
                case 0:
                    i = e + c, o = r + c; break;
                case 1:
                    e = i - c, o = r + c; break;
                case 2:
                    i = e + c, r = o - c; break;
                case 3:
                    e = i - c, r = o - c }
            this._root && this._root.length && (this._root = f) } return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this }, Ta.data = function() { var t = []; return this.visit(function(n) { if (!n.length)
                do { t.push(n.data) } while (n = n.next) }), t }, Ta.extent = function(t) { return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
            [this._x0, this._y0],
            [this._x1, this._y1]
        ] }, Ta.find = function(t, n, e) { var r, i, o, a, u, c, f, s = this._x0,
            l = this._y0,
            h = this._x1,
            d = this._y1,
            p = [],
            v = this._root; for (v && p.push(new ba(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
            if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
                if (v.length) { var g = (i + a) / 2,
                        y = (o + u) / 2;
                    p.push(new ba(v[3], g, y, a, u), new ba(v[2], i, y, g, u), new ba(v[1], g, o, a, y), new ba(v[0], i, o, g, y)), (f = (n >= y) << 1 | t >= g) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c) } else { var _ = t - +this._x.call(null, v.data),
                        b = n - +this._y.call(null, v.data),
                        m = _ * _ + b * b; if (m < e) { var x = Math.sqrt(e = m);
                        s = t - x, l = n - x, h = t + x, d = n + x, r = v.data } }
        return r }, Ta.remove = function(t) { if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this; var n, e, r, i, o, a, u, c, f, s, l, h, d = this._root,
            p = this._x0,
            v = this._y0,
            g = this._x1,
            y = this._y1; if (!d) return this; if (d.length)
            for (;;) { if ((f = o >= (u = (p + g) / 2)) ? p = u : g = u, (s = a >= (c = (v + y) / 2)) ? v = c : y = c, n = d, !(d = d[l = s << 1 | f])) return this; if (!d.length) break;
                (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l) }
        for (; d.data !== t;)
            if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this) }, Ta.removeAll = function(t) { for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]); return this }, Ta.root = function() { return this._root }, Ta.size = function() { var t = 0; return this.visit(function(n) { if (!n.length)
                do {++t } while (n = n.next) }), t }, Ta.visit = function(t) { var n, e, r, i, o, a, u = [],
            c = this._root; for (c && u.push(new ba(c, this._x0, this._y0, this._x1, this._y1)); n = u.pop();)
            if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) { var f = (r + o) / 2,
                    s = (i + a) / 2;
                (e = c[3]) && u.push(new ba(e, f, s, o, a)), (e = c[2]) && u.push(new ba(e, r, s, f, a)), (e = c[1]) && u.push(new ba(e, f, i, o, s)), (e = c[0]) && u.push(new ba(e, r, i, f, s)) }
        return this }, Ta.visitAfter = function(t) { var n, e = [],
            r = []; for (this._root && e.push(new ba(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) { var i = n.node; if (i.length) { var o, a = n.x0,
                    u = n.y0,
                    c = n.x1,
                    f = n.y1,
                    s = (a + c) / 2,
                    l = (u + f) / 2;
                (o = i[0]) && e.push(new ba(o, a, u, s, l)), (o = i[1]) && e.push(new ba(o, s, u, c, l)), (o = i[2]) && e.push(new ba(o, a, l, s, f)), (o = i[3]) && e.push(new ba(o, s, l, c, f)) }
            r.push(n) } for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1); return this }, Ta.x = function(t) { return arguments.length ? (this._x = t, this) : this._x }, Ta.y = function(t) { return arguments.length ? (this._y = t, this) : this._y }; var za = 10,
        Ra = Math.PI * (3 - Math.sqrt(5));

    function Da(t, n) { if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null; var e, r = t.slice(0, e); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)] }

    function qa(t) { return (t = Da(Math.abs(t))) ? t[1] : NaN } var La, Ua = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Oa(t) { if (!(n = Ua.exec(t))) throw new Error("invalid format: " + t); var n; return new Ba({ fill: n[1], align: n[2], sign: n[3], symbol: n[4], zero: n[5], width: n[6], comma: n[7], precision: n[8] && n[8].slice(1), trim: n[9], type: n[10] }) }

    function Ba(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }

    function Fa(t, n) { var e = Da(t, n); if (!e) return t + ""; var r = e[0],
            i = e[1]; return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0") }
    Oa.prototype = Ba.prototype, Ba.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type }; var Ya = { "%": function(t, n) { return (100 * t).toFixed(n) }, b: function(t) { return Math.round(t).toString(2) }, c: function(t) { return t + "" }, d: function(t) { return Math.round(t).toString(10) }, e: function(t, n) { return t.toExponential(n) }, f: function(t, n) { return t.toFixed(n) }, g: function(t, n) { return t.toPrecision(n) }, o: function(t) { return Math.round(t).toString(8) }, p: function(t, n) { return Fa(100 * t, n) }, r: Fa, s: function(t, n) { var e = Da(t, n); if (!e) return t + ""; var r = e[0],
                i = e[1],
                o = i - (La = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                a = r.length; return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Da(t, Math.max(0, n + o - 1))[0] }, X: function(t) { return Math.round(t).toString(16).toUpperCase() }, x: function(t) { return Math.round(t).toString(16) } };

    function Ia(t) { return t } var Ha, ja = Array.prototype.map,
        Xa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Va(t) { var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? Ia : (n = ja.call(t.grouping, Number), e = t.thousands + "", function(t, r) { for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)), o.push(t.substring(i -= u, i + u)), !((c += u + 1) > r));) u = n[a = (a + 1) % n.length]; return o.reverse().join(e) }),
            i = void 0 === t.currency ? "" : t.currency[0] + "",
            o = void 0 === t.currency ? "" : t.currency[1] + "",
            a = void 0 === t.decimal ? "." : t.decimal + "",
            u = void 0 === t.numerals ? Ia : function(t) { return function(n) { return n.replace(/[0-9]/g, function(n) { return t[+n] }) } }(ja.call(t.numerals, String)),
            c = void 0 === t.percent ? "%" : t.percent + "",
            f = void 0 === t.minus ? "-" : t.minus + "",
            s = void 0 === t.nan ? "NaN" : t.nan + "";

        function l(t) { var n = (t = Oa(t)).fill,
                e = t.align,
                l = t.sign,
                h = t.symbol,
                d = t.zero,
                p = t.width,
                v = t.comma,
                g = t.precision,
                y = t.trim,
                _ = t.type; "n" === _ ? (v = !0, _ = "g") : Ya[_] || (void 0 === g && (g = 12), y = !0, _ = "g"), (d || "0" === n && "=" === e) && (d = !0, n = "0", e = "="); var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
                m = "$" === h ? o : /[%p]/.test(_) ? c : "",
                x = Ya[_],
                w = /[defgprs%]/.test(_);

            function M(t) { var i, o, c, h = b,
                    M = m; if ("c" === _) M = x(t) + M, t = "";
                else { var N = (t = +t) < 0 || 1 / t < 0; if (t = isNaN(t) ? s : x(Math.abs(t), g), y && (t = function(t) { t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                case ".":
                                    i = n = r; break;
                                case "0":
                                    0 === i && (i = r), n = r; break;
                                default:
                                    if (!+t[r]) break t;
                                    i > 0 && (i = 0) }
                            return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t }(t)), N && 0 == +t && "+" !== l && (N = !1), h = (N ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h, M = ("s" === _ ? Xa[8 + La / 3] : "") + M + (N && "(" === l ? ")" : ""), w)
                        for (i = -1, o = t.length; ++i < o;)
                            if (48 > (c = t.charCodeAt(i)) || c > 57) { M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M, t = t.slice(0, i); break } }
                v && !d && (t = r(t, 1 / 0)); var T = h.length + t.length + M.length,
                    A = T < p ? new Array(p - T + 1).join(n) : ""; switch (v && d && (t = r(A + t, A.length ? p - M.length : 1 / 0), A = ""), e) {
                    case "<":
                        t = h + t + M + A; break;
                    case "=":
                        t = h + A + t + M; break;
                    case "^":
                        t = A.slice(0, T = A.length >> 1) + h + t + M + A.slice(T); break;
                    default:
                        t = A + h + t + M } return u(t) } return g = void 0 === g ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), M.toString = function() { return t + "" }, M } return { format: l, formatPrefix: function(t, n) { var e = l(((t = Oa(t)).type = "f", t)),
                    r = 3 * Math.max(-8, Math.min(8, Math.floor(qa(n) / 3))),
                    i = Math.pow(10, -r),
                    o = Xa[8 + r / 3]; return function(t) { return e(i * t) + o } } } }

    function Ga(n) { return Ha = Va(n), t.format = Ha.format, t.formatPrefix = Ha.formatPrefix, Ha }

    function $a(t) { return Math.max(0, -qa(Math.abs(t))) }

    function Wa(t, n) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(qa(n) / 3))) - qa(Math.abs(t))) }

    function Za(t, n) { return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, qa(n) - qa(t)) + 1 }

    function Qa() { return new Ka }

    function Ka() { this.reset() }
    Ga({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-" }), Ka.prototype = { constructor: Ka, reset: function() { this.s = this.t = 0 }, add: function(t) { tu(Ja, t, this.t), tu(this, Ja.s, this.s), this.s ? this.t += Ja.t : this.s = Ja.t }, valueOf: function() { return this.s } }; var Ja = new Ka;

    function tu(t, n, e) { var r = t.s = n + e,
            i = r - n,
            o = r - i;
        t.t = n - o + (e - i) } var nu = 1e-6,
        eu = 1e-12,
        ru = Math.PI,
        iu = ru / 2,
        ou = ru / 4,
        au = 2 * ru,
        uu = 180 / ru,
        cu = ru / 180,
        fu = Math.abs,
        su = Math.atan,
        lu = Math.atan2,
        hu = Math.cos,
        du = Math.ceil,
        pu = Math.exp,
        vu = Math.log,
        gu = Math.pow,
        yu = Math.sin,
        _u = Math.sign || function(t) { return t > 0 ? 1 : t < 0 ? -1 : 0 },
        bu = Math.sqrt,
        mu = Math.tan;

    function xu(t) { return t > 1 ? 0 : t < -1 ? ru : Math.acos(t) }

    function wu(t) { return t > 1 ? iu : t < -1 ? -iu : Math.asin(t) }

    function Mu(t) { return (t = yu(t / 2)) * t }

    function Nu() {}

    function Tu(t, n) { t && Su.hasOwnProperty(t.type) && Su[t.type](t, n) } var Au = { Feature: function(t, n) { Tu(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;) Tu(e[r].geometry, n) } },
        Su = { Sphere: function(t, n) { n.sphere() }, Point: function(t, n) { t = t.coordinates, n.point(t[0], t[1], t[2]) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2]) }, LineString: function(t, n) { ku(t.coordinates, n, 0) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) ku(e[r], n, 0) }, Polygon: function(t, n) { Eu(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Eu(e[r], n) }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Tu(e[r], n) } };

    function ku(t, n, e) { var r, i = -1,
            o = t.length - e; for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd() }

    function Eu(t, n) { var e = -1,
            r = t.length; for (n.polygonStart(); ++e < r;) ku(t[e], n, 1);
        n.polygonEnd() }

    function Cu(t, n) { t && Au.hasOwnProperty(t.type) ? Au[t.type](t, n) : Tu(t, n) } var Pu, zu, Ru, Du, qu, Lu = Qa(),
        Uu = Qa(),
        Ou = { point: Nu, lineStart: Nu, lineEnd: Nu, polygonStart: function() { Lu.reset(), Ou.lineStart = Bu, Ou.lineEnd = Fu }, polygonEnd: function() { var t = +Lu;
                Uu.add(t < 0 ? au + t : t), this.lineStart = this.lineEnd = this.point = Nu }, sphere: function() { Uu.add(au) } };

    function Bu() { Ou.point = Yu }

    function Fu() { Iu(Pu, zu) }

    function Yu(t, n) { Ou.point = Iu, Pu = t, zu = n, Ru = t *= cu, Du = hu(n = (n *= cu) / 2 + ou), qu = yu(n) }

    function Iu(t, n) { var e = (t *= cu) - Ru,
            r = e >= 0 ? 1 : -1,
            i = r * e,
            o = hu(n = (n *= cu) / 2 + ou),
            a = yu(n),
            u = qu * a,
            c = Du * o + u * hu(i),
            f = u * r * yu(i);
        Lu.add(lu(f, c)), Ru = t, Du = o, qu = a }

    function Hu(t) { return [lu(t[1], t[0]), wu(t[2])] }

    function ju(t) { var n = t[0],
            e = t[1],
            r = hu(e); return [r * hu(n), r * yu(n), yu(e)] }

    function Xu(t, n) { return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] }

    function Vu(t, n) { return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]] }

    function Gu(t, n) { t[0] += n[0], t[1] += n[1], t[2] += n[2] }

    function $u(t, n) { return [t[0] * n, t[1] * n, t[2] * n] }

    function Wu(t) { var n = bu(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n } var Zu, Qu, Ku, Ju, tc, nc, ec, rc, ic, oc, ac, uc, cc, fc, sc, lc, hc, dc, pc, vc, gc, yc, _c, bc, mc, xc, wc = Qa(),
        Mc = { point: Nc, lineStart: Ac, lineEnd: Sc, polygonStart: function() { Mc.point = kc, Mc.lineStart = Ec, Mc.lineEnd = Cc, wc.reset(), Ou.polygonStart() }, polygonEnd: function() { Ou.polygonEnd(), Mc.point = Nc, Mc.lineStart = Ac, Mc.lineEnd = Sc, Lu < 0 ? (Zu = -(Ku = 180), Qu = -(Ju = 90)) : wc > nu ? Ju = 90 : wc < -nu && (Qu = -90), oc[0] = Zu, oc[1] = Ku }, sphere: function() { Zu = -(Ku = 180), Qu = -(Ju = 90) } };

    function Nc(t, n) { ic.push(oc = [Zu = t, Ku = t]), n < Qu && (Qu = n), n > Ju && (Ju = n) }

    function Tc(t, n) { var e = ju([t * cu, n * cu]); if (rc) { var r = Vu(rc, e),
                i = Vu([r[1], -r[0], 0], r);
            Wu(i), i = Hu(i); var o, a = t - tc,
                u = a > 0 ? 1 : -1,
                c = i[0] * uu * u,
                f = fu(a) > 180;
            f ^ (u * tc < c && c < u * t) ? (o = i[1] * uu) > Ju && (Ju = o) : f ^ (u * tc < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * uu) < Qu && (Qu = o) : (n < Qu && (Qu = n), n > Ju && (Ju = n)), f ? t < tc ? Pc(Zu, t) > Pc(Zu, Ku) && (Ku = t) : Pc(t, Ku) > Pc(Zu, Ku) && (Zu = t) : Ku >= Zu ? (t < Zu && (Zu = t), t > Ku && (Ku = t)) : t > tc ? Pc(Zu, t) > Pc(Zu, Ku) && (Ku = t) : Pc(t, Ku) > Pc(Zu, Ku) && (Zu = t) } else ic.push(oc = [Zu = t, Ku = t]);
        n < Qu && (Qu = n), n > Ju && (Ju = n), rc = e, tc = t }

    function Ac() { Mc.point = Tc }

    function Sc() { oc[0] = Zu, oc[1] = Ku, Mc.point = Nc, rc = null }

    function kc(t, n) { if (rc) { var e = t - tc;
            wc.add(fu(e) > 180 ? e + (e > 0 ? 360 : -360) : e) } else nc = t, ec = n;
        Ou.point(t, n), Tc(t, n) }

    function Ec() { Ou.lineStart() }

    function Cc() { kc(nc, ec), Ou.lineEnd(), fu(wc) > nu && (Zu = -(Ku = 180)), oc[0] = Zu, oc[1] = Ku, rc = null }

    function Pc(t, n) { return (n -= t) < 0 ? n + 360 : n }

    function zc(t, n) { return t[0] - n[0] }

    function Rc(t, n) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n } var Dc = { sphere: Nu, point: qc, lineStart: Uc, lineEnd: Fc, polygonStart: function() { Dc.lineStart = Yc, Dc.lineEnd = Ic }, polygonEnd: function() { Dc.lineStart = Uc, Dc.lineEnd = Fc } };

    function qc(t, n) { t *= cu; var e = hu(n *= cu);
        Lc(e * hu(t), e * yu(t), yu(n)) }

    function Lc(t, n, e) { cc += (t - cc) / ++ac, fc += (n - fc) / ac, sc += (e - sc) / ac }

    function Uc() { Dc.point = Oc }

    function Oc(t, n) { t *= cu; var e = hu(n *= cu);
        bc = e * hu(t), mc = e * yu(t), xc = yu(n), Dc.point = Bc, Lc(bc, mc, xc) }

    function Bc(t, n) { t *= cu; var e = hu(n *= cu),
            r = e * hu(t),
            i = e * yu(t),
            o = yu(n),
            a = lu(bu((a = mc * o - xc * i) * a + (a = xc * r - bc * o) * a + (a = bc * i - mc * r) * a), bc * r + mc * i + xc * o);
        uc += a, lc += a * (bc + (bc = r)), hc += a * (mc + (mc = i)), dc += a * (xc + (xc = o)), Lc(bc, mc, xc) }

    function Fc() { Dc.point = qc }

    function Yc() { Dc.point = Hc }

    function Ic() { jc(yc, _c), Dc.point = qc }

    function Hc(t, n) { yc = t, _c = n, t *= cu, n *= cu, Dc.point = jc; var e = hu(n);
        bc = e * hu(t), mc = e * yu(t), xc = yu(n), Lc(bc, mc, xc) }

    function jc(t, n) { t *= cu; var e = hu(n *= cu),
            r = e * hu(t),
            i = e * yu(t),
            o = yu(n),
            a = mc * o - xc * i,
            u = xc * r - bc * o,
            c = bc * i - mc * r,
            f = bu(a * a + u * u + c * c),
            s = wu(f),
            l = f && -s / f;
        pc += l * a, vc += l * u, gc += l * c, uc += s, lc += s * (bc + (bc = r)), hc += s * (mc + (mc = i)), dc += s * (xc + (xc = o)), Lc(bc, mc, xc) }

    function Xc(t) { return function() { return t } }

    function Vc(t, n) {
        function e(e, r) { return e = t(e, r), n(e[0], e[1]) } return t.invert && n.invert && (e.invert = function(e, r) { return (e = n.invert(e, r)) && t.invert(e[0], e[1]) }), e }

    function Gc(t, n) { return [fu(t) > ru ? t + Math.round(-t / au) * au : t, n] }

    function $c(t, n, e) { return (t %= au) ? n || e ? Vc(Zc(t), Qc(n, e)) : Zc(t) : n || e ? Qc(n, e) : Gc }

    function Wc(t) { return function(n, e) { return [(n += t) > ru ? n - au : n < -ru ? n + au : n, e] } }

    function Zc(t) { var n = Wc(t); return n.invert = Wc(-t), n }

    function Qc(t, n) { var e = hu(t),
            r = yu(t),
            i = hu(n),
            o = yu(n);

        function a(t, n) { var a = hu(n),
                u = hu(t) * a,
                c = yu(t) * a,
                f = yu(n),
                s = f * e + u * r; return [lu(c * i - s * o, u * e - f * r), wu(s * i + c * o)] } return a.invert = function(t, n) { var a = hu(n),
                u = hu(t) * a,
                c = yu(t) * a,
                f = yu(n),
                s = f * i - c * o; return [lu(c * i + f * o, u * e + s * r), wu(s * e - u * r)] }, a }

    function Kc(t) {
        function n(n) { return (n = t(n[0] * cu, n[1] * cu))[0] *= uu, n[1] *= uu, n } return t = $c(t[0] * cu, t[1] * cu, t.length > 2 ? t[2] * cu : 0), n.invert = function(n) { return (n = t.invert(n[0] * cu, n[1] * cu))[0] *= uu, n[1] *= uu, n }, n }

    function Jc(t, n, e, r, i, o) { if (e) { var a = hu(n),
                u = yu(n),
                c = r * e;
            null == i ? (i = n + r * au, o = n - c / 2) : (i = tf(a, i), o = tf(a, o), (r > 0 ? i < o : i > o) && (i += r * au)); for (var f, s = i; r > 0 ? s > o : s < o; s -= c) f = Hu([a, -u * hu(s), -u * yu(s)]), t.point(f[0], f[1]) } }

    function tf(t, n) {
        (n = ju(n))[0] -= t, Wu(n); var e = xu(-n[1]); return ((-n[2] < 0 ? -e : e) + au - nu) % au }

    function nf() { var t, n = []; return { point: function(n, e) { t.push([n, e]) }, lineStart: function() { n.push(t = []) }, lineEnd: Nu, rejoin: function() { n.length > 1 && n.push(n.pop().concat(n.shift())) }, result: function() { var e = n; return n = [], t = null, e } } }

    function ef(t, n) { return fu(t[0] - n[0]) < nu && fu(t[1] - n[1]) < nu }

    function rf(t, n, e, r) { this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null }

    function of(t, n, e, r, i) { var o, a, u = [],
            c = []; if (t.forEach(function(t) { if (!((n = t.length - 1) <= 0)) { var n, e, r = t[0],
                        a = t[n]; if (ef(r, a)) { for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                        i.lineEnd() } else u.push(e = new rf(r, t, null, !0)), c.push(e.o = new rf(r, null, e, !1)), u.push(e = new rf(a, t, null, !1)), c.push(e.o = new rf(a, null, e, !0)) } }), u.length) { for (c.sort(n), af(u), af(c), o = 0, a = c.length; o < a; ++o) c[o].e = e = !e; for (var f, s, l = u[0];;) { for (var h = l, d = !0; h.v;)
                    if ((h = h.n) === l) return;
                f = h.z, i.lineStart();
                do { if (h.v = h.o.v = !0, h.e) { if (d)
                            for (o = 0, a = f.length; o < a; ++o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.n.x, 1, i);
                        h = h.n } else { if (d)
                            for (f = h.p.z, o = f.length - 1; o >= 0; --o) i.point((s = f[o])[0], s[1]);
                        else r(h.x, h.p.x, -1, i);
                        h = h.p }
                    f = (h = h.o).z, d = !d } while (!h.v);
                i.lineEnd() } } }

    function af(t) { if (n = t.length) { for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i } }
    Gc.invert = Gc; var uf = Qa();

    function cf(t) { return fu(t[0]) <= ru ? t[0] : _u(t[0]) * ((fu(t[0]) + ru) % au - ru) }

    function ff(t, n) { var e = cf(n),
            r = n[1],
            i = yu(r),
            o = [yu(e), -hu(e), 0],
            a = 0,
            u = 0;
        uf.reset(), 1 === i ? r = iu + nu : -1 === i && (r = -iu - nu); for (var c = 0, f = t.length; c < f; ++c)
            if (l = (s = t[c]).length)
                for (var s, l, h = s[l - 1], d = cf(h), p = h[1] / 2 + ou, v = yu(p), g = hu(p), y = 0; y < l; ++y, d = b, v = x, g = w, h = _) { var _ = s[y],
                        b = cf(_),
                        m = _[1] / 2 + ou,
                        x = yu(m),
                        w = hu(m),
                        M = b - d,
                        N = M >= 0 ? 1 : -1,
                        T = N * M,
                        A = T > ru,
                        S = v * x; if (uf.add(lu(S * N * yu(T), g * w + S * hu(T))), a += A ? M + N * au : M, A ^ d >= e ^ b >= e) { var k = Vu(ju(h), ju(_));
                        Wu(k); var E = Vu(o, k);
                        Wu(E); var C = (A ^ M >= 0 ? -1 : 1) * wu(E[2]);
                        (r > C || r === C && (k[0] || k[1])) && (u += A ^ M >= 0 ? 1 : -1) } }
            return (a < -nu || a < nu && uf < -nu) ^ 1 & u }

    function sf(t, n, e, r) { return function(i) { var o, a, u, c = n(i),
                f = nf(),
                s = n(f),
                l = !1,
                h = { point: d, lineStart: v, lineEnd: g, polygonStart: function() { h.point = y, h.lineStart = _, h.lineEnd = b, a = [], o = [] }, polygonEnd: function() { h.point = d, h.lineStart = v, h.lineEnd = g, a = A(a); var t = ff(o, r);
                        a.length ? (l || (i.polygonStart(), l = !0), of(a, hf, t, e, i)) : t && (l || (i.polygonStart(), l = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), l && (i.polygonEnd(), l = !1), a = o = null }, sphere: function() { i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd() } };

            function d(n, e) { t(n, e) && i.point(n, e) }

            function p(t, n) { c.point(t, n) }

            function v() { h.point = p, c.lineStart() }

            function g() { h.point = d, c.lineEnd() }

            function y(t, n) { u.push([t, n]), s.point(t, n) }

            function _() { s.lineStart(), u = [] }

            function b() { y(u[0][0], u[0][1]), s.lineEnd(); var t, n, e, r, c = s.clean(),
                    h = f.result(),
                    d = h.length; if (u.pop(), o.push(u), u = null, d)
                    if (1 & c) { if ((n = (e = h[0]).length - 1) > 0) { for (l || (i.polygonStart(), l = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                            i.lineEnd() } } else d > 1 && 2 & c && h.push(h.pop().concat(h.shift())), a.push(h.filter(lf)) } return h } }

    function lf(t) { return t.length > 1 }

    function hf(t, n) { return ((t = t.x)[0] < 0 ? t[1] - iu - nu : iu - t[1]) - ((n = n.x)[0] < 0 ? n[1] - iu - nu : iu - n[1]) } var df = sf(function() { return !0 }, function(t) { var n, e = NaN,
            r = NaN,
            i = NaN; return { lineStart: function() { t.lineStart(), n = 1 }, point: function(o, a) { var u = o > 0 ? ru : -ru,
                    c = fu(o - e);
                fu(c - ru) < nu ? (t.point(e, r = (r + a) / 2 > 0 ? iu : -iu), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && c >= ru && (fu(e - i) < nu && (e -= i * nu), fu(o - u) < nu && (o -= u * nu), r = function(t, n, e, r) { var i, o, a = yu(t - e); return fu(a) > nu ? su((yu(n) * (o = hu(r)) * yu(e) - yu(r) * (i = hu(n)) * yu(t)) / (i * o * a)) : (n + r) / 2 }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u }, lineEnd: function() { t.lineEnd(), e = r = NaN }, clean: function() { return 2 - n } } }, function(t, n, e, r) { var i; if (null == t) i = e * iu, r.point(-ru, i), r.point(0, i), r.point(ru, i), r.point(ru, 0), r.point(ru, -i), r.point(0, -i), r.point(-ru, -i), r.point(-ru, 0), r.point(-ru, i);
        else if (fu(t[0] - n[0]) > nu) { var o = t[0] < n[0] ? ru : -ru;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i) } else r.point(n[0], n[1]) }, [-ru, -iu]);

    function pf(t) { var n = hu(t),
            e = 6 * cu,
            r = n > 0,
            i = fu(n) > nu;

        function o(t, e) { return hu(t) * hu(e) > n }

        function a(t, e, r) { var i = [1, 0, 0],
                o = Vu(ju(t), ju(e)),
                a = Xu(o, o),
                u = o[0],
                c = a - u * u; if (!c) return !r && t; var f = n * a / c,
                s = -n * u / c,
                l = Vu(i, o),
                h = $u(i, f);
            Gu(h, $u(o, s)); var d = l,
                p = Xu(h, d),
                v = Xu(d, d),
                g = p * p - v * (Xu(h, h) - 1); if (!(g < 0)) { var y = bu(g),
                    _ = $u(d, (-p - y) / v); if (Gu(_, h), _ = Hu(_), !r) return _; var b, m = t[0],
                    x = e[0],
                    w = t[1],
                    M = e[1];
                x < m && (b = m, m = x, x = b); var N = x - m,
                    T = fu(N - ru) < nu; if (!T && M < w && (b = w, w = M, M = b), T || N < nu ? T ? w + M > 0 ^ _[1] < (fu(_[0] - m) < nu ? w : M) : w <= _[1] && _[1] <= M : N > ru ^ (m <= _[0] && _[0] <= x)) { var A = $u(d, (-p + y) / v); return Gu(A, h), [_, Hu(A)] } } }

        function u(n, e) { var i = r ? t : ru - t,
                o = 0; return n < -i ? o |= 1 : n > i && (o |= 2), e < -i ? o |= 4 : e > i && (o |= 8), o } return sf(o, function(t) { var n, e, c, f, s; return { lineStart: function() { f = c = !1, s = 1 }, point: function(l, h) { var d, p = [l, h],
                        v = o(l, h),
                        g = r ? v ? 0 : u(l, h) : v ? u(l + (l < 0 ? ru : -ru), h) : 0; if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = a(n, p)) || ef(n, d) || ef(p, d)) && (p[0] += nu, p[1] += nu, v = o(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = a(p, n), t.point(d[0], d[1])) : (d = a(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
                    else if (i && n && r ^ v) { var y;
                        g & e || !(y = a(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1]))) }!v || n && ef(n, p) || t.point(p[0], p[1]), n = p, c = v, e = g }, lineEnd: function() { c && t.lineEnd(), n = null }, clean: function() { return s | (f && c) << 1 } } }, function(n, r, i, o) { Jc(o, t, e, i, n, r) }, r ? [0, -t] : [-ru, t - ru]) } var vf = 1e9,
        gf = -vf;

    function yf(t, n, e, r) {
        function i(i, o) { return t <= i && i <= e && n <= o && o <= r }

        function o(i, o, u, f) { var s = 0,
                l = 0; if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0)
                do { f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n) } while ((s = (s + u + 4) % 4) !== l);
            else f.point(o[0], o[1]) }

        function a(r, i) { return fu(r[0] - t) < nu ? i > 0 ? 0 : 3 : fu(r[0] - e) < nu ? i > 0 ? 2 : 1 : fu(r[1] - n) < nu ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2 }

        function u(t, n) { return c(t.x, n.x) }

        function c(t, n) { var e = a(t, 1),
                r = a(n, 1); return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0] } return function(a) { var c, f, s, l, h, d, p, v, g, y, _, b = a,
                m = nf(),
                x = { point: w, lineStart: function() { x.point = M, f && f.push(s = []);
                        y = !0, g = !1, p = v = NaN }, lineEnd: function() { c && (M(l, h), d && g && m.rejoin(), c.push(m.result()));
                        x.point = w, g && b.lineEnd() }, polygonStart: function() { b = m, c = [], f = [], _ = !0 }, polygonEnd: function() { var n = function() { for (var n = 0, e = 0, i = f.length; e < i; ++e)
                                    for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c) o = h, a = d, l = u[c], h = l[0], d = l[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n; return n }(),
                            e = _ && n,
                            i = (c = A(c)).length;
                        (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && of(c, u, n, o, a), a.polygonEnd());
                        b = a, c = f = s = null } };

            function w(t, n) { i(t, n) && b.point(t, n) }

            function M(o, a) { var u = i(o, a); if (f && s.push([o, a]), y) l = o, h = a, d = u, y = !1, u && (b.lineStart(), b.point(o, a));
                else if (u && g) b.point(o, a);
                else { var c = [p = Math.max(gf, Math.min(vf, p)), v = Math.max(gf, Math.min(vf, v))],
                        m = [o = Math.max(gf, Math.min(vf, o)), a = Math.max(gf, Math.min(vf, a))];! function(t, n, e, r, i, o) { var a, u = t[0],
                            c = t[1],
                            f = 0,
                            s = 1,
                            l = n[0] - u,
                            h = n[1] - c; if (a = e - u, l || !(a > 0)) { if (a /= l, l < 0) { if (a < f) return;
                                a < s && (s = a) } else if (l > 0) { if (a > s) return;
                                a > f && (f = a) } if (a = i - u, l || !(a < 0)) { if (a /= l, l < 0) { if (a > s) return;
                                    a > f && (f = a) } else if (l > 0) { if (a < f) return;
                                    a < s && (s = a) } if (a = r - c, h || !(a > 0)) { if (a /= h, h < 0) { if (a < f) return;
                                        a < s && (s = a) } else if (h > 0) { if (a > s) return;
                                        a > f && (f = a) } if (a = o - c, h || !(a < 0)) { if (a /= h, h < 0) { if (a > s) return;
                                            a > f && (f = a) } else if (h > 0) { if (a < f) return;
                                            a < s && (s = a) } return f > 0 && (t[0] = u + f * l, t[1] = c + f * h), s < 1 && (n[0] = u + s * l, n[1] = c + s * h), !0 } } } } }(c, m, t, n, e, r) ? u && (b.lineStart(), b.point(o, a), _ = !1): (g || (b.lineStart(), b.point(c[0], c[1])), b.point(m[0], m[1]), u || b.lineEnd(), _ = !1) }
                p = o, v = a, g = u } return x } } var _f, bf, mf, xf = Qa(),
        wf = { sphere: Nu, point: Nu, lineStart: function() { wf.point = Nf, wf.lineEnd = Mf }, lineEnd: Nu, polygonStart: Nu, polygonEnd: Nu };

    function Mf() { wf.point = wf.lineEnd = Nu }

    function Nf(t, n) { _f = t *= cu, bf = yu(n *= cu), mf = hu(n), wf.point = Tf }

    function Tf(t, n) { t *= cu; var e = yu(n *= cu),
            r = hu(n),
            i = fu(t - _f),
            o = hu(i),
            a = r * yu(i),
            u = mf * e - bf * r * o,
            c = bf * e + mf * r * o;
        xf.add(lu(bu(a * a + u * u), c)), _f = t, bf = e, mf = r }

    function Af(t) { return xf.reset(), Cu(t, wf), +xf } var Sf = [null, null],
        kf = { type: "LineString", coordinates: Sf };

    function Ef(t, n) { return Sf[0] = t, Sf[1] = n, Af(kf) } var Cf = { Feature: function(t, n) { return zf(t.geometry, n) }, FeatureCollection: function(t, n) { for (var e = t.features, r = -1, i = e.length; ++r < i;)
                    if (zf(e[r].geometry, n)) return !0;
                return !1 } },
        Pf = { Sphere: function() { return !0 }, Point: function(t, n) { return Rf(t.coordinates, n) }, MultiPoint: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (Rf(e[r], n)) return !0;
                return !1 }, LineString: function(t, n) { return Df(t.coordinates, n) }, MultiLineString: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (Df(e[r], n)) return !0;
                return !1 }, Polygon: function(t, n) { return qf(t.coordinates, n) }, MultiPolygon: function(t, n) { for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                    if (qf(e[r], n)) return !0;
                return !1 }, GeometryCollection: function(t, n) { for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                    if (zf(e[r], n)) return !0;
                return !1 } };

    function zf(t, n) { return !(!t || !Pf.hasOwnProperty(t.type)) && Pf[t.type](t, n) }

    function Rf(t, n) { return 0 === Ef(t, n) }

    function Df(t, n) { for (var e, r, i, o = 0, a = t.length; o < a; o++) { if (0 === (r = Ef(t[o], n))) return !0; if (o > 0 && (i = Ef(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < eu * i) return !0;
            e = r } return !1 }

    function qf(t, n) { return !!ff(t.map(Lf), Uf(n)) }

    function Lf(t) { return (t = t.map(Uf)).pop(), t }

    function Uf(t) { return [t[0] * cu, t[1] * cu] }

    function Of(t, n, e) { var r = g(t, n - nu, e).concat(n); return function(t) { return r.map(function(n) { return [t, n] }) } }

    function Bf(t, n, e) { var r = g(t, n - nu, e).concat(n); return function(t) { return r.map(function(n) { return [n, t] }) } }

    function Ff() { var t, n, e, r, i, o, a, u, c, f, s, l, h = 10,
            d = h,
            p = 90,
            v = 360,
            y = 2.5;

        function _() { return { type: "MultiLineString", coordinates: b() } }

        function b() { return g(du(r / p) * p, e, p).map(s).concat(g(du(u / v) * v, a, v).map(l)).concat(g(du(n / h) * h, t, h).filter(function(t) { return fu(t % p) > nu }).map(c)).concat(g(du(o / d) * d, i, d).filter(function(t) { return fu(t % v) > nu }).map(f)) } return _.lines = function() { return b().map(function(t) { return { type: "LineString", coordinates: t } }) }, _.outline = function() { return { type: "Polygon", coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))] } }, _.extent = function(t) { return arguments.length ? _.extentMajor(t).extentMinor(t) : _.extentMinor() }, _.extentMajor = function(t) { return arguments.length ? (r = +t[0][0], e = +t[1][0], u = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), u > a && (t = u, u = a, a = t), _.precision(y)) : [
                [r, u],
                [e, a]
            ] }, _.extentMinor = function(e) { return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), o > i && (e = o, o = i, i = e), _.precision(y)) : [
                [n, o],
                [t, i]
            ] }, _.step = function(t) { return arguments.length ? _.stepMajor(t).stepMinor(t) : _.stepMinor() }, _.stepMajor = function(t) { return arguments.length ? (p = +t[0], v = +t[1], _) : [p, v] }, _.stepMinor = function(t) { return arguments.length ? (h = +t[0], d = +t[1], _) : [h, d] }, _.precision = function(h) { return arguments.length ? (y = +h, c = Of(o, i, 90), f = Bf(n, t, y), s = Of(u, a, 90), l = Bf(r, e, y), _) : y }, _.extentMajor([
            [-180, -90 + nu],
            [180, 90 - nu]
        ]).extentMinor([
            [-180, -80 - nu],
            [180, 80 + nu]
        ]) }

    function Yf(t) { return t } var If, Hf, jf, Xf, Vf = Qa(),
        Gf = Qa(),
        $f = { point: Nu, lineStart: Nu, lineEnd: Nu, polygonStart: function() { $f.lineStart = Wf, $f.lineEnd = Kf }, polygonEnd: function() { $f.lineStart = $f.lineEnd = $f.point = Nu, Vf.add(fu(Gf)), Gf.reset() }, result: function() { var t = Vf / 2; return Vf.reset(), t } };

    function Wf() { $f.point = Zf }

    function Zf(t, n) { $f.point = Qf, If = jf = t, Hf = Xf = n }

    function Qf(t, n) { Gf.add(Xf * t - jf * n), jf = t, Xf = n }

    function Kf() { Qf(If, Hf) } var Jf = 1 / 0,
        ts = Jf,
        ns = -Jf,
        es = ns,
        rs = { point: function(t, n) { t < Jf && (Jf = t);
                t > ns && (ns = t);
                n < ts && (ts = n);
                n > es && (es = n) }, lineStart: Nu, lineEnd: Nu, polygonStart: Nu, polygonEnd: Nu, result: function() { var t = [
                    [Jf, ts],
                    [ns, es]
                ]; return ns = es = -(ts = Jf = 1 / 0), t } }; var is, os, as, us, cs = 0,
        fs = 0,
        ss = 0,
        ls = 0,
        hs = 0,
        ds = 0,
        ps = 0,
        vs = 0,
        gs = 0,
        ys = { point: _s, lineStart: bs, lineEnd: ws, polygonStart: function() { ys.lineStart = Ms, ys.lineEnd = Ns }, polygonEnd: function() { ys.point = _s, ys.lineStart = bs, ys.lineEnd = ws }, result: function() { var t = gs ? [ps / gs, vs / gs] : ds ? [ls / ds, hs / ds] : ss ? [cs / ss, fs / ss] : [NaN, NaN]; return cs = fs = ss = ls = hs = ds = ps = vs = gs = 0, t } };

    function _s(t, n) { cs += t, fs += n, ++ss }

    function bs() { ys.point = ms }

    function ms(t, n) { ys.point = xs, _s(as = t, us = n) }

    function xs(t, n) { var e = t - as,
            r = n - us,
            i = bu(e * e + r * r);
        ls += i * (as + t) / 2, hs += i * (us + n) / 2, ds += i, _s(as = t, us = n) }

    function ws() { ys.point = _s }

    function Ms() { ys.point = Ts }

    function Ns() { As(is, os) }

    function Ts(t, n) { ys.point = As, _s(is = as = t, os = us = n) }

    function As(t, n) { var e = t - as,
            r = n - us,
            i = bu(e * e + r * r);
        ls += i * (as + t) / 2, hs += i * (us + n) / 2, ds += i, ps += (i = us * t - as * n) * (as + t), vs += i * (us + n), gs += 3 * i, _s(as = t, us = n) }

    function Ss(t) { this._context = t }
    Ss.prototype = { _radius: 4.5, pointRadius: function(t) { return this._radius = t, this }, polygonStart: function() { this._line = 0 }, polygonEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() { 0 === this._line && this._context.closePath(), this._point = NaN }, point: function(t, n) { switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1; break;
                case 1:
                    this._context.lineTo(t, n); break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, au) } }, result: Nu }; var ks, Es, Cs, Ps, zs, Rs = Qa(),
        Ds = { point: Nu, lineStart: function() { Ds.point = qs }, lineEnd: function() { ks && Ls(Es, Cs), Ds.point = Nu }, polygonStart: function() { ks = !0 }, polygonEnd: function() { ks = null }, result: function() { var t = +Rs; return Rs.reset(), t } };

    function qs(t, n) { Ds.point = Ls, Es = Ps = t, Cs = zs = n }

    function Ls(t, n) { Ps -= t, zs -= n, Rs.add(bu(Ps * Ps + zs * zs)), Ps = t, zs = n }

    function Us() { this._string = [] }

    function Os(t) { return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z" }

    function Bs(t) { return function(n) { var e = new Fs; for (var r in t) e[r] = t[r]; return e.stream = n, e } }

    function Fs() {}

    function Ys(t, n, e) { var r = t.clipExtent && t.clipExtent(); return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Cu(e, t.stream(rs)), n(rs.result()), null != r && t.clipExtent(r), t }

    function Is(t, n, e) { return Ys(t, function(e) { var r = n[1][0] - n[0][0],
                i = n[1][1] - n[0][1],
                o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
                u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u]) }, e) }

    function Hs(t, n, e) { return Is(t, [
            [0, 0], n
        ], e) }

    function js(t, n, e) { return Ys(t, function(e) { var r = +n,
                i = r / (e[1][0] - e[0][0]),
                o = (r - i * (e[1][0] + e[0][0])) / 2,
                a = -i * e[0][1];
            t.scale(150 * i).translate([o, a]) }, e) }

    function Xs(t, n, e) { return Ys(t, function(e) { var r = +n,
                i = r / (e[1][1] - e[0][1]),
                o = -i * e[0][0],
                a = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, a]) }, e) }
    Us.prototype = { _radius: 4.5, _circle: Os(4.5), pointRadius: function(t) { return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this }, polygonStart: function() { this._line = 0 }, polygonEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() { 0 === this._line && this._string.push("Z"), this._point = NaN }, point: function(t, n) { switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1; break;
                case 1:
                    this._string.push("L", t, ",", n); break;
                default:
                    null == this._circle && (this._circle = Os(this._radius)), this._string.push("M", t, ",", n, this._circle) } }, result: function() { if (this._string.length) { var t = this._string.join(""); return this._string = [], t } return null } }, Fs.prototype = { constructor: Fs, point: function(t, n) { this.stream.point(t, n) }, sphere: function() { this.stream.sphere() }, lineStart: function() { this.stream.lineStart() }, lineEnd: function() { this.stream.lineEnd() }, polygonStart: function() { this.stream.polygonStart() }, polygonEnd: function() { this.stream.polygonEnd() } }; var Vs = 16,
        Gs = hu(30 * cu);

    function $s(t, n) { return +n ? function(t, n) {
            function e(r, i, o, a, u, c, f, s, l, h, d, p, v, g) { var y = f - r,
                    _ = s - i,
                    b = y * y + _ * _; if (b > 4 * n && v--) { var m = a + h,
                        x = u + d,
                        w = c + p,
                        M = bu(m * m + x * x + w * w),
                        N = wu(w /= M),
                        T = fu(fu(w) - 1) < nu || fu(o - l) < nu ? (o + l) / 2 : lu(x, m),
                        A = t(T, N),
                        S = A[0],
                        k = A[1],
                        E = S - r,
                        C = k - i,
                        P = _ * E - y * C;
                    (P * P / b > n || fu((y * E + _ * C) / b - .5) > .3 || a * h + u * d + c * p < Gs) && (e(r, i, o, a, u, c, S, k, T, m /= M, x /= M, w, v, g), g.point(S, k), e(S, k, T, m, x, w, f, s, l, h, d, p, v, g)) } } return function(n) { var r, i, o, a, u, c, f, s, l, h, d, p, v = { point: g, lineStart: y, lineEnd: b, polygonStart: function() { n.polygonStart(), v.lineStart = m }, polygonEnd: function() { n.polygonEnd(), v.lineStart = y } };

                function g(e, r) { e = t(e, r), n.point(e[0], e[1]) }

                function y() { s = NaN, v.point = _, n.lineStart() }

                function _(r, i) { var o = ju([r, i]),
                        a = t(r, i);
                    e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], Vs, n), n.point(s, l) }

                function b() { v.point = g, n.lineEnd() }

                function m() { y(), v.point = x, v.lineEnd = w }

                function x(t, n) { _(r = t, n), i = s, o = l, a = h, u = d, c = p, v.point = _ }

                function w() { e(s, l, f, h, d, p, i, o, r, a, u, c, Vs, n), v.lineEnd = b, b() } return v } }(t, n) : function(t) { return Bs({ point: function(n, e) { n = t(n, e), this.stream.point(n[0], n[1]) } }) }(t) } var Ws = Bs({ point: function(t, n) { this.stream.point(t * cu, n * cu) } });

    function Zs(t, n, e, r, i, o) { var a = hu(o),
            u = yu(o),
            c = a * t,
            f = u * t,
            s = a / t,
            l = u / t,
            h = (u * e - a * n) / t,
            d = (u * n + a * e) / t;

        function p(t, o) { return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o] } return p.invert = function(t, n) { return [r * (s * t - l * n + h), i * (d - l * t - s * n)] }, p }

    function Qs(t) { return Ks(function() { return t })() }

    function Ks(t) { var n, e, r, i, o, a, u, c, f, s, l = 150,
            h = 480,
            d = 250,
            p = 0,
            v = 0,
            g = 0,
            y = 0,
            _ = 0,
            b = 0,
            m = 1,
            x = 1,
            w = null,
            M = df,
            N = null,
            T = Yf,
            A = .5;

        function S(t) { return c(t[0] * cu, t[1] * cu) }

        function k(t) { return (t = c.invert(t[0], t[1])) && [t[0] * uu, t[1] * uu] }

        function E() { var t = Zs(l, 0, 0, m, x, b).apply(null, n(p, v)),
                r = (b ? Zs : function(t, n, e, r, i) {
                    function o(o, a) { return [n + t * (o *= r), e - t * (a *= i)] } return o.invert = function(o, a) { return [(o - n) / t * r, (e - a) / t * i] }, o })(l, h - t[0], d - t[1], m, x, b); return e = $c(g, y, _), u = Vc(n, r), c = Vc(e, u), a = $s(u, A), C() }

        function C() { return f = s = null, S } return S.stream = function(t) { return f && s === t ? f : f = Ws(function(t) { return Bs({ point: function(n, e) { var r = t(n, e); return this.stream.point(r[0], r[1]) } }) }(e)(M(a(T(s = t))))) }, S.preclip = function(t) { return arguments.length ? (M = t, w = void 0, C()) : M }, S.postclip = function(t) { return arguments.length ? (T = t, N = r = i = o = null, C()) : T }, S.clipAngle = function(t) { return arguments.length ? (M = +t ? pf(w = t * cu) : (w = null, df), C()) : w * uu }, S.clipExtent = function(t) { return arguments.length ? (T = null == t ? (N = r = i = o = null, Yf) : yf(N = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), C()) : null == N ? null : [
                    [N, r],
                    [i, o]
                ] }, S.scale = function(t) { return arguments.length ? (l = +t, E()) : l }, S.translate = function(t) { return arguments.length ? (h = +t[0], d = +t[1], E()) : [h, d] }, S.center = function(t) { return arguments.length ? (p = t[0] % 360 * cu, v = t[1] % 360 * cu, E()) : [p * uu, v * uu] }, S.rotate = function(t) { return arguments.length ? (g = t[0] % 360 * cu, y = t[1] % 360 * cu, _ = t.length > 2 ? t[2] % 360 * cu : 0, E()) : [g * uu, y * uu, _ * uu] }, S.angle = function(t) { return arguments.length ? (b = t % 360 * cu, E()) : b * uu }, S.reflectX = function(t) { return arguments.length ? (m = t ? -1 : 1, E()) : m < 0 }, S.reflectY = function(t) { return arguments.length ? (x = t ? -1 : 1, E()) : x < 0 }, S.precision = function(t) { return arguments.length ? (a = $s(u, A = t * t), C()) : bu(A) }, S.fitExtent = function(t, n) { return Is(S, t, n) }, S.fitSize = function(t, n) { return Hs(S, t, n) }, S.fitWidth = function(t, n) { return js(S, t, n) }, S.fitHeight = function(t, n) { return Xs(S, t, n) },
            function() { return n = t.apply(this, arguments), S.invert = n.invert && k, E() } }

    function Js(t) { var n = 0,
            e = ru / 3,
            r = Ks(t),
            i = r(n, e); return i.parallels = function(t) { return arguments.length ? r(n = t[0] * cu, e = t[1] * cu) : [n * uu, e * uu] }, i }

    function tl(t, n) { var e = yu(t),
            r = (e + yu(n)) / 2; if (fu(r) < nu) return function(t) { var n = hu(t);

            function e(t, e) { return [t * n, yu(e) / n] } return e.invert = function(t, e) { return [t / n, wu(e * n)] }, e }(t); var i = 1 + e * (2 * r - e),
            o = bu(i) / r;

        function a(t, n) { var e = bu(i - 2 * r * yu(n)) / r; return [e * yu(t *= r), o - e * hu(t)] } return a.invert = function(t, n) { var e = o - n,
                a = lu(t, fu(e)) * _u(e); return e * r < 0 && (a -= ru * _u(t) * _u(e)), [a / r, wu((i - (t * t + e * e) * r * r) / (2 * r))] }, a }

    function nl() { return Js(tl).scale(155.424).center([0, 33.6442]) }

    function el() { return nl().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]) }

    function rl(t) { return function(n, e) { var r = hu(n),
                i = hu(e),
                o = t(r * i); return [o * i * yu(n), o * yu(e)] } }

    function il(t) { return function(n, e) { var r = bu(n * n + e * e),
                i = t(r),
                o = yu(i),
                a = hu(i); return [lu(n * o, r * a), wu(r && e * o / r)] } } var ol = rl(function(t) { return bu(2 / (1 + t)) });
    ol.invert = il(function(t) { return 2 * wu(t / 2) }); var al = rl(function(t) { return (t = xu(t)) && t / yu(t) });

    function ul(t, n) { return [t, vu(mu((iu + n) / 2))] }

    function cl(t) { var n, e, r, i = Qs(t),
            o = i.center,
            a = i.scale,
            u = i.translate,
            c = i.clipExtent,
            f = null;

        function s() { var o = ru * a(),
                u = i(Kc(i.rotate()).invert([0, 0])); return c(null == f ? [
                [u[0] - o, u[1] - o],
                [u[0] + o, u[1] + o]
            ] : t === ul ? [
                [Math.max(u[0] - o, f), n],
                [Math.min(u[0] + o, e), r]
            ] : [
                [f, Math.max(u[1] - o, n)],
                [e, Math.min(u[1] + o, r)]
            ]) } return i.scale = function(t) { return arguments.length ? (a(t), s()) : a() }, i.translate = function(t) { return arguments.length ? (u(t), s()) : u() }, i.center = function(t) { return arguments.length ? (o(t), s()) : o() }, i.clipExtent = function(t) { return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [
                [f, n],
                [e, r]
            ] }, s() }

    function fl(t) { return mu((iu + t) / 2) }

    function sl(t, n) { var e = hu(t),
            r = t === n ? yu(t) : vu(e / hu(n)) / vu(fl(n) / fl(t)),
            i = e * gu(fl(t), r) / r; if (!r) return ul;

        function o(t, n) { i > 0 ? n < -iu + nu && (n = -iu + nu) : n > iu - nu && (n = iu - nu); var e = i / gu(fl(n), r); return [e * yu(r * t), i - e * hu(r * t)] } return o.invert = function(t, n) { var e = i - n,
                o = _u(r) * bu(t * t + e * e),
                a = lu(t, fu(e)) * _u(e); return e * r < 0 && (a -= ru * _u(t) * _u(e)), [a / r, 2 * su(gu(i / o, 1 / r)) - iu] }, o }

    function ll(t, n) { return [t, n] }

    function hl(t, n) { var e = hu(t),
            r = t === n ? yu(t) : (e - hu(n)) / (n - t),
            i = e / r + t; if (fu(r) < nu) return ll;

        function o(t, n) { var e = i - n,
                o = r * t; return [e * yu(o), i - e * hu(o)] } return o.invert = function(t, n) { var e = i - n,
                o = lu(t, fu(e)) * _u(e); return e * r < 0 && (o -= ru * _u(t) * _u(e)), [o / r, i - _u(r) * bu(t * t + e * e)] }, o }
    al.invert = il(function(t) { return t }), ul.invert = function(t, n) { return [t, 2 * su(pu(n)) - iu] }, ll.invert = ll; var dl = 1.340264,
        pl = -.081106,
        vl = 893e-6,
        gl = .003796,
        yl = bu(3) / 2;

    function _l(t, n) { var e = wu(yl * yu(n)),
            r = e * e,
            i = r * r * r; return [t * hu(e) / (yl * (dl + 3 * pl * r + i * (7 * vl + 9 * gl * r))), e * (dl + pl * r + i * (vl + gl * r))] }

    function bl(t, n) { var e = hu(n),
            r = hu(t) * e; return [e * yu(t) / r, yu(n) / r] }

    function ml(t, n) { var e = n * n,
            r = e * e; return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))] }

    function xl(t, n) { return [hu(n) * yu(t), yu(n)] }

    function wl(t, n) { var e = hu(n),
            r = 1 + hu(t) * e; return [e * yu(t) / r, yu(n) / r] }

    function Ml(t, n) { return [vu(mu((iu + n) / 2)), -t] }

    function Nl(t, n) { return t.parent === n.parent ? 1 : 2 }

    function Tl(t, n) { return t + n.x }

    function Al(t, n) { return Math.max(t, n.y) }

    function Sl(t) { var n = 0,
            e = t.children,
            r = e && e.length; if (r)
            for (; --r >= 0;) n += e[r].value;
        else n = 1;
        t.value = n }

    function kl(t, n) { var e, r, i, o, a, u = new zl(t),
            c = +t.value && (u.value = t.value),
            f = [u]; for (null == n && (n = El); e = f.pop();)
            if (c && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length))
                for (e.children = new Array(a), o = a - 1; o >= 0; --o) f.push(r = e.children[o] = new zl(i[o])), r.parent = e, r.depth = e.depth + 1;
        return u.eachBefore(Pl) }

    function El(t) { return t.children }

    function Cl(t) { t.data = t.data.data }

    function Pl(t) { var n = 0;
        do { t.height = n } while ((t = t.parent) && t.height < ++n) }

    function zl(t) { this.data = t, this.depth = this.height = 0, this.parent = null }
    _l.invert = function(t, n) { for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * (dl + pl * i + o * (vl + gl * i)) - n) / (dl + 3 * pl * i + o * (7 * vl + 9 * gl * i))) * r) * i * i, !(fu(e) < eu)); ++a); return [yl * t * (dl + 3 * pl * i + o * (7 * vl + 9 * gl * i)) / hu(r), wu(yu(r) / yl)] }, bl.invert = il(su), ml.invert = function(t, n) { var e, r = n,
            i = 25;
        do { var o = r * r,
                a = o * o;
            r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a))) } while (fu(e) > nu && --i > 0); return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r] }, xl.invert = il(wu), wl.invert = il(function(t) { return 2 * su(t) }), Ml.invert = function(t, n) { return [-n, 2 * su(pu(t)) - iu] }, zl.prototype = kl.prototype = { constructor: zl, count: function() { return this.eachAfter(Sl) }, each: function(t) { var n, e, r, i, o = this,
                a = [o];
            do { for (n = a.reverse(), a = []; o = n.pop();)
                    if (t(o), e = o.children)
                        for (r = 0, i = e.length; r < i; ++r) a.push(e[r]) } while (a.length); return this }, eachAfter: function(t) { for (var n, e, r, i = this, o = [i], a = []; i = o.pop();)
                if (a.push(i), n = i.children)
                    for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
            for (; i = a.pop();) t(i); return this }, eachBefore: function(t) { for (var n, e, r = this, i = [r]; r = i.pop();)
                if (t(r), n = r.children)
                    for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this }, sum: function(t) { return this.eachAfter(function(n) { for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e }) }, sort: function(t) { return this.eachBefore(function(n) { n.children && n.children.sort(t) }) }, path: function(t) { for (var n = this, e = function(t, n) { if (t === n) return t; var e = t.ancestors(),
                        r = n.ancestors(),
                        i = null; for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop(); return i }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n); for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent; return r }, ancestors: function() { for (var t = this, n = [t]; t = t.parent;) n.push(t); return n }, descendants: function() { var t = []; return this.each(function(n) { t.push(n) }), t }, leaves: function() { var t = []; return this.eachBefore(function(n) { n.children || t.push(n) }), t }, links: function() { var t = this,
                n = []; return t.each(function(e) { e !== t && n.push({ source: e.parent, target: e }) }), n }, copy: function() { return kl(this).eachBefore(Cl) } }; var Rl = Array.prototype.slice;

    function Dl(t) { for (var n, e, r = 0, i = (t = function(t) { for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n; return t }(Rl.call(t))).length, o = []; r < i;) n = t[r], e && Ul(e, n) ? ++r : (e = Bl(o = ql(o, n)), r = 0); return e }

    function ql(t, n) { var e, r; if (Ol(n, t)) return [n]; for (e = 0; e < t.length; ++e)
            if (Ll(n, t[e]) && Ol(Fl(t[e], n), t)) return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
            for (r = e + 1; r < t.length; ++r)
                if (Ll(Fl(t[e], t[r]), n) && Ll(Fl(t[e], n), t[r]) && Ll(Fl(t[r], n), t[e]) && Ol(Yl(t[e], t[r], n), t)) return [t[e], t[r], n];
        throw new Error }

    function Ll(t, n) { var e = t.r - n.r,
            r = n.x - t.x,
            i = n.y - t.y; return e < 0 || e * e < r * r + i * i }

    function Ul(t, n) { var e = t.r - n.r + 1e-6,
            r = n.x - t.x,
            i = n.y - t.y; return e > 0 && e * e > r * r + i * i }

    function Ol(t, n) { for (var e = 0; e < n.length; ++e)
            if (!Ul(t, n[e])) return !1;
        return !0 }

    function Bl(t) { switch (t.length) {
            case 1:
                return function(t) { return { x: t.x, y: t.y, r: t.r } }(t[0]);
            case 2:
                return Fl(t[0], t[1]);
            case 3:
                return Yl(t[0], t[1], t[2]) } }

    function Fl(t, n) { var e = t.x,
            r = t.y,
            i = t.r,
            o = n.x,
            a = n.y,
            u = n.r,
            c = o - e,
            f = a - r,
            s = u - i,
            l = Math.sqrt(c * c + f * f); return { x: (e + o + c / l * s) / 2, y: (r + a + f / l * s) / 2, r: (l + i + u) / 2 } }

    function Yl(t, n, e) { var r = t.x,
            i = t.y,
            o = t.r,
            a = n.x,
            u = n.y,
            c = n.r,
            f = e.x,
            s = e.y,
            l = e.r,
            h = r - a,
            d = r - f,
            p = i - u,
            v = i - s,
            g = c - o,
            y = l - o,
            _ = r * r + i * i - o * o,
            b = _ - a * a - u * u + c * c,
            m = _ - f * f - s * s + l * l,
            x = d * p - h * v,
            w = (p * m - v * b) / (2 * x) - r,
            M = (v * g - p * y) / x,
            N = (d * b - h * m) / (2 * x) - i,
            T = (h * y - d * g) / x,
            A = M * M + T * T - 1,
            S = 2 * (o + w * M + N * T),
            k = w * w + N * N - o * o,
            E = -(A ? (S + Math.sqrt(S * S - 4 * A * k)) / (2 * A) : k / S); return { x: r + w + M * E, y: i + N + T * E, r: E } }

    function Il(t, n, e) { var r, i, o, a, u = t.x - n.x,
            c = t.y - n.y,
            f = u * u + c * c;
        f ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (f + a - i) / (2 * f), o = Math.sqrt(Math.max(0, a / f - r * r)), e.x = t.x - r * u - o * c, e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * u - o * c, e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r, e.y = n.y) }

    function Hl(t, n) { var e = t.r + n.r - 1e-6,
            r = n.x - t.x,
            i = n.y - t.y; return e > 0 && e * e > r * r + i * i }

    function jl(t) { var n = t._,
            e = t.next._,
            r = n.r + e.r,
            i = (n.x * e.r + e.x * n.r) / r,
            o = (n.y * e.r + e.y * n.r) / r; return i * i + o * o }

    function Xl(t) { this._ = t, this.next = null, this.previous = null }

    function Vl(t) { if (!(i = t.length)) return 0; var n, e, r, i, o, a, u, c, f, s, l; if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r; if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        Il(e, n, r = t[2]), n = new Xl(n), e = new Xl(e), r = new Xl(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t: for (u = 3; u < i; ++u) { Il(n._, e._, r = t[u]), r = new Xl(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
            do { if (s <= l) { if (Hl(c._, r._)) { e = c, n.next = e, e.previous = n, --u; continue t }
                    s += c._.r, c = c.next } else { if (Hl(f._, r._)) {
                        (n = f).next = e, e.previous = n, --u; continue t }
                    l += f._.r, f = f.previous } } while (c !== f.next); for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = jl(n);
                (r = r.next) !== e;)(a = jl(r)) < o && (n = r, o = a);
            e = n.next }
        for (n = [e._], r = e;
            (r = r.next) !== e;) n.push(r._); for (r = Dl(n), u = 0; u < i; ++u)(n = t[u]).x -= r.x, n.y -= r.y; return r.r }

    function Gl(t) { return null == t ? null : $l(t) }

    function $l(t) { if ("function" != typeof t) throw new Error; return t }

    function Wl() { return 0 }

    function Zl(t) { return function() { return t } }

    function Ql(t) { return Math.sqrt(t.value) }

    function Kl(t) { return function(n) { n.children || (n.r = Math.max(0, +t(n) || 0)) } }

    function Jl(t, n) { return function(e) { if (r = e.children) { var r, i, o, a = r.length,
                    u = t(e) * n || 0; if (u)
                    for (i = 0; i < a; ++i) r[i].r += u; if (o = Vl(r), u)
                    for (i = 0; i < a; ++i) r[i].r -= u;
                e.r = o + u } } }

    function th(t) { return function(n) { var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y) } }

    function nh(t) { t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1) }

    function eh(t, n, e, r, i) { for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c;)(o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f } var rh = "$",
        ih = { depth: -1 },
        oh = {};

    function ah(t) { return t.id }

    function uh(t) { return t.parentId }

    function ch(t, n) { return t.parent === n.parent ? 1 : 2 }

    function fh(t) { var n = t.children; return n ? n[0] : t.t }

    function sh(t) { var n = t.children; return n ? n[n.length - 1] : t.t }

    function lh(t, n, e) { var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e }

    function hh(t, n, e) { return t.a.parent === n.parent ? t.a : e }

    function dh(t, n) { this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n }

    function ph(t, n, e, r, i) { for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c;)(o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f }
    dh.prototype = Object.create(zl.prototype); var vh = (1 + Math.sqrt(5)) / 2;

    function gh(t, n, e, r, i, o) { for (var a, u, c, f, s, l, h, d, p, v, g, y = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) { c = i - e, f = o - r;
            do { s = _[m++].value } while (!s && m < x); for (l = h = s, g = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / g, g / l); m < x; ++m) { if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), g = s * s * v, (d = Math.max(h / g, g / l)) > p) { s -= u; break }
                p = d }
            y.push(a = { value: s, dice: c < f, children: _.slice(b, m) }), a.dice ? eh(a, e, r, i, w ? r += f * s / w : o) : ph(a, e, r, w ? e += c * s / w : i, o), w -= s, b = m } return y } var yh = function t(n) {
        function e(t, e, r, i, o) { gh(n, t, e, r, i, o) } return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e }(vh); var _h = function t(n) {
        function e(t, e, r, i, o) { if ((a = t._squarify) && a.ratio === n)
                for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h;) { for (c = (u = a[l]).children, f = u.value = 0, s = c.length; f < s; ++f) u.value += c[f].value;
                    u.dice ? eh(u, e, r, i, r += (o - r) * u.value / d) : ph(u, e, r, e += (i - e) * u.value / d, o), d -= u.value } else t._squarify = a = gh(n, t, e, r, i, o), a.ratio = n } return e.ratio = function(n) { return t((n = +n) > 1 ? n : 1) }, e }(vh);

    function bh(t, n, e) { return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]) }

    function mh(t, n) { return t[0] - n[0] || t[1] - n[1] }

    function xh(t) { for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) { for (; r > 1 && bh(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
            e[r++] = i } return e.slice(0, r) }

    function wh() { return Math.random() } var Mh = function t(n) {
            function e(t, e) { return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                    function() { return n() * e + t } } return e.source = t, e }(wh),
        Nh = function t(n) {
            function e(t, e) { var r, i; return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                    function() { var o; if (null != r) o = r, r = null;
                        else
                            do { r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o } while (!i || i > 1); return t + e * o * Math.sqrt(-2 * Math.log(i) / i) } } return e.source = t, e }(wh),
        Th = function t(n) {
            function e() { var t = Nh.source(n).apply(this, arguments); return function() { return Math.exp(t()) } } return e.source = t, e }(wh),
        Ah = function t(n) {
            function e(t) { return function() { for (var e = 0, r = 0; r < t; ++r) e += n(); return e } } return e.source = t, e }(wh),
        Sh = function t(n) {
            function e(t) { var e = Ah.source(n)(t); return function() { return e() / t } } return e.source = t, e }(wh),
        kh = function t(n) {
            function e(t) { return function() { return -Math.log(1 - n()) / t } } return e.source = t, e }(wh);

    function Eh(t, n) { switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.range(t); break;
            default:
                this.range(n).domain(t) } return this }

    function Ch(t, n) { switch (arguments.length) {
            case 0:
                break;
            case 1:
                this.interpolator(t); break;
            default:
                this.interpolator(n).domain(t) } return this } var Ph = Array.prototype,
        zh = Ph.map,
        Rh = Ph.slice,
        Dh = { name: "implicit" };

    function qh() { var t = co(),
            n = [],
            e = [],
            r = Dh;

        function i(i) { var o = i + "",
                a = t.get(o); if (!a) { if (r !== Dh) return r;
                t.set(o, a = n.push(i)) } return e[(a - 1) % e.length] } return i.domain = function(e) { if (!arguments.length) return n.slice();
            n = [], t = co(); for (var r, o, a = -1, u = e.length; ++a < u;) t.has(o = (r = e[a]) + "") || t.set(o, n.push(r)); return i }, i.range = function(t) { return arguments.length ? (e = Rh.call(t), i) : e.slice() }, i.unknown = function(t) { return arguments.length ? (r = t, i) : r }, i.copy = function() { return qh(n, e).unknown(r) }, Eh.apply(i, arguments), i }

    function Lh() { var t, n, e = qh().unknown(void 0),
            r = e.domain,
            i = e.range,
            o = [0, 1],
            a = !1,
            u = 0,
            c = 0,
            f = .5;

        function s() { var e = r().length,
                s = o[1] < o[0],
                l = o[s - 0],
                h = o[1 - s];
            t = (h - l) / Math.max(1, e - u + 2 * c), a && (t = Math.floor(t)), l += (h - l - t * (e - u)) * f, n = t * (1 - u), a && (l = Math.round(l), n = Math.round(n)); var d = g(e).map(function(n) { return l + t * n }); return i(s ? d.reverse() : d) } return delete e.unknown, e.domain = function(t) { return arguments.length ? (r(t), s()) : r() }, e.range = function(t) { return arguments.length ? (o = [+t[0], +t[1]], s()) : o.slice() }, e.rangeRound = function(t) { return o = [+t[0], +t[1]], a = !0, s() }, e.bandwidth = function() { return n }, e.step = function() { return t }, e.round = function(t) { return arguments.length ? (a = !!t, s()) : a }, e.padding = function(t) { return arguments.length ? (u = Math.min(1, c = +t), s()) : u }, e.paddingInner = function(t) { return arguments.length ? (u = Math.min(1, t), s()) : u }, e.paddingOuter = function(t) { return arguments.length ? (c = +t, s()) : c }, e.align = function(t) { return arguments.length ? (f = Math.max(0, Math.min(1, t)), s()) : f }, e.copy = function() { return Lh(r(), o).round(a).paddingInner(u).paddingOuter(c).align(f) }, Eh.apply(s(), arguments) }

    function Uh(t) { return +t } var Oh = [0, 1];

    function Bh(t) { return t }

    function Fh(t, n) { return (n -= t = +t) ? function(e) { return (e - t) / n } : function(t) { return function() { return t } }(isNaN(n) ? NaN : .5) }

    function Yh(t) { var n, e = t[0],
            r = t[t.length - 1]; return e > r && (n = e, e = r, r = n),
            function(t) { return Math.max(e, Math.min(r, t)) } }

    function Ih(t, n, e) { var r = t[0],
            i = t[1],
            o = n[0],
            a = n[1]; return i < r ? (r = Fh(i, r), o = e(a, o)) : (r = Fh(r, i), o = e(o, a)),
            function(t) { return o(r(t)) } }

    function Hh(t, n, e) { var r = Math.min(t.length, n.length) - 1,
            o = new Array(r),
            a = new Array(r),
            u = -1; for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r;) o[u] = Fh(t[u], t[u + 1]), a[u] = e(n[u], n[u + 1]); return function(n) { var e = i(t, n, 1, r) - 1; return a[e](o[e](n)) } }

    function jh(t, n) { return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

    function Xh() { var t, n, e, r, i, o, a = Oh,
            u = Oh,
            c = Te,
            f = Bh;

        function s() { return r = Math.min(a.length, u.length) > 2 ? Hh : Ih, i = o = null, l }

        function l(n) { return isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n))) } return l.invert = function(e) { return f(n((o || (o = r(u, a.map(t), me)))(e))) }, l.domain = function(t) { return arguments.length ? (a = zh.call(t, Uh), f === Bh || (f = Yh(a)), s()) : a.slice() }, l.range = function(t) { return arguments.length ? (u = Rh.call(t), s()) : u.slice() }, l.rangeRound = function(t) { return u = Rh.call(t), c = Ae, s() }, l.clamp = function(t) { return arguments.length ? (f = t ? Yh(a) : Bh, l) : f !== Bh }, l.interpolate = function(t) { return arguments.length ? (c = t, s()) : c }, l.unknown = function(t) { return arguments.length ? (e = t, l) : e },
            function(e, r) { return t = e, n = r, s() } }

    function Vh(t, n) { return Xh()(t, n) }

    function Gh(n, e, r, i) { var o, a = w(n, e, r); switch ((i = Oa(null == i ? ",f" : i)).type) {
            case "s":
                var u = Math.max(Math.abs(n), Math.abs(e)); return null != i.precision || isNaN(o = Wa(a, u)) || (i.precision = o), t.formatPrefix(i, u);
            case "":
            case "e":
            case "g":
            case "p":
            case "r":
                null != i.precision || isNaN(o = Za(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type)); break;
            case "f":
            case "%":
                null != i.precision || isNaN(o = $a(a)) || (i.precision = o - 2 * ("%" === i.type)) } return t.format(i) }

    function $h(t) { var n = t.domain; return t.ticks = function(t) { var e = n(); return m(e[0], e[e.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, e) { var r = n(); return Gh(r[0], r[r.length - 1], null == t ? 10 : t, e) }, t.nice = function(e) { null == e && (e = 10); var r, i = n(),
                o = 0,
                a = i.length - 1,
                u = i[o],
                c = i[a]; return c < u && (r = u, u = c, c = r, r = o, o = a, a = r), (r = x(u, c, e)) > 0 ? r = x(u = Math.floor(u / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = x(u = Math.ceil(u * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[o] = Math.floor(u / r) * r, i[a] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[o] = Math.ceil(u * r) / r, i[a] = Math.floor(c * r) / r, n(i)), t }, t }

    function Wh(t, n) { var e, r = 0,
            i = (t = t.slice()).length - 1,
            o = t[r],
            a = t[i]; return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t }

    function Zh(t) { return Math.log(t) }

    function Qh(t) { return Math.exp(t) }

    function Kh(t) { return -Math.log(-t) }

    function Jh(t) { return -Math.exp(-t) }

    function td(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

    function nd(t) { return function(n) { return -t(-n) } }

    function ed(n) { var e, r, i = n(Zh, Qh),
            o = i.domain,
            a = 10;

        function u() { return e = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) { return Math.log(n) / t }) }(a), r = function(t) { return 10 === t ? td : t === Math.E ? Math.exp : function(n) { return Math.pow(t, n) } }(a), o()[0] < 0 ? (e = nd(e), r = nd(r), n(Kh, Jh)) : n(Zh, Qh), i } return i.base = function(t) { return arguments.length ? (a = +t, u()) : a }, i.domain = function(t) { return arguments.length ? (o(t), u()) : o() }, i.ticks = function(t) { var n, i = o(),
                u = i[0],
                c = i[i.length - 1];
            (n = c < u) && (h = u, u = c, c = h); var f, s, l, h = e(u),
                d = e(c),
                p = null == t ? 10 : +t,
                v = []; if (!(a % 1) && d - h < p) { if (h = Math.round(h) - 1, d = Math.round(d) + 1, u > 0) { for (; h < d; ++h)
                        for (s = 1, f = r(h); s < a; ++s)
                            if (!((l = f * s) < u)) { if (l > c) break;
                                v.push(l) } } else
                    for (; h < d; ++h)
                        for (s = a - 1, f = r(h); s >= 1; --s)
                            if (!((l = f * s) < u)) { if (l > c) break;
                                v.push(l) } } else v = m(h, d, Math.min(d - h, p)).map(r); return n ? v.reverse() : v }, i.tickFormat = function(n, o) { if (null == o && (o = 10 === a ? ".0e" : ","), "function" != typeof o && (o = t.format(o)), n === 1 / 0) return o;
            null == n && (n = 10); var u = Math.max(1, a * n / i.ticks().length); return function(t) { var n = t / r(Math.round(e(t))); return n * a < a - .5 && (n *= a), n <= u ? o(t) : "" } }, i.nice = function() { return o(Wh(o(), { floor: function(t) { return r(Math.floor(e(t))) }, ceil: function(t) { return r(Math.ceil(e(t))) } })) }, i }

    function rd(t) { return function(n) { return Math.sign(n) * Math.log1p(Math.abs(n / t)) } }

    function id(t) { return function(n) { return Math.sign(n) * Math.expm1(Math.abs(n)) * t } }

    function od(t) { var n = 1,
            e = t(rd(n), id(n)); return e.constant = function(e) { return arguments.length ? t(rd(n = +e), id(n)) : n }, $h(e) }

    function ad(t) { return function(n) { return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t) } }

    function ud(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

    function cd(t) { return t < 0 ? -t * t : t * t }

    function fd(t) { var n = t(Bh, Bh),
            e = 1;

        function r() { return 1 === e ? t(Bh, Bh) : .5 === e ? t(ud, cd) : t(ad(e), ad(1 / e)) } return n.exponent = function(t) { return arguments.length ? (e = +t, r()) : e }, $h(n) }

    function sd() { var t = fd(Xh()); return t.copy = function() { return jh(t, sd()).exponent(t.exponent()) }, Eh.apply(t, arguments), t } var ld = new Date,
        hd = new Date;

    function dd(t, n, e, r) {
        function i(n) { return t(n = 0 === arguments.length ? new Date : new Date(+n)), n } return i.floor = function(n) { return t(n = new Date(+n)), n }, i.ceil = function(e) { return t(e = new Date(e - 1)), n(e, 1), t(e), e }, i.round = function(t) { var n = i(t),
                e = i.ceil(t); return t - n < e - t ? n : e }, i.offset = function(t, e) { return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t }, i.range = function(e, r, o) { var a, u = []; if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;
            do { u.push(a = new Date(+e)), n(e, o), t(e) } while (a < e && e < r); return u }, i.filter = function(e) { return dd(function(n) { if (n >= n)
                    for (; t(n), !e(n);) n.setTime(n - 1) }, function(t, r) { if (t >= t)
                    if (r < 0)
                        for (; ++r <= 0;)
                            for (; n(t, -1), !e(t););
                    else
                        for (; --r >= 0;)
                            for (; n(t, 1), !e(t);); }) }, e && (i.count = function(n, r) { return ld.setTime(+n), hd.setTime(+r), t(ld), t(hd), Math.floor(e(ld, hd)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) { return r(n) % t == 0 } : function(n) { return i.count(0, n) % t == 0 }) : i : null }), i } var pd = dd(function() {}, function(t, n) { t.setTime(+t + n) }, function(t, n) { return n - t });
    pd.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? dd(function(n) { n.setTime(Math.floor(n / t) * t) }, function(n, e) { n.setTime(+n + e * t) }, function(n, e) { return (e - n) / t }) : pd : null }; var vd = pd.range,
        gd = 6e4,
        yd = 6048e5,
        _d = dd(function(t) { t.setTime(t - t.getMilliseconds()) }, function(t, n) { t.setTime(+t + 1e3 * n) }, function(t, n) { return (n - t) / 1e3 }, function(t) { return t.getUTCSeconds() }),
        bd = _d.range,
        md = dd(function(t) { t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds()) }, function(t, n) { t.setTime(+t + n * gd) }, function(t, n) { return (n - t) / gd }, function(t) { return t.getMinutes() }),
        xd = md.range,
        wd = dd(function(t) { t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds() - t.getMinutes() * gd) }, function(t, n) { t.setTime(+t + 36e5 * n) }, function(t, n) { return (n - t) / 36e5 }, function(t) { return t.getHours() }),
        Md = wd.range,
        Nd = dd(function(t) { t.setHours(0, 0, 0, 0) }, function(t, n) { t.setDate(t.getDate() + n) }, function(t, n) { return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * gd) / 864e5 }, function(t) { return t.getDate() - 1 }),
        Td = Nd.range;

    function Ad(t) { return dd(function(n) { n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0) }, function(t, n) { t.setDate(t.getDate() + 7 * n) }, function(t, n) { return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * gd) / yd }) } var Sd = Ad(0),
        kd = Ad(1),
        Ed = Ad(2),
        Cd = Ad(3),
        Pd = Ad(4),
        zd = Ad(5),
        Rd = Ad(6),
        Dd = Sd.range,
        qd = kd.range,
        Ld = Ed.range,
        Ud = Cd.range,
        Od = Pd.range,
        Bd = zd.range,
        Fd = Rd.range,
        Yd = dd(function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }, function(t, n) { t.setMonth(t.getMonth() + n) }, function(t, n) { return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()) }, function(t) { return t.getMonth() }),
        Id = Yd.range,
        Hd = dd(function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }, function(t, n) { t.setFullYear(t.getFullYear() + n) }, function(t, n) { return n.getFullYear() - t.getFullYear() }, function(t) { return t.getFullYear() });
    Hd.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? dd(function(n) { n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0) }, function(n, e) { n.setFullYear(n.getFullYear() + e * t) }) : null }; var jd = Hd.range,
        Xd = dd(function(t) { t.setUTCSeconds(0, 0) }, function(t, n) { t.setTime(+t + n * gd) }, function(t, n) { return (n - t) / gd }, function(t) { return t.getUTCMinutes() }),
        Vd = Xd.range,
        Gd = dd(function(t) { t.setUTCMinutes(0, 0, 0) }, function(t, n) { t.setTime(+t + 36e5 * n) }, function(t, n) { return (n - t) / 36e5 }, function(t) { return t.getUTCHours() }),
        $d = Gd.range,
        Wd = dd(function(t) { t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCDate(t.getUTCDate() + n) }, function(t, n) { return (n - t) / 864e5 }, function(t) { return t.getUTCDate() - 1 }),
        Zd = Wd.range;

    function Qd(t) { return dd(function(n) { n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCDate(t.getUTCDate() + 7 * n) }, function(t, n) { return (n - t) / yd }) } var Kd = Qd(0),
        Jd = Qd(1),
        tp = Qd(2),
        np = Qd(3),
        ep = Qd(4),
        rp = Qd(5),
        ip = Qd(6),
        op = Kd.range,
        ap = Jd.range,
        up = tp.range,
        cp = np.range,
        fp = ep.range,
        sp = rp.range,
        lp = ip.range,
        hp = dd(function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCMonth(t.getUTCMonth() + n) }, function(t, n) { return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()) }, function(t) { return t.getUTCMonth() }),
        dp = hp.range,
        pp = dd(function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }, function(t, n) { t.setUTCFullYear(t.getUTCFullYear() + n) }, function(t, n) { return n.getUTCFullYear() - t.getUTCFullYear() }, function(t) { return t.getUTCFullYear() });
    pp.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? dd(function(n) { n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0) }, function(n, e) { n.setUTCFullYear(n.getUTCFullYear() + e * t) }) : null }; var vp = pp.range;

    function gp(t) { if (0 <= t.y && t.y < 100) { var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return n.setFullYear(t.y), n } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

    function yp(t) { if (0 <= t.y && t.y < 100) { var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return n.setUTCFullYear(t.y), n } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

    function _p(t, n, e) { return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 } }

    function bp(t) { var n = t.dateTime,
            e = t.date,
            r = t.time,
            i = t.periods,
            o = t.days,
            a = t.shortDays,
            u = t.months,
            c = t.shortMonths,
            f = Sp(i),
            s = kp(i),
            l = Sp(o),
            h = kp(o),
            d = Sp(a),
            p = kp(a),
            v = Sp(u),
            g = kp(u),
            y = Sp(c),
            _ = kp(c),
            b = { a: function(t) { return a[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return c[t.getMonth()] }, B: function(t) { return u[t.getMonth()] }, c: null, d: Wp, e: Wp, f: tv, H: Zp, I: Qp, j: Kp, L: Jp, m: nv, M: ev, p: function(t) { return i[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: Cv, s: Pv, S: rv, u: iv, U: ov, V: av, w: uv, W: cv, x: null, X: null, y: fv, Y: sv, Z: lv, "%": Ev },
            m = { a: function(t) { return a[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return c[t.getUTCMonth()] }, B: function(t) { return u[t.getUTCMonth()] }, c: null, d: hv, e: hv, f: yv, H: dv, I: pv, j: vv, L: gv, m: _v, M: bv, p: function(t) { return i[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: Cv, s: Pv, S: mv, u: xv, U: wv, V: Mv, w: Nv, W: Tv, x: null, X: null, y: Av, Y: Sv, Z: kv, "%": Ev },
            x = { a: function(t, n, e) { var r = d.exec(n.slice(e)); return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1 }, A: function(t, n, e) { var r = l.exec(n.slice(e)); return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1 }, b: function(t, n, e) { var r = y.exec(n.slice(e)); return r ? (t.m = _[r[0].toLowerCase()], e + r[0].length) : -1 }, B: function(t, n, e) { var r = v.exec(n.slice(e)); return r ? (t.m = g[r[0].toLowerCase()], e + r[0].length) : -1 }, c: function(t, e, r) { return N(t, n, e, r) }, d: Bp, e: Bp, f: Xp, H: Yp, I: Yp, j: Fp, L: jp, m: Op, M: Ip, p: function(t, n, e) { var r = f.exec(n.slice(e)); return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1 }, q: Up, Q: Gp, s: $p, S: Hp, u: Cp, U: Pp, V: zp, w: Ep, W: Rp, x: function(t, n, r) { return N(t, e, n, r) }, X: function(t, n, e) { return N(t, r, n, e) }, y: qp, Y: Dp, Z: Lp, "%": Vp };

        function w(t, n) { return function(e) { var r, i, o, a = [],
                    u = -1,
                    c = 0,
                    f = t.length; for (e instanceof Date || (e = new Date(+e)); ++u < f;) 37 === t.charCodeAt(u) && (a.push(t.slice(c, u)), null != (i = xp[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), c = u + 1); return a.push(t.slice(c, u)), a.join("") } }

        function M(t, n) { return function(e) { var r, i, o = _p(1900, void 0, 1); if (N(o, t, e += "", 0) != e.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (!n || "Z" in o || (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (i = (r = yp(_p(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Jd.ceil(r) : Jd(r), r = Wd.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = gp(_p(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? kd.ceil(r) : kd(r), r = Nd.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? yp(_p(o.y, 0, 1)).getUTCDay() : gp(_p(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, yp(o)) : gp(o) } }

        function N(t, n, e, r) { for (var i, o, a = 0, u = n.length, c = e.length; a < u;) { if (r >= c) return -1; if (37 === (i = n.charCodeAt(a++))) { if (i = n.charAt(a++), !(o = x[i in xp ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1 } else if (i != e.charCodeAt(r++)) return -1 } return r } return b.x = w(e, b), b.X = w(r, b), b.c = w(n, b), m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), { format: function(t) { var n = w(t += "", b); return n.toString = function() { return t }, n }, parse: function(t) { var n = M(t += "", !1); return n.toString = function() { return t }, n }, utcFormat: function(t) { var n = w(t += "", m); return n.toString = function() { return t }, n }, utcParse: function(t) { var n = M(t += "", !0); return n.toString = function() { return t }, n } } } var mp, xp = { "-": "", _: " ", 0: "0" },
        wp = /^\s*\d+/,
        Mp = /^%/,
        Np = /[\\^$*+?|[\]().{}]/g;

    function Tp(t, n, e) { var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length; return r + (o < e ? new Array(e - o + 1).join(n) + i : i) }

    function Ap(t) { return t.replace(Np, "\\$&") }

    function Sp(t) { return new RegExp("^(?:" + t.map(Ap).join("|") + ")", "i") }

    function kp(t) { for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e; return n }

    function Ep(t, n, e) { var r = wp.exec(n.slice(e, e + 1)); return r ? (t.w = +r[0], e + r[0].length) : -1 }

    function Cp(t, n, e) { var r = wp.exec(n.slice(e, e + 1)); return r ? (t.u = +r[0], e + r[0].length) : -1 }

    function Pp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.U = +r[0], e + r[0].length) : -1 }

    function zp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.V = +r[0], e + r[0].length) : -1 }

    function Rp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.W = +r[0], e + r[0].length) : -1 }

    function Dp(t, n, e) { var r = wp.exec(n.slice(e, e + 4)); return r ? (t.y = +r[0], e + r[0].length) : -1 }

    function qp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1 }

    function Lp(t, n, e) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1 }

    function Up(t, n, e) { var r = wp.exec(n.slice(e, e + 1)); return r ? (t.q = 3 * r[0] - 3, e + r[0].length) : -1 }

    function Op(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.m = r[0] - 1, e + r[0].length) : -1 }

    function Bp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.d = +r[0], e + r[0].length) : -1 }

    function Fp(t, n, e) { var r = wp.exec(n.slice(e, e + 3)); return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1 }

    function Yp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.H = +r[0], e + r[0].length) : -1 }

    function Ip(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.M = +r[0], e + r[0].length) : -1 }

    function Hp(t, n, e) { var r = wp.exec(n.slice(e, e + 2)); return r ? (t.S = +r[0], e + r[0].length) : -1 }

    function jp(t, n, e) { var r = wp.exec(n.slice(e, e + 3)); return r ? (t.L = +r[0], e + r[0].length) : -1 }

    function Xp(t, n, e) { var r = wp.exec(n.slice(e, e + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1 }

    function Vp(t, n, e) { var r = Mp.exec(n.slice(e, e + 1)); return r ? e + r[0].length : -1 }

    function Gp(t, n, e) { var r = wp.exec(n.slice(e)); return r ? (t.Q = +r[0], e + r[0].length) : -1 }

    function $p(t, n, e) { var r = wp.exec(n.slice(e)); return r ? (t.s = +r[0], e + r[0].length) : -1 }

    function Wp(t, n) { return Tp(t.getDate(), n, 2) }

    function Zp(t, n) { return Tp(t.getHours(), n, 2) }

    function Qp(t, n) { return Tp(t.getHours() % 12 || 12, n, 2) }

    function Kp(t, n) { return Tp(1 + Nd.count(Hd(t), t), n, 3) }

    function Jp(t, n) { return Tp(t.getMilliseconds(), n, 3) }

    function tv(t, n) { return Jp(t, n) + "000" }

    function nv(t, n) { return Tp(t.getMonth() + 1, n, 2) }

    function ev(t, n) { return Tp(t.getMinutes(), n, 2) }

    function rv(t, n) { return Tp(t.getSeconds(), n, 2) }

    function iv(t) { var n = t.getDay(); return 0 === n ? 7 : n }

    function ov(t, n) { return Tp(Sd.count(Hd(t) - 1, t), n, 2) }

    function av(t, n) { var e = t.getDay(); return t = e >= 4 || 0 === e ? Pd(t) : Pd.ceil(t), Tp(Pd.count(Hd(t), t) + (4 === Hd(t).getDay()), n, 2) }

    function uv(t) { return t.getDay() }

    function cv(t, n) { return Tp(kd.count(Hd(t) - 1, t), n, 2) }

    function fv(t, n) { return Tp(t.getFullYear() % 100, n, 2) }

    function sv(t, n) { return Tp(t.getFullYear() % 1e4, n, 4) }

    function lv(t) { var n = t.getTimezoneOffset(); return (n > 0 ? "-" : (n *= -1, "+")) + Tp(n / 60 | 0, "0", 2) + Tp(n % 60, "0", 2) }

    function hv(t, n) { return Tp(t.getUTCDate(), n, 2) }

    function dv(t, n) { return Tp(t.getUTCHours(), n, 2) }

    function pv(t, n) { return Tp(t.getUTCHours() % 12 || 12, n, 2) }

    function vv(t, n) { return Tp(1 + Wd.count(pp(t), t), n, 3) }

    function gv(t, n) { return Tp(t.getUTCMilliseconds(), n, 3) }

    function yv(t, n) { return gv(t, n) + "000" }

    function _v(t, n) { return Tp(t.getUTCMonth() + 1, n, 2) }

    function bv(t, n) { return Tp(t.getUTCMinutes(), n, 2) }

    function mv(t, n) { return Tp(t.getUTCSeconds(), n, 2) }

    function xv(t) { var n = t.getUTCDay(); return 0 === n ? 7 : n }

    function wv(t, n) { return Tp(Kd.count(pp(t) - 1, t), n, 2) }

    function Mv(t, n) { var e = t.getUTCDay(); return t = e >= 4 || 0 === e ? ep(t) : ep.ceil(t), Tp(ep.count(pp(t), t) + (4 === pp(t).getUTCDay()), n, 2) }

    function Nv(t) { return t.getUTCDay() }

    function Tv(t, n) { return Tp(Jd.count(pp(t) - 1, t), n, 2) }

    function Av(t, n) { return Tp(t.getUTCFullYear() % 100, n, 2) }

    function Sv(t, n) { return Tp(t.getUTCFullYear() % 1e4, n, 4) }

    function kv() { return "+0000" }

    function Ev() { return "%" }

    function Cv(t) { return +t }

    function Pv(t) { return Math.floor(+t / 1e3) }

    function zv(n) { return mp = bp(n), t.timeFormat = mp.format, t.timeParse = mp.parse, t.utcFormat = mp.utcFormat, t.utcParse = mp.utcParse, mp }
    zv({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }); var Rv = Date.prototype.toISOString ? function(t) { return t.toISOString() } : t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"); var Dv = +new Date("2000-01-01T00:00:00.000Z") ? function(t) { var n = new Date(t); return isNaN(n) ? null : n } : t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),
        qv = 1e3,
        Lv = 60 * qv,
        Uv = 60 * Lv,
        Ov = 24 * Uv,
        Bv = 7 * Ov,
        Fv = 30 * Ov,
        Yv = 365 * Ov;

    function Iv(t) { return new Date(t) }

    function Hv(t) { return t instanceof Date ? +t : +new Date(+t) }

    function jv(t, n, r, i, o, a, u, c, f) { var s = Vh(Bh, Bh),
            l = s.invert,
            h = s.domain,
            d = f(".%L"),
            p = f(":%S"),
            v = f("%I:%M"),
            g = f("%I %p"),
            y = f("%a %d"),
            _ = f("%b %d"),
            b = f("%B"),
            m = f("%Y"),
            x = [
                [u, 1, qv],
                [u, 5, 5 * qv],
                [u, 15, 15 * qv],
                [u, 30, 30 * qv],
                [a, 1, Lv],
                [a, 5, 5 * Lv],
                [a, 15, 15 * Lv],
                [a, 30, 30 * Lv],
                [o, 1, Uv],
                [o, 3, 3 * Uv],
                [o, 6, 6 * Uv],
                [o, 12, 12 * Uv],
                [i, 1, Ov],
                [i, 2, 2 * Ov],
                [r, 1, Bv],
                [n, 1, Fv],
                [n, 3, 3 * Fv],
                [t, 1, Yv]
            ];

        function M(e) { return (u(e) < e ? d : a(e) < e ? p : o(e) < e ? v : i(e) < e ? g : n(e) < e ? r(e) < e ? y : _ : t(e) < e ? b : m)(e) }

        function N(n, r, i, o) { if (null == n && (n = 10), "number" == typeof n) { var a = Math.abs(i - r) / n,
                    u = e(function(t) { return t[2] }).right(x, a);
                u === x.length ? (o = w(r / Yv, i / Yv, n), n = t) : u ? (o = (u = x[a / x[u - 1][2] < x[u][2] / a ? u - 1 : u])[1], n = u[0]) : (o = Math.max(w(r, i, n), 1), n = c) } return null == o ? n : n.every(o) } return s.invert = function(t) { return new Date(l(t)) }, s.domain = function(t) { return arguments.length ? h(zh.call(t, Hv)) : h().map(Iv) }, s.ticks = function(t, n) { var e, r = h(),
                i = r[0],
                o = r[r.length - 1],
                a = o < i; return a && (e = i, i = o, o = e), e = (e = N(t, i, o, n)) ? e.range(i, o + 1) : [], a ? e.reverse() : e }, s.tickFormat = function(t, n) { return null == n ? M : f(n) }, s.nice = function(t, n) { var e = h(); return (t = N(t, e[0], e[e.length - 1], n)) ? h(Wh(e, t)) : s }, s.copy = function() { return jh(s, jv(t, n, r, i, o, a, u, c, f)) }, s }

    function Xv() { var t, n, e, r, i, o = 0,
            a = 1,
            u = Bh,
            c = !1;

        function f(n) { return isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e, c ? Math.max(0, Math.min(1, n)) : n)) } return f.domain = function(i) { return arguments.length ? (t = r(o = +i[0]), n = r(a = +i[1]), e = t === n ? 0 : 1 / (n - t), f) : [o, a] }, f.clamp = function(t) { return arguments.length ? (c = !!t, f) : c }, f.interpolator = function(t) { return arguments.length ? (u = t, f) : u }, f.unknown = function(t) { return arguments.length ? (i = t, f) : i },
            function(i) { return r = i, t = i(o), n = i(a), e = t === n ? 0 : 1 / (n - t), f } }

    function Vv(t, n) { return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown()) }

    function Gv() { var t = fd(Xv()); return t.copy = function() { return Vv(t, Gv()).exponent(t.exponent()) }, Ch.apply(t, arguments) }

    function $v() { var t, n, e, r, i, o, a, u = 0,
            c = .5,
            f = 1,
            s = Bh,
            l = !1;

        function h(t) { return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (t < n ? r : i), s(l ? Math.max(0, Math.min(1, t)) : t)) } return h.domain = function(a) { return arguments.length ? (t = o(u = +a[0]), n = o(c = +a[1]), e = o(f = +a[2]), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), h) : [u, c, f] }, h.clamp = function(t) { return arguments.length ? (l = !!t, h) : l }, h.interpolator = function(t) { return arguments.length ? (s = t, h) : s }, h.unknown = function(t) { return arguments.length ? (a = t, h) : a },
            function(a) { return o = a, t = a(u), n = a(c), e = a(f), r = t === n ? 0 : .5 / (n - t), i = n === e ? 0 : .5 / (e - n), h } }

    function Wv() { var t = fd($v()); return t.copy = function() { return Vv(t, Wv()).exponent(t.exponent()) }, Ch.apply(t, arguments) }

    function Zv(t) { for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r); return e } var Qv = Zv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Kv = Zv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        Jv = Zv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        tg = Zv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
        ng = Zv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        eg = Zv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        rg = Zv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        ig = Zv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        og = Zv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
        ag = Zv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

    function ug(t) { return pe(t[t.length - 1]) } var cg = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Zv),
        fg = ug(cg),
        sg = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Zv),
        lg = ug(sg),
        hg = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Zv),
        dg = ug(hg),
        pg = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Zv),
        vg = ug(pg),
        gg = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Zv),
        yg = ug(gg),
        _g = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Zv),
        bg = ug(_g),
        mg = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Zv),
        xg = ug(mg),
        wg = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Zv),
        Mg = ug(wg),
        Ng = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Zv),
        Tg = ug(Ng),
        Ag = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Zv),
        Sg = ug(Ag),
        kg = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Zv),
        Eg = ug(kg),
        Cg = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Zv),
        Pg = ug(Cg),
        zg = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Zv),
        Rg = ug(zg),
        Dg = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Zv),
        qg = ug(Dg),
        Lg = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Zv),
        Ug = ug(Lg),
        Og = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Zv),
        Bg = ug(Og),
        Fg = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Zv),
        Yg = ug(Fg),
        Ig = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Zv),
        Hg = ug(Ig),
        jg = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Zv),
        Xg = ug(jg),
        Vg = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Zv),
        Gg = ug(Vg),
        $g = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Zv),
        Wg = ug($g),
        Zg = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Zv),
        Qg = ug(Zg),
        Kg = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Zv),
        Jg = ug(Kg),
        ty = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Zv),
        ny = ug(ty),
        ey = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Zv),
        ry = ug(ey),
        iy = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Zv),
        oy = ug(iy),
        ay = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Zv),
        uy = ug(ay); var cy = Qe(ee(300, .5, 0), ee(-240, .5, 1)),
        fy = Qe(ee(-100, .75, .35), ee(80, 1.5, .8)),
        sy = Qe(ee(260, .75, .35), ee(80, 1.5, .8)),
        ly = ee(); var hy = _n(),
        dy = Math.PI / 3,
        py = 2 * Math.PI / 3;

    function vy(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } } var gy = vy(Zv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        yy = vy(Zv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        _y = vy(Zv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        by = vy(Zv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

    function my(t) { return function() { return t } } var xy = Math.abs,
        wy = Math.atan2,
        My = Math.cos,
        Ny = Math.max,
        Ty = Math.min,
        Ay = Math.sin,
        Sy = Math.sqrt,
        ky = 1e-12,
        Ey = Math.PI,
        Cy = Ey / 2,
        Py = 2 * Ey;

    function zy(t) { return t >= 1 ? Cy : t <= -1 ? -Cy : Math.asin(t) }

    function Ry(t) { return t.innerRadius }

    function Dy(t) { return t.outerRadius }

    function qy(t) { return t.startAngle }

    function Ly(t) { return t.endAngle }

    function Uy(t) { return t && t.padAngle }

    function Oy(t, n, e, r, i, o, a) { var u = t - e,
            c = n - r,
            f = (a ? o : -o) / Sy(u * u + c * c),
            s = f * c,
            l = -f * u,
            h = t + s,
            d = n + l,
            p = e + s,
            v = r + l,
            g = (h + p) / 2,
            y = (d + v) / 2,
            _ = p - h,
            b = v - d,
            m = _ * _ + b * b,
            x = i - o,
            w = h * v - p * d,
            M = (b < 0 ? -1 : 1) * Sy(Ny(0, x * x * m - w * w)),
            N = (w * b - _ * M) / m,
            T = (-w * _ - b * M) / m,
            A = (w * b + _ * M) / m,
            S = (-w * _ + b * M) / m,
            k = N - g,
            E = T - y,
            C = A - g,
            P = S - y; return k * k + E * E > C * C + P * P && (N = A, T = S), { cx: N, cy: T, x01: -s, y01: -l, x11: N * (i / x - 1), y11: T * (i / x - 1) } }

    function By(t) { this._context = t }

    function Fy(t) { return new By(t) }

    function Yy(t) { return t[0] }

    function Iy(t) { return t[1] }

    function Hy() { var t = Yy,
            n = Iy,
            e = my(!0),
            r = null,
            i = Fy,
            o = null;

        function a(a) { var u, c, f, s = a.length,
                l = !1; for (null == r && (o = i(f = no())), u = 0; u <= s; ++u) !(u < s && e(c = a[u], u, a)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+t(c, u, a), +n(c, u, a)); if (f) return o = null, f + "" || null } return a.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(+n), a) : t }, a.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : my(+t), a) : n }, a.defined = function(t) { return arguments.length ? (e = "function" == typeof t ? t : my(!!t), a) : e }, a.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), a) : i }, a.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r }, a }

    function jy() { var t = Yy,
            n = null,
            e = my(0),
            r = Iy,
            i = my(!0),
            o = null,
            a = Fy,
            u = null;

        function c(c) { var f, s, l, h, d, p = c.length,
                v = !1,
                g = new Array(p),
                y = new Array(p); for (null == o && (u = a(d = no())), f = 0; f <= p; ++f) { if (!(f < p && i(h = c[f], f, c)) === v)
                    if (v = !v) s = f, u.areaStart(), u.lineStart();
                    else { for (u.lineEnd(), u.lineStart(), l = f - 1; l >= s; --l) u.point(g[l], y[l]);
                        u.lineEnd(), u.areaEnd() }
                v && (g[f] = +t(h, f, c), y[f] = +e(h, f, c), u.point(n ? +n(h, f, c) : g[f], r ? +r(h, f, c) : y[f])) } if (d) return u = null, d + "" || null }

        function f() { return Hy().defined(i).curve(a).context(o) } return c.x = function(e) { return arguments.length ? (t = "function" == typeof e ? e : my(+e), n = null, c) : t }, c.x0 = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(+n), c) : t }, c.x1 = function(t) { return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : my(+t), c) : n }, c.y = function(t) { return arguments.length ? (e = "function" == typeof t ? t : my(+t), r = null, c) : e }, c.y0 = function(t) { return arguments.length ? (e = "function" == typeof t ? t : my(+t), c) : e }, c.y1 = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : my(+t), c) : r }, c.lineX0 = c.lineY0 = function() { return f().x(t).y(e) }, c.lineY1 = function() { return f().x(t).y(r) }, c.lineX1 = function() { return f().x(n).y(e) }, c.defined = function(t) { return arguments.length ? (i = "function" == typeof t ? t : my(!!t), c) : i }, c.curve = function(t) { return arguments.length ? (a = t, null != o && (u = a(o)), c) : a }, c.context = function(t) { return arguments.length ? (null == t ? o = u = null : u = a(o = t), c) : o }, c }

    function Xy(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }

    function Vy(t) { return t }
    By.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n) } } }; var Gy = Wy(Fy);

    function $y(t) { this._curve = t }

    function Wy(t) {
        function n(n) { return new $y(t(n)) } return n._curve = t, n }

    function Zy(t) { var n = t.curve; return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) { return arguments.length ? n(Wy(t)) : n()._curve }, t }

    function Qy() { return Zy(Hy().curve(Gy)) }

    function Ky() { var t = jy().curve(Gy),
            n = t.curve,
            e = t.lineX0,
            r = t.lineX1,
            i = t.lineY0,
            o = t.lineY1; return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() { return Zy(e()) }, delete t.lineX0, t.lineEndAngle = function() { return Zy(r()) }, delete t.lineX1, t.lineInnerRadius = function() { return Zy(i()) }, delete t.lineY0, t.lineOuterRadius = function() { return Zy(o()) }, delete t.lineY1, t.curve = function(t) { return arguments.length ? n(Wy(t)) : n()._curve }, t }

    function Jy(t, n) { return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)] }
    $y.prototype = { areaStart: function() { this._curve.areaStart() }, areaEnd: function() { this._curve.areaEnd() }, lineStart: function() { this._curve.lineStart() }, lineEnd: function() { this._curve.lineEnd() }, point: function(t, n) { this._curve.point(n * Math.sin(t), n * -Math.cos(t)) } }; var t_ = Array.prototype.slice;

    function n_(t) { return t.source }

    function e_(t) { return t.target }

    function r_(t) { var n = n_,
            e = e_,
            r = Yy,
            i = Iy,
            o = null;

        function a() { var a, u = t_.call(arguments),
                c = n.apply(this, u),
                f = e.apply(this, u); if (o || (o = a = no()), t(o, +r.apply(this, (u[0] = c, u)), +i.apply(this, u), +r.apply(this, (u[0] = f, u)), +i.apply(this, u)), a) return o = null, a + "" || null } return a.source = function(t) { return arguments.length ? (n = t, a) : n }, a.target = function(t) { return arguments.length ? (e = t, a) : e }, a.x = function(t) { return arguments.length ? (r = "function" == typeof t ? t : my(+t), a) : r }, a.y = function(t) { return arguments.length ? (i = "function" == typeof t ? t : my(+t), a) : i }, a.context = function(t) { return arguments.length ? (o = null == t ? null : t, a) : o }, a }

    function i_(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i) }

    function o_(t, n, e, r, i) { t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i) }

    function a_(t, n, e, r, i) { var o = Jy(n, e),
            a = Jy(n, e = (e + i) / 2),
            u = Jy(r, e),
            c = Jy(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], c[0], c[1]) } var u_ = { draw: function(t, n) { var e = Math.sqrt(n / Ey);
                t.moveTo(e, 0), t.arc(0, 0, e, 0, Py) } },
        c_ = { draw: function(t, n) { var e = Math.sqrt(n / 5) / 2;
                t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath() } },
        f_ = Math.sqrt(1 / 3),
        s_ = 2 * f_,
        l_ = { draw: function(t, n) { var e = Math.sqrt(n / s_),
                    r = e * f_;
                t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath() } },
        h_ = Math.sin(Ey / 10) / Math.sin(7 * Ey / 10),
        d_ = Math.sin(Py / 10) * h_,
        p_ = -Math.cos(Py / 10) * h_,
        v_ = { draw: function(t, n) { var e = Math.sqrt(.8908130915292852 * n),
                    r = d_ * e,
                    i = p_ * e;
                t.moveTo(0, -e), t.lineTo(r, i); for (var o = 1; o < 5; ++o) { var a = Py * o / 5,
                        u = Math.cos(a),
                        c = Math.sin(a);
                    t.lineTo(c * e, -u * e), t.lineTo(u * r - c * i, c * r + u * i) }
                t.closePath() } },
        g_ = { draw: function(t, n) { var e = Math.sqrt(n),
                    r = -e / 2;
                t.rect(r, r, e, e) } },
        y_ = Math.sqrt(3),
        __ = { draw: function(t, n) { var e = -Math.sqrt(n / (3 * y_));
                t.moveTo(0, 2 * e), t.lineTo(-y_ * e, -e), t.lineTo(y_ * e, -e), t.closePath() } },
        b_ = Math.sqrt(3) / 2,
        m_ = 1 / Math.sqrt(12),
        x_ = 3 * (m_ / 2 + 1),
        w_ = { draw: function(t, n) { var e = Math.sqrt(n / x_),
                    r = e / 2,
                    i = e * m_,
                    o = r,
                    a = e * m_ + e,
                    u = -o,
                    c = a;
                t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, c), t.lineTo(-.5 * r - b_ * i, b_ * r + -.5 * i), t.lineTo(-.5 * o - b_ * a, b_ * o + -.5 * a), t.lineTo(-.5 * u - b_ * c, b_ * u + -.5 * c), t.lineTo(-.5 * r + b_ * i, -.5 * i - b_ * r), t.lineTo(-.5 * o + b_ * a, -.5 * a - b_ * o), t.lineTo(-.5 * u + b_ * c, -.5 * c - b_ * u), t.closePath() } },
        M_ = [u_, c_, l_, g_, v_, __, w_];

    function N_() {}

    function T_(t, n, e) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6) }

    function A_(t) { this._context = t }

    function S_(t) { this._context = t }

    function k_(t) { this._context = t }

    function E_(t, n) { this._basis = new A_(t), this._beta = n }
    A_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 3:
                    T_(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    T_(this, t, n) }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, S_.prototype = { areaStart: N_, areaEnd: N_, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath(); break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath(); break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4) } }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n; break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n; break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6); break;
                default:
                    T_(this, t, n) }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, k_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3; var e = (this._x0 + 4 * this._x1 + t) / 6,
                        r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r); break;
                case 3:
                    this._point = 4;
                default:
                    T_(this, t, n) }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n } }, E_.prototype = { lineStart: function() { this._x = [], this._y = [], this._basis.lineStart() }, lineEnd: function() { var t = this._x,
                n = this._y,
                e = t.length - 1; if (e > 0)
                for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
            this._x = this._y = null, this._basis.lineEnd() }, point: function(t, n) { this._x.push(+t), this._y.push(+n) } }; var C_ = function t(n) {
        function e(t) { return 1 === n ? new A_(t) : new E_(t, n) } return e.beta = function(n) { return t(+n) }, e }(.85);

    function P_(t, n, e) { t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2) }

    function z_(t, n) { this._context = t, this._k = (1 - n) / 6 }
    z_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2); break;
                case 3:
                    P_(this, this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n; break;
                case 2:
                    this._point = 3;
                default:
                    P_(this, t, n) }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var R_ = function t(n) {
        function e(t) { return new z_(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function D_(t, n) { this._context = t, this._k = (1 - n) / 6 }
    D_.prototype = { areaStart: N_, areaEnd: N_, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath(); break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath(); break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5) } }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n; break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n); break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n; break;
                default:
                    P_(this, t, n) }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var q_ = function t(n) {
        function e(t) { return new D_(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function L_(t, n) { this._context = t, this._k = (1 - n) / 6 }
    L_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
                case 3:
                    this._point = 4;
                default:
                    P_(this, t, n) }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var U_ = function t(n) {
        function e(t) { return new L_(t, n) } return e.tension = function(n) { return t(+n) }, e }(0);

    function O_(t, n, e) { var r = t._x1,
            i = t._y1,
            o = t._x2,
            a = t._y2; if (t._l01_a > ky) { var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c } if (t._l23_a > ky) { var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2) }

    function B_(t, n) { this._context = t, this._alpha = n }
    B_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2); break;
                case 3:
                    this.point(this._x2, this._y2) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3;
                default:
                    O_(this, t, n) }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var F_ = function t(n) {
        function e(t) { return n ? new B_(t, n) : new z_(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function Y_(t, n) { this._context = t, this._alpha = n }
    Y_.prototype = { areaStart: N_, areaEnd: N_, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath(); break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath(); break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5) } }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n; break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n); break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n; break;
                default:
                    O_(this, t, n) }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var I_ = function t(n) {
        function e(t) { return n ? new Y_(t, n) : new D_(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function H_(t, n) { this._context = t, this._alpha = n }
    H_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0 }, lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { if (t = +t, n = +n, this._point) { var e = this._x2 - t,
                    r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha)) } switch (this._point) {
                case 0:
                    this._point = 1; break;
                case 1:
                    this._point = 2; break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
                case 3:
                    this._point = 4;
                default:
                    O_(this, t, n) }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n } }; var j_ = function t(n) {
        function e(t) { return n ? new H_(t, n) : new L_(t, 0) } return e.alpha = function(n) { return t(+n) }, e }(.5);

    function X_(t) { this._context = t }

    function V_(t) { return t < 0 ? -1 : 1 }

    function G_(t, n, e) { var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || i < 0 && -0),
            a = (e - t._y1) / (i || r < 0 && -0),
            u = (o * i + a * r) / (r + i); return (V_(o) + V_(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0 }

    function $_(t, n) { var e = t._x1 - t._x0; return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n }

    function W_(t, n, e) { var r = t._x0,
            i = t._y0,
            o = t._x1,
            a = t._y1,
            u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a) }

    function Z_(t) { this._context = t }

    function Q_(t) { this._context = new K_(t) }

    function K_(t) { this._context = t }

    function J_(t) { this._context = t }

    function tb(t) { var n, e, r = t.length - 1,
            i = new Array(r),
            o = new Array(r),
            a = new Array(r); for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1]; for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1]; for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n]; for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1]; return [i, o] }

    function nb(t, n) { this._context = t, this._t = n }

    function eb(t, n) { if ((i = t.length) > 1)
            for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
                for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1] }

    function rb(t) { for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n; return e }

    function ib(t, n) { return t[n] }

    function ob(t) { var n = t.map(ab); return rb(t).sort(function(t, e) { return n[t] - n[e] }) }

    function ab(t) { for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i;)(n = +t[e][1]) > o && (o = n, r = e); return r }

    function ub(t) { var n = t.map(cb); return rb(t).sort(function(t, e) { return n[t] - n[e] }) }

    function cb(t) { for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n); return e }

    function fb(t) { return function() { return t } }

    function sb(t) { return t[0] }

    function lb(t) { return t[1] }

    function hb() { this._ = null }

    function db(t) { t.U = t.C = t.L = t.R = t.P = t.N = null }

    function pb(t, n) { var e = n,
            r = n.R,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e }

    function vb(t, n) { var e = n,
            r = n.L,
            i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e }

    function gb(t) { for (; t.L;) t = t.L; return t }

    function yb(t, n, e, r) { var i = [null, null],
            o = Yb.push(i) - 1; return i.left = t, i.right = n, e && bb(i, t, n, e), r && bb(i, n, t, r), Bb[t.index].halfedges.push(o), Bb[n.index].halfedges.push(o), i }

    function _b(t, n, e) { var r = [n, e]; return r.left = t, r }

    function bb(t, n, e, r) { t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e) }

    function mb(t, n, e, r, i) { var o, a = t[0],
            u = t[1],
            c = a[0],
            f = a[1],
            s = 0,
            l = 1,
            h = u[0] - c,
            d = u[1] - f; if (o = n - c, h || !(o > 0)) { if (o /= h, h < 0) { if (o < s) return;
                o < l && (l = o) } else if (h > 0) { if (o > l) return;
                o > s && (s = o) } if (o = r - c, h || !(o < 0)) { if (o /= h, h < 0) { if (o > l) return;
                    o > s && (s = o) } else if (h > 0) { if (o < s) return;
                    o < l && (l = o) } if (o = e - f, d || !(o > 0)) { if (o /= d, d < 0) { if (o < s) return;
                        o < l && (l = o) } else if (d > 0) { if (o > l) return;
                        o > s && (s = o) } if (o = i - f, d || !(o < 0)) { if (o /= d, d < 0) { if (o > l) return;
                            o > s && (s = o) } else if (d > 0) { if (o < s) return;
                            o < l && (l = o) } return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0) } } } } }

    function xb(t, n, e, r, i) { var o = t[1]; if (o) return !0; var a, u, c = t[0],
            f = t.left,
            s = t.right,
            l = f[0],
            h = f[1],
            d = s[0],
            p = s[1],
            v = (l + d) / 2,
            g = (h + p) / 2; if (p === h) { if (v < n || v >= r) return; if (l > d) { if (c) { if (c[1] >= i) return } else c = [v, e];
                o = [v, i] } else { if (c) { if (c[1] < e) return } else c = [v, i];
                o = [v, e] } } else if (u = g - (a = (l - d) / (p - h)) * v, a < -1 || a > 1)
            if (l > d) { if (c) { if (c[1] >= i) return } else c = [(e - u) / a, e];
                o = [(i - u) / a, i] } else { if (c) { if (c[1] < e) return } else c = [(i - u) / a, i];
                o = [(e - u) / a, e] }
        else if (h < p) { if (c) { if (c[0] >= r) return } else c = [n, a * n + u];
            o = [r, a * r + u] } else { if (c) { if (c[0] < n) return } else c = [r, a * r + u];
            o = [n, a * n + u] } return t[0] = c, t[1] = o, !0 }

    function wb(t, n) { var e = t.site,
            r = n.left,
            i = n.right; return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1])) }

    function Mb(t, n) { return n[+(n.left !== t.site)] }

    function Nb(t, n) { return n[+(n.left === t.site)] }
    X_.prototype = { areaStart: N_, areaEnd: N_, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, n) { t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n)) } }, Z_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1); break;
                case 3:
                    W_(this, this._t0, $_(this, this._t0)) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, n) { var e = NaN; if (n = +n, (t = +t) !== this._x1 || n !== this._y1) { switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                    case 1:
                        this._point = 2; break;
                    case 2:
                        this._point = 3, W_(this, $_(this, e = G_(this, t, n)), e); break;
                    default:
                        W_(this, this._t0, e = G_(this, t, n)) }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e } } }, (Q_.prototype = Object.create(Z_.prototype)).point = function(t, n) { Z_.prototype.point.call(this, n, t) }, K_.prototype = { moveTo: function(t, n) { this._context.moveTo(n, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, n) { this._context.lineTo(n, t) }, bezierCurveTo: function(t, n, e, r, i, o) { this._context.bezierCurveTo(n, t, r, e, o, i) } }, J_.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = [], this._y = [] }, lineEnd: function() { var t = this._x,
                n = this._y,
                e = t.length; if (e)
                if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                else
                    for (var r = tb(t), i = tb(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null }, point: function(t, n) { this._x.push(+t), this._y.push(+n) } }, nb.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = this._y = NaN, this._point = 0 }, lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) }, point: function(t, n) { switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n); break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                    else { var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n) } }
            this._x = t, this._y = n } }, hb.prototype = { constructor: hb, insert: function(t, n) { var e, r, i; if (t) { if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) { for (t = t.R; t.L;) t = t.L;
                    t.L = n } else t.R = n;
                e = t } else this._ ? (t = gb(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null); for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (pb(this, e), e = (t = e).U), e.C = !1, r.C = !0, vb(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (vb(this, e), e = (t = e).U), e.C = !1, r.C = !0, pb(this, r)), e = t.U;
            this._.C = !1 }, remove: function(t) { t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null; var n, e, r, i = t.U,
                o = t.L,
                a = t.R; if (e = o ? a ? gb(a) : o : a, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && a ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== a ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = a, a.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r)
                if (t && t.C) t.C = !1;
                else { do { if (t === this._) break; if (t === i.L) { if ((n = i.R).C && (n.C = !1, i.C = !0, pb(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) { n.R && n.R.C || (n.L.C = !1, n.C = !0, vb(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, pb(this, i), t = this._; break } } else if ((n = i.L).C && (n.C = !1, i.C = !0, vb(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) { n.L && n.L.C || (n.R.C = !1, n.C = !0, pb(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, vb(this, i), t = this._; break }
                        n.C = !0, t = i, i = i.U } while (!t.C);
                    t && (t.C = !1) } } }; var Tb, Ab = [];

    function Sb() { db(this), this.x = this.y = this.arc = this.site = this.cy = null }

    function kb(t) { var n = t.P,
            e = t.N; if (n && e) { var r = n.site,
                i = t.site,
                o = e.site; if (r !== o) { var a = i[0],
                    u = i[1],
                    c = r[0] - a,
                    f = r[1] - u,
                    s = o[0] - a,
                    l = o[1] - u,
                    h = 2 * (c * l - f * s); if (!(h >= -Hb)) { var d = c * c + f * f,
                        p = s * s + l * l,
                        v = (l * d - f * p) / h,
                        g = (c * p - s * d) / h,
                        y = Ab.pop() || new Sb;
                    y.arc = t, y.site = i, y.x = v + a, y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g), t.circle = y; for (var _ = null, b = Fb._; b;)
                        if (y.y < b.y || y.y === b.y && y.x <= b.x) { if (!b.L) { _ = b.P; break }
                            b = b.L } else { if (!b.R) { _ = b; break }
                            b = b.R }
                    Fb.insert(_, y), _ || (Tb = y) } } } }

    function Eb(t) { var n = t.circle;
        n && (n.P || (Tb = n.N), Fb.remove(n), Ab.push(n), db(n), t.circle = null) } var Cb = [];

    function Pb() { db(this), this.edge = this.site = this.circle = null }

    function zb(t) { var n = Cb.pop() || new Pb; return n.site = t, n }

    function Rb(t) { Eb(t), Ob.remove(t), Cb.push(t), db(t) }

    function Db(t) { var n = t.circle,
            e = n.x,
            r = n.cy,
            i = [e, r],
            o = t.P,
            a = t.N,
            u = [t];
        Rb(t); for (var c = o; c.circle && Math.abs(e - c.circle.x) < Ib && Math.abs(r - c.circle.cy) < Ib;) o = c.P, u.unshift(c), Rb(c), c = o;
        u.unshift(c), Eb(c); for (var f = a; f.circle && Math.abs(e - f.circle.x) < Ib && Math.abs(r - f.circle.cy) < Ib;) a = f.N, u.push(f), Rb(f), f = a;
        u.push(f), Eb(f); var s, l = u.length; for (s = 1; s < l; ++s) f = u[s], c = u[s - 1], bb(f.edge, c.site, f.site, i);
        c = u[0], (f = u[l - 1]).edge = yb(c.site, f.site, null, i), kb(c), kb(f) }

    function qb(t) { for (var n, e, r, i, o = t[0], a = t[1], u = Ob._; u;)
            if ((r = Lb(u, a) - o) > Ib) u = u.L;
            else { if (!((i = o - Ub(u, a)) > Ib)) { r > -Ib ? (n = u.P, e = u) : i > -Ib ? (n = u, e = u.N) : n = e = u; break } if (!u.R) { n = u; break }
                u = u.R }! function(t) { Bb[t.index] = { site: t, halfedges: [] } }(t); var c = zb(t); if (Ob.insert(n, c), n || e) { if (n === e) return Eb(n), e = zb(n.site), Ob.insert(c, e), c.edge = e.edge = yb(n.site, c.site), kb(n), void kb(e); if (e) { Eb(n), Eb(e); var f = n.site,
                    s = f[0],
                    l = f[1],
                    h = t[0] - s,
                    d = t[1] - l,
                    p = e.site,
                    v = p[0] - s,
                    g = p[1] - l,
                    y = 2 * (h * g - d * v),
                    _ = h * h + d * d,
                    b = v * v + g * g,
                    m = [(g * _ - d * b) / y + s, (h * b - v * _) / y + l];
                bb(e.edge, f, p, m), c.edge = yb(f, t, null, m), e.edge = yb(t, p, null, m), kb(n), kb(e) } else c.edge = yb(n.site, c.site) } }

    function Lb(t, n) { var e = t.site,
            r = e[0],
            i = e[1],
            o = i - n; if (!o) return r; var a = t.P; if (!a) return -1 / 0; var u = (e = a.site)[0],
            c = e[1],
            f = c - n; if (!f) return u; var s = u - r,
            l = 1 / o - 1 / f,
            h = s / f; return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + u) / 2 }

    function Ub(t, n) { var e = t.N; if (e) return Lb(e, n); var r = t.site; return r[1] === n ? r[0] : 1 / 0 } var Ob, Bb, Fb, Yb, Ib = 1e-6,
        Hb = 1e-12;

    function jb(t, n, e) { return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]) }

    function Xb(t, n) { return n[1] - t[1] || n[0] - t[0] }

    function Vb(t, n) { var e, r, i, o = t.sort(Xb).pop(); for (Yb = [], Bb = new Array(t.length), Ob = new hb, Fb = new hb;;)
            if (i = Tb, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (qb(o), e = o[0], r = o[1]), o = t.pop();
            else { if (!i) break;
                Db(i.arc) }
        if (function() { for (var t, n, e, r, i = 0, o = Bb.length; i < o; ++i)
                    if ((t = Bb[i]) && (r = (n = t.halfedges).length)) { var a = new Array(r),
                            u = new Array(r); for (e = 0; e < r; ++e) a[e] = e, u[e] = wb(t, Yb[n[e]]); for (a.sort(function(t, n) { return u[n] - u[t] }), e = 0; e < r; ++e) u[e] = n[a[e]]; for (e = 0; e < r; ++e) n[e] = u[e] } }(), n) { var a = +n[0][0],
                u = +n[0][1],
                c = +n[1][0],
                f = +n[1][1];! function(t, n, e, r) { for (var i, o = Yb.length; o--;) xb(i = Yb[o], t, n, e, r) && mb(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > Ib || Math.abs(i[0][1] - i[1][1]) > Ib) || delete Yb[o] }(a, u, c, f),
            function(t, n, e, r) { var i, o, a, u, c, f, s, l, h, d, p, v, g = Bb.length,
                    y = !0; for (i = 0; i < g; ++i)
                    if (o = Bb[i]) { for (a = o.site, u = (c = o.halfedges).length; u--;) Yb[c[u]] || c.splice(u, 1); for (u = 0, f = c.length; u < f;) p = (d = Nb(o, Yb[c[u]]))[0], v = d[1], l = (s = Mb(o, Yb[c[++u % f]]))[0], h = s[1], (Math.abs(p - l) > Ib || Math.abs(v - h) > Ib) && (c.splice(u, 0, Yb.push(_b(a, d, Math.abs(p - t) < Ib && r - v > Ib ? [t, Math.abs(l - t) < Ib ? h : r] : Math.abs(v - r) < Ib && e - p > Ib ? [Math.abs(h - r) < Ib ? l : e, r] : Math.abs(p - e) < Ib && v - n > Ib ? [e, Math.abs(l - e) < Ib ? h : n] : Math.abs(v - n) < Ib && p - t > Ib ? [Math.abs(h - n) < Ib ? l : t, n] : null)) - 1), ++f);
                        f && (y = !1) }
                if (y) { var _, b, m, x = 1 / 0; for (i = 0, y = null; i < g; ++i)(o = Bb[i]) && (m = (_ = (a = o.site)[0] - t) * _ + (b = a[1] - n) * b) < x && (x = m, y = o); if (y) { var w = [t, n],
                            M = [t, r],
                            N = [e, r],
                            T = [e, n];
                        y.halfedges.push(Yb.push(_b(a = y.site, w, M)) - 1, Yb.push(_b(a, M, N)) - 1, Yb.push(_b(a, N, T)) - 1, Yb.push(_b(a, T, w)) - 1) } } for (i = 0; i < g; ++i)(o = Bb[i]) && (o.halfedges.length || delete Bb[i]) }(a, u, c, f) }
        this.edges = Yb, this.cells = Bb, Ob = Fb = Yb = Bb = null }

    function Gb(t) { return function() { return t } }

    function $b(t, n, e) { this.target = t, this.type = n, this.transform = e }

    function Wb(t, n, e) { this.k = t, this.x = n, this.y = e }
    Vb.prototype = { constructor: Vb, polygons: function() { var t = this.edges; return this.cells.map(function(n) { var e = n.halfedges.map(function(e) { return Mb(n, t[e]) }); return e.data = n.site.data, e }) }, triangles: function() { var t = [],
                n = this.edges; return this.cells.forEach(function(e, r) { if (o = (i = e.halfedges).length)
                    for (var i, o, a, u = e.site, c = -1, f = n[i[o - 1]], s = f.left === u ? f.right : f.left; ++c < o;) a = s, s = (f = n[i[c]]).left === u ? f.right : f.left, a && s && r < a.index && r < s.index && jb(u, a, s) < 0 && t.push([u.data, a.data, s.data]) }), t }, links: function() { return this.edges.filter(function(t) { return t.right }).map(function(t) { return { source: t.left.data, target: t.right.data } }) }, find: function(t, n, e) { for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]);)
                if (++a >= u) return null;
            var c = t - i.site[0],
                f = n - i.site[1],
                s = c * c + f * f;
            do { i = o.cells[r = a], a = null, i.halfedges.forEach(function(e) { var r = o.edges[e],
                        u = r.left; if (u !== i.site && u || (u = r.right)) { var c = t - u[0],
                            f = n - u[1],
                            l = c * c + f * f;
                        l < s && (s = l, a = u.index) } }) } while (null !== a); return o._found = r, null == e || s <= e * e ? i.site : null } }, Wb.prototype = { constructor: Wb, scale: function(t) { return 1 === t ? this : new Wb(this.k * t, this.x, this.y) }, translate: function(t, n) { return 0 === t & 0 === n ? this : new Wb(this.k, this.x + this.k * t, this.y + this.k * n) }, apply: function(t) { return [t[0] * this.k + this.x, t[1] * this.k + this.y] }, applyX: function(t) { return t * this.k + this.x }, applyY: function(t) { return t * this.k + this.y }, invert: function(t) { return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k] }, invertX: function(t) { return (t - this.x) / this.k }, invertY: function(t) { return (t - this.y) / this.k }, rescaleX: function(t) { return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t)) }, rescaleY: function(t) { return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t)) }, toString: function() { return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")" } }; var Zb = new Wb(1, 0, 0);

    function Qb(t) { for (; !t.__zoom;)
            if (!(t = t.parentNode)) return Zb;
        return t.__zoom }

    function Kb() { t.event.stopImmediatePropagation() }

    function Jb() { t.event.preventDefault(), t.event.stopImmediatePropagation() }

    function tm() { return !t.event.ctrlKey && !t.event.button }

    function nm() { var t = this; return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
            [(t = t.viewBox.baseVal).x, t.y],
            [t.x + t.width, t.y + t.height]
        ] : [
            [0, 0],
            [t.width.baseVal.value, t.height.baseVal.value]
        ] : [
            [0, 0],
            [t.clientWidth, t.clientHeight]
        ] }

    function em() { return this.__zoom || Zb }

    function rm() { return -t.event.deltaY * (1 === t.event.deltaMode ? .05 : t.event.deltaMode ? 1 : .002) }

    function im() { return navigator.maxTouchPoints || "ontouchstart" in this }

    function om(t, n, e) { var r = t.invertX(n[0][0]) - e[0][0],
            i = t.invertX(n[1][0]) - e[1][0],
            o = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1]; return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)) }
    Qb.prototype = Wb.prototype, t.FormatSpecifier = Ba, t.active = function(t, n) { var e, r, i = t.__transition; if (i)
            for (r in n = null == n ? null : n + "", i)
                if ((e = i[r]).state > xr && e.name === n) return new Ur([
                    [t]
                ], yi, n, +r);
        return null }, t.arc = function() { var t = Ry,
            n = Dy,
            e = my(0),
            r = null,
            i = qy,
            o = Ly,
            a = Uy,
            u = null;

        function c() { var c, f, s = +t.apply(this, arguments),
                l = +n.apply(this, arguments),
                h = i.apply(this, arguments) - Cy,
                d = o.apply(this, arguments) - Cy,
                p = xy(d - h),
                v = d > h; if (u || (u = c = no()), l < s && (f = l, l = s, s = f), l > ky)
                if (p > Py - ky) u.moveTo(l * My(h), l * Ay(h)), u.arc(0, 0, l, h, d, !v), s > ky && (u.moveTo(s * My(d), s * Ay(d)), u.arc(0, 0, s, d, h, v));
                else { var g, y, _ = h,
                        b = d,
                        m = h,
                        x = d,
                        w = p,
                        M = p,
                        N = a.apply(this, arguments) / 2,
                        T = N > ky && (r ? +r.apply(this, arguments) : Sy(s * s + l * l)),
                        A = Ty(xy(l - s) / 2, +e.apply(this, arguments)),
                        S = A,
                        k = A; if (T > ky) { var E = zy(T / s * Ay(N)),
                            C = zy(T / l * Ay(N));
                        (w -= 2 * E) > ky ? (m += E *= v ? 1 : -1, x -= E) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > ky ? (_ += C *= v ? 1 : -1, b -= C) : (M = 0, _ = b = (h + d) / 2) } var P = l * My(_),
                        z = l * Ay(_),
                        R = s * My(x),
                        D = s * Ay(x); if (A > ky) { var q, L = l * My(b),
                            U = l * Ay(b),
                            O = s * My(m),
                            B = s * Ay(m); if (p < Ey && (q = function(t, n, e, r, i, o, a, u) { var c = e - t,
                                    f = r - n,
                                    s = a - i,
                                    l = u - o,
                                    h = l * c - s * f; if (!(h * h < ky)) return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f] }(P, z, O, B, L, U, R, D))) { var F = P - q[0],
                                Y = z - q[1],
                                I = L - q[0],
                                H = U - q[1],
                                j = 1 / Ay(function(t) { return t > 1 ? 0 : t < -1 ? Ey : Math.acos(t) }((F * I + Y * H) / (Sy(F * F + Y * Y) * Sy(I * I + H * H))) / 2),
                                X = Sy(q[0] * q[0] + q[1] * q[1]);
                            S = Ty(A, (s - X) / (j - 1)), k = Ty(A, (l - X) / (j + 1)) } }
                    M > ky ? k > ky ? (g = Oy(O, B, P, z, l, k, v), y = Oy(L, U, R, D, l, k, v), u.moveTo(g.cx + g.x01, g.cy + g.y01), k < A ? u.arc(g.cx, g.cy, k, wy(g.y01, g.x01), wy(y.y01, y.x01), !v) : (u.arc(g.cx, g.cy, k, wy(g.y01, g.x01), wy(g.y11, g.x11), !v), u.arc(0, 0, l, wy(g.cy + g.y11, g.cx + g.x11), wy(y.cy + y.y11, y.cx + y.x11), !v), u.arc(y.cx, y.cy, k, wy(y.y11, y.x11), wy(y.y01, y.x01), !v))) : (u.moveTo(P, z), u.arc(0, 0, l, _, b, !v)) : u.moveTo(P, z), s > ky && w > ky ? S > ky ? (g = Oy(R, D, L, U, s, -S, v), y = Oy(P, z, O, B, s, -S, v), u.lineTo(g.cx + g.x01, g.cy + g.y01), S < A ? u.arc(g.cx, g.cy, S, wy(g.y01, g.x01), wy(y.y01, y.x01), !v) : (u.arc(g.cx, g.cy, S, wy(g.y01, g.x01), wy(g.y11, g.x11), !v), u.arc(0, 0, s, wy(g.cy + g.y11, g.cx + g.x11), wy(y.cy + y.y11, y.cx + y.x11), v), u.arc(y.cx, y.cy, S, wy(y.y11, y.x11), wy(y.y01, y.x01), !v))) : u.arc(0, 0, s, x, m, v) : u.lineTo(R, D) }
            else u.moveTo(0, 0); if (u.closePath(), c) return u = null, c + "" || null } return c.centroid = function() { var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Ey / 2; return [My(r) * e, Ay(r) * e] }, c.innerRadius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(+n), c) : t }, c.outerRadius = function(t) { return arguments.length ? (n = "function" == typeof t ? t : my(+t), c) : n }, c.cornerRadius = function(t) { return arguments.length ? (e = "function" == typeof t ? t : my(+t), c) : e }, c.padRadius = function(t) { return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : my(+t), c) : r }, c.startAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : my(+t), c) : i }, c.endAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : my(+t), c) : o }, c.padAngle = function(t) { return arguments.length ? (a = "function" == typeof t ? t : my(+t), c) : a }, c.context = function(t) { return arguments.length ? (u = null == t ? null : t, c) : u }, c }, t.area = jy, t.areaRadial = Ky, t.ascending = n, t.autoType = function(t) { for (var n in t) { var e, r, i = t[n].trim(); if (i)
                if ("true" === i) i = !0;
                else if ("false" === i) i = !1;
            else if ("NaN" === i) i = NaN;
            else if (isNaN(e = +i)) { if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/))) continue;
                ra && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")), i = new Date(i) } else i = e;
            else i = null;
            t[n] = i } return t }, t.axisBottom = function(t) { return F(D, t) }, t.axisLeft = function(t) { return F(q, t) }, t.axisRight = function(t) { return F(R, t) }, t.axisTop = function(t) { return F(z, t) }, t.bisect = i, t.bisectLeft = o, t.bisectRight = i, t.bisector = e, t.blob = function(t, n) { return fetch(t, n).then(ia) }, t.brush = function() { return Yi(Ci) }, t.brushSelection = function(t) { var n = t.__brush; return n ? n.dim.output(n.selection) : null }, t.brushX = function() { return Yi(ki) }, t.brushY = function() { return Yi(Ei) }, t.buffer = function(t, n) { return fetch(t, n).then(oa) }, t.chord = function() { var t = 0,
            n = null,
            e = null,
            r = null;

        function i(i) { var o, a, u, c, f, s, l = i.length,
                h = [],
                d = g(l),
                p = [],
                v = [],
                y = v.groups = new Array(l),
                _ = new Array(l * l); for (o = 0, f = -1; ++f < l;) { for (a = 0, s = -1; ++s < l;) a += i[f][s];
                h.push(a), p.push(g(l)), o += a } for (n && d.sort(function(t, e) { return n(h[t], h[e]) }), e && p.forEach(function(t, n) { t.sort(function(t, r) { return e(i[n][t], i[n][r]) }) }), c = (o = Gi(0, Vi - t * l) / o) ? t : Vi / l, a = 0, f = -1; ++f < l;) { for (u = a, s = -1; ++s < l;) { var b = d[f],
                        m = p[b][s],
                        x = i[b][m],
                        w = a,
                        M = a += x * o;
                    _[m * l + b] = { index: b, subindex: m, startAngle: w, endAngle: M, value: x } }
                y[b] = { index: b, startAngle: u, endAngle: a, value: h[b] }, a += c } for (f = -1; ++f < l;)
                for (s = f - 1; ++s < l;) { var N = _[s * l + f],
                        T = _[f * l + s];
                    (N.value || T.value) && v.push(N.value < T.value ? { source: T, target: N } : { source: N, target: T }) }
            return r ? v.sort(r) : v } return i.padAngle = function(n) { return arguments.length ? (t = Gi(0, n), i) : t }, i.sortGroups = function(t) { return arguments.length ? (n = t, i) : n }, i.sortSubgroups = function(t) { return arguments.length ? (e = t, i) : e }, i.sortChords = function(t) { return arguments.length ? (null == t ? r = null : (r = $i(t))._ = t, i) : r && r._ }, i }, t.clientPoint = Ot, t.cluster = function() { var t = Nl,
            n = 1,
            e = 1,
            r = !1;

        function i(i) { var o, a = 0;
            i.eachAfter(function(n) { var e = n.children;
                e ? (n.x = function(t) { return t.reduce(Tl, 0) / t.length }(e), n.y = function(t) { return 1 + t.reduce(Al, 0) }(e)) : (n.x = o ? a += t(n, o) : 0, n.y = 0, o = n) }); var u = function(t) { for (var n; n = t.children;) t = n[0]; return t }(i),
                c = function(t) { for (var n; n = t.children;) t = n[n.length - 1]; return t }(i),
                f = u.x - t(u, c) / 2,
                s = c.x + t(c, u) / 2; return i.eachAfter(r ? function(t) { t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e } : function(t) { t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e }) } return i.separation = function(n) { return arguments.length ? (t = n, i) : t }, i.size = function(t) { return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e] }, i.nodeSize = function(t) { return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null }, i }, t.color = pn, t.contourDensity = function() { var t = ko,
            n = Eo,
            e = Co,
            r = 960,
            i = 500,
            o = 20,
            a = 2,
            u = 3 * o,
            c = r + 2 * u >> a,
            f = i + 2 * u >> a,
            s = bo(20);

        function l(r) { var i = new Float32Array(c * f),
                l = new Float32Array(c * f);
            r.forEach(function(r, o, s) { var l = +t(r, o, s) + u >> a,
                    h = +n(r, o, s) + u >> a,
                    d = +e(r, o, s);
                l >= 0 && l < c && h >= 0 && h < f && (i[l + h * c] += d) }), Ao({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), So({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a), Ao({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), So({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a), Ao({ width: c, height: f, data: i }, { width: c, height: f, data: l }, o >> a), So({ width: c, height: f, data: l }, { width: c, height: f, data: i }, o >> a); var d = s(i); if (!Array.isArray(d)) { var p = T(i);
                d = w(0, p, d), (d = g(0, Math.floor(p / d) * d, d)).shift() } return To().thresholds(d).size([c, f])(i).map(h) }

        function h(t) { return t.value *= Math.pow(2, -2 * a), t.coordinates.forEach(d), t }

        function d(t) { t.forEach(p) }

        function p(t) { t.forEach(v) }

        function v(t) { t[0] = t[0] * Math.pow(2, a) - u, t[1] = t[1] * Math.pow(2, a) - u }

        function y() { return c = r + 2 * (u = 3 * o) >> a, f = i + 2 * u >> a, l } return l.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : bo(+n), l) : t }, l.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : bo(+t), l) : n }, l.weight = function(t) { return arguments.length ? (e = "function" == typeof t ? t : bo(+t), l) : e }, l.size = function(t) { if (!arguments.length) return [r, i]; var n = Math.ceil(t[0]),
                e = Math.ceil(t[1]); if (!(n >= 0 || n >= 0)) throw new Error("invalid size"); return r = n, i = e, y() }, l.cellSize = function(t) { if (!arguments.length) return 1 << a; if (!((t = +t) >= 1)) throw new Error("invalid cell size"); return a = Math.floor(Math.log(t) / Math.LN2), y() }, l.thresholds = function(t) { return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? bo(yo.call(t)) : bo(t), l) : s }, l.bandwidth = function(t) { if (!arguments.length) return Math.sqrt(o * (o + 1)); if (!((t = +t) >= 0)) throw new Error("invalid bandwidth"); return o = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), y() }, l }, t.contours = To, t.create = function(t) { return Rt(Z(t).call(document.documentElement)) }, t.creator = Z, t.cross = function(t, n, e) { var r, i, o, u, c = t.length,
            f = n.length,
            s = new Array(c * f); for (null == e && (e = a), r = o = 0; r < c; ++r)
            for (u = t[r], i = 0; i < f; ++i, ++o) s[o] = e(u, n[i]); return s }, t.csv = fa, t.csvFormat = jo, t.csvFormatBody = Xo, t.csvFormatRow = Go, t.csvFormatRows = Vo, t.csvFormatValue = $o, t.csvParse = Io, t.csvParseRows = Ho, t.cubehelix = ee, t.curveBasis = function(t) { return new A_(t) }, t.curveBasisClosed = function(t) { return new S_(t) }, t.curveBasisOpen = function(t) { return new k_(t) }, t.curveBundle = C_, t.curveCardinal = R_, t.curveCardinalClosed = q_, t.curveCardinalOpen = U_, t.curveCatmullRom = F_, t.curveCatmullRomClosed = I_, t.curveCatmullRomOpen = j_, t.curveLinear = Fy, t.curveLinearClosed = function(t) { return new X_(t) }, t.curveMonotoneX = function(t) { return new Z_(t) }, t.curveMonotoneY = function(t) { return new Q_(t) }, t.curveNatural = function(t) { return new J_(t) }, t.curveStep = function(t) { return new nb(t, .5) }, t.curveStepAfter = function(t) { return new nb(t, 1) }, t.curveStepBefore = function(t) { return new nb(t, 0) }, t.customEvent = kt, t.descending = function(t, n) { return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN }, t.deviation = f, t.dispatch = I, t.drag = function() { var n, e, r, i, o = Gt,
            a = $t,
            u = Wt,
            c = Zt,
            f = {},
            s = I("start", "drag", "end"),
            l = 0,
            h = 0;

        function d(t) { t.on("mousedown.drag", p).filter(c).on("touchstart.drag", y).on("touchmove.drag", _).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function p() { if (!i && o.apply(this, arguments)) { var u = m("mouse", a.apply(this, arguments), Bt, this, arguments);
                u && (Rt(t.event.view).on("mousemove.drag", v, !0).on("mouseup.drag", g, !0), Ht(t.event.view), Yt(), r = !1, n = t.event.clientX, e = t.event.clientY, u("start")) } }

        function v() { if (It(), !r) { var i = t.event.clientX - n,
                    o = t.event.clientY - e;
                r = i * i + o * o > h }
            f.mouse("drag") }

        function g() { Rt(t.event.view).on("mousemove.drag mouseup.drag", null), jt(t.event.view, r), It(), f.mouse("end") }

        function y() { if (o.apply(this, arguments)) { var n, e, r = t.event.changedTouches,
                    i = a.apply(this, arguments),
                    u = r.length; for (n = 0; n < u; ++n)(e = m(r[n].identifier, i, Ft, this, arguments)) && (Yt(), e("start")) } }

        function _() { var n, e, r = t.event.changedTouches,
                i = r.length; for (n = 0; n < i; ++n)(e = f[r[n].identifier]) && (It(), e("drag")) }

        function b() { var n, e, r = t.event.changedTouches,
                o = r.length; for (i && clearTimeout(i), i = setTimeout(function() { i = null }, 500), n = 0; n < o; ++n)(e = f[r[n].identifier]) && (Yt(), e("end")) }

        function m(n, e, r, i, o) { var a, c, h, p = r(e, n),
                v = s.copy(); if (kt(new Vt(d, "beforestart", a, n, l, p[0], p[1], 0, 0, v), function() { return null != (t.event.subject = a = u.apply(i, o)) && (c = a.x - p[0] || 0, h = a.y - p[1] || 0, !0) })) return function t(u) { var s, g = p; switch (u) {
                    case "start":
                        f[n] = t, s = l++; break;
                    case "end":
                        delete f[n], --l;
                    case "drag":
                        p = r(e, n), s = l }
                kt(new Vt(d, u, a, n, s, p[0] + c, p[1] + h, p[0] - g[0], p[1] - g[1], v), v.apply, v, [u, i, o]) } } return d.filter = function(t) { return arguments.length ? (o = "function" == typeof t ? t : Xt(!!t), d) : o }, d.container = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Xt(t), d) : a }, d.subject = function(t) { return arguments.length ? (u = "function" == typeof t ? t : Xt(t), d) : u }, d.touchable = function(t) { return arguments.length ? (c = "function" == typeof t ? t : Xt(!!t), d) : c }, d.on = function() { var t = s.on.apply(s, arguments); return t === s ? d : t }, d.clickDistance = function(t) { return arguments.length ? (h = (t = +t) * t, d) : Math.sqrt(h) }, d }, t.dragDisable = Ht, t.dragEnable = jt, t.dsv = function(t, n, e, r) { 3 === arguments.length && "function" == typeof e && (r = e, e = void 0); var i = Fo(t); return ua(n, e).then(function(t) { return i.parse(t, r) }) }, t.dsvFormat = Fo, t.easeBack = si, t.easeBackIn = ci, t.easeBackInOut = si, t.easeBackOut = fi, t.easeBounce = ui, t.easeBounceIn = function(t) { return 1 - ui(1 - t) }, t.easeBounceInOut = function(t) { return ((t *= 2) <= 1 ? 1 - ui(1 - t) : ui(t - 1) + 1) / 2 }, t.easeBounceOut = ui, t.easeCircle = Zr, t.easeCircleIn = function(t) { return 1 - Math.sqrt(1 - t * t) }, t.easeCircleInOut = Zr, t.easeCircleOut = function(t) { return Math.sqrt(1 - --t * t) }, t.easeCubic = Ir, t.easeCubicIn = function(t) { return t * t * t }, t.easeCubicInOut = Ir, t.easeCubicOut = function(t) { return --t * t * t + 1 }, t.easeElastic = di, t.easeElasticIn = hi, t.easeElasticInOut = pi, t.easeElasticOut = di, t.easeExp = Wr, t.easeExpIn = function(t) { return Math.pow(2, 10 * t - 10) }, t.easeExpInOut = Wr, t.easeExpOut = function(t) { return 1 - Math.pow(2, -10 * t) }, t.easeLinear = function(t) { return +t }, t.easePoly = Xr, t.easePolyIn = Hr, t.easePolyInOut = Xr, t.easePolyOut = jr, t.easeQuad = Yr, t.easeQuadIn = function(t) { return t * t }, t.easeQuadInOut = Yr, t.easeQuadOut = function(t) { return t * (2 - t) }, t.easeSin = $r, t.easeSinIn = function(t) { return 1 - Math.cos(t * Gr) }, t.easeSinInOut = $r, t.easeSinOut = function(t) { return Math.sin(t * Gr) }, t.entries = function(t) { var n = []; for (var e in t) n.push({ key: e, value: t[e] }); return n }, t.extent = s, t.forceCenter = function(t, n) { var e;

        function r() { var r, i, o = e.length,
                a = 0,
                u = 0; for (r = 0; r < o; ++r) a += (i = e[r]).x, u += i.y; for (a = a / o - t, u = u / o - n, r = 0; r < o; ++r)(i = e[r]).x -= a, i.y -= u } return null == t && (t = 0), null == n && (n = 0), r.initialize = function(t) { e = t }, r.x = function(n) { return arguments.length ? (t = +n, r) : t }, r.y = function(t) { return arguments.length ? (n = +t, r) : n }, r }, t.forceCollide = function(t) { var n, e, r = 1,
            i = 1;

        function o() { for (var t, o, u, c, f, s, l, h = n.length, d = 0; d < i; ++d)
                for (o = wa(n, Aa, Sa).visitAfter(a), t = 0; t < h; ++t) u = n[t], s = e[u.index], l = s * s, c = u.x + u.vx, f = u.y + u.vy, o.visit(p);

            function p(t, n, e, i, o) { var a = t.data,
                    h = t.r,
                    d = s + h; if (!a) return n > c + d || i < c - d || e > f + d || o < f - d; if (a.index > u.index) { var p = c - a.x - a.vx,
                        v = f - a.y - a.vy,
                        g = p * p + v * v;
                    g < d * d && (0 === p && (g += (p = ya()) * p), 0 === v && (g += (v = ya()) * v), g = (d - (g = Math.sqrt(g))) / g * r, u.vx += (p *= g) * (d = (h *= h) / (l + h)), u.vy += (v *= g) * d, a.vx -= p * (d = 1 - d), a.vy -= v * d) } } }

        function a(t) { if (t.data) return t.r = e[t.data.index]; for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r) }

        function u() { if (n) { var r, i, o = n.length; for (e = new Array(o), r = 0; r < o; ++r) i = n[r], e[i.index] = +t(i, r, n) } } return "function" != typeof t && (t = ga(null == t ? 1 : +t)), o.initialize = function(t) { n = t, u() }, o.iterations = function(t) { return arguments.length ? (i = +t, o) : i }, o.strength = function(t) { return arguments.length ? (r = +t, o) : r }, o.radius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ga(+n), u(), o) : t }, o }, t.forceLink = function(t) { var n, e, r, i, o, a = ka,
            u = function(t) { return 1 / Math.min(i[t.source.index], i[t.target.index]) },
            c = ga(30),
            f = 1;

        function s(r) { for (var i = 0, a = t.length; i < f; ++i)
                for (var u, c, s, l, h, d, p, v = 0; v < a; ++v) c = (u = t[v]).source, l = (s = u.target).x + s.vx - c.x - c.vx || ya(), h = s.y + s.vy - c.y - c.vy || ya(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v], h *= d, s.vx -= l * (p = o[v]), s.vy -= h * p, c.vx += l * (p = 1 - p), c.vy += h * p }

        function l() { if (r) { var u, c, f = r.length,
                    s = t.length,
                    l = co(r, a); for (u = 0, i = new Array(f); u < s; ++u)(c = t[u]).index = u, "object" != typeof c.source && (c.source = Ea(l, c.source)), "object" != typeof c.target && (c.target = Ea(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1; for (u = 0, o = new Array(s); u < s; ++u) c = t[u], o[u] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                n = new Array(s), h(), e = new Array(s), d() } }

        function h() { if (r)
                for (var e = 0, i = t.length; e < i; ++e) n[e] = +u(t[e], e, t) }

        function d() { if (r)
                for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t) } return null == t && (t = []), s.initialize = function(t) { r = t, l() }, s.links = function(n) { return arguments.length ? (t = n, l(), s) : t }, s.id = function(t) { return arguments.length ? (a = t, s) : a }, s.iterations = function(t) { return arguments.length ? (f = +t, s) : f }, s.strength = function(t) { return arguments.length ? (u = "function" == typeof t ? t : ga(+t), h(), s) : u }, s.distance = function(t) { return arguments.length ? (c = "function" == typeof t ? t : ga(+t), d(), s) : c }, s }, t.forceManyBody = function() { var t, n, e, r, i = ga(-30),
            o = 1,
            a = 1 / 0,
            u = .81;

        function c(r) { var i, o = t.length,
                a = wa(t, Ca, Pa).visitAfter(s); for (e = r, i = 0; i < o; ++i) n = t[i], a.visit(l) }

        function f() { if (t) { var n, e, o = t.length; for (r = new Array(o), n = 0; n < o; ++n) e = t[n], r[e.index] = +i(e, n, t) } }

        function s(t) { var n, e, i, o, a, u = 0,
                c = 0; if (t.length) { for (i = o = a = 0; a < 4; ++a)(n = t[a]) && (e = Math.abs(n.value)) && (u += n.value, c += e, i += e * n.x, o += e * n.y);
                t.x = i / c, t.y = o / c } else {
                (n = t).x = n.data.x, n.y = n.data.y;
                do { u += r[n.data.index] } while (n = n.next) }
            t.value = u }

        function l(t, i, c, f) { if (!t.value) return !0; var s = t.x - n.x,
                l = t.y - n.y,
                h = f - i,
                d = s * s + l * l; if (h * h / u < d) return d < a && (0 === s && (d += (s = ya()) * s), 0 === l && (d += (l = ya()) * l), d < o && (d = Math.sqrt(o * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d), !0; if (!(t.length || d >= a)) {
                (t.data !== n || t.next) && (0 === s && (d += (s = ya()) * s), 0 === l && (d += (l = ya()) * l), d < o && (d = Math.sqrt(o * d)));
                do { t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h) } while (t = t.next) } } return c.initialize = function(n) { t = n, f() }, c.strength = function(t) { return arguments.length ? (i = "function" == typeof t ? t : ga(+t), f(), c) : i }, c.distanceMin = function(t) { return arguments.length ? (o = t * t, c) : Math.sqrt(o) }, c.distanceMax = function(t) { return arguments.length ? (a = t * t, c) : Math.sqrt(a) }, c.theta = function(t) { return arguments.length ? (u = t * t, c) : Math.sqrt(u) }, c }, t.forceRadial = function(t, n, e) { var r, i, o, a = ga(.1);

        function u(t) { for (var a = 0, u = r.length; a < u; ++a) { var c = r[a],
                    f = c.x - n || 1e-6,
                    s = c.y - e || 1e-6,
                    l = Math.sqrt(f * f + s * s),
                    h = (o[a] - l) * i[a] * t / l;
                c.vx += f * h, c.vy += s * h } }

        function c() { if (r) { var n, e = r.length; for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(r[n], n, r), i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r) } } return "function" != typeof t && (t = ga(+t)), null == n && (n = 0), null == e && (e = 0), u.initialize = function(t) { r = t, c() }, u.strength = function(t) { return arguments.length ? (a = "function" == typeof t ? t : ga(+t), c(), u) : a }, u.radius = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ga(+n), c(), u) : t }, u.x = function(t) { return arguments.length ? (n = +t, u) : n }, u.y = function(t) { return arguments.length ? (e = +t, u) : e }, u }, t.forceSimulation = function(t) { var n, e = 1,
            r = .001,
            i = 1 - Math.pow(r, 1 / 300),
            o = 0,
            a = .6,
            u = co(),
            c = hr(s),
            f = I("tick", "end");

        function s() { l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n)) }

        function l(r) { var c, f, s = t.length;
            void 0 === r && (r = 1); for (var l = 0; l < r; ++l)
                for (e += (o - e) * i, u.each(function(t) { t(e) }), c = 0; c < s; ++c) null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx, f.vx = 0), null == f.fy ? f.y += f.vy *= a : (f.y = f.fy, f.vy = 0); return n }

        function h() { for (var n, e = 0, r = t.length; e < r; ++e) { if ((n = t[e]).index = e, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) { var i = za * Math.sqrt(e),
                        o = e * Ra;
                    n.x = i * Math.cos(o), n.y = i * Math.sin(o) }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0) } }

        function d(n) { return n.initialize && n.initialize(t), n } return null == t && (t = []), h(), n = { tick: l, restart: function() { return c.restart(s), n }, stop: function() { return c.stop(), n }, nodes: function(e) { return arguments.length ? (t = e, h(), u.each(d), n) : t }, alpha: function(t) { return arguments.length ? (e = +t, n) : e }, alphaMin: function(t) { return arguments.length ? (r = +t, n) : r }, alphaDecay: function(t) { return arguments.length ? (i = +t, n) : +i }, alphaTarget: function(t) { return arguments.length ? (o = +t, n) : o }, velocityDecay: function(t) { return arguments.length ? (a = 1 - t, n) : 1 - a }, force: function(t, e) { return arguments.length > 1 ? (null == e ? u.remove(t) : u.set(t, d(e)), n) : u.get(t) }, find: function(n, e, r) { var i, o, a, u, c, f = 0,
                    s = t.length; for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u, r = a); return c }, on: function(t, e) { return arguments.length > 1 ? (f.on(t, e), n) : f.on(t) } } }, t.forceX = function(t) { var n, e, r, i = ga(.1);

        function o(t) { for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vx += (r[o] - i.x) * e[o] * t }

        function a() { if (n) { var o, a = n.length; for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n) } } return "function" != typeof t && (t = ga(null == t ? 0 : +t)), o.initialize = function(t) { n = t, a() }, o.strength = function(t) { return arguments.length ? (i = "function" == typeof t ? t : ga(+t), a(), o) : i }, o.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ga(+n), a(), o) : t }, o }, t.forceY = function(t) { var n, e, r, i = ga(.1);

        function o(t) { for (var i, o = 0, a = n.length; o < a; ++o)(i = n[o]).vy += (r[o] - i.y) * e[o] * t }

        function a() { if (n) { var o, a = n.length; for (e = new Array(a), r = new Array(a), o = 0; o < a; ++o) e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n) } } return "function" != typeof t && (t = ga(null == t ? 0 : +t)), o.initialize = function(t) { n = t, a() }, o.strength = function(t) { return arguments.length ? (i = "function" == typeof t ? t : ga(+t), a(), o) : i }, o.y = function(n) { return arguments.length ? (t = "function" == typeof n ? n : ga(+n), a(), o) : t }, o }, t.formatDefaultLocale = Ga, t.formatLocale = Va, t.formatSpecifier = Oa, t.geoAlbers = el, t.geoAlbersUsa = function() { var t, n, e, r, i, o, a = el(),
            u = nl().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            c = nl().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            f = { point: function(t, n) { o = [t, n] } };

        function s(t) { var n = t[0],
                a = t[1]; return o = null, e.point(n, a), o || (r.point(n, a), o) || (i.point(n, a), o) }

        function l() { return t = n = null, s } return s.invert = function(t) { var n = a.scale(),
                e = a.translate(),
                r = (t[0] - e[0]) / n,
                i = (t[1] - e[1]) / n; return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t) }, s.stream = function(e) { return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)], i = r.length, t = { point: function(t, n) { for (var e = -1; ++e < i;) r[e].point(t, n) }, sphere: function() { for (var t = -1; ++t < i;) r[t].sphere() }, lineStart: function() { for (var t = -1; ++t < i;) r[t].lineStart() }, lineEnd: function() { for (var t = -1; ++t < i;) r[t].lineEnd() }, polygonStart: function() { for (var t = -1; ++t < i;) r[t].polygonStart() }, polygonEnd: function() { for (var t = -1; ++t < i;) r[t].polygonEnd() } }); var r, i }, s.precision = function(t) { return arguments.length ? (a.precision(t), u.precision(t), c.precision(t), l()) : a.precision() }, s.scale = function(t) { return arguments.length ? (a.scale(t), u.scale(.35 * t), c.scale(t), s.translate(a.translate())) : a.scale() }, s.translate = function(t) { if (!arguments.length) return a.translate(); var n = a.scale(),
                o = +t[0],
                s = +t[1]; return e = a.translate(t).clipExtent([
                [o - .455 * n, s - .238 * n],
                [o + .455 * n, s + .238 * n]
            ]).stream(f), r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([
                [o - .425 * n + nu, s + .12 * n + nu],
                [o - .214 * n - nu, s + .234 * n - nu]
            ]).stream(f), i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([
                [o - .214 * n + nu, s + .166 * n + nu],
                [o - .115 * n - nu, s + .234 * n - nu]
            ]).stream(f), l() }, s.fitExtent = function(t, n) { return Is(s, t, n) }, s.fitSize = function(t, n) { return Hs(s, t, n) }, s.fitWidth = function(t, n) { return js(s, t, n) }, s.fitHeight = function(t, n) { return Xs(s, t, n) }, s.scale(1070) }, t.geoArea = function(t) { return Uu.reset(), Cu(t, Ou), 2 * Uu }, t.geoAzimuthalEqualArea = function() { return Qs(ol).scale(124.75).clipAngle(179.999) }, t.geoAzimuthalEqualAreaRaw = ol, t.geoAzimuthalEquidistant = function() { return Qs(al).scale(79.4188).clipAngle(179.999) }, t.geoAzimuthalEquidistantRaw = al, t.geoBounds = function(t) { var n, e, r, i, o, a, u; if (Ju = Ku = -(Zu = Qu = 1 / 0), ic = [], Cu(t, Mc), e = ic.length) { for (ic.sort(zc), n = 1, o = [r = ic[0]]; n < e; ++n) Rc(r, (i = ic[n])[0]) || Rc(r, i[1]) ? (Pc(r[0], i[1]) > Pc(r[0], r[1]) && (r[1] = i[1]), Pc(i[0], r[1]) > Pc(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i); for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = Pc(r[1], i[0])) > a && (a = u, Zu = i[0], Ku = r[1]) } return ic = oc = null, Zu === 1 / 0 || Qu === 1 / 0 ? [
            [NaN, NaN],
            [NaN, NaN]
        ] : [
            [Zu, Qu],
            [Ku, Ju]
        ] }, t.geoCentroid = function(t) { ac = uc = cc = fc = sc = lc = hc = dc = pc = vc = gc = 0, Cu(t, Dc); var n = pc,
            e = vc,
            r = gc,
            i = n * n + e * e + r * r; return i < eu && (n = lc, e = hc, r = dc, uc < nu && (n = cc, e = fc, r = sc), (i = n * n + e * e + r * r) < eu) ? [NaN, NaN] : [lu(e, n) * uu, wu(r / bu(i)) * uu] }, t.geoCircle = function() { var t, n, e = Xc([0, 0]),
            r = Xc(90),
            i = Xc(6),
            o = { point: function(e, r) { t.push(e = n(e, r)), e[0] *= uu, e[1] *= uu } };

        function a() { var a = e.apply(this, arguments),
                u = r.apply(this, arguments) * cu,
                c = i.apply(this, arguments) * cu; return t = [], n = $c(-a[0] * cu, -a[1] * cu, 0).invert, Jc(o, u, c, 1), a = { type: "Polygon", coordinates: [t] }, t = n = null, a } return a.center = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Xc([+t[0], +t[1]]), a) : e }, a.radius = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Xc(+t), a) : r }, a.precision = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Xc(+t), a) : i }, a }, t.geoClipAntimeridian = df, t.geoClipCircle = pf, t.geoClipExtent = function() { var t, n, e, r = 0,
            i = 0,
            o = 960,
            a = 500; return e = { stream: function(e) { return t && n === e ? t : t = yf(r, i, o, a)(n = e) }, extent: function(u) { return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [
                    [r, i],
                    [o, a]
                ] } } }, t.geoClipRectangle = yf, t.geoConicConformal = function() { return Js(sl).scale(109.5).parallels([30, 30]) }, t.geoConicConformalRaw = sl, t.geoConicEqualArea = nl, t.geoConicEqualAreaRaw = tl, t.geoConicEquidistant = function() { return Js(hl).scale(131.154).center([0, 13.9389]) }, t.geoConicEquidistantRaw = hl, t.geoContains = function(t, n) { return (t && Cf.hasOwnProperty(t.type) ? Cf[t.type] : zf)(t, n) }, t.geoDistance = Ef, t.geoEqualEarth = function() { return Qs(_l).scale(177.158) }, t.geoEqualEarthRaw = _l, t.geoEquirectangular = function() { return Qs(ll).scale(152.63) }, t.geoEquirectangularRaw = ll, t.geoGnomonic = function() { return Qs(bl).scale(144.049).clipAngle(60) }, t.geoGnomonicRaw = bl, t.geoGraticule = Ff, t.geoGraticule10 = function() { return Ff()() }, t.geoIdentity = function() { var t, n, e, r, i, o, a, u = 1,
            c = 0,
            f = 0,
            s = 1,
            l = 1,
            h = 0,
            d = null,
            p = 1,
            v = 1,
            g = Bs({ point: function(t, n) { var e = b([t, n]);
                    this.stream.point(e[0], e[1]) } }),
            y = Yf;

        function _() { return p = u * s, v = u * l, o = a = null, b }

        function b(e) { var r = e[0] * p,
                i = e[1] * v; if (h) { var o = i * t - r * n;
                r = r * t + i * n, i = o } return [r + c, i + f] } return b.invert = function(e) { var r = e[0] - c,
                i = e[1] - f; if (h) { var o = i * t + r * n;
                r = r * t - i * n, i = o } return [r / p, i / v] }, b.stream = function(t) { return o && a === t ? o : o = g(y(a = t)) }, b.postclip = function(t) { return arguments.length ? (y = t, d = e = r = i = null, _()) : y }, b.clipExtent = function(t) { return arguments.length ? (y = null == t ? (d = e = r = i = null, Yf) : yf(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), _()) : null == d ? null : [
                [d, e],
                [r, i]
            ] }, b.scale = function(t) { return arguments.length ? (u = +t, _()) : u }, b.translate = function(t) { return arguments.length ? (c = +t[0], f = +t[1], _()) : [c, f] }, b.angle = function(e) { return arguments.length ? (n = yu(h = e % 360 * cu), t = hu(h), _()) : h * uu }, b.reflectX = function(t) { return arguments.length ? (s = t ? -1 : 1, _()) : s < 0 }, b.reflectY = function(t) { return arguments.length ? (l = t ? -1 : 1, _()) : l < 0 }, b.fitExtent = function(t, n) { return Is(b, t, n) }, b.fitSize = function(t, n) { return Hs(b, t, n) }, b.fitWidth = function(t, n) { return js(b, t, n) }, b.fitHeight = function(t, n) { return Xs(b, t, n) }, b }, t.geoInterpolate = function(t, n) { var e = t[0] * cu,
            r = t[1] * cu,
            i = n[0] * cu,
            o = n[1] * cu,
            a = hu(r),
            u = yu(r),
            c = hu(o),
            f = yu(o),
            s = a * hu(e),
            l = a * yu(e),
            h = c * hu(i),
            d = c * yu(i),
            p = 2 * wu(bu(Mu(o - r) + a * c * Mu(i - e))),
            v = yu(p),
            g = p ? function(t) { var n = yu(t *= p) / v,
                    e = yu(p - t) / v,
                    r = e * s + n * h,
                    i = e * l + n * d,
                    o = e * u + n * f; return [lu(i, r) * uu, lu(o, bu(r * r + i * i)) * uu] } : function() { return [e * uu, r * uu] }; return g.distance = p, g }, t.geoLength = Af, t.geoMercator = function() { return cl(ul).scale(961 / au) }, t.geoMercatorRaw = ul, t.geoNaturalEarth1 = function() { return Qs(ml).scale(175.295) }, t.geoNaturalEarth1Raw = ml, t.geoOrthographic = function() { return Qs(xl).scale(249.5).clipAngle(90 + nu) }, t.geoOrthographicRaw = xl, t.geoPath = function(t, n) { var e, r, i = 4.5;

        function o(t) { return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), Cu(t, e(r))), r.result() } return o.area = function(t) { return Cu(t, e($f)), $f.result() }, o.measure = function(t) { return Cu(t, e(Ds)), Ds.result() }, o.bounds = function(t) { return Cu(t, e(rs)), rs.result() }, o.centroid = function(t) { return Cu(t, e(ys)), ys.result() }, o.projection = function(n) { return arguments.length ? (e = null == n ? (t = null, Yf) : (t = n).stream, o) : t }, o.context = function(t) { return arguments.length ? (r = null == t ? (n = null, new Us) : new Ss(n = t), "function" != typeof i && r.pointRadius(i), o) : n }, o.pointRadius = function(t) { return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), o) : i }, o.projection(t).context(n) }, t.geoProjection = Qs, t.geoProjectionMutator = Ks, t.geoRotation = Kc, t.geoStereographic = function() { return Qs(wl).scale(250).clipAngle(142) }, t.geoStereographicRaw = wl, t.geoStream = Cu, t.geoTransform = function(t) { return { stream: Bs(t) } }, t.geoTransverseMercator = function() { var t = cl(Ml),
            n = t.center,
            e = t.rotate; return t.center = function(t) { return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]] }, t.rotate = function(t) { return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90] }, e([0, 0, 90]).scale(159.155) }, t.geoTransverseMercatorRaw = Ml, t.gray = function(t, n) { return new Bn(t, 0, 0, null == n ? 1 : n) }, t.hcl = Xn, t.hierarchy = kl, t.histogram = function() { var t = v,
            n = s,
            e = M;

        function r(r) { var o, a, u = r.length,
                c = new Array(u); for (o = 0; o < u; ++o) c[o] = t(r[o], o, r); var f = n(c),
                s = f[0],
                l = f[1],
                h = e(c, s, l);
            Array.isArray(h) || (h = w(s, l, h), h = g(Math.ceil(s / h) * h, l, h)); for (var d = h.length; h[0] <= s;) h.shift(), --d; for (; h[d - 1] > l;) h.pop(), --d; var p, v = new Array(d + 1); for (o = 0; o <= d; ++o)(p = v[o] = []).x0 = o > 0 ? h[o - 1] : s, p.x1 = o < d ? h[o] : l; for (o = 0; o < u; ++o) s <= (a = c[o]) && a <= l && v[i(h, a, 0, d)].push(r[o]); return v } return r.value = function(n) { return arguments.length ? (t = "function" == typeof n ? n : p(n), r) : t }, r.domain = function(t) { return arguments.length ? (n = "function" == typeof t ? t : p([t[0], t[1]]), r) : n }, r.thresholds = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? p(h.call(t)) : p(t), r) : e }, r }, t.hsl = Tn, t.html = pa, t.image = function(t, n) { return new Promise(function(e, r) { var i = new Image; for (var o in n) i[o] = n[o];
            i.onerror = r, i.onload = function() { e(i) }, i.src = t }) }, t.interpolate = Te, t.interpolateArray = function(t, n) { return (ye(n) ? ge : _e)(t, n) }, t.interpolateBasis = oe, t.interpolateBasisClosed = ae, t.interpolateBlues = Qg, t.interpolateBrBG = fg, t.interpolateBuGn = Sg, t.interpolateBuPu = Eg, t.interpolateCividis = function(t) { return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")" }, t.interpolateCool = sy, t.interpolateCubehelix = Ze, t.interpolateCubehelixDefault = cy, t.interpolateCubehelixLong = Qe, t.interpolateDate = be, t.interpolateDiscrete = function(t) { var n = t.length; return function(e) { return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))] } }, t.interpolateGnBu = Pg, t.interpolateGreens = Jg, t.interpolateGreys = ny, t.interpolateHcl = Ge, t.interpolateHclLong = $e, t.interpolateHsl = je, t.interpolateHslLong = Xe, t.interpolateHue = function(t, n) { var e = fe(+t, +n); return function(t) { var n = e(t); return n - 360 * Math.floor(n / 360) } }, t.interpolateInferno = _y, t.interpolateLab = function(t, n) { var e = le((t = On(t)).l, (n = On(n)).l),
            r = le(t.a, n.a),
            i = le(t.b, n.b),
            o = le(t.opacity, n.opacity); return function(n) { return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "" } }, t.interpolateMagma = yy, t.interpolateNumber = me, t.interpolateNumberArray = ge, t.interpolateObject = xe, t.interpolateOrRd = Rg, t.interpolateOranges = uy, t.interpolatePRGn = lg, t.interpolatePiYG = dg, t.interpolatePlasma = by, t.interpolatePuBu = Ug, t.interpolatePuBuGn = qg, t.interpolatePuOr = vg, t.interpolatePuRd = Bg, t.interpolatePurples = ry, t.interpolateRainbow = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t)); var n = Math.abs(t - .5); return ly.h = 360 * t - 100, ly.s = 1.5 - 1.5 * n, ly.l = .8 - .9 * n, ly + "" }, t.interpolateRdBu = yg, t.interpolateRdGy = bg, t.interpolateRdPu = Yg, t.interpolateRdYlBu = xg, t.interpolateRdYlGn = Mg, t.interpolateReds = oy, t.interpolateRgb = he, t.interpolateRgbBasis = pe, t.interpolateRgbBasisClosed = ve, t.interpolateRound = Ae, t.interpolateSinebow = function(t) { var n; return t = (.5 - t) * Math.PI, hy.r = 255 * (n = Math.sin(t)) * n, hy.g = 255 * (n = Math.sin(t + dy)) * n, hy.b = 255 * (n = Math.sin(t + py)) * n, hy + "" }, t.interpolateSpectral = Tg, t.interpolateString = Ne, t.interpolateTransformCss = qe, t.interpolateTransformSvg = Le, t.interpolateTurbo = function(t) { return t = Math.max(0, Math.min(1, t)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")" }, t.interpolateViridis = gy, t.interpolateWarm = fy, t.interpolateYlGn = Xg, t.interpolateYlGnBu = Hg, t.interpolateYlOrBr = Gg, t.interpolateYlOrRd = Wg, t.interpolateZoom = Ie, t.interrupt = Pr, t.interval = function(t, n, e) { var r = new lr,
            i = n; return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? fr() : +e, r.restart(function o(a) { a += i, r.restart(o, i += n, e), t(a) }, n, e), r) }, t.isoFormat = Rv, t.isoParse = Dv, t.json = function(t, n) { return fetch(t, n).then(la) }, t.keys = function(t) { var n = []; for (var e in t) n.push(e); return n }, t.lab = On, t.lch = function(t, n, e, r) { return 1 === arguments.length ? jn(t) : new Vn(e, n, t, null == r ? 1 : r) }, t.line = Hy, t.lineRadial = Qy, t.linkHorizontal = function() { return r_(i_) }, t.linkRadial = function() { var t = r_(a_); return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t }, t.linkVertical = function() { return r_(o_) }, t.local = qt, t.map = co, t.matcher = nt, t.max = T, t.mean = function(t, n) { var e, r = t.length,
            i = r,
            o = -1,
            a = 0; if (null == n)
            for (; ++o < r;) isNaN(e = u(t[o])) ? --i : a += e;
        else
            for (; ++o < r;) isNaN(e = u(n(t[o], o, t))) ? --i : a += e; if (i) return a / i }, t.median = function(t, e) { var r, i = t.length,
            o = -1,
            a = []; if (null == e)
            for (; ++o < i;) isNaN(r = u(t[o])) || a.push(r);
        else
            for (; ++o < i;) isNaN(r = u(e(t[o], o, t))) || a.push(r); return N(a.sort(n), .5) }, t.merge = A, t.min = S, t.mouse = Bt, t.namespace = W, t.namespaces = $, t.nest = function() { var t, n, e, r = [],
            i = [];

        function o(e, i, a, u) { if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e; for (var c, f, s, l = -1, h = e.length, d = r[i++], p = co(), v = a(); ++l < h;)(s = p.get(c = d(f = e[l]) + "")) ? s.push(f) : p.set(c, [f]); return p.each(function(t, n) { u(v, n, o(t, i, a, u)) }), v } return e = { object: function(t) { return o(t, 0, fo, so) }, map: function(t) { return o(t, 0, lo, ho) }, entries: function(t) { return function t(e, o) { if (++o > r.length) return e; var a, u = i[o - 1]; return null != n && o >= r.length ? a = e.entries() : (a = [], e.each(function(n, e) { a.push({ key: e, values: t(n, o) }) })), null != u ? a.sort(function(t, n) { return u(t.key, n.key) }) : a }(o(t, 0, lo, ho), 0) }, key: function(t) { return r.push(t), e }, sortKeys: function(t) { return i[r.length - 1] = t, e }, sortValues: function(n) { return t = n, e }, rollup: function(t) { return n = t, e } } }, t.now = fr, t.pack = function() { var t = null,
            n = 1,
            e = 1,
            r = Wl;

        function i(i) { return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(Kl(t)).eachAfter(Jl(r, .5)).eachBefore(th(1)) : i.eachBefore(Kl(Ql)).eachAfter(Jl(Wl, 1)).eachAfter(Jl(r, i.r / Math.min(n, e))).eachBefore(th(Math.min(n, e) / (2 * i.r))), i } return i.radius = function(n) { return arguments.length ? (t = Gl(n), i) : t }, i.size = function(t) { return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e] }, i.padding = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Zl(+t), i) : r }, i }, t.packEnclose = Dl, t.packSiblings = function(t) { return Vl(t), t }, t.pairs = function(t, n) { null == n && (n = a); for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = n(i, i = t[++e]); return o }, t.partition = function() { var t = 1,
            n = 1,
            e = 0,
            r = !1;

        function i(i) { var o = i.height + 1; return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) { return function(r) { r.children && eh(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n); var i = r.x0,
                        o = r.y0,
                        a = r.x1 - e,
                        u = r.y1 - e;
                    a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), r.x0 = i, r.y0 = o, r.x1 = a, r.y1 = u } }(n, o)), r && i.eachBefore(nh), i } return i.round = function(t) { return arguments.length ? (r = !!t, i) : r }, i.size = function(e) { return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n] }, i.padding = function(t) { return arguments.length ? (e = +t, i) : e }, i }, t.path = no, t.permute = function(t, n) { for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]]; return r }, t.pie = function() { var t = Vy,
            n = Xy,
            e = null,
            r = my(0),
            i = my(Py),
            o = my(0);

        function a(a) { var u, c, f, s, l, h = a.length,
                d = 0,
                p = new Array(h),
                v = new Array(h),
                g = +r.apply(this, arguments),
                y = Math.min(Py, Math.max(-Py, i.apply(this, arguments) - g)),
                _ = Math.min(Math.abs(y) / h, o.apply(this, arguments)),
                b = _ * (y < 0 ? -1 : 1); for (u = 0; u < h; ++u)(l = v[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l); for (null != n ? p.sort(function(t, e) { return n(v[t], v[e]) }) : null != e && p.sort(function(t, n) { return e(a[t], a[n]) }), u = 0, f = d ? (y - h * b) / d : 0; u < h; ++u, g = s) c = p[u], s = g + ((l = v[c]) > 0 ? l * f : 0) + b, v[c] = { data: a[c], index: u, value: l, startAngle: g, endAngle: s, padAngle: _ }; return v } return a.value = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(+n), a) : t }, a.sortValues = function(t) { return arguments.length ? (n = t, e = null, a) : n }, a.sort = function(t) { return arguments.length ? (e = t, n = null, a) : e }, a.startAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : my(+t), a) : r }, a.endAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : my(+t), a) : i }, a.padAngle = function(t) { return arguments.length ? (o = "function" == typeof t ? t : my(+t), a) : o }, a }, t.piecewise = function(t, n) { for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]); return function(t) { var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r))); return o[n](t - n) } }, t.pointRadial = Jy, t.polygonArea = function(t) { for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1]; return o / 2 }, t.polygonCentroid = function(t) { for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i;) n = u, u = t[r], c += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e; return [o / (c *= 3), a / c] }, t.polygonContains = function(t, n) { for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s), c = e, f = r; return s }, t.polygonHull = function(t) { if ((e = t.length) < 3) return null; var n, e, r = new Array(e),
            i = new Array(e); for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n]; for (r.sort(mh), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]]; var o = xh(r),
            a = xh(i),
            u = a[0] === o[0],
            c = a[a.length - 1] === o[o.length - 1],
            f = []; for (n = o.length - 1; n >= 0; --n) f.push(t[r[o[n]][2]]); for (n = +u; n < a.length - c; ++n) f.push(t[r[a[n]][2]]); return f }, t.polygonLength = function(t) { for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i;) n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], c += Math.sqrt(n * n + e * e); return c }, t.precisionFixed = $a, t.precisionPrefix = Wa, t.precisionRound = Za, t.quadtree = wa, t.quantile = N, t.quantize = function(t, n) { for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1)); return e }, t.radialArea = Ky, t.radialLine = Qy, t.randomBates = Sh, t.randomExponential = kh, t.randomIrwinHall = Ah, t.randomLogNormal = Th, t.randomNormal = Nh, t.randomUniform = Mh, t.range = g, t.rgb = _n, t.ribbon = function() { var t = eo,
            n = ro,
            e = io,
            r = oo,
            i = ao,
            o = null;

        function a() { var a, u = Wi.call(arguments),
                c = t.apply(this, u),
                f = n.apply(this, u),
                s = +e.apply(this, (u[0] = c, u)),
                l = r.apply(this, u) - Xi,
                h = i.apply(this, u) - Xi,
                d = s * Ii(l),
                p = s * Hi(l),
                v = +e.apply(this, (u[0] = f, u)),
                g = r.apply(this, u) - Xi,
                y = i.apply(this, u) - Xi; if (o || (o = a = no()), o.moveTo(d, p), o.arc(0, 0, s, l, h), l === g && h === y || (o.quadraticCurveTo(0, 0, v * Ii(g), v * Hi(g)), o.arc(0, 0, v, g, y)), o.quadraticCurveTo(0, 0, d, p), o.closePath(), a) return o = null, a + "" || null } return a.radius = function(t) { return arguments.length ? (e = "function" == typeof t ? t : Zi(+t), a) : e }, a.startAngle = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Zi(+t), a) : r }, a.endAngle = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Zi(+t), a) : i }, a.source = function(n) { return arguments.length ? (t = n, a) : t }, a.target = function(t) { return arguments.length ? (n = t, a) : n }, a.context = function(t) { return arguments.length ? (o = null == t ? null : t, a) : o }, a }, t.scaleBand = Lh, t.scaleDiverging = function t() { var n = $h($v()(Bh)); return n.copy = function() { return Vv(n, t()) }, Ch.apply(n, arguments) }, t.scaleDivergingLog = function t() { var n = ed($v()).domain([.1, 1, 10]); return n.copy = function() { return Vv(n, t()).base(n.base()) }, Ch.apply(n, arguments) }, t.scaleDivergingPow = Wv, t.scaleDivergingSqrt = function() { return Wv.apply(null, arguments).exponent(.5) }, t.scaleDivergingSymlog = function t() { var n = od($v()); return n.copy = function() { return Vv(n, t()).constant(n.constant()) }, Ch.apply(n, arguments) }, t.scaleIdentity = function t(n) { var e;

        function r(t) { return isNaN(t = +t) ? e : t } return r.invert = r, r.domain = r.range = function(t) { return arguments.length ? (n = zh.call(t, Uh), r) : n.slice() }, r.unknown = function(t) { return arguments.length ? (e = t, r) : e }, r.copy = function() { return t(n).unknown(e) }, n = arguments.length ? zh.call(n, Uh) : [0, 1], $h(r) }, t.scaleImplicit = Dh, t.scaleLinear = function t() { var n = Vh(Bh, Bh); return n.copy = function() { return jh(n, t()) }, Eh.apply(n, arguments), $h(n) }, t.scaleLog = function t() { var n = ed(Xh()).domain([1, 10]); return n.copy = function() { return jh(n, t()).base(n.base()) }, Eh.apply(n, arguments), n }, t.scaleOrdinal = qh, t.scalePoint = function() { return function t(n) { var e = n.copy; return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function() { return t(e()) }, n }(Lh.apply(null, arguments).paddingInner(1)) }, t.scalePow = sd, t.scaleQuantile = function t() { var e, r = [],
            o = [],
            a = [];

        function u() { var t = 0,
                n = Math.max(1, o.length); for (a = new Array(n - 1); ++t < n;) a[t - 1] = N(r, t / n); return c }

        function c(t) { return isNaN(t = +t) ? e : o[i(a, t)] } return c.invertExtent = function(t) { var n = o.indexOf(t); return n < 0 ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]] }, c.domain = function(t) { if (!arguments.length) return r.slice();
            r = []; for (var e, i = 0, o = t.length; i < o; ++i) null == (e = t[i]) || isNaN(e = +e) || r.push(e); return r.sort(n), u() }, c.range = function(t) { return arguments.length ? (o = Rh.call(t), u()) : o.slice() }, c.unknown = function(t) { return arguments.length ? (e = t, c) : e }, c.quantiles = function() { return a.slice() }, c.copy = function() { return t().domain(r).range(o).unknown(e) }, Eh.apply(c, arguments) }, t.scaleQuantize = function t() { var n, e = 0,
            r = 1,
            o = 1,
            a = [.5],
            u = [0, 1];

        function c(t) { return t <= t ? u[i(a, t, 0, o)] : n }

        function f() { var t = -1; for (a = new Array(o); ++t < o;) a[t] = ((t + 1) * r - (t - o) * e) / (o + 1); return c } return c.domain = function(t) { return arguments.length ? (e = +t[0], r = +t[1], f()) : [e, r] }, c.range = function(t) { return arguments.length ? (o = (u = Rh.call(t)).length - 1, f()) : u.slice() }, c.invertExtent = function(t) { var n = u.indexOf(t); return n < 0 ? [NaN, NaN] : n < 1 ? [e, a[0]] : n >= o ? [a[o - 1], r] : [a[n - 1], a[n]] }, c.unknown = function(t) { return arguments.length ? (n = t, c) : c }, c.thresholds = function() { return a.slice() }, c.copy = function() { return t().domain([e, r]).range(u).unknown(n) }, Eh.apply($h(c), arguments) }, t.scaleSequential = function t() { var n = $h(Xv()(Bh)); return n.copy = function() { return Vv(n, t()) }, Ch.apply(n, arguments) }, t.scaleSequentialLog = function t() { var n = ed(Xv()).domain([1, 10]); return n.copy = function() { return Vv(n, t()).base(n.base()) }, Ch.apply(n, arguments) }, t.scaleSequentialPow = Gv, t.scaleSequentialQuantile = function t() { var e = [],
            r = Bh;

        function o(t) { if (!isNaN(t = +t)) return r((i(e, t) - 1) / (e.length - 1)) } return o.domain = function(t) { if (!arguments.length) return e.slice();
            e = []; for (var r, i = 0, a = t.length; i < a; ++i) null == (r = t[i]) || isNaN(r = +r) || e.push(r); return e.sort(n), o }, o.interpolator = function(t) { return arguments.length ? (r = t, o) : r }, o.copy = function() { return t(r).domain(e) }, Ch.apply(o, arguments) }, t.scaleSequentialSqrt = function() { return Gv.apply(null, arguments).exponent(.5) }, t.scaleSequentialSymlog = function t() { var n = od(Xv()); return n.copy = function() { return Vv(n, t()).constant(n.constant()) }, Ch.apply(n, arguments) }, t.scaleSqrt = function() { return sd.apply(null, arguments).exponent(.5) }, t.scaleSymlog = function t() { var n = od(Xh()); return n.copy = function() { return jh(n, t()).constant(n.constant()) }, Eh.apply(n, arguments) }, t.scaleThreshold = function t() { var n, e = [.5],
            r = [0, 1],
            o = 1;

        function a(t) { return t <= t ? r[i(e, t, 0, o)] : n } return a.domain = function(t) { return arguments.length ? (e = Rh.call(t), o = Math.min(e.length, r.length - 1), a) : e.slice() }, a.range = function(t) { return arguments.length ? (r = Rh.call(t), o = Math.min(e.length, r.length - 1), a) : r.slice() }, a.invertExtent = function(t) { var n = r.indexOf(t); return [e[n - 1], e[n]] }, a.unknown = function(t) { return arguments.length ? (n = t, a) : n }, a.copy = function() { return t().domain(e).range(r).unknown(n) }, Eh.apply(a, arguments) }, t.scaleTime = function() { return Eh.apply(jv(Hd, Yd, Sd, Nd, wd, md, _d, pd, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) }, t.scaleUtc = function() { return Eh.apply(jv(pp, hp, Kd, Wd, Gd, Xd, _d, pd, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) }, t.scan = function(t, e) { if (r = t.length) { var r, i, o = 0,
                a = 0,
                u = t[a]; for (null == e && (e = n); ++o < r;)(e(i = t[o], u) < 0 || 0 !== e(u, u)) && (u = i, a = o); return 0 === e(u, u) ? a : void 0 } }, t.schemeAccent = Kv, t.schemeBlues = Zg, t.schemeBrBG = cg, t.schemeBuGn = Ag, t.schemeBuPu = kg, t.schemeCategory10 = Qv, t.schemeDark2 = Jv, t.schemeGnBu = Cg, t.schemeGreens = Kg, t.schemeGreys = ty, t.schemeOrRd = zg, t.schemeOranges = ay, t.schemePRGn = sg, t.schemePaired = tg, t.schemePastel1 = ng, t.schemePastel2 = eg, t.schemePiYG = hg, t.schemePuBu = Lg, t.schemePuBuGn = Dg, t.schemePuOr = pg, t.schemePuRd = Og, t.schemePurples = ey, t.schemeRdBu = gg, t.schemeRdGy = _g, t.schemeRdPu = Fg, t.schemeRdYlBu = mg, t.schemeRdYlGn = wg, t.schemeReds = iy, t.schemeSet1 = rg, t.schemeSet2 = ig, t.schemeSet3 = og, t.schemeSpectral = Ng, t.schemeTableau10 = ag, t.schemeYlGn = jg, t.schemeYlGnBu = Ig, t.schemeYlOrBr = Vg, t.schemeYlOrRd = $g, t.select = Rt, t.selectAll = function(t) { return "string" == typeof t ? new Pt([document.querySelectorAll(t)], [document.documentElement]) : new Pt([null == t ? [] : t], Ct) }, t.selection = zt, t.selector = K, t.selectorAll = tt, t.set = go, t.shuffle = function(t, n, e) { for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r; return t }, t.stack = function() { var t = my([]),
            n = rb,
            e = eb,
            r = ib;

        function i(i) { var o, a, u = t.apply(this, arguments),
                c = i.length,
                f = u.length,
                s = new Array(f); for (o = 0; o < f; ++o) { for (var l, h = u[o], d = s[o] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +r(i[p], h, p, i)], l.data = i[p];
                d.key = h } for (o = 0, a = n(s); o < f; ++o) s[a[o]].index = o; return e(s, a), s } return i.keys = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(t_.call(n)), i) : t }, i.value = function(t) { return arguments.length ? (r = "function" == typeof t ? t : my(+t), i) : r }, i.order = function(t) { return arguments.length ? (n = null == t ? rb : "function" == typeof t ? t : my(t_.call(t)), i) : n }, i.offset = function(t) { return arguments.length ? (e = null == t ? eb : t, i) : e }, i }, t.stackOffsetDiverging = function(t, n) { if ((u = t.length) > 0)
            for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c)
                for (o = a = 0, e = 0; e < u; ++e)(i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : (r[0] = 0, r[1] = i) }, t.stackOffsetExpand = function(t, n) { if ((r = t.length) > 0) { for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) { for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0; if (i)
                    for (e = 0; e < r; ++e) t[e][o][1] /= i }
            eb(t, n) } }, t.stackOffsetNone = eb, t.stackOffsetSilhouette = function(t, n) { if ((e = t.length) > 0) { for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) { for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2 }
            eb(t, n) } }, t.stackOffsetWiggle = function(t, n) { if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) { for (var e, r, i, o = 0, a = 1; a < r; ++a) { for (var u = 0, c = 0, f = 0; u < i; ++u) { for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) { var p = t[n[d]];
                        h += (p[a][1] || 0) - (p[a - 1][1] || 0) }
                    c += l, f += h * l }
                e[a - 1][1] += e[a - 1][0] = o, c && (o -= f / c) }
            e[a - 1][1] += e[a - 1][0] = o, eb(t, n) } }, t.stackOrderAppearance = ob, t.stackOrderAscending = ub, t.stackOrderDescending = function(t) { return ub(t).reverse() }, t.stackOrderInsideOut = function(t) { var n, e, r = t.length,
            i = t.map(cb),
            o = ob(t),
            a = 0,
            u = 0,
            c = [],
            f = []; for (n = 0; n < r; ++n) e = o[n], a < u ? (a += i[e], c.push(e)) : (u += i[e], f.push(e)); return f.reverse().concat(c) }, t.stackOrderNone = rb, t.stackOrderReverse = function(t) { return rb(t).reverse() }, t.stratify = function() { var t = ah,
            n = uh;

        function e(e) { var r, i, o, a, u, c, f, s = e.length,
                l = new Array(s),
                h = {}; for (i = 0; i < s; ++i) r = e[i], u = l[i] = new zl(r), null != (c = t(r, i, e)) && (c += "") && (h[f = rh + (u.id = c)] = f in h ? oh : u); for (i = 0; i < s; ++i)
                if (u = l[i], null != (c = n(e[i], i, e)) && (c += "")) { if (!(a = h[rh + c])) throw new Error("missing: " + c); if (a === oh) throw new Error("ambiguous: " + c);
                    a.children ? a.children.push(u) : a.children = [u], u.parent = a } else { if (o) throw new Error("multiple roots");
                    o = u }
            if (!o) throw new Error("no root"); if (o.parent = ih, o.eachBefore(function(t) { t.depth = t.parent.depth + 1, --s }).eachBefore(Pl), o.parent = null, s > 0) throw new Error("cycle"); return o } return e.id = function(n) { return arguments.length ? (t = $l(n), e) : t }, e.parentId = function(t) { return arguments.length ? (n = $l(t), e) : n }, e }, t.style = ft, t.sum = function(t, n) { var e, r = t.length,
            i = -1,
            o = 0; if (null == n)
            for (; ++i < r;)(e = +t[i]) && (o += e);
        else
            for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e); return o }, t.svg = va, t.symbol = function() { var t = my(u_),
            n = my(64),
            e = null;

        function r() { var r; if (e || (e = r = no()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), r) return e = null, r + "" || null } return r.type = function(n) { return arguments.length ? (t = "function" == typeof n ? n : my(n), r) : t }, r.size = function(t) { return arguments.length ? (n = "function" == typeof t ? t : my(+t), r) : n }, r.context = function(t) { return arguments.length ? (e = null == t ? null : t, r) : e }, r }, t.symbolCircle = u_, t.symbolCross = c_, t.symbolDiamond = l_, t.symbolSquare = g_, t.symbolStar = v_, t.symbolTriangle = __, t.symbolWye = w_, t.symbols = M_, t.text = ua, t.thresholdFreedmanDiaconis = function(t, e, r) { return t = d.call(t, u).sort(n), Math.ceil((r - e) / (2 * (N(t, .75) - N(t, .25)) * Math.pow(t.length, -1 / 3))) }, t.thresholdScott = function(t, n, e) { return Math.ceil((e - n) / (3.5 * f(t) * Math.pow(t.length, -1 / 3))) }, t.thresholdSturges = M, t.tickFormat = Gh, t.tickIncrement = x, t.tickStep = w, t.ticks = m, t.timeDay = Nd, t.timeDays = Td, t.timeFormatDefaultLocale = zv, t.timeFormatLocale = bp, t.timeFriday = zd, t.timeFridays = Bd, t.timeHour = wd, t.timeHours = Md, t.timeInterval = dd, t.timeMillisecond = pd, t.timeMilliseconds = vd, t.timeMinute = md, t.timeMinutes = xd, t.timeMonday = kd, t.timeMondays = qd, t.timeMonth = Yd, t.timeMonths = Id, t.timeSaturday = Rd, t.timeSaturdays = Fd, t.timeSecond = _d, t.timeSeconds = bd, t.timeSunday = Sd, t.timeSundays = Dd, t.timeThursday = Pd, t.timeThursdays = Od, t.timeTuesday = Ed, t.timeTuesdays = Ld, t.timeWednesday = Cd, t.timeWednesdays = Ud, t.timeWeek = Sd, t.timeWeeks = Dd, t.timeYear = Hd, t.timeYears = jd, t.timeout = yr, t.timer = hr, t.timerFlush = dr, t.touch = Ft, t.touches = function(t, n) { null == n && (n = Ut().touches); for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Ot(t, n[e]); return i }, t.transition = Or, t.transpose = k, t.tree = function() { var t = ch,
            n = 1,
            e = 1,
            r = null;

        function i(i) { var c = function(t) { for (var n, e, r, i, o, a = new dh(t, 0), u = [a]; n = u.pop();)
                    if (r = n._.children)
                        for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) u.push(e = n.children[i] = new dh(r[i], i)), e.parent = n;
                return (a.parent = new dh(null, 0)).children = [a], a }(i); if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(a), r) i.eachBefore(u);
            else { var f = i,
                    s = i,
                    l = i;
                i.eachBefore(function(t) { t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t) }); var h = f === s ? 1 : t(f, s) / 2,
                    d = h - f.x,
                    p = n / (s.x + h + d),
                    v = e / (l.depth || 1);
                i.eachBefore(function(t) { t.x = (t.x + d) * p, t.y = t.depth * v }) } return i }

        function o(n) { var e = n.children,
                r = n.parent.children,
                i = n.i ? r[n.i - 1] : null; if (e) {! function(t) { for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c) }(n); var o = (e[0].z + e[e.length - 1].z) / 2;
                i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o } else i && (n.z = i.z + t(n._, i._));
            n.parent.A = function(n, e, r) { if (e) { for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = sh(u), o = fh(o), u && o;) c = fh(c), (a = sh(a)).a = n, (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (lh(hh(u, n, r), n, i), f += i, s += i), l += u.m, f += o.m, h += c.m, s += a.m;
                    u && !sh(a) && (a.t = u, a.m += l - s), o && !fh(c) && (c.t = o, c.m += f - h, r = n) } return r }(n, i, n.parent.A || r[0]) }

        function a(t) { t._.x = t.z + t.parent.m, t.m += t.parent.m }

        function u(t) { t.x *= n, t.y = t.depth * e } return i.separation = function(n) { return arguments.length ? (t = n, i) : t }, i.size = function(t) { return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e] }, i.nodeSize = function(t) { return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null }, i }, t.treemap = function() { var t = yh,
            n = !1,
            e = 1,
            r = 1,
            i = [0],
            o = Wl,
            a = Wl,
            u = Wl,
            c = Wl,
            f = Wl;

        function s(t) { return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(nh), t }

        function l(n) { var e = i[n.depth],
                r = n.x0 + e,
                s = n.y0 + e,
                l = n.x1 - e,
                h = n.y1 - e;
            l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += f(n) - e, s += a(n) - e, (l -= u(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h)) } return s.round = function(t) { return arguments.length ? (n = !!t, s) : n }, s.size = function(t) { return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r] }, s.tile = function(n) { return arguments.length ? (t = $l(n), s) : t }, s.padding = function(t) { return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner() }, s.paddingInner = function(t) { return arguments.length ? (o = "function" == typeof t ? t : Zl(+t), s) : o }, s.paddingOuter = function(t) { return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop() }, s.paddingTop = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Zl(+t), s) : a }, s.paddingRight = function(t) { return arguments.length ? (u = "function" == typeof t ? t : Zl(+t), s) : u }, s.paddingBottom = function(t) { return arguments.length ? (c = "function" == typeof t ? t : Zl(+t), s) : c }, s.paddingLeft = function(t) { return arguments.length ? (f = "function" == typeof t ? t : Zl(+t), s) : f }, s }, t.treemapBinary = function(t, n, e, r, i) { var o, a, u = t.children,
            c = u.length,
            f = new Array(c + 1); for (f[0] = a = o = 0; o < c; ++o) f[o + 1] = a += u[o].value;! function t(n, e, r, i, o, a, c) { if (n >= e - 1) { var s = u[n]; return s.x0 = i, s.y0 = o, s.x1 = a, void(s.y1 = c) } for (var l = f[n], h = r / 2 + l, d = n + 1, p = e - 1; d < p;) { var v = d + p >>> 1;
                f[v] < h ? d = v + 1 : p = v }
            h - f[d - 1] < f[d] - h && n + 1 < d && --d; var g = f[d] - l,
                y = r - g; if (a - i > c - o) { var _ = (i * y + a * g) / r;
                t(n, d, g, i, o, _, c), t(d, e, y, _, o, a, c) } else { var b = (o * y + c * g) / r;
                t(n, d, g, i, o, a, b), t(d, e, y, i, b, a, c) } }(0, c, t.value, n, e, r, i) }, t.treemapDice = eh, t.treemapResquarify = _h, t.treemapSlice = ph, t.treemapSliceDice = function(t, n, e, r, i) {
        (1 & t.depth ? ph : eh)(t, n, e, r, i) }, t.treemapSquarify = yh, t.tsv = sa, t.tsvFormat = Ko, t.tsvFormatBody = Jo, t.tsvFormatRow = na, t.tsvFormatRows = ta, t.tsvFormatValue = ea, t.tsvParse = Zo, t.tsvParseRows = Qo, t.utcDay = Wd, t.utcDays = Zd, t.utcFriday = rp, t.utcFridays = sp, t.utcHour = Gd, t.utcHours = $d, t.utcMillisecond = pd, t.utcMilliseconds = vd, t.utcMinute = Xd, t.utcMinutes = Vd, t.utcMonday = Jd, t.utcMondays = ap, t.utcMonth = hp, t.utcMonths = dp, t.utcSaturday = ip, t.utcSaturdays = lp, t.utcSecond = _d, t.utcSeconds = bd, t.utcSunday = Kd, t.utcSundays = op, t.utcThursday = ep, t.utcThursdays = fp, t.utcTuesday = tp, t.utcTuesdays = up, t.utcWednesday = np, t.utcWednesdays = cp, t.utcWeek = Kd, t.utcWeeks = op, t.utcYear = pp, t.utcYears = vp, t.values = function(t) { var n = []; for (var e in t) n.push(t[e]); return n }, t.variance = c, t.version = "5.16.0", t.voronoi = function() { var t = sb,
            n = lb,
            e = null;

        function r(r) { return new Vb(r.map(function(e, i) { var o = [Math.round(t(e, i, r) / Ib) * Ib, Math.round(n(e, i, r) / Ib) * Ib]; return o.index = i, o.data = e, o }), e) } return r.polygons = function(t) { return r(t).polygons() }, r.links = function(t) { return r(t).links() }, r.triangles = function(t) { return r(t).triangles() }, r.x = function(n) { return arguments.length ? (t = "function" == typeof n ? n : fb(+n), r) : t }, r.y = function(t) { return arguments.length ? (n = "function" == typeof t ? t : fb(+t), r) : n }, r.extent = function(t) { return arguments.length ? (e = null == t ? null : [
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ], r) : e && [
                [e[0][0], e[0][1]],
                [e[1][0], e[1][1]]
            ] }, r.size = function(t) { return arguments.length ? (e = null == t ? null : [
                [0, 0],
                [+t[0], +t[1]]
            ], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]] }, r }, t.window = ct, t.xml = da, t.zip = function() { return k(arguments) }, t.zoom = function() { var n, e, r = tm,
            i = nm,
            o = om,
            a = rm,
            u = im,
            c = [0, 1 / 0],
            f = [
                [-1 / 0, -1 / 0],
                [1 / 0, 1 / 0]
            ],
            s = 250,
            l = Ie,
            h = I("start", "zoom", "end"),
            d = 500,
            p = 150,
            v = 0;

        function g(t) { t.property("__zoom", em).on("wheel.zoom", M).on("mousedown.zoom", N).on("dblclick.zoom", T).filter(u).on("touchstart.zoom", A).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", k).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)") }

        function y(t, n) { return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new Wb(n, t.x, t.y) }

        function _(t, n, e) { var r = n[0] - e[0] * t.k,
                i = n[1] - e[1] * t.k; return r === t.x && i === t.y ? t : new Wb(t.k, r, i) }

        function b(t) { return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2] }

        function m(t, n, e) { t.on("start.zoom", function() { x(this, arguments).start() }).on("interrupt.zoom end.zoom", function() { x(this, arguments).end() }).tween("zoom", function() { var t = this,
                    r = arguments,
                    o = x(t, r),
                    a = i.apply(t, r),
                    u = null == e ? b(a) : "function" == typeof e ? e.apply(t, r) : e,
                    c = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                    f = t.__zoom,
                    s = "function" == typeof n ? n.apply(t, r) : n,
                    h = l(f.invert(u).concat(c / f.k), s.invert(u).concat(c / s.k)); return function(t) { if (1 === t) t = s;
                    else { var n = h(t),
                            e = c / n[2];
                        t = new Wb(e, u[0] - n[0] * e, u[1] - n[1] * e) }
                    o.zoom(null, t) } }) }

        function x(t, n, e) { return !e && t.__zooming || new w(t, n) }

        function w(t, n) { this.that = t, this.args = n, this.active = 0, this.extent = i.apply(t, n), this.taps = 0 }

        function M() { if (r.apply(this, arguments)) { var t = x(this, arguments),
                    n = this.__zoom,
                    e = Math.max(c[0], Math.min(c[1], n.k * Math.pow(2, a.apply(this, arguments)))),
                    i = Bt(this); if (t.wheel) t.mouse[0][0] === i[0] && t.mouse[0][1] === i[1] || (t.mouse[1] = n.invert(t.mouse[0] = i)), clearTimeout(t.wheel);
                else { if (n.k === e) return;
                    t.mouse = [i, n.invert(i)], Pr(this), t.start() }
                Jb(), t.wheel = setTimeout(function() { t.wheel = null, t.end() }, p), t.zoom("mouse", o(_(y(n, e), t.mouse[0], t.mouse[1]), t.extent, f)) } }

        function N() { if (!e && r.apply(this, arguments)) { var n = x(this, arguments, !0),
                    i = Rt(t.event.view).on("mousemove.zoom", function() { if (Jb(), !n.moved) { var e = t.event.clientX - u,
                                r = t.event.clientY - c;
                            n.moved = e * e + r * r > v }
                        n.zoom("mouse", o(_(n.that.__zoom, n.mouse[0] = Bt(n.that), n.mouse[1]), n.extent, f)) }, !0).on("mouseup.zoom", function() { i.on("mousemove.zoom mouseup.zoom", null), jt(t.event.view, n.moved), Jb(), n.end() }, !0),
                    a = Bt(this),
                    u = t.event.clientX,
                    c = t.event.clientY;
                Ht(t.event.view), Kb(), n.mouse = [a, this.__zoom.invert(a)], Pr(this), n.start() } }

        function T() { if (r.apply(this, arguments)) { var n = this.__zoom,
                    e = Bt(this),
                    a = n.invert(e),
                    u = n.k * (t.event.shiftKey ? .5 : 2),
                    c = o(_(y(n, u), e, a), i.apply(this, arguments), f);
                Jb(), s > 0 ? Rt(this).transition().duration(s).call(m, c, e) : Rt(this).call(g.transform, c) } }

        function A() { if (r.apply(this, arguments)) { var e, i, o, a, u = t.event.touches,
                    c = u.length,
                    f = x(this, arguments, t.event.changedTouches.length === c); for (Kb(), i = 0; i < c; ++i) a = [a = Ft(this, u, (o = u[i]).identifier), this.__zoom.invert(a), o.identifier], f.touch0 ? f.touch1 || f.touch0[2] === a[2] || (f.touch1 = a, f.taps = 0) : (f.touch0 = a, e = !0, f.taps = 1 + !!n);
                n && (n = clearTimeout(n)), e && (f.taps < 2 && (n = setTimeout(function() { n = null }, d)), Pr(this), f.start()) } }

        function S() { if (this.__zooming) { var e, r, i, a, u = x(this, arguments),
                    c = t.event.changedTouches,
                    s = c.length; for (Jb(), n && (n = clearTimeout(n)), u.taps = 0, e = 0; e < s; ++e) i = Ft(this, c, (r = c[e]).identifier), u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i); if (r = u.that.__zoom, u.touch1) { var l = u.touch0[0],
                        h = u.touch0[1],
                        d = u.touch1[0],
                        p = u.touch1[1],
                        v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v,
                        g = (g = p[0] - h[0]) * g + (g = p[1] - h[1]) * g;
                    r = y(r, Math.sqrt(v / g)), i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2] } else { if (!u.touch0) return;
                    i = u.touch0[0], a = u.touch0[1] }
                u.zoom("touch", o(_(r, i, a), u.extent, f)) } }

        function k() { if (this.__zooming) { var n, r, i = x(this, arguments),
                    o = t.event.changedTouches,
                    a = o.length; for (Kb(), e && clearTimeout(e), e = setTimeout(function() { e = null }, d), n = 0; n < a; ++n) r = o[n], i.touch0 && i.touch0[2] === r.identifier ? delete i.touch0 : i.touch1 && i.touch1[2] === r.identifier && delete i.touch1; if (i.touch1 && !i.touch0 && (i.touch0 = i.touch1, delete i.touch1), i.touch0) i.touch0[1] = this.__zoom.invert(i.touch0[0]);
                else if (i.end(), 2 === i.taps) { var u = Rt(this).on("dblclick.zoom");
                    u && u.apply(this, arguments) } } } return g.transform = function(t, n, e) { var r = t.selection ? t.selection() : t;
            r.property("__zoom", em), t !== r ? m(t, n, e) : r.interrupt().each(function() { x(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end() }) }, g.scaleBy = function(t, n, e) { g.scaleTo(t, function() { var t = this.__zoom.k,
                    e = "function" == typeof n ? n.apply(this, arguments) : n; return t * e }, e) }, g.scaleTo = function(t, n, e) { g.transform(t, function() { var t = i.apply(this, arguments),
                    r = this.__zoom,
                    a = null == e ? b(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                    u = r.invert(a),
                    c = "function" == typeof n ? n.apply(this, arguments) : n; return o(_(y(r, c), a, u), t, f) }, e) }, g.translateBy = function(t, n, e) { g.transform(t, function() { return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f) }) }, g.translateTo = function(t, n, e, r) { g.transform(t, function() { var t = i.apply(this, arguments),
                    a = this.__zoom,
                    u = null == r ? b(t) : "function" == typeof r ? r.apply(this, arguments) : r; return o(Zb.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f) }, r) }, w.prototype = { start: function() { return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this }, zoom: function(t, n) { return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this }, end: function() { return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this }, emit: function(t) { kt(new $b(g, t, this.that.__zoom), h.apply, h, [t, this.that, this.args]) } }, g.wheelDelta = function(t) { return arguments.length ? (a = "function" == typeof t ? t : Gb(+t), g) : a }, g.filter = function(t) { return arguments.length ? (r = "function" == typeof t ? t : Gb(!!t), g) : r }, g.touchable = function(t) { return arguments.length ? (u = "function" == typeof t ? t : Gb(!!t), g) : u }, g.extent = function(t) { return arguments.length ? (i = "function" == typeof t ? t : Gb([
                [+t[0][0], +t[0][1]],
                [+t[1][0], +t[1][1]]
            ]), g) : i }, g.scaleExtent = function(t) { return arguments.length ? (c[0] = +t[0], c[1] = +t[1], g) : [c[0], c[1]] }, g.translateExtent = function(t) { return arguments.length ? (f[0][0] = +t[0][0], f[1][0] = +t[1][0], f[0][1] = +t[0][1], f[1][1] = +t[1][1], g) : [
                [f[0][0], f[0][1]],
                [f[1][0], f[1][1]]
            ] }, g.constrain = function(t) { return arguments.length ? (o = t, g) : o }, g.duration = function(t) { return arguments.length ? (s = +t, g) : s }, g.interpolate = function(t) { return arguments.length ? (l = t, g) : l }, g.on = function() { var t = h.on.apply(h, arguments); return t === h ? g : t }, g.clickDistance = function(t) { return arguments.length ? (v = (t = +t) * t, g) : Math.sqrt(v) }, g }, t.zoomIdentity = Zb, t.zoomTransform = Qb, Object.defineProperty(t, "__esModule", { value: !0 }) });
! function(t, e) {
    if ("function" == typeof define && define.amd) define(["d3"], e);
    else if ("object" == typeof module && module.exports) {
        var n = require("d3");
        module.exports = e(n)
    } else t.d3.tip = e(t.d3)
}(this, function(t) {
    return function() {
        function e(t) { b = d(t), C = b.createSVGPoint(), document.body.appendChild(T) }

        function n() { return "n" }

        function r() { return [0, 0] }

        function o() { return " " }

        function l() { var t = h(); return { top: t.n.y - T.offsetHeight, left: t.n.x - T.offsetWidth / 2 } }

        function i() { var t = h(); return { top: t.s.y, left: t.s.x - T.offsetWidth / 2 } }

        function f() { var t = h(); return { top: t.e.y - T.offsetHeight / 2, left: t.e.x } }

        function u() { var t = h(); return { top: t.w.y - T.offsetHeight / 2, left: t.w.x - T.offsetWidth } }

        function s() { var t = h(); return { top: t.nw.y - T.offsetHeight, left: t.nw.x - T.offsetWidth } }

        function a() { var t = h(); return { top: t.ne.y - T.offsetHeight, left: t.ne.x } }

        function c() { var t = h(); return { top: t.sw.y, left: t.sw.x - T.offsetWidth } }

        function p() { var t = h(); return { top: t.se.y, left: t.e.x } }

        function y() { var e = t.select(document.createElement("div")); return e.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), e.node() }

        function d(t) { return t = t.node(), "svg" === t.tagName.toLowerCase() ? t : t.ownerSVGElement }

        function m() { return null === T && (T = y(), document.body.appendChild(T)), t.select(T) }

        function h() {
            for (var e = E || t.event.target;
                "undefined" == typeof e.getScreenCTM && "undefined" === e.parentNode;) e = e.parentNode;
            var n = {},
                r = e.getScreenCTM(),
                o = e.getBBox(),
                l = o.width,
                i = o.height,
                f = o.x,
                u = o.y;
            return C.x = f, C.y = u, n.nw = C.matrixTransform(r), C.x += l, n.ne = C.matrixTransform(r), C.y += i, n.se = C.matrixTransform(r), C.x -= l, n.sw = C.matrixTransform(r), C.y -= i / 2, n.w = C.matrixTransform(r), C.x += l, n.e = C.matrixTransform(r), C.x -= l / 2, C.y -= i / 2, n.n = C.matrixTransform(r), C.y += i, n.s = C.matrixTransform(r), n
        }

        function x(t) { return "function" == typeof t ? t : function() { return t } }
        var v = n,
            g = r,
            w = o,
            T = y(),
            b = null,
            C = null,
            E = null;
        e.show = function() {
            var t = Array.prototype.slice.call(arguments);
            t[t.length - 1] instanceof SVGElement && (E = t.pop());
            var n, r = w.apply(this, t),
                o = g.apply(this, t),
                l = v.apply(this, t),
                i = m(),
                f = S.length,
                u = document.documentElement.scrollTop || document.body.scrollTop,
                s = document.documentElement.scrollLeft || document.body.scrollLeft;
            for (i.html(r).style("opacity", 1).style("pointer-events", "all"); f--;) i.classed(S[f], !1);
            return n = H.get(l).apply(this), i.classed(l, !0).style("top", n.top + o[0] + u + "px").style("left", n.left + o[1] + s + "px"), e
        }, e.hide = function() { var t = m(); return t.style("opacity", 0).style("pointer-events", "none"), e }, e.attr = function(n, r) { if (arguments.length < 2 && "string" == typeof n) return m().attr(n); var o = Array.prototype.slice.call(arguments); return t.selection.prototype.attr.apply(m(), o), e }, e.style = function(n, r) { if (arguments.length < 2 && "string" == typeof n) return m().style(n); var o = Array.prototype.slice.call(arguments); return t.selection.prototype.style.apply(m(), o), e }, e.direction = function(t) { return arguments.length ? (v = null == t ? t : x(t), e) : v }, e.offset = function(t) { return arguments.length ? (g = null == t ? t : x(t), e) : g }, e.html = function(t) { return arguments.length ? (w = null == t ? t : x(t), e) : w }, e.destroy = function() { return T && (m().remove(), T = null), e };
        var H = t.map({ n: l, s: i, e: f, w: u, nw: s, ne: a, sw: c, se: p }),
            S = H.keys();
        return e
    }
});

var graph_data = {
    nodes: new Map(),
    notes: {},
    current_node: null,
    root_node: null,
    current_note: null,
    current_depth: 0,
    auto_inc_id: 0,
    note_auto_id: 0,
    version: 0.1,
    name: null,
    id: null,
    url: null,
    clipboard: null,
    deleteCurrentNode() {
        nodes = [...this.nodes.values()]
        this.deleteNode(this.current_node, nodes)
    },
    copyCurrentNode() {
        this.clipboard = this.stratify(this.current_node, false)
    },
    pasteIntoCurrentNode() {
        _nodes = new Map()
        try {
            // makes hierarchial jason graph to tabular form
            tmp_arr = destratify(this.clipboard, this.current_node, this.auto_inc_id)
            this.auto_inc_id += tmp_arr.length
                // saves tabular data in a temporary Map object (Dictionary)
            tmp_arr.forEach(node => {
                _nodes.set(node.id, node)
            });

        } catch (error) {
            console.log("there is an error in pasting")
            return false;
        }
        this.nodes = new Map([...this.nodes, ..._nodes])
    },
    deleteNode(parent, nodes) {
        nodes.forEach((node, index) => {
            if (node.parent == parent) {
                delete nodes[index]
                this.deleteNode(node, nodes)
            }
        });
        this.nodes.delete(parent.id)
    },

    addChildTo(node, parent = null, data = null) {
        // adds new node to nodes repo, increases autonumber, 
        //  and makes currnt_node pointer to point to the newly created node
        if (this.current_note == null) {
            window.alert("no note is specified, please select some text and specify it as your current note")
            return;
        }

        if (data == null) {
            data = { note_id: this.current_note }
        }
        if (typeof node === "string") {

            if (this.nodes.size == 0 || // there is no other node (creating root node)
                this.nodes.has(parent.id) // or check if parent is present
            ) {
                new_node = {
                    id: this.auto_inc_id,
                    name: node,
                    parent: parent
                }
                new_node = Object.assign(new_node, data) // add additional data to new node
                this.nodes.set(this.auto_inc_id++, new_node) // add new node to our node repo
                this.current_node = new_node;
                return new_node;
            } else {
                throw "Error: parent id not found";
            }

        } else {
            throw "Error: add child from object Not implemented yet node must be a string";

        }

    },

    addChild(node) { // adds a child to the current node

        if (this.current_node !== null) {
            this.addChildTo(node, this.current_node);
            this.current_depth++;
        } else if (this.nodes.size == 0) {
            this.root_node = this.addChildTo(node, null)
            this.current_depth = 0;
        } else {
            // there is no node in our repo so create first one
            throw "Error: there is no active node, however nodes' repo is not empty"
        }
    },

    addSibling(node) { // adds a child to the parent of current node
        if (this.current_node !== null) {
            if (this.current_node.parent !== null) {
                this.addChildTo(node, this.current_node.parent);
            }
        } else {
            this.addChild(node);
        }

    },
    addUncle(node) { // adds a child to the grandparent of current node
        if (this.current_node !== null) {
            if (this.current_node.parent !== null) {
                if (this.current_node.parent.parent !== null) {
                    this.addChildTo(node, this.current_node.parent.parent);
                }
            }
        } else {
            this.addChild(node);
        }

    },
    addNote(txt_note) {
        this.notes[this.note_auto_id] = txt_note
        return this.note_auto_id++
    },
    changeCurrentNote(note_id) {
        this.current_note = note_id
    },
    getCurrentNote() {
        return this.notes[this.current_note]
    },
    getNote(id) {
        return this.notes[id]
    },
    getNotes() {
        return this.notes
    },
    setNotes(notes) {
        this.notes = notes
    },
    stratify(parent = null, copy_id = true) {
        nodes = [...this.nodes.values()]
        if (parent == null) {
            root_id = Math.min(...this.nodes.keys())
            parent = this.nodes.get(root_id)
        }
        return stratify(parent, nodes, copy_id) //parent is null so it returns all hierarchy including root
    },
    setData(json_graph) {
        let _nodes = new Map()
        try {
            // makes hierarchial jason graph to tabular form
            tmp_arr = destratify(json_graph, null)

            // saves tabular data in a temporary Map object (Dictionary)
            tmp_arr.forEach(node => {
                _nodes.set(node.id, node)
            });
        } catch (error) {
            return false;
        }

        this.eraseData();
        delete this.current_node
            // Store temporary generated Map        
        this.nodes = _nodes;
        // set root node
        root_id = Math.min(...this.nodes.keys())
        this.root_node = this.nodes.get(root_id)
        this.changeCurrentNode(root_id)
        this.auto_inc_id = Math.max(...this.nodes.keys()) + 1
        return true;
    },
    getJsonStr() {
        return JSON.stringify(this.stratify());
    },
    eraseData() {
        this.nodes.clear();
    },
    changeCurrentNode(id) {
        this.current_node = this.nodes.get(id);
    },
    getActiveNode() {
        return this.current_node;
    },
    isCompatible(version) {
        return (version == this.version) ? true : false;
    }

}


function stratify(parent, nodes, copy_id = true) {
    const new_node = {
        name: parent.name,
        note_id: parent.note_id,
        children: new Array()
    }
    if (copy_id) new_node.id = parent.id
    nodes.forEach((node, index) => {
        if (node.parent == parent) {
            delete nodes[index]
            new_node.children.push(stratify(node, nodes, copy_id))
        }
    });
    return new_node
}



function destratify(node, parent = null, base_id = null) {
    let child_arr = []
    let cur_obj = {
        id: base_id ? base_id++ : node.id,
        name: node.name,
        parent: parent,
        note_id: node.note_id
    }
    node.children.forEach(child => {
        this_node_childs = destratify(child, cur_obj, base_id)
        if (base_id != null) {
            base_id += this_node_childs.length
        }

        child_arr = child_arr.concat(this_node_childs)

    });
    child_arr.push(cur_obj)
    return child_arr;
}
var graph_data_copy = graph_data;
(function() {
    var $doc, dragging, ghost;

    dragging = false;

    ghost = null;

    $doc = $(document);

    $(".slider").on("mousedown", function(e) {
        var offsetX, width;
        e.preventDefault();
        dragging = true;
        width = $(".slider-content").width();
        offsetX = $(".slider-content").offset().left;
        ghost = $("<div/>", {
            class: "ghostSlider",
            css: {
                left: $(".properties").offset().left - offsetX
            }
        }).

        appendTo($(".slider-content"));
        $(".size").text(parseInt($(".properties").width()) + "px").fadeIn("fast");
        $doc.on("mousemove", function(ev) {
            dragging = true;
            ghost.css({
                left: ev.pageX - offsetX
            });

            return $(".size").text(parseInt(width - ev.pageX + offsetX) + "px");
        });
        return $doc.on("mouseup", function(ev) {
            e.preventDefault();
            if (dragging) {
                $doc.off("mousemove mouseup");
                $(".properties").css({
                    "flex": "0 0 " + (width - ghost.offset().left + offsetX) + "px"
                });

                ghost.remove();
                dragging = false;
                return $(".size").fadeOut("slow");
            }
        });
    });

}).call(this);


function autoBox(zoom) {
    // document.body.appendChild(this);
    // $("#chart").appendChild(this);
    let groupElement = document.querySelector('#svg_canvas');
    const {
        x,
        y,
        width,
        height
    } = groupElement.getBBox();
    //document.body.removeChild(this);
    return [x - 100, y - 100, width * zoom, height * zoom];
}

// var data = d3.hierarchy(data)
// var radius = 150
// var width = (data.height * radius)
// width = document.body.clientWidth
// var width = (data.height * radius)

var radial_tree = {
    curr_selection: null,
    zoom: 10,
    radius: 100,
    transform_attr: d3.zoomIdentity,
    selected_node_id: null,
    refresh() {
        this.draw(this.data)
    },
    changeZoom(zoom) {
        // changes the zooming seperately from the d3.js zooming behaviour and is specific to this view
        // and not shared between views
        this.zoom = zoom
        svg = d3.select('#svg_canvas');
        svg.attr("viewBox", autoBox(this.zoom / 10))
    },
    selectNode(d, _this = null) {
        // make previously selected node as black (unselected)
        if (_this == null) _this = this
        if (this.curr_selection != null) {
            this.curr_selection.attr('class', 'black_text')
        }
        txt = d3.select(_this)
        txt.attr('class', "red_text")
        the_id = d.data.id
        graph_data.changeCurrentNode(the_id)
        test = `#${the_id}`
        this.curr_selection = txt
        this.selected_node_id = d.data.id
    },

    hilightNode(node_id) {
        node = d3.select(`#node_${node_id}`)
        this.selectNode(node.datum(), node.node())
    },
    draw(hierarchy_data) {
        _this = this
        this.data = hierarchy_data; //save data for later use and for refresh
        tree = d3.tree()
            .size([2 * Math.PI, this.radius * 10])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)
        const root = tree(hierarchy_data);
        var svg = d3.select('#chart').select("svg")
            .attr("id", "svg_canvas")
            .call(d3.zoom().on("zoom", function() {
                radial_tree.transform_attr = d3.zoomTransform(this);
                svg.select("g").attr("transform", radial_tree.transform_attr)
            }));

        var g = svg.select("g");
        g.selectAll("g").remove()
        g.append("g")
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5)
            .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", d3.linkRadial()
                .angle(d => d.x)
                .radius(d => d.y));

        g.append("g")
            .selectAll("circle")
            .data(root.descendants())
            .join("circle")
            .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90})
            translate(${d.y},0)
        `)
            .attr("fill", d => d.children ? "#555" : "#999")
            .attr("r", 3.5);

        g.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .attr("id", d => `node_${d.data.id}`)
            .attr("class", d => d.data.id == this.selected_node_id ? "red_text" : "")
            .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90}) 
            translate(${d.y},0) 
            rotate(${d.x >= Math.PI ? 180 : 0})
        `)
            .attr("dy", "0.31em")
            .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
            .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
            .text(d =>
                d.data.name)
            .call(wrap_text)
            .on("click", function(d) { _this.selectNode(d, this) })
            .on('contextmenu', function(d) {
                d3.event.preventDefault();
                _this.selectNode(d, this);
                showCanvasToolbar(this)
            })
            .clone(true).lower()
            .attr("stroke", "white")
            .attr("id", d => "")
        this.curr_selection = d3.select(`#node_${this.selected_node_id}`)

        tip = d3.tip().direction('e')
            .attr('class', 'd3-tip')
            .html(function(d) {
                the_note = graph_data.getNote(d.data.note_id)
                node_name = d.data.name
                var res = the_note.replace(new RegExp(`(${node_name})`), '<span id="name_word"><b>$1</b></span>');
                return res;
            });
        svg.call(tip);
        g.selectAll("text")
            .on("mouseover", function(d) { tip.show(d); })
            .on('mouseout', function(d) { tip.hide(d); })


        // g.selectAll("text")


        svg.attr("viewBox", [-300, -300, 600, 600])
        'body'
        d3.select('body').on("click", () => hideCanvasToolbar(this))
        the_g = g.node()
            // d3.zoomTransform(the_g, this.transform_attr)
        svg.call(d3.zoom().transform, this.transform_attr);
        g.attr("transform", this.transform_attr.toString())
            // d3.zoom().transform(the_g, this.transform_attr.x, this.transform_attr.y)
    }

}
curr_selection = $('#id_1')

function wrap_svg_texts() {
    a = $("text")
    for (i of a) {
        wrap_svg_text(i)
    }
}

function wrap_text(d) {

    d.select(function(d, i) {
        wrap_svg_text(this);
    })
}

function wrap_svg_text(element) {

    let x = 0;
    let y = 0;
    let width = 90;
    let lineHeight = 10;



    /* get the text */
    var text = element.innerHTML;

    /* split the words into array */
    var words = text.split(' ');
    var line = '';

    /* Make a tspan for testing */
    element.innerHTML = '<tspan id="PROCESSING">busy</tspan >';

    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var testElem = document.getElementById('PROCESSING');
        /*  Add line in testElement */
        testElem.innerHTML = testLine;
        /* Messure textElement */
        var metrics = testElem.getBoundingClientRect();
        testWidth = metrics.width;

        if (testWidth > width && n > 0) {
            element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>';
            line = words[n] + ' ';
            y = lineHeight;
        } else {
            line = testLine;
        }
    }

    element.innerHTML += '<tspan x="0" dy="' + y + '">' + line + '</tspan>';
    document.getElementById("PROCESSING").remove();

}
drawer = radial_tree;

var chart_tree = {
    margin: ({ top: 10, right: 120, bottom: 10, left: 40 }),
    dy: document.body.clientWidth / 200,
    height: 10,
    dx: 15,
    top: 0,
    diagonal: d3.linkHorizontal().x(d => d.y).y(d => d.x),
    zoom: 10,
    width: 90,
    radius: 10,
    data: null,
    transform_attr: d3.zoomIdentity,
    curr_selection: null,
    selected_node_id: null,
    refresh() {
        this.tree = d3.tree().nodeSize([this.dx, this.dy * this.radius])
        this.update(this.data, false);
    },
    changeZoom(zoom) {
        this.zoom = zoom
        svg = d3.select('#svg_canvas');
        svg.attr("viewBox", this.autoBox())
    },
    autoBox() {
        return [-this.margin.left, this.top - this.margin.top,
            this.width * this.zoom, this.height * this.zoom
        ]
    },
    draw(root) {
        _this = this
        this.tree = d3.tree().nodeSize([this.dx, this.dy * this.radius])

        root.x0 = this.dy / 2;
        root.y0 = 0;
        root.descendants().forEach((d, i) => {
            if (!d.id) d.id = i;
            d._children = d.children;
            // if (d.depth && d.data.name.length !== 7) d.children = null;
        });
        var svg = d3.select('#chart')
            .select("svg")
            .attr("viewBox", this.autoBox())
            .style("font", "10px sans-serif")
            .style("user-select", "none")
            .attr("id", "svg_canvas")
            .call(d3.zoom().on("zoom", function() {
                chart_tree.transform_attr = d3.zoomTransform(this);
                svg.select("g").attr("transform", chart_tree.transform_attr)
            }));
        var g = svg.select("g")
        g.selectAll("g").remove()
        const gLink = g.append("g")
            .attr("fill", "none")
            .attr("stroke", "#555")
            .attr("stroke-opacity", 0.4)
            .attr("stroke-width", 1.5);

        const gNode = g.append("g")
            .attr("cursor", "pointer")
            .attr("pointer-events", "all");

        this.update = function(source, show_transition = true) {
            const duration = d3.event && d3.event.altKey ? 2500 : 250;
            const nodes = root.descendants().reverse();
            const links = root.links();

            // Compute the new tree layout.
            this.tree(root);

            let left = root;
            let right = root;
            root.eachBefore(node => {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
            });

            this.height = right.x - left.x + this.margin.top + this.margin.bottom;
            this.top = left.x

            const transition = svg.transition()
                .duration(duration)
                .attr("viewBox", this.autoBox())
                .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

            // Update the nodes…
            const node = gNode.selectAll("g")
                .data(nodes, d => d.id);
            tip = d3.tip().direction('e')
                .attr('class', 'd3-tip')
                .html(function(d) {
                    the_note = graph_data.getNote(d.data.note_id)
                    node_name = d.data.name
                    var res = the_note.replace(new RegExp(`(${node_name})`), '<span id="name_word"><b>$1</b></span>');
                    return res;
                });
            svg.call(tip);

            // Enter any new nodes at the parent's previous position.
            const nodeEnter = node.enter().append("g")
                .attr("transform", d => show_transition ? `translate(${source.y0},${source.x0})` : `translate(${d.y},${d.x})`)
                .attr("fill-opacity", show_transition ? 0 : 1)
                .attr("stroke-opacity", show_transition ? 0 : 1)
                .on("mouseover", function(d) { tip.show(d); })
                .on('mouseout', function(d) { tip.hide(d); })
                .on("click", d => {
                    d.children = d.children ? null : d._children;
                    tip.hide(d);
                    this.update(d);
                });

            nodeEnter.append("circle")
                .attr("r", 2.5)
                .attr("fill", d => d._children ? "#555" : "#999")
                .attr("stroke-width", 10);

            nodeEnter.append("text")
                .attr("dy", "0.31em")
                .attr("x", d => d._children ? -6 : 6)
                .attr("text-anchor", d => d._children ? "end" : "start")
                .text(d => d.data.name)
                .attr("id", d => `node_${d.data.id}`)
                .attr("class", d => d.data.id == this.selected_node_id ? "red_text" : "")
                .on("click", function(d) { _this.selectNode(d, this) })
                .on('contextmenu', function(d) {
                    d3.event.preventDefault();
                    _this.selectNode(d, this);
                    showCanvasToolbar(this)
                })
                .clone(true).lower()
                .attr("stroke-linejoin", "round")
                .attr("stroke-width", 3)
                .attr("stroke", "white")
                .attr("stroke", "white")
                .attr("id", d => "")
            this.curr_selection = d3.select(`#node_${this.selected_node_id}`);

            // Transition nodes to their new position.
            node.merge(nodeEnter).transition(transition)
                .attr("transform", d => `translate(${d.y},${d.x})`)
                .attr("fill-opacity", 1)
                .attr("stroke-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            node.exit().transition(transition).remove()
                .attr("transform", d => `translate(${source.y},${source.x})`)
                .attr("fill-opacity", 0)
                .attr("stroke-opacity", 0);


            // Update the links…
            const link = gLink.selectAll("path")
                .data(links, d => d.target.id);

            // Enter any new links at the parent's previous position.
            const linkEnter = link.enter().append("path")
                .attr("d", d => {
                    const o = { x: show_transition ? source.x0 : d.x, y: show_transition ? source.y0 : d.y };
                    return this.diagonal({ source: o, target: o });
                });

            // Transition links to their new position.
            link.merge(linkEnter).transition(transition)
                .attr("d", this.diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition(transition).remove()
                .attr("d", d => {
                    const o = { x: source.x, y: source.y };
                    return this.diagonal({ source: o, target: o });
                });

            // Stash the old positions for transition.
            root.eachBefore(d => {
                d.x0 = d.x;
                d.y0 = d.y;
            });

            // g.selectAll("text")
            d3.select('body').on("click", () => hideCanvasToolbar(this))

            svg.call(d3.zoom().transform, this.transform_attr);
            g.attr("transform", this.transform_attr.toString())
        }
        this.update(root, false);
        this.data = root; //save data for later use and refresh
    },
    selectNode(d, _this = null) {
        if (_this == null) _this = this
        if (this.curr_selection != null) {
            this.curr_selection.attr('class', 'black_text')
        }
        txt = d3.select(_this)
        txt.attr('class', "red_text")
        the_id = d.data.id
        graph_data.changeCurrentNode(the_id)
        test = `#${the_id}`
        this.curr_selection = txt
        this.selected_node_id = d.data.id
    },
    hilightNode(node_id) {
        node = d3.select(`#node_${node_id}`)
        this.selectNode(node.datum(), node.node())
    },
}


// call on text selected
var text_area = document.getElementById("text_area");
var text_view = document.getElementById("text-view");
var viewBoxSlider = document.getElementById("sliderViewBox");
var radiusSlider = document.getElementById("sliderRadius");
var show_quiz_leaves_label = document.getElementById("quiz-leaves-label");
var show_quiz_leaves = {
    checked: true
}
var t = '';
var curr_selected_text = '';
var auto_repeat = false
var repeat_action = null
arr_cummulated_text = []
action_funcs = {
    "child": (d) => { graph_data.addChild(d) },
    "before": (d) => { graph_data.addUncle(d) },
    "below": (d) => { graph_data.addSibling(d) },
    "add-text": (d) => { arr_cummulated_text.push(d); return true; },
    "note": (d) => {
        const note_id = graph_data.addNote(d)
        graph_data.changeCurrentNote(note_id)
        return true;
    },
    "delete-node": () => {
        graph_data.deleteCurrentNode()
        refresh_view()
    },
    "copy-node": () => graph_data.copyCurrentNode(),
    "paste-node": () => {
        graph_data.pasteIntoCurrentNode();
        refresh_view();
    },
    "cut-node": () => {
        graph_data.copyCurrentNode();
        graph_data.deleteCurrentNode();
        refresh_view()
    },
    "add-note": (d) => {
        note_id = graph_data.addNote(d)
        graph_data.current_node.note_id = note_id
        return true;
    },
    "edit-node": () => {
        const node_name = prompt("enter new name for this node", graph_data.current_node.name)
        if (node_name) {
            graph_data.current_node.name = node_name
            refresh_view()
        }
    }
}

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        auto_repeat = false;
        set_clss("auto-repeat", "")
        set_clss(repeat_action, "") //turn off prev
        repeat_action = null
        return;
    }
});

function ChangeDocText() {
    $("#text-view").html($("#text_area").htmlarea('html'));
    var event = new Event('click');
    document.getElementById("close-edit-dlg").dispatchEvent(event);
}

function gText(e) {
    var selection = document.getSelection ?
        document.getSelection().toString() :
        document.selection.createRange().toString();
    t = selection
    if (selection && !show_quiz_leaves.checked) {
        if (repeat_action) {
            if (!action_funcs[repeat_action](t))
                redraw_graph();
            deselectAllTexts()
            curr_selected_text = ""
            t = ""
            if (repeat_action == "child") {
                // dont allow auto child creation, change it to add sibling instead                
                set_clss(repeat_action, "") //turn off prev
                repeat_action = "below"
                set_clss(repeat_action, "green-color") //turn on current                
            }
        }
        showMiniToolbar(e);
    } else {
        hide_minitoolbar();
    }
}

function showMiniToolbar(e) {
    box = document.querySelector('#mini-toolbar');
    toolbar = $("#mini-toolbar");
    Y = e.clientY + 10;
    toolbar.css("top", `${Y}px`);
    toolbar.css("display", 'flex');
    a = toolbar.width();
    X = e.clientX - (box.clientWidth / 2);
    toolbar.css("left", `${X}px`);
    regex_selected_text = new RegExp(t, 'i')
    cur_note = graph_data.getCurrentNote();
    // blink comment if there is indication
    if (!cur_note || cur_note.search(regex_selected_text) < 0)
        set_clss("note", "blink")
    else
        set_clss("note", "")

    set_clss("auto-repeat", auto_repeat ? "blink" : "")
}


function set_clss(item_id, class_name) {
    $(`#${item_id}`).attr("class", class_name)
}

function onSaveAsDialog() {

}

function onOpenDialog() {

}
text_view.onmouseup = gText;
if (!document.all) document.captureEvents(Event.MOUSEUP);


document.addEventListener("mousedown", function() {
    console.log("click")
})

function showCanvasToolbar(node) {
    // this function and next one are public and are called from chart and collapsible_tree objects.
    // in the future i must create a Draw class and create tree and collapsible_tree objects from Draw class
    // and initialize each object with a context menu function, in this way the encapsulation rule is not violated
    e = d3.event;
    const toolbar = $("#canvas-toolbar");
    toolbar.css("display", 'block');
    const Y = e.clientY - (toolbar.height() / 2);
    const X = e.clientX - toolbar.width() - 10;
    toolbar.css("left", `${X}px`);
    toolbar.css("top", `${Y}px`);
    console.log(e.clientY, e.clientX)
}

function hideCanvasToolbar(node) {
    console.log("hiding")
    toolbar = $("#canvas-toolbar");
    toolbar.css("display", 'none');
}

// if toolbar buttons clicked
$("#canvas-toolbar").on('click', 'div', function() {
    the_id = $(this).attr("id")
    action_funcs[the_id]()
})

$("#mini-toolbar").on('click', 'div', function() {
    if (curr_selected_text || auto_repeat) {
        // do action if there is a selection or we are in recording mode
        console.log(curr_selected_text);
        the_id = $(this).attr("id")
        if (the_id == "auto-repeat" || the_id == repeat_action) { // code block to turn blinking on or off
            auto_repeat = auto_repeat ? false : true;
            set_clss("auto-repeat", auto_repeat ? "blink" : "")
            set_clss(repeat_action, "") //turn off prev
            repeat_action = null
            if (!auto_repeat) hide_minitoolbar(); //we just hase been turned it off
            return;
        }
        hide_minitoolbar()
        if (arr_cummulated_text.length > 0 && the_id != "add-text") {
            // aggregate previously selected texts if we are not in recording mode
            arr_cummulated_text.push(curr_selected_text)
            curr_selected_text = arr_cummulated_text.join(" ")
            delete arr_cummulated_text;
            arr_cummulated_text = []
        }
        if (curr_selected_text !== "")
            if (!action_funcs[the_id](curr_selected_text)) {
                redraw_graph()
                if (the_id == "child") the_id = "below" // dont allow auto child creation; instead, change it to add sibling 
                curr_selected_text = ""
                    // save_to_document()
                    // $("#save_area").text(`json_data=${json_str}; graph_data.setData(json_data);`)
            }
        if (auto_repeat)
            if (repeat_action != "add-text") {
                set_clss(repeat_action, "") //turn off prev                             
                set_clss(the_id, "green-color") //turn on current
                repeat_action = the_id;

            }
            // alert("You clicked on li " + $(this).text());
    }

});

function hide_minitoolbar() {
    deselectAllTexts();
    toolbar = $("#mini-toolbar");
    toolbar.css("display", 'none');
}
$("#mini-toolbar").on('mousedown', 'div', function() {
    if (t) {
        curr_selected_text = t;
    }

});


$("#toolbar").on('click', 'div', function() {

    // console.log($("#save_area").text())

    the_id = $(this).attr("id")
    switch (the_id) {
        case "web":
            drawer = radial_tree;
            break;
        case "tree":
            drawer = chart_tree;
            break;
        default:
            break;
    }
    // there should be some code to set the zoming and radius slider based on level of corresponding drawer value
    refresh_view();
    // alert("You clicked on li " + $("#save_area").val());
    // var json = JSON.stringify([...graph_data.nodes.values()]);
    // $("#save_area").text("data = " + json + ";graph_data.setData(data)")

});

function deselectAllTexts() {
    try {
        document.selection.empty();
    } catch (error) {}
    window.getSelection().removeAllRanges();
}

function refresh_view(exceptions) {
    redraw_graph();
    getQuiz(exceptions);
}

function redraw_graph(draw = true) {
    // puts new data into chart and draws the chart from scratch

    if (graph_data.nodes.size) {
        // viewBoxSlider.value = drawer.zoom
        // radiusSlider.value = drawer.radius
        json = graph_data.stratify();
        let data = d3.hierarchy(json);
        drawer.selected_node_id = graph_data.current_node.id
        if (draw) drawer.draw(data);
        return data;
    }
}


//var output = document.getElementById("demo");
//output.innerHTML = slider.value;

function getQuiz(exceptions = null) {
    let active_node = graph_data.getActiveNode()
    if (show_quiz_leaves.checked) {
        if (active_node == null) {
            alert("please select a node first")
            show_quiz_leaves.checked = false
            return
        }

        new_data = graph_data.stratify(active_node); // make new hierarchy from active node
        // copy current graph_data to save its data from being changed
        graph_data = Object.assign({}, graph_data, { nodes: new Map() })
        graph_data.setData(new_data) // and make it default data for layout


        var question_hierarchy = redraw_graph(false) // just get hierarchy does not display anything
        var answers = question_hierarchy.leaves();
        // make html divs from leaves

        //          when div clicked: if div data parent id matches with hierarchy id remove div and add it to hierarchy
        // delete leaves from hierarchy
        remove_leaves(question_hierarchy, exceptions);
        drawer.draw(question_hierarchy);

        // create a pan and insert answers into it
        d3.select("#quiz_choices").remove()
        const quiz = d3.select("#text-column")
            .append("div")
            .attr("id", "quiz_choices")
            .selectAll("div")
            .data(answers)
            .join("div")
            .filter(d => !exceptions.includes(d.data.id))
            .attr("id", d => `answer_${d.data.id}`)
            .attr("class", "answer")
            .text(d => d.data.name)
            .on("click", function(d, i) {
                if (d.parent.data.id == graph_data.getActiveNode().id) {
                    parent_childs = d.parent.children
                    if (parent_childs == null) {
                        if (d.parent._children == null) {
                            d.parent.children = new Array
                            parent_childs = d.parent.children
                        } else {
                            parent_childs = d.parent._children
                        }
                    }
                    parent_childs.push(d)

                    d.parent._children = parent_childs
                    d3.select(this).node().remove()
                    drawer.refresh();
                    pycmd("sub_answer_" + d.data.id)
                } else {

                }

            });
    } else {
        delete graph_data
        graph_data = graph_data_copy
        redraw_graph()
        d3.select("#quiz_choices").remove()
    }
}
$("#switch-graph").on("click", function() {
    drawer = (drawer == radial_tree) ? chart_tree : radial_tree;
    refresh_view()
})

function remove_leaves(hierarchy, exceptions = null) {
    hierarchy.descendants().forEach((d, i) => {
        d.id = i;
        console.log(d.data.id)
        if (d.height != 0) {
            // just remove children that are leaves
            let new_children = new Array;
            d.children.forEach(node => {
                if (node.height != 0 ||
                    exceptions.includes(node.data.id)) {
                    new_children.push(node);
                    if (node.height == 0)
                        pycmd("sub_answer_" + node.data.id)
                } else
                    pycmd("sub_question_" + node.data.id)
            });
            if (new_children.length)
                d.children = new_children;
            else
                delete d.children
        }
    });
}
exeption_nodes = [] {
        { Settings } } {
        { AnswerGraph } } <
    /script> {
        { cloze::AnswerGraph } } <
    script >
    json_data = {
        { TestGraph } };
graph_data.setData(json_data);
graph_data.setNotes({
    { Notes } });
drawer = chart_tree;
json = graph_data.stratify();
refresh_view(exeption_nodes);