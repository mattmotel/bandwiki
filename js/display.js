console.log('Display.js loading...');

class WikiDisplay {
    static randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static getRandomBandName() {
        const genres = [
            { first: metalBand1, second: metalBand2 },
            { first: powerMetalBand1, second: powerMetalBand2 },
            { first: blackMetalBand1, second: blackMetalBand2 },
            { first: grindBand1, second: grindBand2 },
            { first: stonerBand1, second: stonerBand2 },
            { first: punkBand1, second: punkBand2 }
        ];

        const connectors = ['of', 'from', 'in', 'under', 'Beyond', 'and', 'Against', 'Beneath', 'upon', 'through', 'Within', 'Before', 'After', 'Behind', 'Beside', 'Between', 'Among', 'Without', 'Above', 'Below'];
        const prefixes = ['The', 'Ancient', 'Eternal', 'Ultimate', 'Supreme', 'Primitive', 'Celestial', 'Divine', 'Heretical', 'Toxic', 'Fatal'];
        
        // Helper to check if word is a suffix
        const isSuffix = (word) => {
            return [
                'tana',      // Montana
                'consin',    // Wisconsin
                'vada',      // Nevada
                'achusetts', // Massachusetts
                'orado',     // Colorado
                'ifornia',   // California
                'abama',     // Alabama (adding this!)
                'onya'       // Sonya
            ].includes(word);
        };

        // New helper to get a non-suffix word
        const getNonSuffixWord = (wordArray) => {
            let word;
            do {
                word = this.randomFrom(wordArray).trim();
            } while (isSuffix(word));
            return word;
        };

        const patterns = [
            // Basic two-word or suffix (only place suffixes should be used)
            () => {
                const genre = this.randomFrom(genres);
                const word1 = this.randomFrom(genre.first).trim();
                const word2 = this.randomFrom(genre.second).trim();
                if (isSuffix(word2)) {
                    return `${word1}${word2}`;
                }
                return `${word1}_${word2}`;
            },
            // With 'The' (NEVER use suffixes)
            () => {
                const genre = this.randomFrom(genres);
                return `The_${getNonSuffixWord(genre.first)}_${getNonSuffixWord(genre.second)}`;
            },
            // Three-word with connector (NEVER use suffixes)
            () => {
                const genre = this.randomFrom(genres);
                return `${getNonSuffixWord(genre.first)}_${this.randomFrom(connectors)}_${getNonSuffixWord(genre.second)}`;
            },
            // Double first words
            () => {
                const genre = this.randomFrom(genres);
                return `${this.randomFrom(genre.first).trim()}_${this.randomFrom(genre.first).trim()}_${this.randomFrom(genre.second).trim()}`;
            },
            // Mix genres
            () => {
                const genre1 = this.randomFrom(genres);
                const genre2 = this.randomFrom(genres);
                const word1 = this.randomFrom(genre1.first).trim();
                const word2 = this.randomFrom(genre2.second).trim();
                return isSuffix(word2) ? `${word1}${word2}` : `${word1}_${word2}`;
            },
            // Double second words
            () => {
                const genre = this.randomFrom(genres);
                return `${this.randomFrom(genre.first).trim()}_${this.randomFrom(genre.second).trim()}_${this.randomFrom(genre.second).trim()}`;
            },
            // Prefix with connector
            () => {
                const genre = this.randomFrom(genres);
                return `${this.randomFrom(prefixes).trim()}_${this.randomFrom(genre.first).trim()}_${this.randomFrom(connectors).trim()}_${this.randomFrom(genre.second).trim()}`;
            }
        ];

        // Clean up any potential double underscores or spaces
        return this.randomFrom(patterns)()
            .replace(/\s+/g, '_')     // Replace any spaces with underscores
            .replace(/__+/g, '_')     // Replace multiple underscores with single
            .replace(/^_|_$/g, '');   // Remove leading/trailing underscores
    }

    static renderPage(bandData) {
        const articleContent = document.getElementById('article-content');
        
        // If no band data, show Wikipedia-style homepage
        if (!bandData) {
            articleContent.innerHTML = `
                <h1>The Hard Archives</h1>
                <div class="hatnote">From Hardpedia, the hard encyclopedia</div>
                
                <div class="wiki-notice">
                    Welcome to The Hard Archives, the definitive compendium of heavy and extreme music knowledge, documenting everything from classic hard rock to the most intense metal, punk, hardcore, and experimental sounds.
                </div>

               

                <div class="toc" role="navigation" aria-labelledby="mw-toc-heading">
                    <div class="toctitle"><h2 id="mw-toc-heading">Contents</h2></div>
                    <ul>
                        <li class="toclevel-1 tocsection-1">
                            <a href="#section-Overview"><span class="tocnumber">1</span> <span class="toctext">Overview</span></a>
                        </li>
                        <li class="toclevel-1 tocsection-2">
                            <a href="#section-History"><span class="tocnumber">2</span> <span class="toctext">History</span></a>
                        </li>
                        <li class="toclevel-1 tocsection-3">
                            <a href="#section-Genres"><span class="tocnumber">3</span> <span class="toctext">Genres</span></a>
                        </li>
                        <li class="toclevel-1 tocsection-4">
                            <a href="#section-Cultural_Impact"><span class="tocnumber">4</span> <span class="toctext">Cultural Impact</span></a>
                        </li>
                    </ul>
                </div>

                <h2 id="section-Overview"><span class="mw-headline">Overview</span></h2>
                <p>The Hard Archives stands as the world's leading repository of heavy music knowledge, meticulously documenting 
                   the evolution and cultural impact of hard rock, metal, punk and related genres through the decades. Since its founding, 
                   it has grown into the ultimate reference for heavy music, covering everything from early proto-metal and psychedelic rock 
                   to modern extreme metal and experimental sounds.</p>

                <h2 id="section-History"><span class="mw-headline">History</span></h2>
                <p>What started as a grassroots effort by dedicated music archivists has blossomed into a comprehensive digital library 
                   chronicling heavy music's development. The archives preserve the legacy of groundbreaking artists and movements - from the 
                   thunderous beginnings of hard rock through the evolution of metal, punk, and beyond - documenting the sounds and stories 
                   that shaped heavy music history.</p>

                <h2 id="section-Genres"><span class="mw-headline">Genres</span></h2>
                <p>Our extensive coverage encompasses the full spectrum of heavy music, including classic hard rock, heavy metal, punk rock, 
                   hardcore, grunge, stoner rock, doom metal, sludge, noise rock, post-metal, and the countless subgenres and hybrid styles 
                   that continue to emerge and expand the boundaries of heavy music.</p>

                <h2 id="section-Cultural_Impact"><span class="mw-headline">Cultural Impact</span></h2>
                <p>Beyond the music itself, The Hard Archives preserves the rich cultural heritage of heavy music - its visual aesthetics, 
                   philosophical themes, regional scenes, and social significance. From the DIY spirit of garage rock to the theatrical 
                   elements of shock rock, from politically-charged punk to mystical doom metal, we maintain detailed records of how these 
                   genres have influenced and reflected the broader culture.
                </p>
                 <div class="featured-bands">
                    <h2>Featured Bands</h2>
                    <ul>
                        ${Array.from({ length: 30 }, () => {
                            const bandName = this.getRandomBandName();
                            return `<li><a href="#${bandName}">${bandName.replace(/_/g, ' ')}</a></li>`;
                        }).join('\n')}
                    </ul>
                </div>`
        } else {
            const content = `
                <h1 class="firstHeading">${bandData.name}</h1>
                <div class="siteSub">From Hardpedia, the hard encyclopedia</div>

                ${this.renderInfobox(bandData)}
                ${this.renderIntro(bandData)}
                ${this.renderHistory(bandData)}
                ${this.renderMembers(bandData)}
                ${this.renderDiscography(bandData)}
            `;

            articleContent.innerHTML = content;
            document.title = `${bandData.name} - Hard Archives`;
        }
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