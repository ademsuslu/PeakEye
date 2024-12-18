import BlogAds from '@/components/shared/blog-ads'
import BreadCrumps from '@/components/shared/breadCrumps'
import Hero from '@/components/shared/Hero'
import LastPostList from '@/components/shared/last-post-list'
import React from 'react'

export default function BlogPage() {
  return (
    <div>
      <BreadCrumps/>
      <div className="mt-12"/>
      <Hero/>
      <div className="mt-12"/>
      <LastPostList/>
      <div className="mt-12"/>
      <BlogAds/>
    </div>
  )
}
