console.log('Generator.js loading...');

class BandWiki {
    constructor() {
        console.log('BandWiki initialized');
    }

    generateBandData(bandName) {
        console.log('Generating data for:', bandName);
        
        // Random selection helper
        const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];
        
        // Generate basic data
        const origin = randomFrom(WikiData.pools.cities.US);
        const genres = [
            randomFrom(WikiData.pools.genres.metal),
            randomFrom(WikiData.pools.genres.experimental)
        ];
        
        return {
            name: bandName,
            origin: origin,
            genres: genres,
            yearsActive: "2019–present",
            labels: [randomFrom(WikiData.pools.labels)],
            members: {
                current: [
                    { name: "John Smith", instrument: "vocals", years: "2019–present" },
                    { name: "Mike Johnson", instrument: "guitar", years: "2019–present" }
                ]
            },
            history: {
                formation: `${bandName} was formed in 2019 in ${origin}.`,
                present: "The band continues to push boundaries in experimental music."
            }
        };
    }
} 