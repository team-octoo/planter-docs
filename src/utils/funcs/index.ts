export const validatedJsonTemplate = (stringData: string) => {
    const parsed = JSON.parse(stringData);
    return JSON.stringify(parsed);
}