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
            ${this.renderDiscography(bandData)}
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
        const currentMembers = bandData.members?.current || [];
        const formerMembers = bandData.members?.former || [];

        return `
            <h2>Members</h2>
            
            <h3>Current members</h3>
            <ul>
                ${currentMembers.map(member => `
                    <li>${member.name} – ${member.instrument} (${member.years})</li>
                `).join('')}
            </ul>

            ${formerMembers.length ? `
                <h3>Former members</h3>
                <ul>
                    ${formerMembers.map(member => `
                        <li>${member.name} – ${member.instrument} (${member.years})</li>
                    `).join('')}
                </ul>
            ` : ''}
        `;
    }

    static renderDiscography(bandData) {
        if (!bandData.discography) return '';
        
        return `
            <h2>
                <span class="mw-headline" id="Discography">Discography</span>
                <span class="mw-editsection">
                    <span class="mw-editsection-bracket">[</span>
                    <a href="#" title="Edit section: Discography">edit</a>
                    <span class="mw-editsection-bracket">]</span>
                </span>
            </h2>
            <table class="wikitable">
                <tr>
                    <th>Year</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Label</th>
                    <th>Notes</th>
                </tr>
                ${bandData.discography.map(album => `
                    <tr>
                        <td>${album.year}</td>
                        <td><i>${album.title}</i></td>
                        <td>${album.type}</td>
                        <td>${album.label}</td>
                        <td>${album.notes || ''}</td>
                    </tr>
                `).join('')}
            </table>
        `;
    }

    static renderTableOfContents(sections) {
        return `
            <div class="toc" role="navigation" aria-labelledby="mw-toc-heading">
                <div class="toctitle"><h2 id="mw-toc-heading">Contents</h2></div>
                <ul>
                    <li class="toclevel-1 tocsection-1"><a href="#History"><span class="tocnumber">1</span> <span class="toctext">History</span></a></li>
                    <li class="toclevel-1 tocsection-2"><a href="#Musical_style"><span class="tocnumber">2</span> <span class="toctext">Musical style</span></a></li>
                    <li class="toclevel-1 tocsection-3"><a href="#Members"><span class="tocnumber">3</span> <span class="toctext">Members</span></a></li>
                    <li class="toclevel-1 tocsection-4"><a href="#Discography"><span class="tocnumber">4</span> <span class="toctext">Discography</span></a></li>
                    <li class="toclevel-1 tocsection-5"><a href="#References"><span class="tocnumber">5</span> <span class="toctext">References</span></a></li>
                </ul>
            </div>
        `;
    }

    static renderCategories(bandData) {
        return `
            <div id="catlinks" class="catlinks">
                <div class="mw-normal-catlinks">
                    <a href="#">Categories</a>: 
                    <ul>
                        <li><a href="#">${bandData.startYear}s music groups</a></li>
                        <li><a href="#">American ${bandData.genres[0].toLowerCase()} musical groups</a></li>
                        <li><a href="#">Musical groups from ${bandData.origin}</a></li>
                        <li><a href="#">Musical groups established in ${bandData.startYear}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }

    static renderReferences(bandData) {
        return `
            <h2><span class="mw-headline" id="References">References</span></h2>
            <div class="reflist columns references-column-width" style="column-width: 30em;">
                <ol class="references">
                    <li id="cite_note-1"><span class="mw-cite-backlink"><a href="#">^</a></span> <span class="reference-text">"${bandData.name} | Biography & History | AllMusic". AllMusic.</span></li>
                    <li id="cite_note-2"><span class="mw-cite-backlink"><a href="#">^</a></span> <span class="reference-text">"${bandData.name} Interview". The Wire. ${bandData.startYear + 2}.</span></li>
                    <li id="cite_note-3"><span class="mw-cite-backlink"><a href="#">^</a></span> <span class="reference-text">"Reviews: ${bandData.name}". Pitchfork.</span></li>
                </ol>
            </div>
        `;
    }

    static renderSectionHeading(title, id) {
        return `
            <h2>
                <span class="mw-headline" id="${id}">${title}</span>
                <span class="mw-editsection">
                    <span class="mw-editsection-bracket">[</span>
                    <a href="#" title="Edit section: ${title}">edit</a>
                    <span class="mw-editsection-bracket">]</span>
                </span>
            </h2>
        `;
    }
} 