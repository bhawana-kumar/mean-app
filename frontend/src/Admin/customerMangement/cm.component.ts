import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { customerManagementService } from "../adminServices/customerManagement.service";
import { Router } from "@angular/router";


@Component({
  selector: 'cm-component',
  templateUrl: './cm.component.html',
  styleUrl: './cm.component.css'
}) export class customerMangementComponent implements OnInit {

  searchKeyword: String = '';
  usersData: any = []; //data to be stored 
  filtredData: any = [];
  displayData: any = [];
  @ViewChild('maxRowsDropdown') maxRowsDropdown?: ElementRef;
  @ViewChild('attributeDropdown') attributeDropdown?: ElementRef;
  //pagination
  totalRows: number = 0;
  pagesRow: number = 10;
  currentPage: number = 1;
  pages: number = 0;

  //search
  attributeToSearch: string = '';

  //filter
  buyerChecked: boolean = false;
  sellerChecked: boolean = false;
  activeChecked: boolean = false;
  blockChecked: boolean = false;


  constructor(private http: HttpClient, private router: Router, private customerManService: customerManagementService) {

  }

  getUsersData() {
    //get all data from api
    this.customerManService.getUserData().subscribe((res) => {
      console.log(res);
      this.usersData = res;
      
      this.filtredData = this.usersData;
      this.totalRows = this.filtredData.length;
      this.onDropdownChange();
      this.onFilterAttributeChange();
      this.onPageChange(this.currentPage) //sending to change rows
    })
  }

  ngOnInit() {
    this.getUsersData();
  }

  UserDetails(id: string) {
    const url = `/admin/customerManagement/${id}`;
    this.router.navigateByUrl(url);
  }

  applyFilter_all_table() {

    if (this.buyerChecked || this.sellerChecked) {
      this.filtredData = this.usersData.filter((user: any) => {
        if ((this.buyerChecked && user.role === 'buyer') || (this.sellerChecked && user.role === 'seller')) {
          return true;
        }
        return false;
    
      });
    } else {
      this.filtredData = this.usersData
    }

    if (this.activeChecked || this.blockChecked) {
      this.filtredData = this.filtredData.filter((user: any) => {
        if ((this.activeChecked && user.status === 'active') || (this.blockChecked && user.status === 'block')) {
          return true;
        }

        return false;
    
      });
    } else {
      this.filtredData = this.filtredData
    }
    
    if(this.searchKeyword !== ''){
      this.searchFilter();
    }
    this.displayDataCalculation()

  }

  searchFilter(){
      this.filtredData = this.filtredData.filter((user: any) => {
      const value = user[this.attributeToSearch];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(this.searchKeyword.toLowerCase());
      }
      else if (typeof value === 'number') {
        return value.toString().startsWith(this.searchKeyword.toString())
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

  onPageChange(pageNo: number) {
    this.currentPage = pageNo;
    this.displayDataCalculation()
  }

  getRange(): number[] {
    return Array.from({ length: Math.ceil(this.filtredData.length/this.pagesRow) }, (_, index) => index);
  }

  onDropdownChange() {
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

}
