function pattern1(n){
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let col = 1; col <= row; col++) {
            str += "*"
        }
        console.log(str)
    }
}

pattern1(5)
// Result
// *
// **
// ***
// ****


function pattern2(n){
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let col = 1; col <= n; col++) {
            str += "*"
        }
        console.log(str)
    }
}
console.log("plain patterns")
pattern2(4)
// result 
// ****
// ****
// ****
// ****

function pattern3(n){
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let col = 1; col <= n - row + 1; col++) {
            str += "*"
        }
        console.log(str)
    }
}
console.log("Diagonal patterns")
pattern3(5)



function pattern4(n){
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let col = 1; col <= row; col++) {
            str += col + " "
        }
        console.log(str)
    }
}
console.log("Diagonal column numbers")
pattern4(5)

function pattern5(n){
    for (let row = 0; row < 2 * n; row++) {
        let str = ""
        let totalColsInRow = row > n ? (2 * n) - row : row;
        for (let col = 0; col < totalColsInRow; col++) {
            str += "* "
        }
        console.log(str)
    }
}
console.log("Angle patterns")
pattern5(5)


function pattern6(n){
    for (let row = 0; row < 2 * n; row++) {
        let str = ""
        let totalColsInRow = row > n ? (2 * n) - row : row;
        let noOfSpaces = n - totalColsInRow;
        for (let j = 0; j < noOfSpaces; j++) {
            str += " " 
        }

        for (let col = 0; col < totalColsInRow; col++) {
            str += "* "
        }
        console.log(str)
    }
}
console.log("Diamond patterns")
pattern6(5)



function pattern7(n){
    for (let row = 1; row <= n; row++) {
        let str = ""
        for (let spaces = 0; spaces < n-row; spaces++) {
            str += "  "
        }
        for (let col = row; col >= 1; col--) {
            str += col + " "
        }
        for (let col = 2; col <= row; col++) {
            str += col + " "            
        }
        console.log(str)
    }
}
console.log("Diamond number patterns")
pattern7(5)

function pattern8(n){
    for (let row = 1; row < n; row++) {
        let str = ""
       
        console.log(str)
    }
}
console.log("Hallow square patterns")
pattern8(5)
