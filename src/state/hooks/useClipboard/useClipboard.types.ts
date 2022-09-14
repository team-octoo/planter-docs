interface IUseClipboardMethods {
    write: (text: string) => void;
}

interface IUseClipboardState {
    loading: boolean;
    error: null | any;
}

type UseClipboard = () => IUseClipboardState & IUseClipboardMethods;

export default UseClipboard;