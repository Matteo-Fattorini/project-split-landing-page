$(".split.left").mouseover( () => $(".container").addClass("left-active")
)
$(".split.right").mouseover( () => $(".container").addClass("right-active")
)
$(".split.left").mouseleave( () => $(".container").removeClass("left-active")
)
$(".split.right").mouseleave( () => $(".container").removeClass("right-active")
)


