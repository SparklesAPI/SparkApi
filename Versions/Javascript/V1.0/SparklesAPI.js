/*

require(path/SparklesAPI.js)

SparklesAPI.

*/
const sparklesapi = {};
sparklesapi.autherize = () => {
    auth.setCredentials(tokens);
    console.log('success set creds');
    console.log('tokens',tokens)
    save('./tokens.json',JSON.stringify(tokens));
}
sparklesapi.findActiveChat = async () => {
    const response = await youtube.liveBroadcasts.list({
        auth,
        part: "snippet",
        broadcastStatus: 'active'
    });
    const latestChat = response.data.items[0];
    liveChatId = latestChat.snippet.liveChatId;
    console.log("Chat Id Found",liveChatId)
}
module.exports = sparklesapi;