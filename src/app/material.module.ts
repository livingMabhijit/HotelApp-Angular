import { NgModule} from '@angular/core';
import { MatToolbarModule,
         MatIconModule,
         MatSidenavModule, 
         MatButtonModule,
         MatListModule,
         MatTabsModule} from '@angular/material';
// import {} from '@angular/material/icon';
// import {} from '@angular/material/sidenav';
// import {} from '@angular/material/button';

@NgModule({
    imports: [MatToolbarModule,
              MatIconModule,
              MatSidenavModule,
              MatButtonModule,
              MatListModule,
              MatTabsModule],
    exports: [MatToolbarModule,
              MatIconModule,
              MatSidenavModule,
              MatButtonModule,
              MatListModule,
              MatTabsModule]
})

export class MaterialModule{};