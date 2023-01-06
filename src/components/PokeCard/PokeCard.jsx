import CardStyles from "./CardStyles";
import {Link} from 'react-router-dom'
import {fillId} from '../../utils/utils'

export const PokeCard = ({tipo,id,nome,pic}) => {
  return (
    <Link to={`/details/${id}/`}>
      <CardStyles tipo={tipo}>
        <div className="Card__id">
          <h4>{fillId(id)}</h4>
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