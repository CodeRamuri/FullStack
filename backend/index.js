const express = require('express');

// Initializations

const app = express();

// Settings
app.set('port', 3000);

// Start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});
