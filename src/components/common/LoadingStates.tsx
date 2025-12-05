/**
 * Loading States Components
 * 
 * Provides accessible loading indicators and skeleton screens
 * for mobile-optimized user experience on slow connections
 */

import React from 'react';

/**
 * Spinner - Simple loading spinner with accessibility
 */
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export function Spinner({ size = 'md', className = '', label = 'Loading...' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div className={`inline-block ${className}`} role="status" aria-label={label}>
      <div
        className={`${sizeClasses[size]} border-histown-primary border-t-transparent rounded-full animate-spin`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * SkeletonBox - Basic skeleton loading box
 */
export interface SkeletonBoxProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
}

export function SkeletonBox({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '', 
  rounded = true 
}: SkeletonBoxProps) {
  return (
    <div
      className={`${width} ${height} ${rounded ? 'rounded' : ''} bg-gray-200 animate-pulse ${className}`}
      aria-hidden="true"
    />
  );
}

/**
 * SkeletonText - Skeleton for text content
 */
export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className = '' }: SkeletonTextProps) {
  return (
    <div className={`space-y-3 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBox
          key={index}
          width={index === lines - 1 ? 'w-3/4' : 'w-full'}
          height="h-4"
        />
      ))}
    </div>
  );
}

/**
 * SkeletonCard - Skeleton for card components
 */
export interface SkeletonCardProps {
  className?: string;
  showImage?: boolean;
}

export function SkeletonCard({ className = '', showImage = true }: SkeletonCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-6 ${className}`} aria-hidden="true">
      {showImage && (
        <SkeletonBox width="w-full" height="h-48" className="mb-4" />
      )}
      <SkeletonBox width="w-3/4" height="h-6" className="mb-3" />
      <SkeletonText lines={3} />
    </div>
  );
}

/**
 * TestimonialSkeleton - Skeleton for testimonial cards
 */
export function TestimonialSkeleton() {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 min-h-64 sm:min-h-80"
      role="status"
      aria-label="Loading testimonial"
    >
      {/* Header with avatar and name */}
      <div className="flex items-center mb-4">
        <SkeletonBox width="w-8" height="h-8" className="mr-3" rounded />
        <SkeletonBox width="w-32" height="h-5" />
      </div>
      
      {/* Star rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonBox key={i} width="w-5" height="h-5" className="mr-1" />
        ))}
      </div>
      
      {/* Text content */}
      <SkeletonText lines={4} />
    </div>
  );
}

/**
 * SectionSkeleton - Skeleton for full page sections
 */
export interface SectionSkeletonProps {
  className?: string;
  showTitle?: boolean;
}

export function SectionSkeleton({ className = '', showTitle = true }: SectionSkeletonProps) {
  return (
    <section className={`py-12 sm:py-16 md:py-24 ${className}`} aria-hidden="true">
      <div className="max-w-6xl mx-auto px-4 sm:px-12 lg:px-20">
        {showTitle && (
          <div className="text-center mb-8">
            <SkeletonBox width="w-64" height="h-10" className="mx-auto mb-4" />
            <SkeletonBox width="w-96" height="h-6" className="mx-auto" />
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </section>
  );
}

/**
 * FormLoadingOverlay - Loading overlay for form submissions
 */
export interface FormLoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export function FormLoadingOverlay({ isLoading, message = 'Submitting...' }: FormLoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <div
      className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg z-50"
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <Spinner size="lg" label={message} />
      <p className="mt-4 text-gray-700 font-medium">{message}</p>
    </div>
  );
}

/**
 * ImageLoadingPlaceholder - Placeholder for loading images
 */
export interface ImageLoadingPlaceholderProps {
  aspectRatio?: string;
  className?: string;
}

export function ImageLoadingPlaceholder({ 
  aspectRatio = 'aspect-video', 
  className = '' 
}: ImageLoadingPlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading image"
    >
      <svg
        className="w-12 h-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
      <span className="sr-only">Loading image</span>
    </div>
  );
}

/**
 * ProgressBar - Progress indicator for multi-step processes
 */
export interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  label?: string;
}

export function ProgressBar({ progress, className = '', label }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  return (
    <div className={`w-full ${className}`} role="progressbar" aria-valuenow={clampedProgress} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-histown-accent to-histown-primary h-full transition-all duration-300 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {label && (
        <p className="text-sm text-gray-600 mt-2 text-center">{label}</p>
      )}
    </div>
  );
}

/**
 * PulsingDots - Animated dots for loading states
 */
export interface PulsingDotsProps {
  className?: string;
  label?: string;
}

export function PulsingDots({ className = '', label = 'Loading' }: PulsingDotsProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`} role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
      <div className="w-2 h-2 bg-histown-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} aria-hidden="true" />
      <div className="w-2 h-2 bg-histown-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} aria-hidden="true" />
      <div className="w-2 h-2 bg-histown-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} aria-hidden="true" />
    </div>
  );
}

/**
 * LoadingButton - Button with integrated loading state
 */
export interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function LoadingButton({ 
  isLoading, 
  loadingText = 'Loading...', 
  children, 
  disabled,
  className = '',
  ...props 
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`relative ${className} ${isLoading ? 'cursor-wait' : ''}`}
      aria-busy={isLoading}
    >
      <span className={isLoading ? 'invisible' : ''}>{children}</span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner size="sm" label={loadingText} />
          <span className="ml-2">{loadingText}</span>
        </span>
      )}
    </button>
  );
}
