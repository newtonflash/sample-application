/**
 * Finds unique items in a an array
 * @param {*} arr
 */
export const findUniqueArr = arr => {
    var a = arr.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) a.splice(j--, 1);
        }
    }
    return a;
};

export default {
    findUniqueArr
};
