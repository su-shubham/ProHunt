import { Navbar} from 'flowbite-react'
import { Button } from 'flowbite-react'
import React from 'react'
import { IconArrowNarrowRight } from '@tabler/icons';

export default function Nav() {
  return(
    <div className="w-4/4 font-sans sticky">
    <Navbar>
      <React.Fragment key=".0">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            alt="Flowbite Logo"
            className="h-6 mr-3 sm:h-9"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Pro\Hunt
          </span>
        </Navbar.Brand>
        <div className="flex gap-3 md:order-2">
        <Button>
            Sign in
          </Button>
          <Button>
            Join Now
          <IconArrowNarrowRight
          size={20} // set custom `width` and `height`
          stroke={3}  // set `stroke-width`
          strokeLinejoin="miter"  />
          </Button>
          <Navbar.Toggle /> 
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="/navbars"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </React.Fragment>
    </Navbar>
  </div>
)   
}
