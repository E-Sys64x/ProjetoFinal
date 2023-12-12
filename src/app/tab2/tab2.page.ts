import { Component } from '@angular/core';
import { listAll, ref, getDownloadURL, Storage } from '@angular/fire/storage';

import { doc, collection, setDoc, Firestore, collectionData, getDocs} from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],


})
export class Tab2Page {

  ficcao:any=[]
  filmes:any=[]
  romance:any=[]
  terror:any=[]
  produto: any = []
  presentingElement:any = null;
  imagemFilme=''
  isModalOpen = false;

  setOpen(isOpen: boolean, imagem:any, fTitulo: any, fDescricao: any, fCategoria: any, iImagem: any) {
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
      
  }
  async listar(){
    const querySapshop=await getDocs(collection(this.firestore, 'acao'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.filmes=[...this.filmes,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }
  async listar2(){
    const querySapshop=await getDocs(collection(this.firestore, 'ficcao'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.ficcao=[...this.ficcao,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }
  async listar3(){
    const querySapshop=await getDocs(collection(this.firestore, 'romance'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.romance=[...this.romance,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }
  async listar4(){
    const querySapshop=await getDocs(collection(this.firestore, 'terror'))
    querySapshop.forEach((doc)=>{
      console.log(`${doc.id} => ${doc.data()['titulo']}`)
      this.terror=[...this.terror,{titulo:doc.data()['titulo'],descricao:doc.data()['descricao'],categoria:doc.data()['categoria'],imagem:doc.data()['imagem']}]
    })
  }

  constructor(private af:Storage, private firestore:Firestore) {}

}
