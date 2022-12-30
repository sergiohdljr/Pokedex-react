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

// preencher id do pokemon com 0 e # 7 => #007
export const fillId = (number) => {
   return `#${number.toString().padStart(3,'0')}`
}

// formatar altura do pokemon 
export const alturaPokemon = (altura) =>{
   if(altura.toString().length === 1){
      return `0.${altura} m`
   }else{
      return`${[...altura.toString()]} m`
   }
}

// formatar peso pokemon 
export const pesoPokemon = (peso) => {
  return parseInt(peso.toString().slice(0,-1)).toFixed(1)
}