import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBase';
  constructor(private http: HttpClient){

  }

  onProductCreate(products: {pName: string, desc: string, price: string}){
    console.log(products);
    this.http.post('https://angular-35387-default-rtdb.firebaseio.com/products.json',products)
    .subscribe((res) => {
     console.log(res);

    });
    
  
            
  }

  onDeleteProduct(id: string){
    
  }
}
