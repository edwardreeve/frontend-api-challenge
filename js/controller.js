
$(document).ready(function () {
  createFeed = function () {
    $.get('https://chitter-backend-api.herokuapp.com/peeps', function (response) {
      // console.log(wrapper)
      var myHTML = '';
      for (i = 0; i < response.length; i++) {
        myHTML += `<div class="card">
                  <div class="card-header">
                   ${response[i]['user']['handle']}
                  </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                   <p>${response[i]['body']}</p>
                   <footer class="blockquote-footer">${response[i]['created_at']}</footer>
                  </blockquote>
                </div>
                </div>`
      };
      $("#feed").html(myHTML);
    });
  };
  
  setTimeout(function () { createFeed(); }, 5000);

});

