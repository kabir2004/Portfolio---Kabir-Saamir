/**
 * Portfolio layout and design constants.
 * Single source of truth for content width, spacing, and nav.
 */

/** Max width for content on inner pages (Projects, Experience, Craft) */
export const CONTENT_MAX_WIDTH = 640;

/** Horizontal padding (px) for content on small screens */
export const CONTENT_PADDING_X = 24;

/** Vertical padding (px) for page top/bottom */
export const PAGE_PADDING_Y = 80;

/** Site title for nav and metadata */
export const SITE_TITLE = "Kabir Saamir";

/** Primary contact email (used in CopyEmail and Experience) */
export const CONTACT_EMAIL = "kabir.saamir@gmail.com";

/** External links shown in corner nav on home */
export const NAV_LINKS = {
  twitter: "https://twitter.com/kabirsaamir",
  github: "https://github.com/kabirsaamir",
  linkedin: "https://linkedin.com/in/kabirsaamir",
} as const;
