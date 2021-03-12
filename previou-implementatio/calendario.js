(function () {
  var app = angular.module("calendario", []); app.controller("celulaController", function () {
    this.descanco = [null, null, null, null, null, null, null]; this.stringTipoTreino = null; this.stringTipoLastTreino = null; this.tamTreino = 0; this.tamLastTreino = 0; this.change = function (valor) {
      if (valor > 7) { var valor2 = valor - 7; $("." + valor2 + " p").text(""); this.descanco[valor2 - 1] = null; if (this.stringTipoTreino !== null) this.montaTreino(this.stringTipoTreino) } else {
        $("." + valor + " p").text("Descan\u00e7o"); this.descanco[valor - 1] = valor;
        if (this.stringTipoTreino !== null) this.montaTreino(this.stringTipoTreino)
      }
    }; this.montaTreino = function (stringTipoTreino) {
      this.stringTipoTreino = stringTipoTreino; this.tamTreino = stringTipoTreino.length; var i = 0; var j = 0; var descanco = this.descanco; var tam = this.tamTreino - 1; $(".celula p").each(function () { if (j > tam) j = 0; if (i > 6) i = 0; if (descanco[i] == null) { $(this).empty(); var insere = $(this).append("<span> {{treino" + stringTipoTreino[j] + "}} </span>"); injeta(insere); j++ } i++ }); if (this.tamTreino > this.tamLastTreino) {
        if (this.tamLastTreino !==
          0) j = this.tamLastTreino; else j = 0; while (j <= tam) { var input = $("#selecao").append('<span id="treino' + stringTipoTreino[j] + '"><label>Treino ' + stringTipoTreino[j] + ': </label><input type="text" ng-model="treino' + stringTipoTreino[j] + '" placeholder="Digite os exercicios Ex: Peito e Tr\u00edceps" size="40"></span>'); injeta(input); j++ }
      } if (this.tamTreino < this.tamLastTreino) {
        j = this.tamLastTreino - this.tamTreino; var ultimo = this.tamLastTreino - 1; while (j > 0) {
          $("#treino" + this.stringTipoLastTreino[ultimo] + "").remove();
          j--; ultimo--
        }
      } this.tamLastTreino = this.tamTreino; this.stringTipoLastTreino = this.stringTipoTreino
    }; var injeta = function (elemento) { angular.element(document).injector().invoke(function ($compile) { var app = angular.element(elemento).scope(); $compile(elemento)(app) }) }
  })
})();