import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import './contact.css'

const openpgp = require('openpgp');
const { pgp_key } = require('./pgp.key');

function encrypt (publicKeyArmored, msg, callback){
    (async () => {
      const msgValue = await openpgp.createMessage({ text: msg });
      const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
      const encryptedMsg = await openpgp.encrypt({
        message: msgValue,
        encryptionKeys: publicKey
        //signingKeys: privateKey // optional
      });
      callback(encryptedMsg)
  })();
}

function ContactMePage() {
  
  const actions = {
    encrypt: 'Encrypt',
    reset: 'Reset'
  }

  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  //Initialy, action button is set to Encrypt the message
  const [action, setAction] = useState(actions.encrypt)
  //Initialy, message is editable 
  const [msgInputDisabled, setMsgInputDisabled] = useState(false)
  //Initialy, message is not senable because it's not encrypted yet
  const [submitDisabled, setSubmitDisabled] = useState(true)

  function handleEmailInput(e) {
    setInputEmail(e.target.value)
  }

  function handleMessageInput(e) {
    setInputMessage(e.target.value)
  }

  function handleAction() {
    if (!window.crypto.getRandomValues) {
      alert("Sorry, the web browser you're using is not supported");
      return;
    }
    switch (action) {
      case actions.encrypt:
        encrypt(pgp_key, inputMessage, encrypt_callback);
        break;
      case actions.reset:
        reset();
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://faas-tor1-70ca848e.doserverless.co/api/v1/web/fn-f564cb62-ce7b-4734-99a2-1fc47d375713/cher-ami/cher-ami", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: inputEmail,
        message: inputMessage,
      })
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        alert("It worked - I'll get back to you asap. Thanks for reaching me!")
        window.location.reload();
      }
    }).catch(err => {
      if (window.confirm("Sorry, there was a problem sending the message. May you submit the issue on Github so I can fix it?")){
        window.open('https://github.com/brunopc-net/Docusaurus-Blog/issues');
      };
    });
  }

  function encrypt_callback (encrypted_msg){
    setInputMessage(encrypted_msg);
    setAction(actions.reset);
    setMsgInputDisabled(true);
    setSubmitDisabled(false);
  }

  function reset() {
    setInputMessage('')
    setAction(actions.encrypt);
    setMsgInputDisabled(false);
    setSubmitDisabled(true);
  }

  return (
    <Layout
      title={'Contact me'}
      description='You can send me a OpenPGP encrypted message from this page'
    >
      <main>
        <div className="container">
          <div className="contactForm">
            <h1>Contact me</h1>
            <div className="formGroup">
              <h2>Send me an encrypted message</h2>
              <form onSubmit={handleSubmit}>
                  <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      onChange={handleEmailInput}
                      required
                  />
                  <textarea
                    className="form-control"
                    id="message"
                    name="msg"
                    placeholder='Your message'
                    onChange={handleMessageInput}
                    value={inputMessage}
                    disabled={msgInputDisabled && "disabled"}
                    required
                  />
                  <button id="action" type="button" onClick={handleAction}>
                    {action}
                  </button>
                  <button id="submit" type="submit" disabled={submitDisabled && "disabled"}>
                    Send
                  </button>
              </form>
            </div>
            <p style={{marginTop: 20}}>
              You can also contact me at <Link to="mailto:work@brunopc.net">work@brunopc.net</Link>, with or without my public key listed below.
              <listing style={{marginTop: 30}}>
                {pgp_key}
              </listing>
            </p>
          </div>
          
        </div>
      </main>
    </Layout>
  );
}

export default ContactMePage;
