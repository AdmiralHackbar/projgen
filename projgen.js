var adjective = ['distributed', 'open source', 'lean', 'disruptive', 'minimal']

var noun = [
    'pet', 'news', 'hotel', 'travel', 'chat', 'dating', 'restaurant', 'food', 'cleaning', 'garden', 'picture',
    'cat picture', 'bitcoin'];
var how = ['aggregator', 'provider', 'service', 'auction', 'app'];

function page(span) {
    var adjIndex = Math.floor(Math.random() * adjective.length);
    var nounIndex = Math.floor(Math.random() * noun.length);
    var howIndex = Math.floor(Math.random() * how.length);
    $('#' + span).text(adjective[adjIndex] + ' ' + noun[nounIndex] + ' ' + how[howIndex]);
};