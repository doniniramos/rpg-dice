
export function errorToJson(error: any): string {
    const json = {
        statusCode: error.statusCode || '',
        name: error.name || '',
        message: error.message || ''
    }
    return JSON.stringify(json)
}