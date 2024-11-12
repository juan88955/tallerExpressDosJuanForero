import "dotenv/config.js";
import "../../config/database.js";
import Property from "../Property.js";

let properties = [
    // Usuario 1 - 6733c0f144e4a1b4b1f8bba4
    {
        name: "Beach House",
        type: "House",
        value: 250000,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        name: "Downtown Apartment",
        type: "Apartment",
        value: 150000,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        name: "Commercial Space",
        type: "Commercial",
        value: 500000,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        name: "Mountain Cabin",
        type: "House",
        value: 180000,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        name: "Land Plot",
        type: "Land",
        value: 100000,
        user: "6733c0f144e4a1b4b1f8bba4"
    },

    // Usuario 2 - 6733c0f144e4a1b4b1f8bba5
    {
        name: "City Apartment",
        type: "Apartment",
        value: 200000,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        name: "Suburban House",
        type: "House",
        value: 320000,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        name: "Office Building",
        type: "Commercial",
        value: 750000,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        name: "Vacation Home",
        type: "House",
        value: 280000,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        name: "Investment Property",
        type: "Commercial",
        value: 420000,
        user: "6733c0f144e4a1b4b1f8bba5"
    },

    // Usuario 3 - 6733c0f144e4a1b4b1f8bba6
    {
        name: "Lake House",
        type: "House",
        value: 380000,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        name: "Studio Apartment",
        type: "Apartment",
        value: 120000,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        name: "Retail Space",
        type: "Commercial",
        value: 600000,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        name: "Forest Cabin",
        type: "House",
        value: 150000,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        name: "Development Land",
        type: "Land",
        value: 200000,
        user: "6733c0f144e4a1b4b1f8bba6"
    },

    // Usuario 4 - 6733c0f144e4a1b4b1f8bba7
    {
        name: "Luxury Condo",
        type: "Apartment",
        value: 450000,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        name: "Family Home",
        type: "House",
        value: 350000,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        name: "Shopping Center",
        type: "Commercial",
        value: 900000,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        name: "Beachfront Property",
        type: "Land",
        value: 550000,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        name: "Historic Building",
        type: "Commercial",
        value: 680000,
        user: "6733c0f144e4a1b4b1f8bba7"
    },

    // Usuario 5 - 6733c0f144e4a1b4b1f8bba8
    {
        name: "Modern Loft",
        type: "Apartment",
        value: 280000,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        name: "Ranch House",
        type: "House",
        value: 420000,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        name: "Industrial Space",
        type: "Commercial",
        value: 850000,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        name: "Coastal Property",
        type: "Land",
        value: 300000,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        name: "Investment Complex",
        type: "Commercial",
        value: 780000,
        user: "6733c0f144e4a1b4b1f8bba8"
    },

    // Usuario 6 - 6733c0f144e4a1b4b1f8bba9
    {
        name: "Urban Condo",
        type: "Apartment",
        value: 330000,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        name: "Countryside Home",
        type: "House",
        value: 290000,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        name: "Office Complex",
        type: "Commercial",
        value: 950000,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        name: "Mountain Property",
        type: "Land",
        value: 180000,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        name: "Retail Center",
        type: "Commercial",
        value: 820000,
        user: "6733c0f144e4a1b4b1f8bba9"
    },

    // Usuario 7 - 6733c0f144e4a1b4b1f8bbaa
    {
        name: "Penthouse Suite",
        type: "Apartment",
        value: 580000,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        name: "Colonial House",
        type: "House",
        value: 480000,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        name: "Business Park",
        type: "Commercial",
        value: 1200000,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        name: "Waterfront Land",
        type: "Land",
        value: 400000,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        name: "Mixed-Use Building",
        type: "Commercial",
        value: 890000,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },

    // Usuario 8 - 6733c0f144e4a1b4b1f8bbab
    {
        name: "Garden Apartment",
        type: "Apartment",
        value: 220000,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        name: "Victorian House",
        type: "House",
        value: 520000,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        name: "Mall Space",
        type: "Commercial",
        value: 1500000,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        name: "Agricultural Land",
        type: "Land",
        value: 250000,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        name: "Hotel Property",
        type: "Commercial",
        value: 2000000,
        user: "6733c0f144e4a1b4b1f8bbab"
    },

    // Usuario 9 - 6733c0f144e4a1b4b1f8bbac
    {
        name: "Seaside Apartment",
        type: "Apartment",
        value: 390000,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        name: "Mediterranean Villa",
        type: "House",
        value: 850000,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        name: "Restaurant Space",
        type: "Commercial",
        value: 720000,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        name: "Resort Land",
        type: "Land",
        value: 1100000,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        name: "Entertainment Complex",
        type: "Commercial",
        value: 1800000,
        user: "6733c0f144e4a1b4b1f8bbac"
    },

    // Usuario 10 - 6733c0f144e4a1b4b1f8bbad
    {
        name: "Skyline Apartment",
        type: "Apartment",
        value: 620000,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        name: "Smart Home",
        type: "House",
        value: 750000,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        name: "Technology Park",
        type: "Commercial",
        value: 2500000,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        name: "Prime Location Land",
        type: "Land",
        value: 1500000,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        name: "Innovation Center",
        type: "Commercial",
        value: 1900000,
        user: "6733c0f144e4a1b4b1f8bbad"
    }
];

async function insertProperties() {
    try {
        await Property.deleteMany({});
        const result = await Property.insertMany(properties);
        console.log(`${result.length} propiedades insertadas correctamente`);
        process.exit(0);
    } catch (error) {
        console.error('Error al insertar propiedades:', error);
        process.exit(1);
    }
}

insertProperties();