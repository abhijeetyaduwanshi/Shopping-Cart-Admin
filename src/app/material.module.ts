import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatTableModule
    ]
})

export class AngularMaterialModule { }
