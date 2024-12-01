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
        
        // Formation
        events.push({
            year: currentYear,
            event: `${bandName} was formed in ${currentYear} by ${this.generatePersonName()} and ${this.generatePersonName()} 
                    who met while attending local shows in the area.`
        });

        // Early years
        currentYear += 1 + Math.floor(Math.random() * 2);
        events.push({
            year: currentYear,
            event: `The band recorded their first demo, "${this.generateAlbumName()}", 
                    in a local studio with producer ${this.generatePersonName()}.`
        });

        // First album
        currentYear += 1 + Math.floor(Math.random() * 2);
        events.push({
            year: currentYear,
            event: `Their debut album "${this.generateAlbumName()}" was released through ${this.randomFrom(WikiData.pools.labels)}.`
        });

        // Mid-career events
        const midCareerEvents = [
            "underwent significant lineup changes",
            "expanded their sound by incorporating electronic elements",
            "collaborated with notable producer",
            "gained widespread recognition in the underground scene",
            "embarked on their first international tour",
            "signed to a larger record label"
        ];

        currentYear += 2 + Math.floor(Math.random() * 3);
        events.push({
            year: currentYear,
            event: `The band ${this.randomFrom(midCareerEvents)}.`
        });

        // Recent years
        events.push({
            year: 2023,
            event: `${bandName} continues to tour and record, having established themselves as a significant force 
                    in the experimental music scene.`
        });

        return events;
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