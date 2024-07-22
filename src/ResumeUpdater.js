const fs = require('fs');
const resume_path = 'static/data/resume.json';
const resume = require('../'+resume_path);

let skills_to_output = [
    {name: "Backend", keywords: []},
    {name: "Backend QA", keywords: []},
    {name: "DevOps", keywords: []},
    {name: "Frontend", keywords: []},
    {name: "Frontend QA", keywords: []},
    {name: "Database", keywords: []}
];

function addSkills(item){
    item.skills && item.skills.forEach(skill => {
        const category = skills_to_output.find(category => category.name === skill.name)
        category && skill.keywords.forEach(kword => {
            if(!category.keywords.includes(kword)){
                category.keywords.push(kword);
            }
        });
    });
}

resume.work.forEach(item => addSkills(item));
resume.education.forEach(item => addSkills(item));
resume.certificates.forEach(item => addSkills(item));
resume.projects.forEach(item => addSkills(item));
resume.skills = skills_to_output;

fs.writeFileSync(
    resume_path,
    JSON.stringify(resume, null, 3)
);