export default function useValidation() {
  function isRequired(message = 'Campo obrigatório!') {
    return (val) => !!val || message
  }

  function isValidEmail(message = 'Email inválido!') {
    const regexRule =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return (val) => regexRule.test(val) || message
  }

  function atLeastOneUpperCase(message = 'Pelo menos uma letra maiúscula!') {
    const regexRule = /(?=.*?[A-Z])/
    return (val) => regexRule.test(val) || message
  }

  function atLeastOneLowerCase(message = 'Pelo menos uma letra minúscula!') {
    const regexRule = /(?=.*?[a-z])/
    return (val) => regexRule.test(val) || message
  }

  function atLeastOneDigit(message = 'Pelo menos um dígito!') {
    const regexRule = /(?=.*?[0-9])/
    return (val) => regexRule.test(val) || message
  }

  function atLeastOneSpecialCharacter(message = 'Pelo menos um caractere especial!') {
    const regexRule = /(?=.*?[#?!@$%^&*-])/
    return (val) => regexRule.test(val) || message
  }

  function minLength(length, message = 'No minímo de %% caracteres!') {
    return (val) => val.length >= length || message.replace('%%', length)
  }

  function maxLength(length, message = 'No máximo de && caracteres!') {
    return (val) => val.length <= length || message.replace('&&', length)
  }

  function onlyNameAndLastname(message = 'Somente o nome e o sobrenome!') {
    const regexRule = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
    return (val) => regexRule.test(val) || message
  }

  const rules = {
    isRequired,
    isValidEmail,
    atLeastOneUpperCase,
    atLeastOneLowerCase,
    atLeastOneDigit,
    atLeastOneSpecialCharacter,
    minLength,
    maxLength,
    onlyNameAndLastname
  }

  return {
    rules
  }
}
