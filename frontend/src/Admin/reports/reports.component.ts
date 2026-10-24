import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { reportManagementService } from "../adminServices/reportManagement.service";

@Component({
    selector: 'reports-component',
    templateUrl:'./reports.component.html',
    styleUrl: './reports.component.css'
}) export class reportsComponent {
 
    searchKeyword:String = '';
    reportsData:any= []; //data to be stored 
    filtredData:any = []; 
    @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;

    //pagination
    totalRows:number = 0;
    pagesRow:number = 10;
    currentPage:number = 1;
    pages:number = 0;
  
   

    constructor(private http:HttpClient,private router:Router, private reportManagementService:reportManagementService){
  
    }

    getreportsData(){
      //get all data from api
      this.reportManagementService.getReportsData().subscribe((res)=>{
        console.log(res);
        this.reportsData = res;
        this.totalRows = this.reportsData.length;
        this.filtredData = this.reportsData;
        console.log(this.totalRows);
        this.onDropdownChange();
        this.onPageChange(this.currentPage) //sending to change rows
      })
    }
  
    ngOnInit(){
      this.getreportsData();
    }

    UserDetails(id:string){
      const url = `/admin/customerManagement/${id}`;
      this.router.navigateByUrl(url);
    }

    vehicleDetails(id:string){
      console.log("hii")
      const  url= `/admin/vehicleManagement/${id}`;
      this.router.navigateByUrl(url);
    }

    searchFilter_all_table(){
      if (this.searchKeyword.trim() === '') {
        this.filtredData = this.reportsData;
        this.onPageChange(this.currentPage);
      } else {
        this.filtredData = this.reportsData.filter((report:any) => {
          return Object.values(report).some(value => {
            if (typeof value === 'string') {
              return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
            }
            else if( typeof value === 'number'){
              return value.toString().includes(this.searchKeyword.toString())
            }
            return false;
          });
        });

      }
     
    }

    //pagination
    onPageChange(pageNo:number){
      this.currentPage = pageNo;
      const startIndex:number = (this.currentPage - 1) * this.pagesRow;
      // let endIndex = Math.min(startIndex + this.pagesRow, this.totalRows);
      
      const endIndex:number = startIndex + this.pagesRow;
      console.log(endIndex);
      this.filtredData = this.reportsData.slice(startIndex,endIndex)
      
    }

    getRange(): number[] {
      return Array.from({ length: this.pages }, (_, index) => index);
    }
    onDropdownChange(){
      this.pagesRow = parseInt(this.maxRowsDropdown?.nativeElement.value, 10);
      this.pages = Math.ceil(this.totalRows / this.pagesRow);
      this.onPageChange(this.currentPage); //sending to change rows
    }
}