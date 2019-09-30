import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }

  test(){
    let option:BarcodeScannerOptions = {
      resultDisplayDuration:0,
      formats:"QR_CODE"
    };
    this.barcodeScanner.scan().then(barcodeData => {
      alert("识别成功")
     }).catch(err => {
         alert("识别失败");
     });
  }

}
