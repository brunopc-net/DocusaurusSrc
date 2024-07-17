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

const formatFrontmatter = (frontMatter) => {
    const position = frontMatter.experience.position;
    const place = frontMatter.experience.place;
    const index = resume.work.findIndex(work_item => 
        work_item.position === position &&
        work_item.name === place
    );

    // title
    frontMatter.title = position+" at "+place;
        
    // position
    frontMatter.sidebar_position = index+1;

    // tags
    frontMatter.tags = [];
    resume.work[index].skills.forEach(category => {
        frontMatter.tags.push(...category.keywords)
    });

    return frontMatter;
}

module.exports = {
    getXpAmount,
    getXpTotal,
    formatFrontmatter
}