export function convertToCamelCase(data: any): any {
    if(!data) return {};

    const result: any = {};
    Object.keys(data).forEach((key) => {
        const camelCaseKey = key.replace(/([-_][a-z])/ig, ($1) => {
            return $1.toUpperCase()
                .replace('-', '')
                .replace('_', '');
        });
        result[camelCaseKey] = data[key];
    });
    return result;
}
