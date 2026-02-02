const fs = require('fs');

const WILAYA_PATH = 'C:/xampp/htdocs/Wilaya-Of-Algeria/Wilaya_Of_Algeria.json';
const COMMUNE_PATH = 'C:/xampp/htdocs/Wilaya-Of-Algeria/Commune_Of_Algeria.json';

// Configuration: New Wilayas and their Communes + Expected Source Wilaya (Safety Check)
const CHANGES = [
    {
        id: "59", name: "Aflou", ar_name: "أفلو", source_wilaya_id: "3", // Laghouat
        communes: ["Aflou"]
    },
    {
        id: "60", name: "El Abiodh Sidi Cheikh", ar_name: "الأبيض سيدي الشيخ", source_wilaya_id: "32", // El Bayadh
        communes: ["El Abiodh Sidi Cheikh"]
    },
    {
        id: "61", name: "El Aricha", ar_name: "العريشة", source_wilaya_id: "13", // Tlemcen
        communes: ["El Aricha", "El Gor", "Sidi Djillali", "El Bouihi"] // DB has El Bouihi (space?) Checked: ElBouihi or El Bouihi?
    },
    {
        id: "62", name: "El Kantara", ar_name: "القنطرة", source_wilaya_id: "7", // Biskra
        communes: ["El Kantara", "Ain Zaatout", "Branis", "El Outaya", "Djemorah"]
    },
    {
        id: "63", name: "Barika", ar_name: "بريكة", source_wilaya_id: "5", // Batna
        // Mapped: Abdelkader Azil -> Metkaouak, Amdoukal -> M'doukel
        communes: ["Barika", "Bitam", "Metkaouak", "Tilatou", "Seggana", "Djezzar", "M'doukel", "Ouled Ammar"]
    },
    {
        id: "64", name: "Bou Saada", ar_name: "بوسعادة", source_wilaya_id: "28", // M'Sila
        communes: ["Bou Saada"]
    },
    {
        id: "65", name: "Bir El Ater", ar_name: "بئر العاتر", source_wilaya_id: "12", // Tebessa
        // El Ogla Elmalha -> El Ogla
        communes: ["Bir El Ater", "Negrine", "El Ogla", "Ferkane"]
    },
    {
        id: "66", name: "Ksar El Boukhari", ar_name: "قصر البخاري", source_wilaya_id: "26", // Medea
        communes: ["Ksar El Boukhari"]
    },
    {
        id: "67", name: "Ksar Chellala", ar_name: "قصر الشلالة", source_wilaya_id: "14", // Tiaret
        // Zmalet -> Zmalet El Emir Aek, Recheiga -> Rechaiga
        communes: ["Ksar Chellala", "Zmalet El Emir Aek", "Rechaiga", "Hamadia", "Serghine", "Bougara"]
    },
    {
        id: "68", name: "Ain Oussara", ar_name: "عين وسارة", source_wilaya_id: "17", // Djelfa
        // Oussara -> Oussera, Lahdab -> Lahdeb, Feka -> Fekka
        communes: ["Ain Oussera", "Birine", "Bouira Lahdeb", "El Khemis", "Sidi Ladjel", "Had Sahary", "Guernini", "Benhar", "Hassi Fedoul", "Ain Fekka"]
    },
    {
        id: "69", name: "Messaad", ar_name: "مسعد", source_wilaya_id: "17", // Djelfa
        communes: ["Messaad", "Sed Rahal"]
    }
];

function normalize(str) {
    if (!str) return '';
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

async function main() {
    console.log('Reading files...');
    const wilayas = JSON.parse(fs.readFileSync(WILAYA_PATH, 'utf8'));
    const communes = JSON.parse(fs.readFileSync(COMMUNE_PATH, 'utf8'));

    // Process updates
    for (const group of CHANGES) {
        console.log(`\nProcessing New Wilaya: ${group.name} (${group.id})`);

        let targetLat = "0";
        let targetLng = "0";

        for (const cName of group.communes) {
            const normName = normalize(cName);

            // Allow multiple matches if needed, but we filter by source valid IDs
            // Special fix for 'El Bouihi' vs 'Elbouihi' normalization

            const matches = communes.filter(c =>
                (normalize(c.name) === normName || normalize(c.name) === normName.replace(" ", "")) &&
                c.wilaya_id === group.source_wilaya_id
            );

            if (matches.length === 1) {
                const c = matches[0];
                console.log(`  -> Moving ${c.name} (ID ${c.id}) from ${c.wilaya_id} to ${group.id}`);
                c.wilaya_id = group.id;

                // Capture coords if it's the capital
                if (normalize(group.name) === normName) {
                    targetLat = c.latitude;
                    targetLng = c.longitude;
                }
            } else if (matches.length > 1) {
                console.warn(`  !! Multiple matches for ${cName}:`, matches.map(m => `${m.name} (${m.wilaya_id})`));
            } else {
                console.warn(`  ?? Not found: ${cName} (Expected in Wilaya ${group.source_wilaya_id})`);
            }
        }

        // Add/Update Wilaya
        const existingW = wilayas.find(w => w.id === group.id);
        const wEntry = {
            id: group.id,
            code: group.id,
            name: group.name,
            ar_name: group.ar_name,
            longitude: targetLng,
            latitude: targetLat
        };

        if (existingW) {
            Object.assign(existingW, wEntry);
        } else {
            wilayas.push(wEntry);
        }
    }

    // Sort
    wilayas.sort((a, b) => parseInt(a.id) - parseInt(b.id));

    // Save
    fs.writeFileSync(WILAYA_PATH, JSON.stringify(wilayas, null, 2));
    fs.writeFileSync(COMMUNE_PATH, JSON.stringify(communes, null, 2));
    console.log('\nSuccess! Files updated.');
}

main();
