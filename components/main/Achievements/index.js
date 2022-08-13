import { FaAward } from "react-icons/fa";

const Achievments = (props) => {
  return (
    <div>
      <h2>Achievments</h2>
      <div className="bg-slate-50 dark:bg-gray-900 rounded-lg px-6">
        {AchievmentsText.map((i, ind) => (
          <AchievmentBox key={ind} text={i} />
        ))}
      </div>
    </div>
  );
};

const AchievmentBox = (props) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-[24px] md:text-[30px]">
        <FaAward />
      </div>
      <div className="dark:bg-gray-900 dark:border-gray-900">{props.text}</div>
    </div>
  );
};
const AchievmentsText = [
  <p>
    Secured IPFS, The Graph, and chainlink bounties worth $2000USD in{" "}
    <span className="DarkBlue">ETHernals 2022 Hackathon</span>.
  </p>,
  <p>
    Secured 2nd Position in{" "}
    <span className="DarkBlue">IIT Delhi Blockchain Hackathon</span>.
  </p>,
  <p>
    Organized more than 10 events as Joint Secretary of a Technical Society
    ‘Manan’ having 100+members and given a{" "}
    <span className="DarkBlue">Tech Talk on Kickstarting Web Development</span>.
  </p>,
  <p>
    Docthereum app is listed in the{" "}
    <span className="DarkBlue">Hall of Fame on the Filecoin website</span>.
  </p>,
];
export default Achievments;
