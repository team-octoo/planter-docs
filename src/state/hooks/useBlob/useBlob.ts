import { useCallback, useMemo, useRef, useState } from "react";
import { useEffectOnce } from "../useEffectOnce/useEffectOnce";
import UseBlob, { BlobContent } from "./useBlob.types";

const useBlob: UseBlob = (initialContent, mimetype) => {
    const blobPresets: BlobPropertyBag = useMemo(() => ({
        type: mimetype,
        endings: 'native',
    }), [mimetype])
    
    const [ content, setContent ] = useState(initialContent);
    const [ blobLink, setBlobLink ] = useState<string | null>(null);
    const blobRef = useRef(new Blob(content, blobPresets))
    
    const setBlobContent = (content: BlobContent) => {
        blobRef.current = new Blob(content, blobPresets);
    }
    
    const invalidateBlobLink = useCallback(() => {
        if (blobLink) {
            URL.revokeObjectURL(blobLink)
        }
    }, [blobLink])
    
    const generateBlobLink = () => window.URL.createObjectURL(blobRef.current);
    
    const revalidateBlobLink = useCallback(() => {
        invalidateBlobLink();
        
        const link = generateBlobLink();
        setBlobLink(link);
        
        return link;
    }, [])
    
    const save = (filename: string) => {
        const blobLink = revalidateBlobLink();
        
        const a = document.createElement('a');
        a.download = filename;
        a.href = blobLink;
        a.click();
    }
    
    return {
        blob: blobRef.current,
        link: blobLink,
        save,
        setContent: setBlobContent,
    };
}

export default useBlob;