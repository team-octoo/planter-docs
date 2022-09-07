import { Directus, DirectusOptions } from "@directus/sdk";

// interface IDirectusStateProperties {}

type IDirectusState = [ Directus<any> ];
type UseDirectusBase = (options?: DirectusOptions) => IDirectusState;

export default UseDirectusBase;