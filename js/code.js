$(document).ready(function(){
    init();
});

function init(){
    // DONNEES
        // différentes couleurs disponible
        idCouleur = new Array();
        idCouleur[0] = ["rouge","#f43d3d"];
        idCouleur[1] = ["vert","#91ef9e"];
        idCouleur[2] = ["bleu","#5198f9"];

        // différentes tailles disponibles
        idTaille = new Array();
        idTaille[0] = [15,'petite'];
        idTaille[1] = [30,'moyenne'];
        idTaille[2] = [45,'grande'];

        // [0] couleur // [1] taille
        listeNiveaux = new Array();
        listeNiveaux[0] = [0,2]; // rouge grand
        listeNiveaux[1] = [1,2];
        listeNiveaux[2] = [0,1];
        listeNiveaux[3] = [1,1];
        listeNiveaux[4] = [2,0];
        

        // [0] idNiveau // [1] couleur // [2] taille // [3] x // [4] vitesse // [5] y // [6] visible (1 = visible)
        listeBalles = new Array();
        // Niveau 1
        listeBalles[0] = [0,2,1,300,1,-500,1]; // niveau 0 // couleur bleu // moyenne // position.X 300 // vitesse 1 // position.Y -400 // visible
        listeBalles[1] = [0,1,2,150,1,-300,1]; // niveau 0 // couleur vert // grande // position.X 150 // vitesse 1 // position.Y -200 // visible
        listeBalles[2] = [0,2,0,230,1,-210,1];
        listeBalles[3] = [0,0,1,200,1,-380,1];
        listeBalles[4] = [0,0,2,100,1,-150,1];
        listeBalles[5] = [0,0,2,400,1,-450,1];
        listeBalles[6] = [0,2,1,340,1,-350,1];
        listeBalles[7] = [0,0,0,300,1,-200,1];
        listeBalles[8] = [0,0,0,50,1,-310,1];
        listeBalles[9] = [0,0,0,460,1,-110,1];
        listeBalles[10] = [0,2,2,129,1,-475,1];
        listeBalles[11] = [0,0,1,430,1,-260,1];
        listeBalles[12] = [0,1,0,300,1,-285,1];
        listeBalles[13] = [0,2,1,243,1,-310,1];
        listeBalles[14] = [0,2,0,29,1,-110,1];

        
        // Niveau 2
        listeBalles[15] = [1,1,2,100,1.5,-450,1];
        listeBalles[16] = [1,2,2,150,1.5,-350,1];
        listeBalles[17] = [1,1,2,150,1.5,-200,1];
        listeBalles[18] = [1,1,2,280,1.5,-400,1];
        listeBalles[19] = [1,0,1,280,1.5,-190,1];
        listeBalles[20] = [1,0,1,400,1.5,-500,1];
        listeBalles[21] = [1,2,1,400,1.5,-400,1];
        listeBalles[22] = [1,0,1,260,1.5,-300,1];
        listeBalles[23] = [1,0,1,50,1.5,-280,1];
        listeBalles[24] = [1,0,0,460,1.5,-160,1];
        listeBalles[25] = [1,2,0,60,1.5,-370,1];
        listeBalles[26] = [1,2,1,430,1.5,-310,1];
        listeBalles[27] = [1,1,2,370,1.5,-240,1];
        listeBalles[28] = [1,0,0,350,1.5,-360,1];
        listeBalles[29] = [1,0,0,29,1.5,-160,1];

        // Niveau 3
        listeBalles[30] = [2,0,1,80,2,-400,1];
        listeBalles[31] = [2,1,0,150,2,-400,1];
        listeBalles[32] = [2,2,0,270,2,-280,1];
        listeBalles[33] = [2,1,1,170,2,-300,1];
        listeBalles[34] = [2,0,1,350,2,-270,1];
        listeBalles[35] = [2,0,1,420,2,-450,1];
        listeBalles[36] = [2,2,0,340,2,-500,1];
        listeBalles[37] = [2,0,0,260,2,-350,1];
        listeBalles[38] = [2,2,0,50,2,-330,1];
        listeBalles[39] = [2,1,0,460,2,-260,1];
        listeBalles[40] = [2,2,2,130,2,-500,1];
        listeBalles[41] = [2,2,2,430,2,-330,1];
        listeBalles[42] = [2,1,0,350,2,-350,1];
        listeBalles[43] = [2,1,2,250,2,-550,1];
        listeBalles[44] = [2,0,2,60,2,-260,1];

        // Niveau 4
        listeBalles[45] = [3,1,2,400,2.5,-350,1];
        listeBalles[46] = [3,0,0,450,2.5,-400,1];
        listeBalles[47] = [3,2,2,380,2.5,-450,1];
        listeBalles[48] = [3,1,1,290,2.5,-460,1];
        listeBalles[49] = [3,0,1,320,2.5,-380,1];
        listeBalles[50] = [3,2,0,290,2.5,-330,1];
        listeBalles[51] = [3,0,2,220,2.5,-325,1];
        listeBalles[52] = [3,1,0,250,2.5,-400,1];
        listeBalles[53] = [3,2,1,210,2.5,-450,1];
        listeBalles[54] = [3,1,1,150,2.5,-380,1];
        listeBalles[55] = [3,1,1,80,2.5,-350,1];
        listeBalles[56] = [3,2,0,130,2.5,-330,1];
        listeBalles[57] = [3,0,2,100,2.5,-450,1];
        listeBalles[58] = [3,1,1,165,2.5,-500,1];
        listeBalles[59] = [3,2,0,30,2.5,-390,1];
 
        // Niveau 5
        listeBalles[60] = [4,0,2,245,3,-450,1];
        listeBalles[61] = [4,2,0,300,3,-380,1];
        listeBalles[62] = [4,2,0,100,3,-550,1];
        listeBalles[63] = [4,2,0,400,3,-500,1];
        listeBalles[64] = [4,2,0,280,3,-580,1];
        listeBalles[65] = [4,1,1,330,3,-430,1];
        listeBalles[66] = [4,2,1,330,3,-500,1];
        listeBalles[67] = [4,1,2,220,3,-550,1];
        listeBalles[68] = [4,0,1,420,3,-420,1];
        listeBalles[69] = [4,0,2,60,3,-400,1];
        listeBalles[70] = [4,1,1,150,3,-460,1];
        listeBalles[71] = [4,0,0,80,3,-480,1];
        listeBalles[72] = [4,0,1,400,3,-580,1];
        listeBalles[73] = [4,1,0,190,3,-370,1];
        listeBalles[74] = [4,2,1,120,3,-350,1];

    // VARIABLES
        ecranCourant = "Accueil";
        nbPointObtenue = 0;
        nbPointTotal = 0;
        niveauCourant = 0;

        
        idNiveauCourant = 0;
        nbBallesDessinees = 0;

        tpslimite = 60; // 60secondes
        tpsdejeu = 0;
        deplacement = 0;
        
        //variable de consigne 
        couleurBalles = 0;
        tailleBalles = 2;

        
    
    
    
    // STRUCTURE

        //Jeu
        $('#niveau').append('Niveau ' + (niveauCourant+1) + " sur " + listeNiveaux.length);
        //$('#consigne').append("Cliquez sur les balles de couleur <span class=\"" + couleurBalles +"\">" + couleurBalles + "</span> et de <span class=\"" + tailleBalles + "\">" + tailleBalles + "</span> tailles.");
        
        //Bilan
        $('#recap').append("Votre score est de " + nbPointObtenue + "/" + nbPointTotal);

    // Animation jeu
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    // Animation Consigne
    consigneCanvas = document.getElementById('canvasConsigne');
    consigneCtx = consigneCanvas.getContext('2d');
        
    // GESTIONNAIRES
    canvas.addEventListener("click", clicCanvas, false);
    // REGLES
    document.onselectstart = (e) => { e.preventDefault() }
    
    // LANCEMENT
    Accueil();
}


// Affichage de l'accueil
function Accueil(){
    $('#accueil').show();
    $('#jeu').hide();
    $('#bilan').hide();
    ecranCourant = "Accueil";
}

// Lancement du jeu
function Jeu(){
    // Réinitialisation des variables / tableau
    for(let m = 0; m < listeBalles.length; m++){
        listeBalles[m][6] = 1;
    }

    tpsdejeu = 0;
    niveauCourant = 0;
    nbBallesDessinees = 0;
    deplacement = 0;

    nbPointObtenue = 0;
    nbPointTotal = 0;

    //Affichage de la page jeu
    $('#accueil').hide();
    $('#jeu').show();
    $('#bilan').hide();
    ecranCourant = "Jeu";

    // Lancement de l'animation
    inter = setInterval(regle,1); // fonction regle() chaque 1ms
    JeuEnCours = setInterval(timer,1000); // Incrémente le temps de jeu de 1s

    // Création de la première consigne et de l'affichage du niveau
    couleurBalles = idCouleur[listeNiveaux[0][0]][0];
    tailleBalles = idTaille[listeNiveaux[0][1]][1];
    //$('#consigne').html("Cliquez sur les balles de couleur <span class=\"" + couleurBalles +"\">" + couleurBalles + "</span> et de <span class=\"" + tailleBalles +"\">"+ tailleBalles + "</span> tailles.");
    $('#niveau').text('Niveau ' + (niveauCourant+1) + " sur " + listeNiveaux.length);
    consigneDessinees()
}

// Affichage du bilan
function Bilan(){
    $('#accueil').hide();
    $('#jeu').hide();
    $('#bilan').show();
    ecranCourant = "Bilan";

    // Compte les points et l'affiche à l'utilisateur
    ComptagePoint();
    $('#recap').text("Votre score est de " + nbPointObtenue + "/" + nbPointTotal);
    
}

// Anime le jeu tant que l'utilisateur est dans l'écran jeu
function regle(){
    if (ecranCourant == "Jeu"){
        Animer();
    }
    else{
        clearInterval(JeuEnCours);
        clearInterval(inter);
    }
}

function timer(){
    tpsdejeu += 1;
}

// Création des balles
function dessineBalles(idBalle){
    if(listeBalles[idBalle][6]==1){
        ctx.save();
        
        //stock les données
        R = idTaille[listeBalles[idBalle][2]][0];
        V = listeBalles[idBalle][4];
        x = listeBalles[idBalle][3];
        y = listeBalles[idBalle][5];

        // déplace l'origine'
        ctx.translate(0,deplacement);

        //Création de la balle en fonction de l'origine
        ctx.beginPath();
        ctx.arc(x, y, R, 0, 2 * Math.PI, false);

        //Couleur de la balle
        ctx.fillStyle = idCouleur[listeBalles[idBalle][1]][1];
        ctx.fill();
        ctx.restore();
    }
}



// Fonction d'animation du jeu
function Animer(){
    // Temps limite du jeu
    if(tpsdejeu > tpslimite){
        Bilan();
    }
    else{
        nbBallesDessinees = 0;
        // supprime les anciens dessins du canvas
        ctx.clearRect(0,0, canvas.width,canvas.height);
        // Pour chaque balle
        for(let j = 0; j<listeBalles.length; j++){
            // Dessine toute les balles du niveau, uniquement celle non cliqué et qui se trouve au dessus de la limite du canvas
            if(listeBalles[j][0] == niveauCourant && listeBalles[j][6] != 0 && (listeBalles[j][5]+deplacement)<445){
                // Dessine la balle et compte le nombre de balle dessiné
                dessineBalles(j);
                nbBallesDessinees++;
            }
            if(listeBalles[j][0] == niveauCourant){
                deplacement += V/50;
            }
        }
        // Si aucune balle n'est dessiné
        if (nbBallesDessinees == 0)
        {
            deplacement = 0;
            //change de niveau 
            niveauCourant++;
            
            // si le niveau est égale à 5
            if (niveauCourant == 5)
            {
                // Alors fin du jeu et affiche l'écran bilan
                Bilan();
            }
            else{
                // Sinon changement de niveau et change la consigne et le niveau écris

                couleurBalles= idCouleur[listeNiveaux[niveauCourant][0]][0]; // Couleur du niveau Courant
                tailleBalles= idTaille[listeNiveaux[niveauCourant][1]][1]; // taille du niveau Courant
                // Création de la nouvelle consigne pour l'utilisateur
                $('#niveau').text('Niveau ' + (niveauCourant+1) + " sur " + listeNiveaux.length);
                $('#consigne').html("Cliquez sur les balles de couleur <span class=\"" + couleurBalles +"\">" + couleurBalles + "</span> et de <span class=\"" + tailleBalles +"\">"+ tailleBalles + "</span> tailles.");
                consigneDessinees()
            }
        }
    }
}

// Créer la boule correspondante pour le petit carré de la consigne
function consigneDessinees(){
    
    consigneCtx.save();
    
    consigneCtx.clearRect(0,0,consigneCanvas.width,consigneCanvas.height);

    tailleConsigneDessin = idTaille[listeNiveaux[niveauCourant][1]][0];
    couleurConsigneDessin = idCouleur[listeNiveaux[niveauCourant][0]][1];

    console.log("------------------------------")
    console.log("Niveau actuel :" +niveauCourant);
    console.log("rayon de la balle : " + tailleConsigneDessin );
    console.log("Couleur de la balle : " + couleurConsigneDessin)
    //Création de la balle
    consigneCtx.beginPath();
    consigneCtx.arc(50, 50, tailleConsigneDessin, 0, 2 * Math.PI, false);

    //Couleur de la balle
    consigneCtx.fillStyle = couleurConsigneDessin;
    consigneCtx.fill();
    consigneCtx.restore();
}

// fonction pour compter les points
function ComptagePoint(){
    // pour chaque niveau de jeu
    for(let i = 0; i < listeNiveaux.length; i++){
        // déclaration de variable
        idNiveauCourant = i;
        // Recupère les différentes consignes de chaque niveau
        idCouleurNiveauCourant = listeNiveaux[i][0]; 
        idTailleNiveauCourant = listeNiveaux[i][1];

        for(let o = 0; o<listeBalles.length; o++){
            // Pour chaque balle du niveau Courant
            if(listeBalles[o][0] == idNiveauCourant){
                // teste la consigne 
                if((idCouleurNiveauCourant == listeBalles[o][1]) && (idTailleNiveauCourant == listeBalles[o][2])){
                    // Compte le nombre de balle qui respecte la consigne
                    nbPointTotal++;
                    // et le nombre de bonne balle qui a été cliqué par l'utilisateur
                    if(listeBalles[o][6] != 1){
                        nbPointObtenue++; // gain de point
                    }
                }  
                else{
                    // Si la mauvaise balle est cliquée
                    if(listeBalles[o][6] != 1)
                    {
                        nbPointObtenue--; // perte de point
                    }
                }  // [0] idNiveau // [1] couleur // [2] taille // [3] x // [4] vitesse // [5] y // [6] visible (1 = visible)
            }
        }
    }
}


// fonction click
function clicCanvas(e){
    // Position de la souris / document
    var xSourisDocument = e.pageX;
    var ySourisDocument = e.pageY;
    
    // Position du canvas / document
    var xCanvas = canvas.offsetLeft;
    var yCanvas = canvas.offsetTop;
    
    // Position de la souris / canvas
    xSourisCanvas = xSourisDocument - xCanvas;
    ySourisCanvas = ySourisDocument - yCanvas;

    // test si un cercle est cliqué
    for (var c=0; c<listeBalles.length; c++){
        // récupère le rayon du cercle
        var R = idTaille[listeBalles[c][2]][0];
        // Si la souris est dans le rayon d'un cercle ET que ce cercle n'a pas encore été cliqué ET qu'il fait parti du niveau
        if(Math.abs(listeBalles[c][3] - xSourisCanvas) < R && Math.abs(listeBalles[c][5] - ySourisCanvas + deplacement)<R && listeBalles[c][6] != 0 && listeBalles[c][0] == niveauCourant){
            // Alors il deviens invisible
            console.log(c)
            listeBalles[c][6]=0;
            break;
        }
    }
}
  // [0] idNiveau // [1] couleur // [2] taille // [3] x // [4] vitesse // [5] y // [6] visible (1 = visible)