import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fake-api.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
    imports: [CommonModule, FormsModule] // Agrega CommonModule aquí
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  selectedCategory = '';
  itemsPerPage = 5;

constructor(
  private apiService: FakeApiService,
  private dialog: MatDialog,
  private router: Router,
) {}

// cerrar sesión y redirigir al usuario al login
logout(): void {
  localStorage.removeItem('userToken'); // Elimina el token del usuario
  this.router.navigate(['/login']); // Redirige al login
}

ngOnInit(): void {
  const isLoggedIn = !!localStorage.getItem('userToken'); // Simula autenticación
  if (!isLoggedIn) {
    this.router.navigate(['/login']); // Redirige al login si no está logeado
  } else {
    this.loadProducts();
  }
}

loadProducts(): void {
  this.apiService.getProducts().subscribe((data: any) => {
    this.products = data.entries; // Accede a la propiedad `entries` de la API
    this.filteredProducts = this.products;
    this.categories = [...new Set(this.products.map((p: any) => p.Category))]; // Categorías únicas basadas en `Category`
  });
}

  // funcion para abrir el modal
  viewDetails(product: any): void {
    this.dialog.open(ProductDetailsModalComponent, {
      data: product, // Pasa los datos del producto al modal
    });
  }
// filtro por categoria
  filterByCategory(): void {

    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(p => p.Category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
      //console.log(this.products);

    }
  }

  changeItemsPerPage(event: any): void {
    this.itemsPerPage = +event.target.value;
  }
}
