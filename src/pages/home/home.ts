import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public app:App,private auth: AuthService,private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('1', 'assets/mp3/animales/dog.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('2', 'assets/mp3/animales/cat.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('3', 'assets/mp3/animales/sheep.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('4', 'assets/mp3/animales/horse.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('5', 'assets/mp3/animales/duck.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('6', 'assets/mp3/animales/turkey.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  public reproducir(num){
    switch (num) {
      case num = 1:
        this.nativeAudio.play('1', () => this.showDone('dog is done playing'));
      break;
      case num = 2:
        this.nativeAudio.play('2', () => this.showDone('cat is done playing'));      
      break;
      case num = 3:
        this.nativeAudio.play('3', () => this.showDone('sheep is done playing'));      
      break;
      case num = 4:
        this.nativeAudio.play('4', () => this.showDone('horse is done playing'));      
      break;
      case num = 5:
        this.nativeAudio.play('5', () => this.showDone('duck is done playing'));      
      break;
      case num = 6:
        this.nativeAudio.play('6', () => this.showDone('turkey is done playing'));      
      break;
    
      default:
        break;
    }
  }
  public showDone(msg){
    console.log(msg);
  }
}
