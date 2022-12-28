import CardStyles from "./CardStyles";
import {Link} from 'react-router-dom'

export const PokeCard = ({tipo,id,nome,pic}) => {
  return (
    <Link to={`/details/${nome.toLowerCase()}`}>
    <CardStyles tipo={tipo}>
      <div className="Card__id">
        <h4>{id}</h4>
      </div>
      <figure>
        <img src={pic} alt="" />
      </figure>
      <div className="Card__footer">
          <h4>{nome}</h4>
      </div>
    </CardStyles>
    </Link>
  );
};