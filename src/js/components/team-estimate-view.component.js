
function TeamEstimateView(options) {
  AppComponent.apply(this, arguments);
  this.team = options.team || {};
  this.template = '<div class="team-estimate-view">' +
                    '<div class="team-estimate-view__title"></div>' +
                  '</div>';
}

extend(TeamEstimateView, AppComponent);

TeamEstimateView.prototype.renderTo = function(container) {
  AppComponent.prototype.renderTo.call(this, container);
  this.setTitle(this.team.title);
};

TeamEstimateView.prototype.setTitle = function(title) {
  this.element.querySelector('.team-estimate-view__title').innerText = title;
};
