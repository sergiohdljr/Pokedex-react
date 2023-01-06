import CardStyles from "./CardStyles";
import {Link} from 'react-router-dom'
import {fillId} from '../../utils/utils'

export const PokeCard = ({tipo,id,nome,pic}) => {
  return (
    <Link to={`/${id}`}>
      <CardStyles tipo={tipo}>
        <header className="Card__id">
          <h4>{fillId(id)}</h4>
        </header>
        <figure>
          <img src={pic} alt="" />
        </figure>
        <footer className="Card__footer">
          <h4>{nome}</h4>
        </footer>
      </CardStyles>
    </Link>
  );
};