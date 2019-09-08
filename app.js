getTriangleType = (x, y, z) => {
    if (x + y < z || x + z < y || y + z < x) console.log(`The triangle does not exist!`)
    else if (x === y && x === z) console.log(`The triangle is equilateral!`)
    else if (x === y || x === z || y === z) console.log(`The triangle is isosceles!`)
    else console.log(`The triangle is scalene!`)
}

getTriangleType(1, 10, 12)
getTriangleType(3, 3, 3)
getTriangleType(3, 3, 5)
getTriangleType(3, 5, 7)