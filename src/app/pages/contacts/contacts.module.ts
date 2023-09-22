import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { IconContactComponent } from "../../components/icon-contact/icon-contact.component";
import { CardContactComponent } from 'src/app/components/card-contact/card-contact.component';
import { NewContactComponent } from 'src/app/components/new-contact/new-contact.component';


@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        IconContactComponent,
        CardContactComponent,
        NewContactComponent
    ]
})
export class ContactsModule { }
