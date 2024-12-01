console.log('Data.js loading...');

class WikiData {
    static pools = {
        cities: {
            US: [
                "Portland, Oregon", "Seattle, Washington",
                "Brooklyn, New York", "Austin, Texas",
                "Chicago, Illinois", "Los Angeles, California",
                "Philadelphia, Pennsylvania", "Oakland, California",
                "Minneapolis, Minnesota", "Providence, Rhode Island"
            ]
        },
        genres: {
            metal: [
                "Death Metal", "Black Metal", "Doom Metal",
                "Sludge Metal", "Post-Metal", "Grindcore"
            ],
            experimental: [
                "Noise Rock", "Industrial", "Drone",
                "Avant-garde Metal", "Progressive Metal"
            ]
        },
        labels: [
            "Relapse Records", "Southern Lord",
            "Profound Lore", "The Flenser",
            "Nuclear Blast", "Metal Blade",
            "Season of Mist", "Roadrunner Records"
        ],
        names: {
            first: [
                "John", "Mike", "David", "Chris", "James",
                "Sarah", "Emma", "Alex", "Sam", "Dan",
                "Steve", "Tom", "Paul", "Kevin", "Rob"
            ],
            last: [
                "Smith", "Johnson", "Williams", "Brown", "Jones",
                "Garcia", "Miller", "Davis", "Wilson", "Anderson",
                "Taylor", "Moore", "Jackson", "Martin", "Lee"
            ]
        },
        albumWords: [
            "Void", "Death", "Dark", "Light", "Shadow",
            "Eternal", "Chaos", "Spirit", "Blood", "Night",
            "Dawn", "Doom", "Storm", "Fire", "Abyss",
            "Ritual", "Curse", "Soul", "Demon", "Ghost"
        ]
    };
}