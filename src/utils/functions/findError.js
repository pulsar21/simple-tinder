export default function findError(error) {
    const tree = Object.values(error);
    const arr = [];
    tree.forEach((element) => {
        if (Array.isArray(element)) {
            arr.push(element);
        } else {
            arr.push(findError(element));
        }
    });
    return JSON.stringify(arr.flat(Infinity));
}