// properties.js
import "dotenv/config.js";
import "../../config/database.js";
import Property from "../Property.js";

let properties = [
    // Usuario 1 - 672eb0d8d72242f1065c07aa
    {
        name: "Beach House",
        type: "House",
        value: 250000,
        user: "672eb0d8d72242f1065c07aa"
    },
    {
        name: "Downtown Apartment",
        type: "Apartment",
        value: 150000,
        user: "672eb0d8d72242f1065c07aa"
    },
    {
        name: "Commercial Space",
        type: "Commercial",
        value: 500000,
        user: "672eb0d8d72242f1065c07aa"
    },
    {
        name: "Mountain Cabin",
        type: "House",
        value: 180000,
        user: "672eb0d8d72242f1065c07aa"
    },
    {
        name: "Land Plot",
        type: "Land",
        value: 100000,
        user: "672eb0d8d72242f1065c07aa"
    },
    // Usuario 2 - 672eb0d8d72242f1065c07ab
    {
        name: "City Apartment",
        type: "Apartment",
        value: 200000,
        user: "672eb0d8d72242f1065c07ab"
    },
    {
        name: "Suburban House",
        type: "House",
        value: 320000,
        user: "672eb0d8d72242f1065c07ab"
    },
    {
        name: "Office Building",
        type: "Commercial",
        value: 750000,
        user: "672eb0d8d72242f1065c07ab"
    },
    {
        name: "Vacation Home",
        type: "House",
        value: 280000,
        user: "672eb0d8d72242f1065c07ab"
    },
    {
        name: "Investment Property",
        type: "Commercial",
        value: 420000,
        user: "672eb0d8d72242f1065c07ab"
    },
    // Usuario 3 - 672eb0d8d72242f1065c07ac
    {
        name: "Lake House",
        type: "House",
        value: 380000,
        user: "672eb0d8d72242f1065c07ac"
    },
    {
        name: "Studio Apartment",
        type: "Apartment",
        value: 120000,
        user: "672eb0d8d72242f1065c07ac"
    },
    {
        name: "Retail Space",
        type: "Commercial",
        value: 600000,
        user: "672eb0d8d72242f1065c07ac"
    },
    {
        name: "Forest Cabin",
        type: "House",
        value: 150000,
        user: "672eb0d8d72242f1065c07ac"
    },
    {
        name: "Development Land",
        type: "Land",
        value: 200000,
        user: "672eb0d8d72242f1065c07ac"
    },
    // Usuario 4 - 672eb0d8d72242f1065c07ad
    {
        name: "Luxury Condo",
        type: "Apartment",
        value: 450000,
        user: "672eb0d8d72242f1065c07ad"
    },
    {
        name: "Family Home",
        type: "House",
        value: 350000,
        user: "672eb0d8d72242f1065c07ad"
    },
    {
        name: "Shopping Center",
        type: "Commercial",
        value: 900000,
        user: "672eb0d8d72242f1065c07ad"
    },
    {
        name: "Beachfront Property",
        type: "Land",
        value: 550000,
        user: "672eb0d8d72242f1065c07ad"
    },
    {
        name: "Historic Building",
        type: "Commercial",
        value: 680000,
        user: "672eb0d8d72242f1065c07ad"
    },
    // Usuario 5 - 672eb0d8d72242f1065c07ae
    {
        name: "Modern Loft",
        type: "Apartment",
        value: 280000,
        user: "672eb0d8d72242f1065c07ae"
    },
    {
        name: "Ranch House",
        type: "House",
        value: 420000,
        user: "672eb0d8d72242f1065c07ae"
    },
    {
        name: "Industrial Space",
        type: "Commercial",
        value: 850000,
        user: "672eb0d8d72242f1065c07ae"
    },
    {
        name: "Coastal Property",
        type: "Land",
        value: 300000,
        user: "672eb0d8d72242f1065c07ae"
    },
    {
        name: "Investment Complex",
        type: "Commercial",
        value: 780000,
        user: "672eb0d8d72242f1065c07ae"
    },
    // Usuario 6 - 672eb0d8d72242f1065c07af
    {
        name: "Urban Condo",
        type: "Apartment",
        value: 330000,
        user: "672eb0d8d72242f1065c07af"
    },
    {
        name: "Countryside Home",
        type: "House",
        value: 290000,
        user: "672eb0d8d72242f1065c07af"
    },
    {
        name: "Office Complex",
        type: "Commercial",
        value: 950000,
        user: "672eb0d8d72242f1065c07af"
    },
    {
        name: "Mountain Property",
        type: "Land",
        value: 180000,
        user: "672eb0d8d72242f1065c07af"
    },
    {
        name: "Retail Center",
        type: "Commercial",
        value: 820000,
        user: "672eb0d8d72242f1065c07af"
    },
    // Usuario 7 - 672eb0d8d72242f1065c07b0
    {
        name: "Penthouse Suite",
        type: "Apartment",
        value: 580000,
        user: "672eb0d8d72242f1065c07b0"
    },
    {
        name: "Colonial House",
        type: "House",
        value: 480000,
        user: "672eb0d8d72242f1065c07b0"
    },
    {
        name: "Business Park",
        type: "Commercial",
        value: 1200000,
        user: "672eb0d8d72242f1065c07b0"
    },
    {
        name: "Waterfront Land",
        type: "Land",
        value: 400000,
        user: "672eb0d8d72242f1065c07b0"
    },
    {
        name: "Mixed-Use Building",
        type: "Commercial",
        value: 890000,
        user: "672eb0d8d72242f1065c07b0"
    },
    // Usuario 8 - 672eb0d8d72242f1065c07b1
    {
        name: "Garden Apartment",
        type: "Apartment",
        value: 220000,
        user: "672eb0d8d72242f1065c07b1"
    },
    {
        name: "Victorian House",
        type: "House",
        value: 520000,
        user: "672eb0d8d72242f1065c07b1"
    },
    {
        name: "Mall Space",
        type: "Commercial",
        value: 1500000,
        user: "672eb0d8d72242f1065c07b1"
    },
    {
        name: "Agricultural Land",
        type: "Land",
        value: 250000,
        user: "672eb0d8d72242f1065c07b1"
    },
    {
        name: "Hotel Property",
        type: "Commercial",
        value: 2000000,
        user: "672eb0d8d72242f1065c07b1"
    },
    // Usuario 9 - 672eb0d8d72242f1065c07b2
    {
        name: "Seaside Apartment",
        type: "Apartment",
        value: 390000,
        user: "672eb0d8d72242f1065c07b2"
    },
    {
        name: "Mediterranean Villa",
        type: "House",
        value: 850000,
        user: "672eb0d8d72242f1065c07b2"
    },
    {
        name: "Restaurant Space",
        type: "Commercial",
        value: 720000,
        user: "672eb0d8d72242f1065c07b2"
    },
    {
        name: "Resort Land",
        type: "Land",
        value: 1100000,
        user: "672eb0d8d72242f1065c07b2"
    },
    {
        name: "Entertainment Complex",
        type: "Commercial",
        value: 1800000,
        user: "672eb0d8d72242f1065c07b2"
    },
    // Usuario 10 - 672eb0d8d72242f1065c07b3
    {
        name: "Skyline Apartment",
        type: "Apartment",
        value: 620000,
        user: "672eb0d8d72242f1065c07b3"
    },
    {
        name: "Smart Home",
        type: "House",
        value: 750000,
        user: "672eb0d8d72242f1065c07b3"
    },
    {
        name: "Technology Park",
        type: "Commercial",
        value: 2500000,
        user: "672eb0d8d72242f1065c07b3"
    },
    {
        name: "Prime Location Land",
        type: "Land",
        value: 1500000,
        user: "672eb0d8d72242f1065c07b3"
    },
    {
        name: "Innovation Center",
        type: "Commercial",
        value: 1900000,
        user: "672eb0d8d72242f1065c07b3"
    }
];

Property.insertMany(properties)