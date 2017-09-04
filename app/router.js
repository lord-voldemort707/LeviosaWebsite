import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('teams', function() {
    this.route('show', {path: '/:code'});
  });
});

export default Router;
