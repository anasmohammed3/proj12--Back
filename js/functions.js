

const fs = require("fs");



// Function to add a new record to the data file
const addRecord = (id, firstName, lastName, city, age) => {
    // Load existing data from the file
    const allData = loadData();

    // Check if the ID is duplicated
    const duplicated = allData.filter((record) => record.id === id);

    // If the ID is unique, add the new record
    if (duplicated.length === 0) {
        allData.push({
            id: id,
            firstName: firstName,
            lastName: lastName,
            city: city,
            age: age
        });

        // Save the updated data to the file
        saveData(allData);
    } 
    else {
        console.log("ERROR: DUPLICATED ID");
    }
};






// Function to load data from the file
const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString();
        return JSON.parse(dataJson);
    } catch {
        return [];
    }
};







// Function to save all data to the file
const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData);
    fs.writeFileSync("data10.json", allDataJson);
};










// Function to delete a record by ID
const deleteRecord = (id) => {
    const allData = loadData();

    // Filter out the record with the provided ID
    const dataToKeep = allData.filter((record) => record.id !== id);
    saveData(dataToKeep);

    console.log("Deleted the record");
};








// Function to read a record by ID
const readRecord = (id) => {
    const allData = loadData();

    // Find the record with the provided ID
    const record = allData.find((obj) => obj.id == id);

    if (record) {
        console.log(record.firstName);
    } else {
        console.log("Record not found for the provided ID");
    }
};









// Function to list all records
const listRecords = () => {
    const allData = loadData();

    allData.forEach((record) => {
        console.log(record.firstName, record.lastName,record.city, record.age);
    });
};








// Exporting functions for use in other modules
module.exports = {
    addRecord,
    deleteRecord,
    readRecord,
    listRecords
};















 


