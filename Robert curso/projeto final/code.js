function verificarsangue(){
    var sangue = document.getElementById("sangue")
    var peso = document.getElementById("peso")
    var idade = document.getElementById("idade")
    console.log(sangue)
    console.log(peso.value)
    console.log(idade)
   if(sangue.value == "A+" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
    document.write("Pode doar para: AB+ e A+ <br> Pode receber doação de: A+, A-, O+ e O- <br>")
    document.write("agora um pouco sobre seu tipo sanguinio: <br> sangue A: é um dos tipos mais comuns e contém anticorpos contra o tipo B, também chamado de anti-B, só podendo receber sangue de pessoas do tipo A ou O;")


    }else if(sangue.value == "A-" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: A+, A-, AB+ e AB- <br> Pode receber doação de: A- e O- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue A: é um dos tipos mais comuns e contém anticorpos contra o tipo B, também chamado de anti-B, só podendo receber sangue de pessoas do tipo A ou O;")


    }else if(sangue.value == "B+" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: B+ e AB+ <br> Pode receber doação de: B+, B-, O+ e O- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue B: é um dos tipos mais raros e contém anticorpos contra o tipo A, também chamado de anti-A, só podendo receber sangue de pessoas do tipo B ou O;")

    }else if(sangue.value == "B-" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: B+, B-, AB+ e AB- <br> Pode receber doação de: B- e O- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue B: é um dos tipos mais raros e contém anticorpos contra o tipo A, também chamado de anti-A, só podendo receber sangue de pessoas do tipo B ou O;")


    }else if(sangue.value == "AB+" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: AB+ <br> Pode receber doação de: A+, B+, O+, AB+, A-, B-, O- e AB- (todos) <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue AB: é um dos tipos mais raros e não possui anticorpos contra A ou B, o que significa que pode receber sangue de todos os tipos sem que haja reação;")


    }else if(sangue.value == "AB-" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: AB+ e AB- <br> Pode receber doação de: A-, B-, O- e AB- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue AB: é um dos tipos mais raros e não possui anticorpos contra A ou B, o que significa que pode receber sangue de todos os tipos sem que haja reação;")


    }else if(sangue.value == "O+" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: A+, B+, O+ e AB+ <br> Pode receber doação de: O+ e O- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue O: é conhecido como o doador universal e é um dos tipos mais comum, possui anticorpos anti-A e anti-B, só podendo receber sangue de pessoas do tipo O, caso contrário pode a aglutinação das hemácias.")


    }else if(sangue.value == "O-" && peso.value >= 50 && idade.value >= 16 && idade.value < 69){
        document.write("Pode doar para: A+, B+, O+, AB+, A-, B-, O- e AB- (todos) <br> Pode receber doação de: O- <br>")
        document.write("agora um pouco sobre seu tipo sanguinio: <br> Sangue O: é conhecido como o doador universal e é um dos tipos mais comum, possui anticorpos anti-A e anti-B, só podendo receber sangue de pessoas do tipo O, caso contrário pode a aglutinação das hemácias.")


    }else{
        document.write("Você não pode doar sangue, os requisitos minimos são ter idade entre 16 e 69 e pesar mais de 50")

    }
}
    
  