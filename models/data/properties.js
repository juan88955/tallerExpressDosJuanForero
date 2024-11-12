import "dotenv/config.js";
import "../../config/database.js";
import Property from "../Property.js";

let properties = [
    // Usuario 1 - 673278a98dac2f82f0d07ab7
    {
        name: "Beach House",
        type: "House",
        value: 250000,
        user: "673278a98dac2f82f0d07ab7"
    },
    {
        name: "Downtown Apartment",
        type: "Apartment",
        value: 150000,
        user: "673278a98dac2f82f0d07ab7"
    },
    {
        name: "Commercial Space",
        type: "Commercial",
        value: 500000,
        user: "673278a98dac2f82f0d07ab7"
    },
    {
        name: "Mountain Cabin",
        type: "House",
        value: 180000,
        user: "673278a98dac2f82f0d07ab7"
    },
    {
        name: "Land Plot",
        type: "Land",
        value: 100000,
        user: "673278a98dac2f82f0d07ab7"
    },
    // Usuario 2 - 673278a98dac2f82f0d07ab8
    {
        name: "City Apartment",
        type: "Apartment",
        value: 200000,
        user: "673278a98dac2f82f0d07ab8"
    },
    {
        name: "Suburban House",
        type: "House",
        value: 320000,
        user: "673278a98dac2f82f0d07ab8"
    },
    {
        name: "Office Building",
        type: "Commercial",
        value: 750000,
        user: "673278a98dac2f82f0d07ab8"
    },
    {
        name: "Vacation Home",
        type: "House",
        value: 280000,
        user: "673278a98dac2f82f0d07ab8"
    },
    {
        name: "Investment Property",
        type: "Commercial",
        value: 420000,
        user: "673278a98dac2f82f0d07ab8"
    },
    // Usuario 3 - 673278a98dac2f82f0d07ab9
    {
        name: "Lake House",
        type: "House",
        value: 380000,
        user: "673278a98dac2f82f0d07ab9"
    },
    {
        name: "Studio Apartment",
        type: "Apartment",
        value: 120000,
        user: "673278a98dac2f82f0d07ab9"
    },
    {
        name: "Retail Space",
        type: "Commercial",
        value: 600000,
        user: "673278a98dac2f82f0d07ab9"
    },
    {
        name: "Forest Cabin",
        type: "House",
        value: 150000,
        user: "673278a98dac2f82f0d07ab9"
    },
    {
        name: "Development Land",
        type: "Land",
        value: 200000,
        user: "673278a98dac2f82f0d07ab9"
    },
    // Usuario 4 - 673278a98dac2f82f0d07aba
    {
        name: "Luxury Condo",
        type: "Apartment",
        value: 450000,
        user: "673278a98dac2f82f0d07aba"
    },
    {
        name: "Family Home",
        type: "House",
        value: 350000,
        user: "673278a98dac2f82f0d07aba"
    },
    {
        name: "Shopping Center",
        type: "Commercial",
        value: 900000,
        user: "673278a98dac2f82f0d07aba"
    },
    {
        name: "Beachfront Property",
        type: "Land",
        value: 550000,
        user: "673278a98dac2f82f0d07aba"
    },
    {
        name: "Historic Building",
        type: "Commercial",
        value: 680000,
        user: "673278a98dac2f82f0d07aba"
    },
    // Usuario 5 - 673278a98dac2f82f0d07abb
    {
        name: "Modern Loft",
        type: "Apartment",
        value: 280000,
        user: "673278a98dac2f82f0d07abb"
    },
    {
        name: "Ranch House",
        type: "House",
        value: 420000,
        user: "673278a98dac2f82f0d07abb"
    },
    {
        name: "Industrial Space",
        type: "Commercial",
        value: 850000,
        user: "673278a98dac2f82f0d07abb"
    },
    {
        name: "Coastal Property",
        type: "Land",
        value: 300000,
        user: "673278a98dac2f82f0d07abb"
    },
    {
        name: "Investment Complex",
        type: "Commercial",
        value: 780000,
        user: "673278a98dac2f82f0d07abb"
    },
    // Usuario 6 - 673278a98dac2f82f0d07abc
    {
        name: "Urban Condo",
        type: "Apartment",
        value: 330000,
        user: "673278a98dac2f82f0d07abc"
    },
    {
        name: "Countryside Home",
        type: "House",
        value: 290000,
        user: "673278a98dac2f82f0d07abc"
    },
    {
        name: "Office Complex",
        type: "Commercial",
        value: 950000,
        user: "673278a98dac2f82f0d07abc"
    },
    {
        name: "Mountain Property",
        type: "Land",
        value: 180000,
        user: "673278a98dac2f82f0d07abc"
    },
    {
        name: "Retail Center",
        type: "Commercial",
        value: 820000,
        user: "673278a98dac2f82f0d07abc"
    },
    // Usuario 7 - 673278a98dac2f82f0d07abd
    {
        name: "Penthouse Suite",
        type: "Apartment",
        value: 580000,
        user: "673278a98dac2f82f0d07abd"
    },
    {
        name: "Colonial House",
        type: "House",
        value: 480000,
        user: "673278a98dac2f82f0d07abd"
    },
    {
        name: "Business Park",
        type: "Commercial",
        value: 1200000,
        user: "673278a98dac2f82f0d07abd"
    },
    {
        name: "Waterfront Land",
        type: "Land",
        value: 400000,
        user: "673278a98dac2f82f0d07abd"
    },
    {
        name: "Mixed-Use Building",
        type: "Commercial",
        value: 890000,
        user: "673278a98dac2f82f0d07abd"
    },
    // Usuario 8 - 673278a98dac2f82f0d07abe
    {
        name: "Garden Apartment",
        type: "Apartment",
        value: 220000,
        user: "673278a98dac2f82f0d07abe"
    },
    {
        name: "Victorian House",
        type: "House",
        value: 520000,
        user: "673278a98dac2f82f0d07abe"
    },
    {
        name: "Mall Space",
        type: "Commercial",
        value: 1500000,
        user: "673278a98dac2f82f0d07abe"
    },
    {
        name: "Agricultural Land",
        type: "Land",
        value: 250000,
        user: "673278a98dac2f82f0d07abe"
    },
    {
        name: "Hotel Property",
        type: "Commercial",
        value: 2000000,
        user: "673278a98dac2f82f0d07abe"
    },
    // Usuario 9 - 673278a98dac2f82f0d07abf
    {
        name: "Seaside Apartment",
        type: "Apartment",
        value: 390000,
        user: "673278a98dac2f82f0d07abf"
    },
    {
        name: "Mediterranean Villa",
        type: "House",
        value: 850000,
        user: "673278a98dac2f82f0d07abf"
    },
    {
        name: "Restaurant Space",
        type: "Commercial",
        value: 720000,
        user: "673278a98dac2f82f0d07abf"
    },
    {
        name: "Resort Land",
        type: "Land",
        value: 1100000,
        user: "673278a98dac2f82f0d07abf"
    },
    {
        name: "Entertainment Complex",
        type: "Commercial",
        value: 1800000,
        user: "673278a98dac2f82f0d07abf"
    },
    // Usuario 10 - 673278a98dac2f82f0d07ac0
    {
        name: "Skyline Apartment",
        type: "Apartment",
        value: 620000,
        user: "673278a98dac2f82f0d07ac0"
    },
    {
        name: "Smart Home",
        type: "House",
        value: 750000,
        user: "673278a98dac2f82f0d07ac0"
    },
    {
        name: "Technology Park",
        type: "Commercial",
        value: 2500000,
        user: "673278a98dac2f82f0d07ac0"
    },
    {
        name: "Prime Location Land",
        type: "Land",
        value: 1500000,
        user: "673278a98dac2f82f0d07ac0"
    },
    {
        name: "Innovation Center",
        type: "Commercial",
        value: 1900000,
        user: "673278a98dac2f82f0d07ac0"
    }
];

Property.insertMany(properties)