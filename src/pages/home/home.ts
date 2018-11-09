import { Component } from '@angular/core';
import { NavController,ActionSheetController, AlertController } from 'ionic-angular';
import { Page01Page } from "../page01/page01";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {     /* export */

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public Alerts: AlertController) {}
  ActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Informatio your album',
      buttons: [
        {
          text: 'Informatio',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          } 
        }  
      ]
    });
    actionSheet.present();
  }

  ShowAlert(){
    const showalert = this.Alerts.create({
      title : 'Confirm Answer',
      subTitle : 'Name Yas',
      buttons : [{text : 'OK'},{text : 'Cancel',handler : ()=> {console.log("Cancel");}}]
    });
    showalert.present();
  }



}  /* #export */

