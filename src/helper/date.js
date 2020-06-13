export const formatDate = (date) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString([],options);
}

export const now = () => {
    return new Date();
}