function getData() {
  fetch('https://script.google.com/macros/s/AKfycbyr7aHb2WMmax-xRdckdFs6eynWNlqIw48Olj8cZWT9dov53RbpXuo13M-JjLNA64itMA/exec')
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    });
}
