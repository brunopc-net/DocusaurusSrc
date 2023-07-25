export const getExperienceAmount = (sd, ed) => {
    const startDate = new Date(sd);
    const endDate = new Date(ed);

    var months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months++;

    return months <= 0 ? 0 : months;
}

export const formatDate = (date) => {
    return new Date(date)
        .toISOString()
        .split('T')[0]
        .substring(0, 7);
}