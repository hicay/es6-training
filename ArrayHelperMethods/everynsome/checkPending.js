var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;

inProgress = requests.some((req) => {
   return req.status == 'pending' ? true : false; 
});