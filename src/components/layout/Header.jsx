import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-red-600">E-Shop</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-red-500">Home</a>
          <a href="/category/all" className="hover:text-red-500">Shop</a>
          <a href="/wishlist" className="hover:text-red-500">Wishlist</a>
          <a href="/cart" className="hover:text-red-500">Cart</a>
          <a href="/account" className="hover:text-red-500">Account</a>
          <Button variant="outline" size="sm">Click</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header