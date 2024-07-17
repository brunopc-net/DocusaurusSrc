const getXpAmount = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    var months = 1 +
        (endDate.getFullYear() - startDate.getFullYear()) * 12
        + endDate.getMonth() - startDate.getMonth()
        
    return months <= 0 ? 0 : months;
}

const getXpTotal = (work) => {
    const totalMonths = work.reduce((totalXp, workItem) => 
        totalXp += getXpAmount(workItem.startDate, workItem.endDate), 0
    );
    return Math.round(totalMonths/12);
}

module.exports = {
    getXpAmount,
    getXpTotal
}