import "dotenv/config.js";
import "../../config/database.js";
import Register from "../Register.js";

let registers = [
    // Usuario 1 - 6733c0f144e4a1b4b1f8bba4
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent Payment",
        value: 1500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 2500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance Payment",
        value: 800,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance Fee",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utility Bill",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security Service",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning Service",
        value: 100,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-20'),
        description: "Garden Maintenance",
        value: 250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Service",
        value: 180,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-01'),
        description: "Property Insurance",
        value: 900,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet Service",
        value: 80,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Bill",
        value: 120,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity Bill",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Bill",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-25'),
        description: "Property Management Fee",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repair Service",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Cleaning",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Service",
        value: 350,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking Fee",
        value: 100,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba4"
    },

    // Usuario 2 - 6733c0f144e4a1b4b1f8bba5
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 2000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 3000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 900,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 350,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 100,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control Service",
        value: 250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba5"
    },

    // Usuario 3 - 6733c0f144e4a1b4b1f8bba6
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 2200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 3200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 950,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 450,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 280,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 180,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 380,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 220,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1100,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 120,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 170,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 220,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 520,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 220,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control Service",
        value: 270,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 170,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba6"
    },

    // Usuario 4 - 6733c0f144e4a1b4b1f8bba7
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 2400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 3400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-01-10'),
        description: "Postal Service",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 240,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 140,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 190,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 240,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 540,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 240,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 290,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 190,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba7"
    },

    // Usuario 5 - 6733c0f144e4a1b4b1f8bba8
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 2600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 3600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1050,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 510,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 220,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 260,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 160,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 210,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 260,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 460,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 560,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 260,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 310,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 460,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 210,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba8"
    },

    // Usuario 6 - 6733c0f144e4a1b4b1f8bba9
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 2800,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 3800,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1100,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 540,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 380,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 240,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 280,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 180,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 230,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 380,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 280,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 480,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 580,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 280,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 330,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 480,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 230,
        active: true,
        user: "6733c0f144e4a1b4b1f8bba9"
    },

    // Usuario 7 - 6733c0f144e4a1b4b1f8bbaa
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 3000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 4000,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1150,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 570,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 260,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 460,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 350,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbaa"
    },

    // Usuario 8 - 6733c0f144e4a1b4b1f8bbab
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 3200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 4200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1200,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 380,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 280,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 480,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 220,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 270,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 520,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 620,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 370,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 520,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 270,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbab"
    },

    // Usuario 9 - 6733c0f144e4a1b4b1f8bbac
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 3400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 4400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1250,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 630,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 400,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 500,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1700,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 240,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 290,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 440,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 540,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 640,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 340,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 390,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 540,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 290,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbac"
    },

    // Usuario 10 - 6733c0f144e4a1b4b1f8bbad
    {
        date: new Date('2024-01-15'),
        description: "Monthly Rent",
        value: 3600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-01-20'),
        description: "Property Tax",
        value: 4600,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-01-25'),
        description: "Insurance",
        value: 1300,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-01'),
        description: "Maintenance",
        value: 660,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-05'),
        description: "Utilities",
        value: 420,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-10'),
        description: "Security",
        value: 460,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-15'),
        description: "Cleaning",
        value: 320,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-20'),
        description: "Landscaping",
        value: 520,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-02-25'),
        description: "Pool Maintenance",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-01'),
        description: "Insurance Premium",
        value: 1800,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-05'),
        description: "Internet",
        value: 260,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-10'),
        description: "Water Service",
        value: 310,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-15'),
        description: "Electricity",
        value: 460,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-20'),
        description: "Gas Service",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-25'),
        description: "Management Fee",
        value: 560,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-03-30'),
        description: "Repairs",
        value: 660,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-04-01'),
        description: "Window Service",
        value: 360,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-04-05'),
        description: "Pest Control",
        value: 410,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-04-10'),
        description: "HVAC Maintenance",
        value: 560,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    },
    {
        date: new Date('2024-04-15'),
        description: "Parking",
        value: 310,
        active: true,
        user: "6733c0f144e4a1b4b1f8bbad"
    }
];

async function insertRegisters() {
    try {
        await Register.deleteMany({});
        const result = await Register.insertMany(registers);
        console.log(`${result.length} registros insertados correctamente`);
        process.exit(0);
    } catch (error) {
        console.error('Error al insertar registros:', error);
        process.exit(1);
    }
}

insertRegisters();