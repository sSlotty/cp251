/*! jQuery Mobile 1.3.1 | Git HEAD hash: 74b4bec <> 2013-04-08T19:41:28Z | (c) 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */
(function (e, t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return i(n, e, t), n.mobile
    }) : i(e.jQuery, e, t)
})(this, document, function (e, t, i, n) {
    (function (e) {
        e.mobile = {}
    })(e),
    function (e, t, n) {
        var a = {};
        e.mobile = e.extend(e.mobile, {
            version: "1.3.1",
            ns: "",
            subPageUrlKey: "ui-page",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 250,
            touchOverflowEnabled: !1,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "e",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            orientationChangeEnabled: !0,
            buttonMarkup: {
                hoverDelay: 200
            },
            window: e(t),
            document: e(i),
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            },
            behaviors: {},
            silentScroll: function (i) {
                "number" !== e.type(i) && (i = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function () {
                    t.scrollTo(0, i), e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: i
                    })
                }, 20), setTimeout(function () {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            nsNormalizeDict: a,
            nsNormalize: function (t) {
                return t ? a[t] || (a[t] = e.camelCase(e.mobile.ns + t)) : n
            },
            getInheritedTheme: function (e, t) {
                for (var i, n, a = e[0], o = "", s = /ui-(bar|body|overlay)-([a-z])\b/; a && (i = a.className || "", !(i && (n = s.exec(i)) && (o = n[2])));) a = a.parentNode;
                return o || t || "a"
            },
            closestPageData: function (e) {
                return e.closest(':jqmData(role="page"), :jqmData(role="dialog")').data("mobile-page")
            },
            enhanceable: function (e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function (e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function (t, i) {
                if (!e.mobile.ignoreContentEnabled) return t;
                for (var n, a, o, s = t.length, r = e(), l = 0; s > l; l++) {
                    for (a = t.eq(l), o = !1, n = t[l]; n;) {
                        var d = n.getAttribute ? n.getAttribute("data-" + e.mobile.ns + i) : "";
                        if ("false" === d) {
                            o = !0;
                            break
                        }
                        n = n.parentNode
                    }
                    o || (r = r.add(a))
                }
                return r
            },
            getScreenHeight: function () {
                return t.innerHeight || e.mobile.window.height()
            }
        }, e.mobile), e.fn.jqmData = function (t, i) {
            var a;
            return t !== n && (t && (t = e.mobile.nsNormalize(t)), a = 2 > arguments.length || i === n ? this.data(t) : this.data(t, i)), a
        }, e.jqmData = function (t, i, a) {
            var o;
            return i !== n && (o = e.data(t, i ? e.mobile.nsNormalize(i) : i, a)), o
        }, e.fn.jqmRemoveData = function (t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function (t, i) {
            return e.removeData(t, e.mobile.nsNormalize(i))
        }, e.fn.removeWithDependents = function () {
            e.removeWithDependents(this)
        }, e.removeWithDependents = function (t) {
            var i = e(t);
            (i.jqmData("dependents") || e()).remove(), i.remove()
        }, e.fn.addDependents = function (t) {
            e.addDependents(e(this), t)
        }, e.addDependents = function (t, i) {
            var n = e(t).jqmData("dependents") || e();
            e(t).jqmData("dependents", e.merge(n, i))
        }, e.fn.getEncodedText = function () {
            return e("<div/>").text(e(this).text()).html()
        }, e.fn.jqmEnhanceable = function () {
            return e.mobile.enhanceable(this)
        }, e.fn.jqmHijackable = function () {
            return e.mobile.hijackable(this)
        };
        var o = e.find,
            s = /:jqmData\(([^)]*)\)/g;
        e.find = function (t, i, n, a) {
            return t = t.replace(s, "[data-" + (e.mobile.ns || "") + "$1]"), o.call(this, t, i, n, a)
        }, e.extend(e.find, o), e.find.matches = function (t, i) {
            return e.find(t, null, null, i)
        }, e.find.matchesSelector = function (t, i) {
            return e.find(i, null, null, [t]).length > 0
        }
    }(e, this),
    function (e, t) {
        var i = 0,
            n = Array.prototype.slice,
            a = e.cleanData;
        e.cleanData = function (t) {
            for (var i, n = 0; null != (i = t[n]); n++) try {
                e(i).triggerHandler("remove")
            } catch (o) {}
            a(t)
        }, e.widget = function (i, n, a) {
            var o, s, r, l, d = i.split(".")[0];
            i = i.split(".")[1], o = d + "-" + i, a || (a = n, n = e.Widget), e.expr[":"][o.toLowerCase()] = function (t) {
                return !!e.data(t, o)
            }, e[d] = e[d] || {}, s = e[d][i], r = e[d][i] = function (e, i) {
                return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new r(e, i)
            }, e.extend(r, s, {
                version: a.version,
                _proto: e.extend({}, a),
                _childConstructors: []
            }), l = new n, l.options = e.widget.extend({}, l.options), e.each(a, function (t, i) {
                e.isFunction(i) && (a[t] = function () {
                    var e = function () {
                            return n.prototype[t].apply(this, arguments)
                        },
                        a = function (e) {
                            return n.prototype[t].apply(this, e)
                        };
                    return function () {
                        var t, n = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = a, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                    }
                }())
            }), r.prototype = e.widget.extend(l, {
                widgetEventPrefix: s ? l.widgetEventPrefix : i
            }, a, {
                constructor: r,
                namespace: d,
                widgetName: i,
                widgetFullName: o
            }), s ? (e.each(s._childConstructors, function (t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, r, i._proto)
            }), delete s._childConstructors) : n._childConstructors.push(r), e.widget.bridge(i, r)
        }, e.widget.extend = function (i) {
            for (var a, o, s = n.call(arguments, 1), r = 0, l = s.length; l > r; r++)
                for (a in s[r]) o = s[r][a], s[r].hasOwnProperty(a) && o !== t && (i[a] = e.isPlainObject(o) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], o) : e.widget.extend({}, o) : o);
            return i
        }, e.widget.bridge = function (i, a) {
            var o = a.prototype.widgetFullName || i;
            e.fn[i] = function (s) {
                var r = "string" == typeof s,
                    l = n.call(arguments, 1),
                    d = this;
                return s = !r && l.length ? e.widget.extend.apply(null, [s].concat(l)) : s, r ? this.each(function () {
                    var n, a = e.data(this, o);
                    return a ? e.isFunction(a[s]) && "_" !== s.charAt(0) ? (n = a[s].apply(a, l), n !== a && n !== t ? (d = n && n.jquery ? d.pushStack(n.get()) : n, !1) : t) : e.error("no such method '" + s + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + s + "'")
                }) : this.each(function () {
                    var t = e.data(this, o);
                    t ? t.option(s || {})._init() : e.data(this, o, new a(s, this))
                }), d
            }
        }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (t, n) {
                n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (e) {
                        e.target === n && this.destroy()
                    }
                }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function () {
                return this.element
            },
            option: function (i, n) {
                var a, o, s, r = i;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof i)
                    if (r = {}, a = i.split("."), i = a.shift(), a.length) {
                        for (o = r[i] = e.widget.extend({}, this.options[i]), s = 0; a.length - 1 > s; s++) o[a[s]] = o[a[s]] || {}, o = o[a[s]];
                        if (i = a.pop(), n === t) return o[i] === t ? null : o[i];
                        o[i] = n
                    } else {
                        if (n === t) return this.options[i] === t ? null : this.options[i];
                        r[i] = n
                    } return this._setOptions(r), this
            },
            _setOptions: function (e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function (e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (i, n, a) {
                var o, s = this;
                "boolean" != typeof i && (a = n, n = i, i = !1), a ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (a = n, n = this.element, o = this.widget()), e.each(a, function (a, r) {
                    function l() {
                        return i || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : t
                    }
                    "string" != typeof r && (l.guid = r.guid = r.guid || l.guid || e.guid++);
                    var d = a.match(/^(\w+)\s*(.*)$/),
                        c = d[1] + s.eventNamespace,
                        h = d[2];
                    h ? o.delegate(h, c, l) : n.bind(c, l)
                })
            },
            _off: function (e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function (e, t) {
                function i() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, t || 0)
            },
            _hoverable: function (t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function (t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function (t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (t, i, n) {
                var a, o, s = this.options[t];
                if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (a in o) a in i || (i[a] = o[a]);
                return this.element.trigger(i, n), !(e.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (t, i) {
            e.Widget.prototype["_" + t] = function (n, a, o) {
                "string" == typeof a && (a = {
                    effect: a
                });
                var s, r = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
                a = a || {}, "number" == typeof a && (a = {
                    duration: a
                }), s = !e.isEmptyObject(a), a.complete = o, a.delay && n.delay(a.delay), s && e.effects && e.effects.effect[r] ? n[t](a) : r !== t && n[r] ? n[r](a.duration, a.easing, o) : n.queue(function (i) {
                    e(this)[t](), o && o.call(n[0]), i()
                })
            }
        })
    }(e),
    function (e, t) {
        e.widget("mobile.widget", {
            _createWidget: function () {
                e.Widget.prototype._createWidget.apply(this, arguments), this._trigger("init")
            },
            _getCreateOptions: function () {
                var i = this.element,
                    n = {};
                return e.each(this.options, function (e) {
                    var a = i.jqmData(e.replace(/[A-Z]/g, function (e) {
                        return "-" + e.toLowerCase()
                    }));
                    a !== t && (n[e] = a)
                }), n
            },
            enhanceWithin: function (t, i) {
                this.enhance(e(this.options.initSelector, e(t)), i)
            },
            enhance: function (t, i) {
                var n, a, o = e(t);
                o = e.mobile.enhanceable(o), i && o.length && (n = e.mobile.closestPageData(o), a = n && n.keepNativeSelector() || "", o = o.not(a)), o[this.widgetName]()
            },
            raise: function (e) {
                throw "Widget [" + this.widgetName + "]: " + e
            }
        })
    }(e),
    function (e) {
        e.extend(e.mobile, {
            loadingMessageTextVisible: n,
            loadingMessageTheme: n,
            loadingMessage: n,
            showPageLoadingMsg: function (t, i, n) {
                e.mobile.loading("show", t, i, n)
            },
            hidePageLoadingMsg: function () {
                e.mobile.loading("hide")
            },
            loading: function () {
                this.loaderWidget.loader.apply(this.loaderWidget, arguments)
            }
        });
        var t = "ui-loader",
            i = e("html"),
            a = e.mobile.window;
        e.widget("mobile.loader", {
            options: {
                theme: "a",
                textVisible: !1,
                html: "",
                text: "loading"
            },
            defaultHtml: "<div class='" + t + "'>" + "<span class='ui-icon ui-icon-loading'></span>" + "<h1></h1>" + "</div>",
            fakeFixLoader: function () {
                var t = e("." + e.mobile.activeBtnClass).first();
                this.element.css({
                    top: e.support.scrollTop && a.scrollTop() + a.height() / 2 || t.length && t.offset().top || 100
                })
            },
            checkLoaderPosition: function () {
                var t = this.element.offset(),
                    i = a.scrollTop(),
                    n = e.mobile.getScreenHeight();
                (i > t.top || t.top - i > n) && (this.element.addClass("ui-loader-fakefix"), this.fakeFixLoader(), a.unbind("scroll", this.checkLoaderPosition).bind("scroll", e.proxy(this.fakeFixLoader, this)))
            },
            resetHtml: function () {
                this.element.html(e(this.defaultHtml).html())
            },
            show: function (o, s, r) {
                var l, d, c;
                this.resetHtml(), "object" === e.type(o) ? (c = e.extend({}, this.options, o), o = c.theme || e.mobile.loadingMessageTheme) : (c = this.options, o = o || e.mobile.loadingMessageTheme || c.theme), d = s || e.mobile.loadingMessage || c.text, i.addClass("ui-loading"), (e.mobile.loadingMessage !== !1 || c.html) && (l = e.mobile.loadingMessageTextVisible !== n ? e.mobile.loadingMessageTextVisible : c.textVisible, this.element.attr("class", t + " ui-corner-all ui-body-" + o + " ui-loader-" + (l || s || o.text ? "verbose" : "default") + (c.textonly || r ? " ui-loader-textonly" : "")), c.html ? this.element.html(c.html) : this.element.find("h1").text(d), this.element.appendTo(e.mobile.pageContainer), this.checkLoaderPosition(), a.bind("scroll", e.proxy(this.checkLoaderPosition, this)))
            },
            hide: function () {
                i.removeClass("ui-loading"), e.mobile.loadingMessage && this.element.removeClass("ui-loader-fakefix"), e.mobile.window.unbind("scroll", this.fakeFixLoader), e.mobile.window.unbind("scroll", this.checkLoaderPosition)
            }
        }), a.bind("pagecontainercreate", function () {
            e.mobile.loaderWidget = e.mobile.loaderWidget || e(e.mobile.loader.prototype.defaultHtml).loader()
        })
    }(e, this),
    function (e, t, n) {
        function a(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var o, s = "hashchange",
            r = i,
            l = e.event.special,
            d = r.documentMode,
            c = "on" + s in t && (d === n || d > 7);
        e.fn[s] = function (e) {
            return e ? this.bind(s, e) : this.trigger(s)
        }, e.fn[s].delay = 50, l[s] = e.extend(l[s], {
            setup: function () {
                return c ? !1 : (e(o.start), n)
            },
            teardown: function () {
                return c ? !1 : (e(o.stop), n)
            }
        }), o = function () {
            function i() {
                var n = a(),
                    r = p(d);
                n !== d ? (u(d = n, r), e(t).trigger(s)) : r !== d && (location.href = location.href.replace(/#.*/, "") + r), o = setTimeout(i, e.fn[s].delay)
            }
            var o, l = {},
                d = a(),
                h = function (e) {
                    return e
                },
                u = h,
                p = h;
            return l.start = function () {
                o || i()
            }, l.stop = function () {
                o && clearTimeout(o), o = n
            }, t.attachEvent && !t.addEventListener && !c && function () {
                var t, n;
                l.start = function () {
                    t || (n = e.fn[s].src, n = n && n + a(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                        n || u(a()), i()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function () {
                        try {
                            "title" === event.propertyName && (t.document.title = r.title)
                        } catch (e) {}
                    })
                }, l.stop = h, p = function () {
                    return a(t.location.href)
                }, u = function (i, n) {
                    var a = t.document,
                        o = e.fn[s].domain;
                    i !== n && (a.title = r.title, a.open(), o && a.write('<script>document.domain="' + o + '"</script>'), a.close(), t.location.hash = i)
                }
            }(), l
        }()
    }(e, this),
    function (e) {
        t.matchMedia = t.matchMedia || function (e) {
            var t, i = e.documentElement,
                n = i.firstElementChild || i.firstChild,
                a = e.createElement("body"),
                o = e.createElement("div");
            return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", a.style.background = "none", a.appendChild(o),
                function (e) {
                    return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(a, n), t = 42 === o.offsetWidth, i.removeChild(a), {
                        matches: t,
                        media: e
                    }
                }
        }(i), e.mobile.media = function (e) {
            return t.matchMedia(e).matches
        }
    }(e),
    function (e) {
        var t = {
            touch: "ontouchend" in i
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, t), e.extend(e.mobile.support, t)
    }(e),
    function (e) {
        e.extend(e.support, {
            orientation: "orientation" in t && "onorientationchange" in t
        })
    }(e),
    function (e, n) {
        function a(e) {
            var t = e.charAt(0).toUpperCase() + e.substr(1),
                i = (e + " " + p.join(t + " ") + t).split(" ");
            for (var a in i)
                if (u[i[a]] !== n) return !0
        }

        function o(e, t, n) {
            for (var a, o = i.createElement("div"), s = function (e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                }, r = function (e) {
                    return "" === e ? "" : "-" + e.charAt(0).toLowerCase() + e.substr(1) + "-"
                }, l = function (i) {
                    var n = r(i) + e + ": " + t + ";",
                        l = s(i),
                        d = l + ("" === l ? e : s(e));
                    o.setAttribute("style", n), o.style[d] && (a = !0)
                }, d = n ? n : p, c = 0; d.length > c; c++) l(d[c]);
            return !!a
        }

        function s() {
            var a = "transform-3d",
                o = e.mobile.media("(-" + p.join("-" + a + "),(-") + "-" + a + "),(" + a + ")");
            if (o) return !!o;
            var s = i.createElement("div"),
                r = {
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            h.append(s);
            for (var l in r) s.style[l] !== n && (s.style[l] = "translate3d( 100px, 1px, 1px )", o = t.getComputedStyle(s).getPropertyValue(r[l]));
            return !!o && "none" !== o
        }

        function r() {
            var t, i, n = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                a = e("head base"),
                o = null,
                s = "";
            return a.length ? s = a.attr("href") : a = o = e("<base>", {
                href: n
            }).appendTo("head"), t = e("<a href='testurl' />").prependTo(h), i = t[0].href, a[0].href = s || location.pathname, o && o.remove(), 0 === i.indexOf(n)
        }

        function l() {
            var e, n = i.createElement("x"),
                a = i.documentElement,
                o = t.getComputedStyle;
            return "pointerEvents" in n.style ? (n.style.pointerEvents = "auto", n.style.pointerEvents = "x", a.appendChild(n), e = o && "auto" === o(n, "").pointerEvents, a.removeChild(n), !!e) : !1
        }

        function d() {
            var e = i.createElement("div");
            return e.getBoundingClientRect !== n
        }

        function c() {
            var e = t,
                i = navigator.userAgent,
                n = navigator.platform,
                a = i.match(/AppleWebKit\/([0-9]+)/),
                o = !!a && a[1],
                s = i.match(/Fennec\/([0-9]+)/),
                r = !!s && s[1],
                l = i.match(/Opera Mobi\/([0-9]+)/),
                d = !!l && l[1];
            return (n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && o && 534 > o || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || l && 7458 > d || i.indexOf("Android") > -1 && o && 533 > o || r && 6 > r || "palmGetResource" in t && o && 534 > o || i.indexOf("MeeGo") > -1 && i.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }
        var h = e("<body>").prependTo("html"),
            u = h[0].style,
            p = ["Webkit", "Moz", "O"],
            m = "palmGetResource" in t,
            f = t.opera,
            g = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini),
            b = t.blackberry && !a("-webkit-transform");
        e.extend(e.mobile, {
            browser: {}
        }), e.mobile.browser.oldIE = function () {
            var e = 3,
                t = i.createElement("div"),
                n = t.all || [];
            do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"; while (n[0]);
            return e > 4 ? e : !e
        }(), e.extend(e.support, {
            cssTransitions: "WebKitTransitionEvent" in t || o("transition", "height 100ms linear", ["Webkit", "Moz", ""]) && !e.mobile.browser.oldIE && !f,
            pushState: "pushState" in history && "replaceState" in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
            mediaquery: e.mobile.media("only all"),
            cssPseudoElement: !!a("content"),
            touchOverflow: !!a("overflowScrolling"),
            cssTransform3d: s(),
            boxShadow: !!a("boxShadow") && !b,
            fixedPosition: c(),
            scrollTop: ("pageXOffset" in t || "scrollTop" in i.documentElement || "scrollTop" in h[0]) && !m && !g,
            dynamicBaseTag: r(),
            cssPointerEvents: l(),
            boundingRect: d()
        }), h.remove();
        var v = function () {
            var e = t.navigator.userAgent;
            return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }();
        e.mobile.gradeA = function () {
            return (e.support.mediaquery || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 7) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || g || v, v && e(function () {
            e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), e.support.boxShadow || e("html").addClass("ui-mobile-nosupport-boxshadow")
    }(e),
    function (e, t) {
        var i, n = e.mobile.window;
        e.event.special.navigate = i = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: t,
            isPushStateEnabled: function () {
                return e.support.pushState && e.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function () {
                return e.mobile.hashListeningEnabled === !0
            },
            popstate: function (t) {
                var i = new e.Event("navigate"),
                    a = new e.Event("beforenavigate"),
                    o = t.originalEvent.state || {};
                location.href, n.trigger(a), a.isDefaultPrevented() || (t.historyState && e.extend(o, t.historyState), i.originalEvent = t, setTimeout(function () {
                    n.trigger(i, {
                        state: o
                    })
                }, 0))
            },
            hashchange: function (t) {
                var i = new e.Event("navigate"),
                    a = new e.Event("beforenavigate");
                n.trigger(a), a.isDefaultPrevented() || (i.originalEvent = t, n.trigger(i, {
                    state: t.hashchangeState || {}
                }))
            },
            setup: function () {
                i.bound || (i.bound = !0, i.isPushStateEnabled() ? (i.originalEventName = "popstate", n.bind("popstate.navigate", i.popstate)) : i.isHashChangeEnabled() && (i.originalEventName = "hashchange", n.bind("hashchange.navigate", i.hashchange)))
            }
        }
    }(e),
    function (e, i) {
        var n, a, o = "&ui-state=dialog";
        e.mobile.path = n = {
            uiStateKey: "&ui-state",
            urlParseRE: /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
            getLocation: function (e) {
                var t = e ? this.parseUrl(e) : location,
                    i = this.parseUrl(e || location.href).hash;
                return i = "#" === i ? "" : i, t.protocol + "//" + t.host + t.pathname + t.search + i
            },
            parseLocation: function () {
                return this.parseUrl(this.getLocation())
            },
            parseUrl: function (t) {
                if ("object" === e.type(t)) return t;
                var i = n.urlParseRE.exec(t || "") || [];
                return {
                    href: i[0] || "",
                    hrefNoHash: i[1] || "",
                    hrefNoSearch: i[2] || "",
                    domain: i[3] || "",
                    protocol: i[4] || "",
                    doubleSlash: i[5] || "",
                    authority: i[6] || "",
                    username: i[8] || "",
                    password: i[9] || "",
                    host: i[10] || "",
                    hostname: i[11] || "",
                    port: i[12] || "",
                    pathname: i[13] || "",
                    directory: i[14] || "",
                    filename: i[15] || "",
                    search: i[16] || "",
                    hash: i[17] || ""
                }
            },
            makePathAbsolute: function (e, t) {
                if (e && "/" === e.charAt(0)) return e;
                e = e || "", t = t ? t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g, "") : "";
                for (var i = t ? t.split("/") : [], n = e.split("/"), a = 0; n.length > a; a++) {
                    var o = n[a];
                    switch (o) {
                        case ".":
                            break;
                        case "..":
                            i.length && i.pop();
                            break;
                        default:
                            i.push(o)
                    }
                }
                return "/" + i.join("/")
            },
            isSameDomain: function (e, t) {
                return n.parseUrl(e).domain === n.parseUrl(t).domain
            },
            isRelativeUrl: function (e) {
                return "" === n.parseUrl(e).protocol
            },
            isAbsoluteUrl: function (e) {
                return "" !== n.parseUrl(e).protocol
            },
            makeUrlAbsolute: function (e, t) {
                if (!n.isRelativeUrl(e)) return e;
                t === i && (t = this.documentBase);
                var a = n.parseUrl(e),
                    o = n.parseUrl(t),
                    s = a.protocol || o.protocol,
                    r = a.protocol ? a.doubleSlash : a.doubleSlash || o.doubleSlash,
                    l = a.authority || o.authority,
                    d = "" !== a.pathname,
                    c = n.makePathAbsolute(a.pathname || o.filename, o.pathname),
                    h = a.search || !d && o.search || "",
                    u = a.hash;
                return s + r + l + c + h + u
            },
            addSearchParams: function (t, i) {
                var a = n.parseUrl(t),
                    o = "object" == typeof i ? e.param(i) : i,
                    s = a.search || "?";
                return a.hrefNoSearch + s + ("?" !== s.charAt(s.length - 1) ? "&" : "") + o + (a.hash || "")
            },
            convertUrlToDataUrl: function (e) {
                var i = n.parseUrl(e);
                return n.isEmbeddedPage(i) ? i.hash.split(o)[0].replace(/^#/, "").replace(/\?.*$/, "") : n.isSameDomain(i, this.documentBase) ? i.hrefNoHash.replace(this.documentBase.domain, "").split(o)[0] : t.decodeURIComponent(e)
            },
            get: function (e) {
                return e === i && (e = n.parseLocation().hash), n.stripHash(e).replace(/[^\/]*\.[^\/*]+$/, "")
            },
            set: function (e) {
                location.hash = e
            },
            isPath: function (e) {
                return /\//.test(e)
            },
            clean: function (e) {
                return e.replace(this.documentBase.domain, "")
            },
            stripHash: function (e) {
                return e.replace(/^#/, "")
            },
            stripQueryParams: function (e) {
                return e.replace(/\?.*$/, "")
            },
            cleanHash: function (e) {
                return n.stripHash(e.replace(/\?.*$/, "").replace(o, ""))
            },
            isHashValid: function (e) {
                return /^#[^#]+$/.test(e)
            },
            isExternal: function (e) {
                var t = n.parseUrl(e);
                return t.protocol && t.domain !== this.documentUrl.domain ? !0 : !1
            },
            hasProtocol: function (e) {
                return /^(:?\w+:)/.test(e)
            },
            isEmbeddedPage: function (e) {
                var t = n.parseUrl(e);
                return "" !== t.protocol ? !this.isPath(t.hash) && t.hash && (t.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && t.hrefNoHash === this.documentBase.hrefNoHash) : /^#/.test(t.href)
            },
            squash: function (e, t) {
                var i, a, o, s, r = this.isPath(e),
                    l = this.parseUrl(e),
                    d = l.hash,
                    c = "";
                return t = t || (n.isPath(e) ? n.getLocation() : n.getDocumentUrl()), a = r ? n.stripHash(e) : e, a = n.isPath(l.hash) ? n.stripHash(l.hash) : a, s = a.indexOf(this.uiStateKey), s > -1 && (c = a.slice(s), a = a.slice(0, s)), i = n.makeUrlAbsolute(a, t), o = this.parseUrl(i).search, r ? ((n.isPath(d) || 0 === d.replace("#", "").indexOf(this.uiStateKey)) && (d = ""), c && -1 === d.indexOf(this.uiStateKey) && (d += c), -1 === d.indexOf("#") && "" !== d && (d = "#" + d), i = n.parseUrl(i), i = i.protocol + "//" + i.host + i.pathname + o + d) : i += i.indexOf("#") > -1 ? c : "#" + c, i
            },
            isPreservableHash: function (e) {
                return 0 === e.replace("#", "").indexOf(this.uiStateKey)
            }
        }, n.documentUrl = n.parseLocation(), a = e("head").find("base"), n.documentBase = a.length ? n.parseUrl(n.makeUrlAbsolute(a.attr("href"), n.documentUrl.href)) : n.documentUrl, n.documentBaseDiffers = n.documentUrl.hrefNoHash !== n.documentBase.hrefNoHash, n.getDocumentUrl = function (t) {
            return t ? e.extend({}, n.documentUrl) : n.documentUrl.href
        }, n.getDocumentBase = function (t) {
            return t ? e.extend({}, n.documentBase) : n.documentBase.href
        }
    }(e),
    function (e, t) {
        e.mobile.path, e.mobile.History = function (e, t) {
            this.stack = e || [], this.activeIndex = t || 0
        }, e.extend(e.mobile.History.prototype, {
            getActive: function () {
                return this.stack[this.activeIndex]
            },
            getLast: function () {
                return this.stack[this.previousIndex]
            },
            getNext: function () {
                return this.stack[this.activeIndex + 1]
            },
            getPrev: function () {
                return this.stack[this.activeIndex - 1]
            },
            add: function (e, t) {
                t = t || {}, this.getNext() && this.clearForward(), t.hash && -1 === t.hash.indexOf("#") && (t.hash = "#" + t.hash), t.url = e, this.stack.push(t), this.activeIndex = this.stack.length - 1
            },
            clearForward: function () {
                this.stack = this.stack.slice(0, this.activeIndex + 1)
            },
            find: function (e, t, i) {
                t = t || this.stack;
                var n, a, o, s = t.length;
                for (a = 0; s > a; a++)
                    if (n = t[a], (decodeURIComponent(e) === decodeURIComponent(n.url) || decodeURIComponent(e) === decodeURIComponent(n.hash)) && (o = a, i)) return o;
                return o
            },
            closest: function (e) {
                var i, n = this.activeIndex;
                return i = this.find(e, this.stack.slice(0, n)), i === t && (i = this.find(e, this.stack.slice(n), !0), i = i === t ? i : i + n), i
            },
            direct: function (i) {
                var n = this.closest(i.url),
                    a = this.activeIndex;
                n !== t && (this.activeIndex = n, this.previousIndex = a), a > n ? (i.present || i.back || e.noop)(this.getActive(), "back") : n > a ? (i.present || i.forward || e.noop)(this.getActive(), "forward") : n === t && i.missing && i.missing(this.getActive())
            }
        })
    }(e),
    function (e) {
        var a = e.mobile.path,
            o = location.href;
        e.mobile.Navigator = function (t) {
            this.history = t, this.ignoreInitialHashChange = !0, e.mobile.window.bind({
                "popstate.history": e.proxy(this.popstate, this),
                "hashchange.history": e.proxy(this.hashchange, this)
            })
        }, e.extend(e.mobile.Navigator.prototype, {
            squash: function (n, o) {
                var s, r, l = a.isPath(n) ? a.stripHash(n) : n;
                return r = a.squash(n), s = e.extend({
                    hash: l,
                    url: r
                }, o), t.history.replaceState(s, s.title || i.title, r), s
            },
            hash: function (e, t) {
                var i, n, o;
                if (i = a.parseUrl(e), n = a.parseLocation(), n.pathname + n.search === i.pathname + i.search) o = i.hash ? i.hash : i.pathname + i.search;
                else if (a.isPath(e)) {
                    var s = a.parseUrl(t);
                    o = s.pathname + s.search + (a.isPreservableHash(s.hash) ? s.hash.replace("#", "") : "")
                } else o = e;
                return o
            },
            go: function (n, o, s) {
                var r, l, d, c, h = e.event.special.navigate.isPushStateEnabled();
                l = a.squash(n), d = this.hash(n, l), s && d !== a.stripHash(a.parseLocation().hash) && (this.preventNextHashChange = s), this.preventHashAssignPopState = !0, t.location.hash = d, this.preventHashAssignPopState = !1, r = e.extend({
                    url: l,
                    hash: d,
                    title: i.title
                }, o), h && (c = new e.Event("popstate"), c.originalEvent = {
                    type: "popstate",
                    state: null
                }, this.squash(n, r), s || (this.ignorePopState = !0, e.mobile.window.trigger(c))), this.history.add(r.url, r)
            },
            popstate: function (t) {
                var i, s;
                if (e.event.special.navigate.isPushStateEnabled()) return this.preventHashAssignPopState ? (this.preventHashAssignPopState = !1, t.stopImmediatePropagation(), n) : this.ignorePopState ? (this.ignorePopState = !1, n) : !t.originalEvent.state && 1 === this.history.stack.length && this.ignoreInitialHashChange && (this.ignoreInitialHashChange = !1, location.href === o) ? (t.preventDefault(), n) : (i = a.parseLocation().hash, !t.originalEvent.state && i ? (s = this.squash(i), this.history.add(s.url, s), t.historyState = s, n) : (this.history.direct({
                    url: (t.originalEvent.state || {}).url || i,
                    present: function (i, n) {
                        t.historyState = e.extend({}, i), t.historyState.direction = n
                    }
                }), n))
            },
            hashchange: function (t) {
                var o, s;
                if (e.event.special.navigate.isHashChangeEnabled() && !e.event.special.navigate.isPushStateEnabled()) {
                    if (this.preventNextHashChange) return this.preventNextHashChange = !1, t.stopImmediatePropagation(), n;
                    o = this.history, s = a.parseLocation().hash, this.history.direct({
                        url: s,
                        present: function (i, n) {
                            t.hashchangeState = e.extend({}, i), t.hashchangeState.direction = n
                        },
                        missing: function () {
                            o.add(s, {
                                hash: s,
                                title: i.title
                            })
                        }
                    })
                }
            }
        })
    }(e),
    function (e) {
        e.mobile.navigate = function (t, i, n) {
            e.mobile.navigate.navigator.go(t, i, n)
        }, e.mobile.navigate.history = new e.mobile.History, e.mobile.navigate.navigator = new e.mobile.Navigator(e.mobile.navigate.history);
        var t = e.mobile.path.parseLocation();
        e.mobile.navigate.history.add(t.href, {
            hash: t.hash
        })
    }(e),
    function (e, t, i, n) {
        function a(e) {
            for (; e && e.originalEvent !== n;) e = e.originalEvent;
            return e
        }

        function o(t, i) {
            var o, s, r, l, d, c, h, u, p, m = t.type;
            if (t = e.Event(t), t.type = i, o = t.originalEvent, s = e.event.props, m.search(/^(mouse|click)/) > -1 && (s = q), o)
                for (h = s.length, l; h;) l = s[--h], t[l] = o[l];
            if (m.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== m.search(/^touch/) && (r = a(o), m = r.touches, d = r.changedTouches, c = m && m.length ? m[0] : d && d.length ? d[0] : n))
                for (u = 0, p = k.length; p > u; u++) l = k[u], t[l] = c[l];
            return t
        }

        function s(t) {
            for (var i, n, a = {}; t;) {
                i = e.data(t, T);
                for (n in i) i[n] && (a[n] = a.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return a
        }

        function r(t, i) {
            for (var n; t;) {
                if (n = e.data(t, T), n && (!i || n[i])) return t;
                t = t.parentNode
            }
            return null
        }

        function l() {
            M = !1
        }

        function d() {
            M = !0
        }

        function c() {
            U = 0, O.length = 0, H = !1, d()
        }

        function h() {
            l()
        }

        function u() {
            p(), S = setTimeout(function () {
                S = 0, c()
            }, e.vmouse.resetTimerDuration)
        }

        function p() {
            S && (clearTimeout(S), S = 0)
        }

        function m(t, i, n) {
            var a;
            return (n && n[t] || !n && r(i.target, t)) && (a = o(i, t), e(i.target).trigger(a)), a
        }

        function f(t) {
            var i = e.data(t.target, D);
            if (!(H || U && U === i)) {
                var n = m("v" + t.type, t);
                n && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation())
            }
        }

        function g(t) {
            var i, n, o = a(t).touches;
            if (o && 1 === o.length && (i = t.target, n = s(i), n.hasVirtualBinding)) {
                U = L++, e.data(i, D, U), p(), h(), I = !1;
                var r = a(t).touches[0];
                A = r.pageX, N = r.pageY, m("vmouseover", t, n), m("vmousedown", t, n)
            }
        }

        function b(e) {
            M || (I || m("vmousecancel", e, s(e.target)), I = !0, u())
        }

        function v(t) {
            if (!M) {
                var i = a(t).touches[0],
                    n = I,
                    o = e.vmouse.moveDistanceThreshold,
                    r = s(t.target);
                I = I || Math.abs(i.pageX - A) > o || Math.abs(i.pageY - N) > o, I && !n && m("vmousecancel", t, r), m("vmousemove", t, r), u()
            }
        }

        function _(e) {
            if (!M) {
                d();
                var t, i = s(e.target);
                if (m("vmouseup", e, i), !I) {
                    var n = m("vclick", e, i);
                    n && n.isDefaultPrevented() && (t = a(e).changedTouches[0], O.push({
                        touchID: U,
                        x: t.clientX,
                        y: t.clientY
                    }), H = !0)
                }
                m("vmouseout", e, i), I = !1, u()
            }
        }

        function C(t) {
            var i, n = e.data(t, T);
            if (n)
                for (i in n)
                    if (n[i]) return !0;
            return !1
        }

        function x() {}

        function y(t) {
            var i = t.substr(1);
            return {
                setup: function () {
                    C(this) || e.data(this, T, {});
                    var n = e.data(this, T);
                    n[t] = !0, j[t] = (j[t] || 0) + 1, 1 === j[t] && B.bind(i, f), e(this).bind(i, x), F && (j.touchstart = (j.touchstart || 0) + 1, 1 === j.touchstart && B.bind("touchstart", g).bind("touchend", _).bind("touchmove", v).bind("scroll", b))
                },
                teardown: function () {
                    --j[t], j[t] || B.unbind(i, f), F && (--j.touchstart, j.touchstart || B.unbind("touchstart", g).unbind("touchmove", v).unbind("touchend", _).unbind("scroll", b));
                    var n = e(this),
                        a = e.data(this, T);
                    a && (a[t] = !1), n.unbind(i, x), C(this) || n.removeData(T)
                }
            }
        }
        var w, T = "virtualMouseBindings",
            D = "virtualTouchID",
            P = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            k = "clientX clientY pageX pageY screenX screenY".split(" "),
            E = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            q = e.event.props.concat(E),
            j = {},
            S = 0,
            A = 0,
            N = 0,
            I = !1,
            O = [],
            H = !1,
            M = !1,
            F = "addEventListener" in i,
            B = e(i),
            L = 1,
            U = 0;
        e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        };
        for (var z = 0; P.length > z; z++) e.event.special[P[z]] = y(P[z]);
        F && i.addEventListener("click", function (t) {
            var i, a, o, s, r, l, d = O.length,
                c = t.target;
            if (d)
                for (i = t.clientX, a = t.clientY, w = e.vmouse.clickDistanceThreshold, o = c; o;) {
                    for (s = 0; d > s; s++)
                        if (r = O[s], l = 0, o === c && w > Math.abs(r.x - i) && w > Math.abs(r.y - a) || e.data(o, D) === r.touchID) return t.preventDefault(), t.stopPropagation(), n;
                    o = o.parentNode
                }
        }, !0)
    }(e, t, i),
    function (e, t, n) {
        function a(t, i, n) {
            var a = n.type;
            n.type = i, e.event.dispatch.call(t, n), n.type = a
        }
        var o = e(i);
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (t, i) {
            e.fn[i] = function (e) {
                return e ? this.bind(i, e) : this.trigger(i)
            }, e.attrFn && (e.attrFn[i] = !0)
        });
        var s = e.mobile.support.touch,
            r = "touchmove scroll",
            l = s ? "touchstart" : "mousedown",
            d = s ? "touchend" : "mouseup",
            c = s ? "touchmove" : "mousemove";
        e.event.special.scrollstart = {
            enabled: !0,
            setup: function () {
                function t(e, t) {
                    i = t, a(o, i ? "scrollstart" : "scrollstop", e)
                }
                var i, n, o = this,
                    s = e(o);
                s.bind(r, function (a) {
                    e.event.special.scrollstart.enabled && (i || t(a, !0), clearTimeout(n), n = setTimeout(function () {
                        t(a, !1)
                    }, 50))
                })
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            setup: function () {
                var t = this,
                    i = e(t);
                i.bind("vmousedown", function (n) {
                    function s() {
                        clearTimeout(d)
                    }

                    function r() {
                        s(), i.unbind("vclick", l).unbind("vmouseup", s), o.unbind("vmousecancel", r)
                    }

                    function l(e) {
                        r(), c === e.target && a(t, "tap", e)
                    }
                    if (n.which && 1 !== n.which) return !1;
                    var d, c = n.target;
                    n.originalEvent, i.bind("vmouseup", s).bind("vclick", l), o.bind("vmousecancel", r), d = setTimeout(function () {
                        a(t, "taphold", e.Event("taphold", {
                            target: c
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function (t) {
                var i = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                return {
                    time: (new Date).getTime(),
                    coords: [i.pageX, i.pageY],
                    origin: e(t.target)
                }
            },
            stop: function (e) {
                var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                return {
                    time: (new Date).getTime(),
                    coords: [t.pageX, t.pageY]
                }
            },
            handleSwipe: function (t, i) {
                i.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < e.event.special.swipe.verticalDistanceThreshold && t.origin.trigger("swipe").trigger(t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight")
            },
            setup: function () {
                var t = this,
                    i = e(t);
                i.bind(l, function (t) {
                    function a(t) {
                        s && (o = e.event.special.swipe.stop(t), Math.abs(s.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                    }
                    var o, s = e.event.special.swipe.start(t);
                    i.bind(c, a).one(d, function () {
                        i.unbind(c, a), s && o && e.event.special.swipe.handleSwipe(s, o), s = o = n
                    })
                })
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function (t, i) {
            e.event.special[t] = {
                setup: function () {
                    e(this).bind(i, e.noop)
                }
            }
        })
    }(e, this),
    function (e) {
        e.event.special.throttledresize = {
            setup: function () {
                e(this).bind("resize", o)
            },
            teardown: function () {
                e(this).unbind("resize", o)
            }
        };
        var t, i, n, a = 250,
            o = function () {
                i = (new Date).getTime(), n = i - s, n >= a ? (s = i, e(this).trigger("throttledresize")) : (t && clearTimeout(t), t = setTimeout(o, a - n))
            },
            s = 0
    }(e),
    function (e, t) {
        function a() {
            var e = o();
            e !== s && (s = e, d.trigger(c))
        }
        var o, s, r, l, d = e(t),
            c = "orientationchange",
            h = {
                0: !0,
                180: !0
            };
        if (e.support.orientation) {
            var u = t.innerWidth || d.width(),
                p = t.innerHeight || d.height(),
                m = 50;
            r = u > p && u - p > m, l = h[t.orientation], (r && l || !r && !l) && (h = {
                "-90": !0,
                90: !0
            })
        }
        e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (s = o(), d.bind("throttledresize", a), n)
            },
            teardown: function () {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (d.unbind("throttledresize", a), n)
            },
            add: function (e) {
                var t = e.handler;
                e.handler = function (e) {
                    return e.orientation = o(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = o = function () {
            var n = !0,
                a = i.documentElement;
            return n = e.support.orientation ? h[t.orientation] : a && 1.1 > a.clientWidth / a.clientHeight, n ? "portrait" : "landscape"
        }, e.fn[c] = function (e) {
            return e ? this.bind(c, e) : this.trigger(c)
        }, e.attrFn && (e.attrFn[c] = !0)
    }(e, this),
    function (e) {
        e.widget("mobile.page", e.mobile.widget, {
            options: {
                theme: "c",
                domCache: !1,
                keepNativeDefault: ":jqmData(role='none'), :jqmData(role='nojs')"
            },
            _create: function () {
                return this._trigger("beforecreate") === !1 ? !1 : (this.element.attr("tabindex", "0").addClass("ui-page ui-body-" + this.options.theme), this._on(this.element, {
                    pagebeforehide: "removeContainerBackground",
                    pagebeforeshow: "_handlePageBeforeShow"
                }), n)
            },
            _handlePageBeforeShow: function () {
                this.setContainerBackground()
            },
            removeContainerBackground: function () {
                e.mobile.pageContainer.removeClass("ui-overlay-" + e.mobile.getInheritedTheme(this.element.parent()))
            },
            setContainerBackground: function (t) {
                this.options.theme && e.mobile.pageContainer.addClass("ui-overlay-" + (t || this.options.theme))
            },
            keepNativeSelector: function () {
                var t = this.options,
                    i = t.keepNative && e.trim(t.keepNative);
                return i && t.keepNative !== t.keepNativeDefault ? [t.keepNative, t.keepNativeDefault].join(", ") : t.keepNativeDefault
            }
        })
    }(e),
    function (e, t, i) {
        var n = function (n) {
                return n === i && (n = !0),
                    function (i, a, o, s) {
                        var r = new e.Deferred,
                            l = a ? " reverse" : "",
                            d = e.mobile.urlHistory.getActive(),
                            c = d.lastScroll || e.mobile.defaultHomeScroll,
                            h = e.mobile.getScreenHeight(),
                            u = e.mobile.maxTransitionWidth !== !1 && e.mobile.window.width() > e.mobile.maxTransitionWidth,
                            p = !e.support.cssTransitions || u || !i || "none" === i || Math.max(e.mobile.window.scrollTop(), c) > e.mobile.getMaxScrollForTransition(),
                            m = " ui-page-pre-in",
                            f = function () {
                                e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-" + i)
                            },
                            g = function () {
                                e.event.special.scrollstart.enabled = !1, t.scrollTo(0, c), setTimeout(function () {
                                    e.event.special.scrollstart.enabled = !0
                                }, 150)
                            },
                            b = function () {
                                s.removeClass(e.mobile.activePageClass + " out in reverse " + i).height("")
                            },
                            v = function () {
                                n ? s.animationComplete(_) : _(), s.height(h + e.mobile.window.scrollTop()).addClass(i + " out" + l)
                            },
                            _ = function () {
                                s && n && b(), C()
                            },
                            C = function () {
                                o.css("z-index", -10), o.addClass(e.mobile.activePageClass + m), e.mobile.focusPage(o), o.height(h + c), g(), o.css("z-index", ""), p || o.animationComplete(x), o.removeClass(m).addClass(i + " in" + l), p && x()
                            },
                            x = function () {
                                n || s && b(), o.removeClass("out in reverse " + i).height(""), f(), e.mobile.window.scrollTop() !== c && g(), r.resolve(i, a, o, s, !0)
                            };
                        return f(), s && !p ? v() : _(), r.promise()
                    }
            },
            a = n(),
            o = n(!1),
            s = function () {
                return 3 * e.mobile.getScreenHeight()
            };
        e.mobile.defaultTransitionHandler = a, e.mobile.transitionHandlers = {
            "default": e.mobile.defaultTransitionHandler,
            sequential: a,
            simultaneous: o
        }, e.mobile.transitionFallbacks = {}, e.mobile._maybeDegradeTransition = function (t) {
            return t && !e.support.cssTransform3d && e.mobile.transitionFallbacks[t] && (t = e.mobile.transitionFallbacks[t]), t
        }, e.mobile.getMaxScrollForTransition = e.mobile.getMaxScrollForTransition || s
    }(e, this),
    function (e, n) {
        function a(t) {
            !f || f.closest("." + e.mobile.activePageClass).length && !t || f.removeClass(e.mobile.activeBtnClass), f = null
        }

        function o() {
            _ = !1, v.length > 0 && e.mobile.changePage.apply(null, v.pop())
        }

        function s(t, i, n, a) {
            i && i.data("mobile-page")._trigger("beforehide", null, {
                nextPage: t
            }), t.data("mobile-page")._trigger("beforeshow", null, {
                prevPage: i || e("")
            }), e.mobile.hidePageLoadingMsg(), n = e.mobile._maybeDegradeTransition(n);
            var o = e.mobile.transitionHandlers[n || "default"] || e.mobile.defaultTransitionHandler,
                s = o(n, a, t, i);
            return s.done(function () {
                i && i.data("mobile-page")._trigger("hide", null, {
                    nextPage: t
                }), t.data("mobile-page")._trigger("show", null, {
                    prevPage: i || e("")
                })
            }), s
        }

        function r(t, i) {
            i && t.attr("data-" + e.mobile.ns + "role", i), t.page()
        }

        function l() {
            var t = e.mobile.activePage && c(e.mobile.activePage);
            return t || w.hrefNoHash
        }

        function d(e) {
            for (; e && ("string" != typeof e.nodeName || "a" !== e.nodeName.toLowerCase());) e = e.parentNode;
            return e
        }

        function c(t) {
            var i = e(t).closest(".ui-page").jqmData("url"),
                n = w.hrefNoHash;
            return i && p.isPath(i) || (i = n), p.makeUrlAbsolute(i, n)
        }
        var h = e.mobile.window,
            u = (e("html"), e("head")),
            p = e.extend(e.mobile.path, {
                getFilePath: function (t) {
                    var i = "&" + e.mobile.subPageUrlKey;
                    return t && t.split(i)[0].split(C)[0]
                },
                isFirstPageUrl: function (t) {
                    var i = p.parseUrl(p.makeUrlAbsolute(t, this.documentBase)),
                        a = i.hrefNoHash === this.documentUrl.hrefNoHash || this.documentBaseDiffers && i.hrefNoHash === this.documentBase.hrefNoHash,
                        o = e.mobile.firstPage,
                        s = o && o[0] ? o[0].id : n;
                    return a && (!i.hash || "#" === i.hash || s && i.hash.replace(/^#/, "") === s)
                },
                isPermittedCrossDomainRequest: function (t, i) {
                    return e.mobile.allowCrossDomainPages && "file:" === t.protocol && -1 !== i.search(/^https?:/)
                }
            }),
            m = null,
            f = null,
            g = e.Deferred(),
            b = e.mobile.navigate.history,
            v = [],
            _ = !1,
            C = "&ui-state=dialog",
            x = u.children("base"),
            y = p.documentUrl,
            w = p.documentBase,
            T = (p.documentBaseDiffers, e.mobile.getScreenHeight),
            D = e.support.dynamicBaseTag ? {
                element: x.length ? x : e("<base>", {
                    href: w.hrefNoHash
                }).prependTo(u),
                set: function (e) {
                    e = p.parseUrl(e).hrefNoHash, D.element.attr("href", p.makeUrlAbsolute(e, w))
                },
                reset: function () {
                    D.element.attr("href", w.hrefNoSearch)
                }
            } : n;
        e.mobile.getDocumentUrl = p.getDocumentUrl, e.mobile.getDocumentBase = p.getDocumentBase, e.mobile.back = function () {
            var e = t.navigator;
            this.phonegapNavigationEnabled && e && e.app && e.app.backHistory ? e.app.backHistory() : t.history.back()
        }, e.mobile.focusPage = function (e) {
            var t = e.find("[autofocus]"),
                i = e.find(".ui-title:eq(0)");
            return t.length ? (t.focus(), n) : (i.length ? i.focus() : e.focus(), n)
        };
        var P, k, E = !0;
        P = function () {
            if (E) {
                var t = e.mobile.urlHistory.getActive();
                if (t) {
                    var i = h.scrollTop();
                    t.lastScroll = e.mobile.minScrollBack > i ? e.mobile.defaultHomeScroll : i
                }
            }
        }, k = function () {
            setTimeout(P, 100)
        }, h.bind(e.support.pushState ? "popstate" : "hashchange", function () {
            E = !1
        }), h.one(e.support.pushState ? "popstate" : "hashchange", function () {
            E = !0
        }), h.one("pagecontainercreate", function () {
            e.mobile.pageContainer.bind("pagechange", function () {
                E = !0, h.unbind("scrollstop", k), h.bind("scrollstop", k)
            })
        }), h.bind("scrollstop", k), e.mobile._maybeDegradeTransition = e.mobile._maybeDegradeTransition || function (e) {
            return e
        }, e.mobile.resetActivePageHeight = function (t) {
            var i = e("." + e.mobile.activePageClass),
                n = parseFloat(i.css("padding-top")),
                a = parseFloat(i.css("padding-bottom")),
                o = parseFloat(i.css("border-top-width")),
                s = parseFloat(i.css("border-bottom-width"));
            t = "number" == typeof t ? t : T(), i.css("min-height", t - n - a - o - s)
        }, e.fn.animationComplete = function (t) {
            return e.support.cssTransitions ? e(this).one("webkitAnimationEnd animationend", t) : (setTimeout(t, 0), e(this))
        }, e.mobile.path = p, e.mobile.base = D, e.mobile.urlHistory = b, e.mobile.dialogHashKey = C, e.mobile.allowCrossDomainPages = !1, e.mobile._bindPageRemove = function () {
            var t = e(this);
            !t.data("mobile-page").options.domCache && t.is(":jqmData(external-page='true')") && t.bind("pagehide.remove", function () {
                var t = e(this),
                    i = new e.Event("pageremove");
                t.trigger(i), i.isDefaultPrevented() || t.removeWithDependents()
            })
        }, e.mobile.loadPage = function (t, i) {
            var a = e.Deferred(),
                o = e.extend({}, e.mobile.loadPage.defaults, i),
                s = null,
                d = null,
                c = p.makeUrlAbsolute(t, l());
            o.data && "get" === o.type && (c = p.addSearchParams(c, o.data), o.data = n), o.data && "post" === o.type && (o.reloadPage = !0);
            var h = p.getFilePath(c),
                u = p.convertUrlToDataUrl(c);
            if (o.pageContainer = o.pageContainer || e.mobile.pageContainer, s = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + u + "']"), 0 === s.length && u && !p.isPath(u) && (s = o.pageContainer.children("#" + u).attr("data-" + e.mobile.ns + "url", u).jqmData("url", u)), 0 === s.length)
                if (e.mobile.firstPage && p.isFirstPageUrl(h)) e.mobile.firstPage.parent().length && (s = e(e.mobile.firstPage));
                else if (p.isEmbeddedPage(h)) return a.reject(c, i), a.promise();
            if (s.length) {
                if (!o.reloadPage) return r(s, o.role), a.resolve(c, i, s), D && !i.prefetch && D.set(t), a.promise();
                d = s
            }
            var m = o.pageContainer,
                f = new e.Event("pagebeforeload"),
                g = {
                    url: t,
                    absUrl: c,
                    dataUrl: u,
                    deferred: a,
                    options: o
                };
            if (m.trigger(f, g), f.isDefaultPrevented()) return a.promise();
            if (o.showLoadMsg) var b = setTimeout(function () {
                    e.mobile.showPageLoadingMsg()
                }, o.loadMsgDelay),
                v = function () {
                    clearTimeout(b), e.mobile.hidePageLoadingMsg()
                };
            return D && i.prefetch === n && D.reset(), e.mobile.allowCrossDomainPages || p.isSameDomain(y, c) ? e.ajax({
                url: h,
                type: o.type,
                data: o.data,
                contentType: o.contentType,
                dataType: "html",
                success: function (l, m, f) {
                    var b = e("<div></div>"),
                        _ = l.match(/<title[^>]*>([^<]*)/) && RegExp.$1,
                        C = RegExp("(<[^>]+\\bdata-" + e.mobile.ns + "role=[\"']?page[\"']?[^>]*>)"),
                        x = RegExp("\\bdata-" + e.mobile.ns + "url=[\"']?([^\"'>]*)[\"']?");
                    if (C.test(l) && RegExp.$1 && x.test(RegExp.$1) && RegExp.$1 && (t = h = p.getFilePath(e("<div>" + RegExp.$1 + "</div>").text())), D && i.prefetch === n && D.set(h), b.get(0).innerHTML = l, s = b.find(":jqmData(role='page'), :jqmData(role='dialog')").first(), s.length || (s = e("<div data-" + e.mobile.ns + "role='page'>" + (l.split(/<\/?body[^>]*>/gim)[1] || "") + "</div>")), _ && !s.jqmData("title") && (~_.indexOf("&") && (_ = e("<div>" + _ + "</div>").text()), s.jqmData("title", _)), !e.support.dynamicBaseTag) {
                        var y = p.get(h);
                        s.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function () {
                            var t = e(this).is("[href]") ? "href" : e(this).is("[src]") ? "src" : "action",
                                i = e(this).attr(t);
                            i = i.replace(location.protocol + "//" + location.host + location.pathname, ""), /^(\w+:|#|\/)/.test(i) || e(this).attr(t, y + i)
                        })
                    }
                    s.attr("data-" + e.mobile.ns + "url", p.convertUrlToDataUrl(h)).attr("data-" + e.mobile.ns + "external-page", !0).appendTo(o.pageContainer), s.one("pagecreate", e.mobile._bindPageRemove), r(s, o.role), c.indexOf("&" + e.mobile.subPageUrlKey) > -1 && (s = o.pageContainer.children("[data-" + e.mobile.ns + "url='" + u + "']")), o.showLoadMsg && v(), g.xhr = f, g.textStatus = m, g.page = s, o.pageContainer.trigger("pageload", g), a.resolve(c, i, s, d)
                },
                error: function (t, n, s) {
                    D && D.set(p.get()), g.xhr = t, g.textStatus = n, g.errorThrown = s;
                    var r = new e.Event("pageloadfailed");
                    o.pageContainer.trigger(r, g), r.isDefaultPrevented() || (o.showLoadMsg && (v(), e.mobile.showPageLoadingMsg(e.mobile.pageLoadErrorMessageTheme, e.mobile.pageLoadErrorMessage, !0), setTimeout(e.mobile.hidePageLoadingMsg, 1500)), a.reject(c, i))
                }
            }) : a.reject(c, i), a.promise()
        }, e.mobile.loadPage.defaults = {
            type: "get",
            data: n,
            reloadPage: !1,
            role: n,
            showLoadMsg: !1,
            pageContainer: n,
            loadMsgDelay: 50
        }, e.mobile.changePage = function (t, d) {
            if (_) return v.unshift(arguments), n;
            var c, h = e.extend({}, e.mobile.changePage.defaults, d);
            h.pageContainer = h.pageContainer || e.mobile.pageContainer, h.fromPage = h.fromPage || e.mobile.activePage, c = "string" == typeof t;
            var u = h.pageContainer,
                m = new e.Event("pagebeforechange"),
                f = {
                    toPage: t,
                    options: h
                };
            if (f.absUrl = c ? p.makeUrlAbsolute(t, l()) : t.data("absUrl"), u.trigger(m, f), !m.isDefaultPrevented()) {
                if (t = f.toPage, c = "string" == typeof t, _ = !0, c) return h.target = t, e.mobile.loadPage(t, h).done(function (t, i, n, a) {
                    _ = !1, i.duplicateCachedPage = a, n.data("absUrl", f.absUrl), e.mobile.changePage(n, i)
                }).fail(function () {
                    a(!0), o(), h.pageContainer.trigger("pagechangefailed", f)
                }), n;
                t[0] !== e.mobile.firstPage[0] || h.dataUrl || (h.dataUrl = y.hrefNoHash);
                var g = h.fromPage,
                    x = h.dataUrl && p.convertUrlToDataUrl(h.dataUrl) || t.jqmData("url"),
                    w = x,
                    T = (p.getFilePath(x), b.getActive()),
                    D = 0 === b.activeIndex,
                    P = 0,
                    k = i.title,
                    E = "dialog" === h.role || "dialog" === t.jqmData("role");
                if (g && g[0] === t[0] && !h.allowSamePageTransition) return _ = !1, u.trigger("pagechange", f), h.fromHashChange && b.direct({
                    url: x
                }), n;
                r(t, h.role), h.fromHashChange && (P = "back" === d.direction ? -1 : 1);
                try {
                    i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() ? e(i.activeElement).blur() : e("input:focus, textarea:focus, select:focus").blur()
                } catch (q) {}
                var j = !1;
                E && T && (T.url && T.url.indexOf(C) > -1 && e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog") && b.activeIndex > 0 && (h.changeHash = !1, j = !0), x = T.url || "", x += !j && x.indexOf("#") > -1 ? C : "#" + C, 0 === b.activeIndex && x === b.initialDst && (x += C));
                var S = T ? t.jqmData("title") || t.children(":jqmData(role='header')").find(".ui-title").text() : k;
                if (S && k === i.title && (k = S), t.jqmData("title") || t.jqmData("title", k), h.transition = h.transition || (P && !D ? T.transition : n) || (E ? e.mobile.defaultDialogTransition : e.mobile.defaultPageTransition), !P && j && (b.getActive().pageUrl = w), x && !h.fromHashChange) {
                    var A;
                    !p.isPath(x) && 0 > x.indexOf("#") && (x = "#" + x), A = {
                        transition: h.transition,
                        title: k,
                        pageUrl: w,
                        role: h.role
                    }, h.changeHash !== !1 && e.mobile.hashListeningEnabled ? e.mobile.navigate(x, A, !0) : t[0] !== e.mobile.firstPage[0] && e.mobile.navigate.history.add(x, A)
                }
                i.title = k, e.mobile.activePage = t, h.reverse = h.reverse || 0 > P, s(t, g, h.transition, h.reverse).done(function (i, n, s, r, l) {
                    a(), h.duplicateCachedPage && h.duplicateCachedPage.remove(), l || e.mobile.focusPage(t), o(), u.trigger("pagechange", f)
                })
            }
        }, e.mobile.changePage.defaults = {
            transition: n,
            reverse: !1,
            changeHash: !0,
            fromHashChange: !1,
            role: n,
            duplicateCachedPage: n,
            pageContainer: n,
            showLoadMsg: !0,
            dataUrl: n,
            fromPage: n,
            allowSamePageTransition: !1
        }, e.mobile.navreadyDeferred = e.Deferred(), e.mobile._registerInternalEvents = function () {
            var i = function (t, i) {
                var a, o, s, r, l = !0;
                return !e.mobile.ajaxEnabled || t.is(":jqmData(ajax='false')") || !t.jqmHijackable().length || t.attr("target") ? !1 : (a = t.attr("action"), r = (t.attr("method") || "get").toLowerCase(), a || (a = c(t), "get" === r && (a = p.parseUrl(a).hrefNoSearch), a === w.hrefNoHash && (a = y.hrefNoSearch)), a = p.makeUrlAbsolute(a, c(t)), p.isExternal(a) && !p.isPermittedCrossDomainRequest(y, a) ? !1 : (i || (o = t.serializeArray(), m && m[0].form === t[0] && (s = m.attr("name"), s && (e.each(o, function (e, t) {
                    return t.name === s ? (s = "", !1) : n
                }), s && o.push({
                    name: s,
                    value: m.attr("value")
                }))), l = {
                    url: a,
                    options: {
                        type: r,
                        data: e.param(o),
                        transition: t.jqmData("transition"),
                        reverse: "reverse" === t.jqmData("direction"),
                        reloadPage: !0
                    }
                }), l))
            };
            e.mobile.document.delegate("form", "submit", function (t) {
                var n = i(e(this));
                n && (e.mobile.changePage(n.url, n.options), t.preventDefault())
            }), e.mobile.document.bind("vclick", function (t) {
                var n, o, s = t.target,
                    r = !1;
                if (!(t.which > 1) && e.mobile.linkBindingEnabled) {
                    if (m = e(s), e.data(s, "mobile-button")) {
                        if (!i(e(s).closest("form"), !0)) return;
                        s.parentNode && (s = s.parentNode)
                    } else {
                        if (s = d(s), !s || "#" === p.parseUrl(s.getAttribute("href") || "#").hash) return;
                        if (!e(s).jqmHijackable().length) return
                    }~s.className.indexOf("ui-link-inherit") ? s.parentNode && (o = e.data(s.parentNode, "buttonElements")) : o = e.data(s, "buttonElements"), o ? s = o.outer : r = !0, n = e(s), r && (n = n.closest(".ui-btn")), n.length > 0 && !n.hasClass("ui-disabled") && (a(!0), f = n, f.addClass(e.mobile.activeBtnClass))
                }
            }), e.mobile.document.bind("click", function (i) {
                if (e.mobile.linkBindingEnabled && !i.isDefaultPrevented()) {
                    var o, s = d(i.target),
                        r = e(s);
                    if (s && !(i.which > 1) && r.jqmHijackable().length) {
                        if (o = function () {
                                t.setTimeout(function () {
                                    a(!0)
                                }, 200)
                            }, r.is(":jqmData(rel='back')")) return e.mobile.back(), !1;
                        var l = c(r),
                            h = p.makeUrlAbsolute(r.attr("href") || "#", l);
                        if (!e.mobile.ajaxEnabled && !p.isEmbeddedPage(h)) return o(), n;
                        if (-1 !== h.search("#")) {
                            if (h = h.replace(/[^#]*#/, ""), !h) return i.preventDefault(), n;
                            h = p.isPath(h) ? p.makeUrlAbsolute(h, l) : p.makeUrlAbsolute("#" + h, y.hrefNoHash)
                        }
                        var u = r.is("[rel='external']") || r.is(":jqmData(ajax='false')") || r.is("[target]"),
                            m = u || p.isExternal(h) && !p.isPermittedCrossDomainRequest(y, h);
                        if (m) return o(), n;
                        var f = r.jqmData("transition"),
                            g = "reverse" === r.jqmData("direction") || r.jqmData("back"),
                            b = r.attr("data-" + e.mobile.ns + "rel") || n;
                        e.mobile.changePage(h, {
                            transition: f,
                            reverse: g,
                            role: b,
                            link: r
                        }), i.preventDefault()
                    }
                }
            }), e.mobile.document.delegate(".ui-page", "pageshow.prefetch", function () {
                var t = [];
                e(this).find("a:jqmData(prefetch)").each(function () {
                    var i = e(this),
                        n = i.attr("href");
                    n && -1 === e.inArray(n, t) && (t.push(n), e.mobile.loadPage(n, {
                        role: i.attr("data-" + e.mobile.ns + "rel"),
                        prefetch: !0
                    }))
                })
            }), e.mobile._handleHashChange = function (i, a) {
                var o = p.stripHash(i),
                    s = 0 === e.mobile.urlHistory.stack.length ? "none" : n,
                    r = {
                        changeHash: !1,
                        fromHashChange: !0,
                        reverse: "back" === a.direction
                    };
                if (e.extend(r, a, {
                        transition: (b.getLast() || {}).transition || s
                    }), b.activeIndex > 0 && o.indexOf(C) > -1 && b.initialDst !== o) {
                    if (e.mobile.activePage && !e.mobile.activePage.is(".ui-dialog")) return "back" === a.direction ? e.mobile.back() : t.history.forward(), n;
                    o = a.pageUrl;
                    var l = e.mobile.urlHistory.getActive();
                    e.extend(r, {
                        role: l.role,
                        transition: l.transition,
                        reverse: "back" === a.direction
                    })
                }
                o ? (o = p.isPath(o) ? o : p.makeUrlAbsolute("#" + o, w), o === p.makeUrlAbsolute("#" + b.initialDst, w) && b.stack.length && b.stack[0].url !== b.initialDst.replace(C, "") && (o = e.mobile.firstPage), e.mobile.changePage(o, r)) : e.mobile.changePage(e.mobile.firstPage, r)
            }, h.bind("navigate", function (t, i) {
                var n;
                t.originalEvent && t.originalEvent.isDefaultPrevented() || (n = e.event.special.navigate.originalEventName.indexOf("hashchange") > -1 ? i.state.hash : i.state.url, n || (n = e.mobile.path.parseLocation().hash), n && "#" !== n && 0 !== n.indexOf("#" + e.mobile.path.uiStateKey) || (n = location.href), e.mobile._handleHashChange(n, i.state))
            }), e.mobile.document.bind("pageshow", e.mobile.resetActivePageHeight), e.mobile.window.bind("throttledresize", e.mobile.resetActivePageHeight)
        }, e(function () {
            g.resolve()
        }), e.when(g, e.mobile.navreadyDeferred).done(function () {
            e.mobile._registerInternalEvents()
        })
    }(e),
    function (e) {
        e.mobile.transitionFallbacks.flip = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.flow = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.pop = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionHandlers.slide = e.mobile.transitionHandlers.simultaneous, e.mobile.transitionFallbacks.slide = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slidedown = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slidefade = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.slideup = "fade"
    }(e, this),
    function (e) {
        e.mobile.transitionFallbacks.turn = "fade"
    }(e, this),
    function (e) {
        e.mobile.page.prototype.options.degradeInputs = {
            color: !1,
            date: !1,
            datetime: !1,
            "datetime-local": !1,
            email: !1,
            month: !1,
            number: !1,
            range: "number",
            search: "text",
            tel: !1,
            time: !1,
            url: !1,
            week: !1
        }, e.mobile.document.bind("pagecreate create", function (t) {
            var i, n = e.mobile.closestPageData(e(t.target));
            n && (i = n.options, e(t.target).find("input").not(n.keepNativeSelector()).each(function () {
                var t = e(this),
                    n = this.getAttribute("type"),
                    a = i.degradeInputs[n] || "text";
                if (i.degradeInputs[n]) {
                    var o = e("<div>").html(t.clone()).html(),
                        s = o.indexOf(" type=") > -1,
                        r = s ? /\s+type=["']?\w+['"]?/ : /\/?>/,
                        l = ' type="' + a + '" data-' + e.mobile.ns + 'type="' + n + '"' + (s ? "" : ">");
                    t.replaceWith(o.replace(r, l))
                }
            }))
        })
    }(e),
    function (e) {
        e.widget("mobile.dialog", e.mobile.widget, {
            options: {
                closeBtn: "left",
                closeBtnText: "Close",
                overlayTheme: "a",
                corners: !0,
                initSelector: ":jqmData(role='dialog')"
            },
            _handlePageBeforeShow: function () {
                this._isCloseable = !0, this.options.overlayTheme && this.element.page("removeContainerBackground").page("setContainerBackground", this.options.overlayTheme)
            },
            _create: function () {
                var t = this.element,
                    i = this.options.corners ? " ui-corner-all" : "",
                    n = e("<div/>", {
                        role: "dialog",
                        "class": "ui-dialog-contain ui-overlay-shadow" + i
                    });
                t.addClass("ui-dialog ui-overlay-" + this.options.overlayTheme), t.wrapInner(n), t.bind("vclick submit", function (t) {
                    var i, n = e(t.target).closest("vclick" === t.type ? "a" : "form");
                    n.length && !n.jqmData("transition") && (i = e.mobile.urlHistory.getActive() || {}, n.attr("data-" + e.mobile.ns + "transition", i.transition || e.mobile.defaultDialogTransition).attr("data-" + e.mobile.ns + "direction", "reverse"))
                }), this._on(t, {
                    pagebeforeshow: "_handlePageBeforeShow"
                }), e.extend(this, {
                    _createComplete: !1
                }), this._setCloseBtn(this.options.closeBtn)
            },
            _setCloseBtn: function (t) {
                var i, n, a = this;
                this._headerCloseButton && (this._headerCloseButton.remove(), this._headerCloseButton = null), "none" !== t && (n = "left" === t ? "left" : "right", i = e("<a href='#' class='ui-btn-" + n + "' data-" + e.mobile.ns + "icon='delete' data-" + e.mobile.ns + "iconpos='notext'>" + this.options.closeBtnText + "</a>"), this.element.children().find(":jqmData(role='header')").first().prepend(i), this._createComplete && e.fn.buttonMarkup && i.buttonMarkup(), this._createComplete = !0, i.bind("click", function () {
                    a.close()
                }), this._headerCloseButton = i)
            },
            _setOption: function (e, t) {
                "closeBtn" === e && this._setCloseBtn(t), this._super(e, t)
            },
            close: function () {
                var t, i, n = e.mobile.navigate.history;
                this._isCloseable && (this._isCloseable = !1, e.mobile.hashListeningEnabled && n.activeIndex > 0 ? e.mobile.back() : (t = Math.max(0, n.activeIndex - 1), i = n.stack[t].pageUrl || n.stack[t].url, n.previousIndex = n.activeIndex, n.activeIndex = t, e.mobile.path.isPath(i) || (i = e.mobile.path.makeUrlAbsolute("#" + i)), e.mobile.changePage(i, {
                    direction: "back",
                    changeHash: !1,
                    fromHashChange: !0
                })))
            }
        }), e.mobile.document.delegate(e.mobile.dialog.prototype.options.initSelector, "pagecreate", function () {
            e.mobile.dialog.prototype.enhance(this)
        })
    }(e, this),
    function (e) {
        e.mobile.page.prototype.options.backBtnText = "Back", e.mobile.page.prototype.options.addBackBtn = !1, e.mobile.page.prototype.options.backBtnTheme = null, e.mobile.page.prototype.options.headerTheme = "a", e.mobile.page.prototype.options.footerTheme = "a", e.mobile.page.prototype.options.contentTheme = null, e.mobile.document.bind("pagecreate", function (t) {
            var i = e(t.target),
                n = i.data("mobile-page").options,
                a = i.jqmData("role"),
                o = n.theme;
            e(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')", i).jqmEnhanceable().each(function () {
                var t, s, r, l, d = e(this),
                    c = d.jqmData("role"),
                    h = d.jqmData("theme"),
                    u = h || n.contentTheme || "dialog" === a && o;
                if (d.addClass("ui-" + c), "header" === c || "footer" === c) {
                    var p = h || ("header" === c ? n.headerTheme : n.footerTheme) || o;
                    d.addClass("ui-bar-" + p).attr("role", "header" === c ? "banner" : "contentinfo"), "header" === c && (t = d.children("a, button"), s = t.hasClass("ui-btn-left"), r = t.hasClass("ui-btn-right"), s = s || t.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length, r = r || t.eq(1).addClass("ui-btn-right").length), n.addBackBtn && "header" === c && e(".ui-page").length > 1 && i.jqmData("url") !== e.mobile.path.stripHash(location.hash) && !s && (l = e("<a href='javascript:void(0);' class='ui-btn-left' data-" + e.mobile.ns + "rel='back' data-" + e.mobile.ns + "icon='arrow-l'>" + n.backBtnText + "</a>").attr("data-" + e.mobile.ns + "theme", n.backBtnTheme || p).prependTo(d)), d.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({
                        role: "heading",
                        "aria-level": "1"
                    })
                } else "content" === c && (u && d.addClass("ui-body-" + u), d.attr("role", "main"))
            })
        })
    }(e),
    function (e, t) {
        function n(e) {
            for (var t; e && (t = "string" == typeof e.className && e.className + " ", !(t && t.indexOf("ui-btn ") > -1 && 0 > t.indexOf("ui-disabled ")));) e = e.parentNode;
            return e
        }

        function a(n, a, o, s, r) {
            var l = e.data(n[0], "buttonElements");
            n.removeClass(a).addClass(o), l && (l.bcls = e(i.createElement("div")).addClass(l.bcls + " " + o).removeClass(a).attr("class"), s !== t && (l.hover = s), l.state = r)
        }
        var o = function (e, i) {
            var n = e.getAttribute(i);
            return "true" === n ? !0 : "false" === n ? !1 : null === n ? t : n
        };
        e.fn.buttonMarkup = function (n) {
            var a, r = this,
                l = "data-" + e.mobile.ns;
            n = n && "object" === e.type(n) ? n : {};
            for (var d = 0; r.length > d; d++) {
                var c, h, u, p, m, f, g = r.eq(d),
                    b = g[0],
                    v = e.extend({}, e.fn.buttonMarkup.defaults, {
                        icon: n.icon !== t ? n.icon : o(b, l + "icon"),
                        iconpos: n.iconpos !== t ? n.iconpos : o(b, l + "iconpos"),
                        theme: n.theme !== t ? n.theme : o(b, l + "theme") || e.mobile.getInheritedTheme(g, "c"),
                        inline: n.inline !== t ? n.inline : o(b, l + "inline"),
                        shadow: n.shadow !== t ? n.shadow : o(b, l + "shadow"),
                        corners: n.corners !== t ? n.corners : o(b, l + "corners"),
                        iconshadow: n.iconshadow !== t ? n.iconshadow : o(b, l + "iconshadow"),
                        mini: n.mini !== t ? n.mini : o(b, l + "mini")
                    }, n),
                    _ = "ui-btn-inner",
                    C = "ui-btn-text",
                    x = !1,
                    y = "up";
                for (a in v) v[a] === t || null === v[a] ? g.removeAttr(l + a) : b.setAttribute(l + a, v[a]);
                for ("popup" === o(b, l + "rel") && g.attr("href") && (b.setAttribute("aria-haspopup", !0), b.setAttribute("aria-owns", g.attr("href"))), f = e.data("INPUT" === b.tagName || "BUTTON" === b.tagName ? b.parentNode : b, "buttonElements"), f ? (b = f.outer, g = e(b), u = f.inner, p = f.text, e(f.icon).remove(), f.icon = null, x = f.hover, y = f.state) : (u = i.createElement(v.wrapperEls), p = i.createElement(v.wrapperEls)), m = v.icon ? i.createElement("span") : null, s && !f && s(), v.theme || (v.theme = e.mobile.getInheritedTheme(g, "c")), c = "ui-btn ", c += x ? "ui-btn-hover-" + v.theme : "", c += y ? " ui-btn-" + y + "-" + v.theme : "", c += v.shadow ? " ui-shadow" : "", c += v.corners ? " ui-btn-corner-all" : "", v.mini !== t && (c += v.mini === !0 ? " ui-mini" : " ui-fullsize"), v.inline !== t && (c += v.inline === !0 ? " ui-btn-inline" : " ui-btn-block"), v.icon && (v.icon = "ui-icon-" + v.icon, v.iconpos = v.iconpos || "left", h = "ui-icon " + v.icon, v.iconshadow && (h += " ui-icon-shadow")), v.iconpos && (c += " ui-btn-icon-" + v.iconpos, "notext" !== v.iconpos || g.attr("title") || g.attr("title", g.getEncodedText())), f && g.removeClass(f.bcls || ""), g.removeClass("ui-link").addClass(c), u.className = _, p.className = C, f || u.appendChild(p), m && (m.className = h, f && f.icon || (m.innerHTML = "&#160;", u.appendChild(m))); b.firstChild && !f;) p.appendChild(b.firstChild);
                f || b.appendChild(u), f = {
                    hover: x,
                    state: y,
                    bcls: c,
                    outer: b,
                    inner: u,
                    text: p,
                    icon: m
                }, e.data(b, "buttonElements", f), e.data(u, "buttonElements", f), e.data(p, "buttonElements", f), m && e.data(m, "buttonElements", f)
            }
            return this
        }, e.fn.buttonMarkup.defaults = {
            corners: !0,
            shadow: !0,
            iconshadow: !0,
            wrapperEls: "span"
        };
        var s = function () {
            var i, o, r = e.mobile.buttonMarkup.hoverDelay;
            e.mobile.document.bind({
                "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function (s) {
                    var l, d = e(n(s.target)),
                        c = s.originalEvent && /^touch/.test(s.originalEvent.type),
                        h = s.type;
                    d.length && (l = d.attr("data-" + e.mobile.ns + "theme"), "vmousedown" === h ? c ? i = setTimeout(function () {
                        a(d, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down")
                    }, r) : a(d, "ui-btn-up-" + l, "ui-btn-down-" + l, t, "down") : "vmousecancel" === h || "vmouseup" === h ? a(d, "ui-btn-down-" + l, "ui-btn-up-" + l, t, "up") : "vmouseover" === h || "focus" === h ? c ? o = setTimeout(function () {
                        a(d, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "")
                    }, r) : a(d, "ui-btn-up-" + l, "ui-btn-hover-" + l, !0, "") : ("vmouseout" === h || "blur" === h || "scrollstart" === h) && (a(d, "ui-btn-hover-" + l + " ui-btn-down-" + l, "ui-btn-up-" + l, !1, "up"), i && clearTimeout(i), o && clearTimeout(o)))
                },
                "focusin focus": function (t) {
                    e(n(t.target)).addClass(e.mobile.focusClass)
                },
                "focusout blur": function (t) {
                    e(n(t.target)).removeClass(e.mobile.focusClass)
                }
            }), s = null
        };
        e.mobile.document.bind("pagecreate create", function (t) {
            e(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a", t.target).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()
        })
    }(e),
    function (e, t) {
        e.widget("mobile.collapsible", e.mobile.widget, {
            options: {
                expandCueText: " click to expand contents",
                collapseCueText: " click to collapse contents",
                collapsed: !0,
                heading: "h1,h2,h3,h4,h5,h6,legend",
                collapsedIcon: "plus",
                expandedIcon: "minus",
                iconpos: "left",
                theme: null,
                contentTheme: null,
                inset: !0,
                corners: !0,
                mini: !1,
                initSelector: ":jqmData(role='collapsible')"
            },
            _create: function () {
                var i = this.element,
                    n = this.options,
                    a = i.addClass("ui-collapsible"),
                    o = i.children(n.heading).first(),
                    s = a.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),
                    r = i.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set"),
                    l = "";
                o.is("legend") && (o = e("<div role='heading'>" + o.html() + "</div>").insertBefore(o), o.next().remove()), r.length ? (n.theme || (n.theme = r.jqmData("theme") || e.mobile.getInheritedTheme(r, "c")), n.contentTheme || (n.contentTheme = r.jqmData("content-theme")), n.collapsedIcon = i.jqmData("collapsed-icon") || r.jqmData("collapsed-icon") || n.collapsedIcon, n.expandedIcon = i.jqmData("expanded-icon") || r.jqmData("expanded-icon") || n.expandedIcon, n.iconpos = i.jqmData("iconpos") || r.jqmData("iconpos") || n.iconpos, n.inset = r.jqmData("inset") !== t ? r.jqmData("inset") : !0, n.corners = !1, n.mini || (n.mini = r.jqmData("mini"))) : n.theme || (n.theme = e.mobile.getInheritedTheme(i, "c")), n.inset && (l += " ui-collapsible-inset", n.corners && (l += " ui-corner-all")), n.contentTheme && (l += " ui-collapsible-themed-content", s.addClass("ui-body-" + n.contentTheme)), "" !== l && a.addClass(l), o.insertBefore(s).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({
                    shadow: !1,
                    corners: !1,
                    iconpos: n.iconpos,
                    icon: n.collapsedIcon,
                    mini: n.mini,
                    theme: n.theme
                }), a.bind("expand collapse", function (t) {
                    if (!t.isDefaultPrevented()) {
                        var i = e(this),
                            a = "collapse" === t.type;
                        t.preventDefault(), o.toggleClass("ui-collapsible-heading-collapsed", a).find(".ui-collapsible-heading-status").text(a ? n.expandCueText : n.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-" + n.expandedIcon, !a).toggleClass("ui-icon-" + n.collapsedIcon, a || n.expandedIcon === n.collapsedIcon).end().find("a").first().removeClass(e.mobile.activeBtnClass), i.toggleClass("ui-collapsible-collapsed", a), s.toggleClass("ui-collapsible-content-collapsed", a).attr("aria-hidden", a), s.trigger("updatelayout")
                    }
                }).trigger(n.collapsed ? "collapse" : "expand"), o.bind("tap", function () {
                    o.find("a").first().addClass(e.mobile.activeBtnClass)
                }).bind("click", function (e) {
                    var t = o.is(".ui-collapsible-heading-collapsed") ? "expand" : "collapse";
                    a.trigger(t), e.preventDefault(), e.stopPropagation()
                })
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.collapsible.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.mobile.behaviors.addFirstLastClasses = {
            _getVisibles: function (e, t) {
                var i;
                return t ? i = e.not(".ui-screen-hidden") : (i = e.filter(":visible"), 0 === i.length && (i = e.not(".ui-screen-hidden"))), i
            },
            _addFirstLastClasses: function (e, t, i) {
                e.removeClass("ui-first-child ui-last-child"), t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"), i || this.element.trigger("updatelayout")
            }
        }
    }(e),
    function (e, t) {
        e.widget("mobile.collapsibleset", e.mobile.widget, e.extend({
            options: {
                initSelector: ":jqmData(role='collapsible-set')"
            },
            _create: function () {
                var i = this.element.addClass("ui-collapsible-set"),
                    n = this.options;
                n.theme || (n.theme = e.mobile.getInheritedTheme(i, "c")), n.contentTheme || (n.contentTheme = i.jqmData("content-theme")), n.corners || (n.corners = i.jqmData("corners")), i.jqmData("inset") !== t && (n.inset = i.jqmData("inset")), n.inset = n.inset !== t ? n.inset : !0, n.corners = n.corners !== t ? n.corners : !0, n.corners && n.inset && i.addClass("ui-corner-all"), i.jqmData("collapsiblebound") || i.jqmData("collapsiblebound", !0).bind("expand", function (t) {
                    var i = e(t.target).closest(".ui-collapsible");
                    i.parent().is(":jqmData(role='collapsible-set')") && i.siblings(".ui-collapsible").trigger("collapse")
                })
            },
            _init: function () {
                var e = this.element,
                    t = e.children(":jqmData(role='collapsible')"),
                    i = t.filter(":jqmData(collapsed='false')");
                this._refresh("true"), i.trigger("expand")
            },
            _refresh: function (t) {
                var i = this.element.children(":jqmData(role='collapsible')");
                e.mobile.collapsible.prototype.enhance(i.not(".ui-collapsible")), this._addFirstLastClasses(i, this._getVisibles(i, t), t)
            },
            refresh: function () {
                this._refresh(!1)
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.collapsibleset.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.fn.fieldcontain = function () {
            return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function () {
                return 3 === this.nodeType && !/\S/.test(this.nodeValue)
            }).remove()
        }, e(i).bind("pagecreate create", function (t) {
            e(":jqmData(role='fieldcontain')", t.target).jqmEnhanceable().fieldcontain()
        })
    }(e),
    function (e) {
        e.fn.grid = function (t) {
            return this.each(function () {
                var i, n = e(this),
                    a = e.extend({
                        grid: null
                    }, t),
                    o = n.children(),
                    s = {
                        solo: 1,
                        a: 2,
                        b: 3,
                        c: 4,
                        d: 5
                    },
                    r = a.grid;
                if (!r)
                    if (5 >= o.length)
                        for (var l in s) s[l] === o.length && (r = l);
                    else r = "a", n.addClass("ui-grid-duo");
                i = s[r], n.addClass("ui-grid-" + r), o.filter(":nth-child(" + i + "n+1)").addClass("ui-block-a"), i > 1 && o.filter(":nth-child(" + i + "n+2)").addClass("ui-block-b"), i > 2 && o.filter(":nth-child(" + i + "n+3)").addClass("ui-block-c"), i > 3 && o.filter(":nth-child(" + i + "n+4)").addClass("ui-block-d"), i > 4 && o.filter(":nth-child(" + i + "n+5)").addClass("ui-block-e")
            })
        }
    }(e),
    function (e, t) {
        e.widget("mobile.navbar", e.mobile.widget, {
            options: {
                iconpos: "top",
                grid: null,
                initSelector: ":jqmData(role='navbar')"
            },
            _create: function () {
                var n = this.element,
                    a = n.find("a"),
                    o = a.filter(":jqmData(icon)").length ? this.options.iconpos : t;
                n.addClass("ui-navbar ui-mini").attr("role", "navigation").find("ul").jqmEnhanceable().grid({
                    grid: this.options.grid
                }), a.buttonMarkup({
                    corners: !1,
                    shadow: !1,
                    inline: !0,
                    iconpos: o
                }), n.delegate("a", "vclick", function (t) {
                    var n = e(t.target).is("a") ? e(this) : e(this).parent("a");
                    if (!n.is(".ui-disabled, .ui-btn-active")) {
                        a.removeClass(e.mobile.activeBtnClass), e(this).addClass(e.mobile.activeBtnClass);
                        var o = e(this);
                        e(i).one("pagehide", function () {
                            o.removeClass(e.mobile.activeBtnClass)
                        })
                    }
                }), n.closest(".ui-page").bind("pagebeforeshow", function () {
                    a.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)
                })
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.navbar.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        var t = {};
        e.widget("mobile.listview", e.mobile.widget, e.extend({
            options: {
                theme: null,
                countTheme: "c",
                headerTheme: "b",
                dividerTheme: "b",
                icon: "arrow-r",
                splitIcon: "arrow-r",
                splitTheme: "b",
                corners: !0,
                shadow: !0,
                inset: !1,
                initSelector: ":jqmData(role='listview')"
            },
            _create: function () {
                var e = this,
                    t = "";
                t += e.options.inset ? " ui-listview-inset" : "", e.options.inset && (t += e.options.corners ? " ui-corner-all" : "", t += e.options.shadow ? " ui-shadow" : ""), e.element.addClass(function (e, i) {
                    return i + " ui-listview" + t
                }), e.refresh(!0)
            },
            _findFirstElementByTagName: function (e, t, i, n) {
                var a = {};
                for (a[i] = a[n] = !0; e;) {
                    if (a[e.nodeName]) return e;
                    e = e[t]
                }
                return null
            },
            _getChildrenByTagName: function (t, i, n) {
                var a = [],
                    o = {};
                for (o[i] = o[n] = !0, t = t.firstChild; t;) o[t.nodeName] && a.push(t), t = t.nextSibling;
                return e(a)
            },
            _addThumbClasses: function (t) {
                var i, n, a = t.length;
                for (i = 0; a > i; i++) n = e(this._findFirstElementByTagName(t[i].firstChild, "nextSibling", "img", "IMG")), n.length && (n.addClass("ui-li-thumb"), e(this._findFirstElementByTagName(n[0].parentNode, "parentNode", "li", "LI")).addClass(n.is(".ui-li-icon") ? "ui-li-has-icon" : "ui-li-has-thumb"))
            },
            refresh: function (t) {
                this.parentPage = this.element.closest(".ui-page"), this._createSubPages();
                var n, a, o, s, r, l, d, c, h, u, p, m, f = this.options,
                    g = this.element,
                    b = g.jqmData("dividertheme") || f.dividerTheme,
                    v = g.jqmData("splittheme"),
                    _ = g.jqmData("spliticon"),
                    C = g.jqmData("icon"),
                    x = this._getChildrenByTagName(g[0], "li", "LI"),
                    y = !!e.nodeName(g[0], "ol"),
                    w = !e.support.cssPseudoElement,
                    T = g.attr("start"),
                    D = {};
                y && w && g.find(".ui-li-dec").remove(), y && (T || 0 === T ? w ? d = parseInt(T, 10) : (c = parseInt(T, 10) - 1, g.css("counter-reset", "listnumbering " + c)) : w && (d = 1)), f.theme || (f.theme = e.mobile.getInheritedTheme(this.element, "c"));
                for (var P = 0, k = x.length; k > P; P++) {
                    if (n = x.eq(P), a = "ui-li", t || !n.hasClass("ui-li")) {
                        o = n.jqmData("theme") || f.theme, s = this._getChildrenByTagName(n[0], "a", "A");
                        var E = "list-divider" === n.jqmData("role");
                        s.length && !E ? (p = n.jqmData("icon"), n.buttonMarkup({
                            wrapperEls: "div",
                            shadow: !1,
                            corners: !1,
                            iconpos: "right",
                            icon: s.length > 1 || p === !1 ? !1 : p || C || f.icon,
                            theme: o
                        }), p !== !1 && 1 === s.length && n.addClass("ui-li-has-arrow"), s.first().removeClass("ui-link").addClass("ui-link-inherit"), s.length > 1 && (a += " ui-li-has-alt", r = s.last(), l = v || r.jqmData("theme") || f.splitTheme, m = r.jqmData("icon"), r.appendTo(n).attr("title", e.trim(r.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({
                            shadow: !1,
                            corners: !1,
                            theme: o,
                            icon: !1,
                            iconpos: "notext"
                        }).find(".ui-btn-inner").append(e(i.createElement("span")).buttonMarkup({
                            shadow: !0,
                            corners: !0,
                            theme: l,
                            iconpos: "notext",
                            icon: m || p || _ || f.splitIcon
                        })))) : E ? (a += " ui-li-divider ui-bar-" + (n.jqmData("theme") || b), n.attr("role", "heading"), y && (T || 0 === T ? w ? d = parseInt(T, 10) : (h = parseInt(T, 10) - 1, n.css("counter-reset", "listnumbering " + h)) : w && (d = 1))) : a += " ui-li-static ui-btn-up-" + o
                    }
                    y && w && 0 > a.indexOf("ui-li-divider") && (u = a.indexOf("ui-li-static") > 0 ? n : n.find(".ui-link-inherit"), u.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>" + d++ + ". </span>")), D[a] || (D[a] = []), D[a].push(n[0])
                }
                for (a in D) e(D[a]).addClass(a).children(".ui-btn-inner").addClass(a);
                g.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function () {
                    var t = e(this);
                    t.prependTo(t.parent())
                }).end().find(".ui-li-count").each(function () {
                    e(this).closest("li").addClass("ui-li-has-count")
                }).addClass("ui-btn-up-" + (g.jqmData("counttheme") || this.options.countTheme) + " ui-btn-corner-all"), this._addThumbClasses(x), this._addThumbClasses(g.find(".ui-link-inherit")), this._addFirstLastClasses(x, this._getVisibles(x, t), t), this._trigger("afterrefresh")
            },
            _idStringEscape: function (e) {
                return e.replace(/[^a-zA-Z0-9]/g, "-")
            },
            _createSubPages: function () {
                var i, a = this.element,
                    o = a.closest(".ui-page"),
                    s = o.jqmData("url"),
                    r = s || o[0][e.expando],
                    l = a.attr("id"),
                    d = this.options,
                    c = "data-" + e.mobile.ns,
                    h = this,
                    u = o.find(":jqmData(role='footer')").jqmData("id");
                if (t[r] === n && (t[r] = -1), l = l || ++t[r], e(a.find("li>ul, li>ol").toArray().reverse()).each(function (t) {
                        var n, o, r = e(this),
                            h = r.attr("id") || l + "-" + t,
                            p = r.parent(),
                            m = e(r.prevAll().toArray().reverse()),
                            f = m.length ? m : e("<span>" + e.trim(p.contents()[0].nodeValue) + "</span>"),
                            g = f.first().getEncodedText(),
                            b = (s || "") + "&" + e.mobile.subPageUrlKey + "=" + h,
                            v = r.jqmData("theme") || d.theme,
                            _ = r.jqmData("counttheme") || a.jqmData("counttheme") || d.countTheme;
                        i = !0, n = r.detach().wrap("<div " + c + "role='page' " + c + "url='" + b + "' " + c + "theme='" + v + "' " + c + "count-theme='" + _ + "'><div " + c + "role='content'></div></div>").parent().before("<div " + c + "role='header' " + c + "theme='" + d.headerTheme + "'><div class='ui-title'>" + g + "</div></div>").after(u ? e("<div " + c + "role='footer' " + c + "id='" + u + "'>") : "").parent().appendTo(e.mobile.pageContainer), n.page(), o = p.find("a:first"), o.length || (o = e("<a/>").html(f || g).prependTo(p.empty())), o.attr("href", "#" + b)
                    }).listview(), i && o.is(":jqmData(external-page='true')") && o.data("mobile-page").options.domCache === !1) {
                    var p = function (t, i) {
                        var n, a = i.nextPage,
                            r = new e.Event("pageremove");
                        i.nextPage && (n = a.jqmData("url"), 0 !== n.indexOf(s + "&" + e.mobile.subPageUrlKey) && (h.childPages().remove(), o.trigger(r), r.isDefaultPrevented() || o.removeWithDependents()))
                    };
                    o.unbind("pagehide.remove").bind("pagehide.remove", p)
                }
            },
            childPages: function () {
                var t = this.parentPage.jqmData("url");
                return e(":jqmData(url^='" + t + "&" + e.mobile.subPageUrlKey + "')")
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.listview.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        var t = e("meta[name=viewport]"),
            i = t.attr("content"),
            n = i + ",maximum-scale=1, user-scalable=no",
            a = i + ",maximum-scale=10, user-scalable=yes",
            o = /(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(i);
        e.mobile.zoom = e.extend({}, {
            enabled: !o,
            locked: !1,
            disable: function (i) {
                o || e.mobile.zoom.locked || (t.attr("content", n), e.mobile.zoom.enabled = !1, e.mobile.zoom.locked = i || !1)
            },
            enable: function (i) {
                o || e.mobile.zoom.locked && i !== !0 || (t.attr("content", a), e.mobile.zoom.enabled = !0, e.mobile.zoom.locked = !1)
            },
            restore: function () {
                o || (t.attr("content", i), e.mobile.zoom.enabled = !0)
            }
        })
    }(e),
    function (e) {
        e.widget("mobile.textinput", e.mobile.widget, {
            options: {
                theme: null,
                mini: !1,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",
                clearBtn: !1,
                clearSearchButtonText: null,
                clearBtnText: "clear text",
                disabled: !1
            },
            _create: function () {
                function t() {
                    setTimeout(function () {
                        a.toggleClass("ui-input-clear-hidden", !s.val())
                    }, 0)
                }
                var i, a, o = this,
                    s = this.element,
                    r = this.options,
                    l = r.theme || e.mobile.getInheritedTheme(this.element, "c"),
                    d = " ui-body-" + l,
                    c = r.mini ? " ui-mini" : "",
                    h = s.is("[type='search'], :jqmData(type='search')"),
                    u = r.clearSearchButtonText || r.clearBtnText,
                    p = s.is("textarea, :jqmData(type='range')"),
                    m = !!r.clearBtn && !p,
                    f = s.is("input") && !s.is(":jqmData(type='range')");
                if (e("label[for='" + s.attr("id") + "']").addClass("ui-input-text"), i = s.addClass("ui-input-text ui-body-" + l), s[0].autocorrect === n || e.support.touchOverflow || (s[0].setAttribute("autocorrect", "off"), s[0].setAttribute("autocomplete", "off")), h ? i = s.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield" + d + c + "'></div>").parent() : f && (i = s.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow" + d + c + "'></div>").parent()), m || h ? (a = e("<a href='#' class='ui-input-clear' title='" + u + "'>" + u + "</a>").bind("click", function (e) {
                        s.val("").focus().trigger("change"), a.addClass("ui-input-clear-hidden"), e.preventDefault()
                    }).appendTo(i).buttonMarkup({
                        icon: "delete",
                        iconpos: "notext",
                        corners: !0,
                        shadow: !0,
                        mini: r.mini
                    }), h || i.addClass("ui-input-has-clear"), t(), s.bind("paste cut keyup input focus change blur", t)) : f || h || s.addClass("ui-corner-all ui-shadow-inset" + d + c), s.focus(function () {
                        r.preventFocusZoom && e.mobile.zoom.disable(!0), i.addClass(e.mobile.focusClass)
                    }).blur(function () {
                        i.removeClass(e.mobile.focusClass), r.preventFocusZoom && e.mobile.zoom.enable(!0)
                    }), s.is("textarea")) {
                    var g, b = 15,
                        v = 100;
                    this._keyup = function () {
                        var e = s[0].scrollHeight,
                            t = s[0].clientHeight;
                        if (e > t) {
                            var i = parseFloat(s.css("padding-top")),
                                n = parseFloat(s.css("padding-bottom")),
                                a = i + n;
                            s.height(e - a + b)
                        }
                    }, s.on("keyup change input paste", function () {
                        clearTimeout(g), g = setTimeout(o._keyup, v)
                    }), this._on(!0, e.mobile.document, {
                        pagechange: "_keyup"
                    }), e.trim(s.val()) && this._on(!0, e.mobile.window, {
                        load: "_keyup"
                    })
                }
                s.attr("disabled") && this.disable()
            },
            disable: function () {
                var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
                    i = this.element.is("input") && !this.element.is(":jqmData(type='range')"),
                    n = this.element.attr("disabled", !0) && (i || t);
                return e = n ? this.element.parent() : this.element, e.addClass("ui-disabled"), this._setOption("disabled", !0)
            },
            enable: function () {
                var e, t = this.element.is("[type='search'], :jqmData(type='search')"),
                    i = this.element.is("input") && !this.element.is(":jqmData(type='range')"),
                    n = this.element.attr("disabled", !1) && (i || t);
                return e = n ? this.element.parent() : this.element, e.removeClass("ui-disabled"), this._setOption("disabled", !1)
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.textinput.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.mobile.listview.prototype.options.filter = !1, e.mobile.listview.prototype.options.filterPlaceholder = "Filter items...", e.mobile.listview.prototype.options.filterTheme = "c", e.mobile.listview.prototype.options.filterReveal = !1;
        var t = function (e, t) {
            return -1 === ("" + e).toLowerCase().indexOf(t)
        };
        e.mobile.listview.prototype.options.filterCallback = t, e.mobile.document.delegate("ul, ol", "listviewcreate", function () {
            var i = e(this),
                n = i.data("mobile-listview");
            if (n && n.options.filter) {
                n.options.filterReveal && i.children().addClass("ui-screen-hidden");
                var a = e("<form>", {
                        "class": "ui-listview-filter ui-bar-" + n.options.filterTheme,
                        role: "search"
                    }).submit(function (e) {
                        e.preventDefault(), s.blur()
                    }),
                    o = function () {
                        var a, o = e(this),
                            s = this.value.toLowerCase(),
                            r = null,
                            l = i.children(),
                            d = o.jqmData("lastval") + "",
                            c = !1,
                            h = "",
                            u = n.options.filterCallback !== t;
                        if (!d || d !== s) {
                            if (n._trigger("beforefilter", "beforefilter", {
                                    input: this
                                }), o.jqmData("lastval", s), u || s.length < d.length || 0 !== s.indexOf(d) ? r = i.children() : (r = i.children(":not(.ui-screen-hidden)"), !r.length && n.options.filterReveal && (r = i.children(".ui-screen-hidden"))), s) {
                                for (var p = r.length - 1; p >= 0; p--) a = e(r[p]), h = a.jqmData("filtertext") || a.text(), a.is("li:jqmData(role=list-divider)") ? (a.toggleClass("ui-filter-hidequeue", !c), c = !1) : n.options.filterCallback(h, s, a) ? a.toggleClass("ui-filter-hidequeue", !0) : c = !0;
                                r.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden", !1), r.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden", !0).toggleClass("ui-filter-hidequeue", !1)
                            } else r.toggleClass("ui-screen-hidden", !!n.options.filterReveal);
                            n._addFirstLastClasses(l, n._getVisibles(l, !1), !1)
                        }
                    },
                    s = e("<input>", {
                        placeholder: n.options.filterPlaceholder
                    }).attr("data-" + e.mobile.ns + "type", "search").jqmData("lastval", "").bind("keyup change input", o).appendTo(a).textinput();
                n.options.inset && a.addClass("ui-listview-filter-inset"), a.bind("submit", function () {
                    return !1
                }).insertBefore(i)
            }
        })
    }(e),
    function (e) {
        e.mobile.listview.prototype.options.autodividers = !1, e.mobile.listview.prototype.options.autodividersSelector = function (t) {
            var i = e.trim(t.text()) || null;
            return i ? i = i.slice(0, 1).toUpperCase() : null
        }, e.mobile.document.delegate("ul,ol", "listviewcreate", function () {
            var t = e(this),
                n = t.data("mobile-listview");
            if (n && n.options.autodividers) {
                var a = function () {
                        t.find("li:jqmData(role='list-divider')").remove();
                        for (var a, o, s = t.find("li"), r = null, l = 0; s.length > l; l++) {
                            if (a = s[l], o = n.options.autodividersSelector(e(a)), o && r !== o) {
                                var d = i.createElement("li");
                                d.appendChild(i.createTextNode(o)), d.setAttribute("data-" + e.mobile.ns + "role", "list-divider"), a.parentNode.insertBefore(d, a)
                            }
                            r = o
                        }
                    },
                    o = function () {
                        t.unbind("listviewafterrefresh", o), a(), n.refresh(), t.bind("listviewafterrefresh", o)
                    };
                o()
            }
        })
    }(e),
    function (e) {
        e(i).bind("pagecreate create", function (t) {
            e(":jqmData(role='nojs')", t.target).addClass("ui-nojs")
        })
    }(e),
    function (e) {
        e.mobile.behaviors.formReset = {
            _handleFormReset: function () {
                this._on(this.element.closest("form"), {
                    reset: function () {
                        this._delay("_reset")
                    }
                })
            }
        }
    }(e),
    function (e) {
        e.widget("mobile.checkboxradio", e.mobile.widget, e.extend({
            options: {
                theme: null,
                mini: !1,
                initSelector: "input[type='checkbox'],input[type='radio']"
            },
            _create: function () {
                var t = this,
                    a = this.element,
                    o = this.options,
                    s = function (e, t) {
                        return e.jqmData(t) || e.closest("form, fieldset").jqmData(t)
                    },
                    r = e(a).closest("label"),
                    l = r.length ? r : e(a).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='" + a[0].id + "']").first(),
                    d = a[0].type,
                    c = s(a, "mini") || o.mini,
                    h = d + "-on",
                    u = d + "-off",
                    p = s(a, "iconpos"),
                    m = "ui-" + h,
                    f = "ui-" + u;
                if ("checkbox" === d || "radio" === d) {
                    e.extend(this, {
                        label: l,
                        inputtype: d,
                        checkedClass: m,
                        uncheckedClass: f,
                        checkedicon: h,
                        uncheckedicon: u
                    }), o.theme || (o.theme = e.mobile.getInheritedTheme(this.element, "c")), l.buttonMarkup({
                        theme: o.theme,
                        icon: u,
                        shadow: !1,
                        mini: c,
                        iconpos: p
                    });
                    var g = i.createElement("div");
                    g.className = "ui-" + d, a.add(l).wrapAll(g), l.bind({
                        vmouseover: function (t) {
                            e(this).parent().is(".ui-disabled") && t.stopPropagation()
                        },
                        vclick: function (e) {
                            return a.is(":disabled") ? (e.preventDefault(), n) : (t._cacheVals(), a.prop("checked", "radio" === d && !0 || !a.prop("checked")), a.triggerHandler("click"), t._getInputSet().not(a).prop("checked", !1), t._updateAll(), !1)
                        }
                    }), a.bind({
                        vmousedown: function () {
                            t._cacheVals()
                        },
                        vclick: function () {
                            var i = e(this);
                            i.is(":checked") ? (i.prop("checked", !0), t._getInputSet().not(i).prop("checked", !1)) : i.prop("checked", !1), t._updateAll()
                        },
                        focus: function () {
                            l.addClass(e.mobile.focusClass)
                        },
                        blur: function () {
                            l.removeClass(e.mobile.focusClass)
                        }
                    }), this._handleFormReset(), this.refresh()
                }
            },
            _cacheVals: function () {
                this._getInputSet().each(function () {
                    e(this).jqmData("cacheVal", this.checked)
                })
            },
            _getInputSet: function () {
                return "checkbox" === this.inputtype ? this.element : this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='" + this.element[0].name + "'][type='" + this.inputtype + "']")
            },
            _updateAll: function () {
                var t = this;
                this._getInputSet().each(function () {
                    var i = e(this);
                    (this.checked || "checkbox" === t.inputtype) && i.trigger("change")
                }).checkboxradio("refresh")
            },
            _reset: function () {
                this.refresh()
            },
            refresh: function () {
                var t = this.element[0],
                    i = " " + e.mobile.activeBtnClass,
                    n = this.checkedClass + (this.element.parents(".ui-controlgroup-horizontal").length ? i : ""),
                    a = this.label;
                t.checked ? a.removeClass(this.uncheckedClass + i).addClass(n).buttonMarkup({
                    icon: this.checkedicon
                }) : a.removeClass(n).addClass(this.uncheckedClass).buttonMarkup({
                    icon: this.uncheckedicon
                }), t.disabled ? this.disable() : this.enable()
            },
            disable: function () {
                this.element.prop("disabled", !0).parent().addClass("ui-disabled")
            },
            enable: function () {
                this.element.prop("disabled", !1).parent().removeClass("ui-disabled")
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.checkboxradio.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.button", e.mobile.widget, {
            options: {
                theme: null,
                icon: null,
                iconpos: null,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                inline: null,
                mini: null,
                initSelector: "button, [type='button'], [type='submit'], [type='reset']"
            },
            _create: function () {
                var t, i = this.element,
                    a = function (e) {
                        var t, i = {};
                        for (t in e) null !== e[t] && "initSelector" !== t && (i[t] = e[t]);
                        return i
                    }(this.options),
                    o = "";
                return "A" === i[0].tagName ? (i.hasClass("ui-btn") || i.buttonMarkup(), n) : (this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.element, "c")), ~i[0].className.indexOf("ui-btn-left") && (o = "ui-btn-left"), ~i[0].className.indexOf("ui-btn-right") && (o = "ui-btn-right"), ("submit" === i.attr("type") || "reset" === i.attr("type")) && (o ? o += " ui-submit" : o = "ui-submit"), e("label[for='" + i.attr("id") + "']").addClass("ui-submit"), this.button = e("<div></div>")[i.html() ? "html" : "text"](i.html() || i.val()).insertBefore(i).buttonMarkup(a).addClass(o).append(i.addClass("ui-btn-hidden")), t = this.button, i.bind({
                    focus: function () {
                        t.addClass(e.mobile.focusClass)
                    },
                    blur: function () {
                        t.removeClass(e.mobile.focusClass)
                    }
                }), this.refresh(), n)
            },
            _setOption: function (t, i) {
                var n = {};
                n[t] = i, "initSelector" !== t && (this.button.buttonMarkup(n), this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), i)), this._super("_setOption", t, i)
            },
            enable: function () {
                return this.element.attr("disabled", !1), this.button.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            },
            disable: function () {
                return this.element.attr("disabled", !0), this.button.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            },
            refresh: function () {
                var t = this.element;
                t.prop("disabled") ? this.disable() : this.enable(), e(this.button.data("buttonElements").text)[t.html() ? "html" : "text"](t.html() || t.val())
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.button.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, n) {
        e.widget("mobile.slider", e.mobile.widget, e.extend({
            widgetEventPrefix: "slide",
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: "input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",
                mini: !1,
                highlight: !1
            },
            _create: function () {
                var a, o, s = this,
                    r = this.element,
                    l = e.mobile.getInheritedTheme(r, "c"),
                    d = this.options.theme || l,
                    c = this.options.trackTheme || l,
                    h = r[0].nodeName.toLowerCase(),
                    u = (this.isToggleSwitch = "select" === h, r.parent().is(":jqmData(role='rangeslider')")),
                    p = this.isToggleSwitch ? "ui-slider-switch" : "",
                    m = r.attr("id"),
                    f = e("[for='" + m + "']"),
                    g = f.attr("id") || m + "-label",
                    b = f.attr("id", g),
                    v = this.isToggleSwitch ? 0 : parseFloat(r.attr("min")),
                    _ = this.isToggleSwitch ? r.find("option").length - 1 : parseFloat(r.attr("max")),
                    C = t.parseFloat(r.attr("step") || 1),
                    x = this.options.mini || r.jqmData("mini") ? " ui-mini" : "",
                    y = i.createElement("a"),
                    w = e(y),
                    T = i.createElement("div"),
                    D = e(T),
                    P = this.options.highlight && !this.isToggleSwitch ? function () {
                        var t = i.createElement("div");
                        return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(D)
                    }() : !1;
                if (y.setAttribute("href", "#"), T.setAttribute("role", "application"), T.className = [this.isToggleSwitch ? "ui-slider " : "ui-slider-track ", p, " ui-btn-down-", c, " ui-btn-corner-all", x].join(""), y.className = "ui-slider-handle", T.appendChild(y), w.buttonMarkup({
                        corners: !0,
                        theme: d,
                        shadow: !0
                    }).attr({
                        role: "slider",
                        "aria-valuemin": v,
                        "aria-valuemax": _,
                        "aria-valuenow": this._value(),
                        "aria-valuetext": this._value(),
                        title: this._value(),
                        "aria-labelledby": g
                    }), e.extend(this, {
                        slider: D,
                        handle: w,
                        type: h,
                        step: C,
                        max: _,
                        min: v,
                        valuebg: P,
                        isRangeslider: u,
                        dragging: !1,
                        beforeStart: null,
                        userModified: !1,
                        mouseMoved: !1
                    }), this.isToggleSwitch) {
                    o = i.createElement("div"), o.className = "ui-slider-inneroffset";
                    for (var k = 0, E = T.childNodes.length; E > k; k++) o.appendChild(T.childNodes[k]);
                    T.appendChild(o), w.addClass("ui-slider-handle-snapping"), a = r.find("option");
                    for (var q = 0, j = a.length; j > q; q++) {
                        var S = q ? "a" : "b",
                            A = q ? " " + e.mobile.activeBtnClass : " ui-btn-down-" + c,
                            N = (i.createElement("div"), i.createElement("span"));
                        N.className = ["ui-slider-label ui-slider-label-", S, A, " ui-btn-corner-all"].join(""), N.setAttribute("role", "img"), N.appendChild(i.createTextNode(a[q].innerHTML)), e(N).prependTo(D)
                    }
                    s._labels = e(".ui-slider-label", D)
                }
                b.addClass("ui-slider"), r.addClass(this.isToggleSwitch ? "ui-slider-switch" : "ui-slider-input"), this._on(r, {
                    change: "_controlChange",
                    keyup: "_controlKeyup",
                    blur: "_controlBlur",
                    vmouseup: "_controlVMouseUp"
                }), D.bind("vmousedown", e.proxy(this._sliderVMouseDown, this)).bind("vclick", !1), this._on(i, {
                    vmousemove: "_preventDocumentDrag"
                }), this._on(D.add(i), {
                    vmouseup: "_sliderVMouseUp"
                }), D.insertAfter(r), this.isToggleSwitch || u || (o = this.options.mini ? "<div class='ui-slider ui-mini'>" : "<div class='ui-slider'>", r.add(D).wrapAll(o)), this.isToggleSwitch && this.handle.bind({
                    focus: function () {
                        D.addClass(e.mobile.focusClass)
                    },
                    blur: function () {
                        D.removeClass(e.mobile.focusClass)
                    }
                }), this._on(this.handle, {
                    vmousedown: "_handleVMouseDown",
                    keydown: "_handleKeydown",
                    keyup: "_handleKeyup"
                }), this.handle.bind("vclick", !1), this._handleFormReset(), this.refresh(n, n, !0)
            },
            _controlChange: function (e) {
                return this._trigger("controlchange", e) === !1 ? !1 : (this.mouseMoved || this.refresh(this._value(), !0), n)
            },
            _controlKeyup: function () {
                this.refresh(this._value(), !0, !0)
            },
            _controlBlur: function () {
                this.refresh(this._value(), !0)
            },
            _controlVMouseUp: function () {
                this._checkedRefresh()
            },
            _handleVMouseDown: function () {
                this.handle.focus()
            },
            _handleKeydown: function (t) {
                var i = this._value();
                if (!this.options.disabled) {
                    switch (t.keyCode) {
                        case e.mobile.keyCode.HOME:
                        case e.mobile.keyCode.END:
                        case e.mobile.keyCode.PAGE_UP:
                        case e.mobile.keyCode.PAGE_DOWN:
                        case e.mobile.keyCode.UP:
                        case e.mobile.keyCode.RIGHT:
                        case e.mobile.keyCode.DOWN:
                        case e.mobile.keyCode.LEFT:
                            t.preventDefault(), this._keySliding || (this._keySliding = !0, this.handle.addClass("ui-state-active"))
                    }
                    switch (t.keyCode) {
                        case e.mobile.keyCode.HOME:
                            this.refresh(this.min);
                            break;
                        case e.mobile.keyCode.END:
                            this.refresh(this.max);
                            break;
                        case e.mobile.keyCode.PAGE_UP:
                        case e.mobile.keyCode.UP:
                        case e.mobile.keyCode.RIGHT:
                            this.refresh(i + this.step);
                            break;
                        case e.mobile.keyCode.PAGE_DOWN:
                        case e.mobile.keyCode.DOWN:
                        case e.mobile.keyCode.LEFT:
                            this.refresh(i - this.step)
                    }
                }
            },
            _handleKeyup: function () {
                this._keySliding && (this._keySliding = !1, this.handle.removeClass("ui-state-active"))
            },
            _sliderVMouseDown: function (e) {
                return this.options.disabled || 1 !== e.which && 0 !== e.which ? !1 : this._trigger("beforestart", e) === !1 ? !1 : (this.dragging = !0, this.userModified = !1, this.mouseMoved = !1, this.isToggleSwitch && (this.beforeStart = this.element[0].selectedIndex), this.refresh(e), this._trigger("start"), !1)
            },
            _sliderVMouseUp: function () {
                return this.dragging ? (this.dragging = !1, this.isToggleSwitch && (this.handle.addClass("ui-slider-handle-snapping"), this.mouseMoved ? this.userModified ? this.refresh(0 === this.beforeStart ? 1 : 0) : this.refresh(this.beforeStart) : this.refresh(0 === this.beforeStart ? 1 : 0)), this.mouseMoved = !1, this._trigger("stop"), !1) : n
            },
            _preventDocumentDrag: function (e) {
                return this._trigger("drag", e) === !1 ? !1 : this.dragging && !this.options.disabled ? (this.mouseMoved = !0, this.isToggleSwitch && this.handle.removeClass("ui-slider-handle-snapping"), this.refresh(e), this.userModified = this.beforeStart !== this.element[0].selectedIndex, !1) : n
            },
            _checkedRefresh: function () {
                this.value !== this._value() && this.refresh(this._value())
            },
            _value: function () {
                return this.isToggleSwitch ? this.element[0].selectedIndex : parseFloat(this.element.val())
            },
            _reset: function () {
                this.refresh(n, !1, !0)
            },
            refresh: function (t, a, o) {
                var s, r, l, d, c = this,
                    h = e.mobile.getInheritedTheme(this.element, "c"),
                    u = this.options.theme || h,
                    p = this.options.trackTheme || h;
                c.slider[0].className = [this.isToggleSwitch ? "ui-slider ui-slider-switch" : "ui-slider-track", " ui-btn-down-" + p, " ui-btn-corner-all", this.options.mini ? " ui-mini" : ""].join(""), (this.options.disabled || this.element.attr("disabled")) && this.disable(), this.value = this._value(), this.options.highlight && !this.isToggleSwitch && 0 === this.slider.find(".ui-slider-bg").length && (this.valuebg = function () {
                    var t = i.createElement("div");
                    return t.className = "ui-slider-bg " + e.mobile.activeBtnClass + " ui-btn-corner-all", e(t).prependTo(c.slider)
                }()), this.handle.buttonMarkup({
                    corners: !0,
                    theme: u,
                    shadow: !0
                });
                var m, f, g = this.element,
                    b = !this.isToggleSwitch,
                    v = b ? [] : g.find("option"),
                    _ = b ? parseFloat(g.attr("min")) : 0,
                    C = b ? parseFloat(g.attr("max")) : v.length - 1,
                    x = b && parseFloat(g.attr("step")) > 0 ? parseFloat(g.attr("step")) : 1;
                if ("object" == typeof t) {
                    if (l = t, d = 8, s = this.slider.offset().left, r = this.slider.width(), m = r / ((C - _) / x), !this.dragging || s - d > l.pageX || l.pageX > s + r + d) return;
                    f = m > 1 ? 100 * ((l.pageX - s) / r) : Math.round(100 * ((l.pageX - s) / r))
                } else null == t && (t = b ? parseFloat(g.val() || 0) : g[0].selectedIndex), f = 100 * ((parseFloat(t) - _) / (C - _));
                if (!isNaN(f)) {
                    var y = f / 100 * (C - _) + _,
                        w = (y - _) % x,
                        T = y - w;
                    2 * Math.abs(w) >= x && (T += w > 0 ? x : -x);
                    var D = 100 / ((C - _) / x);
                    if (y = parseFloat(T.toFixed(5)), m === n && (m = r / ((C - _) / x)), m > 1 && b && (f = (y - _) * D * (1 / x)), 0 > f && (f = 0), f > 100 && (f = 100), _ > y && (y = _), y > C && (y = C), this.handle.css("left", f + "%"), this.handle[0].setAttribute("aria-valuenow", b ? y : v.eq(y).attr("value")), this.handle[0].setAttribute("aria-valuetext", b ? y : v.eq(y).getEncodedText()), this.handle[0].setAttribute("title", b ? y : v.eq(y).getEncodedText()), this.valuebg && this.valuebg.css("width", f + "%"), this._labels) {
                        var P = 100 * (this.handle.width() / this.slider.width()),
                            k = f && P + (100 - P) * f / 100,
                            E = 100 === f ? 0 : Math.min(P + 100 - k, 100);
                        this._labels.each(function () {
                            var t = e(this).is(".ui-slider-label-a");
                            e(this).width((t ? k : E) + "%")
                        })
                    }
                    if (!o) {
                        var q = !1;
                        if (b ? (q = g.val() !== y, g.val(y)) : (q = g[0].selectedIndex !== y, g[0].selectedIndex = y), this._trigger("beforechange", t) === !1) return !1;
                        !a && q && g.trigger("change")
                    }
                }
            },
            enable: function () {
                return this.element.attr("disabled", !1), this.slider.removeClass("ui-disabled").attr("aria-disabled", !1), this._setOption("disabled", !1)
            },
            disable: function () {
                return this.element.attr("disabled", !0), this.slider.addClass("ui-disabled").attr("aria-disabled", !0), this._setOption("disabled", !0)
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.slider.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.rangeslider", e.mobile.widget, {
            options: {
                theme: null,
                trackTheme: null,
                disabled: !1,
                initSelector: ":jqmData(role='rangeslider')",
                mini: !1,
                highlight: !0
            },
            _create: function () {
                var t, i = this.element,
                    n = this.options.mini ? "ui-rangeslider ui-mini" : "ui-rangeslider",
                    a = i.find("input").first(),
                    o = i.find("input").last(),
                    s = i.find("label").first(),
                    r = e.data(a.get(0), "mobileSlider").slider,
                    l = e.data(o.get(0), "mobileSlider").slider,
                    d = e.data(a.get(0), "mobileSlider").handle,
                    c = e('<div class="ui-rangeslider-sliders" />').appendTo(i);
                i.find("label").length > 1 && (t = i.find("label").last().hide()), a.addClass("ui-rangeslider-first"), o.addClass("ui-rangeslider-last"), i.addClass(n), r.appendTo(c), l.appendTo(c), s.prependTo(i), d.prependTo(l), e.extend(this, {
                    _inputFirst: a,
                    _inputLast: o,
                    _sliderFirst: r,
                    _sliderLast: l,
                    _targetVal: null,
                    _sliderTarget: !1,
                    _sliders: c,
                    _proxy: !1
                }), this.refresh(), this._on(this.element.find("input.ui-slider-input"), {
                    slidebeforestart: "_slidebeforestart",
                    slidestop: "_slidestop",
                    slidedrag: "_slidedrag",
                    slidebeforechange: "_change",
                    blur: "_change",
                    keyup: "_change"
                }), this._on({
                    mousedown: "_change"
                }), this._on(this.element.closest("form"), {
                    reset: "_handleReset"
                }), this._on(d, {
                    vmousedown: "_dragFirstHandle"
                })
            },
            _handleReset: function () {
                var e = this;
                setTimeout(function () {
                    e._updateHighlight()
                }, 0)
            },
            _dragFirstHandle: function (t) {
                return e.data(this._inputFirst.get(0), "mobileSlider").dragging = !0, e.data(this._inputFirst.get(0), "mobileSlider").refresh(t), !1
            },
            _slidedrag: function (t) {
                var i = e(t.target).is(this._inputFirst),
                    a = i ? this._inputLast : this._inputFirst;
                return this._sliderTarget = !1, "first" === this._proxy && i || "last" === this._proxy && !i ? (e.data(a.get(0), "mobileSlider").dragging = !0, e.data(a.get(0), "mobileSlider").refresh(t), !1) : n
            },
            _slidestop: function (t) {
                var i = e(t.target).is(this._inputFirst);
                this._proxy = !1, this.element.find("input").trigger("vmouseup"), this._sliderFirst.css("z-index", i ? 1 : "")
            },
            _slidebeforestart: function (t) {
                this._sliderTarget = !1, e(t.originalEvent.target).hasClass("ui-slider-track") && (this._sliderTarget = !0, this._targetVal = e(t.target).val())
            },
            _setOption: function (e) {
                this._superApply(e), this.refresh()
            },
            refresh: function () {
                var e = this.element,
                    t = this.options;
                e.find("input").slider({
                    theme: t.theme,
                    trackTheme: t.trackTheme,
                    disabled: t.disabled,
                    mini: t.mini,
                    highlight: t.highlight
                }).slider("refresh"), this._updateHighlight()
            },
            _change: function (t) {
                if ("keyup" === t.type) return this._updateHighlight(), !1;
                var i = this,
                    a = parseFloat(this._inputFirst.val(), 10),
                    o = parseFloat(this._inputLast.val(), 10),
                    s = e(t.target).hasClass("ui-rangeslider-first"),
                    r = s ? this._inputFirst : this._inputLast,
                    l = s ? this._inputLast : this._inputFirst;
                if (this._inputFirst.val() > this._inputLast.val() && "mousedown" === t.type && !e(t.target).hasClass("ui-slider-handle")) r.blur();
                else if ("mousedown" === t.type) return;
                return a > o && !this._sliderTarget ? (r.val(s ? o : a).slider("refresh"), this._trigger("normalize")) : a > o && (r.val(this._targetVal).slider("refresh"), setTimeout(function () {
                    l.val(s ? a : o).slider("refresh"), e.data(l.get(0), "mobileSlider").handle.focus(), i._sliderFirst.css("z-index", s ? "" : 1), i._trigger("normalize")
                }, 0), this._proxy = s ? "first" : "last"), a === o ? (e.data(r.get(0), "mobileSlider").handle.css("z-index", 1), e.data(l.get(0), "mobileSlider").handle.css("z-index", 0)) : (e.data(l.get(0), "mobileSlider").handle.css("z-index", ""), e.data(r.get(0), "mobileSlider").handle.css("z-index", "")), this._updateHighlight(), a >= o ? !1 : n
            },
            _updateHighlight: function () {
                var t = parseInt(e.data(this._inputFirst.get(0), "mobileSlider").handle.get(0).style.left, 10),
                    i = parseInt(e.data(this._inputLast.get(0), "mobileSlider").handle.get(0).style.left, 10),
                    n = i - t;
                this.element.find(".ui-slider-bg").css({
                    "margin-left": t + "%",
                    width: n + "%"
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-rangeslider ui-mini").find("label").show(), this._inputFirst.after(this._sliderFirst), this._inputLast.after(this._sliderLast), this._sliders.remove(), this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")
            }
        }), e.widget("mobile.rangeslider", e.mobile.rangeslider, e.mobile.behaviors.formReset), e(i).bind("pagecreate create", function (t) {
            e.mobile.rangeslider.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e) {
        e.widget("mobile.selectmenu", e.mobile.widget, e.extend({
            options: {
                theme: null,
                disabled: !1,
                icon: "arrow-d",
                iconpos: "right",
                inline: !1,
                corners: !0,
                shadow: !0,
                iconshadow: !0,
                overlayTheme: "a",
                dividerTheme: "b",
                hidePlaceholderMenuItems: !0,
                closeText: "Close",
                nativeMenu: !0,
                preventFocusZoom: /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1,
                initSelector: "select:not( :jqmData(role='slider') )",
                mini: !1
            },
            _button: function () {
                return e("<div/>")
            },
            _setDisabled: function (e) {
                return this.element.attr("disabled", e), this.button.attr("aria-disabled", e), this._setOption("disabled", e)
            },
            _focusButton: function () {
                var e = this;
                setTimeout(function () {
                    e.button.focus()
                }, 40)
            },
            _selectOptions: function () {
                return this.select.find("option")
            },
            _preExtension: function () {
                var t = "";
                ~this.element[0].className.indexOf("ui-btn-left") && (t = " ui-btn-left"), ~this.element[0].className.indexOf("ui-btn-right") && (t = " ui-btn-right"), this.select = this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select" + t + "'>"), this.selectID = this.select.attr("id"), this.label = e("label[for='" + this.selectID + "']").addClass("ui-select"), this.isMultiple = this.select[0].multiple, this.options.theme || (this.options.theme = e.mobile.getInheritedTheme(this.select, "c"))
            },
            _destroy: function () {
                var e = this.element.parents(".ui-select");
                e.length > 0 && (e.is(".ui-btn-left, .ui-btn-right") && this.element.addClass(e.is(".ui-btn-left") ? "ui-btn-left" : "ui-btn-right"), this.element.insertAfter(e), e.remove())
            },
            _create: function () {
                this._preExtension(), this._trigger("beforeCreate"), this.button = this._button();
                var i = this,
                    n = this.options,
                    a = n.inline || this.select.jqmData("inline"),
                    o = n.mini || this.select.jqmData("mini"),
                    s = n.icon ? n.iconpos || this.select.jqmData("iconpos") : !1,
                    r = (-1 === this.select[0].selectedIndex ? 0 : this.select[0].selectedIndex, this.button.insertBefore(this.select).buttonMarkup({
                        theme: n.theme,
                        icon: n.icon,
                        iconpos: s,
                        inline: a,
                        corners: n.corners,
                        shadow: n.shadow,
                        iconshadow: n.iconshadow,
                        mini: o
                    }));
                this.setButtonText(), n.nativeMenu && t.opera && t.opera.version && r.addClass("ui-select-nativeonly"), this.isMultiple && (this.buttonCount = e("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(r.addClass("ui-li-has-count"))), (n.disabled || this.element.attr("disabled")) && this.disable(), this.select.change(function () {
                    i.refresh(), n.nativeMenu && this.blur()
                }), this._handleFormReset(), this.build()
            },
            build: function () {
                var t = this;
                this.select.appendTo(t.button).bind("vmousedown", function () {
                    t.button.addClass(e.mobile.activeBtnClass)
                }).bind("focus", function () {
                    t.button.addClass(e.mobile.focusClass)
                }).bind("blur", function () {
                    t.button.removeClass(e.mobile.focusClass)
                }).bind("focus vmouseover", function () {
                    t.button.trigger("vmouseover")
                }).bind("vmousemove", function () {
                    t.button.removeClass(e.mobile.activeBtnClass)
                }).bind("change blur vmouseout", function () {
                    t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)
                }).bind("change blur", function () {
                    t.button.removeClass("ui-btn-down-" + t.options.theme)
                }), t.button.bind("vmousedown", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.label.bind("click focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.select.bind("focus", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.disable(!0)
                }), t.button.bind("mouseup", function () {
                    t.options.preventFocusZoom && setTimeout(function () {
                        e.mobile.zoom.enable(!0)
                    }, 0)
                }), t.select.bind("blur", function () {
                    t.options.preventFocusZoom && e.mobile.zoom.enable(!0)
                })
            },
            selected: function () {
                return this._selectOptions().filter(":selected")
            },
            selectedIndices: function () {
                var e = this;
                return this.selected().map(function () {
                    return e._selectOptions().index(this)
                }).get()
            },
            setButtonText: function () {
                var t = this,
                    n = this.selected(),
                    a = this.placeholder,
                    o = e(i.createElement("span"));
                this.button.find(".ui-btn-text").html(function () {
                    return a = n.length ? n.map(function () {
                        return e(this).text()
                    }).get().join(", ") : t.placeholder, o.text(a).addClass(t.select.attr("class")).addClass(n.attr("class"))
                })
            },
            setButtonCount: function () {
                var e = this.selected();
                this.isMultiple && this.buttonCount[e.length > 1 ? "show" : "hide"]().text(e.length)
            },
            _reset: function () {
                this.refresh()
            },
            refresh: function () {
                this.setButtonText(), this.setButtonCount()
            },
            open: e.noop,
            close: e.noop,
            disable: function () {
                this._setDisabled(!0), this.button.addClass("ui-disabled")
            },
            enable: function () {
                this._setDisabled(!1), this.button.removeClass("ui-disabled")
            }
        }, e.mobile.behaviors.formReset)), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.selectmenu.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, n) {
        function a(e, t, i, n) {
            var a = n;
            return a = t > e ? i + (e - t) / 2 : Math.min(Math.max(i, n - t / 2), i + e - t)
        }

        function o() {
            var i = e.mobile.window;
            return {
                x: i.scrollLeft(),
                y: i.scrollTop(),
                cx: t.innerWidth || i.width(),
                cy: t.innerHeight || i.height()
            }
        }
        e.widget("mobile.popup", e.mobile.widget, {
            options: {
                theme: null,
                overlayTheme: null,
                shadow: !0,
                corners: !0,
                transition: "none",
                positionTo: "origin",
                tolerance: null,
                initSelector: ":jqmData(role='popup')",
                closeLinkSelector: "a:jqmData(rel='back')",
                closeLinkEvents: "click.popup",
                navigateEvents: "navigate.popup",
                closeEvents: "navigate.popup pagebeforechange.popup",
                dismissible: !0,
                history: !e.mobile.browser.oldIE
            },
            _eatEventAndClose: function (e) {
                return e.preventDefault(), e.stopImmediatePropagation(), this.options.dismissible && this.close(), !1
            },
            _resizeScreen: function () {
                var e = this._ui.container.outerHeight(!0);
                this._ui.screen.removeAttr("style"), e > this._ui.screen.height() && this._ui.screen.height(e)
            },
            _handleWindowKeyUp: function (t) {
                return this._isOpen && t.keyCode === e.mobile.keyCode.ESCAPE ? this._eatEventAndClose(t) : n
            },
            _expectResizeEvent: function () {
                var t = o();
                if (this._resizeData) {
                    if (t.x === this._resizeData.winCoords.x && t.y === this._resizeData.winCoords.y && t.cx === this._resizeData.winCoords.cx && t.cy === this._resizeData.winCoords.cy) return !1;
                    clearTimeout(this._resizeData.timeoutId)
                }
                return this._resizeData = {
                    timeoutId: setTimeout(e.proxy(this, "_resizeTimeout"), 200),
                    winCoords: t
                }, !0
            },
            _resizeTimeout: function () {
                this._isOpen ? this._expectResizeEvent() || (this._ui.container.hasClass("ui-popup-hidden") && (this._ui.container.removeClass("ui-popup-hidden"), this.reposition({
                    positionTo: "window"
                }), this._ignoreResizeEvents()), this._resizeScreen(), this._resizeData = null, this._orientationchangeInProgress = !1) : (this._resizeData = null, this._orientationchangeInProgress = !1)
            },
            _ignoreResizeEvents: function () {
                var e = this;
                this._ignoreResizeTo && clearTimeout(this._ignoreResizeTo), this._ignoreResizeTo = setTimeout(function () {
                    e._ignoreResizeTo = 0
                }, 1e3)
            },
            _handleWindowResize: function () {
                this._isOpen && 0 === this._ignoreResizeTo && (!this._expectResizeEvent() && !this._orientationchangeInProgress || this._ui.container.hasClass("ui-popup-hidden") || this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))
            },
            _handleWindowOrientationchange: function () {
                !this._orientationchangeInProgress && this._isOpen && 0 === this._ignoreResizeTo && (this._expectResizeEvent(), this._orientationchangeInProgress = !0)
            },
            _handleDocumentFocusIn: function (t) {
                var n, a = t.target,
                    o = this._ui;
                if (this._isOpen) {
                    if (a !== o.container[0]) {
                        if (n = e(t.target), 0 === n.parents().filter(o.container[0]).length) return e(i.activeElement).one("focus", function () {
                            n.blur()
                        }), o.focusElement.focus(), t.preventDefault(), t.stopImmediatePropagation(), !1;
                        o.focusElement[0] === o.container[0] && (o.focusElement = n)
                    }
                    this._ignoreResizeEvents()
                }
            },
            _create: function () {
                var t = {
                        screen: e("<div class='ui-screen-hidden ui-popup-screen'></div>"),
                        placeholder: e("<div style='display: none;'><!-- placeholder --></div>"),
                        container: e("<div class='ui-popup-container ui-popup-hidden'></div>")
                    },
                    i = this.element.closest(".ui-page"),
                    a = this.element.attr("id"),
                    o = this;
                this.options.history = this.options.history && e.mobile.ajaxEnabled && e.mobile.hashListeningEnabled, 0 === i.length && (i = e("body")), this.options.container = this.options.container || e.mobile.pageContainer, i.append(t.screen), t.container.insertAfter(t.screen), t.placeholder.insertAfter(this.element), a && (t.screen.attr("id", a + "-screen"), t.container.attr("id", a + "-popup"), t.placeholder.html("<!-- placeholder for " + a + " -->")), t.container.append(this.element), t.focusElement = t.container, this.element.addClass("ui-popup"), e.extend(this, {
                    _scrollTop: 0,
                    _page: i,
                    _ui: t,
                    _fallbackTransition: "",
                    _currentTransition: !1,
                    _prereqs: null,
                    _isOpen: !1,
                    _tolerance: null,
                    _resizeData: null,
                    _ignoreResizeTo: 0,
                    _orientationchangeInProgress: !1
                }), e.each(this.options, function (e, t) {
                    o.options[e] = n, o._setOption(e, t, !0)
                }), t.screen.bind("vclick", e.proxy(this, "_eatEventAndClose")), this._on(e.mobile.window, {
                    orientationchange: e.proxy(this, "_handleWindowOrientationchange"),
                    resize: e.proxy(this, "_handleWindowResize"),
                    keyup: e.proxy(this, "_handleWindowKeyUp")
                }), this._on(e.mobile.document, {
                    focusin: e.proxy(this, "_handleDocumentFocusIn")
                })
            },
            _applyTheme: function (e, t, i) {
                for (var n, a = (e.attr("class") || "").split(" "), o = null, s = t + ""; a.length > 0;) {
                    if (o = a.pop(), n = RegExp("^ui-" + i + "-([a-z])$").exec(o), n && n.length > 1) {
                        o = n[1];
                        break
                    }
                    o = null
                }
                t !== o && (e.removeClass("ui-" + i + "-" + o), null !== t && "none" !== t && e.addClass("ui-" + i + "-" + s))
            },
            _setTheme: function (e) {
                this._applyTheme(this.element, e, "body")
            },
            _setOverlayTheme: function (e) {
                this._applyTheme(this._ui.screen, e, "overlay"), this._isOpen && this._ui.screen.addClass("in")
            },
            _setShadow: function (e) {
                this.element.toggleClass("ui-overlay-shadow", e)
            },
            _setCorners: function (e) {
                this.element.toggleClass("ui-corner-all", e)
            },
            _applyTransition: function (t) {
                this._ui.container.removeClass(this._fallbackTransition), t && "none" !== t && (this._fallbackTransition = e.mobile._maybeDegradeTransition(t), "none" === this._fallbackTransition && (this._fallbackTransition = ""), this._ui.container.addClass(this._fallbackTransition))
            },
            _setTransition: function (e) {
                this._currentTransition || this._applyTransition(e)
            },
            _setTolerance: function (t) {
                var i = {
                    t: 30,
                    r: 15,
                    b: 30,
                    l: 15
                };
                if (t !== n) {
                    var a = (t + "").split(",");
                    switch (e.each(a, function (e, t) {
                        a[e] = parseInt(t, 10)
                    }), a.length) {
                        case 1:
                            isNaN(a[0]) || (i.t = i.r = i.b = i.l = a[0]);
                            break;
                        case 2:
                            isNaN(a[0]) || (i.t = i.b = a[0]), isNaN(a[1]) || (i.l = i.r = a[1]);
                            break;
                        case 4:
                            isNaN(a[0]) || (i.t = a[0]), isNaN(a[1]) || (i.r = a[1]), isNaN(a[2]) || (i.b = a[2]), isNaN(a[3]) || (i.l = a[3]);
                            break;
                        default:
                    }
                }
                this._tolerance = i
            },
            _setOption: function (t, i) {
                var a, o = "_set" + t.charAt(0).toUpperCase() + t.slice(1);
                this[o] !== n && this[o](i), a = ["initSelector", "closeLinkSelector", "closeLinkEvents", "navigateEvents", "closeEvents", "history", "container"], e.mobile.widget.prototype._setOption.apply(this, arguments), -1 === e.inArray(t, a) && this.element.attr("data-" + (e.mobile.ns || "") + t.replace(/([A-Z])/, "-$1").toLowerCase(), i)
            },
            _placementCoords: function (e) {
                var t, n, s = o(),
                    r = {
                        x: this._tolerance.l,
                        y: s.y + this._tolerance.t,
                        cx: s.cx - this._tolerance.l - this._tolerance.r,
                        cy: s.cy - this._tolerance.t - this._tolerance.b
                    };
                this._ui.container.css("max-width", r.cx), t = {
                    cx: this._ui.container.outerWidth(!0),
                    cy: this._ui.container.outerHeight(!0)
                }, n = {
                    x: a(r.cx, t.cx, r.x, e.x),
                    y: a(r.cy, t.cy, r.y, e.y)
                }, n.y = Math.max(0, n.y);
                var l = i.documentElement,
                    d = i.body,
                    c = Math.max(l.clientHeight, d.scrollHeight, d.offsetHeight, l.scrollHeight, l.offsetHeight);
                return n.y -= Math.min(n.y, Math.max(0, n.y + t.cy - c)), {
                    left: n.x,
                    top: n.y
                }
            },
            _createPrereqs: function (t, i, n) {
                var a, o = this;
                a = {
                    screen: e.Deferred(),
                    container: e.Deferred()
                }, a.screen.then(function () {
                    a === o._prereqs && t()
                }), a.container.then(function () {
                    a === o._prereqs && i()
                }), e.when(a.screen, a.container).done(function () {
                    a === o._prereqs && (o._prereqs = null, n())
                }), o._prereqs = a
            },
            _animate: function (t) {
                return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd), t.prereqs.screen.resolve(), t.transition && "none" !== t.transition && (t.applyTransition && this._applyTransition(t.transition), this._fallbackTransition) ? (this._ui.container.animationComplete(e.proxy(t.prereqs.container, "resolve")).addClass(t.containerClassToAdd).removeClass(t.classToRemove), n) : (this._ui.container.removeClass(t.classToRemove), t.prereqs.container.resolve(), n)
            },
            _desiredCoords: function (t) {
                var i, n = null,
                    a = o(),
                    s = t.x,
                    r = t.y,
                    l = t.positionTo;
                if (l && "origin" !== l)
                    if ("window" === l) s = a.cx / 2 + a.x, r = a.cy / 2 + a.y;
                    else {
                        try {
                            n = e(l)
                        } catch (d) {
                            n = null
                        }
                        n && (n.filter(":visible"), 0 === n.length && (n = null))
                    } return n && (i = n.offset(), s = i.left + n.outerWidth() / 2, r = i.top + n.outerHeight() / 2), ("number" !== e.type(s) || isNaN(s)) && (s = a.cx / 2 + a.x), ("number" !== e.type(r) || isNaN(r)) && (r = a.cy / 2 + a.y), {
                    x: s,
                    y: r
                }
            },
            _reposition: function (e) {
                e = {
                    x: e.x,
                    y: e.y,
                    positionTo: e.positionTo
                }, this._trigger("beforeposition", e), this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))
            },
            reposition: function (e) {
                this._isOpen && this._reposition(e)
            },
            _openPrereqsComplete: function () {
                this._ui.container.addClass("ui-popup-active"), this._isOpen = !0, this._resizeScreen(), this._ui.container.attr("tabindex", "0").focus(), this._ignoreResizeEvents(), this._trigger("afteropen")
            },
            _open: function (t) {
                var i = e.extend({}, this.options, t),
                    n = function () {
                        var e = navigator.userAgent,
                            t = e.match(/AppleWebKit\/([0-9\.]+)/),
                            i = !!t && t[1],
                            n = e.match(/Android (\d+(?:\.\d+))/),
                            a = !!n && n[1],
                            o = e.indexOf("Chrome") > -1;
                        return null !== n && "4.0" === a && i && i > 534.13 && !o ? !0 : !1
                    }();
                this._createPrereqs(e.noop, e.noop, e.proxy(this, "_openPrereqsComplete")), this._currentTransition = i.transition, this._applyTransition(i.transition), this.options.theme || this._setTheme(this._page.jqmData("theme") || e.mobile.getInheritedTheme(this._page, "c")), this._ui.screen.removeClass("ui-screen-hidden"), this._ui.container.removeClass("ui-popup-hidden"), this._reposition(i), this.options.overlayTheme && n && this.element.closest(".ui-page").addClass("ui-popup-open"), this._animate({
                    additionalCondition: !0,
                    transition: i.transition,
                    classToRemove: "",
                    screenClassToAdd: "in",
                    containerClassToAdd: "in",
                    applyTransition: !1,
                    prereqs: this._prereqs
                })
            },
            _closePrereqScreen: function () {
                this._ui.screen.removeClass("out").addClass("ui-screen-hidden")
            },
            _closePrereqContainer: function () {
                this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")
            },
            _closePrereqsDone: function () {
                this.options, this._ui.container.removeAttr("tabindex"), e.mobile.popup.active = n, this._trigger("afterclose")
            },
            _close: function (t) {
                this._ui.container.removeClass("ui-popup-active"), this._page.removeClass("ui-popup-open"), this._isOpen = !1, this._createPrereqs(e.proxy(this, "_closePrereqScreen"), e.proxy(this, "_closePrereqContainer"), e.proxy(this, "_closePrereqsDone")), this._animate({
                    additionalCondition: this._ui.screen.hasClass("in"),
                    transition: t ? "none" : this._currentTransition,
                    classToRemove: "in",
                    screenClassToAdd: "out",
                    containerClassToAdd: "reverse out",
                    applyTransition: !0,
                    prereqs: this._prereqs
                })
            },
            _unenhance: function () {
                this._setTheme("none"), this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"), this._ui.screen.remove(), this._ui.container.remove(), this._ui.placeholder.remove()
            },
            _destroy: function () {
                e.mobile.popup.active === this ? (this.element.one("popupafterclose", e.proxy(this, "_unenhance")), this.close()) : this._unenhance()
            },
            _closePopup: function (i, n) {
                var a, o, s = this.options,
                    r = !1;
                t.scrollTo(0, this._scrollTop), i && "pagebeforechange" === i.type && n && (a = "string" == typeof n.toPage ? n.toPage : n.toPage.jqmData("url"), a = e.mobile.path.parseUrl(a), o = a.pathname + a.search + a.hash, this._myUrl !== e.mobile.path.makeUrlAbsolute(o) ? r = !0 : i.preventDefault()), s.container.unbind(s.closeEvents), this.element.undelegate(s.closeLinkSelector, s.closeLinkEvents), this._close(r)
            },
            _bindContainerClose: function () {
                this.options.container.one(this.options.closeEvents, e.proxy(this, "_closePopup"))
            },
            open: function (i) {
                var a, o, s, r, l, d, c = this,
                    h = this.options;
                if (!e.mobile.popup.active) {
                    if (e.mobile.popup.active = this, this._scrollTop = e.mobile.window.scrollTop(), !h.history) return c._open(i), c._bindContainerClose(), c.element.delegate(h.closeLinkSelector, h.closeLinkEvents, function (e) {
                        c.close(), e.preventDefault()
                    }), n;
                    if (d = e.mobile.urlHistory, o = e.mobile.dialogHashKey, s = e.mobile.activePage, r = s.is(".ui-dialog"), this._myUrl = a = d.getActive().url, l = a.indexOf(o) > -1 && !r && d.activeIndex > 0) return c._open(i), c._bindContainerClose(), n; - 1 !== a.indexOf(o) || r ? a = e.mobile.path.parseLocation().hash + o : a += a.indexOf("#") > -1 ? o : "#" + o, 0 === d.activeIndex && a === d.initialDst && (a += o), e(t).one("beforenavigate", function (e) {
                        e.preventDefault(), c._open(i), c._bindContainerClose()
                    }), this.urlAltered = !0, e.mobile.navigate(a, {
                        role: "dialog"
                    })
                }
            },
            close: function () {
                e.mobile.popup.active === this && (this._scrollTop = e.mobile.window.scrollTop(), this.options.history && this.urlAltered ? (e.mobile.back(), this.urlAltered = !1) : this._closePopup())
            }
        }), e.mobile.popup.handleLink = function (t) {
            var i, n = t.closest(":jqmData(role='page')"),
                a = 0 === n.length ? e("body") : n,
                o = e(e.mobile.path.parseUrl(t.attr("href")).hash, a[0]);
            o.data("mobile-popup") && (i = t.offset(), o.popup("open", {
                x: i.left + t.outerWidth() / 2,
                y: i.top + t.outerHeight() / 2,
                transition: t.jqmData("transition"),
                positionTo: t.jqmData("position-to")
            })), setTimeout(function () {
                var i = t.parent().parent();
                i.hasClass("ui-li") && (t = i.parent()), t.removeClass(e.mobile.activeBtnClass)
            }, 300)
        }, e.mobile.document.bind("pagebeforechange", function (t, i) {
            "popup" === i.options.role && (e.mobile.popup.handleLink(i.options.link), t.preventDefault())
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.popup.prototype.enhanceWithin(t.target, !0)
        })
    }(e),
    function (e, t) {
        var n = function (n) {
            var a, o, s, r = (n.select, n._destroy),
                l = n.selectID,
                d = l ? l : (e.mobile.ns || "") + "uuid-" + n.uuid,
                c = d + "-listbox",
                h = d + "-dialog",
                u = n.label,
                p = n.select.closest(".ui-page"),
                m = n._selectOptions(),
                f = n.isMultiple = n.select[0].multiple,
                g = l + "-button",
                b = l + "-menu",
                v = e("<div data-" + e.mobile.ns + "role='dialog' id='" + h + "' data-" + e.mobile.ns + "theme='" + n.options.theme + "' data-" + e.mobile.ns + "overlay-theme='" + n.options.overlayTheme + "'>" + "<div data-" + e.mobile.ns + "role='header'>" + "<div class='ui-title'>" + u.getEncodedText() + "</div>" + "</div>" + "<div data-" + e.mobile.ns + "role='content'></div>" + "</div>"),
                _ = e("<div id='" + c + "' class='ui-selectmenu'>").insertAfter(n.select).popup({
                    theme: n.options.overlayTheme
                }),
                C = e("<ul>", {
                    "class": "ui-selectmenu-list",
                    id: b,
                    role: "listbox",
                    "aria-labelledby": g
                }).attr("data-" + e.mobile.ns + "theme", n.options.theme).attr("data-" + e.mobile.ns + "divider-theme", n.options.dividerTheme).appendTo(_),
                x = e("<div>", {
                    "class": "ui-header ui-bar-" + n.options.theme
                }).prependTo(_),
                y = e("<h1>", {
                    "class": "ui-title"
                }).appendTo(x);
            n.isMultiple && (s = e("<a>", {
                text: n.options.closeText,
                href: "#",
                "class": "ui-btn-left"
            }).attr("data-" + e.mobile.ns + "iconpos", "notext").attr("data-" + e.mobile.ns + "icon", "delete").appendTo(x).buttonMarkup()), e.extend(n, {
                select: n.select,
                selectID: l,
                buttonId: g,
                menuId: b,
                popupID: c,
                dialogID: h,
                thisPage: p,
                menuPage: v,
                label: u,
                selectOptions: m,
                isMultiple: f,
                theme: n.options.theme,
                listbox: _,
                list: C,
                header: x,
                headerTitle: y,
                headerClose: s,
                menuPageContent: a,
                menuPageClose: o,
                placeholder: "",
                build: function () {
                    var i = this;
                    i.refresh(), i._origTabIndex === t && (i._origTabIndex = null === i.select[0].getAttribute("tabindex") ? !1 : i.select.attr("tabindex")), i.select.attr("tabindex", "-1").focus(function () {
                        e(this).blur(), i.button.focus()
                    }), i.button.bind("vclick keydown", function (t) {
                        i.options.disabled || i.isOpen || ("vclick" === t.type || t.keyCode && (t.keyCode === e.mobile.keyCode.ENTER || t.keyCode === e.mobile.keyCode.SPACE)) && (i._decideFormat(), "overlay" === i.menuType ? i.button.attr("href", "#" + i.popupID).attr("data-" + (e.mobile.ns || "") + "rel", "popup") : i.button.attr("href", "#" + i.dialogID).attr("data-" + (e.mobile.ns || "") + "rel", "dialog"), i.isOpen = !0)
                    }), i.list.attr("role", "listbox").bind("focusin", function (t) {
                        e(t.target).attr("tabindex", "0").trigger("vmouseover")
                    }).bind("focusout", function (t) {
                        e(t.target).attr("tabindex", "-1").trigger("vmouseout")
                    }).delegate("li:not(.ui-disabled, .ui-li-divider)", "click", function (t) {
                        var a = i.select[0].selectedIndex,
                            o = i.list.find("li:not(.ui-li-divider)").index(this),
                            s = i._selectOptions().eq(o)[0];
                        s.selected = i.isMultiple ? !s.selected : !0, i.isMultiple && e(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on", s.selected).toggleClass("ui-icon-checkbox-off", !s.selected), (i.isMultiple || a !== o) && i.select.trigger("change"), i.isMultiple ? i.list.find("li:not(.ui-li-divider)").eq(o).addClass("ui-btn-down-" + n.options.theme).find("a").first().focus() : i.close(), t.preventDefault()
                    }).keydown(function (t) {
                        var i, a, o = e(t.target),
                            s = o.closest("li");
                        switch (t.keyCode) {
                            case 38:
                                return i = s.prev().not(".ui-selectmenu-placeholder"), i.is(".ui-li-divider") && (i = i.prev()), i.length && (o.blur().attr("tabindex", "-1"), i.addClass("ui-btn-down-" + n.options.theme).find("a").first().focus()), !1;
                            case 40:
                                return a = s.next(), a.is(".ui-li-divider") && (a = a.next()), a.length && (o.blur().attr("tabindex", "-1"), a.addClass("ui-btn-down-" + n.options.theme).find("a").first().focus()), !1;
                            case 13:
                            case 32:
                                return o.trigger("click"), !1
                        }
                    }), i.menuPage.bind("pagehide", function () {
                        e.mobile._bindPageRemove.call(i.thisPage)
                    }), i.listbox.bind("popupafterclose", function () {
                        i.close()
                    }), i.isMultiple && i.headerClose.click(function () {
                        return "overlay" === i.menuType ? (i.close(), !1) : t
                    }), i.thisPage.addDependents(this.menuPage)
                },
                _isRebuildRequired: function () {
                    var e = this.list.find("li"),
                        t = this._selectOptions();
                    return t.text() !== e.text()
                },
                selected: function () {
                    return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")
                },
                refresh: function (t) {
                    var i, n = this;
                    this.element, this.isMultiple, (t || this._isRebuildRequired()) && n._buildList(), i = this.selectedIndices(), n.setButtonText(), n.setButtonCount(), n.list.find("li:not(.ui-li-divider)").removeClass(e.mobile.activeBtnClass).attr("aria-selected", !1).each(function (t) {
                        if (e.inArray(t, i) > -1) {
                            var a = e(this);
                            a.attr("aria-selected", !0), n.isMultiple ? a.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on") : a.is(".ui-selectmenu-placeholder") ? a.next().addClass(e.mobile.activeBtnClass) : a.addClass(e.mobile.activeBtnClass)
                        }
                    })
                },
                close: function () {
                    if (!this.options.disabled && this.isOpen) {
                        var e = this;
                        "page" === e.menuType ? (e.menuPage.dialog("close"), e.list.appendTo(e.listbox)) : e.listbox.popup("close"), e._focusButton(), e.isOpen = !1
                    }
                },
                open: function () {
                    this.button.click()
                },
                _decideFormat: function () {
                    function t() {
                        var t = i.list.find("." + e.mobile.activeBtnClass + " a");
                        0 === t.length && (t = i.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")), t.first().focus().closest("li").addClass("ui-btn-down-" + n.options.theme)
                    }
                    var i = this,
                        a = e.mobile.window,
                        o = i.list.parent(),
                        s = o.outerHeight(),
                        r = (o.outerWidth(), e("." + e.mobile.activePageClass), a.scrollTop()),
                        l = i.button.offset().top,
                        d = a.height();
                    a.width(), s > d - 80 || !e.support.scrollTop ? (i.menuPage.appendTo(e.mobile.pageContainer).page(), i.menuPageContent = v.find(".ui-content"), i.menuPageClose = v.find(".ui-header a"), i.thisPage.unbind("pagehide.remove"), 0 === r && l > d && i.thisPage.one("pagehide", function () {
                        e(this).jqmData("lastScroll", l)
                    }), i.menuPage.one("pageshow", function () {
                        t()
                    }).one("pagehide", function () {
                        i.close()
                    }), i.menuType = "page", i.menuPageContent.append(i.list), i.menuPage.find("div .ui-title").text(i.label.text())) : (i.menuType = "overlay", i.listbox.one("popupafteropen", t))
                },
                _buildList: function () {
                    var t = this,
                        n = this.options,
                        a = this.placeholder,
                        o = !0,
                        s = t.isMultiple ? "checkbox-off" : "false";
                    t.list.empty().filter(".ui-listview").listview("destroy");
                    for (var r, l = t.select.find("option"), d = l.length, c = this.select[0], h = "data-" + e.mobile.ns, u = h + "option-index", p = h + "icon", m = h + "role", f = h + "placeholder", g = i.createDocumentFragment(), b = !1, v = 0; d > v; v++, b = !1) {
                        var _ = l[v],
                            C = e(_),
                            x = _.parentNode,
                            y = C.text(),
                            w = i.createElement("a"),
                            T = [];
                        if (w.setAttribute("href", "#"), w.appendChild(i.createTextNode(y)), x !== c && "optgroup" === x.nodeName.toLowerCase()) {
                            var D = x.getAttribute("label");
                            if (D !== r) {
                                var P = i.createElement("li");
                                P.setAttribute(m, "list-divider"), P.setAttribute("role", "option"), P.setAttribute("tabindex", "-1"), P.appendChild(i.createTextNode(D)), g.appendChild(P), r = D
                            }
                        }!o || _.getAttribute("value") && 0 !== y.length && !C.jqmData("placeholder") || (o = !1, b = !0, null === _.getAttribute(f) && (this._removePlaceholderAttr = !0), _.setAttribute(f, !0), n.hidePlaceholderMenuItems && T.push("ui-selectmenu-placeholder"), a !== y && (a = t.placeholder = y));
                        var k = i.createElement("li");
                        _.disabled && (T.push("ui-disabled"), k.setAttribute("aria-disabled", !0)), k.setAttribute(u, v), k.setAttribute(p, s), b && k.setAttribute(f, !0), k.className = T.join(" "), k.setAttribute("role", "option"), w.setAttribute("tabindex", "-1"), k.appendChild(w), g.appendChild(k)
                    }
                    t.list[0].appendChild(g), this.isMultiple || a.length ? this.headerTitle.text(this.placeholder) : this.header.hide(), t.list.listview()
                },
                _button: function () {
                    return e("<a>", {
                        href: "#",
                        role: "button",
                        id: this.buttonId,
                        "aria-haspopup": "true",
                        "aria-owns": this.menuId
                    })
                },
                _destroy: function () {
                    this.close(), this._origTabIndex !== t && (this._origTabIndex !== !1 ? this.select.attr("tabindex", this._origTabIndex) : this.select.removeAttr("tabindex")), this._removePlaceholderAttr && this._selectOptions().removeAttr("data-" + e.mobile.ns + "placeholder"), this.listbox.remove(), r.apply(this, arguments)
                }
            })
        };
        e.mobile.document.bind("selectmenubeforecreate", function (t) {
            var i = e(t.target).data("mobile-selectmenu");
            i.options.nativeMenu || 0 !== i.element.parents(":jqmData(role='popup')").length || n(i)
        })
    }(e),
    function (e, t) {
        e.widget("mobile.controlgroup", e.mobile.widget, e.extend({
            options: {
                shadow: !1,
                corners: !0,
                excludeInvisible: !0,
                type: "vertical",
                mini: !1,
                initSelector: ":jqmData(role='controlgroup')"
            },
            _create: function () {
                var i = this.element,
                    n = {
                        inner: e("<div class='ui-controlgroup-controls'></div>"),
                        legend: e("<div role='heading' class='ui-controlgroup-label'></div>")
                    },
                    a = i.children("legend"),
                    o = this;
                i.wrapInner(n.inner), a.length && n.legend.append(a).insertBefore(i.children(0)), i.addClass("ui-corner-all ui-controlgroup"), e.extend(this, {
                    _initialRefresh: !0
                }), e.each(this.options, function (e, i) {
                    o.options[e] = t, o._setOption(e, i, !0)
                })
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (i, n) {
                var a = "_set" + i.charAt(0).toUpperCase() + i.slice(1);
                this[a] !== t && this[a](n), this._super(i, n), this.element.attr("data-" + (e.mobile.ns || "") + i.replace(/([A-Z])/, "-$1").toLowerCase(), n)
            },
            _setType: function (e) {
                this.element.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-" + e), this.refresh()
            },
            _setCorners: function (e) {
                this.element.toggleClass("ui-corner-all", e)
            },
            _setShadow: function (e) {
                this.element.toggleClass("ui-shadow", e)
            },
            _setMini: function (e) {
                this.element.toggleClass("ui-mini", e)
            },
            container: function () {
                return this.element.children(".ui-controlgroup-controls")
            },
            refresh: function () {
                var t = this.element.find(".ui-btn").not(".ui-slider-handle"),
                    i = this._initialRefresh;
                e.mobile.checkboxradio && this.element.find(":mobile-checkboxradio").checkboxradio("refresh"), this._addFirstLastClasses(t, this.options.excludeInvisible ? this._getVisibles(t, i) : t, i), this._initialRefresh = !1
            }
        }, e.mobile.behaviors.addFirstLastClasses)), e(function () {
            e.mobile.document.bind("pagecreate create", function (t) {
                e.mobile.controlgroup.prototype.enhanceWithin(t.target, !0)
            })
        })
    }(e),
    function (e) {
        e(i).bind("pagecreate create", function (t) {
            e(t.target).find("a").jqmEnhanceable().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")
        })
    }(e),
    function (e, t) {
        e.widget("mobile.fixedtoolbar", e.mobile.widget, {
            options: {
                visibleOnPageShow: !0,
                disablePageZoom: !0,
                transition: "slide",
                fullscreen: !1,
                tapToggle: !0,
                tapToggleBlacklist: "a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",
                hideDuringFocus: "input, textarea, select",
                updatePagePadding: !0,
                trackPersistentToolbars: !0,
                supportBlacklist: function () {
                    return !e.support.fixedPosition
                },
                initSelector: ":jqmData(position='fixed')"
            },
            _create: function () {
                var i = this,
                    n = i.options,
                    a = i.element,
                    o = a.is(":jqmData(role='header')") ? "header" : "footer",
                    s = a.closest(".ui-page");
                return n.supportBlacklist() ? (i.destroy(), t) : (a.addClass("ui-" + o + "-fixed"), n.fullscreen ? (a.addClass("ui-" + o + "-fullscreen"), s.addClass("ui-page-" + o + "-fullscreen")) : s.addClass("ui-page-" + o + "-fixed"), e.extend(this, {
                    _thisPage: null
                }), i._addTransitionClass(), i._bindPageEvents(), i._bindToggleHandlers(), t)
            },
            _addTransitionClass: function () {
                var e = this.options.transition;
                e && "none" !== e && ("slide" === e && (e = this.element.is(".ui-header") ? "slidedown" : "slideup"), this.element.addClass(e))
            },
            _bindPageEvents: function () {
                this._thisPage = this.element.closest(".ui-page"), this._on(this._thisPage, {
                    pagebeforeshow: "_handlePageBeforeShow",
                    webkitAnimationStart: "_handleAnimationStart",
                    animationstart: "_handleAnimationStart",
                    updatelayout: "_handleAnimationStart",
                    pageshow: "_handlePageShow",
                    pagebeforehide: "_handlePageBeforeHide"
                })
            },
            _handlePageBeforeShow: function () {
                var t = this.options;
                t.disablePageZoom && e.mobile.zoom.disable(!0), t.visibleOnPageShow || this.hide(!0)
            },
            _handleAnimationStart: function () {
                this.options.updatePagePadding && this.updatePagePadding(this._thisPage)
            },
            _handlePageShow: function () {
                this.updatePagePadding(this._thisPage), this.options.updatePagePadding && this._on(e.mobile.window, {
                    throttledresize: "updatePagePadding"
                })
            },
            _handlePageBeforeHide: function (t, i) {
                var n = this.options;
                if (n.disablePageZoom && e.mobile.zoom.enable(!0), n.updatePagePadding && this._off(e.mobile.window, "throttledresize"), n.trackPersistentToolbars) {
                    var a = e(".ui-footer-fixed:jqmData(id)", this._thisPage),
                        o = e(".ui-header-fixed:jqmData(id)", this._thisPage),
                        s = a.length && i.nextPage && e(".ui-footer-fixed:jqmData(id='" + a.jqmData("id") + "')", i.nextPage) || e(),
                        r = o.length && i.nextPage && e(".ui-header-fixed:jqmData(id='" + o.jqmData("id") + "')", i.nextPage) || e();
                    (s.length || r.length) && (s.add(r).appendTo(e.mobile.pageContainer), i.nextPage.one("pageshow", function () {
                        r.prependTo(this), s.appendTo(this)
                    }))
                }
            },
            _visible: !0,
            updatePagePadding: function (i) {
                var n = this.element,
                    a = n.is(".ui-header"),
                    o = parseFloat(n.css(a ? "top" : "bottom"));
                this.options.fullscreen || (i = i && i.type === t && i || this._thisPage || n.closest(".ui-page"), e(i).css("padding-" + (a ? "top" : "bottom"), n.outerHeight() + o))
            },
            _useTransition: function (t) {
                var i = e.mobile.window,
                    n = this.element,
                    a = i.scrollTop(),
                    o = n.height(),
                    s = n.closest(".ui-page").height(),
                    r = e.mobile.getScreenHeight(),
                    l = n.is(":jqmData(role='header')") ? "header" : "footer";
                return !t && (this.options.transition && "none" !== this.options.transition && ("header" === l && !this.options.fullscreen && a > o || "footer" === l && !this.options.fullscreen && s - o > a + r) || this.options.fullscreen)
            },
            show: function (e) {
                var t = "ui-fixed-hidden",
                    i = this.element;
                this._useTransition(e) ? i.removeClass("out " + t).addClass("in").animationComplete(function () {
                    i.removeClass("in")
                }) : i.removeClass(t), this._visible = !0
            },
            hide: function (e) {
                var t = "ui-fixed-hidden",
                    i = this.element,
                    n = "out" + ("slide" === this.options.transition ? " reverse" : "");
                this._useTransition(e) ? i.addClass(n).removeClass("in").animationComplete(function () {
                    i.addClass(t).removeClass(n)
                }) : i.addClass(t).removeClass(n), this._visible = !1
            },
            toggle: function () {
                this[this._visible ? "hide" : "show"]()
            },
            _bindToggleHandlers: function () {
                var t, i, n = this,
                    a = n.options,
                    o = n.element,
                    s = !0;
                o.closest(".ui-page").bind("vclick", function (t) {
                    a.tapToggle && !e(t.target).closest(a.tapToggleBlacklist).length && n.toggle()
                }).bind("focusin focusout", function (o) {
                    1025 > screen.width && e(o.target).is(a.hideDuringFocus) && !e(o.target).closest(".ui-header-fixed, .ui-footer-fixed").length && ("focusout" !== o.type || s ? "focusin" === o.type && s && (clearTimeout(t), s = !1, i = setTimeout(function () {
                        n.hide()
                    }, 0)) : (s = !0, clearTimeout(i), t = setTimeout(function () {
                        n.show()
                    }, 0)))
                })
            },
            _destroy: function () {
                var e = this.element,
                    t = e.is(".ui-header");
                e.closest(".ui-page").css("padding-" + (t ? "top" : "bottom"), ""), e.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"), e.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e(t.target).jqmData("fullscreen") && e(e.mobile.fixedtoolbar.prototype.options.initSelector, t.target).not(":jqmData(fullscreen)").jqmData("fullscreen", !0), e.mobile.fixedtoolbar.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e) {
        e.widget("mobile.fixedtoolbar", e.mobile.fixedtoolbar, {
            _create: function () {
                this._super(), this._workarounds()
            },
            _workarounds: function () {
                var e = navigator.userAgent,
                    t = navigator.platform,
                    i = e.match(/AppleWebKit\/([0-9]+)/),
                    n = !!i && i[1],
                    a = null,
                    o = this;
                if (t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1 || t.indexOf("iPod") > -1) a = "ios";
                else {
                    if (!(e.indexOf("Android") > -1)) return;
                    a = "android"
                }
                if ("ios" === a) o._bindScrollWorkaround();
                else {
                    if (!("android" === a && n && 534 > n)) return;
                    o._bindScrollWorkaround(), o._bindListThumbWorkaround()
                }
            },
            _viewportOffset: function () {
                var t = this.element,
                    i = t.is(".ui-header"),
                    n = Math.abs(t.offset().top - e.mobile.window.scrollTop());
                return i || (n = Math.round(n - e.mobile.window.height() + t.outerHeight()) - 60), n
            },
            _bindScrollWorkaround: function () {
                var t = this;
                this._on(e.mobile.window, {
                    scrollstop: function () {
                        var e = t._viewportOffset();
                        e > 2 && t._visible && t._triggerRedraw()
                    }
                })
            },
            _bindListThumbWorkaround: function () {
                this.element.closest(".ui-page").addClass("ui-android-2x-fixed")
            },
            _triggerRedraw: function () {
                var t = parseFloat(e(".ui-page-active").css("padding-bottom"));
                e(".ui-page-active").css("padding-bottom", t + 1 + "px"), setTimeout(function () {
                    e(".ui-page-active").css("padding-bottom", t + "px")
                }, 0)
            },
            destroy: function () {
                this._super(), this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")
            }
        })
    }(e),
    function (e, n) {
        e.widget("mobile.panel", e.mobile.widget, {
            options: {
                classes: {
                    panel: "ui-panel",
                    panelOpen: "ui-panel-open",
                    panelClosed: "ui-panel-closed",
                    panelFixed: "ui-panel-fixed",
                    panelInner: "ui-panel-inner",
                    modal: "ui-panel-dismiss",
                    modalOpen: "ui-panel-dismiss-open",
                    pagePanel: "ui-page-panel",
                    pagePanelOpen: "ui-page-panel-open",
                    contentWrap: "ui-panel-content-wrap",
                    contentWrapOpen: "ui-panel-content-wrap-open",
                    contentWrapClosed: "ui-panel-content-wrap-closed",
                    contentFixedToolbar: "ui-panel-content-fixed-toolbar",
                    contentFixedToolbarOpen: "ui-panel-content-fixed-toolbar-open",
                    contentFixedToolbarClosed: "ui-panel-content-fixed-toolbar-closed",
                    animate: "ui-panel-animate"
                },
                animate: !0,
                theme: "c",
                position: "left",
                dismissible: !0,
                display: "reveal",
                initSelector: ":jqmData(role='panel')",
                swipeClose: !0,
                positionFixed: !1
            },
            _panelID: null,
            _closeLink: null,
            _page: null,
            _modal: null,
            _panelInner: null,
            _wrapper: null,
            _fixedToolbar: null,
            _create: function () {
                var t = this,
                    i = t.element,
                    n = i.closest(":jqmData(role='page')"),
                    a = function () {
                        var t = e.data(n[0], "mobilePage").options.theme,
                            i = "ui-body-" + t;
                        return i
                    },
                    o = function () {
                        var e = i.find("." + t.options.classes.panelInner);
                        return 0 === e.length && (e = i.children().wrapAll('<div class="' + t.options.classes.panelInner + '" />').parent()), e
                    },
                    s = function () {
                        var i = n.find("." + t.options.classes.contentWrap);
                        return 0 === i.length && (i = n.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll('<div class="' + t.options.classes.contentWrap + " " + a() + '" />').parent(), e.support.cssTransform3d && t.options.animate && i.addClass(t.options.classes.animate)), i
                    },
                    r = function () {
                        var i = n.find("." + t.options.classes.contentFixedToolbar);
                        return 0 === i.length && (i = n.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(t.options.classes.contentFixedToolbar), e.support.cssTransform3d && t.options.animate && i.addClass(t.options.classes.animate)), i
                    };
                e.extend(this, {
                    _panelID: i.attr("id"),
                    _closeLink: i.find(":jqmData(rel='close')"),
                    _page: i.closest(":jqmData(role='page')"),
                    _pageTheme: a(),
                    _panelInner: o(),
                    _wrapper: s(),
                    _fixedToolbar: r()
                }), t._addPanelClasses(), t._wrapper.addClass(this.options.classes.contentWrapClosed), t._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed), t._page.addClass(t.options.classes.pagePanel), e.support.cssTransform3d && t.options.animate && this.element.addClass(t.options.classes.animate), t._bindUpdateLayout(), t._bindCloseEvents(), t._bindLinkListeners(), t._bindPageEvents(), t.options.dismissible && t._createModal(), t._bindSwipeEvents()
            },
            _createModal: function () {
                var t = this;
                t._modal = e("<div class='" + t.options.classes.modal + "' data-panelid='" + t._panelID + "'></div>").on("mousedown", function () {
                    t.close()
                }).appendTo(this._page)
            },
            _getPosDisplayClasses: function (e) {
                return e + "-position-" + this.options.position + " " + e + "-display-" + this.options.display
            },
            _getPanelClasses: function () {
                var e = this.options.classes.panel + " " + this._getPosDisplayClasses(this.options.classes.panel) + " " + this.options.classes.panelClosed;
                return this.options.theme && (e += " ui-body-" + this.options.theme), this.options.positionFixed && (e += " " + this.options.classes.panelFixed), e
            },
            _addPanelClasses: function () {
                this.element.addClass(this._getPanelClasses())
            },
            _bindCloseEvents: function () {
                var e = this;
                e._closeLink.on("click.panel", function (t) {
                    return t.preventDefault(), e.close(), !1
                }), e.element.on("click.panel", "a:jqmData(ajax='false')", function () {
                    e.close()
                })
            },
            _positionPanel: function () {
                var t = this,
                    i = t._panelInner.outerHeight(),
                    n = i > e.mobile.getScreenHeight();
                n || !t.options.positionFixed ? (n && (t._unfixPanel(), e.mobile.resetActivePageHeight(i)), t._scrollIntoView(i)) : t._fixPanel()
            },
            _scrollIntoView: function (i) {
                e(t).scrollTop() > i && t.scrollTo(0, 0)
            },
            _bindFixListener: function () {
                this._on(e(t), {
                    throttledresize: "_positionPanel"
                })
            },
            _unbindFixListener: function () {
                this._off(e(t), "throttledresize")
            },
            _unfixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.removeClass(this.options.classes.panelFixed)
            },
            _fixPanel: function () {
                this.options.positionFixed && e.support.fixedPosition && this.element.addClass(this.options.classes.panelFixed)
            },
            _bindUpdateLayout: function () {
                var e = this;
                e.element.on("updatelayout", function () {
                    e._open && e._positionPanel()
                })
            },
            _bindLinkListeners: function () {
                var t = this;
                t._page.on("click.panel", "a", function (i) {
                    if (this.href.split("#")[1] === t._panelID && t._panelID !== n) {
                        i.preventDefault();
                        var a = e(this);
                        return a.hasClass("ui-link") || (a.addClass(e.mobile.activeBtnClass), t.element.one("panelopen panelclose", function () {
                            a.removeClass(e.mobile.activeBtnClass)
                        })), t.toggle(), !1
                    }
                })
            },
            _bindSwipeEvents: function () {
                var e = this,
                    t = e._modal ? e.element.add(e._modal) : e.element;
                e.options.swipeClose && ("left" === e.options.position ? t.on("swipeleft.panel", function () {
                    e.close()
                }) : t.on("swiperight.panel", function () {
                    e.close()
                }))
            },
            _bindPageEvents: function () {
                var e = this;
                e._page.on("panelbeforeopen", function (t) {
                    e._open && t.target !== e.element[0] && e.close()
                }).on("pagehide", function () {
                    e._open && e.close(!0)
                }).on("keyup.panel", function (t) {
                    27 === t.keyCode && e._open && e.close()
                })
            },
            _open: !1,
            _contentWrapOpenClasses: null,
            _fixedToolbarOpenClasses: null,
            _modalOpenClasses: null,
            open: function (t) {
                if (!this._open) {
                    var i = this,
                        n = i.options,
                        a = function () {
                            i._page.off("panelclose"), i._page.jqmData("panel", "open"), !t && e.support.cssTransform3d && n.animate ? i.element.add(i._wrapper).on(i._transitionEndEvents, o) : setTimeout(o, 0), i.options.theme && "overlay" !== i.options.display && i._page.removeClass(i._pageTheme).addClass("ui-body-" + i.options.theme), i.element.removeClass(n.classes.panelClosed).addClass(n.classes.panelOpen), i._positionPanel(), i.options.theme && "overlay" !== i.options.display && i._wrapper.css("min-height", i._page.css("min-height")), i._contentWrapOpenClasses = i._getPosDisplayClasses(n.classes.contentWrap), i._wrapper.removeClass(n.classes.contentWrapClosed).addClass(i._contentWrapOpenClasses + " " + n.classes.contentWrapOpen), i._fixedToolbarOpenClasses = i._getPosDisplayClasses(n.classes.contentFixedToolbar), i._fixedToolbar.removeClass(n.classes.contentFixedToolbarClosed).addClass(i._fixedToolbarOpenClasses + " " + n.classes.contentFixedToolbarOpen), i._modalOpenClasses = i._getPosDisplayClasses(n.classes.modal) + " " + n.classes.modalOpen, i._modal && i._modal.addClass(i._modalOpenClasses)
                        },
                        o = function () {
                            i.element.add(i._wrapper).off(i._transitionEndEvents, o), i._page.addClass(n.classes.pagePanelOpen), i._bindFixListener(), i._trigger("open")
                        };
                    0 > this.element.closest(".ui-page-active").length && (t = !0), i._trigger("beforeopen"), "open" === i._page.jqmData("panel") ? i._page.on("panelclose", function () {
                        a()
                    }) : a(), i._open = !0
                }
            },
            close: function (t) {
                if (this._open) {
                    var i = this.options,
                        n = this,
                        a = function () {
                            !t && e.support.cssTransform3d && i.animate ? n.element.add(n._wrapper).on(n._transitionEndEvents, o) : setTimeout(o, 0), n._page.removeClass(i.classes.pagePanelOpen), n.element.removeClass(i.classes.panelOpen), n._wrapper.removeClass(i.classes.contentWrapOpen), n._fixedToolbar.removeClass(i.classes.contentFixedToolbarOpen), n._modal && n._modal.removeClass(n._modalOpenClasses)
                        },
                        o = function () {
                            n.options.theme && "overlay" !== n.options.display && (n._page.removeClass("ui-body-" + n.options.theme).addClass(n._pageTheme), n._wrapper.css("min-height", "")), n.element.add(n._wrapper).off(n._transitionEndEvents, o), n.element.addClass(i.classes.panelClosed), n._wrapper.removeClass(n._contentWrapOpenClasses).addClass(i.classes.contentWrapClosed), n._fixedToolbar.removeClass(n._fixedToolbarOpenClasses).addClass(i.classes.contentFixedToolbarClosed), n._fixPanel(), n._unbindFixListener(), e.mobile.resetActivePageHeight(), n._page.jqmRemoveData("panel"), n._trigger("close")
                        };
                    0 > this.element.closest(".ui-page-active").length && (t = !0), n._trigger("beforeclose"), a(), n._open = !1
                }
            },
            toggle: function () {
                this[this._open ? "close" : "open"]()
            },
            _transitionEndEvents: "webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",
            _destroy: function () {
                var t = this.options.classes,
                    i = this.options.theme,
                    n = this.element.siblings("." + t.panel).length;
                n ? this._open && (this._wrapper.removeClass(t.contentWrapOpen), this._fixedToolbar.removeClass(t.contentFixedToolbarOpen), this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), i && this._page.removeClass("ui-body-" + i).addClass(this._pageTheme)) : (this._wrapper.children().unwrap(), this._page.find("a").unbind("panelopen panelclose"), this._page.removeClass(t.pagePanel), this._open && (this._page.jqmRemoveData("panel"), this._page.removeClass(t.pagePanelOpen), i && this._page.removeClass("ui-body-" + i).addClass(this._pageTheme), e.mobile.resetActivePageHeight())), this._panelInner.children().unwrap(), this.element.removeClass([this._getPanelClasses(), t.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"), this._closeLink.off("click.panel"), this._modal && this._modal.remove(), this.element.off(this._transitionEndEvents).removeClass([t.panelUnfixed, t.panelClosed, t.panelOpen].join(" "))
            }
        }), e(i).bind("pagecreate create", function (t) {
            e.mobile.panel.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e, t) {
        e.widget("mobile.table", e.mobile.widget, {
            options: {
                classes: {
                    table: "ui-table"
                },
                initSelector: ":jqmData(role='table')"
            },
            _create: function () {
                var e = this;
                e.refresh(!0)
            },
            refresh: function (i) {
                var n = this,
                    a = this.element.find("thead tr");
                i && this.element.addClass(this.options.classes.table), n.headers = this.element.find("tr:eq(0)").children(), n.allHeaders = n.headers.add(a.children()), a.each(function () {
                    var o = 0;
                    e(this).children().each(function () {
                        var s = parseInt(e(this).attr("colspan"), 10),
                            r = ":nth-child(" + (o + 1) + ")";
                        if (e(this).jqmData("colstart", o + 1), s)
                            for (var l = 0; s - 1 > l; l++) o++, r += ", :nth-child(" + (o + 1) + ")";
                        i === t && e(this).jqmData("cells", ""), e(this).jqmData("cells", n.element.find("tr").not(a.eq(0)).not(this).children(r)), o++
                    })
                }), i === t && this.element.trigger("refresh")
            }
        }), e.mobile.document.bind("pagecreate create", function (t) {
            e.mobile.table.prototype.enhanceWithin(t.target)
        })
    }(e),
    function (e, t) {
        e.mobile.table.prototype.options.mode = "columntoggle", e.mobile.table.prototype.options.columnBtnTheme = null, e.mobile.table.prototype.options.columnPopupTheme = null, e.mobile.table.prototype.options.columnBtnText = "Columns...", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
            popup: "ui-table-columntoggle-popup",
            columnBtn: "ui-table-columntoggle-btn",
            priorityPrefix: "ui-table-priority-",
            columnToggleTable: "ui-table-columntoggle"
        }), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (i) {
            var n, a, o, s, r = e(this),
                l = r.data("mobile-table"),
                d = i.type,
                c = l.options,
                h = e.mobile.ns,
                u = (r.attr("id") || c.classes.popup) + "-popup";
            "columntoggle" === c.mode && ("refresh" !== d && (l.element.addClass(c.classes.columnToggleTable), n = e("<a href='#" + u + "' class='" + c.classes.columnBtn + "' data-" + h + "rel='popup' data-" + h + "mini='true'>" + c.columnBtnText + "</a>"), a = e("<div data-" + h + "role='popup' data-" + h + "role='fieldcontain' class='" + c.classes.popup + "' id='" + u + "'></div>"), o = e("<fieldset data-" + h + "role='controlgroup'></fieldset>")), l.headers.not("td").each(function (t) {
                var i = e(this).jqmData("priority"),
                    n = e(this).add(e(this).jqmData("cells"));
                i && (n.addClass(c.classes.priorityPrefix + i), "refresh" !== d ? e("<label><input type='checkbox' checked />" + e(this).text() + "</label>").appendTo(o).children(0).jqmData("cells", n).checkboxradio({
                    theme: c.columnPopupTheme
                }) : e("#" + u + " fieldset div:eq(" + t + ")").find("input").jqmData("cells", n))
            }), "refresh" !== d && o.appendTo(a), s = o === t ? e("#" + u + " fieldset") : o, "refresh" !== d && (s.on("change", "input", function () {
                this.checked ? e(this).jqmData("cells").removeClass("ui-table-cell-hidden").addClass("ui-table-cell-visible") : e(this).jqmData("cells").removeClass("ui-table-cell-visible").addClass("ui-table-cell-hidden")
            }), n.insertBefore(r).buttonMarkup({
                theme: c.columnBtnTheme
            }), a.insertBefore(r).popup()), l.update = function () {
                s.find("input").each(function () {
                    this.checked ? (this.checked = "table-cell" === e(this).jqmData("cells").eq(0).css("display"), "refresh" === d && e(this).jqmData("cells").addClass("ui-table-cell-visible")) : e(this).jqmData("cells").addClass("ui-table-cell-hidden"), e(this).checkboxradio("refresh")
                })
            }, e.mobile.window.on("throttledresize", l.update), l.update())
        })
    }(e),
    function (e) {
        e.mobile.table.prototype.options.mode = "reflow", e.mobile.table.prototype.options.classes = e.extend(e.mobile.table.prototype.options.classes, {
            reflowTable: "ui-table-reflow",
            cellLabels: "ui-table-cell-label"
        }), e.mobile.document.delegate(":jqmData(role='table')", "tablecreate refresh", function (t) {
            var i = e(this),
                n = t.type,
                a = i.data("mobile-table"),
                o = a.options;
            if ("reflow" === o.mode) {
                "refresh" !== n && a.element.addClass(o.classes.reflowTable);
                var s = e(a.allHeaders.get().reverse());
                s.each(function () {
                    var t = e(this).jqmData("cells"),
                        i = e(this).jqmData("colstart"),
                        n = t.not(this).filter("thead th").length && " ui-table-cell-label-top",
                        a = e(this).text();
                    if ("" !== a)
                        if (n) {
                            var s = parseInt(e(this).attr("colspan"), 10),
                                r = "";
                            s && (r = "td:nth-child(" + s + "n + " + i + ")"), t.filter(r).prepend("<b class='" + o.classes.cellLabels + n + "'>" + a + "</b>")
                        } else t.prepend("<b class='" + o.classes.cellLabels + "'>" + a + "</b>")
                })
            }
        })
    }(e),
    function (e, t) {
        function i(e) {
            o = e.originalEvent, d = o.accelerationIncludingGravity, s = Math.abs(d.x), r = Math.abs(d.y), l = Math.abs(d.z), !t.orientation && (s > 7 || (l > 6 && 8 > r || 8 > l && r > 6) && s > 5) ? c.enabled && c.disable() : c.enabled || c.enable()
        }
        e.mobile.iosorientationfixEnabled = !0;
        var a = navigator.userAgent;
        if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(a) && a.indexOf("AppleWebKit") > -1)) return e.mobile.iosorientationfixEnabled = !1, n;
        var o, s, r, l, d, c = e.mobile.zoom;
        e.mobile.document.on("mobileinit", function () {
            e.mobile.iosorientationfixEnabled && e.mobile.window.bind("orientationchange.iosorientationfix", c.enable).bind("devicemotion.iosorientationfix", i)
        })
    }(e, this),
    function (e, t) {
        function n() {
            a.removeClass("ui-mobile-rendering")
        }
        var a = e("html"),
            o = (e("head"), e.mobile.window);
        e(t.document).trigger("mobileinit"), e.mobile.gradeA() && (e.mobile.ajaxBlacklist && (e.mobile.ajaxEnabled = !1), a.addClass("ui-mobile ui-mobile-rendering"), setTimeout(n, 5e3), e.extend(e.mobile, {
            initializePage: function () {
                var t = e.mobile.path,
                    a = e(":jqmData(role='page'), :jqmData(role='dialog')"),
                    s = t.stripHash(t.stripQueryParams(t.parseLocation().hash)),
                    r = i.getElementById(s);
                a.length || (a = e("body").wrapInner("<div data-" + e.mobile.ns + "role='page'></div>").children(0)), a.each(function () {
                    var t = e(this);
                    t.jqmData("url") || t.attr("data-" + e.mobile.ns + "url", t.attr("id") || location.pathname + location.search)
                }), e.mobile.firstPage = a.first(), e.mobile.pageContainer = e.mobile.firstPage.parent().addClass("ui-mobile-viewport"), o.trigger("pagecontainercreate"), e.mobile.showPageLoadingMsg(), n(), e.mobile.hashListeningEnabled && e.mobile.path.isHashValid(location.hash) && (e(r).is(':jqmData(role="page")') || e.mobile.path.isPath(s) || s === e.mobile.dialogHashKey) ? e.event.special.navigate.isPushStateEnabled() ? (e.mobile.navigate.history.stack = [], e.mobile.navigate(e.mobile.path.isPath(location.hash) ? location.hash : location.href)) : o.trigger("hashchange", [!0]) : (e.mobile.path.isHashValid(location.hash) && (e.mobile.urlHistory.initialDst = s.replace("#", "")), e.event.special.navigate.isPushStateEnabled() && e.mobile.navigate.navigator.squash(t.parseLocation().href), e.mobile.changePage(e.mobile.firstPage, {
                    transition: "none",
                    reverse: !0,
                    changeHash: !1,
                    fromHashChange: !0
                }))
            }
        }), e.mobile.navreadyDeferred.resolve(), e(function () {
            t.scrollTo(0, 1), e.mobile.defaultHomeScroll = e.support.scrollTop && 1 !== e.mobile.window.scrollTop() ? 1 : 0, e.mobile.autoInitializePage && e.mobile.initializePage(), o.load(e.mobile.silentScroll), e.support.cssPointerEvents || e.mobile.document.delegate(".ui-disabled", "vclick", function (e) {
                e.preventDefault(), e.stopImmediatePropagation()
            })
        }))
    }(e, this)
});
//@ sourceMappingURL=jquery.mobile-1.3.1.min.map