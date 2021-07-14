import {
  FB_APIKEY,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MSG_SENDER_ID,
  FB_APP_ID
} from '@env'

// PROD
const FB_CONFIG = {
  apiKey            : FB_APIKEY,
  authDomain        : FB_AUTH_DOMAIN,
  projectId         : FB_PROJECT_ID,
  storageBucket     : FB_STORAGE_BUCKET,
  messagingSenderId : FB_MSG_SENDER_ID,
  appId             : FB_APP_ID,
};

console.log(FB_CONFIG.apiKey)

export default FB_CONFIG;