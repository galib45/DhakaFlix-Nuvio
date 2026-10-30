"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var BASE_URL = "http://172.16.50.12/DHAKA-FLIX-12/";
var TMDB_API_KEY = "439c478a771f35c05022f9feabcca01c";
var USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

function getStreams(tmdbId, type, season, episode) {
  return __async(this, null, function* () {
    // const streamPromises = itemsToProcess.map((item) => __async(this, null, function* () {
      return [
        {
          "name": "DhakaFlix",
          "title": "The.100.S03E01.1080p.10bit.BluRay.5.1.x265.HEVC-MZABI.mkv",
          "url": "http://172.16.50.12/DHAKA-FLIX-12/TV-WEB-Series/TV%20Series%20%E2%99%A6%20%20S%20%20%E2%80%94%20%20Z/The%20100%20%28TV%20Series%202014%E2%80%932020%29%201080p%20%5BDual%20Audio%5D/Season%203/The.100.S03E01.1080p.10bit.BluRay.5.1.x265.HEVC-MZABI.mkv",
          "quality": "1080p", 
        }
      ];
    // }));
    // const results = yield Promise.all(streamPromises);
    // return results.reduce((acc, val) => acc.concat(val), []);
  });
}
module.exports = { getStreams };
