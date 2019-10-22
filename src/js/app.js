
var loginViewContainer = document.querySelector('.login-view-container');

var loginComponent = new LoginViewComponent({
  template: '<div class="login-view">' +
              '<div class="login-view__title"></div>' +
              '<div class="login-view__form">' +
                '<div class="login-view__user-name--label">User</div>' +
                '<div class="login-view__user-name--field">' +
                  '<input type="text">' +
                '</div>' +
                '<div class="login-view__pass--label">Password</div>' +
                '<div class="login-view__pass--field">' +
                  '<input type="password">' +
                '</div>' +
              '</div>' +
            '</div>'
});
loginComponent.renderTo(loginViewContainer);
