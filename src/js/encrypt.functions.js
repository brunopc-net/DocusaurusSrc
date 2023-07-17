const openpgp = require('openpgp');

export const browserPermitsEncryption = () => {
  if (window.crypto.getRandomValues) {
    return true;
  }
  return false;
}

export const encrypt = (publicKeyArmored, msg, callback) => {
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