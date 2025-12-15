export const capitalize = (str) => {
    return str.chartAt(0).touppercase() + str.slice(1);
}

export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
