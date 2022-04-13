class Noticia {
  constructor(titulo, datadepublicacao, resumo, texto){
    this.titulo = titulo;
    this.data = datadepublicacao;
    this.resumo = resumo;
    this.texto = texto;
  }

  mostrarNoticia(){
    return this.titulo + "\n" + this.data + "\n" + this.resumo + "\n" + this.texto;
  }
}

class NoticiaDestaque extends Noticia{
  constructor(imagem, titulo, datadepublicacao, resumo, texto){
    super(titulo, datadepublicacao, resumo, texto)
    this.imagem = imagem;
  }

  mostrarDestaque(){
    return this.imagem + "\n" + this.titulo + "\n" + this.data + "\n" + this.resumo + "\n\n" + this.texto;
  }
}

let noticia = new NoticiaDestaque("https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.tudogostoso.com.br%2Fcardapios%2Fcomida-de-vo-5-receitas-faceis-e-gostosas%2F&psig=AOvVaw32VrR4GjmlLZpkfXlQbyRa&ust=1649946403328000&source=images&cd=vfe&ved=0CAcQjRxqFwoTCIjx0cKfkfcCFQAAAAAdAAAAABAE", "comida", "23/03/2022", "if vai da comida", "ifms vai destribuir comida para todos os alunos nessa quarta-feira.");
console.log(noticia.mostrarDestaque())