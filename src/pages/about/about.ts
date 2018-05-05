import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public app:App,private auth: AuthService,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('i1', 'assets/mp3/banda/guitar.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i2', 'assets/mp3/banda/drum.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i3', 'assets/mp3/banda/flute.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i4', 'assets/mp3/banda/xylo.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i5', 'assets/mp3/banda/violin.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i6', 'assets/mp3/banda/trumpet.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  public reproducir(num){
    switch (num) {
      case num = 1:
        this.nativeAudio.play('i1', () => this.showDone('dog is done playing'));
      break;
      case num = 2:
        this.nativeAudio.play('i2', () => this.showDone('cat is done playing'));      
      break;
      case num = 3:
        this.nativeAudio.play('i3', () => this.showDone('sheep is done playing'));      
      break;
      case num = 4:
        this.nativeAudio.play('i4', () => this.showDone('horse is done playing'));      
      break;
      case num = 5:
        this.nativeAudio.play('i5', () => this.showDone('duck is done playing'));      
      break;
      case num = 6:
        this.nativeAudio.play('i6', () => this.showDone('turkey is done playing'));      
      break;
    
      default:
        break;
    }
  }
  public showDone(msg){
    console.log(msg);
  }
}
