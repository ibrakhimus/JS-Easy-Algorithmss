for (let i = 1; i <= 20; i = i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(${i} -> Frontend Simplified) 
    }
    if (i % 3 === 0) {
        console.log(${i} -> Frontend)
    }
    else if (i % 5 === 0) {
        console.log(${i} -> Simplified) 
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log(${i} -> Frontend Simplified) 
    }
    else {
        console.log(${i} -> ${i})
    }
}