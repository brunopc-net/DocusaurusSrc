export function getXpAmount(start, end){
    const startDate = new Date(start);
    const endDate = new Date(end);

    var months = 1 +
        (endDate.getFullYear() - startDate.getFullYear()) * 12
        + endDate.getMonth() - startDate.getMonth()
        
    return months <= 0 ? 0 : months;
};