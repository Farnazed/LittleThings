import { React } from 'react';
import AchievementCard from './AchievementCard';

const Achievement = () => {
  let items = [0, 1];
  return (
    <div>
      <div className="row">
        <div className="col">Add Achievement Category :</div>
        <div className="col">
          <button type="button" className="btn btn-primary rounded">
            +
          </button>
        </div>
      </div>

      {items.map((item) => {
        return <AchievementCard />;
      })}
    </div>
  );
};

export default Achievement;
