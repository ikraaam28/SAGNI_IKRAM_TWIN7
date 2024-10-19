import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-qcategory',
  templateUrl: './products-qcategory.component.html',
  styleUrls: ['./products-qcategory.component.css']
})
export class ProductsQCategoryComponent implements OnInit{
  categoryId: number;
  filteredProducts: Product[] = [];

  // Exemple de liste de produits
  products: Product[] = [
    { id: 1, name: 'Refrigérateur LG Inox', image: 'assets/images/refrigerateur-lg.jpg', categoryId: 1, description: '', price: 2800, brand: 'LG', promotion: 0 },
    { id: 2, name: 'Refrigérateur Samsung Blanc', image: 'assets/images/refrigerateur_samsung.jpeg', categoryId: 1, description: '', price: 2400, brand: 'Samsung', promotion: 0 },
    { id: 3, name: 'Lave vaisselle Beko', image: 'assets/images/lave_vaisselle.png', categoryId: 1, description: '', price: 1875, brand: 'BEKO', promotion: 0 },
    { id: 4, name: 'Oppo Smart Phone', image: 'assets/images/oppo_smart.jpg', categoryId: 4, description: '', price: 1200, brand: 'OPPO', promotion: 0 },
    { id: 5, name: 'Hachoir', image: 'assets/images/hachoir.jpg', categoryId: 2, description: '', price: 120, brand: 'Moulinex', promotion: 0 },
    { id: 6, name: 'TV 50\'\' LG', image: 'assets/images/tv_lg.jpg', categoryId: 5, description: '', price: 1800, brand: 'LG', promotion: 0 }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie à partir des queryParams
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params['id']; // Conversion en nombre avec +
      console.log(this.categoryId);

      // Filtrer les produits par categoryId
      this.filteredProducts = this.products.filter(product => product.categoryId === this.categoryId);
    });
  }
}
