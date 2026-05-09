import { Injectable, ComponentRef, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogContainer: ViewContainerRef | null = null;
  private dialogRef: ComponentRef<any> | null = null;
  private backdropElement: HTMLElement | null = null;
  private closeSubject = new Subject<void>();

  onClose$ = this.closeSubject.asObservable();

  setContainer(container: ViewContainerRef) {
    this.dialogContainer = container;
  }

  open(component: Type<any>, data: any) {
    if (!this.dialogContainer) return;

    this.createBackdrop();
    this.dialogRef = this.dialogContainer.createComponent(component);
    this.dialogRef.instance.data = data;
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.destroy();
      this.dialogRef = null;
    }
    if (this.backdropElement) {
      document.body.removeChild(this.backdropElement);
      this.backdropElement = null;
    }
    document.body.style.overflow = '';
    this.closeSubject.next();
  }

  private createBackdrop() {
    this.backdropElement = document.createElement('div');
    this.backdropElement.className = 'dialog-backdrop';
    document.body.appendChild(this.backdropElement);
    this.backdropElement.addEventListener('click', () => this.close());
  }
} 