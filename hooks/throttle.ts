const throttle = (
    func: { (): void; (arg0: any): void },
    delay: number | undefined
) => {
    let timeoutId: any;
    return (...args: [any]) => {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                func(...args);
                timeoutId = null;
            }, delay);
        }
    };
};

export { throttle }