import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

type Props = {};

export default function Page({}: Props) {
  const [open, setOpen] = useState(false);
  function toggle(): void {
    setOpen(!open);
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-100">
      <Button className="z-0" onClick={toggle} text="Open Dialog" />
      <Modal open={open} close={() => setOpen(!open)}>
        <div slot="headline">Demon Slayer: Kimetsu no Yaiba</div>
        <div slot="content">
          In Taishō era Japan, a secret organization known as the "Demon Slayer
          Corps" has waged a war against demons for centuries. Demons are former
          humans who possess supernatural abilities such as enhanced strength,
          rapid regeneration, and unique powers referred to as "Blood Demon
          Arts". Demons can only be killed if they are exposed to direct
          sunlight, decapitated with weapons crafted from an alloy called
          Nichirin, or injected with a poison extracted from wisteria flowers.
        </div>
        <div slot="actions">
          <Button
            text="Watch now"
            className="mr-2 bg-indigo-500 hover:bg-indigo-600"
            onClick={() =>
              window.open('https://www.netflix.com/in/title/81091393')
            }
          />
          <Button
            text="Exit"
            className="bg-rose-500 hover:bg-rose-600"
            onClick={() => setOpen(!open)}
          />
        </div>
      </Modal>
    </div>
  );
}
