import type { WorkItem } from '../../types/Work';
import './InfoCard.css';

interface InfoCardProps {
    item: WorkItem;
}

const InfoCard: React.FC<InfoCardProps> = ({ item }) => {
  return (
    <div className="InfoCard">
      <div className='Info-card-img'>
        <img src={item.icon} alt="" />
      </div>
      <div className="InfoCardDesc">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;