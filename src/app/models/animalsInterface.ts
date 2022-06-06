export interface NavigatorInterface {
    content: string,
    link: string }

export interface galleryVillagers {
    villagers: VillagerInterface[]
}

export interface VillagerInterface {
    name: string;
    image: VillagerImage;
    species: string;
    personality: string;
    birthday: string
}

export interface VillagerImage {
    src: string,
    alt: string
}