import HeaderStyles from './HeaderStyles'
import pokeball from '../../assets/Pokeball.svg'

export const Header = () =>{
   return(
    <HeaderStyles>
      <img src={pokeball} />
      <h1>Pokédex</h1>
    </HeaderStyles>
   )
}