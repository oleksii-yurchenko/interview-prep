    asyncPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());
    asyncUsers = fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
    asyncComments = fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json());

    Promise.all([asyncPosts, asyncUsers, asyncComments])
    .then(([posts, users, comments]) => {
        const usersData = {};

        //O(n)
        users.forEach(user => {
            usersData[user.id] = user.name;
        });

        const commentsCount = {};

        //O(m)
        comments.forEach(comment => {
            let postCount = commentsCount[comment.postId];
            commentsCount[comment.postId] = postCount === undefined ? 1 : postCount + 1;
        })

        //O(k)
       return posts.map(post => ({
        id: post.id,
        title: post.title,
        // author: users.find(user => user.id === post.userId).name,
        author: usersData[post.userId],
        // reviewsCount: comments.reduce((acc, comment) => comment.postId === post.id ? acc + 1 : acc, 0)
        reviewsCount: commentsCount[post.id]
       }))
    })
    .then(result => console.log(result));
