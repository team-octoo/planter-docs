import tw from 'tailwind-styled-components';

const FieldWrapper = (field: any) => {
    return tw(field)`
        py-2
        px-3
        w-full
        font-medium
        outline-none
        focus:outline-none
        rounded-lg
    `;
}

export default FieldWrapper;