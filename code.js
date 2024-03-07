function getBiggest(a, length) {
    let b = a.slice(0,length)
    return b.indexOf(Math.max(...b))
}
function flip(a, n) {
    if (n <= 1) return
    else if (n == 1) [a[0], a[1]] = [a[1], a[0]]
    else if (n >= a.length) for (let i = 0, j = a.length-1; i < j; i++, j--) [a[i], a[j]] = [a[j], a[i]]
    else for (let i = 0, j = n-1; i < j; i++, j--) [a[i], a[j]] = [a[j], a[i]]
}
function pancakeSort(arr, sortedLength = arr.length) {
    while (sortedLength > 0) {
        largeIndex = getBiggest(arr, sortedLength) 
        flip(arr, largeIndex+1) 
        flip(arr, sortedLength) 
        sortedLength-- 
    }
    return arr
}
