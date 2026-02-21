export type CarType = "Economy" | "Sedan" | "SUV" | "Van";
export type Transmission = "Auto" | "Manual";
export type Fuel = "Gasoline" | "Hybrid" | "EV";
export type Badge = "Popular" | "New" | "Best value";

export type Car = {
    id: string;
    name: string;
    type: CarType;
    seats: number;
    transmission: Transmission;
    fuel: Fuel;
    pricePerDay: number;
    badge?: Badge;
};

export const CAR_TYPES: CarType[] = [
    "Economy",
    "Sedan",
    "SUV",
    "Van",
];

export const CARS: Car[] = [
    {
        id: "c1",
        name: "Toyota Yaris ATIV",
        type: "Sedan",
        seats: 5,
        transmission: "Auto",
        fuel: "Gasoline",
        pricePerDay: 990,
        badge: "Best value",
    },
    {
        id: "c2",
        name: "Honda City Hatchback",
        type: "Economy",
        seats: 5,
        transmission: "Auto",
        fuel: "Gasoline",
        pricePerDay: 1090,
        badge: "Popular",
    },
    {
        id: "c3",
        name: "Toyota Corolla Cross",
        type: "SUV",
        seats: 5,
        transmission: "Auto",
        fuel: "Hybrid",
        pricePerDay: 1790,
        badge: "Popular",
    },
    {
        id: "c4",
        name: "Hyundai IONIQ 5",
        type: "SUV",
        seats: 5,
        transmission: "Auto",
        fuel: "EV",
        pricePerDay: 2490,
        badge: "New",
    },
    {
        id: "c5",
        name: "Toyota Hiace",
        type: "Van",
        seats: 10,
        transmission: "Manual",
        fuel: "Gasoline",
        pricePerDay: 2290,
    },
];