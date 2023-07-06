import {Home,Search,Library} from 'lucide-react';

const Nav  = () => {

  const menu = [
    {
      title:'Home',
      icon: <Home/>
    },
    {
      title:'Search',
      icon: <Search/>
    },
    {
      title:'Your Library',
      icon: <Library/>
    },
  ]

  const icons = [
    {
      color: 'bg-red-400 h-3 w-3 rounded-full'
    },
    {
      color: 'bg-yellow-400 h-3 w-3 rounded-full'
    },
    {
      color: 'bg-green-400 h-3 w-3 rounded-full'
    }
  ]
  const playLists = [
    {
      title: 'Michael Jackson'
    },
    {
      title: 'Bruno Mars'
    },
    {
      title: 'Juice World'
    }
  ]
    return (
      <>
        <div className='flex align-center gap-3 mt-2'>
           {
            icons.map((icon,idx)=>(
              <div key={idx} className={icon.color}/>
            ))
           }
        </div>

        <nav className='space-y-5 mt-10'>
           {
             menu.map((item,idx)=>(
              <a 
              className='flex item-center gap-4 text-sm font-semibold text-zinc-200'
              key={idx}
              >
                {item.icon}
                {item.title}
              </a>
             ))
           }
        </nav>

        <nav className='flex flex-col gap-5 mt-10 p-10 border-t border-zinc-800'>
           {
            playLists.map((playlist,idx)=>(
              <a key={idx} className='text-sm text-zinc-400 hover:text-zinc-100'>
                 {playlist.title}
              </a>
            ))
           }
         </nav>
      </>
    )
  }
  
  export default Nav;