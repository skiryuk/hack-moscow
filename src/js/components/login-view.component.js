
function LoginViewComponent(options) {
  AppComponent.apply(this, arguments);
  this.template = '<div class="login-view">' +
                      '<div class="login-view__logo">' +
                        '<img src="assets/svg/logo.svg">' +
                      '</div>' +
                      '<div class="login-view__form">' +
                        '<div class="login-view__user-name--label">Логин</div>' +
                        '<div class="login-view__user-name--field">' +
                          '<input type="text" placeholder="foo@bar.ru">' +
                        '</div>' +
                        '<div class="login-view__pass--label">Пароль</div>' +
                        '<div class="login-view__pass--field">' +
                          '<input type="password" placeholder="Пароль (не менее 6 символов)">' +
                        '</div>' +
                        '<div class="login-view__button">Войти</div>' +
                      '</div>' +
                  '</div>';
}

extend(LoginViewComponent, AppComponent);
