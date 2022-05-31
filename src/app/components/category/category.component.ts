import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryService } from '../../services/categoryService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['categoryTitle', 'categoryDescription', 'editCategory', 'viewProducts'];
  categoryData: any = [];

  constructor(private categoryApi: CategoryService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * GET all categories
   */
  getCategories = () => {
    this.categoryApi.getCategories().subscribe(data => {
      this.categoryData = data;
    })
  }

  /**
   * View category details
   * 
   * @param  {any} category
   */
  viewCategoryDetails = (category: any) => {
    this.dialog.open(CategoryDetailsDialogComponent, {
      data: {
        category
      }
    });
  }
}

export interface DialogData {
  category: any;
}

@Component({
  selector: 'app-category-details-dialog',
  templateUrl: './category-details-dialog/category-details-dialog.component.html',
  styleUrls: ['./category-details-dialog/category-details-dialog.component.css']
})

export class CategoryDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
