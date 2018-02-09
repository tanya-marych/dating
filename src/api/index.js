const fetchAsync = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

export const fetchUsers = async () => {
    const url = 'http://5a7af63ffb057400128504d2.mockapi.io/users';
    let data = [];

    try {
        data = await fetchAsync(url);
    } catch (err) {
        console.warn(err.message);
    }

    return data;
};

