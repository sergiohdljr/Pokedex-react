import {useParams} from 'react-router-dom'

export const DetailsPage = () => {
  const {nome} = useParams()
   
  return <h1>{nome}</h1>;
};
