$(document).ready(function() {

    $(".header__left__bars , .content__leftside__mobile__bars , .blackscreen").click(function() {
        $(".content__leftside").toggleClass("open");
        $(".content__leftside__sections").toggleClass("open");
        $(".content__leftside__sections__item").toggleClass("open");
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

});
