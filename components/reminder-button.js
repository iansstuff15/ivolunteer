import RNCalendarReminders from 'react-native-calendar-reminders';

RNCalendarReminders.authorizationStatus()

RNCalendarReminders.authorizationStatus()
  .then(status => {
    // handle status
  })
  .catch(error => {
   // handle error
  });

  RNCalendarReminders.saveReminder('title', {
    location: 'location',
    notes: 'notes',
    startDate: '2016-10-01T09:45:00.000UTC'
  })
  .then(id => {
    // handle success
  })
  .catch(error => {
   // handle error
  });

  
  RNCalendarReminders.saveReminder('title', {
    location: 'location',
    notes: 'notes',
    startDate: '2016-10-01T09:45:00.000UTC',
    alarms: [{
      structuredLocation: {
        title: 'title',
        proximity: 'enter',
        radius: 500,
        coords: {
          latitude: 30.0000,
          longitude: 97.0000
        }
      }
    }]
  });