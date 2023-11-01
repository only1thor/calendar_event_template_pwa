document.getElementById('createEvent').addEventListener('click', function() {
  let today = new Date();
  let startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16);
  let endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19);
  console.log('Event Created: ', startDate, '-', endDate);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('Service Worker Registered', registration);
  }).catch(function(error) {
    console.log('Service Worker Registration Failed', error);
  });
} else {
  console.log('Service Worker Not Supported');
}

  // Here, you can add the logic to create the event in your calendar.
});

