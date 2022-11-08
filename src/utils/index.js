export const getValue = (key, dataField) => {
    if (key === 'birth_year' || key === 'height' || key === 'mass') {
        const numb = Number(dataField[key].replace(/\D+/g, ''));
        return isNaN(numb) || numb < 1 ? Infinity : numb;
    }
    return dataField[key]
}

export const sortData = (data, order) => {
    return [...data.results].sort((a, b) => {
        const _a = getValue(order.key, a);
        const _b = getValue(order.key, b);
        if (_a < _b) {
            return order.asc ? -1 : 1;
        }
        if (_a > _b) {
            return !order.asc ? -1 : 1;
        }
        return 0;
    });
}