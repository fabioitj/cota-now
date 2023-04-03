const buildUrl = (de, para) => {
    return `https://economia.awesomeapi.com.br/last/${de}-${para}`;
}

export { buildUrl };