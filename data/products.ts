import { v4 as uuidv4 } from 'uuid';

export interface ProductCardProps {
    title: string;
    origin: string;
    price: number;
    currency: 'RUB' | 'USD' | 'EUR';
    imageUrl: string;
    id?: string;
}

export const products: ProductCardProps[] = [
    {
        id: uuidv4(),
        title: "Товар 1",
        origin: "Россия",
        price: 34900,
        currency: "RUB",
        imageUrl: "https://picsum.photos/300/200?random=1"
    },
    {
        id: uuidv4(),
        title: "Товар 2",
        origin: "USA",
        price: 19999,
        currency: "USD",
        imageUrl: "https://picsum.photos/300/200?random=2"
    },
    {
        id: uuidv4(),
        title: "Товар 3",
        origin: "Germany",
        price: 24990,
        currency: "EUR",
        imageUrl: "https://picsum.photos/300/200?random=3"
    },
    {
        id: uuidv4(),
        title: "Товар 4",
        origin: "Италия",
        price: 49900,
        currency: "RUB",
        imageUrl: "https://picsum.photos/300/200?random=4"
    },
    {
        id: uuidv4(),
        title: "Товар 5",
        origin: "UK",
        price: 35900,
        currency: "USD",
        imageUrl: "https://picsum.photos/300/200?random=5"
    },
    {
        id: uuidv4(),
        title: "Товар 6",
        origin: "Франция",
        price: 42900,
        currency: "EUR",
        imageUrl: "https://picsum.photos/300/200?random=6"
    },
    {
        id: uuidv4(),
        title: "Товар 7",
        origin: "Япония",
        price: 55900,
        currency: "RUB",
        imageUrl: "https://picsum.photos/300/200?random=7"
    },
    {
        id: uuidv4(),
        title: "Товар 8",
        origin: "Китай",
        price: 69900,
        currency: "USD",
        imageUrl: "https://picsum.photos/300/200?random=8"
    },
    {
        id: uuidv4(),
        title: "Товар 9",
        origin: "Австралия",
        price: 78900,
        currency: "EUR",
        imageUrl: "https://picsum.photos/300/200?random=9"
    },
    {
        id: uuidv4(),
        title: "Товар 10",
        origin: "Южная Корея",
        price: 81900,
        currency: "RUB",
        imageUrl: "https://picsum.photos/300/200?random=10"
    },
    {
        id: uuidv4(),
        title: "Товар 11",
        origin: "Австралия",
        price: 78900,
        currency: "EUR",
        imageUrl: "https://picsum.photos/300/200?random=11"
    },
    {
        id: uuidv4(),
        title: "Товар 12",
        origin: "Южная Корея",
        price: 81900,
        currency: "RUB",
        imageUrl: "https://picsum.photos/300/200?random=12"
    }
];