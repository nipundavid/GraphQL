A standard babel setup
Starter project setup for upcoming crash courses

mutation{
createCourse(input:{courseName:"meta",price:15}){id}
}

query{
getCourse(id:"1a5eeb5d-fc12-48ae-b9c7-3d10c13f2d0f"){
id
courseName
}
}
