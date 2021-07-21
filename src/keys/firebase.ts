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
  apiKey            : FB_APIKEY.replace('\"', ''),
  authDomain        : FB_AUTH_DOMAIN.replace('\"', ''),
  projectId         : FB_PROJECT_ID.replace('\"', ''),
  storageBucket     : FB_STORAGE_BUCKET.replace('\"', ''),
  messagingSenderId : FB_MSG_SENDER_ID.replace('\"', ''),
  appId             : FB_APP_ID.replace('\"', '')
};


export default FB_CONFIG;