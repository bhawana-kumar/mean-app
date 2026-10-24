
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { productManagementService } from "../adminServices/productMangement.service";

@Component({
    selector: 'vehicleManagement-component',
    templateUrl:'./vehicleManagement.component.html',
    styleUrl: './vehicleManagement.component.css'
}) export class vehicleManagementComponent {

    searchKeyword:String = '';
    vehiclesData:any= []; //data to be stored 
    filtredData:any = []; 
    displayData:any = [];
    filterdDataLength:number = 0;
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
availableChecked:boolean = false;
soldChecked:boolean = false;

    constructor(private http:HttpClient,private router:Router, private productManagementService:productManagementService){
  
    }

    getproductsData(){
      //get all data from api
      this.productManagementService.getProductsData().subscribe((res:any)=>{
        console.log(res);
        this.vehiclesData = res;
        this.totalRows = this.vehiclesData.length;
        this.filtredData = this.vehiclesData;
        this.filterdDataLength = this.filtredData.length
        this.onDropdownChange();
        this.onFilterAttributeChange();
        this.onPageChange(this.currentPage) //sending to change rows
      })
    }
  
    ngOnInit(){
      this.getproductsData();
    }

    applyFilter_all_table(){
      if (this.availableChecked || this.soldChecked ) {
        this.filtredData = this.vehiclesData.filter((vehicle: any) => {
          if ((this.availableChecked && vehicle.status === 'available') || (this.soldChecked && vehicle.status === 'sold')) {
            return true;
          }
          return false;
      
        });
      } else {
        this.filtredData = this.vehiclesData;
      }
      if(this.searchKeyword !== ''){
        this.searchFilter();
      }
     
      this.displayDataCalculation();  
      this.filterdDataLength = this.filtredData.length
     
    }
    searchFilter(){
      this.filtredData = this.filtredData.filter((vehicle: any) => {
      const value = vehicle[this.attributeToSearch];
      if (this.attributeToSearch === 'brandName') {
        console.log(value)
        return value.toLowerCase().startsWith(this.searchKeyword.toLowerCase());
      }
      else if (typeof value === 'string') {
        return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
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

    vehicleDetails(id:string){
      const url = `/admin/vehicleManagement/${id}`;
      this.router.navigateByUrl(url);
    }

    onFilterAttributeChange() {
      this.attributeToSearch = this.attributeDropdown?.nativeElement.value;
      this.searchKeyword = "";
      this.applyFilter_all_table();
      console.log(this.attributeToSearch)
    }
}