import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { orderManagementService } from "../adminServices/orderManagement.service";
import { Sort } from "@angular/material/sort";

@Component({
    selector: 'orderManagement-component',
    templateUrl: './ordersManagement.component.html',
    styleUrl: './ordersManagement.component.css'
}) export class orderManagementComponent {

  searchKeyword:String = '';
  ordersData:any= []; //data to be stored 
  filtredData:any = []; 
  sortedData:any=[];
  displayData:any = [];
  @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;
  @ViewChild('attributeDropdown') attributeDropdown?: ElementRef;
  //pagination
  totalRows:number = 0;
  pagesRow:number = 10;
  currentPage:number = 1;
  pages:number = 0;

 
//search
attributeToSearch: string = '';

//filter
deliveredChecked:boolean = false;
pendingChecked:boolean = false;
otherChecked:boolean = false;

  constructor(private http:HttpClient,private router:Router, private orderManagementService:orderManagementService){

  }

  getordersData(){
    //get all data from api
    this.orderManagementService.getOrdersData().subscribe((res:any)=>{
      console.log(res);
      this.ordersData = res;
      this.totalRows = this.ordersData.length;
      this.filtredData = this.ordersData;
      console.log(this.totalRows);
      this.onDropdownChange();
      this.onFilterAttributeChange();
      this.onPageChange(this.currentPage) //sending to change rows
    })
  }

  ngOnInit(){
    this.getordersData();
  }

  OrderDetails(id:string){
    const url = `/admin/orderManagement/${id}`;
    this.router.navigateByUrl(url);
  }

  applyFilter_all_table(){
    if (this.deliveredChecked || this.pendingChecked || this.otherChecked) {
      this.filtredData = this.ordersData.filter((order: any) => {
        if ((this.deliveredChecked && order.orderStatus === 'Delivered') || (this.pendingChecked && order.orderStatus === 'Pending')) {
          return true;
        }else if(this.otherChecked && (order.orderStatus !== 'Pending' && order.orderStatus !== 'Delivered')){
          return true
        }

        return false;
    
      });
    } else {
      this.filtredData = this.ordersData;
    }
    if(this.searchKeyword !== ''){
      this.searchFilter();
    }
   
    this.displayDataCalculation();  
   
  }

  searchFilter(){
    this.filtredData = this.filtredData.filter((order: any) => {
    const value = order[this.attributeToSearch];
    if (typeof value === 'string') {
      return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
    }
    else if (typeof value === 'number') {
      return value.toString().startsWith(this.searchKeyword.toString())
    }
    else if(typeof value === 'object'){
      return value.registrationNumber.toLowerCase().includes(this.searchKeyword.toLowerCase());
    }
    return false;

  });
}

  //pagination
  displayDataCalculation() {
    const startIndex: number = (this.currentPage - 1) * this.pagesRow;
    const endIndex: number = startIndex + this.pagesRow;
    this.displayData = this.filtredData.slice(startIndex, endIndex)

  }
  onPageChange(pageNo:number){
    this.currentPage = pageNo;
    this.displayDataCalculation()
    
  }

  getRange(): number[] {
    return Array.from({ length: this.pages }, (_, index) => index);
  }
  onDropdownChange(){
    this.pagesRow = parseInt(this.maxRowsDropdown?.nativeElement.value, 10);
    this.pages = Math.ceil(this.totalRows / this.pagesRow);
    this.onPageChange(this.currentPage); //sending to change rows
  }

  onFilterAttributeChange() {
    this.attributeToSearch = this.attributeDropdown?.nativeElement.value;
    this.searchKeyword = "";
    this.applyFilter_all_table();
    console.log(this.attributeToSearch)
  }

  
  sortData(sort: Sort) {
    const data = this.filtredData;
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'price':
          
          return compare(a.price, b.price, isAsc);
        case 'date':
          return compare(a.dateTime, b.dateTime, isAsc);
        default:
          return 0;
      }
    });
    const startIndex: number = (this.currentPage - 1) * this.pagesRow;
    const endIndex: number = startIndex + this.pagesRow;
    this.displayData = this.sortedData.slice(startIndex, endIndex);
  }
}

function compare(a: number | string |any, b: number | string |any, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
  
