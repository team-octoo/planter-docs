export interface Framework {
    name: string;
}
export interface Flavour {
    framework: Framework;
    name: string;
    recommended: boolean;
    info: string;
    description?: string;
}