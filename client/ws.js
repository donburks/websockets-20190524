$(() => {
  const socket = new WebSocket("ws://localhost:8080");
  socket.onopen = () => {
    console.log("Made a new connection");
    socket.send("A new connection appears...");
  };

  socket.onmessage = (content) => {
    $("<p>").text(content.data).appendTo("#output");
  };

  socket.onclose = () => {
    alert("Socket is closed.");
  };

  $("#chatBox").on('keyup', function(evt) {
    if (evt.keyCode === 13) {
      //If user has pressed enter
      const message = $(this).val();
      socket.send(message);
      $(this).val('');
    }
  });
});
