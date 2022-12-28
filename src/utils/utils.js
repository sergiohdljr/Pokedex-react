// ajustar primeiras letras maiúsculas nome => Nome
export const NomeUpperCase = (nome) =>{
 const primeiraletra = nome[0].toUpperCase()
 const resto = nome.substring(1)
 return `${primeiraletra}${resto}`
}

// Normalizar nomes sem '-' nome-f => nome
export const NormalizeNome = (nome) => {
    if(!nome.includes('-')){
      return nome
    }else{
       return nome.substring(0,nome.indexOf('-'))
    }
} 

export const fillId = (number) => {
   return `#${number.toString().padStart(3,'0')}`
}

const nome = 55
// nome.