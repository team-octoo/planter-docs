export interface Framework {
    name: string;
}
export interface Flavour {
    id: string;
    framework: Framework;
    name: string;
    recommended: boolean;
    info: string;
    description?: string;
}