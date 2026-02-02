const fs = require('fs');
const wilayas = JSON.parse(fs.readFileSync('C:/xampp/htdocs/Wilaya-Of-Algeria/Wilaya_Of_Algeria.json', 'utf8'));
const communes = JSON.parse(fs.readFileSync('C:/xampp/htdocs/Wilaya-Of-Algeria/Commune_Of_Algeria.json', 'utf8'));

const locations = {};
const wilayaMap = {};

wilayas.forEach(w => {
    locations[w.name] = [];
    wilayaMap[w.id] = w.name;
});

communes.forEach(c => {
    const wilayaName = wilayaMap[c.wilaya_id];
    if (wilayaName) {
        // Avoid duplicates and keep it clean
        if (!locations[wilayaName].includes(c.name)) {
            locations[wilayaName].push(c.name);
        }
    }
});

// Sort communes for better UX
Object.keys(locations).forEach(w => {
    locations[w].sort();
});

const content = `export const ALGERIA_LOCATIONS: Record<string, string[]> = ${JSON.stringify(locations, null, 4)};`;
fs.writeFileSync('c:/xampp/htdocs/dattes-dz/lib/locations.ts', content);
console.log('Successfully updated locations.ts with 69 wilayas data.');
