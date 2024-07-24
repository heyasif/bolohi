export interface DownloadStep {
  steps: string[];
}

export interface AppDetail {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface HomePageContent {
  downloadInstructions: DownloadStep;
  appDetails: AppDetail[];
  features: Feature[];
  faqs: FAQ[];
}
