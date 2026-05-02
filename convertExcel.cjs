const XLSX = require('xlsx');
const fs = require('fs');

console.log('Script started');

const workbook = XLSX.readFile(
  './intern_assignment_support_pack_dev_only_v3.xlsx'
);

console.log('Workbook loaded');

const sheetNames = workbook.SheetNames;

console.log(sheetNames);

if (!fs.existsSync('./src/data')) {
  fs.mkdirSync('./src/data', { recursive: true });
}

sheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];

  const jsonData = XLSX.utils.sheet_to_json(sheet);

  fs.writeFileSync(
    `./src/data/${sheetName}.json`,
    JSON.stringify(jsonData, null, 2)
  );

  console.log(`${sheetName} converted`);
});

console.log('Done');