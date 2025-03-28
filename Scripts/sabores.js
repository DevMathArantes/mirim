//Categorias de produtos

let SABORES=[
    "sabores",
    "16058 FLOCAO DE MILHO SINHA 20X500GR/FD",
    "19701 UVA PASSA PRETA SACHE TOZZI 24X70GR/12",
    "17953 FERMENTO BIOLOGICO SACHE KININO 30X10G /DP",
    "00136 FERMENTO EM PO ROYAL 12X100GRS/DZ",
    "19847 ADOCANTE LIQUIDO ZERO CAL 12X100ML/CX",
    "00463 ALHO IMPERADOR 1X200GR /5",
    "13855 AMIDO DE MILHO MAISCERTA 24X500GR/ 12",
    "13434 AMIDO DE MILHO MAISCERTA 48X200GR/ 12",
    "00293 AMIDO DE MILHO MAIZENA 50X200GRS /10",
    "10278 CALDO DE CARNE ARISCO 24X19GR /CT",
    "17797 CALDO DE CARNE KNORR 10X57GR /CX",
    "00124 CALDO DE GALINHA CAIPIRA ARISCO 24X19GR/CT",
    "00125 CALDO DE GALINHA KNORR 24X19GR /CT",
    "01622 COCO RALADO INDIANO ADOCADO 24X100GR /CX",
    "00285 COCO RALADO INDIANO ADOCADO 50X50GRS /CX",
    "15260 CREME CULINARIO TRIANGULO 27X200GR /9",
    "00580 CREME DE LEITE PIRACANJUBA 27X200GR /9",
    "02215 CUSCUZ PRECOZIDO SINHA 30X500GR /10",
    "00010 ESPEC.BICARBONATO PANCADA 10X17GR/CT",
    "00337 ESPEC.CAMOMILA PANCADA 10X3GR/CT",
    "00338 ESPEC.CANELA EM CASCA PANCADA 10X3GR/CT",
    "00104 ESPEC.CANELA EM PO PANCADA 10X8GR/CT",
    "00196 ESPEC.COLORAL PANCADA 10X17GR/CT",
    "00361 ESPEC.CRAVO PANCADA 10X3GR/CT",
    "00342 ESPEC.ERVA DOCE PANCADA 10X2GR/CT",
    "01216 ESPEC.LOURO FOLHA PANCADA 10X2GR/CT",
    "00343 ESPEC.OREGANO PANCADA 10X3GR/CT",
    "19467 ESPEC.PAPRICA DOCE PANCADA 10X13GR/CT",
    "19469 ESPEC.PAPRICA PICANTE PANCADA 10X13GR/CT",
    "13326 ESPEC.PIMENTA CALABRESA PANCADA 10X7GR/PC",
    "00344 ESPEC.PIMENTA DO REINO MOIDA PANCADA 10X7GR/CT",
    "00434 ESPEC.SAL AMONIACO PANCADA 10X17GR/CT",
    "00132 EXTRATO TOM. ELEFANTE 24X310GR/12",
    "00133 EXTRATO TOM. ELEFANTE 48X130GR/24",
    "18325 EXTRATO TOMATE FUGINI SACHE 36X300GR /12",
    "10402 FARINHA DE TRIGO MODENA 10X1KG/FD",
    "14215 FARINHA MAND. BIJU KININO 10X500GR /10",
    "14479 FUBA MIMOSO BERBEL 20X500GR/10",
    "14043 LEITE CONDENSADO PIRACANJUBA TP 27X395GR /9",
    "14117 LEITE DE COCO MENINA 24X200ML /12",
    "00005 MOLHO DE PIMENTA ASTEKA  12X1000ML /UN",
    "10269 MOLHO DE PIMENTA ASTEKA 24X200ML/12",
    "18323 MOLHO T. FUGINI TRAD. SACHE 36X300GR /CX",
    "10437 QUEIJO RALADO ARAXA 10X50GR / 10 ",
    "19609 SAL GROSSO GARCA GRILL 10X1KG/FD",
    "00537 SAL GROSSO PICANHA GRILL 10X1KG/FD",
    "00299 SAL REFINADO CISNE 10X1KG /FD",
    "19607 SAL REFINADO GARCA 30X1/FD",
    "16322 SAL REFINADO MASTER 30X1KG /FD",
    "01408 SAL REFINADO MOC 30X1KG / FD",
    "02001 TEMPERO KODILAR ARROZ 1X48 /12",
    "02017 TEMPERO KODILAR CARNE /PIMENTA 1X48 /12",
    "02008 TEMPERO KODILAR CARNE 1X48 /12",
    "02016 TEMPERO KODILAR CARNE C/ERVAS 1X48 /12",
    "02022 TEMPERO KODILAR FEIJAO  1X48 /12",
    "02018 TEMPERO KODILAR LEGUMES 1X48 /12",
    "02020 TEMPERO KODILAR MASSA 1X48 /12",
    "02105 TEMPERO KODILAR NORDESTE 1X48 /12",
    "02019 TEMPERO KODILAR PEIXES 1X48 /12",
    "02021 TEMPERO KODILAR SALADA 1X48 /12",
    "01717 TEMPERO SAZON SALADA  / 6",
    "00746 TEMPERO SAZON VERMELHO  / 6",
    "10498 VINAGRE CASTELO ALCOOL 12X750ML/CX",
    "00162 VINAGRE CASTELO ALCOOL COLORIDO 12X750ML/CX",
    "19567 VINAGRE CRISTAL DE ALCOOL 12X750ML/CX",
    "19569 VINAGRE CRISTAL DE ALCOOL COLORIDO 12X750ML/CX",
];

//Funções curinga
function get(id) {
    return document.getElementById(id);
}

//Funções principais
function interagirCatalogo(categoria, prateleira){
    let listaAtual = ``;
    for(let i = 1; i < categoria.length; i++){
        listaAtual+=`
            <li class="produto">
                <img src="../Assets/Produtos/${categoria[0]+"/"+categoria[0] + i}.jpg" alt="imagem de produto">
                <h3>${(categoria[i]).slice(6)}</h3>
                <span>${(categoria[i]).slice(0,6)}</span>
            </li>
        `
    }
    get(prateleira).innerHTML=listaAtual;
}

//Script geral
interagirCatalogo(SABORES, 'sabores');