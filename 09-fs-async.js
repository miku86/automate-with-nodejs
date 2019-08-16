const fs = require('fs');

const FILE_NAME = '08-data.json';

const loadData = () => {
  fs.readFile(FILE_NAME, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      const dataString = data.toString();
      const dataJson = JSON.parse(dataString);
      console.log('Successfully loaded!');
      console.log(dataJson);
    }
  });
};

const saveData = (dataToSave) => {
  const stringifiedData = JSON.stringify(dataToSave);
  fs.writeFile(FILE_NAME, stringifiedData, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Success!');
    }
  });
};

const dataToSave = [{ id: 3, name: 'Heidi' }];
saveData(dataToSave);
