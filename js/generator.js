console.log('Generator.js loading...');

class BandWiki {
    constructor() {
        console.log('BandWiki initialized');
    }

    generateBandData(bandName) {
        const startYear = 1990 + Math.floor(Math.random() * 33); // 1990-2023
        const origin = this.randomFrom(WikiData.pools.cities.US);
        const mainGenres = [
            this.randomFrom(WikiData.pools.genres.metal),
            this.randomFrom(WikiData.pools.genres.experimental)
        ];

        // Generate band history timeline
        const timeline = this.generateTimeline(startYear, bandName);
        const members = this.generateMembers(startYear);

        return {
            name: bandName,
            origin: origin,
            genres: mainGenres,
            yearsActive: `${startYear}–present`,
            labels: [this.randomFrom(WikiData.pools.labels)],
            members: members,
            history: timeline
        };
    }

    generateTimeline(startYear, bandName) {
        const events = [];
        let currentYear = startYear;
        
        // Formation year
        events.push({
            year: currentYear,
            event: `${bandName} was formed in ${currentYear} in ${this.randomFrom(WikiData.pools.cities.US)} by ${this.generatePersonName()} (${this.randomFrom(["vocals", "guitar"])}) 
                    and ${this.generatePersonName()} (${this.randomFrom(["drums", "bass"])}). The two met at a local ${this.randomFrom(["hardcore", "metal", "punk"])} show and 
                    bonded over their shared interest in ${this.randomFrom(WikiData.pools.genres.experimental)}. They spent several months rehearsing in a ${this.randomFrom([
                        "converted garage", "basement", "storage unit", "abandoned warehouse"
                    ])}, developing their sound and writing their first songs. By the end of the year, they had recruited ${this.generatePersonName()} on 
                    ${this.randomFrom(["bass", "guitar", "electronics"])} and played their first show at ${this.randomFrom([
                        "a local DIY venue", "a house party", "a small club", "an art gallery"
                    ])}.`
        });

        // Demo/EP year
        currentYear += 1;
        events.push({
            year: currentYear,
            event: `The band spent early ${currentYear} recording their first demo, "${this.generateAlbumName()}", with local producer ${this.generatePersonName()} 
                    at ${this.randomFrom(["Basement", "Garage", "Downtown", "Analog"])} Studios. The four-track demo gained attention in the underground scene through 
                    ${this.randomFrom([
                        "word of mouth and tape trading",
                        "college radio play",
                        "online music forums",
                        "local zine coverage"
                    ])}. The band's early sound drew comparisons to ${this.randomFrom(WikiData.pools.genres.metal)} acts, but with a distinctive approach to 
                    ${this.randomFrom(["songwriting", "atmosphere", "dynamics", "production"])}. They spent the remainder of the year playing shows across the 
                    ${this.randomFrom(["East Coast", "West Coast", "Midwest", "Southwest"])}, building a dedicated following in the underground scene.`
        });

        // First album
        currentYear += 1;
        events.push({
            year: currentYear,
            event: `${currentYear} marked a significant milestone for ${bandName} with the release of their debut full-length album, "${this.generateAlbumName()}", 
                    through ${this.randomFrom(WikiData.pools.labels)}. The album was recorded over ${this.randomFrom(["two weeks", "a month", "six weeks"])} with 
                    producer ${this.generatePersonName()}, known for their work with various ${this.randomFrom(WikiData.pools.genres.metal)} bands. The record 
                    received positive reviews from ${this.randomFrom(["Pitchfork", "The Wire", "Decibel", "Metal Hammer"])}, who praised its 
                    "${this.randomFrom(["innovative approach", "raw energy", "technical proficiency", "atmospheric depth"])}." The band supported the release with 
                    a ${this.randomFrom(["nationwide", "European", "extensive", "headline"])} tour, including appearances at several notable festivals.`
        });

        // Mid-career developments
        for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
            currentYear += 1 + Math.floor(Math.random() * 2);
            events.push({
                year: currentYear,
                event: this.generateMidCareerEvent(bandName, currentYear)
            });
        }

        // Recent years
        events.push({
            year: 2023,
            event: `In 2023, ${bandName} continues to push boundaries in experimental music. The band ${this.randomFrom([
                `recently completed recording their upcoming album at ${this.randomFrom(["Electrical Audio", "GodCity", "Soma Studios"])}`,
                `announced plans for a comprehensive ${this.randomFrom(["European", "Asian", "North American"])} tour`,
                `collaborated with ${this.generatePersonName()} on a series of experimental recordings`,
                `began incorporating ${this.randomFrom(["modular synthesis", "field recordings", "algorithmic compositions"])} into their sound`
            ])}. Critics have noted the band's influence on a new generation of ${this.randomFrom(WikiData.pools.genres.experimental)} artists, 
            cementing their legacy in the experimental music scene.`
        });

        return events;
    }

    generateMidCareerEvent(bandName, year) {
        const events = [
            `${bandName} released their ${this.randomFrom(["sophomore", "third", "fourth"])} album, "${this.generateAlbumName()}", 
            which saw the band experimenting with ${this.randomFrom(["extended compositions", "electronic elements", "acoustic instruments", "unusual recording techniques"])}.
            The album was recorded at ${this.randomFrom(["Electrical Audio", "GodCity Studio", "Soma Electronic Music Studios"])} with producer ${this.generatePersonName()}.
            ${this.randomFrom([
                "The record marked a significant evolution in the band's sound",
                "Critics praised the album's ambitious scope",
                "The album became an underground classic",
                "The release expanded their audience significantly"
            ])}.`,

            `The band underwent lineup changes, with ${this.generatePersonName()} joining on ${this.randomFrom(["guitar", "bass", "drums", "electronics"])} 
            and ${this.generatePersonName()} departing. This transition period led to ${this.randomFrom([
                "a more experimental approach to composition",
                "an expanded sonic palette",
                "increased use of improvisation in their performances",
                "a renewed focus on studio experimentation"
            ])}.`,

            `${bandName} collaborated with ${this.generatePersonName()} of ${this.generateBandName()} on a series of ${this.randomFrom([
                "experimental recordings",
                "live performances",
                "split releases",
                "multimedia installations"
            ])}, pushing their sound in new directions.`
        ];

        return this.randomFrom(events);
    }

    generateBandName() {
        const words = WikiData.pools.albumWords;
        return this.randomFrom(words) + " " + this.randomFrom(words);
    }

    generateMembers(startYear) {
        const roles = [
            "vocals", "guitar", "bass", "drums",
            "electronics", "synthesizer", "noise"
        ];

        const currentCount = 3 + Math.floor(Math.random() * 3); // 3-5 members
        const formerCount = Math.floor(Math.random() * 5); // 0-4 former members

        return {
            current: Array(currentCount).fill().map(() => ({
                name: this.generatePersonName(),
                instrument: this.randomFrom(roles),
                years: `${startYear}–present`
            })),
            former: Array(formerCount).fill().map(() => {
                const joinYear = startYear + Math.floor(Math.random() * 3);
                const leaveYear = joinYear + Math.floor(Math.random() * 10) + 2;
                return {
                    name: this.generatePersonName(),
                    instrument: this.randomFrom(roles),
                    years: `${joinYear}–${leaveYear}`
                };
            })
        };
    }

    // Helper methods
    randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generatePersonName() {
        const firstNames = WikiData.pools.names.first;
        const lastNames = WikiData.pools.names.last;
        return `${this.randomFrom(firstNames)} ${this.randomFrom(lastNames)}`;
    }

    generateAlbumName() {
        const words = WikiData.pools.albumWords;
        const patterns = [
            () => `The ${this.randomFrom(words)} of ${this.randomFrom(words)}`,
            () => `${this.randomFrom(words)} ${this.randomFrom(words)}`,
            () => this.randomFrom(words),
            () => `${this.randomFrom(words)} of the ${this.randomFrom(words)}`
        ];
        return this.randomFrom(patterns)();
    }
} 