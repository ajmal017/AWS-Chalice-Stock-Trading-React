const options = {
    headers: new Headers({
        'content-type': 'application/json',
        'Accept': 'application/json'
    }),
    type: "get",
    dataType: "json"
};

// export default function fetchURL(url) {
const fetchURL = (url) => {
    console.log('URL being passed: ', url);
    return (
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log("Data: ", data)
                return data;
            })
    )
};

export default fetchURL;