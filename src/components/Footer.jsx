import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src="/logo.png" alt="" />
          <p>
            Model Stack
            <br />
            AI Model Inventory Manager
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Jobs</Link>
          <Link to="/" className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">GitHub repo's</h6>
          <Link to="/" className="link link-hover">Client Site</Link>
          <Link to="/" className="link link-hover">Server Site</Link>
        </nav>
      </footer>
      <aside className='flex-center my-4'>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </div>
  )
}

export default Footer