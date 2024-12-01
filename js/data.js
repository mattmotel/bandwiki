console.log('Data.js loading...');

class WikiData {
    static pools = {
        cities: {
            US: [
                "Portland, Oregon", "Seattle, Washington",
                "Brooklyn, New York", "Austin, Texas",
                "Chicago, Illinois", "Los Angeles, California",
                "Philadelphia, Pennsylvania", "Oakland, California",
                "Minneapolis, Minnesota", "Providence, Rhode Island",
                "Worcester, Massachusetts", "Richmond, Virginia",
                "Olympia, Washington", "Baltimore, Maryland",
                "New Haven, Connecticut", "Cleveland, Ohio",
                "Detroit, Michigan", "Pittsburgh, Pennsylvania",
                "Burlington, Vermont", "Asheville, North Carolina"
            ]
        },
        genres: {
            metal: [
                "Death Metal", "Black Metal", "Doom Metal",
                "Sludge Metal", "Post-Metal", "Grindcore",
                "Blackened Crust", "Funeral Doom",
                "Atmospheric Black Metal", "Death-Doom",
                "Technical Death Metal", "Melodic Black Metal",
                "Blackened Death Metal", "Progressive Metal",
                "Stoner Metal", "Drone Metal"
            ],
            experimental: [
                "Noise Rock", "Industrial", "Drone",
                "Avant-garde Metal", "Progressive Metal",
                "Post-Hardcore", "Math Rock",
                "Experimental Rock", "Power Electronics",
                "Dark Ambient", "Harsh Noise",
                "No Wave", "Free Jazz Metal",
                "Industrial Noise", "Musique Concrète"
            ]
        },
        labels: [
            "Relapse Records", "Southern Lord", "Profound Lore", "The Flenser",
            "Neurot Recordings", "Hydra Head", "Ipecac Recordings", "Thrill Jockey",
            "Three One G", "Deathwish Inc.", "20 Buck Spin", "Translation Loss",
            "Sargent House", "Sacred Bones", "Gilead Media", "Throatruiner Records",
            "Roadburn Records", "Hypertension Records", "Torture Garden Records",
            "Nuclear War Now!", "Iron Lung Records", "Gravity Records",
            "Alternative Tentacles", "Load Records", "Hospital Productions",
            "Handmade Birds", "Crucial Blast"
        ],
        names: {
            first: [
                "John", "Mike", "David", "Chris", "James",
                "Sarah", "Emma", "Alex", "Sam", "Dan",
                "Steve", "Tom", "Paul", "Kevin", "Rob",
                "Erik", "Justin", "Ryan", "Matt", "Josh",
                "Brandon", "Seth", "Aaron", "Blake", "Scott",
                "Dylan", "Keith", "Greg", "Trevor", "Zack",
                "Nathan", "Jason", "Brian", "Kyle", "Eric"
            ],
            last: [
                "Smith", "Johnson", "Williams", "Brown", "Jones",
                "Garcia", "Miller", "Davis", "Wilson", "Anderson",
                "Taylor", "Moore", "Jackson", "Martin", "Lee",
                "Thompson", "White", "Harris", "Clark", "Lewis",
                "Young", "Hall", "Walker", "Allen", "King",
                "Wright", "Hill", "Scott", "Green", "Adams",
                "Baker", "Nelson", "Carter", "Mitchell", "Roberts"
            ]
        },
        albumWords: [
            "Void", "Death", "Dark", "Light", "Shadow", "Eternal", "Chaos",
            "Spirit", "Blood", "Night", "Dawn", "Doom", "Storm", "Fire",
            "Abyss", "Ritual", "Curse", "Soul", "Demon", "Ghost",
            "Throne", "Winter", "Grave", "Hell", "Moon", "Sun", "Witch",
            "Crypt", "Tomb", "Ash", "Dust", "Plague", "Rot", "Ruin",
            "Wraith", "Specter", "Mist", "Fog", "Frost"
        ],
        albumTitles: [
            "The Suffering Will Never End",
            "Everything Is Going to Be Fine",
            "Existence Is Pain",
            "Welcome to Hell (Again)",
            "This Time It's Personal",
            "The Darkness Within the Darkness",
            "Songs About Suffering",
            "More Songs About Suffering",
            "Even More Songs About Suffering",
            "My Life Is a Void (And So Can Yours)",
            "Trapped in the Darkness of My Own Making",
            "Everything Was Better When It Was Worse",
            "The Crushing Weight of Existence",
            "Screaming Into the Void (Volume IV)",
            "This Album Is Heavier Than Your Life Choices",
            "We Recorded This in a Real Cave",
            "Actually Recorded in Steve's Basement",
            "The Basement Sessions (Not Steve's)",
            "Recorded During Mercury Retrograde",
            "Three Hours of Feedback (Deluxe Edition)",
            "Songs Written During a Power Outage",
            "It's Not a Phase, It's a Lifestyle",
            "Blacker Than the Blackest Black",
            "We Sold Our Souls for Minimum Wage",
            "The Scene Is Dead (And So Are We)",
            "This Was Expensive to Record",
            "Our Drummer Quit During Recording",
            "Recorded in One Take (After 47 Attempts)",
            "The Production Is Supposed to Sound Like That",
            "Everyone in the Band Is Now in Therapy"
        ]
    };
}