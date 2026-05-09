import { Component, OnInit, OnDestroy, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  mobileMenuTop: number | null = null;
  private navSub?: Subscription;

  constructor(
    private router: Router,
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.navSub = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => this.closeMenu());
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
    this.unlockBodyScroll();
  }

  toggleMenu(event?: Event) {
    event?.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.updateMobileMenuLayout();
    }
    this.setBodyScrollState();
  }

  closeMenu(event?: Event) {
    event?.preventDefault();
    this.isMenuOpen = false;
    this.mobileMenuTop = null;
    this.setBodyScrollState();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    const clickedInside = this.elRef.nativeElement.contains(event.target as Node);
    if (!clickedInside) {
      this.closeMenu();
    }
  }

  @HostListener('document:pointerdown', ['$event'])
  onDocumentPointerDown(event: PointerEvent): void {
    if (!this.isMenuOpen) {
      return;
    }

    const touchedInside = this.elRef.nativeElement.contains(event.target as Node);
    if (!touchedInside) {
      this.closeMenu(event);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.isMenuOpen) {
      this.closeMenu();
      return;
    }
    if (this.isMenuOpen) {
      this.updateMobileMenuLayout();
    }
  }

  @HostListener('window:orientationchange')
  onOrientationChange(): void {
    if (!this.isMenuOpen) {
      return;
    }
    setTimeout(() => this.updateMobileMenuLayout(), 150);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isMenuOpen && window.innerWidth < 992) {
      this.updateMobileMenuLayout();
    }
  }

  private setBodyScrollState(): void {
    if (!this.document?.body) {
      return;
    }
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'mobile-menu-open');
      return;
    }
    this.unlockBodyScroll();
  }

  private unlockBodyScroll(): void {
    if (this.document?.body) {
      this.renderer.removeClass(this.document.body, 'mobile-menu-open');
    }
  }

  private updateMobileMenuLayout(): void {
    if (window.innerWidth >= 992) {
      this.mobileMenuTop = null;
      return;
    }

    const navElement = this.elRef.nativeElement.querySelector('.navbar') as HTMLElement | null;
    if (!navElement) {
      this.mobileMenuTop = 88;
      return;
    }

    const navRect = navElement.getBoundingClientRect();
    this.mobileMenuTop = Math.round(Math.max(navRect.bottom + 8, 60));
  }
} 