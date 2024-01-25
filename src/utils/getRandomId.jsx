const getRandomId = () => {
    const randomId = Math.random().toString().slice(2, 15);

    return randomId;
}

export default getRandomId;