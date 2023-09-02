type ClassType = { className?: string }


interface Field {
    name: string;
    type: string;
    label: string;
    // validation?: (value: never) => string | undefined;
    placeholder?: string
}

interface FormField {
    data: Field[];
    validation?: ObjectSchema<any>;
    InputStyles?: string;
    ButtonStyles?: string;
    FormStyles?: string
}

export { ClassType, Field, FormField }