export interface BaseSection {
    id: string;
    uri: string;
    name: string;
    description: string;
    sections?: SubSection[];
}

export interface MainSection extends BaseSection {
    icon?: string;
}

export interface SubSection extends BaseSection {}