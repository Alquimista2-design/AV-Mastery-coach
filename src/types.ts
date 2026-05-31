/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image: string;
  result: string;
  quote: string;
  rating: number;
}

export interface ServiceOffer {
  id: string;
  title: string;
  badge: string;
  description: string;
  duration: string;
  features: string[];
  image: string;
  priceEstimate: string;
  targetClient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DiagnosticInput {
  name: string;
  email: string;
  phone: string;
  focusArea: string;
  currentLevel: string;
  bottleneck: string;
  workHours: string;
  vision3Years: string;
}

export interface DiagnosticResult {
  efficiencyScore: number;
  overallDiagnostic: string;
  coreBottlenecksAnalyzed: string;
  tailoredStrategies: {
    title: string;
    description: string;
  }[];
  immediateAction24h: string;
  recommendedProgram: string;
}
