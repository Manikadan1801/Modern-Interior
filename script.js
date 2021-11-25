var element = true;
window.onload=function(){
    var new1;
    function filterCategory(category) {
        var activeFilter;
        if (activeFilter != category) {
          $(".products-row3 .products-col").removeClass("active");
          // filter elements
          $(".products-row3 .products-col")
            .filter('[data-ctg="' + category + '"]')
            .addClass("active");
          // reset active filter
          activeFilter = category;
        }
  }
  $(".products-col").addClass("active");
  $("ul.aviable-products li").click(function () {
      if ($(this).attr("value") == "ctg-all") {          
      $(".products-row3 .products-col").addClass("active");
      activeFilter = "ctg-all";
      } 
      else {
      filterCategory($(this).attr("value"));
      } 
     new1 = $("ul.aviable-products li").removeClass("sect");
     $(this).addClass("sect");
  });

  $('#bar').click(function(){
    if(element === true ){
      $('#nav').animate({height:'320px'});
      element = false;
    }
    else{
      $('#nav').animate({height:'50px'});
      element = true;
    }
    });
    $('#bar').click(function(){
      console.log(element);
    });
  
}

