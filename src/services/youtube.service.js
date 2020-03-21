const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const gapiClient = new Promise((resolve, reject) => {
    window.gapi.load('client', () => window.gapi.client.init({apiKey})
    .then(() => resolve(window.gapi.client))
    .catch(reject))
});

export const fetchYoutubeLivestreamId = (channelId, live) => {
    return gapiClient.then((client) => {
        console.log(client)
        return client.request({
            path: '/youtube/v3/search',
            params: {
                part: 'id',
                channelId,
                type: 'video',
                eventType: live ? 'live' : 'upcoming'
            }
        })
    }).then(response => response.result.items[0])
    .then(activity => activity.id.videoId)
}
