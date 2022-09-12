import { ButtonHTMLAttributes, FC } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any;
    icon?: string;
    iconPlacement?: 'start' | 'end';
    theme?: 'main' | 'secondary';
    to?: string;
};