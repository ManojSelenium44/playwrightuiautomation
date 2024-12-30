export function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function generateRandomString(length: number): string {
    return Math.random().toString(36).substring(2, 2 + length);
}
