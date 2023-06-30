export const formaDate = (dateString: string): string => {
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return date.toLocaleDateString('en-EN', options)
}