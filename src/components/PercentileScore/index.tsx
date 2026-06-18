import { Card } from "antd";
import ProgressBar, { type IProgressBarItem } from "../shared/ProgressBar";

const PercentileScore: React.FC<{ barData: IProgressBarItem[] }> = ({barData}) => {
  return (
    <Card
      title={
        <span className="card-header-title">
          BASIC Percentile Scores (SMS PassProperty, Apr 2026)
        </span>
      }
      bordered={false}
      className="safety-card"
    >
      <ProgressBar data={barData} showName={true} />
    </Card>
  );
};

export default PercentileScore;