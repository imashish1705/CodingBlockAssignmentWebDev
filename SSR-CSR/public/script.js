$(() => {
    function refreshTodo() {
        $('#list').empty();
        //sending AJAX GET Request
        $.get("/todo", (data) => {
          for(let todo of data) {
              $('#list').append(`<li>${todo}</li>`);
          }
        });
    }
    refreshTodo();


    $("#btn").click(() => {
        const todo = $("#inputBox").val()
        $.post("/todo", {todo}, (data)=> {
            console.log("Done");
            refreshTodo();
        });
        $("#inputBox").val("");
    })
})