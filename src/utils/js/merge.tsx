export function merge<O extends object>(obj: O) {
    return <M extends object>(merging: M) => ({
        ...obj,
        ...merging
    });
}