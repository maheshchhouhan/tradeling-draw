
export const draw = (width: number, height: number, padding: number): number[][] => {
    if (width <= padding+2 || height <= padding+2) { // Base case: innermost rectangle
        if (width <= 0 || height <= 0) return [];
        if (height < 2) return [Array(width).fill(1)];
        return [
            Array(width).fill(1),
            ...Array.from({length: height-2}, () => width < 2 ? [2] : [2, ...Array(width-2).fill(0), 2]),
            Array(width).fill(1),
        ];
    }
    return [
        Array(width).fill(1),
        ...Array.from({length: padding>>1}, () => [2, ...Array(width-2).fill(0), 2]),
        ...draw(width - padding - 2, height - padding - 2, padding).map((row) => 
            [2, ...Array(padding>>1).fill(0), ...row, ...Array(padding>>1).fill(0), 2]
        ),
        ...Array.from({length: padding>>1}, () => [2, ...Array(width-2).fill(0), 2]),
        Array(width).fill(1)
    ];
}