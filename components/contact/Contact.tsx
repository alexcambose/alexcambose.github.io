import { Panel } from '../baseComponents/panel/Panel';

export const Contact = () => {
  return (
    <>
      <a className="group" href="mailto:alexcambose1@gmail.com">
        <Panel className="shadow-xl ring-2 ring-inset hover:-translate-y-0.5 hover:opacity-80 hover:shadow-sm dark:ring-slate-600">
          <h3 className="mb-4 text-2xl font-bold transition dark:text-slate-50 group-hover:dark:text-primary-dark">
            Get In Touch
          </h3>
          <p className="dark:text-slate-100">
            Got a challenge? Let&apos;s collaborate! I&apos;m always eager to dive into new projects
            and turn ideas into realities.
          </p>
        </Panel>
      </a>
      <p className="mt-8">
        Email: <strong>alexcambose1@gmail.com</strong>
      </p>
    </>
  );
};
