import { ButtonHTMLAttributes, FC } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any;
    icon?: string;
    noIconTheme?: boolean;
    iconPlacement?: 'start' | 'end';
    theme?: 'main' | 'secondary';
    to?: string;
};