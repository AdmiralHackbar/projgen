var adjective = ['distributed', 'open source', 'lean', 'disruptive', 'minimal', 'crowdfunded', 'flappy']
var noun = [
    'pet', 'news', 'hotel', 'travel', 'chat', 'dating', 'restaurant', 'food', 'cleaning', 'garden', 'picture',
    'cat picture', 'bitcoin', 'taxi', 'meme'];
var how = ['aggregator', 'provider', 'service', 'auction', 'app', 'game'];

function page(span) {
    var adjIndex = Math.floor(Math.random() * adjective.length);
    var nounIndex = Math.floor(Math.random() * noun.length);
    var howIndex = Math.floor(Math.random() * how.length);
    $('#' + span).text(adjective[adjIndex] + ' ' + noun[nounIndex] + ' ' + how[howIndex]);
};