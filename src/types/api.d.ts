export interface HeroSection {
  title: string;
  description: string;
  ctaText: string;
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface PageContent {
  title: string;
  hero: HeroSection;
  featuresTitle: string;
  features: Feature[];
  testimonialsTitle: string;
  testimonials: Testimonial[];
  footerLinks: FooterLink[];
  copyrightText: string;
}
