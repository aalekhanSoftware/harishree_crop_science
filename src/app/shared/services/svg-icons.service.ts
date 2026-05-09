import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SvgIconsService {
  readonly researchIcons = {
    productDevelopment: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z" stroke="currentColor" stroke-width="2"/>
      <path d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z" stroke="currentColor" stroke-width="2"/>
      <path d="M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z" stroke="currentColor" stroke-width="2"/>
      <path d="M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    qualityControl: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
      <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    labTesting: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2V4M15 2V4M9 20V22M15 20V22M4 9H2M4 15H2M22 9H20M22 15H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" stroke="currentColor" stroke-width="2"/>
    </svg>`,

    sustainability: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.5C10 4.5 7 4.5 5 6.5C3 8.5 3 12 5 14L12 21L19 14C21 12 21 8.5 19 6.5C17 4.5 14 4.5 12 6.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    innovation: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    research: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M20.9999 17L20.9999 21M20.9999 21L17.9999 21M20.9999 21L16.9999 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 8H16M8 12H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    capabilities: `<svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Central Hub -->
      <circle cx="400" cy="200" r="60" fill="var(--primary-lightest)" stroke="currentColor" stroke-width="3"/>
      <text x="400" y="210" fill="currentColor" font-size="16" text-anchor="middle">Research Hub</text>
      
      <!-- Connecting Lines -->
      <path d="M460 200h80M260 200h80M400 140V60M400 260v80" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5"/>
      
      <!-- Capability Nodes -->
      <circle cx="600" cy="200" r="40" fill="white" stroke="currentColor" stroke-width="2"/>
      <text x="600" y="205" fill="currentColor" font-size="12" text-anchor="middle">Quality Control</text>
      
      <circle cx="200" cy="200" r="40" fill="white" stroke="currentColor" stroke-width="2"/>
      <text x="200" y="205" fill="currentColor" font-size="12" text-anchor="middle">Lab Testing</text>
      
      <circle cx="400" cy="60" r="40" fill="white" stroke="currentColor" stroke-width="2"/>
      <text x="400" y="65" fill="currentColor" font-size="12" text-anchor="middle">Innovation</text>
      
      <circle cx="400" cy="340" r="40" fill="white" stroke="currentColor" stroke-width="2"/>
      <text x="400" y="345" fill="currentColor" font-size="12" text-anchor="middle">Development</text>
    </svg>`,
  };

  qualityIcons = {
    testing: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3V7M15 3V7M20 14L14.5 19.5L12 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    certification: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15L8.5 12L12 9L15.5 12L12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 4H4V20H20V4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    monitoring: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H7L10 19L14 5L17 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  };
} 