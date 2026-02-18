export const LOGO = "/cinemix.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BG_IMG = "/bg_img.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const AVATAR = "https://avatars.githubusercontent.com/u/175679849?v=4";

export const GITHUB = "https://github.com/Ayush-0312";

export const LINKEDIN =
  "https://www.linkedin.com/in/ayush-gupta-41484b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

export const PORTFOLIO = "https://www.theayushgupta.in/";

export const NETFLIX = "https://www.netflix.com/in/";
