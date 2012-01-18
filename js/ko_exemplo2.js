function Pessoa(){
    this.nome = ko.observable('');
    this.sobrenome = ko.observable('');
    this.twitter = ko.observable('')
    this.telefones = ko.observableArray();
}
var PessoaViewModel = function() {
    this.pessoas= ko.observableArray();
    this.nome= ko.observable('');
    this.sobrenome= ko.observable('');
    this.twitter= ko.observable('');
    this.onTwitter= ko.observable(false);
    this.adicionar= function(){
        var p = new Pessoa();
        p.nome(this.nome());
        p.sobrenome(this.sobrenome());
        if (this.onTwitter())
            p.twitter(this.twitter());
        this.pessoas.push(p);
    }.bind(this);
    this.remover = function(value){
        this.pessoas.remove(value);
        return false;
    }.bind(this);
}
var pessoas_view_model = new PessoaViewModel();
ko.applyBindings(pessoas_view_model, document.getElementById('ko-exemplo2'));
