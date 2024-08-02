"use client"

import { Button } from "flowbite-react";
import { NavItem } from "./nav";
import { TableComponent } from "./table";
import { useTour, TourProvider } from '@reactour/tour';


const TestPage = () => {
  const { setIsOpen } = useTour()

  return (
    <div className="h-screen">

      <NavItem />
      <div className="w-1/2 mx-auto mt-36">
        <div className="w-full inline-flex justify-between items-end mb-4">
          <Button color="blue" className="my-first-step" data-tour="1">Blue</Button>
          <Button color="dark" className="my-other-step" onClick={() => setIsOpen(true)} >Dark</Button>
        </div>
        <TableComponent />
      </div>
    </div>
  )
}


const AppWrapper = () => {
  const steps = [
    {
      selector: '[data-tour="1"]',
      content: "text 1",
      highlightedSelectors: [".modal"],
      mutationObservables: [".modals"]
    },
    { selector: '[data-tour="2"]', content: "text 2" },
    { selector: '[data-tour="3"]', content: "text 3" }
  ];
  return (
    <TourProvider steps={steps}>
      <TestPage />
    </TourProvider>
  )
}

export default AppWrapper;