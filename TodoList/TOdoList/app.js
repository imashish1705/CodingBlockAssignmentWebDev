
// Marking li as completed
$('#container ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
})

//  Moving up and down
$("#up").click(function(){
    var $current = $(this).closest('li')
    var $previous = $current.prev('li');
    if($previous.length !== 0){
      $current.insertBefore($previous);
    }
    return false;
  });
  
  $("#down").click(function(){
    var $current = $(this).closest('li')
    var $next = $current.next('li');
    if($next.length !== 0){
      $current.insertAfter($next);
    }
    return false;
  });

// removing li items from our todo
$('#container ul').on('click', 'a', function (event) {
    $(this).parent().fadeOut(function () {
        // console.log("FadeOut Completed");
        $(this).remove();
    });
   
    event.stopPropagation();  //to prevent event bubbling
})

// Adding new todo 
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        // console.log(event);
        let newTodoText = $(this).val();
        $('#container ul').append(`<li><a id="c" class="btn btn-danger" href="#">X</a>&nbsp;<a id="up" class="btn btn-info" href="#">&#8593</a>&nbsp;<a id="down" class="btn btn-warning" href="#">&#8595</a>&nbsp; ${newTodoText}</li>`);
        $(this).val("");
    } 
})

$('.btn btn-danger').click(function () {
    $('input').fadeToggle(500,function () {
        console.log("Faded");
    })
})



