import { Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { TaskbystatusComponent } from './taskbystatus/taskbystatus.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { HeaderComponent } from './header/header.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:'loginuser', component:LoginuserComponent
    },
    {
        path:'createtask', component:AddtaskComponent,canActivate:[AuthGuard()]
    },{
        path:'updatetask/:id', component:UpdatetaskComponent,canActivate:[AuthGuard()]
    },{
        path:'viewtask/:id', component:ViewtaskComponent,canActivate:[AuthGuard()]
    },{
        path:'viewlist', component:ViewlistComponent,canActivate:[AuthGuard()]
    },    
    {path:'',redirectTo:'taskbystatus',pathMatch:'full'},
    {
        path:'taskbystatus', component:TaskbystatusComponent,canActivate:[AuthGuard()]
    },{
        path:'searchresult', component:SearchresultsComponent,canActivate:[AuthGuard()]
    },{
        path:'header', component:HeaderComponent
    },{
        path:'register', component:RegisterComponent
    }



];
