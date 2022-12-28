import CardStyles from "./CardStyles";

export const PokeCard = ({tipo,id,nome,pic}) => {
  return (
      <CardStyles tipo={tipo}>
      <div className="Card__id">
        <h4>#{id}</h4>
      </div>
      <figure>
        <img src={pic} alt="" />
      </figure>
      <div className="Card__footer">
          <h4>{nome}</h4>
      </div>
    </CardStyles>
  );
};