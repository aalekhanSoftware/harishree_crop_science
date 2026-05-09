import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  featuredProducts: Product[] = [];

  socialLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com/harishreecrop', label: 'Twitter' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/profile.php?id=61573857659074', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/harishree_crop_science', label: 'Instagram' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/harishree-crop-science', label: 'LinkedIn' }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.featuredProducts = [
        products.find(p => p.name === 'Proceed'),
        products.find(p => p.name === 'X-Pro'),
        products.find(p => p.name === 'Laser'),
        products.find(p => p.name === 'Black gold'),
        products.find(p => p.name === 'Mpire 404')
      ].filter(Boolean) as Product[];
    });
  }
} 