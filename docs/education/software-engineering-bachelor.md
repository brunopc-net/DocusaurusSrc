---
education:
  area: "Software Engineering"
  studyType: "Bachelor"
---

import Education from '@site/src/components/education';
import Link from '@docusaurus/Link';

I did my bachelor in <Link to="https://www.etsmtl.ca/en/ets/about-ets/overview">one of the most prestigious Engineering School in Canada</Link>, as the training is very pratical and based on market needs. Multiple internships are also part of the mandatory curriculum.

<Education area={frontMatter.education.area} studyType={frontMatter.education.studyType} />