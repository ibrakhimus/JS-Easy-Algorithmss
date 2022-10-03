let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr)