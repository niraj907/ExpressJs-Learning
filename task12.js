// Importing required modules
const fs = require('fs').promises;
const _ = require('lodash');
const moment = require('moment');

async function processData() { // we create the async function processData
    try {
        const data = await fs.readFile("data.json", "utf8"); // we have create the readfile of datajson an converting to the  encoding the variable to the store in the data 
        const parsedData = JSON.parse(data); // convert the json file string 
        console.log(parsedData); //



        const sortedData = _.sortBy(parsedData, "age"); // sort the data by age
        console.log(sortedData); //
        const timeStampData = sortedData.map((item) => ({ // goes throught the each item in the sortdata array
            ...item, // create a new item in the sortdata array
            timeStamp: moment().format("MMMM Do YYYY, h:mm:ss a"), // adding new timeStamp property with 
        }));

        console.log("Processed data!", timeStampData);
    } catch (error) {
        console.error("Error processing data:", error);
    }
}

processData();
