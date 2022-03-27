const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization.splitChunks.cacheGroups = {};
    config.optimization.minimize = true;
    return config;
  };
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    SERVER_API: (() => {
      if (isDev) return "https://www.fivestarweek.com/api";
      if (isProd) {
        return "https://www.fivestarweek.com/api";
      }
      if (isStaging) return "https://www.fivestarweek.com/api";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    DOMAIN: (() => {
      if (isDev) return "http://localhost:3000";
      if (isProd) {
        return "https://www.fivestarweek.com/";
      }
      if (isStaging) return "https://www.fivestarweek.com/";
      return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
    APP_NAME: "FiveStarWeek",
    GOOGLE_CLIENT_ID:
      "1047844537007-pkf2m1fbplquftg0baovjpolha79a0s6.apps.googleusercontent.com",
    Facebook_ID: "617176502679024",
    language: "61d84c90d2618f3b70ce1042",
    languageName: "English",
    GA_TRACKING_ID: "G-VW3DXH3JCQ",
    youtube: "https://www.youtube.com/watch?v=--PI_GtBEKA",
  };

  return {
    env,
  };
};
