
export async function checkMandatoryFieldsOnData(fields: any, data: any, functionName: any) {

    if (data === undefined)
        return {
            statusCode: 500,
            message: 'Data is undefined on checkMandatoryFieldsOnData(' + functionName + ')'
        }

    for (const field of fields) {

        if (data[field] === undefined)
            return {
                statusCode: 500,
                message: 'The ' + field + ' is undefined!'
            }

        if (data[field] === '')
            return {
                statusCode: 500,
                message: 'The ' + field + ' is empty!'
            }
    }

    return null
}