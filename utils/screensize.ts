export const WH = (screenWidth: number): number => {
    switch (true) {
        case screenWidth <= 480:
            return 1; // Small mobile phones
        case screenWidth <= 767:
            return 1; // Medium mobile phones
        case screenWidth <= 1023:
            return 2; // Large mobile phones
        case screenWidth <= 991:
            return 2; // Small tablets
        case screenWidth <= 1199:
            return 2; // Mediusm tablets
        case screenWidth <= 1439:
            return 3; // Small laptops and desktop monitors
        case screenWidth <= 1919:
            return 3; // Medium laptops and desktop monitors
        case screenWidth <= 2559:
            return 3; // Large laptops and desktop monitors
        case screenWidth >= 2560:
            return 4; // Extra-Large laptops and desktop monitors and Smart TVs
        default:
            return 1; // Default size for other screen sizes
    }
};


export const WHSpace = (screenWidth: number): number => {
    switch (true) {
        case screenWidth <= 480:
            return 0; // Small mobile phones
        case screenWidth <= 767:
            return 0; // Medium mobile phones
        case screenWidth <= 1023:
            return 0; // Large mobile phones
        case screenWidth <= 991:
            return 0; // Small tablets
        case screenWidth <= 1199:
            return 5; // Mediusm tablets
        case screenWidth <= 1439:
            return 8; // Small laptops and desktop monitors
        case screenWidth <= 1919:
            return 10; // Medium laptops and desktop monitors
        case screenWidth <= 2559:
            return 10; // Large laptops and desktop monitors
        case screenWidth >= 2560:
            return 10; // Extra-Large laptops and desktop monitors and Smart TVs
        default:
            return 0; // Default size for other screen sizes
    }
};
