import DS from 'ember-data';
import ENV from 'leviosa-website/config/environment'
export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: 'v1'
});
