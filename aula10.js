// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g

// Não número
const nãoNumerosRegEx= /\D/

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

// Valida CPF
const cpfRegExp = /(?: \d{3}\.){2}\d{3}-\d{2}/g

// Valida telefones
const telefoneRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/gm

//Validar senhas fortes
const validaSenhasFortes = /^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/gm

/*
validação de email expressão regular https://emailregex.com/
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
/[^\s]+@[^\s<>]+\.[^\s]+(\w+)/gm (coloque o astericos antes do /gm)
/^[^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+$/gm
*/
