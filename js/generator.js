console.log('Generator.js loading...');

class BandWiki {
    constructor() {
        console.log('BandWiki initialized');
    }

    generateBandData(bandName, params = {}) {
        const {
            genre = this.randomFrom(WikiData.pools.genres.metal),
            location = this.randomFrom(WikiData.pools.cities.US),
            guitar = null,
            bass = null,
            vocals = null,
            drums = null,
            album = null
        } = params;

        const startYear = 1990 + Math.floor(Math.random() * 33);
        
        // Use provided parameters or random values
        const mainGenres = params.genre ? 
            genre.split('_').join(' ').split(',') : 
            [
                this.randomFrom(WikiData.pools.genres.metal),
                this.randomFrom(WikiData.pools.genres.experimental)
            ];

        const origin = params.location ? 
            location.split('_').join(' ') : 
            this.randomFrom(WikiData.pools.cities.US);

        // Generate band history timeline
        const timeline = this.generateTimeline(startYear, bandName, origin);
        
        // Generate members list
        const members = {
            current: [],
            former: []
        };

        // Add specified members first
        if (vocals) members.current.push({ name: vocals.replace(/_/g, ' '), instrument: "vocals", years: `${startYear}–present` });
        if (guitar) members.current.push({ name: guitar.replace(/_/g, ' '), instrument: "guitar", years: `${startYear}–present` });
        if (bass) members.current.push({ name: bass.replace(/_/g, ' '), instrument: "bass", years: `${startYear}–present` });
        if (drums) members.current.push({ name: drums.replace(/_/g, ' '), instrument: "drums", years: `${startYear}–present` });

        // Check which instruments are missing and add random members for them
        const existingInstruments = members.current.map(m => m.instrument);
        
        if (!existingInstruments.includes('vocals')) {
            members.current.push({
                name: this.generatePersonName(),
                instrument: "vocals",
                years: `${startYear}–present`
            });
        }
        
        if (!existingInstruments.includes('guitar')) {
            members.current.push({
                name: this.generatePersonName(),
                instrument: "guitar",
                years: `${startYear}–present`
            });
        }
        
        if (!existingInstruments.includes('bass')) {
            members.current.push({
                name: this.generatePersonName(),
                instrument: "bass",
                years: `${startYear}–present`
            });
        }
        
        if (!existingInstruments.includes('drums')) {
            members.current.push({
                name: this.generatePersonName(),
                instrument: "drums",
                years: `${startYear}–present`
            });
        }

        // Generate some former members
        const formerCount = Math.floor(Math.random() * 3);
        for (let i = 0; i < formerCount; i++) {
            const joinYear = startYear + Math.floor(Math.random() * 3);
            const leaveYear = joinYear + Math.floor(Math.random() * 10) + 2;
            members.former.push({
                name: this.generatePersonName(),
                instrument: this.randomFrom(["vocals", "guitar", "bass", "drums"]),
                years: `${joinYear}–${leaveYear}`
            });
        }

        // Generate discography
        const discography = this.generateDiscography(startYear, album);

        return {
            name: bandName,
            origin: origin,
            genres: mainGenres,
            yearsActive: `${startYear}–present`,
            labels: [this.randomFrom(WikiData.pools.labels)],
            members: members,
            history: timeline,
            discography: discography
        };
    }

    generateTimeline(startYear, bandName, origin) {
        const events = [];
        let currentYear = startYear;
        
        // Formation year
        events.push({
            year: currentYear,
            event: `${bandName} was formed in ${currentYear} in ${origin} by ${this.generatePersonName()} (${this.randomFrom(["vocals", "guitar"])}) 
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

    generateDiscography(startYear, specificAlbum = null) {
        const albums = [];
        let currentYear = startYear;

        // Demo
        albums.push({
            year: currentYear,
            title: this.generateAlbumName(),
            type: "Demo",
            label: "Self-released",
            notes: "Limited cassette release"
        });

        // First album (either specified or random)
        currentYear += 1;
        albums.push({
            year: currentYear,
            title: specificAlbum ? specificAlbum.replace(/_/g, ' ') : this.generateAlbumName(),
            type: "Studio album",
            label: this.randomFrom(WikiData.pools.labels),
            notes: "First full-length release"
        });

        // Add 2-3 more random albums
        const additionalAlbums = 2 + Math.floor(Math.random() * 2);
        for (let i = 0; i < additionalAlbums; i++) {
            currentYear += 1 + Math.floor(Math.random() * 2);
            albums.push({
                year: currentYear,
                title: this.generateAlbumName(),
                type: "Studio album",
                label: this.randomFrom(WikiData.pools.labels),
                notes: this.randomFrom([
                    "Recorded live to tape",
                    "Produced by " + this.generatePersonName(),
                    "Featured guest appearances",
                    "Limited vinyl release"
                ])
            });
        }

        return albums;
    }
} 