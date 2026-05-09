import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { SvgIconsService } from '../../shared/services/svg-icons.service';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html.pipe';

const META_KEY = makeStateKey<boolean>('quality_meta');
const STRUCTURED_DATA_KEY = makeStateKey<string>('quality_structured_data');

@Component({
  selector: 'app-quality-assurance',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './quality-assurance.component.html',
  styleUrl: './quality-assurance.component.scss'
})
export class QualityAssuranceComponent implements OnInit, OnDestroy {
  private baseUrl = environment.baseUrl;
  public svgIcons: SvgIconsService;

  constructor(
    private title: Title,
    private meta: Meta,
    private transferState: TransferState,
    svgIconsService: SvgIconsService
  ) {
    this.svgIcons = svgIconsService;
  }

  ngOnInit() {
    this.setMetaData();
    this.setStructuredData();
  }

  ngOnDestroy() {
    this.transferState.remove(META_KEY);
    this.transferState.remove(STRUCTURED_DATA_KEY);
  }

  private setMetaData() {
    if (this.transferState.hasKey(META_KEY)) return;

    this.title.setTitle('Quality Assurance | Harishree Crop Science');
    
    const metaTags = [
      { name: 'description', content: 'Discover our rigorous quality assurance processes ensuring the highest standards in agricultural products. Leading the way in quality control and testing.' },
      { name: 'keywords', content: 'quality assurance, quality control, testing standards, agricultural quality, product testing, certification' },
      { property: 'og:title', content: 'Quality Assurance | Harishree Crop Science' },
      { property: 'og:description', content: 'Experience excellence through our comprehensive quality assurance processes and standards.' },
      // { name: 'canonical', content: `${this.baseUrl}/quality-assurance` },
      { property: 'og:url', content: `${this.baseUrl}/quality-assurance` },
      { property: 'og:type', content: 'website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:type', content: 'website' },
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
      "@type": "Service",
      "name": "Quality Assurance at Harishree Crop Science",
      "description": "Comprehensive quality assurance and testing services for agricultural products",
      "provider": {
        "@type": "Organization",
        "name": "Harishree Crop Science"
      },
      "url": `${this.baseUrl}/quality-assurance`
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    this.transferState.set(STRUCTURED_DATA_KEY, JSON.stringify(structuredData));
  }
}
