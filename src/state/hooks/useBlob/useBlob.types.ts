export type BlobContent = BlobPart[] | undefined;

interface IUseBlobMethods {
    save: (filename: string) => void;
    setContent: (content: BlobContent) => void;
}

interface IUseBlobState extends IUseBlobMethods {
    blob: Blob
    link: string | null;
}

interface UseBlob {
    (content: BlobContent, mimetype: string): IUseBlobState
}

export default UseBlob;