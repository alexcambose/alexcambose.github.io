import { Button } from '../baseComponents/button/Button';
import { Panel } from '../baseComponents/panel/Panel';

export const Contact = () => {
  return (
    <a href="mailto:alexcambose1@gmail.com">
      <Panel className="hover:opacity-80 hover:translate-y-0.5">
        <h2 className="text-2xl font-bold mb-4 dark:text-slate-50">Get In Touch</h2>
        <p className="dark:text-slate-100">
          Got a challenge? Let&apos;s collaborate! I&apos;m always eager to dive into new projects
          and turn ideas into realities.
        </p>
      </Panel>
    </a>
  );
};
