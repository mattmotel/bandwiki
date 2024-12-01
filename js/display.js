console.log('Display.js loading...');

class WikiDisplay {
    static renderPage(bandData) {
        console.log('Rendering:', bandData);
        
        const content = `
            <h1>${bandData.name}</h1>
            <div>From Wikipedia, the free encyclopedia</div>

            <div style="float: right; width: 300px; border: 1px solid #ccc; padding: 10px; margin: 0 0 20px 20px;">
                <h3>${bandData.name}</h3>
                <p><strong>Origin:</strong> ${bandData.origin}</p>
                <p><strong>Genres:</strong> ${bandData.genres.join(', ')}</p>
                <p><strong>Years active:</strong> ${bandData.yearsActive}</p>
                <p><strong>Labels:</strong> ${bandData.labels.join(', ')}</p>
            </div>

            <p><strong>${bandData.name}</strong> is an American band from ${bandData.origin}.</p>
            
            <h2>History</h2>
            <p>${bandData.history.formation}</p>
            <p>${bandData.history.present}</p>

            <h2>Members</h2>
            <h3>Current members</h3>
            <ul>
                ${bandData.members.current.map(member => 
                    `<li>${member.name} – ${member.instrument} (${member.years})</li>`
                ).join('')}
            </ul>
        `;

        document.getElementById('article-content').innerHTML = content;
        document.title = `${bandData.name} - Wikipedia`;
    }
} 