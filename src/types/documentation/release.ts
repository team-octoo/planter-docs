import { Status } from "./general";

export interface Release {
    id: string,
    status: Status,
    sort: null,
    user_created: string,
    date_created: string,
    user_updated: string,
    date_updated: string,
    version_number: string,
    title: string,
    content: string
}