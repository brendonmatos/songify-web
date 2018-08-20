/* Spotify JS-SDK - v1.3.0-3eda9a0 */ ! function (e) {
    function t(s) {
        if (n[s]) return n[s].exports;
        var r = n[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, s) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: s
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 2)
}([function (e, t, n) {
    "use strict";
    var s = {
        SPOTIFY_MESSAGE: "SP_MESSAGE",
        ACCOUNT_ERROR: "ACCOUNT_ERROR",
        AUTH_ERROR: "AUTH_ERROR",
        CONNECT: "CONNECT",
        CONNECTED: "CONNECTED",
        CURRENT_STATE: "CURRENT_STATE",
        DISCONNECT: "DISCONNECT",
        EVENT: "EVENT",
        GET_CURRENT_STATE: "GET_CURRENT_STATE",
        GET_TOKEN: "GET_TOKEN",
        GET_VOLUME: "GET_VOLUME",
        INIT: "INIT",
        LOADED: "LOADED",
        NEXT_TRACK: "NEXT_TRACK",
        PAUSE: "PAUSE",
        PLAYBACK_ERROR: "PLAYBACK_ERROR",
        PLAYER_INIT_ERROR: "PLAYER_INIT_ERROR",
        PLAYER_READY: "PLAYER_READY",
        PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED",
        PREV_TRACK: "PREV_TRACK",
        RESUME: "RESUME",
        SEEK: "SEEK",
        SET_VOLUME: "SET_VOLUME",
        TOGGLE_PLAY: "TOGGLE_PLAY",
        TOKEN: "TOKEN",
        VOLUME: "VOLUME",
        accountError: function (e) {
            return this._createEventMessage(s.ACCOUNT_ERROR, {
                message: e
            })
        },
        authError: function (e) {
            return this._createEventMessage(s.AUTH_ERROR, e)
        },
        playbackError: function (e) {
            return this._createEventMessage(s.PLAYBACK_ERROR, e)
        },
        playerReady: function (e) {
            return this._createEventMessage(s.PLAYER_READY, e)
        },
        connect: function () {
            return this._createMessage(s.CONNECT)
        },
        connected: function (e, t) {
            return this._createMessage(s.CONNECTED, {
                connected: e,
                ref: t
            })
        },
        disconnect: function () {
            return this._createMessage(s.DISCONNECT)
        },
        init: function (e) {
            return this._createMessage(s.INIT, e)
        },
        playerInitError: function (e) {
            return this._createEventMessage(s.PLAYER_INIT_ERROR, e)
        },
        getToken: function () {
            return this._createMessage(s.GET_TOKEN)
        },
        token: function (e, t) {
            return this._createMessage(s.TOKEN, {
                token: e,
                ref: t
            })
        },
        pause: function () {
            return this._createMessage(s.PAUSE)
        },
        resume: function () {
            return this._createMessage(s.RESUME)
        },
        togglePlay: function () {
            return this._createMessage(s.TOGGLE_PLAY)
        },
        seek: function (e) {
            return this._createMessage(s.SEEK, e)
        },
        nextTrack: function (e) {
            return this._createMessage(s.NEXT_TRACK, e)
        },
        previousTrack: function (e) {
            return this._createMessage(s.PREV_TRACK, e)
        },
        getCurrentState: function () {
            return this._createMessage(s.GET_CURRENT_STATE)
        },
        currentState: function (e, t) {
            return this._createMessage(s.CURRENT_STATE, {
                state: e,
                ref: t
            })
        },
        playerStateChanged: function (e) {
            return this._createEventMessage(s.PLAYER_STATE_CHANGED, e)
        },
        getVolume: function () {
            return this._createMessage(s.GET_VOLUME)
        },
        volume: function (e, t) {
            return this._createMessage(s.VOLUME, {
                volume: e,
                ref: t
            })
        },
        setVolume: function (e) {
            return this._createMessage(s.SET_VOLUME, e)
        },
        embeddedLoaded: function () {
            return this._createMessage(s.LOADED)
        },
        _createEventMessage: function (e, t) {
            return this._createMessage(s.EVENT, {
                name: e,
                eventData: t
            })
        },
        _createMessage: function (e, t) {
            return {
                type: s.SPOTIFY_MESSAGE,
                body: {
                    topic: e,
                    data: t ? JSON.parse(JSON.stringify(t)) : null
                }
            }
        }
    };
    e.exports = s
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function s() {
        var e = n(3);
        if (!document.body) throw new Error("Document doesn't have a body");
        if (window.Spotify = {
                Player: e.setupPlayerEnv(window)
            }, window.onSpotifyWebPlaybackSDKReady) window.onSpotifyWebPlaybackSDKReady();
        else {
            if (!window.onSpotifyPlayerAPIReady) throw new Error("onSpotifyWebPlaybackSDKReady is not defined");
            window.onSpotifyPlayerAPIReady()
        }
    }
    "complete" === document.readyState ? s() : window.addEventListener("load", s)
}, function (e, t, n) {
    "use strict";
    var s = n(4),
        r = n(5),
        o = n(0),
        i = n(6),
        a = function (e, t) {
            var n, a = window.location.origin + "/static/index2.html",
                u = r.defer(),
                c = new s,
                _ = t || function (t) {
                    var n = e.document.createElement("iframe")
                    n.style = 'display: none;'
                    n.allow = 'encrypted-media' 
                    return n.src = t, e.document.body.appendChild(n), n.contentWindow
                },
                h = function (t) {
                    t === o.LOADED && (c.stopListening(e, h), u.resolve())
                };
            c.listen(e, h), n = _(a);
            var d = function (t) {
                this._options = this._sanitizeOptions(t), this._handleMessages = this._handleMessages.bind(this), this._messageHandlers = {}, this._eventListeners = {}, this._setupMessageHandlers(), this._connectionRequests = {}, this._getCurrentStateRequests = {}, this._getVolumeRequests = {}, this.isLoaded = u.promise.then(function () {
                    c.listen(e, this._handleMessages), this._sendMessage(o.init(this._options))
                }.bind(this))
            };
            return d.prototype._sanitizeOptions = function (t) {
                var n = e && e.location && e.location.hostname || "";
                return {
                    name: t.name || n,
                    id: i.get(),
                    getOAuthToken: t.getOAuthToken || t.getOauthToken,
                    volume: t.volume || 1
                }
            }, d.prototype._setupMessageHandlers = function () {
                this._messageHandlers[o.GET_TOKEN] = this._onGetToken.bind(this), this._messageHandlers[o.EVENT] = this._onEvent.bind(this), this._messageHandlers[o.CONNECTED] = this._onConnected.bind(this), this._messageHandlers[o.CURRENT_STATE] = this._onCurrentState.bind(this), this._messageHandlers[o.VOLUME] = this._onVolume.bind(this)
            }, d.prototype.connect = function () {
                return this.isLoaded.then(function () {
                    var e = this._sendMessage(o.connect());
                    return this._connectionRequests[e] = r.defer(), this._connectionRequests[e].promise
                }.bind(this))
            }, d.prototype.on = function (e, t) {
                this._eventListeners[e] = this._eventListeners[e] || [], this._eventListeners[e].push(t)
            }, d.prototype.getCurrentState = function () {
                return this.isLoaded.then(function () {
                    var e = this._sendMessage(o.getCurrentState());
                    return this._getCurrentStateRequests[e] = r.defer(), this._getCurrentStateRequests[e].promise
                }.bind(this))
            }, d.prototype.getVolume = function () {
                return this.isLoaded.then(function () {
                    var e = this._sendMessage(o.getVolume());
                    return this._getVolumeRequests[e] = r.defer(), this._getVolumeRequests[e].promise
                }.bind(this))
            }, d.prototype.setVolume = function (e) {
                return this._sendMessageWhenLoaded(o.setVolume(e))
            }, d.prototype.pause = function () {
                return this._sendMessageWhenLoaded(o.pause())
            }, d.prototype.resume = function () {
                return this._sendMessageWhenLoaded(o.resume())
            }, d.prototype.togglePlay = function () {
                return this._sendMessageWhenLoaded(o.togglePlay())
            }, d.prototype.seek = function (e) {
                return this._sendMessageWhenLoaded(o.seek(e))
            }, d.prototype.previousTrack = function (e) {
                return this._sendMessageWhenLoaded(o.previousTrack(e))
            }, d.prototype.nextTrack = function (e) {
                return this._sendMessageWhenLoaded(o.nextTrack(e))
            }, d.prototype.disconnect = function () {
                return this._sendMessageWhenLoaded(o.disconnect())
            }, d.prototype._getListeners = function () {
                var e = {};
                return e[o.ACCOUNT_ERROR] = "account_error", e[o.AUTH_ERROR] = "authentication_error", e[o.PLAYBACK_ERROR] = "playback_error", e[o.PLAYER_INIT_ERROR] = "initialization_error", e[o.PLAYER_READY] = "ready", e[o.PLAYER_STATE_CHANGED] = "player_state_changed",
                    function (t) {
                        return this._eventListeners[e[t]] || []
                    }
            }(), d.prototype._onEvent = function (e) {
                this._getListeners(e.name).forEach(function (t) {
                    t(e.eventData)
                })
            }, d.prototype._onGetToken = function (e, t) {
                var n = this._options.getOAuthToken;
                if ("function" != typeof n) {
                    var s = "getOAuthToken is not a function";
                    if (this._getListeners(o.PLAYER_INIT_ERROR).length) return void this._onEvent({
                        name: o.PLAYER_INIT_ERROR,
                        eventData: {
                            message: s
                        }
                    });
                    throw new Error(s)
                }
                new r(n).then(function (e) {
                    this._sendMessage(o.token(e, t))
                }.bind(this))
            }, d.prototype._onConnected = function (e) {
                e.ref in this._connectionRequests && (this._connectionRequests[e.ref].resolve(e.connected), delete this._connectionRequests[e.ref])
            }, d.prototype._onCurrentState = function (e) {
                e.ref in this._getCurrentStateRequests && (this._getCurrentStateRequests[e.ref].resolve(e.state), delete this._getCurrentStateRequests[e.ref])
            }, d.prototype._onVolume = function (e) {
                e.ref in this._getVolumeRequests && (this._getVolumeRequests[e.ref].resolve(e.volume), delete this._getVolumeRequests[e.ref])
            }, d.prototype._handleMessages = function (e, t, n) {
                e in this._messageHandlers && this._messageHandlers[e](t, n)
            }, d.prototype._sendMessage = function (e) {
                return c.send(n, e, a)
            }, d.prototype._sendMessageWhenLoaded = function (e) {
                return this.isLoaded.then(this._sendMessage.bind(this, e))
            }, d
        };
    e.exports.setupPlayerEnv = a
}, function (e, t, n) {
    "use strict";
    var s = n(0),
        r = function () {
            this._onMessageCallback = function () {}, this._receiveMessage = this._receiveMessage.bind(this), this._messageId = 0
        };
    r.prototype.listen = function (e, t) {
        this._onMessageCallback = t, e.addEventListener("message", this._receiveMessage)
    }, r.prototype.stopListening = function (e) {
        e.removeEventListener("message", this._receiveMessage)
    }, r.prototype.send = function (e, t, n) {
        return e.postMessage(this._addMessageId(t), n || "*"), t.seq
    }, r.prototype._addMessageId = function (e) {
        return e.seq = this._messageId++, e
    }, r.prototype._receiveMessage = function (e) {
        var t = e.data;
        t.type === s.SPOTIFY_MESSAGE && t.body && t.body.topic && this._onMessageCallback(t.body.topic, t.body.data, t.seq)
    }, e.exports = r
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var n = t.Promise;
        if (!n) throw new Error("Fatal: no Promise implementation available.");
        var s;
        s = Object.defineProperty ? function (e, t, n) {
            return e[t] ? e : (Object.defineProperty(e, t, {
                value: n,
                configurable: !0,
                writable: !0
            }), e)
        } : function (e, t, n) {
            return e[t] ? e : (e[t] = n, e)
        }, s(n, "defer", function () {
            var e = {};
            return e.promise = new n(function (t, n) {
                e.resolve = t, e.reject = n
            }), e
        }), s(n.prototype, "spread", function (e, t) {
            return this.then(function (e) {
                return n.all(e)
            }).then(function (t) {
                return 1 === t.length ? e(t[0]) : e.apply(this, t)
            }, t)
        }), e.exports = n
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (t) {
        function s() {
            var e = new t.Uint8Array(16);
            return t.crypto.getRandomValues(e), i.toHex(e.join(""), 40).slice(0, 40)
        }

        function r() {
            for (var e = new Array(27), t = e.length; t--;) e[t] = Math.floor(8 * Math.random());
            return i.toHex(e.join(""), 40)
        }

        function o(e, n) {
            if (e && "string" == typeof e) return e;
            if (n) return u();
            var s = t.localStorage.getItem(c);
            return s || (s = u(), t.localStorage.setItem(c, s)), s
        }
        var i = n(7),
            a = "function" == typeof t.Uint8Array && void 0 !== t.crypto && "function" == typeof t.crypto.getRandomValues,
            u = a ? s : r,
            c = "_spharmony_device_id";
        e.exports = {
            get: o,
            generate: u,
            generateWithCrypto: s,
            generateWithRandom: r
        }
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";

    function s(e, t, n) {
        for (var s = 0, r = 0; r < e.length; ++r) {
            var o = e[r] * t + s;
            e[r] = o % n, s = ~~(o / n)
        }
        for (; s;) e.push(s % n), s = ~~(s / n)
    }

    function r(e, t, n, s) {
        var r, o, i = 0;
        for (o = 0; o < t.length; ++o) r = ~~e[o] + t[o] * n + i, e[o] = r % s, i = ~~(r / s);
        for (; i;) r = ~~e[o] + i, e[o] = r % s, i = ~~(r / s), ++o
    }

    function o(e, t, n) {
        for (var o = [0], i = [1], a = 0; a < e.length; ++a) r(o, i, e[a], n), s(i, t, n);
        return o
    }

    function i(e, t) {
        for (var n = [], s = 0; s < e.length; ++s) n.push(t[e[s]]);
        return n.reverse()
    }

    function a(e, t) {
        for (; e.length < t;) e.push(0);
        return e
    }
    var u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        c = {},
        _ = {};
    ! function () {
        var e, t;
        for (e = 0, t = u.length; e < t; ++e) _[u[e]] = e;
        for (e = 0; e < 16; ++e) c["0123456789abcdef" [e]] = e;
        for (e = 0; e < 16; ++e) c["0123456789ABCDEF" [e]] = e
    }(), e.exports = {
        fromBytes: function (e, t) {
            return i(a(o(e.slice(0).reverse(), 256, 62), t), u).join("")
        },
        toBytes: function (e, t) {
            return a(o(i(e, _), 62, 256), t).reverse()
        },
        toHex: function (e, t) {
            return i(a(o(i(e, _), 62, 16), t), u).join("")
        },
        fromHex: function (e, t) {
            return i(a(o(i(e, c), 16, 62), t), u).join("")
        }
    }
}]);