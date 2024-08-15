const fs = require('fs');

// URL of the external JSON file
const source_path = 'https://brunopc-net.github.io/Reactsume/resume.json';

// Path to save the file
const dest_path = 'static/data/resume';

const loadResume = async () => {
    try {
        const response = await fetch(source_path);
        if (!response.ok) {
            throw new Error(`Couldn't load resume: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

const saveResume = async () => {
    const resumeData = await loadResume();
    resumeData && fs.writeFileSync(dest_path+".json", JSON.stringify(resumeData, null, 3));
};

saveResume();