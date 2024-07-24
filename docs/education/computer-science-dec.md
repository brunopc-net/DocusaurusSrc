---
education:
  area: "Computer Science"
  studyType: "DEC"
---

import Education from '@site/src/components/education';
import Link from '@docusaurus/Link';

This is my first IT degree I attended after high school. The program was a solid base of <Link to="https://en.wikipedia.org/wiki/Object-oriented_programming">OOP</Link>. It also had a particular emphasis on web programming and technologies

<Education area={frontMatter.education.area} studyType={frontMatter.education.studyType} />