export const getPosts = () => {
    return fetch("http://localhost:8088/Posts")
    .then(journal => journal.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
};

export const usePosts = () => {
    return parsedResponse;
}

export const post = (postObj) => {
    return fetch("http://localhost:8088/Posts", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        }
        body: JSON.stringify(postObj)
    })
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}