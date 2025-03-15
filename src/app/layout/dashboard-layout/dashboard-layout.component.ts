import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: false,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

 constructor(private authService: AuthService,){
  
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
 }


toggleTemplates() {
throw new Error('Method not implemented.');
}
displayTemplateDropdown: any;
closeDropdown() {
throw new Error('Method not implemented.');
}
roleBaseUIAccess(arg0: any): any {
throw new Error('Method not implemented.');
}
displayProjectDropdown: any;
projectId: any;
user: any;
toggleMyProjects() {
throw new Error('Method not implemented.');
}
firstSubRoute: any;
SubMenuPages: any;
showHideSideBar() {
throw new Error('Method not implemented.');
}
openPopup() {
throw new Error('Method not implemented.');
}
getSparkleStyle(_t34: number) {
throw new Error('Method not implemented.');
}
isSidebarVisible: any;
toggleAiMode($event: Event) {
throw new Error('Method not implemented.');
}

}
