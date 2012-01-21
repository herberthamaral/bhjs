var viewModel = {
    nome: ko.observable(''),
    sobrenome: ko.observable(''),
    onTwitter: ko.observable(false),
    twitter: ko.observable(''),
    submit: function(){
        alert(JSON.stringify(ko.toJS(viewModel)));
    }.bind(this)
};             
ko.applyBindings(viewModel, document.getElementById('ko-exemplo1'));
