import Portal from '../components/Portal';
import Tab from '../components/Tab';
import { tabData } from '../utils/data';

export default function Page() {
  return (
    <Portal>
      <Tab className="w-1/2 rounded-lg shadow-lg h-80">
        {tabData.map((e) => (
          <div title={e.title} key={e.title}>
            {e.content}
          </div>
        ))}
      </Tab>
    </Portal>
  );
}
