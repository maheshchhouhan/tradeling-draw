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
    // Base case if width or height <= padding + 2 then drawing inner most box
    if (width <= padding + 2 || height <= padding + 2) {
        return [
            [2, ...Array(width - 2).fill(1), 2], // Drawing first row
            ...Array.from({length: height - 2}, () => [2, ...Array(width - 2).fill(0), 2]), // Drawing middle row's after height subtracting by 2 to handle borders
            [2, ...Array(width - 2).fill(1), 2], // Drawing last row
        ]
    }

    // Returning array by calling draw fn recursively to create outer boxes
    return [
        [2, ...Array(width - 2).fill(1), 2], // Drawing first row
        ...Array.from({length: padding / 2}, () => [2, ...Array(width - 2).fill(0), 2]), // Drawing top padding space row's after diving padding by 2
        ...draw(width - padding - 2, height - padding - 2, padding).map(row => 
            [2, ...Array(padding / 2).fill(0), ...row, ...Array(padding / 2).fill(0), 2] // Drawing inner boxes by calling draw fn recursively, also drawing left / right spaces by dividing padding by 2
        ),
        ...Array.from({length: padding / 2}, () => [2, ...Array(width - 2).fill(0), 2]), // Drawing bottom padding space row's after diving padding by 2
        [2, ...Array(width - 2).fill(1), 2] // Drawing last row
    ]
}