'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email,
        password,
      });

      setSuccess(response.data.message || 'Login successful! Redirecting...');
      
      // Store user data (you might want to use localStorage or context)
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect to dashboard after 1.5 seconds using Next.js router
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } catch (err) {
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (axios.isAxiosError(err)) {
        // Try to get error detail from response
        if (err.response?.data?.detail) {
          const detail = err.response.data.detail;
          if (typeof detail === 'string') {
            errorMessage = detail;
          } else if (typeof detail === 'object') {
            errorMessage = JSON.stringify(detail);
          }
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        } else if (err.message) {
          errorMessage = err.message;
        }

        // Handle specific HTTP status codes
        if (err.response?.status === 401) {
          setError(errorMessage || 'Invalid email or password. Please check your credentials.');
        } else if (err.response?.status === 403) {
          setError(errorMessage || 'Your account has been deactivated.');
        } else if (err.response && err.response.status >= 500) {
          setError('Server error. Please try again later.');
        } else {
          setError(errorMessage);
        }
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative Interior Design Elements */}
      <div className="absolute top-10 right-10 opacity-10 hidden md:block">
        <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="40" stroke="white" strokeWidth="2" />
          <rect x="60" y="20" width="25" height="50" stroke="white" strokeWidth="2" />
          <circle cx="35" cy="60" r="15" stroke="white" strokeWidth="2" />
          <line x1="10" y1="70" x2="85" y2="70" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-10 opacity-10 hidden md:block">
        <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="20" height="20" stroke="white" strokeWidth="2" />
          <rect x="45" y="15" width="35" height="35" stroke="white" strokeWidth="2" />
          <circle cx="30" cy="60" r="10" stroke="white" strokeWidth="2" />
          <line x1="20" y1="80" x2="70" y2="80" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md px-4 sm:px-0">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🎨</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">DesignAI</h1>
            <p className="text-gray-300 text-sm">Welcome back to your design studio</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
              <p className="text-green-200 text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {success}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-300 transition"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-400 bg-white/10 cursor-pointer"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm font-medium transition flex items-center justify-center gap-2">
              <span>🔵</span> Google
            </button>
            <button className="py-2.5 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white text-sm font-medium transition flex items-center justify-center gap-2">
              <span>🔗</span> Apple
            </button>
          </div>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-300 text-sm">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                Sign up here
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 text-center mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
