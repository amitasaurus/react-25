import Accordion from '../components/Accordion';
import { accordionData } from '../utils/data';
function route() {
  return (
    <div>
      <Accordion className="border rounded border-slate-200 w-[720px] my-8">
        {accordionData.map((e, i) => (
          <div key={i} title={e[0]}>
            {e[1]}
          </div>
        ))}
      </Accordion>
    </div>
  );
}

export default route;
