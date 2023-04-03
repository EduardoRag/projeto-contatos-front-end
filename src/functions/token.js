const setItem = (key, value) => {
    return localStorage.setItem(key, value);
}

const getItem = (key) => {
    return localStorage.getItem(key);
}

const clear = () => {
    return localStorage.clear();
}

module.exports = {
    setItem,
    getItem,
    clear
}