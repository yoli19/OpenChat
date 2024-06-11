'use client'; 
import React, { useEffect } from 'react';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
import { app } from '../config/firebase';

const Recaptcha = () => {
  const auth = getAuth(app);

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
        },
        'expired-callback': () => {
        }
      });
    }
  }, [auth]);

  return <div id="recaptcha-container"></div>;
};

export default Recaptcha;
