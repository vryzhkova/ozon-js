const getData = () => {
    return fetch(
        `https://test-7884a-default-rtdb.firebaseio.com/goods.json`
        )
        .then((response) => {
            return response.json()
        })
}

export default getData