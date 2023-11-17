// AQUI ESTÃO OS ITENS DO CARDÁPIO
const cardapio = [
    {
        id: 1,
        nome: "URAMAKI",
        categoria: "frio",
        img: "https://www.sidechef.com/recipe/8f379697-7d39-4f61-a336-fd4134eeee18.jpg?d=1408x1120",
        descricao: "Fatias de sashimi de salmão flambado com toque de gengibre e molho de ostras."
    },
    {
        id: 2,
        nome: "SASHIMI",
        categoria: "frio",
        img: "https://files.menudino.com/cardapios/3150/853.jpg",
        descricao: "Fatias de sashimi de salmão flambado com geleia de pimenta Sweet Chilli."
    },
    {
        id: 3,
        nome: "SUSHI SEDUÇÃO DE MORANGO",
        categoria: "doce",
        img: "https://i.pinimg.com/originals/96/f6/ae/96f6ae83f013c7756f1174e25bb74628.jpg",
        descricao: "Sushi com cobertura de goiabada, recheado de pedaços de morango e cream cheese."
    },
    {
        id: 4,
        nome: "NIGIRI",
        categoria: "frio",
        img: "https://i.pinimg.com/originals/96/f6/ae/96f6ae83f013c7756f1174e25bb74628.jpg",
        descricao: "Bolinha de arroz coberto por fatia de salmão flambado com toque de shoyo, cebolinha e pimenta sriracha."
    },
    {
        id: 5,
        nome: "SUSHI DE CAMARÃO",
        categoria: "frio",
        img: "https://www.djapa.com.br/wp-content/uploads/2022/02/niguiri-de-camarao.jpg",
        descricao: "Sushi preparado com camarão rosa, algas, arroz, cream cheese, pimenta, acompanhado com sakê."
    },
    {
        id: 6,
        nome: "TEMAKI DE SALMÃO",
        categoria:"temaki",
        img: "https://static.itdg.com.br/images/1200-675/18ae281e17d93a23bd399fde3d5481f1/303153-original.jpg",
        descricao: "Sushi enrolado à mão em forma de cone, feito com arroz, algas, salmão, cebolinha e gergelim."
     
    },
    {
        id: 7,
        nome: "URUMAKI DE FILADÉLFIA ",
        categoria: "frio",
        img: "https://receitinhas.com.br/wp-content/uploads/2018/08/Sushi-filadelfia-uramaki-Sabor-na-Mesa-1024x591.jpg",
        descricao: "Sushi preparado com salmão, cream cheese e enrolado com o arroz por fora."
    },
    {
        id: 8,
        nome: "TEKKAMAKI",
        categoria: "frio",
        img: "https://izzycooking.com/wp-content/uploads/2020/06/Tekkamaki-1-683x1024.jpg",
        descricao: "Sushi composto por arroz, algas e atum cru."
    },
    {
        id: 9,
        nome: "HOT FILADÉLFIA ",
        categoria: "quente",
        img: "https://static.itdg.com.br/images/600-600/a92eeb4c33ecd055c881dc20c806e625/hot-filadelfia-como-fazer.jpg",
        descricao: "Sushi quente reparado com salmão, cream cheese, arroz, algas e óleo de gergelim."
    },
    {
        id: 10,
        nome: "MAKI VEGETARIANO ",
        categoria: "frio",
        img: "https://img.freepik.com/fotos-premium/sushi-maki-vegetariano-rolo-feito-de-tomate-pepino-pimentao-folha-de-salada-e-maionese-japonesa_211786-2115.jpg?w=740",
        descricao: "Sushi maki vegetariano feito de tomate, pepino, pimentão, folha de salada e maionese japonesa."
    },
    {
        id: 11,
        nome: "FUTOMAKI DE SALMÃO E ABACATE",
        categoria: "frio",
        img: "https://st2.depositphotos.com/3123063/5365/i/950/depositphotos_53654455-stock-photo-futomaki-salmon-and-avocado-traditional.jpg",
        descricao: "Roll de sushi recheado com fatias de salmão fresco e abacate maduro."
    },
    {
        id: 12,
        nome: "URUMAKI DRAGON ROLL",
        categoria: "frio",
        img: "https://www.foodandwine.com/thmb/7P_lAS3wdjWqine4I-3a550HN9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dragon-Roll-FT-RECIPE0223-5e3d0283beee4921980ad7b5597d85a9.jpg",
        descricao: "Uramaki diferenciado com abacate, pepino e caranguejo, enrolado com fatias de peixe acompanhado do molho teriyaki."
    },
    {
        id: 13,
        nome: "MAKI DE TEMPURA DE CAMARÃO",
        categoria: "frio",
        img: "https://img.freepik.com/fotos-premium/sushi-maki-de-maki-com-tempura-de-camarao_43263-2.jpg?w=2000",
        descricao: "Rolinho de sushi com camarão tempura crocante, abacate e pepino, enrolado com alga e arroz."
    },
    {
        id: 14,
        nome: "URUMAKI DE CAMARÃO PICANTE",
        categoria: "frio",
        img: "https://olo-images-live.imgix.net/1f/1fa68361322746ba9251490918daae48.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=crop&fm=png32&s=93344c041b9395551922c0bb38211f2a",
        descricao: "Uramaki picante com camarão, abacate, pepino e molho picante."
    },
    {
        id: 15,
        nome: "TEMAKI DE ATUM",
        categoria: "temaki",
        img: "https://sachefmio.blob.core.windows.net/fotos/temaki-atum-3423.jpg",
        descricao: "Temaki feito de Alga, atum, arroz, cebolinha e cream cheese."
    },
    {
        id: 16,
        nome: "NIGIRI DE ATUM",
        categoria: "frio",
        img: "https://i.pinimg.com/736x/d3/8e/14/d38e14ca85efbcf71857a8db3d2d61a9.jpg",
        descricao: "Nigiri de atum e arroz."
    },
    {
        id: 17,
        nome: "NIGIRI DE SALMÃO",
        categoria: "frio",
        img: "https://www.allrecipes.com/thmb/fkeqYFLhRaafDi-Dbl8bDPJwrd4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-Is-Nigiri-4x3-79ab72ae4148404d91aa430b701373e5.jpg",
        descricao: "Nigiri de salmão e arroz."
    }
     
];

const sectionCenter = document.querySelector(".section-center");
const botoesFiltro = document.querySelector(".botoesFiltro");
const filtroBotao = document.querySelectorAll(".filtro-botao");

// 
window.addEventListener("DOMContentLoaded", function () {
    exibirItensCardapio(cardapio);
});

// BOTÕES DO FILTRO
filtroBotao.forEach(function (btn) {
    btn.addEventListener("click", function (evento) {
      const categoria = evento.currentTarget.dataset.id;
      const cardapioCategoria = cardapio.filter(function (itensCardapio) {
        if (itensCardapio.categoria === categoria) {
          return itensCardapio;
        }
      });
      // mostra todos os itens do menu que estão dentro do displayMenuItems
      if (categoria === "todos") {
        exibirItensCardapio(cardapio);
      }
      else {
        exibirItensCardapio(cardapioCategoria);
      }
    });
});

function exibirItensCardapio(itensCardapio) {
    let exibirMenu = itensCardapio.map(function (item) {
        return `<article class="cardapio-sushi">
            <img src=${item.img} alt=${item.nome} class="imagem"/>
            <div class="sushi-dados">
                <header>
                    <p>${item.nome}</p>
                </header>
                <p class="sushi-texto">
                    ${item.descricao}
                </p>
            </div>
        </article>`;
    });
    exibirMenu = exibirMenu.join("");

    sectionCenter.innerHTML = exibirMenu;
}

// BARRA DE PESQUISA
const barraPesquisa = document.getElementById("barraPesquisa");

barraPesquisa.addEventListener("input",function (){
    const termoPesquisa = barraPesquisa.value.toLowerCase();
    const cardapioFiltrado = cardapio.filter (item=>
        item.nome.toLowerCase().includes(termoPesquisa) ||
        item.descricao.toLowerCase().includes (termoPesquisa)
    );
    exibirItensCardapio(cardapioFiltrado);
});