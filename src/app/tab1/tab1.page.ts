import { Component } from '@angular/core';
import { listAll, ref, getDownloadURL, Storage } from '@angular/fire/storage';

import { doc, collection, setDoc, Firestore, collectionData, getDocs} from '@angular/fire/firestore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],


})
export class Tab1Page {

  ficcao:any=[]
  filmes:any=[]
  destaque:any=[]
  classico:any=[]
  real:any=[]
  romance:any=[]
  produto: any = []
  presentingElement:any = null;
  imagemFilme=''
  isModalOpen = false;

  setOpen(isOpen: boolean, imagem:any, fTitulo: any, fDescricao: any, fCategoria: any, iImagem: any){
    this.imagemFilme=imagem
    this.isModalOpen = isOpen;        
    this.produto[0] = { titulo: fTitulo, descricao: fDescricao, categoria: fCategoria, imagem: iImagem }
  }
  ngOnInit() {
    // listAll(ref(this.af, 'Ficção Científica')).then(imgs => {
    //   imgs.items.forEach((im) => {
    //     getDownloadURL(im).then((res) => {
    //       console.log(res)
    //       this.ficcao.push(res)
    //     })
    //   })
    // })


      this.presentingElement = document.querySelector('.ion-page');

      this.listar()
      this.listar2()
      this.listar3()
      this.listar4()
      this.listar5()
  }
  async listar(){
    const querySapshop=await getDocs(collection(this.firestore, 'acao'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.filmes=[...this.filmes,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  async listar2(){
    const querySapshop=await getDocs(collection(this.firestore, 'destaque'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.destaque=[...this.destaque,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  async listar3(){
    const querySapshop=await getDocs(collection(this.firestore, 'classico'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.classico=[...this.classico,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  async listar4(){
    const querySapshop=await getDocs(collection(this.firestore, 'real'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.real=[...this.real,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  async listar5(){
    const querySapshop=await getDocs(collection(this.firestore, 'romance'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.romance=[...this.romance,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  constructor(private af:Storage, private firestore:Firestore) {}

}
