console.log('Display.js loading...');

class WikiDisplay {
    static randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static renderPage(bandData) {
        const content = `
            <h1 class="firstHeading">${bandData.name}</h1>
            <div class="siteSub">From Wikipedia, the free encyclopedia</div>

            ${this.renderInfobox(bandData)}
            ${this.renderIntro(bandData)}
            ${this.renderHistory(bandData)}
            ${this.renderMembers(bandData)}
        `;

        document.getElementById('article-content').innerHTML = content;
        document.title = `${bandData.name} - Wikipedia`;
    }

    static renderInfobox(bandData) {
        return `
            <div class="infobox">
                <table>
                    <caption>${bandData.name}</caption>
                    <tr><th colspan="2">Background information</th></tr>
                    <tr>
                        <th>Origin</th>
                        <td>${bandData.origin}</td>
                    </tr>
                    <tr>
                        <th>Genres</th>
                        <td>${bandData.genres.join(', ')}</td>
                    </tr>
                    <tr>
                        <th>Years active</th>
                        <td>${bandData.yearsActive}</td>
                    </tr>
                    <tr>
                        <th>Labels</th>
                        <td>${bandData.labels.join(', ')}</td>
                    </tr>
                </table>
            </div>
        `;
    }

    static renderIntro(bandData) {
        const formationYear = bandData.yearsActive.split('–')[0];
        const yearPhrase = this.randomFrom([
            `formed in ${formationYear}`,
            `established in ${formationYear}`,
            `that emerged in ${formationYear}`,
            `founded in ${formationYear}`,
            `who first came together in ${formationYear}`
        ]);

        const genreDescription = this.randomFrom([
            `known for their unique blend of ${bandData.genres.join(' and ')}`,
            `whose sound combines elements of ${bandData.genres.join(' with ')}`,
            `that pioneered a distinctive approach to ${bandData.genres.join(' and ')}`,
            `recognized for their innovative fusion of ${bandData.genres.join(' and ')}`,
            `who developed a signature sound mixing ${bandData.genres.join(' with ')}`
        ]);

        const sceneContext = this.randomFrom([
            `emerging from the vibrant underground music scene of`,
            `originating in the experimental music community of`,
            `coming up through the diverse musical landscape of`,
            `rising from the fertile artistic environment of`,
            `developing within the innovative music scene of`
        ]);

        const influence = this.randomFrom([
            `The band has been noted for their ${this.randomFrom(['uncompromising', 'experimental', 'innovative', 'distinctive'])} approach to composition and performance`,
            `Their work has influenced a generation of ${this.randomFrom(['experimental', 'underground', 'avant-garde', 'progressive'])} musicians`,
            `They are considered pioneers in the evolution of modern ${bandData.genres[0].toLowerCase()} music`,
            `Critics have praised their ${this.randomFrom(['boundary-pushing', 'genre-defying', 'forward-thinking', 'unconventional'])} musical approach`
        ]);

        const currentStatus = this.randomFrom([
            `The band continues to push musical boundaries through their recordings and live performances`,
            `They remain active in both studio work and touring, maintaining their reputation for musical innovation`,
            `Their ongoing exploration of new sonic territories has maintained their status as leaders in experimental music`,
            `The group continues to evolve their sound while maintaining their distinctive artistic vision`
        ]);

        return `
            <p><b>${bandData.name}</b> is an American experimental music group ${yearPhrase}, ${genreDescription}. ${sceneContext} ${bandData.origin}, 
            the band quickly established themselves as a unique voice in the underground music scene. ${influence}. Over the years, they have released 
            material through notable labels such as ${bandData.labels.join(' and ')}, building a dedicated following in the experimental music community. 
            ${currentStatus}.</p>
        `;
    }

    static renderHistory(bandData) {
        return `
            <h2>History</h2>
            ${bandData.history.map(event => `
                <h3>${event.year}</h3>
                <p>${event.event}</p>
            `).join('')}
        `;
    }

    static renderMembers(bandData) {
        return `
            <h2>Members</h2>
            
            <h3>Current members</h3>
            <ul>
                ${bandData.members.current.map(member => `
                    <li>${member.name} – ${member.instrument} (${member.years})</li>
                `).join('')}
            </ul>

            ${bandData.members.former.length ? `
                <h3>Former members</h3>
                <ul>
                    ${bandData.members.former.map(member => `
                        <li>${member.name} – ${member.instrument} (${member.years})</li>
                    `).join('')}
                </ul>
            ` : ''}
        `;
    }
} 