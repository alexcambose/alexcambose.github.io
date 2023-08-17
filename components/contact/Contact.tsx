import { Panel } from '../baseComponents/panel/Panel';

export const Contact = () => {
  return (
    <>
      <a className="group" href="mailto:alexcambose1@gmail.com">
        <Panel className="hover:opacity-80 hover:-translate-y-0.5 hover:shadow-sm shadow-xl ring-inset dark:ring-slate-600 ring-2">
          <h2 className="group-hover:dark:text-primary-dark text-2xl font-bold mb-4 dark:text-slate-50 transition">
            Get In Touch
          </h2>
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
