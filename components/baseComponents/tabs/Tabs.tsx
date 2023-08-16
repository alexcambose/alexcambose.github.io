'use client';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';

interface TabsProps {
  data: {
    title: string;
    content: ReactNode;
  }[];
}

const TabPanel = ({ selected }: { selected: boolean }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(0);
    setTimeout(() => {
      setHeight(contentRef.current?.clientHeight || 200);
    }, 1);
  }, [selected]);

  return (
    <div
      className={classNames({ 'transition-all duration-1000': height > 0, 'h-0': height === 0 })}
      style={{ height: height && height + 'px' }}
      ref={contentRef}
    >
      aaa {height}
    </div>
  );
};

export const Tabs = ({ data }: TabsProps) => {
  return (
    <Tab.Group vertical>
      <Tab.List>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button className={selected ? 'bg-blue-500 text-white' : 'bg-white text-black'}>
              Tab 1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <button className={selected ? 'bg-blue-500 text-white' : 'bg-white text-black'}>
              Tab 1
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="w-auto transition-all">
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <div className={classNames('h-0 ', { 'h-fit transition-all': selected })}>aaaa</div>
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
