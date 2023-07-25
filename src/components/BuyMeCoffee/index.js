import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const url = "https://www.buymeacoffee.com/brunopc";

function BuyMeCoffee() {
    return (
      <Link
        className={"button button--lg "+styles.bmcBtn}
        to={url}>
        Buy me a coffee ☕
      </Link>
    );
}

export default BuyMeCoffee;