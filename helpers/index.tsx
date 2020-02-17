// Helper function to validate all values of given object is null or empty
export const checkProperties = (obj: any): boolean => {
    for (let key in obj) {
        if (obj[key] !== null && obj[key] != "")
            return false;
    }
    return true;
}

// Helper function to generate matrix of 0,1,2 on the basis of width, height and padding
export const draw = (width: number, height: number, padding: number): number[][] => {
    // Base case: if width and height less than or equal zero, returning empty array
    if (width <= 0 || height <= 0) return [];

    // if the height is less than 2 then render the last row
    if (height < 2) return [Array(width).fill(1)];

    // if the width and height less or equal padding + 2 
    if (width <= padding + 2 || height <= padding + 2) {
        return [
            Array(width).fill(1),
            ...Array.from({ length: height - 2 }, () => width < 2 ? [2] : [2, ...Array(width - 2).fill(0), 2]),
            Array(width).fill(1),
        ];
    }

    // Returning array by calling draw function recursively by subtracting padding by 2 to handle the edges of inner arrays
    return [
        Array(width).fill(1),
        ...Array.from({ length: padding / 2 }, () => [2, ...Array(width - 2).fill(0), 2]),
        ...draw(width - padding - 2, height - padding - 2, padding).map((row) =>
            [2, ...Array(padding / 2).fill(0), ...row, ...Array(padding >> 1).fill(0), 2]
        ),
        ...Array.from({ length: padding / 2 }, () => [2, ...Array(width - 2).fill(0), 2]),
        Array(width).fill(1)
    ];
}