/**
 * try / catch
 */

<!DOCTYPE html>
<html>
    <head>
        <title>Gestion des erreurs en JavaScript</title>
        <meta charset="utf-8">   
    </head>
    <body>
        <h1>Try... throw... catch</h1>
        <label for='nb'>Entrez un nombre entre 1 et 10 : </label>
        <input type='number' min='1' max='10' id='nb'>
        <button type='button' id='test'>Valider</button>
        <p id='msg'></p>
        <script>
            var b = document.getElementById('test');
            b.addEventListener('click', testValeur);
            
            function testValeur(){
                var p = document.getElementById('msg');
                var x = document.getElementById('nb').value;
                //On teste la valeur envoyée
                try{
                    //Si ce n'est pas un nombre ou si elle est vide...
                    if ((isNaN(x)) || (x =='')) {
                        //On lance une exception avec le message ci-dessous
                        throw 'Vous n\'avez pas envoyé de nombre';
                    }
                    //Si le nombre n'est pas dans l'intervalle
                    else if ((x < 1) || (x > 10)) {
                        //On lance à nouveau une exception avec un autre message
                        throw 'Valeur trop grande ou trop petite';
                    }
                    else{
                        msg.innerHTML = 'Nombre ok';
                    }
                }
                /*Si une exception a été lancée, on la récupère dans "e" et on
                 *affiche le message d'erreur correspondant dans notre paragraphe*/
                catch(e){
                    msg.innerHTML = e;
                }
                /*Dans tous les cas, on efface la valeur inscrite avant l'envoi. Pour
                 *réinitialiser la valeur du champ, on ne peut pas utiliser 'x'*/
                finally{
                    document.getElementById('nb').value = '';
                }}   
        </script>
    </body>
</html>
