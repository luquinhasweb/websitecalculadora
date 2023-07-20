function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
  }
    function somar(nota1, peso1, nota2, peso2){
      var media = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2);
      Logger.log('Media :'+ media)
    }
  
  