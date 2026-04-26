const Waline = require('@waline/vercel');

module.exports = Waline({
  secureDomains: process.env.WALINE_SECURE_DOMAINS
    ? process.env.WALINE_SECURE_DOMAINS.split(',').map((s) => s.trim()).filter(Boolean)
    : undefined,
});
