import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodMunch';
  ngAfterViewInit(): void {
    const links = document.querySelectorAll('.nav-link-close');
    const nav = document.getElementById('navbarNavAltMarkup');

    links.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(nav!, { toggle: false });
        bsCollapse.hide();
      });
    });
  }
}
