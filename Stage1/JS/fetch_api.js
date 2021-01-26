// TODO - Implement getCommentsByUserId() function
async function getCommentsByUserId(userId) {
    let userComments= [];
    return fetch('/api/comments')
    .then((res) => res.json())
    .then((res) => {
        for (comment of res){
            if (comment.userId === userId){
                userComments.push(comment.data);
            }
        }
        return userComments;
    })
}

// ----------- Don't modify -----------
const mockFetch = (url, responseData) => {
    const mockJsonPromise = Promise.resolve(responseData);
    const mockFetchPromise = (callUrl) => {
        if (url === callUrl) {
            return Promise.resolve({
                json: () => mockJsonPromise
             });
        } else {
            return Promise.reject('404: No such url')
        }
    }
    global.fetch = mockFetchPromise;
}

const successResponse = [
    {
        'userId': '1',
        "data": 'This looks slick!'
    },
    {
        'userId': '2',
        "data": 'I think this can be improved.'
    },
    {
        'userId': '1',
        "data": 'What kind of improvement?'
    }];
mockFetch('/api/comments', successResponse);

module.exports = getCommentsByUserId;
// ----------- Don't modify -----------

getCommentsByUserId("1").then((res) => {
  console.log(res);
});