function aritGeo(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0)
            return 0;

         if (arr.length === 0)
            return 0;
        let a = arr[1], r = a/arr[0], i;
        for (i = 2; i < arr.length; ++i) {
            if ((a *= r) == arr[i]){
                return "Geometric";
            }
        }
        a = arr[1], d = a - arr[0], i;
        for (i = 2; i < arr.length; ++i) {
            if ((a += d) == arr[i]){
                return "Arithmetic";
            }
        }
        return -1
    }
    return "Only Arrays are allowed";
}

console.log(aritGeo([2,4,8,16]))