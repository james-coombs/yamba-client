import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  // this.route('pages');
  // this.route('page', { path: '/pages/:page_id' });

  this.route('boards');
  this.route('board', { path: '/boards/:server_id' });
  this.route('board/edit', { path: 'boards/:server_id/edit' });
});

export default Router;
