export interface HeaderSection {
  start_now?: { link: string; link_text: string };
  ingredients?: { link: string; link_text: string };
  testimonials?: { link: string; link_text: string };
  header_product_logo?: string;
}

export interface HeroSection {
  headline: string;
  button_link: string;
  button_text: string;
  subheadline: string;
  product_image: string;
  mobile_background_image: string;
  desktop_background_image: string;
}

export interface ProblemStatementSection {
  headline: string;
  description: string;
  subheadline: string;
  symptoms_risk_factors: Array<{
    name: string;
    image: string;
  }>;
}

export interface OriginTrustBadgeSection {
  heading: string;
  body_text: string;
  flag_image: string;
  signature_image: string;
  trusted_badge_text: string | null;
  trusted_badge_image: string | null;
  trusted_badge_pdf_url: string | null;
  trusted_badge_image_mobile: string | null;
  trusted_badge_pdf_button_text: string | null;
}

export interface DailySupportBenefitSection {
  headline: string;
  description: string;
  subheadline: string;
  daily_benefits: Array<{
    name: string;
    image: string;
    description: string;
  }>;
}

export interface HowItWorksSection {
  headline: string;
  subheadline: string;
  how_it_works: Array<{
    name: string;
    image: string;
    description: string;
  }>;
}

export interface WhyChooseProductSection {
  headline: string;
  subheadline: string;
  why_choose_product: Array<{
    image: string;
    description: string;
    card_border_color: string;
    card_background_color: string;
  }>;
}

export interface SignupFormSection {
  heading: string;
  description: string;
  city_label: string;
  email_label: string;
  street_label: string;
  street2_label: string;
  postcode_label: string;
  disclaimer_text: string;
  last_name_label: string;
  first_name_label: string;
  phone_number_label: string;
  submit_button_text: string;
  terms_checkbox_label: string;
  withdrawal_button_link: string;
  withdrawal_button_text: string;
  newsletter_checkbox_label: string;
  promotional_checkbox_label: string;
  subscription_checkbox_label: string;
}

export interface FooterSection {
  imprint: { imprint_link: string; imprint_button_text: string };
  first_heading: string;
  privacy_policy: { privacy_link: string; privacy_button_text: string };
  second_heading: string;
  terms_of_service: { terms_link: string; terms_button_text: string };
}

export interface ContentResponse {
  slug: string;
  title: string;
  layout: string;
  data: {
    header_section: HeaderSection;
    bio_digestin_hero_section: HeroSection;
    problem_statement_section: ProblemStatementSection;
    origin_trust_badge_section: OriginTrustBadgeSection;
    daily_support_benefit_section: DailySupportBenefitSection;
    how_bio_digestin_works_section: HowItWorksSection;
    why_choose_product_section: WhyChooseProductSection;
    signup_form_section: SignupFormSection;
    footer_section: FooterSection;
  };
  status: string;
  message: string;
}
