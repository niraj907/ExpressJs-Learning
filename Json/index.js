import fs from 'fs';
const recipeApp =[
 {
    id : "1" ,
    img : './pizza.jpg',
    name : 'pizza',
    price : '200' ,
    description : 'It is a chilken pizza'
} ,
 {
    id : "2" ,
    img : './momo.jpg',
    name : 'momo',
    price : '250' ,
    description : 'It is a chilken momo'
} ,
];
const jsonData = JSON.stringify(recipeApp);
// console.log(jsonData);
// const objData = JSON.parse(jsonData);
// console.log(objData.img);

fs.writeFile('json1.json',jsonData,(error, data) => {
    if (error) {
        console.error('Error in a json data', error);
        return;
    }
    console.log('Json data written successfully');
});

fs.readFile('json1.json', 'utf8', function(error, data) {
    if (error) {
        console.error('error in a reading file', error);
        return;
    }
    console.log('Json data has been read successfully\n');
    const orgData = JSON.parse(data);
    console.log(orgData);
});
