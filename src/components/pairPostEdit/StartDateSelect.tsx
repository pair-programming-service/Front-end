import { useRecoilState } from "recoil";
import { startDateSelect } from "state/atoms/editOptionAtom";

const StartDateSelect = () => {
  const [startDate, setStartDate] = useRecoilState(startDateSelect);
  return (
    <div>
      <input
        type="date"
        className="border p-2 rounded-sm"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
};

export default StartDateSelect;
