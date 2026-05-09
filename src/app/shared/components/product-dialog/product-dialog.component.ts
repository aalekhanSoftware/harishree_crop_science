import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product.interface';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-dialog" data-aos="zoom-in">
      <div class="dialog-content">
        <button class="close-btn" (click)="close()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        
        <div class="product-details">
          <div class="product-image">
            <img [src]="data.product.image" [alt]="data.product.name" loading="lazy">
          </div>
          <div class="product-info">
            <h2>{{ data.product.name }}</h2>
            <p class="description">{{ data.product.description }}</p>
            <div class="full-description">
              <h3>Product Details</h3>
              <p>{{ data.product.fullDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent {
  @Input() data: { product: Product } = { product: {} as Product };

  constructor(private dialogService: DialogService) {}

  close(): void {
    this.dialogService.close();
  }
} 