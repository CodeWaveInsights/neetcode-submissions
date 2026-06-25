class Twitter {
    constructor() {
    this.time = 0;
    this.tweets = new Map();
    this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
       if (!this.tweets.has(userId)) {
        this.tweets.set(userId, []);
    }

    this.tweets
        .get(userId)
        .push([this.time++, tweetId]);

    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
         const users = new Set();

    users.add(userId);

    if (this.followMap.has(userId)) {
        for (const followee of
            this.followMap.get(userId)) {

            users.add(followee);
        }
    }

    const feed = [];

    for (const user of users) {

        const tweets =
            this.tweets.get(user) || [];

        for (const tweet of tweets) {
            feed.push(tweet);
        }
    }

    feed.sort((a,b)=>b[0]-a[0]);

    return feed
        .slice(0,10)
        .map(tweet => tweet[1]);
    }


    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
         if (!this.followMap.has(followerId)) {
        this.followMap.set(
            followerId,
            new Set()
        );
    }

    this.followMap
        .get(followerId)
        .add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
         if (this.followMap.has(followerId)) {
        this.followMap
            .get(followerId)
            .delete(followeeId);
    }
    }
}
