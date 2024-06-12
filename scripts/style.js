$(document).ready(function() {

    $(".header__left__bars").click(function() {
        $(".content__all").toggleClass("open");
        $(".content__leftside").toggleClass("open");
        $(".content__leftside__sections").toggleClass("open");
        $(".content__leftside__sections__item").toggleClass("open");
        $(".content__leftside__me").toggleClass("open");
        $(".content__leftside__explore").toggleClass("open");
        $(".content__leftside__other").toggleClass("open");
    });

    $(".header__mid__opensearch").click(function() {
        toggleSearch(true);
    });

    $(".header__mid__closesearch").click(function() {
        toggleSearch(false);
    });

    function toggleSearch(open) {
        $(".header__left").toggleClass("close", open);
        $(".header__right").toggleClass("close", open);
        $(".header__mid__opensearch").toggleClass("close", open);
        $(".header__mid__closesearch").toggleClass("open", open);
        $(".header__mid__search").toggleClass("open", open);
    }

    $(".content__all__showshorts__btn").click(function() {
        $(".content__all__shorts").toggleClass("close");
        $(".content__all__showshorts img").toggleClass("close");
        $(".content__all__showshorts__btn").toggleClass("close");
        $(".content__all__showshorts__btn i").toggleClass("fa-x fa-rotate-right fa-flip-horizontal");
        $(".content__all__showshorts").toggleClass("open");
       if ($(".content__all__showshorts__name").text() === "Shorts") {
        $(".content__all__showshorts__name").text("Show Shorts");
        } else {
            $(".content__all__showshorts__name").text("Shorts");
        }
    });

});
