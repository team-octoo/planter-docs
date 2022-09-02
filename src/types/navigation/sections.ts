export interface MenuSection {
    id: string;
    name: string;
    icon?: string;
    sections?: SubSection[];
}

export interface SubSection {
    name: string;
    id: string;
    sections?: SubSection[];
}