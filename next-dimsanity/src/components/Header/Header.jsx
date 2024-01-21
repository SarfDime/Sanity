import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Dimsanity</Link>
      </nav>
    </header>
  )
}

export default Header