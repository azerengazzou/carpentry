export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Villa Sidi Bou Said",
        category: "villas",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Aménagement complet d'une villa avec mobilier en bois massif"
    },
    {
        id: 2,
        title: "Bibliothèque sur mesure",
        category: "furniture",
        image: "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Bibliothèque murale en chêne avec éclairage intégré"
    },
    {
        id: 3,
        title: "Cuisine moderne",
        category: "apartments",
        image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Cuisine contemporaine avec îlot central en noyer"
    },
    {
        id: 4,
        title: "Dressing de luxe",
        category: "furniture",
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Dressing sur mesure avec finitions haut de gamme"
    },
    {
        id: 5,
        title: "Résidence El Manar",
        category: "villas",
        image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Rénovation complète avec habillages muraux en bois"
    },
    {
        id: 6,
        title: "Objets décoratifs",
        category: "accessories",
        image: "https://images.pexels.com/photos/1580114/pexels-photo-1580114.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Collection d'accessoires artisanaux en bois sculpté"
    },
    {
        id: 7,
        title: "Salon moderne",
        category: "apartments",
        image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Mobilier de salon contemporain en ébène"
    },
    {
        id: 8,
        title: "Bureau exécutif",
        category: "furniture",
        image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Bureau présidentiel avec rangements intégrés"
    },
    {
        id: 9,
        title: "Cadres artistiques",
        category: "accessories",
        image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Cadres et miroirs sculptés à la main"
    }
];