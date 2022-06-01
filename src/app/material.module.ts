import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatTabsModule
    ]
})

export class AngularMaterialModule { }
