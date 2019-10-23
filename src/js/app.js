
function App() {
  AppComponent.apply(this, arguments);
  this.template = '<div class="login-view__container"></div>' +
                  '<div class="team-list-view__container"></div>' +
                  '<div class="team-estimate-view__container"></div>';

  // контейнеры
  this.loginViewContainer = null;
  this.teamListViewContainer = null;
  this.teamEstimateViewContainer = null;

  // компоненты
  this.loginViewComponent = null;
  this.teamListViewComponent = null;
  this.teamEstimateViewComponent = null;
}

extend(App, AppComponent);

App.prototype.renderTo = function (container) {
  AppComponent.prototype.renderTo.call(this, container);

  // Создаем компонент входа
  this.loginViewContainer = document.querySelector('.login-view__container');
  this.loginViewComponent = new LoginViewComponent();
  this.loginViewComponent.renderTo(this.loginViewContainer);

  // Создаем компонент списка команд
  this.teamListViewContainer = document.querySelector('.team-list-view__container');
  this.teamListViewComponent = new TeamListViewComponent({
    items: [{
      id: 1,
      title: 'Соколики'
    }, {
      id: 2,
      title: 'Зайки'
    },{
      id: 3,
      title: 'Попрыгайки'
    },{
      id: 4,
      title: 'Покорители космоса'
    },{
      id: 1,
      title: 'Соколики'
    }, {
      id: 2,
      title: 'Зайки'
    },{
      id: 3,
      title: 'Попрыгайки'
    },{
      id: 4,
      title: 'Покорители космоса'
    },{
      id: 1,
      title: 'Соколики'
    }, {
      id: 2,
      title: 'Зайки'
    }, {
      id: 3,
      title: 'Попрыгайки'
    }, {
      id: 4,
      title: 'Покорители космоса'
    }]
  });
  this.teamListViewComponent.renderTo(this.teamListViewContainer);

  // Создаем компонент оценки выбранной команды
  this.teamEstimateViewContainer = document.querySelector('.team-estimate-view__container');
  this.teamEstimateViewComponent = new TeamEstimateView({
    team: {
      id: 4,
      title: 'Покорители космоса'
    }
  });
  this.teamEstimateViewComponent.renderTo(this.teamEstimateViewContainer);
};

// Создаем приложение
var app = new App();
app.renderTo(document.querySelector('.app__container'));

