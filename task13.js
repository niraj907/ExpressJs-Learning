const fs = require('fs').promises;
const _ = require('lodash');
const moment = require('moment');
const axios = require('axios');
const { URL } = require('url');

const myURL = new URL('/foo', 'https://jsonplaceholder.typicode.com/users');

async function fetchDataFromUrl() {
    try {
        const response = await axios.get(myURL.href);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from URL:", error);
    }
}

async function processData() {
    try {
        const data = await fs.readFile("data.json", "utf8");
        const parsedData = JSON.parse(data);

        const sortedData = _.sortBy(parsedData, "age");
        const timeStampData = sortedData.map((item) => ({
            ...item,
            timeStamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
        }));

        const urlData = await fetchDataFromUrl();

        console.log("Processed data from file!", timeStampData);
        console.log("Data fetched from URL!", urlData);
    } catch (error) {
        console.error("Error processing data:", error);
    }
}

processData();
