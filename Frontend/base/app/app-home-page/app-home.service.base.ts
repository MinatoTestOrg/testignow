import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "id" : "HOME_PAGE",
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "outline" : false,
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "7da6b91c-8e44-49aa-89ad-79daf899840d",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile1",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "1f5d404a-b6f1-4c3c-bd96-9ec8c9beff61",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile2",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "db3415be-3c23-4920-a6f2-48fdaeff9c7b",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile3",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "1a3efce9-e803-4cb2-a35e-6657f9e1130d",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 4",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile4",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 4",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "653feb0c-56cb-476f-baf6-f961a5c7df96",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 5",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile5",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 5",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "730186e7-76c1-44d0-8d27-f974d7aa6bb1",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 6",
          "accessControl" : [ "0fa05bec-79d0-4b9e-a544-311fe2bf8729" ],
          "data" : "homeTile6",
          "field" : "homeTile",
          "outline" : false,
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 6",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}