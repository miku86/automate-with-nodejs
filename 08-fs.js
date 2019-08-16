const fs = require('fs');

const FILE_NAME = '08-data.json';

const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync(FILE_NAME);
    const dataString = dataBuffer.toString();
    const dataJson = JSON.parse(dataString);
    console.log('Successfully loaded!');
    console.log(dataJson);
  } catch (error) {
    console.log(error);
    return [];
  }
};

loadData();

const saveData = (dataToSave) => {
  try {
    const stringifiedData = JSON.stringify(dataToSave);
    fs.writeFileSync(FILE_NAME, stringifiedData);
    console.log('Successfully saved!');
  } catch (error) {
    console.log(error);
  }
};

const dataToSave = [{ id: 3, name: 'Heidi' }];
saveData(dataToSave);
