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

// dicionário status
export const statName = (stat) =>{
 if(stat === 'hp'){
   return stat.toUpperCase()
 } 
 if(stat === 'attack'){
   return 'ATK'
 }
 if(stat === 'defense'){
   return 'DEF'
 }
 if(stat === 'special-attack'){
   return 'SATK'
 }
 if(stat === 'special-defense'){
   return 'SDEF'
 }
 if(stat === 'speed'){
   return 'SPD'
 }
}

// função para fazer o fetch dos dados dos pokemons 
export const fetchPokemon = async (url) => {
    const req = await fetch(url);
    const resp = await req.json();
    const urls = resp.results.map(
      async (resp) => await fetch(resp.url).then((results) => results.json())
    );
    const resultados = await Promise.all(urls);
    return resultados
  };

  // fetch details 
  export const fetchPokemonDetails = async (page, url) => {
    const pokemon = await fetch(`${url}/pokemon/${page}/`);
    const resultado = await pokemon.json();
    return resultado;
  };

  export const fetchPokemonSpecies = async (page, url) => {
    const pokemon = await fetch(`${url}/pokemon-species/${page}/`);
    const resultado = await pokemon.json();
    return resultado;
  };
  
  const bola = "adidas"
  // bola.replace()

  export const formatarText = (text) =>{
    if(text?.includes("\f")){
      return text?.replace("\f",' ')
    }else{
      return text
    }
  } 