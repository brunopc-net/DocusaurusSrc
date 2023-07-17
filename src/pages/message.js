import React, { useState } from 'react';

import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {browserPermitsEncryption, encrypt} from '../js/encrypt.functions.js';
import { pgp_key } from '../data/pgp.key.js';

import '../css/pages/message.css'

function EncryptedMessageForm() {
  
  const actions = {
    encrypt: 'Encrypt',
    reset: 'Reset'
  }

  const [inputMessage, setInputMessage] = useState('')
  //Initialy, action button is set to Encrypt the message
  const [action, setAction] = useState(actions.encrypt)
  //Initialy, message is editable 
  const [msgInputDisabled, setMsgInputDisabled] = useState(false)
  //Initialy, message is not senable because it's not encrypted yet
  const [submitDisabled, setSubmitDisabled] = useState(true)

  function handleInput(e) {
    setInputMessage(e.target.value)
  }

  function handleAction() {
    if (!browserPermitsEncryption) {
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

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - send me an encrypted message`}
      description='You can send me an encrypted message with OpenPGP from this page'
    >
      <main>
        <div className="container">
          <div className="contactForm">
            <h1>Send me an encrypted message</h1>
            <form action="https://fabform.io/f/zhIv4qr" method="POST">
              <div className="formGroup">
                <input className="form-control" type="email" name="email" placeholder="Your email address" required />
              </div>
              <div className="formGroup">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder='Your message'
                  onChange={handleInput}
                  value={inputMessage}
                  disabled={msgInputDisabled && "disabled"}
                ></textarea>
              </div>
              <div className="formGroup">
                <button id="action" type="button" onClick={handleAction}>
                  {action}
                </button>
                <button id="submit" type="submit" disabled={submitDisabled && "disabled"}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default EncryptedMessageForm;