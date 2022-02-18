export const chunk = (arr) => {
    const newArr = [];
    while (arr.length) newArr.push(arr.splice(0, 3));
    return newArr;
};