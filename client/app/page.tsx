'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Paintbrush, Armchair, Leaf, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Paintbrush className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                DesignAI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition">
                Features
              </a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition">
                About
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login">
                <button className="text-gray-700 hover:text-purple-600 font-medium transition">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t">
              <a href="#features" className="block py-2 text-gray-700 hover:text-purple-600">
                Features
              </a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-purple-600">
                Services
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600">
                About
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login">
                  <button className="text-gray-700 font-medium">Login</button>
                </Link>
                <Link href="/signup">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Space with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of interior design. Our AI-powered tools help you visualize, plan, and transform any room into your dream space in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 rounded-2xl"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-blue-300 rounded-lg mx-auto mb-4 opacity-50"></div>
                <p>Interior Design Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our suite of AI-powered design tools tailored to transform every aspect of your interior
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Wall Painting */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                <Paintbrush className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Wall Painting
              </h3>
              <p className="text-gray-600 mb-6">
                Visualize your walls in any color or pattern. Our AI generates photorealistic previews to help you choose the perfect palette for your space.
              </p>
              <a href="#" className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Furniture Placement */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <Armchair className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Furniture Placement
              </h3>
              <p className="text-gray-600 mb-6">
                Optimize your room layout with intelligent furniture placement suggestions. Maximize space and create the perfect flow for your home.
              </p>
              <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 3: Plants & Decor */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                AI Plants & Decor
              </h3>
              <p className="text-gray-600 mb-6">
                Add life and character to your rooms with AI-suggested plants and decorative elements that complement your design perfectly.
              </p>
              <a href="#" className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of homeowners and designers using DesignAI to create beautiful, personalized interiors
          </p>
          <Link href="/signup">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
              Start Designing Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Paintbrush className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">DesignAI</span>
          </div>
          <p className="text-gray-400 mb-8">
            Transforming interiors with the power of artificial intelligence
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-gray-400">
            <p>&copy; 2026 DesignAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
