import { Component, OnInit, OnDestroy, makeStateKey } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { TransferState } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { SvgIconsService } from '../../shared/services/svg-icons.service';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';
import { Inject, PLATFORM_ID } from '@angular/core';

const META_KEY = makeStateKey<boolean>('research_meta');
const STRUCTURED_DATA_KEY = makeStateKey<string>('research_structured_data');

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss'
})
export class ResearchComponent implements OnInit, OnDestroy {
  private baseUrl = environment.baseUrl;
  public svgIcons: SvgIconsService;

  constructor(
    private title: Title,
    private meta: Meta,
    private transferState: TransferState,
    svgIconsService: SvgIconsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.svgIcons = svgIconsService;
  }

  ngOnInit() {
    // Preload images (browser only)
    if (isPlatformBrowser(this.platformId)) {
      const images = [
        'assets/research/1.jpeg',
        'assets/research/2.jpeg',
        'assets/research/3.jpeg',
        'assets/research/4.jpeg'
      ];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }

    this.setMetaData();
    this.setStructuredData();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Research & Development | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Discover our state-of-the-art R&D facilities and innovative agricultural research. Leading the way in sustainable farming solutions.' },
      { name: 'keywords', content: 'agricultural research, R&D, crop science research, sustainable farming research, agricultural innovation' },
      { property: 'og:title', content: 'Research & Development | Harishree Crop Science' },
      { property: 'og:description', content: 'Explore our cutting-edge research and development in sustainable agricultural solutions.' },
      { property: 'og:type', content: 'website' },
      // { name: 'canonical', content: `${this.baseUrl}/research` },
      { property: 'og:url', content: `${this.baseUrl}/research` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Harishree Crop Science' }
    ];

    metaTags.forEach(tag => this.meta.updateTag(tag as MetaDefinition));
    this.transferState.set(META_KEY, true);
  }

  private setStructuredData() {
    if (this.transferState.hasKey(STRUCTURED_DATA_KEY)) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ResearchOrganization",
      "name": "Harishree Crop Science Research & Development",
      "description": "Leading research facility in sustainable agricultural solutions",
      "url": `${this.baseUrl}/research`,
      "parentOrganization": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      }
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
