
function TeamListViewComponent(options) {
  AppComponent.apply(this, arguments);
  this.template = '<div class="team-list-view">' +
                    '<div class="team-list-view__title">Выберите команду для оценки</div>' +
                    '<div class="team-list-items__container"></div>' +
                  '</div>';
  this.items = options.items || [];
}

extend(TeamListViewComponent, AppComponent);

TeamListViewComponent.prototype.renderTo = function(container) {
  AppComponent.prototype.renderTo.call(this, container);

  var itemsContainer = document.querySelector('.team-list-items__container');

  this.items.forEach(item => {
    var c = new TeamListItemViewComponent({
      item: item
    });
    c.renderTo(itemsContainer);
  })
};

/**
 * TeamListItemViewComponent
 * @param options
 * @constructor
 */
function TeamListItemViewComponent(options) {
  AppComponent.apply(this, arguments);
  this.template = '<div class="team-list-item-view">' +
                    '<div class="team-list-item-view__title">' + options.item.title +'</div>' +
                    '<div class="team-list-item-view__button">Оценить</div>' +
                  '</div>';
}

extend(TeamListItemViewComponent, AppComponent);
