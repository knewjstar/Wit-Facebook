'use strict';

// Wit.ai parameters
//const WIT_TOKEN = process.env.WIT_TOKEN;
const WIT_TOKEN = "7R4DSGD6EBGOCX3CT7SFRSK5PUAQH7F5";
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};