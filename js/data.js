console.log('Data.js loading...');

class WikiData {
    static pools = {
        cities: {
            US: [
                "Portland, Oregon", "Seattle, Washington",
                "Brooklyn, New York", "Austin, Texas",
                "Chicago, Illinois", "Los Angeles, California"
            ]
        },
        genres: {
            metal: ["Death Metal", "Black Metal", "Doom Metal", "Sludge Metal"],
            experimental: ["Noise Rock", "Post-Metal", "Drone", "Industrial"]
        },
        labels: ["Relapse Records", "Southern Lord", "Profound Lore", "The Flenser"]
    };
}