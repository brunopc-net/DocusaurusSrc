import React from 'react';
import Link from '@docusaurus/Link';

import '../../css/components/BuyMeCoffeeButton.css';

const url = "https://www.buymeacoffee.com/brunopc";

function BuyMeCoffeeButton() {
    return (
        <div style={{marginTop:'1em'}}>
          <Link
            className="button button--lg bmc-btn"
            to={url}>
            Buy me a coffee ☕
          </Link>
        </div>
    );
}

export default BuyMeCoffeeButton;