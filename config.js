exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = process.env.DEBUG; 
exports.ENVIRONMENT = 'sandbox'; 
// exports.CALLBACK_URL = 'http://localhost:3001';
exports.CALLBACK_URL = 'https://papertrail-lucas-sfdc.herokuapp.com/'; 
exports.PUSH_TOPIC = '/topic/LogEntries';

exports.CLIENT_ID = '3MVG98dostKihXN5YKaqAhSPq24v0T1s16aDkghym3T.1OuMoeExPJupHwEWF5UyoUa2XBCenV6_87LjNKC8n';
exports.CLIENT_SECRET = '8430B9145F67506ABB8F1008BE2889C1D3CDC0B882BF9A65AEF1354CA39E7121';
exports.USERNAME = 'lucas.calegari@canadadrives.ca.se2lucas';
exports.PASSWORD = 'dtt.170293'; 