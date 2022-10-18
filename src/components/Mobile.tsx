import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline/index';
import { Fragment } from 'react';

type Props = {
  links: { name: string; href: string }[];
};

const Mobile = ({ links }: Props) => {
  return (
    <Popover className="relative flex w-full justify-end sm:hidden">
      <Popover.Button className="focus:outline-none">
        <Bars3Icon className="mr-5 mt-5 h-7 w-7" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="shadow-primary absolute inset-x-1 top-0 m-2 rounded-md p-2">
          <div className="flex min-w-min flex-col bg-white">
            <div className="flex items-center justify-between">
              <div>logo</div>
              <Popover.Button>
                <XMarkIcon className="h-6 w-6" />
              </Popover.Button>
            </div>
            <div className="mt-4 flex flex-col">
              {links.map((link) => (
                <a
                  className="hover:bg-gray py-1 pl-1"
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Mobile;
