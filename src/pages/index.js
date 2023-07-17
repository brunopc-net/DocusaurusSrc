import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from '../css/pages/index.module.css';
import BuyMeCoffeeButton from '../components/common/BuyMeCoffeeButton';

const author = require('../data/resume.json').basics;

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{author.name}</h1>
        <p className="hero__subtitle">{author.label}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            See my résumé 📃
          </Link>
        </div>
        <BuyMeCoffeeButton />
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Hello from ${author.shortname}`}
      description={author.label}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
