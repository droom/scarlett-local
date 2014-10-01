$(document).ready(function () {
    function t(t, e, a) {
        var i = $(t).height(),
            n = $(e).height(),
            o = (i - n - a) / 2;
        $(e).css("margin-top", o)
    }

    function e(t) {
        var e = $(t + " #image-container"),
            a = e.children("img"),
            i = e.children("img").length,
            n = $(t + " #image-hidden"),
            o = n.width(),
            s = e.children("img.active").attr("src"),
            r = o / i;
        n.css("background-image", "url(" + s + ")"), n.mousemove(function (t) {
            var i = $(this).offset(),
                o = t.pageX - i.left;
            a.each(function (t) {
                var a = r * t,
                    i = e.children("img[data-index=" + t + "]").attr("src");
                o >= a && n.css("background-image", "url(" + i + ")")
            })
        })
    }

    function a() {
        $(".video-overlay.active").fadeOut(300);
        var t = $(".video-overlay.active").children(".video-full").attr("id");
        $("#" + t).get(0).pause(), $(".video-overlay.active").removeClass("active")
    }

    function i(t) {
        var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        t = t.replace(e, function (t, e, a, i) {
            return e + e + a + a + i + i
        });
        var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return a ? {
            r: parseInt(a[1], 16),
            g: parseInt(a[2], 16),
            b: parseInt(a[3], 16)
        } : null
    }

    function n(t, e) {
        $(".checkout-container[data-panel-id=" + e + "]").fadeTo("slow", 1, function () {
            $(this).removeClass("disabled")
        })
    }

    function o() {
        $(".mirror-values input:not([type=hidden])").each(function () {
            var t = $(this).attr("data-value");
            $(this).val(""), l()
        })
    }

    function s() {
        $(".mirror-values input:not([type=hidden])").each(function () {
            var t = $(this).attr("data-value");
            $(this).val(t), l()
        })
    }

    function r() {
        var t = $('meta[property="og:title"]').attr("content"),
            e = $('meta[property="og:description"]').attr("content"),
            a = $('meta[property="og:url"]').attr("content"),
            i = $('meta[property="og:image"]').attr("content");
        $(".social-link").click(function (n) {
            var o, s = $(this).attr("data-id"),
                r = s;
            "facebook" == r ? (o = "http://www.facebook.com/sharer.php?s=100&p[title]=" + encodeURIComponent(t) + "&p[summary]=" + encodeURIComponent(e) + "&p[url]=" + encodeURIComponent(a) + "&p[images][0]=" + encodeURIComponent(i), socialShareWidth = "626", socialShareHeight = "436") : "twitter" == r ? (o = "http://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(a), socialShareWidth = "626", socialShareHeight = "255") : "gplus" == r ? (o = "https://plus.google.com/share?url=" + encodeURIComponent(a), socialShareWidth = "626", socialShareHeight = "380") : "pinterest" == r && (o = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(a) + "&media=" + encodeURIComponent(i) + "&description=" + encodeURIComponent(e), socialShareWidth = "626", socialShareHeight = "380"), window.open(o, r, "menubar=no,toolbar=0,status=0,width=" + socialShareWidth + ",height=" + socialShareHeight), n.preventDefault()
        })
    }

    function l(t) {
        $(".form-validate").each(function (e) {
            var a = "#" + $(this).attr("id"),
                i = $(a + " .required").length,
                n = $(a + " .valid").length;
            w++, $(a + " .required").each(function () {
                var t = $(this).data("validate-option-message"),
                    e = $(this).attr("data-validate-message");
                if (null === e || void 0 === e) var e = "Required";
                var a = $(this).val();
                "" === a || "default" === a ? ($(this).removeClass("valid"), v === !0 && $(this).addClass("invalid"), $(this).next("span.alert").length > 0 || v === !0 && 0 != t && $(this).after('<span class="alert error">' + e + "</span>")) : ($(this).removeClass("invalid"), $(this).addClass("valid"), $(this).next("span.alert").remove())
            }), i === n && t === !0 && ($(".button.progress").addClass("active"), $(a).submit())
        })
    }
    $(window).load(function () {
        $(".preloader").fadeOut()
    });
    var d = 0,
        c = $("#large-slideshow").attr("data-timeout");
    $("#large-slideshow-slides").cycle({
        fx: "fade",
        timeout: c,
        speed: 750,
        pager: "#large-slideshow-pagination",
        next: "#large-slideshow .right",
        prev: "#large-slideshow .left",
        pagerAnchorBuilder: function (t, e) {
            return "#large-slideshow-pagination li:eq(" + t + ") a"
        }
    }), $(".slideshow").cycle({
        fx: "fade",
        timeout: 0,
        pager: ".slideshow-pagination",
        pagerAnchorBuilder: function (t, e) {
            return ".slideshow-pagination li:eq(" + t + ") a"
        }
    }), $(".slideshow-product").cycle({
        fx: "fade",
        timeout: 0,
        pager: ".slideshow-product-pagination",
        pagerAnchorBuilder: function (t, e) {
            return ".slideshow-product-pagination a:eq(" + t + ")"
        }
    }), t(window, ".panel", "0"), t(window, ".slides-pagination", "-200"), $(window).resize(function () {
        t(window, ".panel", "0"), t(window, ".slides-pagination", "-200")
    }), $(".image-view-switch").click(function (t) {
        var e = "#" + $(this).attr("data-id");
        $(".image-view.active").removeClass("active").fadeOut(500, function () {
            $(e).fadeIn(500).addClass("active")
        }), t.preventDefault()
    }), e("#image-view-model"), e("#image-view-360"), $(".video-link, .video-link-icon").click(function (t) {
        var e = $(this).attr("data-video-id");
        $("#video-id-" + e).addClass("active").fadeIn(300), t.preventDefault()
    }), $(".video-close").click(function (t) {
        a(), t.preventDefault()
    }), $(document).keyup(function (t) {
        27 == t.keyCode && a()
    }), $(".basket-toggle").click(function (t) {
        $(".basket-toggle").hasClass("active") ? ($(".basket-toggle").removeClass("active"), $("#basket-panel").fadeOut(300)) : ($(".basket-toggle").addClass("active"), $("#basket-panel").fadeIn(300)), t.preventDefault()
    }), $(".list-panels a").each(function (t) {
        var e = $(this).parent("li").parent(".list-panels").height();
        $(this).attr("data-height", e), $(this).click(function (t) {
            var e = $(this).attr("data-option");
            if ($(this).parent("li").parent(".list-panels").animate({
                opacity: "0"
            }, 300, function () {
                $(this).parent(".list-panels-wrap").addClass("active").animate({
                    height: "0px",
                    marginBottom: "20px"
                }, 300), $(this).siblings(".option-edit").fadeIn(300), $(this).siblings(".option-selected").text(e).fadeIn(300), $(this).next("input").val(e), l()
            }), $(this).hasClass("checkout-hide") && ($(".checkout-input").val("").removeClass("required"), $(".question-sub").hide()), $(this).hasClass("checkout-show") && ($(".checkout-input").addClass("required"), $(".question-sub").show()), $(this).hasClass("checkout-product")) {
                var a = $(this).data("product");
                $(".fullscreen-preloader").show(), $.ajax({
                    url: a,
                    cache: !1
                }).done(function (t) {
                    $("#sidebar-basket-bottom").html(t), $(".fullscreen-preloader").hide()
                })
            }
            t.preventDefault()
        })
    }), $(".option-edit").each(function (t) {
        var e = $(this).siblings(".list-panels").children("li").children("a").attr("data-height");
        $(this).click(function (t) {
            d -= 1, $(this).fadeOut(300, function () {
                e = parseInt($(this).siblings(".list-panels").children("li").children("a").attr("data-height")), panelHeightEdit = e + 40, $(this).siblings(".option-selected").fadeOut(300), $(this).next(".list-panels").animate({
                    opacity: "1"
                }, 300).parent(".list-panels-wrap").removeClass("active").animate({
                    height: panelHeightEdit + "px",
                    marginBottom: "35px"
                }, 300, function () {
                    $(this).css("height", "auto")
                }), $(this).siblings("input").val(""), l()
            }), t.preventDefault()
        })
    }), $(".swiper-slide").click(function (t) {
        var e = $(this).attr("data-colour");
        $(".panel-zoom-inner .bar").removeClass().addClass("bar").addClass(e), t.preventDefault()
    });
    var u = new Swiper(".swiper-container", {
        slidesPerView: 4
    });
    $(".slideshow-prev").on("click", function (t) {
        t.preventDefault(), u.swipePrev()
    }), $(".slideshow-next").on("click", function (t) {
        t.preventDefault(), u.swipeNext()
    }), $(".list-product .overlay").each(function () {
        var t = $(this).attr("data-colour"),
            e = "rgba(" + i(t).r + "," + i(t).g + "," + i(t).b + ",0.1)";
        $(this).css("background-color", e)
    }), $(".disable-cart").click(function (t) {
        var e = $(this).attr("data-message");
        alert(e), t.preventDefault()
    }), $(".checkout-flow").click(function (t) {
        function e(t, e, a) {
            if (e === a) {
                var i = $(t).attr("data-panel"),
                    o = i - 1;
                n(o, i);
                var s = "#" + $(".checkout-container[data-panel-id=" + i + "]").attr("id");
                $("html, body").animate({
                    scrollTop: $(s).offset().top - 20
                }, 750, "swing")
            }
        }
        $(this).hasClass("checkout-questions") ? (d++, e(this, d, 3)) : e(this, 1, 1), t.preventDefault()
    });
    var h = !0;
    s(), $("#address-switch").click(function () {
        h === !0 ? (h = !1, $("#address-hidden").slideDown(500), o()) : (h = !0, $("#address-hidden").slideUp(500), s())
    }), r(), $(".checkout-lightbox").fancybox({
        padding: 0,
        modal: !1,
        closeBtn: !1,
        helpers: {
            title: null,
            overlay: {
                css: {
                    background: "rgba(255,255,255,0.7)"
                }
            }
        }
    }), $(".lightbox-close").click(function (t) {
        $.fancybox.close(), t.preventDefault()
    }), $(".hidden-toggle").click(function () {
        var t = $(this).data("hidden-id"),
            e = $('[data-hidden-id="' + t + '"]'),
            a = $("#" + t);
        a.hasClass("active") ? a.removeClass("active").hide() : a.addClass("active").show()
    }), $(".file-upload").each(function () {
        var t = $(this).attr("id"),
            e = "https://" + window.location.hostname + "/assets/php/",
            a = "https://" + window.location.hostname + "/uploads/user/";
        $("#" + t).fileupload({
            url: e,
            dataType: "json",
            progressall: function (e, a) {
                var i = parseInt(a.loaded / a.total * 100, 10);
                $("#" + t).parent(".button-upload").siblings(".button-upload-results").text(i + "%")
            },
            done: function (e, i) {
                $.each(i.result.files, function (e, i) {
                    $("#" + t).parent(".button-upload").siblings(".button-upload-results").text(i.name), $("#hidden-" + t).val(a + i.name)
                })
            }
        })
    });
    var p = $(".list-product li.first").attr("data-count"),
        f = $(".list-product li.last").attr("data-count");
    $("#product-count-first").text(p), $("#product-count-last").text(f), $(".double-disable").click(function () {
        $(this).attr("disabled", "disabled"), $(this).parents("form").submit()
    });
    var v = !1,
        g, m = 500,
        w = 0;
    $(".required").change(function () {
        clearTimeout(g), g = setTimeout(l, m)
    }), $(".required").keyup(function () {
        clearTimeout(g), g = setTimeout(l, m)
    }), $(".form-validate").submit(function (t) {
        return v = !0, l(!0), !1;
        t.preventDefault()
    })
});