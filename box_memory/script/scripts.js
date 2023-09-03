$(document).ready(function () {
    $(".box-content").click(function () {
        const box = $(this).closest('.box');
        const number = $(this);
        const hiddenContent = box.find('.hidden-content');

        box.click(function(){
            number.hide();
            hiddenContent.show();
        });

        box.dblclick(function(){
            number.show();
            hiddenContent.hide();
        });

    });
});
