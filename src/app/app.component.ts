import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-quiz';

  constructor(private router: Router, private loadingService: LoadingService) {
    this.router.events.subscribe((routerEvent) => {
        this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent:any): void {
    if (routerEvent instanceof NavigationStart) {
      this.loadingService.show();
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loadingService.hide();
    }
  }
}
