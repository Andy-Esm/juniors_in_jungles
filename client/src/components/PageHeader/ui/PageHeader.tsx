import { Button, Navbar, TextInput } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
export const PageHeader = () => {
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
      <Link
        className='self-center whitespace-nowrap text-small sm:text-xl font-semibold dark:text-white'
        to='/'
      >
        Juniors In
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          {' '}
          JNGL
        </span>
      </Link>
      <form>
        <TextInput
          className='hidden lg:inline'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          type='text'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden bg-slate-50' color='grey'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='grey'>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/sign-in'} as={'div'}>
          <Link to='/sign-in'>Sign In</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/sign-up'} as={'div'}>
          <Link to='/sign-up'>Sign Up</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
