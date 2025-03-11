import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  standalone: true,
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css'],
  imports: [CommonModule] // Agrega CommonModule aquí
})
export class ProductDetailsModalComponent {
  constructor(
    private dialogRef: MatDialogRef<ProductDetailsModalComponent>, // Controla el modal
    @Inject(MAT_DIALOG_DATA) public data: any // Recibe los datos del producto
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
