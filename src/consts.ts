// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Ryan Hissey';
export const SITE_DESCRIPTION = 'Backend Software Engineer from Staffordshire, UK. Specialising in Laravel applications and e-commerce platforms with extensive Magento 2 experience.';
export const SITE_EMAIL = 'ryan@hissey.dev';
export const GITHUB_URL = 'https://github.com/ryanhissey';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ryan-hissey/';
export const CV_URL = 'https://cv.hissey.dev';

// Hire / contact
export const HIRE_MAILTO = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent('Magento 2 project enquiry')}`;

export const CERTIFICATIONS = [
	{
		name: 'Hyvä Certified Professional',
		url: 'https://www.credly.com/badges/8cae3d2b-8ae5-4446-bb6c-fae542800212',
	},
	{
		name: 'Hyvä Certified Associate',
		url: 'https://www.credly.com/badges/d8bcf755-62a1-424e-ad74-2f31a0854f28',
	},
	{
		name: 'Adobe Certified Professional - Adobe Commerce',
		url: 'https://certification.adobe.com/credential/verify/cc713b37-6be9-4cfd-a9ec-6db0b869de9d',
	},
];

// What I can help with (used on the homepage teaser and the /services page)
export const SERVICES = [
	{
		title: 'Custom module development',
		description: 'Bespoke Magento 2 modules built to spec, coding-standard compliant and upgrade-safe.',
	},
	{
		title: 'Hyvä Checkout integrations',
		description: 'Payment and shipping modules for Hyvä Checkout. The exact work I do day to day at Hyvä.',
	},
	{
		title: 'Hyvä theme development',
		description: 'Hyvä theme and component work, building and extending Hyvä frontends.',
	},
	{
		title: 'Luma to Hyvä module migration',
		description: 'Making your existing Luma modules Hyvä-compatible, rebuilt with Tailwind and Alpine.js.',
	},
	{
		title: 'Third-party & API integrations',
		description: 'Connecting your store to ERPs, PIMs, and external services via clean, reliable APIs.',
	},
	{
		title: 'Maintenance & bug fixing',
		description: 'Upgrades, ongoing support, and fixing the bugs that quietly cost you sales.',
	},
];

// Secondary: general PHP work outside the Magento world
export const SECONDARY_SERVICES = [
	{
		title: 'Laravel application development',
		description: 'Building and extending Laravel apps, features, APIs, and background processing.',
	},
	{
		title: 'APIs & integrations',
		description: 'Connecting systems with well-tested REST APIs and third-party integrations.',
	},
	{
		title: 'General PHP & backend work',
		description: 'Backend development, refactoring, and automation across PHP codebases.',
	},
];
