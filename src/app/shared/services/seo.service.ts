import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { StateKey, TransferState, makeStateKey } from '@angular/platform-browser';

export interface OpenGraphConfig {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  locale?: string;
}

export interface TwitterCardConfig {
  title: string;
  description: string;
  image: string;
  card?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  robots?: string;
  author?: string;
  openGraph?: OpenGraphConfig;
  twitter?: TwitterCardConfig;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly metaStatePrefix = 'SEO_META_';
  private readonly canonicalStatePrefix = 'SEO_CANONICAL_';
  private readonly schemaStatePrefix = 'SEO_SCHEMA_';

  constructor(
    private meta: Meta,
    private title: Title,
    private transferState: TransferState,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setTitle(value: string, stateKey?: StateKey<boolean>): void {
    if (stateKey && this.transferState.hasKey(stateKey)) {
      return;
    }
    this.title.setTitle(value);
    if (stateKey) {
      this.transferState.set(stateKey, true);
    }
  }

  setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
  }

  setKeywords(keywords: string): void {
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  setRobots(robots: string): void {
    this.meta.updateTag({ name: 'robots', content: robots });
  }

  setAuthor(author: string): void {
    this.meta.updateTag({ name: 'author', content: author });
  }

  setCanonical(url: string, stateKey?: StateKey<string>): void {
    if (stateKey && this.transferState.hasKey(stateKey)) {
      return;
    }

    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    this.meta.updateTag({ name: 'canonical', content: url });

    if (stateKey) {
      this.transferState.set(stateKey, url);
    }
  }

  setOpenGraph(config: OpenGraphConfig): void {
    const tags: MetaDefinition[] = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.type ?? 'product' },
      { property: 'og:url', content: config.url },
      { property: 'og:image', content: config.image },
      { property: 'og:locale', content: config.locale ?? 'en_IN' }
    ];
    tags.forEach((tag) => this.meta.updateTag(tag));
  }

  setTwitterCards(config: TwitterCardConfig): void {
    const tags: MetaDefinition[] = [
      { name: 'twitter:card', content: config.card ?? 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.image }
    ];
    tags.forEach((tag) => this.meta.updateTag(tag));
  }

  setAll(config: SeoConfig, metaStateKey?: StateKey<boolean>, canonicalStateKey?: StateKey<string>): void {
    if (metaStateKey && this.transferState.hasKey(metaStateKey)) {
      return;
    }

    this.setTitle(config.title);
    this.setDescription(config.description);

    if (config.keywords) {
      this.setKeywords(config.keywords);
    }

    if (config.robots) {
      this.setRobots(config.robots);
    }

    if (config.author) {
      this.setAuthor(config.author);
    }

    this.setCanonical(config.canonicalUrl, canonicalStateKey);

    if (config.openGraph) {
      this.setOpenGraph(config.openGraph);
    }

    if (config.twitter) {
      this.setTwitterCards(config.twitter);
    }

    if (metaStateKey) {
      this.transferState.set(metaStateKey, true);
    }
  }

  injectSchema(json: object, key: StateKey<string>): void {
    const str = JSON.stringify(json);
    if (this.transferState.hasKey(key)) {
      return;
    }
    this.transferState.set(key, str);
    this.appendJsonLdScript(str);
  }

  removeSchema(key: StateKey<string>): void {
    this.transferState.remove(key);
  }

  removeStateKey(key: StateKey<unknown>): void {
    this.transferState.remove(key);
  }

  createMetaStateKey(id: string): StateKey<boolean> {
    return makeStateKey<boolean>(`${this.metaStatePrefix}${id}`);
  }

  createCanonicalStateKey(id: string): StateKey<string> {
    return makeStateKey<string>(`${this.canonicalStatePrefix}${id}`);
  }

  createSchemaStateKey(id: string): StateKey<string> {
    return makeStateKey<string>(`${this.schemaStatePrefix}${id}`);
  }

  private appendJsonLdScript(text: string): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = text;
    this.document.head.appendChild(script);
  }
}
