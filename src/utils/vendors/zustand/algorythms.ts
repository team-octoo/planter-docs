export const compare = (oldState: any, newState: any) => {
    return JSON.stringify(oldState) === JSON.stringify(newState);
}