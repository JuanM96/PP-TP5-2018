import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Toast } from '@ionic-native/toast';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  listaDeGrabado = [];
  recordSounds:boolean = false;
  cantAudiosGrabados:number = 0;
  maxAudios = 5;
  botonCambiaFondo = 0;
  boton1:boolean = true;
  boton2:boolean = true;
  boton3:boolean = true;
  boton4:boolean = true;
  boton5:boolean = true;
  boton6:boolean = true;
  reproducirLista:boolean = false;
  changeHtml = false;
  constructor(public navCtrl: NavController,public toast:Toast,public app:App,private auth: AuthService,private nativeAudio: NativeAudio,private screenOrientation: ScreenOrientation) {
    //this.listaDeGrabado = new Array();
    this.observeScreenOrientation();
    this.nativeAudio.preloadSimple('i1', 'assets/mp3/banda/guitar.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i2', 'assets/mp3/banda/drum.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i3', 'assets/mp3/banda/flute.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i4', 'assets/mp3/banda/xylo.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i5', 'assets/mp3/banda/violin.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
    this.nativeAudio.preloadSimple('i6', 'assets/mp3/banda/trumpet.mp3').then(()=>console.log("Todo Okey Cargando el audio"), (error) => console.info(error));
  }
  public observeScreenOrientation(){
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation Changed: "+this.screenOrientation.type);
          if (this.screenOrientation.type == "landscape-primary") {
            this.changeHtml = true;
          }
          else{
            this.changeHtml = false;
          }
      }
   );
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  public reproducir(num){
    switch (num) {
      case num = 1:
        if (this.reproducirLista) {
          this.boton1 = false;
        }
        this.nativeAudio.play('i1', () => this.boton1 = true);
      break;
      case num = 2:
        if (this.reproducirLista) {
          this.boton2 = false;
        }  
        this.nativeAudio.play('i2', () => this.boton2 = true);      
      break;
      case num = 3:
        if (this.reproducirLista) {
          this.boton3 = false;
        }
        this.nativeAudio.play('i3', () => this.boton3 = true);      
      break;
      case num = 4:
        if (this.reproducirLista) {
          this.boton4 = false;
        }
        this.nativeAudio.play('i4', () => this.boton4 = true);      
      break;
      case num = 5:
        if (this.reproducirLista) {
          this.boton5 = false;
        }
        this.nativeAudio.play('i5', () => this.boton5 = true);      
      break;
      case num = 6:
        if (this.reproducirLista) {
          this.boton6 = false;
        }
        this.nativeAudio.play('i6', () => this.boton6 = true);      
      break;
      default:
        break;
    }
  }
  public reproducirGrabacion(){
    let progress = 0;
    this.reproducirLista = true;
    /*this.listaDeGrabado.forEach(idAudio => {
      setTimeout(() => {

      }, 1500);
      
    });*/
    let interval = window.setInterval(() => { 
      console.log("Reproducir = "+this.listaDeGrabado[progress]);
      this.botonCambiaFondo = this.listaDeGrabado[progress];
      this.reproducir(this.listaDeGrabado[progress]);
      progress = progress+1;
      if (progress == 5) {
        this.botonCambiaFondo = 0;
        this.reproducirLista = false;
        window.clearInterval(interval);
      }
    }, 1500);
  }
  public showDone(msg){
    console.log(msg);
  }
  public grabar(num:number){
    switch (num) {
      case num = 1:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(1);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('1', () => this.showDone('dog is done playing'));
      break;
      case num = 2:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(2);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('2', () => this.showDone('cat is done playing'));      
      break;
      case num = 3:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(3);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('3', () => this.showDone('sheep is done playing'));      
      break;
      case num = 4:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(4);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('4', () => this.showDone('horse is done playing'));      
      break;
      case num = 5:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(5);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('5', () => this.showDone('duck is done playing'));      
      break;
      case num = 6:
        if (this.cantAudiosGrabados < 5) {
          this.listaDeGrabado.push(6);
          this.cantAudiosGrabados = this.cantAudiosGrabados + 1;
          this.showToast("Seleccione "+(this.maxAudios - this.cantAudiosGrabados)+" audios mas! o pare la grabacion");
        }
        else{
          this.showToast("Usted Alcanzo el Limite de Audios (5)");
          this.recordSounds = false;
        }
        //this.nativeAudio.play('6', () => this.showDone('turkey is done playing'));      
      break;
      default:
        break;
    }
  }
  public empezarPausarGrabacion(){
    if (!this.recordSounds) {
      this.listaDeGrabado = new Array();
      this.cantAudiosGrabados = 0;
    }
    this.recordSounds = !this.recordSounds
    console.log(this.recordSounds);
  }
  showToast(msg){
    this.toast.show(msg, '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}