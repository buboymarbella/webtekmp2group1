jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function() {
    qty = $(this).prev('input');
    var currentVal = parseInt(qty.val());
    var newVal = (!isNaN(currentVal)) ? currentVal + 1 : 0;
    qty.val(newVal);
    });
    // This button will decrement the value till 0
    $('.qtyminus').click(function() {
    qty = $(this).next('input');
    var currentVal = parseInt(qty.val());
    var newVal = (!isNaN(currentVal) && currentVal > 0) ? currentVal - 1 : 0;
    qty.val(newVal);
    });
});

