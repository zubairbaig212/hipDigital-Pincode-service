import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    // {
    //   link: "/pincode",
    //   icon: "disc",
    //   menu: "Pincode",
    // },
    {
      link: "/create-pincode-serial",
      icon: "disc",
      menu: "Pincode",
    },
    {
      link: "/activate-pincode",
      icon: "info",
      menu: "Activate Pincode",
    },
    {
      link: "/get-pincode-list",
      icon: "file-text",
      menu: "Mangage Promotion",
    },
    {
      link: "/pincode-detail",
      icon: "menu",
      menu: "Pincode Validation",
    },
    {
      link: "/custom-pincode",
      icon: "grid",
      menu: "Custom Pincode Ingestion",
    },
    {
      link: "/expansion",
      icon: "divide-circle",
      menu: "Manage Childsite Promotions",
    },
    {
      link: "/table",
      icon: "award",
      menu: "Table",
    },
    // {
    //   link: "/forms",
    //   icon: "list",
    //   menu: "Forms",
    // },
  ]

}
