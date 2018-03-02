import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { StoreService } from '../../store.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',

})
export class ItemsComponent implements OnInit {

  settings = {
  edit: {
    confirmSave: true
  },
  columns: {
    // id: {
    //   title: 'ID'
    // },
    name: {
      title: 'Name'
    },
    price: {
      title: 'Price'
    },
    CreatedAt: {
      title: 'Created At'
    },
    UpdatedAt: {
      title: 'Updated At'
    },  SellerName: {
        title: 'Seller Name'
      }

  }
};
  data = [
  // {
  //   id: 1,
  //   name: " book",
  //   price: "4",
  //   CreatedAt: "12/11/2018",
  //   UpdatedAt: "12/11/2018",
  //   SellerName:"aysha"
  // },
  // {
  //   id: 24,
  //   name: " toy",
  //   price: "50",
  //   CreatedAt: "12/11/2018",
  //   UpdatedAt: "12/11/2018",
  //   SellerName:"sara"
  // },
  // {
  //   id: 30,
  //   name: " shirt",
  //   price: "25",
  //   CreatedAt: "12/11/2018",
  //   UpdatedAt: "12/11/2018",
  //   SellerName:"gimmy"
  // }
];



  constructor( private storeService : StoreService) { }

  ngOnInit() {

   this.storeService.getProducts().subscribe(products => this.data = products.data );
  }

  // onEditConfirm(event){
  //   storeService.updateProduct(event.newData).subscribe(res => if(res.status == 201){
  //     event.confirm.resolve();
  //   }
  // esle{
  //   event.confirm.reject();
  // });
  // }

}
