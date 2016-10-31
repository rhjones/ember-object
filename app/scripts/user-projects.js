import Ember from 'ember';

// user profile
// username
// array of patterns that are saved (ids?)
// projects: [{photo: 'url', notes: 'blah', dateStarted: date, dateCompleted: date, pattern: pattern_id, finished: true }]
// this class ignores complicated relationship b/w dateCompleted & finished properties

const User = Ember.Object.extend({
  projects: [],
  finishedProjects: Ember.computed.filterBy('projects', 'finished', true),
  finishedProjectDates: Ember.computed.mapBy('finishedProjects', 'dateCompleted'),
  mostRecentProject: Ember.computed.max('finishedProjectDates'),
});

// is there a way to get the most recent project w/o first computing a list of finished project dates?

let rhj = User.create({
  username: 'Rebekah',
  email: 'hello@rhjones.me',
  projects: [
    { dateStarted: new Date('2016-10-01'), dateCompleted: new Date('2016-10-15'), finished: true },
    { dateStarted: new Date('2016-10-01'), dateCompleted: new Date('2016-10-29'), finished: true },
    { dateStarted: new Date('2015-09-15'), finished: false }
  ]
});