const dateFormat = require("dateformat");
const today = dateFormat(new Date(), "yyyymmdd");
const mommentumDay = dateFormat(new Date(), "yyyy-mm-dd");

module.exports = { today, mommentumDay };
