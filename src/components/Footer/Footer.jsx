import React from 'react'
import Icon from '../../components/Footer/icon.svg'

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Icon} className="h-10 w-10 mb-2" alt="" />
          <p className="text-2xl font-bold">
            H E R O 
            <br />
            I O
          </p>
        </aside>

        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title mb-2">Social</h6>
          <div className="flex gap-4">
            <a href="https://x.com/ProgrammingHero" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-.67 9.866 9.866 0 0 1-3.127 1.195 4.922 4.922 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.66 4.629a4.922 4.922 0 0 0 1.512 6.574A4.909 4.909 0 0 1 2.228 10v.062a4.925 4.925 0 0 0 3.95 4.827 4.912 4.912 0 0 1-2.227.084 4.923 4.923 0 0 0 4.6 3.419 9.849 9.849 0 0 1-6.101 2.083 13.966 13.966 0 0 0 7.55 2.211c9.123 0 14.075-7.59 14.075-14.195 0-.216-.003-.432-.01-.647A10.04 10.04 0 0 0 24 4.557z"></path></svg>
            </a>
            <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.97 4.192-3.969 11.237 0 15.23 1.258.085 2.479.127 3.658.127 1.177 0 2.399-.042 3.656-.127 1.257-.085 2.502-.213 3.72-.387 1.218-.175 2.404-.418 3.555-.728.08-.024.159-.053.237-.085 3.97-4.192 3.969-11.237 0-15.23zm-6.615 9.816v-6l4 3.001-4 2.999z"></path></svg>
            </a>
            <a href="https://www.facebook.com/programmingHero/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3h-3.479c-4.435 0-5.521 2.359-5.521 4.735v2.265z"></path></svg>
            </a>
          </div>
        </nav>
      </div>

      <div className="mt-8 border-t border-neutral-content/20 pt-4 text-center text-sm">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by <b>PROGRAMMING HERO TEAM</b>.</p>
      </div>
    </footer>
  )
}

export default Footer
