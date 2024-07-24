// src/types.ts

export interface Version {
  version: string;
  release_date: string;
  size: string;
  architecture: string[];
  screen_dpi: string;
  sha1: string;
  download_link: string;
  whats_new: string[];
}

export interface AppData {
  app_name: string;
  platform: string;
  developer: string;
  common_details: {
    icon_url: string;
    description: string;
    features: string[];
    pros: string[];
    cons: string[];
    screenshots: string[];
  };
  versions: Version[];
}
