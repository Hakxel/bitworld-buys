(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    173: function (e, t, a) {
      e.exports = a(411)
    },
    178: function (e, t, a) {},
    181: function (e, t, a) {},
    189: function (e, t, a) {},
    190: function (e, t, a) {},
    193: function (e, t, a) {},
    212: function (e, t, a) {},
    411: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(67),
        c = a.n(l),
        o = a(412),
        i = (a(178), function () {
          return r.a.createElement("div", {
            className: "ui big borderless menu inverted blue",
            id: "navigation"
          }, r.a.createElement("img", {
            src: "logo.png",
            alt: "logo",
            id: "logo"
          }), r.a.createElement("div", {
            className: "menu",
            id: "home-about"
          }, r.a.createElement(o.a, {
            to: "/",
            className: "header item"
          }, "Home"), r.a.createElement(o.a, {
            to: "/about",
            className: "item"
          }, "About")))
        }),
        s = a(20),
        u = a(21),
        m = a(23),
        h = a(22),
        d = a(24),
        p = (a(181), a(171)),
        g = function (e) {
          function t(e) {
            var a;
            return Object(s.a)(this, t), (a = Object(m.a)(this, Object(h.a)(t).call(this))).searchLocalStores = function (e) {
              e.preventDefault(), a.props.homeProps.history.push("/local-search")
            }, a.searchOnlineStores = function (e) {
              e.preventDefault(), a.props.homeProps.history.push("/online-search")
            }, a
          }
          return Object(d.a)(t, e), Object(u.a)(t, [{
            key: "render",
            value: function () {
              return r.a.createElement("div", {
                className: "main-content"
              }, console.log(this.props), r.a.createElement("div", {
                className: "hero"
              }, r.a.createElement("div", null, r.a.createElement("h1", null, "Bitworld Buys"), r.a.createElement("h2", null, "the future of ", " ", r.a.createElement(p.a, {
                interval: 3e3
              }, r.a.createElement("span", null, "global"), r.a.createElement("span", null, "local"), r.a.createElement("span", null, "bitcoin")), " ", "shopping. today.")), r.a.createElement("div", {
                className: "store-buttons"
              }, r.a.createElement("button", {
                className: "local ui button large",
                id: "home-buttons",
                onClick: this.searchLocalStores
              }, "Shop Local"), r.a.createElement("button", {
                className: "online ui button large",
                id: "home-buttons",
                onClick: this.searchOnlineStores
              }, "Shop Online"))))
            }
          }]), t
        }(r.a.Component),
        E = (a(189), function () {
          return r.a.createElement("div", {
            className: "footer"
          }, r.a.createElement("div", {
            className: "ui borderless menu inverted blue"
          }, r.a.createElement("a", {
            href: "https://github.com/Hakxel/FF_team2",
            target: "_blank",
            rel: "noopener noreferrer"
          }, r.a.createElement("i", {
            className: "black huge github square icon"
          }))))
        }),
        v = function (e) {
          return r.a.createElement("div", {
            className: "home"
          }, r.a.createElement("div", {
            className: "main-wrapper"
          }, r.a.createElement(i, null), r.a.createElement(g, {
            homeProps: e
          })), r.a.createElement("div", null, r.a.createElement(E, null)))
        },
        f = (a(190), function () {
          return r.a.createElement("div", {
            className: "all-about"
          }, r.a.createElement(i, null), r.a.createElement("div", null, r.a.createElement("div", {
            className: "About-Main"
          }, r.a.createElement("h1", {
            id: "creators"
          }, "An introduction to our project"), r.a.createElement("div", {
            className: "bio"
          }, r.a.createElement("p", null, "Virtual currencies like Bitcoin, Ethereum and others are a new and unique way to store value. These crypto-currencies have become increasingly well-known in popular culture, but owners of the currency lack an easy way to search for merchants that accept it. Our application seeks to solve that problem by allowing users to search for products by keyword, rendering a list of merchants where they may use Bitcoin as a method of payment.", r.a.createElement("a", {
            href: "https://en.wikipedia.org/wiki/Virtual_currency",
            target: "_blank",
            rel: "noopener noreferrer"
          }, " Learn more about virtual currency. "))), r.a.createElement("h1", {
            id: "creators"
          }, "Creators"), r.a.createElement("div", {
            className: "bio-container"
          }, r.a.createElement("div", {
            className: "image-header"
          }, r.a.createElement("img", {
            className: "bio-photo",
            src: "Asiel_Montes02.jpg",
            alt: "Asiel",
            width: 290,
            height: 300
          })), r.a.createElement("div", {
            className: "bio"
          }, r.a.createElement("p", null, "Asiel Montes is a full-stack web developer familiar with HTML, CSS, JavaScript, GIT, React, Express, Ruby and Rails. Asiel has experience working in the travel/tourism industry as well as in the financial sector. Asiel holds a Bachelor's degree in Translation. His communication skills are excellent and spoken languages include fluency in Spanish, English and French.", r.a.createElement("a", {
            href: "http://www.linkedin.com/in/asiel-montes-27b95612a",
            target: "_blank",
            rel: "noopener noreferrer"
          }, " Connect with Asiel.")))), r.a.createElement("div", {
            className: "bio-container"
          }, r.a.createElement("div", {
            className: "image-header"
          }, r.a.createElement("img", {
            className: "bio-photo",
            src: "Alvaro_Vargas01.jpeg",
            alt: "Alvaro",
            width: 290,
            height: 300
          })), r.a.createElement("div", {
            className: "bio"
          }, r.a.createElement("p", null, "Alvaro Vargas is a junior web developer currently expanding his knowledge in HTML, CSS, JavaScript, and React at Wyncode Academy. He is an experienced Program Manager in the field of educational non-profit youth services.", r.a.createElement("a", {
            href: "http://www.linkedin.com/in/alvaro-vargas-910",
            target: "_blank",
            rel: "noopener noreferrer"
          }, " Connect with Alvaro.")))), r.a.createElement("div", {
            className: "bio-container"
          }, r.a.createElement("div", {
            className: "image-header"
          }, r.a.createElement("img", {
            className: "bio-photo",
            src: "Jamie_Damon01.jpg",
            alt: "Jamie",
            width: 290,
            height: 300
          })), r.a.createElement("div", {
            className: "bio"
          }, r.a.createElement("p", null, "Jamie Damon is a full stack web developer with a background in financial services and client engagement. His current technology experience includes work with HTML, CSS, JavaScript, jQuery, and React. Current and previous work with teams has led to quality results in a project focused agile development environment.", r.a.createElement("a", {
            href: "http://www.linkedin.com/in/jamieldamon",
            target: "_blank",
            rel: "noopener noreferrer"
          }, " Connect with Jamie.")))))), r.a.createElement(E, null))
        }),
        b = a(414),
        y = a(413),
        w = a(30),
        k = a.n(w),
        S = a(68),
        N = (a(193), a(69)),
        O = a.n(N),
        j = function (e) {
          return r.a.createElement("form", {
            className: "search-bar ui large fluid left icon input",
            onSubmit: e.handleSubmit
          }, r.a.createElement("i", {
            className: "search icon"
          }), r.a.createElement("input", {
            type: "text",
            placeholder: "Search by keywords...",
            name: "productSearch",
            value: e.searchValue,
            onChange: e.handleChange
          }), r.a.createElement("button", {
            className: "ui blue button"
          }, "Search"))
        },
        C = a(166),
        L = a.n(C),
        A = function (e) {
          function t(e) {
            var a;
            return Object(s.a)(this, t), (a = Object(m.a)(this, Object(h.a)(t).call(this, e))).onChangePage = function (e) {
              a.setState({
                pageOfItems: e
              })
            }, a.fetchProductData = Object(S.a)(k.a.mark(function e() {
              var t, n;
              return k.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, O.a.get("/onlinesearch/".concat(a.state.searchValue));
                  case 2:
                    t = e.sent, n = t.data, a.setState({
                      products: n
                    }), 0 === n.length && a.setState({
                      noResults: !0
                    }), console.log(a.state.products), Array.isArray(a.state.products) && 0 === a.state.products.length && console.log("no results returned: ".concat(a.state.products.length));
                  case 8:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            })), a.handleSubmit = function (e) {
              e.preventDefault(), a.fetchProductData(), console.log(a.state.searchValue)
            }, a.handleChange = function (e) {
              e.preventDefault(), a.setState({
                searchValue: e.target.value
              })
            }, a.state = {
              products: [],
              searchValue: "",
              noResults: !1,
              pageOfItems: []
            }, a
          }
          return Object(d.a)(t, e), Object(u.a)(t, [{
            key: "render",
            value: function () {
              return r.a.createElement("div", null, r.a.createElement(i, null), r.a.createElement("div", {
                className: "main-online-search"
              }, r.a.createElement("div", {
                id: "main-titles"
              }, r.a.createElement("h1", null), r.a.createElement("h2", null, "Search Products Worldwide")), r.a.createElement("div", null, r.a.createElement(j, {
                onSubmit: this.handleSubmit,
                searchValue: this.state.searchValue,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
              })), r.a.createElement("div", null, this.state.noResults ? r.a.createElement("div", {
                className: "no-results"
              }, r.a.createElement("p", null, ' Your search for "', this.state.searchValue, '" returned no results.'), r.a.createElement("p", null, "Please check your spelling or enter keywords that are a little less... weird.")) : null), r.a.createElement("div", null, this.state.pageOfItems.map(function (e) {
                return r.a.createElement("div", {
                  key: e.id
                }, r.a.createElement("div", null, r.a.createElement("div", {
                  className: "product"
                }, r.a.createElement("div", {
                  id: "thumbnail"
                }, r.a.createElement("img", {
                  src: e.thumbnailURL,
                  alt: "not available"
                })), r.a.createElement("div", {
                  id: "product-name"
                }, r.a.createElement("a", {
                  href: e.url,
                  target: "_blank"
                }, r.a.createElement("p", null, e.name))), r.a.createElement("div", {
                  className: "product-detail"
                }, r.a.createElement("p", {
                  id: "product-info"
                }, "Merchant: ", e.merchantName), r.a.createElement("p", {
                  id: "product-info"
                }, "Price(USD): ", e.priceAsString), r.a.createElement("a", {
                  href: e.url,
                  target: "_blank",
                  id: "product-info"
                }, "Buy it with Bitcoin!")))))
              }), r.a.createElement(L.a, {
                items: this.state.products,
                onChangePage: this.onChangePage,
                disableDefaultStyles: !0
              }))), r.a.createElement(E, null))
            }
          }]), t
        }(r.a.Component),
        x = (a(212), a(70)),
        V = a.n(x),
        D = a(38),
        _ = a.n(D),
        M = a(31),
        J = V.a.KEY,
        P = function (e) {
          function t(e) {
            var a;
            return Object(s.a)(this, t), (a = Object(m.a)(this, Object(h.a)(t).call(this, e))).onToggleOpen = function () {
              a.setState({
                isOpen: !a.state.isOpen
              }), a.getAddress(a.props.location.lat, a.props.location.lng)
            }, a.getAddress = function (e, t) {
              _.a.setApiKey(J), _.a.fromLatLng(e, t).then(function (e) {
                var t = e.results[0].formatted_address;
                console.log(t), a.setState({
                  address: t
                })
              }, function (e) {
                console.error(e)
              })
            }, a.state = {
              isOpen: !1,
              address: ""
            }, a
          }
          return Object(d.a)(t, e), Object(u.a)(t, [{
            key: "render",
            value: function () {
              return r.a.createElement(M.Marker, {
                position: this.props.location,
                title: this.props.name,
                onClick: this.onToggleOpen
              }, this.state.isOpen && r.a.createElement(M.InfoWindow, {
                onCloseClick: this.onToggleOpen
              }, r.a.createElement("div", null, r.a.createElement("h4", null, this.props.name), r.a.createElement("address", null, this.state.address))))
            }
          }]), t
        }(r.a.Component),
        R = Object(M.withScriptjs)(Object(M.withGoogleMap)(function (e) {
          var t = e.venues.map(function (e) {
            return r.a.createElement(P, {
              key: e.id,
              venue: e,
              location: {
                lat: e.lat,
                lng: e.lon
              },
              name: e.name
            })
          });
          return r.a.createElement(M.GoogleMap, {
            defaultZoom: 14,
            center: {
              lat: e.lat,
              lng: e.lng
            }
          }, t)
        })),
        B = V.a.KEY,
        T = function (e) {
          function t() {
            var e;
            return Object(s.a)(this, t), (e = Object(m.a)(this, Object(h.a)(t).call(this))).getLocationFromName = function () {
              _.a.setApiKey(B);
              var t = e.state.searchValue;
              console.log("city:" + t), _.a.fromAddress(t).then(function (t) {
                var a = t.results[0].geometry.location,
                  n = a.lat,
                  r = a.lng;
                e.setState({
                  cityLat: n,
                  cityLong: r
                }), console.log("lat:" + e.state.cityLat), console.log("long" + e.state.cityLong)
              }, function (e) {
                console.error("city not found")
              })
            }, e.handleLocalSubmit = function (t) {
              t.preventDefault(), e.getLocationFromName()
            }, e.handleLocalSearchChange = function (t) {
              t.preventDefault(), e.setState({
                searchValue: t.target.value
              })
            }, e.state = {
              venues: [],
              searchValue: "",
              cityLat: 42.3601,
              cityLong: -71.0589
            }, e
          }
          return Object(d.a)(t, e), Object(u.a)(t, [{
            key: "componentDidMount",
            value: function () {
              var e = Object(S.a)(k.a.mark(function e() {
                var t, a;
                return k.a.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, O.a.get("/localsearch");
                    case 2:
                      t = e.sent, a = t.data, this.setState({
                        venues: a
                      });
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }));
              return function () {
                return e.apply(this, arguments)
              }
            }()
          }, {
            key: "render",
            value: function () {
              return r.a.createElement("div", null, r.a.createElement(i, null), r.a.createElement("div", {
                className: "main-local-search"
              }, r.a.createElement("h1", null, "Find Local Retailers"), r.a.createElement("form", {
                className: "ui input",
                onSubmit: this.handleLocalSubmit
              }, r.a.createElement("input", {
                type: "text",
                placeholder: "Enter a city name...",
                name: "local_search",
                value: this.state.searchValue,
                onChange: this.handleLocalSearchChange
              }), r.a.createElement("button", {
                className: "ui blue button"
              }, "Search")), r.a.createElement("div", {
                className: "map-render"
              }, r.a.createElement(R, {
                venues: this.state.venues,
                lat: this.state.cityLat,
                lng: this.state.cityLong,
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(B, "&v=3.exp&libraries=geometry,drawing,places"),
                loadingElement: r.a.createElement("div", {
                  style: {
                    height: "100%"
                  }
                }),
                containerElement: r.a.createElement("div", {
                  style: {
                    height: "70vh",
                    width: "70vw"
                  }
                }),
                mapElement: r.a.createElement("div", {
                  style: {
                    height: "100%"
                  }
                })
              }))), r.a.createElement(E, null))
            }
          }]), t
        }(r.a.Component),
        H = function () {
          return r.a.createElement(b.a, null, r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement(y.a, {
            exact: !0,
            path: "/",
            component: v
          }), r.a.createElement(y.a, {
            path: "/about",
            component: f
          }), r.a.createElement(y.a, {
            path: "/local-search",
            component: T
          }), r.a.createElement(y.a, {
            path: "/online-search",
            component: A
          }))))
        };
      c.a.render(r.a.createElement(H, null), document.getElementById("root"))
    },
    70: function (e, t) {
      e.exports.KEY = "AIzaSyDbO74TKJ17IJHpBJ9Q9IQu3BOY4LooR5w"
    }
  },
  [
    [173, 1, 2]
  ]
]);
//# sourceMappingURL=main.3552ec94.chunk.js.map