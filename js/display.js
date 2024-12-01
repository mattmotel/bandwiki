console.log('Display.js loading...');

class WikiDisplay {
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
                </table>
            </div>
        `;
    }

    static renderIntro(bandData) {
        return `
            <p><b>${bandData.name}</b> is an American band from ${bandData.origin}. 
            The band plays a mixture of ${bandData.genres.join(' and ')}.</p>
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